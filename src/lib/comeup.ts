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

/** Pinned fallback values (manual snapshot) — used if the scrape fails. */
const FALLBACK: ComeUpStats = {
  positiveReviews: 60,
  positiveRate: 100,
  isTopSeller: true,
  profileUrl: COMEUP_PROFILE_URL,
};

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Target markup: `<span>LABEL</span> <span class="fw-semibold">VALUE</span>`. */
const extractStat = (html: string, label: string): string | null => {
  const pattern = new RegExp(
    `<span>\\s*${escapeRegExp(label)}\\s*</span>\\s*<span class="fw-semibold">\\s*([^<]*?)\\s*</span>`,
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
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(COMEUP_PROFILE_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Accept-Language': 'en',
      },
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      return useFallback(`http_${response.status}`);
    }

    const html = await response.text();

    const positiveReviews = toNumber(extractStat(html, 'Positive reviews'));
    const negativeReviews = toNumber(extractStat(html, 'Negative reviews'));
    // Only "Top" is exposed publicly (the percentage is JS/auth-only), so the
    // acceptance rate is used solely to detect the Top-seller badge.
    const acceptanceRate = extractStat(html, 'Acceptance rate');

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
    return useFallback('network_error');
  }
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
