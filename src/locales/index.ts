import en from './dictionaries/en';
import fr from './dictionaries/fr';

export const LOCALES = ['fr', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'fr';
export type Locale = (typeof LOCALES)[number];

const dictionaries = { en, fr } satisfies Record<Locale, unknown>;
type Dictionary = (typeof dictionaries)[Locale];

const localeSet = new Set<string>(LOCALES);
export const isLocale = (value: string | undefined): value is Locale =>
  !!value && localeSet.has(value);

export const normalizeLocale = (value: string | undefined): Locale =>
  isLocale(value) ? value : DEFAULT_LOCALE;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Paths<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string
          ? T[K] extends object
            ? K | Join<K, Paths<T[K], Prev[D]>>
            : K
          : never;
      }[keyof T]
    : never;

type Prev = [never, 0, 1, 2, 3, 4, 5];

export type TranslationKey = Paths<Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

const getByPath = (obj: unknown, path: string): unknown => {
  return path
    .split('.')
    .reduce<unknown>(
      (acc, key) =>
        acc &&
        typeof acc === 'object' &&
        key in (acc as Record<string, unknown>)
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      obj
    );
};

export function createScopedTranslator<S extends TranslationKey>(
  locale: Locale,
  scope: S
) {
  const dict = getDictionary(locale);
  const scopedRoot = getByPath(dict, scope);

  return function t(key: string): string {
    const value = getByPath(scopedRoot, key);
    if (typeof value !== 'string') {
      console.warn(
        `Missing translation for "${scope}.${key}" in locale "${locale}"`
      );
      return key;
    }
    return value;
  };
}
