import { type CollectionEntry, getCollection } from 'astro:content';

import type { Locale } from '~/locales';

export type ProjectEntry = CollectionEntry<'projects'>;

const splitId = (id: string) => {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
};

export const getProjectLocale = (entry: ProjectEntry): Locale =>
  splitId(entry.id).locale;

export const getProjectSlug = (entry: ProjectEntry): string =>
  splitId(entry.id).slug;

export const getProjects = async (locale: Locale): Promise<ProjectEntry[]> => {
  const all = await getCollection('projects', (entry) => {
    if (getProjectLocale(entry) !== locale) return false;
    if (import.meta.env.PROD && !entry.data.published) return false;
    return true;
  });

  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) {
      return Number(b.data.featured) - Number(a.data.featured);
    }
    const aOrder = a.data.order ?? Number.POSITIVE_INFINITY;
    const bOrder = b.data.order ?? Number.POSITIVE_INFINITY;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return b.data.year - a.data.year;
  });
};

export const getProject = async (
  locale: Locale,
  slug: string
): Promise<ProjectEntry | undefined> => {
  const projects = await getProjects(locale);
  return projects.find((p) => getProjectSlug(p) === slug);
};
