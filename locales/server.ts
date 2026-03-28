import { createI18nServer } from 'next-international/server';

const localeCodes = ['en', 'fr'] as const;

export type Locale = (typeof localeCodes)[number];

const locales = {
  en: () => import('./dictionaries/en'),
  fr: () => import('./dictionaries/fr'),
};

const localeSet = new Set<string>(localeCodes);

export const isLocale = (value: string): value is Locale =>
  localeSet.has(value);

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(locales);
