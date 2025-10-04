export const locales = ['uz', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uz';

export function getLocale(pathname: string): Locale {
  const segments = pathname.split('/');
  const locale = segments[1] as Locale;
  return locales.includes(locale) ? locale : defaultLocale;
}

export async function getDictionary(locale: Locale) {
  return import(`@/dictionaries/${locale}.json`).then((module) => module.default);
}
