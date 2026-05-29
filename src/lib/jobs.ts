import { getCollection, type CollectionEntry } from 'astro:content';

import type { Locale } from '~/locales';

export type JobEntry = CollectionEntry<'jobs'>;

const splitId = (id: string) => {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
};

export const getJobLocale = (entry: JobEntry): Locale =>
  splitId(entry.id).locale;

export const getJobSlug = (entry: JobEntry): string => splitId(entry.id).slug;

export const getJobs = async (locale: Locale): Promise<JobEntry[]> => {
  const all = await getCollection('jobs', (entry) => {
    if (getJobLocale(entry) !== locale) return false;
    if (import.meta.env.PROD && !entry.data.published) return false;
    return true;
  });

  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) {
      return Number(b.data.featured) - Number(a.data.featured);
    }
    const aDate = (a.data.endDate ?? a.data.startDate).getTime();
    const bDate = (b.data.endDate ?? b.data.startDate).getTime();
    return bDate - aDate;
  });
};

export const getJob = async (
  locale: Locale,
  slug: string
): Promise<JobEntry | undefined> => {
  const jobs = await getJobs(locale);
  return jobs.find((j) => getJobSlug(j) === slug);
};
