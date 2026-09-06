// Game-specific data for Driving Empire
// Populated in T4 with real Driving Empire entities

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

/* ──────────────── Sidebar Codes (P0: real verified codes only) ──────────────── */
export interface SidebarCode {
  code: string;
  reward: string;
}

export const SIDEBAR_CODES: SidebarCode[] = [
  { code: '10KITS', reward: '10 Customization Kits' },
  { code: 'MARCH2026', reward: '2012 Chevrolet Camaro ZL1' },
  { code: 'CALL911', reward: '50,911 Cash' },
  { code: 'ZOOM', reward: '2023 Fairway Zoomer' },
  { code: 'NASCAR100M', reward: '200 Trophies' },
];

/* ──────────────── Vehicle Data (Data-Driven Table 1) ──────────────── */
export interface Vehicle {
  id: string;
  nameKey: string;
  tier: string;
  mode: string;
  modeKey: string;
  topSpeed: string;
  price: string;
}

export const VEHICLES: Vehicle[] = [
  { id: 'nissan-gtr', nameKey: 'vehicle_nissanGtr_name', tier: 'S', mode: 'Drag Strip', modeKey: 'vehicle_mode_drag', topSpeed: '230 mph', price: '1.2M Cash' },
  { id: 'lamborghini-aventador', nameKey: 'vehicle_lamborghiniAventador_name', tier: 'S', mode: 'Drag Strip', modeKey: 'vehicle_mode_drag', topSpeed: '228 mph', price: '2.5M Cash' },
  { id: 'porsche-911-turbo50', nameKey: 'vehicle_porsche911Turbo50_name', tier: 'S', mode: 'Street Circuit', modeKey: 'vehicle_mode_circuit', topSpeed: '210 mph', price: 'Event Reward' },
  { id: 'chevy-camaro-zl1', nameKey: 'vehicle_chevyCamaroZl1_name', tier: 'S', mode: 'Drag Strip', modeKey: 'vehicle_mode_drag', topSpeed: '215 mph', price: 'Code Reward' },
  { id: 'toyota-gr-supra', nameKey: 'vehicle_toyotaGrSupra_name', tier: 'A', mode: 'Street Circuit', modeKey: 'vehicle_mode_circuit', topSpeed: '195 mph', price: '850K Cash' },
  { id: 'ford-muscle-gt', nameKey: 'vehicle_fordMuscleGt_name', tier: 'A', mode: 'Street Circuit', modeKey: 'vehicle_mode_circuit', topSpeed: '188 mph', price: '720K Cash' },
];

/* ──────────────── Race Mode Data (Data-Driven Cards 1) ──────────────── */
export interface RaceMode {
  id: string;
  nameKey: string;
  tier: string;
  focusKey: string;
  bestForKey: string;
}

export const RACE_MODES: RaceMode[] = [
  { id: 'drag-strip', nameKey: 'mode_dragStrip_name', tier: 'S', focusKey: 'mode_dragStrip_focus', bestForKey: 'mode_dragStrip_best' },
  { id: 'street-circuit', nameKey: 'mode_streetCircuit_name', tier: 'S', focusKey: 'mode_streetCircuit_focus', bestForKey: 'mode_streetCircuit_best' },
  { id: 'atv-offroad', nameKey: 'mode_atvOffroad_name', tier: 'A', focusKey: 'mode_atvOffroad_focus', bestForKey: 'mode_atvOffroad_best' },
  { id: 'open-water-boating', nameKey: 'mode_openWaterBoating_name', tier: 'S', focusKey: 'mode_openWaterBoating_focus', bestForKey: 'mode_openWaterBoating_best' },
];

/* ──────────────── Tier List Data (Data-Driven Table 2) ──────────────── */
export interface TierEntry {
  id: string;
  nameKey: string;
  tier: string;
  rankKey: string;
  categoryKey: string;
}

export const TIER_LIST: TierEntry[] = [
  { id: 'nissan-gtr-s', nameKey: 'vehicle_nissanGtr_name', tier: 'S', rankKey: 'tier_rank_drag', categoryKey: 'vehicle_mode_drag' },
  { id: 'lamborghini-aventador-s', nameKey: 'vehicle_lamborghiniAventador_name', tier: 'S', rankKey: 'tier_rank_drag', categoryKey: 'vehicle_mode_drag' },
  { id: 'porsche-911-s', nameKey: 'vehicle_porsche911Turbo50_name', tier: 'S', rankKey: 'tier_rank_circuit', categoryKey: 'vehicle_mode_circuit' },
  { id: 'chevy-camaro-a', nameKey: 'vehicle_chevyCamaroZl1_name', tier: 'A', rankKey: 'tier_rank_circuit', categoryKey: 'vehicle_mode_circuit' },
  { id: 'toyota-gr-supra-a', nameKey: 'vehicle_toyotaGrSupra_name', tier: 'A', rankKey: 'tier_rank_circuit', categoryKey: 'vehicle_mode_circuit' },
  { id: 'ford-muscle-a', nameKey: 'vehicle_fordMuscleGt_name', tier: 'A', rankKey: 'tier_rank_drag', categoryKey: 'vehicle_mode_drag' },
];

/* ──────────────── Tuning Presets Data (Data-Driven Cards 2) ──────────────── */
export interface TuningPreset {
  id: string;
  nameKey: string;
  descKey: string;
  modeKey: string;
  statKey: string;
  statVal: string;
}

export const TUNING_PRESETS: TuningPreset[] = [
  { id: 'drag-max-accel', nameKey: 'tuning_dragAccel_name', descKey: 'tuning_dragAccel_desc', modeKey: 'vehicle_mode_drag', statKey: 'tuning_stat_topSpeed', statVal: '230+ mph' },
  { id: 'circuit-balanced', nameKey: 'tuning_circuitBalanced_name', descKey: 'tuning_circuitBalanced_desc', modeKey: 'vehicle_mode_circuit', statKey: 'tuning_stat_handling', statVal: 'A+' },
  { id: 'offroad-torque', nameKey: 'tuning_offroadTorque_name', descKey: 'tuning_offroadTorque_desc', modeKey: 'mode_atvOffroad_name', statKey: 'tuning_stat_torque', statVal: '920 Nm' },
  { id: 'boat-speed', nameKey: 'tuning_boatSpeed_name', descKey: 'tuning_boatSpeed_desc', modeKey: 'mode_openWaterBoating_name', statKey: 'tuning_stat_topSpeed', statVal: '85 kn' },
];

/* ──────────────── Footer Data ──────────────── */
export const FOOTER_DATA = {
  officialDiscordUrl: 'https://discord.ly/nocturne',
  officialYoutubeUrl: '',
  communityTool: { label: 'Driving Empire Codes Tracker', href: '' },
} as const;
