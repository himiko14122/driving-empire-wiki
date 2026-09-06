import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Locales per research_report 3f: en + pt + de + ja
  locales: ['en', 'pt', 'de', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<string, string> = {
  en: 'English',
  pt: 'Português',
  de: 'Deutsch',
  ja: '日本語',
};
