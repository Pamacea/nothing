// Application constants

export const COUNTDOWN_DURATION = 120 // seconds

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nothing.com'

export const MYSTERY_TEXTS = [
  '???',
  '▓▓▓',
  '!!!',
  '...',
  '?!?',
  '>>>',
  '<<<',
  '###',
  '***',
  'SOON',
] as const

export const HINTS = [
  { tension: 0, text: 'Préparez-vous.' },
  { tension: 20, text: 'Ça approche.' },
  { tension: 40, text: 'Vous le sentez ?' },
  { tension: 60, text: 'Plus que quelques instants...' },
  { tension: 80, text: "C'EST PRESQUE LÀ." },
  { tension: 95, text: 'MAINTENANT.' },
] as const

export type HintText = typeof HINTS[number]['text']

export const REVEAL_SEQUENCE = ['...', 'ATTENDEZ', '...'] as const

export type RevealText = typeof REVEAL_SEQUENCE[number]

export const COLORS = [
  '#ff2244',
  '#ff4466',
  '#ff6644',
  '#ffaa44',
  '#00ffff',
  '#ff00ff',
] as const

export const TILE_CONFIG = {
  DESKTOP: { cols: 20, rows: 12 },
  MOBILE: { cols: 10, rows: 8 },
  MOBILE_BREAKPOINT: 600,
} as const

export type Phase = 'countdown' | 'reveal' | 'nothing' | 'accepted'

export interface TimeDisplay {
  hours: string
  minutes: string
  seconds: string
}

export interface Hint {
  tension: number
  text: string
}

export interface Tile {
  id: number
  active: boolean
  color: string
}
