/**
 * Modern Eco Color Palette
 * 
 * Primary (brand): #0F766E — deep teal/green, ecological but serious
 * Light background: #F4F5F3 — warm off-white, not hospital white
 * Surface / cards: #FFFFFF
 * Dark text: #1F2933 — charcoal, more elegant than black
 * Accent (daring): #E76F51 — muted terracotta/coral, architectural, Mediterranean vibe
 * Soft secondary: #CBD5C0 — desaturated sage for sections/dividers
 */

export const colors = {
  primary: {
    DEFAULT: '#0F766E',
    light: '#14B8A6',
    dark: '#0D5B54',
  },
  background: {
    DEFAULT: '#F4F5F3',
    white: '#FFFFFF',
  },
  text: {
    DEFAULT: '#1F2933',
    light: '#52606D',
    lighter: '#7B8794',
  },
  accent: {
    DEFAULT: '#E76F51',
    light: '#F28B73',
    dark: '#D45A3E',
  },
  secondary: {
    DEFAULT: '#CBD5C0',
    light: '#E0E8D9',
    dark: '#A8B89A',
  },
} as const;

// Tailwind class helpers
export const tw = {
  primary: {
    bg: 'bg-[#0F766E]',
    bgHover: 'hover:bg-[#0D5B54]',
    text: 'text-[#0F766E]',
    border: 'border-[#0F766E]',
  },
  accent: {
    bg: 'bg-[#E76F51]',
    bgHover: 'hover:bg-[#D45A3E]',
    text: 'text-[#E76F51]',
    border: 'border-[#E76F51]',
  },
  secondary: {
    bg: 'bg-[#CBD5C0]',
    text: 'text-[#1F2933]',
  },
  background: {
    light: 'bg-[#F4F5F3]',
    white: 'bg-white',
  },
} as const;
