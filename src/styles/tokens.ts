// Design tokens for the portfolio — mirrors Portfolio.dc.html

export const colors = {
  bg: '#161512',
  surface: '#1c1b17',
  surfaceRaised: '#201f1a',
  chip: '#262420',
  ink: '#14130f',
  text: '#f2efe9',
  textMuted: '#cbc7bf',
  textDim: '#a39f97',
  textFaint: '#7d7a72',
  accent: 'oklch(0.85 0.15 165)',
  border: 'rgba(255, 255, 255, 0.07)',
  borderHover: 'rgba(255, 255, 255, 0.16)',
  borderStrong: 'rgba(255, 255, 255, 0.15)',
} as const

export const fonts = {
  sans: "'IBM Plex Sans', sans-serif",
  display: "'Space Grotesk', sans-serif",
  mono: "'IBM Plex Mono', monospace",
} as const

export const layout = {
  maxWidth: '1120px',
  pagePadding: '40px',
} as const

// Accent at a given alpha, e.g. accentGlow(0.3)
export const accentAlpha = (alpha: number) => `oklch(0.85 0.15 165 / ${alpha})`
