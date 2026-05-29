import { AppConfig } from '~/app.config';
import type { Locale } from '~/locales';

type Schema = Record<string, unknown>;

const abs = (path: string): string =>
  new URL(path, AppConfig.domain).toString();

const PERSON_ID = `${AppConfig.domain}/#person`;
const WEBSITE_ID = `${AppConfig.domain}/#website`;

/** Entité principale du site : la personne derrière le portfolio. */
export const personSchema = (locale: Locale): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: AppConfig.author.name,
  url: AppConfig.author.url,
  image: abs(AppConfig.author.image),
  email: AppConfig.author.email,
  jobTitle: AppConfig.author.jobTitle[locale],
  sameAs: AppConfig.author.sameAs,
});

/** Le site lui-même, publié par la personne. */
export const websiteSchema = (locale: Locale): Schema => {
  const meta = AppConfig.metadata[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: meta.canonical,
    name: AppConfig.siteName,
    description: meta.description,
    inLanguage: locale,
    publisher: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
  };
};

/** Fil d'Ariane balisé à partir d'une liste { name, url }. */
export const breadcrumbSchema = (
  items: { name: string; url: string }[]
): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/** Page projet/job : œuvre créative attribuée à la personne. */
export const creativeWorkSchema = (input: {
  locale: Locale;
  type?: 'CreativeWork' | 'Article';
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  keywords?: string[];
}): Schema => ({
  '@context': 'https://schema.org',
  '@type': input.type ?? 'CreativeWork',
  name: input.name,
  headline: input.name,
  description: input.description,
  url: input.url,
  inLanguage: input.locale,
  ...(input.image ? { image: abs(input.image) } : {}),
  ...(input.datePublished ? { datePublished: input.datePublished } : {}),
  ...(input.keywords?.length ? { keywords: input.keywords.join(', ') } : {}),
  author: { '@id': PERSON_ID },
  isPartOf: { '@id': WEBSITE_ID },
  mainEntityOfPage: input.url,
});
