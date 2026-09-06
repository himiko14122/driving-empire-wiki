import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { getAlternates } from '@/lib/seo';
import { getAllContent } from '@/lib/content';
import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const validLocale = routing.locales.includes(localeParam as Locale) ? (localeParam as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const t = await getTranslations();
  return {
    title: `${t('nav_tuning')} | ${t('site_title')}`,
    description: t.has('page_tuning_description') ? t('page_tuning_description') : t('site_description'),
    alternates: getAlternates('/tuning', validLocale),
  };
}

export default async function TuningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const validLocale = routing.locales.includes(localeParam as Locale) ? (localeParam as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const allContent = await getAllContent('tuning', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));
  return <CategoryPage catKey="tuning" articles={articles} />;
}
