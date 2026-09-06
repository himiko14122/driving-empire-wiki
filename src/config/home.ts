import {
  BookOpen, Ticket, Car, BarChart3, Wrench, Newspaper, Flag, Code2,
  Rocket, Layers, Settings, Gauge,
  type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    // Hero video: "Is This The Fastest Car In Driving Empire?" (DemaGames, community gameplay).
    // DEGRADED: no official Voldex/Driving Empire trailer found — using popular community gameplay video.
    videoId: '8o4ltr2NnTk',
    badgeKeys: [
      'home_hero_badge_vehicles',
      'home_hero_badge_modes',
      'home_hero_badge_codes',
      'home_hero_badge_licensed',
      'home_hero_badge_tuning',
      'home_hero_badge_update',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_tierList', href: '/tier-list', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_codes', href: '/codes', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'codes', labelKey: 'home_module_codes', titleKey: 'home_module_codes_title', descKey: 'home_module_codes_desc', href: '/codes', stats: [{ val: '16+', labelKey: 'home_module_codes_stat1' }, { val: 'Active', labelKey: 'home_module_codes_stat2' }], icon: Ticket, ctaKey: 'home_module_codes_cta' },
    { key: 'tier-list', labelKey: 'home_module_tierList', titleKey: 'home_module_tierList_title', descKey: 'home_module_tierList_desc', href: '/tier-list', stats: [{ val: 'S', labelKey: 'home_module_tierList_stat1' }, { val: '200+', labelKey: 'home_module_tierList_stat2' }], icon: BarChart3, ctaKey: 'home_module_tierList_cta' },
    { key: 'vehicles', labelKey: 'home_module_vehicles', titleKey: 'home_module_vehicles_title', descKey: 'home_module_vehicles_desc', href: '/vehicles', stats: [{ val: '200+', labelKey: 'home_module_vehicles_stat1' }, { val: 'Licensed', labelKey: 'home_module_vehicles_stat2' }], icon: Car, ctaKey: 'home_module_vehicles_cta' },
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '__guideCount', labelKey: 'home_module_guides_stat1' }, { val: 'F2P', labelKey: 'home_module_guides_stat2' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: 'Big Splash', labelKey: 'home_module_updates_stat1' }, { val: 'Live', labelKey: 'home_module_updates_stat2' }], icon: Newspaper, ctaKey: 'home_module_updates_cta' },
    { key: 'tuning', labelKey: 'home_module_tuning', titleKey: 'home_module_tuning_title', descKey: 'home_module_tuning_desc', href: '/tuning', stats: [{ val: 'ECU', labelKey: 'home_module_tuning_stat1' }, { val: 'Deep', labelKey: 'home_module_tuning_stat2' }], icon: Wrench, ctaKey: 'home_module_tuning_cta' },
    { key: 'racing-modes', labelKey: 'home_module_racingModes', titleKey: 'home_module_racingModes_title', descKey: 'home_module_racingModes_desc', href: '/racing-modes', stats: [{ val: '4', labelKey: 'home_module_racingModes_stat1' }, { val: 'Modes', labelKey: 'home_module_racingModes_stat2' }], icon: Flag, ctaKey: 'home_module_racingModes_cta' },
    { key: 'developer', labelKey: 'home_module_developer', titleKey: 'home_module_developer_title', descKey: 'home_module_developer_desc', href: '/developer', stats: [{ val: 'Voldex', labelKey: 'home_module_developer_stat1' }, { val: 'Owner', labelKey: 'home_module_developer_stat2' }], icon: Code2, ctaKey: 'home_module_developer_cta' },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_200vehicles', descKey: 'home_feature_200vehicles_desc', icon: Car },
    { titleKey: 'home_feature_tuning', descKey: 'home_feature_tuning_desc', icon: Settings },
    { titleKey: 'home_feature_modes', descKey: 'home_feature_modes_desc', icon: Gauge },
    { titleKey: 'home_feature_codes', descKey: 'home_feature_codes_desc', icon: Ticket },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/codes' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/tier-list' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/tuning' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/racing-modes' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'platform', 'genre', 'vehicles', 'modes', 'codes', 'buildEvents'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_roblox',
      externalLinkKey: 'roblox',
    },
  },

  faq: {
    keys: ['codes', 'earncash', 'toptier', 'draglaunch', 'tuning', 'boating', 'nascar'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'roblox',
    externalLabelKey: 'home_cta_roblox',
  },
};
