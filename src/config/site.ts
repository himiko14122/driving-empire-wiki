import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://drivingempirewiki.wiki';
export const SITE_NAME = 'Driving Empire Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/logo.svg';
export const TWITTER_HANDLE = '';
export const GA_TRACKING_ID = 'G-422E4L5JB3';
export const SLUG_PREFIX = 'Driving-Empire-';

export const EXTERNAL_LINKS = {
  roblox: 'https://www.roblox.com/games/3351674303/Driving-Empire',
  discord: 'https://discord.ly/nocturne',
  youtube: '',
  reddit: '',
  twitter: '',
  website: '',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    // Root homepage: default locale serves bare root (mirror-en-to-root copies out/en/index.html)
    return locale === routing.defaultLocale ? '/' : `/${locale}`;
  }
  // localePrefix: 'always' — every non-root path must carry the locale prefix
  return `/${locale}${normalized}`;
}
