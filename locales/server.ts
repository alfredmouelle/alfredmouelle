import { createI18nServer } from 'next-international/server';

const locales = {
  en: () => import('./dictionaries/en'),
  fr: () => import('./dictionaries/fr'),
};

export type Locale = keyof typeof locales;

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(locales);
