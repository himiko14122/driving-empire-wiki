import {
  BookOpen, Ticket, Car, BarChart3, Wrench, Newspaper, Flag, Code2,
  Home, Info,
  type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'codes', labelKey: 'nav_codes', path: '/codes', icon: Ticket, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tier-list', labelKey: 'nav_tierList', path: '/tier-list', icon: BarChart3, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'vehicles', labelKey: 'nav_vehicles', path: '/vehicles', icon: Car, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tuning', labelKey: 'nav_tuning', path: '/tuning', icon: Wrench, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.85, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Newspaper, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.85, changeFrequency: 'weekly' },
  { key: 'racing-modes', labelKey: 'nav_racingModes', path: '/racing-modes', icon: Flag, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'developer', labelKey: 'nav_developer', path: '/developer', icon: Code2, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  'guides': 'guides',
  'codes': 'codes',
  'tier-list': 'tier-list',
  'vehicles': 'vehicles',
  'tuning': 'tuning',
  'updates': 'updates',
  'racing-modes': 'racing-modes',
  'developer': 'developer',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  'guides':       { emoji: '📖', order: 1 },
  'codes':        { emoji: '🎟️', order: 2 },
  'tier-list':    { emoji: '📊', order: 3 },
  'vehicles':     { emoji: '🚗', order: 4 },
  'tuning':       { emoji: '🔧', order: 5 },
  'updates':      { emoji: '📰', order: 6 },
  'racing-modes': { emoji: '🏁', order: 7 },
  'developer':    { emoji: '🏢', order: 8 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  'guides':       ['codes', 'tier-list', 'vehicles'],
  'codes':        ['updates', 'guides', 'developer'],
  'tier-list':    ['vehicles', 'tuning', 'racing-modes'],
  'vehicles':     ['tier-list', 'tuning', 'racing-modes'],
  'tuning':       ['vehicles', 'tier-list', 'guides'],
  'updates':      ['codes', 'racing-modes', 'developer'],
  'racing-modes': ['vehicles', 'tier-list', 'updates'],
  'developer':    ['updates', 'guides', 'codes'],
};
