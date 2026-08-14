/**
 * ComeUp seller stats.
 *
 * ComeUp has no public API: we scrape the profile page (server-rendered, the
 * stats sit in the raw HTML). Runs at build time (static output). On a network
 * failure / markup change we fall back to pinned values so the hero never
 * breaks. Refreshed via a scheduled rebuild (see the GitHub workflow).
 */

import { getResend } from '~/lib/resend';

export const COMEUP_PROFILE_URL = 'https://comeup.com/en/@alfredmouelle';

export interface ComeUpStats {
  positiveReviews: number;
  /** Derived from positive / (positive + negative). */
  positiveRate: number;
  isTopSeller: boolean;
  profileUrl: string;
}

/** Pinned fallback values (manual snapshot), used if the scrape fails. */
const FALLBACK: ComeUpStats = {
  positiveReviews: 62,
  positiveRate: 100,
  isTopSeller: true,
  profileUrl: COMEUP_PROFILE_URL,
};

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Target markup: `<dt>LABEL</dt> <dd>VALUE</dd>` or `<span>LABEL</span> <span class="fw-semibold">VALUE</span>`. */
const extractStat = (html: string, label: string): string | null => {
  const pattern = new RegExp(
    `<(?:dt|span|div)[^>]*>\\s*${escapeRegExp(label)}\\s*<\\/(?:dt|span|div)>\\s*<(?:dd|span|div)[^>]*>\\s*([^<]*?)\\s*<\\/(?:dd|span|div)>`,
    'i'
  );
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
};

const toNumber = (value: string | null): number | null => {
  if (value === null) return null;
  const parsed = Number.parseInt(value.replace(/[^\d]/g, ''), 10);
  return Number.isNaN(parsed) ? null : parsed;
};

/**
 * Reason for the fallback, to tell whether waiting is enough (transient
 * network/HTTP) or the parser needs updating (ComeUp markup changed).
 */
type FallbackReason = `http_${number}` | 'parse_incomplete' | 'network_error';

/** Logs + emails an alert, then returns the pinned snapshot. Never blocking. */
async function useFallback(reason: FallbackReason): Promise<ComeUpStats> {
  console.warn(`[comeup] Falling back to the pinned stats (${reason}).`);
  await notifyFallback(reason);
  return FALLBACK;
}

/**
 * Email alert (Resend) when the scrape fails. Silent if the key is not
 * configured (e.g. local build), and never interrupts the build.
 */
async function notifyFallback(reason: FallbackReason): Promise<void> {
  if (!(import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY)) return;
  try {
    await getResend().emails.send({
      to: 'alfredmouelle@gmail.com',
      from: 'Mon Portfolio <infos@resend.dev>',
      subject: '⚠️ ComeUp stats: fell back to the pinned snapshot',
      text:
        `Scraping the ComeUp stats failed during the build: ${reason}.\n` +
        `The hero is therefore showing the pinned values (src/lib/comeup.ts).\n\n` +
        `• http_403 / network_error: often transient, a rebuild may be enough.\n` +
        `• parse_incomplete: the markup of ${COMEUP_PROFILE_URL} changed, the parser needs updating.`,
    });
  } catch (error) {
    console.warn('[comeup] Could not send the alert e-mail.', error);
  }
}

async function scrapeComeUpStats(): Promise<ComeUpStats> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
  };

  let lastStatus: number | null = null;

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(COMEUP_PROFILE_URL, {
        signal: controller.signal,
        headers,
      }).finally(() => clearTimeout(timeout));

      if (!response.ok) {
        lastStatus = response.status;
        if (attempt === 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }
        return useFallback(`http_${response.status}`);
      }

      const html = await response.text();

      const positiveReviews =
        toNumber(extractStat(html, 'Positive reviews')) ??
        toNumber(extractStat(html, 'Avis positifs'));
      const negativeReviews =
        toNumber(extractStat(html, 'Negative reviews')) ??
        toNumber(extractStat(html, 'Avis négatifs'));
      // Only "Top" is exposed publicly (the percentage is JS/auth-only), so the
      // acceptance rate is used solely to detect the Top-seller badge.
      const acceptanceRate =
        extractStat(html, 'Acceptance rate') ??
        extractStat(html, 'Taux d’acceptation') ??
        extractStat(html, "Taux d'acceptation");

      if (positiveReviews === null || negativeReviews === null) {
        return useFallback('parse_incomplete');
      }

      const total = positiveReviews + negativeReviews;
      const positiveRate =
        total > 0 ? Math.round((positiveReviews / total) * 100) : 100;

      console.info(
        `[comeup] Live stats scraped: ${positiveReviews} reviews, ${positiveRate}% positive.`
      );

      return {
        positiveReviews,
        positiveRate,
        isTopSeller: /Top/i.test(acceptanceRate ?? '') || positiveRate === 100,
        profileUrl: COMEUP_PROFILE_URL,
      };
    } catch {
      if (attempt === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        continue;
      }
      return useFallback(lastStatus ? `http_${lastStatus}` : 'network_error');
    }
  }

  return useFallback('network_error');
}

/**
 * Memoized entry point: a single scrape (and at most one alert) per build,
 * shared across every rendered page/locale.
 */
let cached: Promise<ComeUpStats> | null = null;

export function getComeUpStats(): Promise<ComeUpStats> {
  cached ??= scrapeComeUpStats();
  return cached;
}
