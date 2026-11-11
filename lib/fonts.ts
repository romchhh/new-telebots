import { Inter, Inter_Tight, Manrope } from 'next/font/google';

/**
 * Body / UI: Manrope як --font-akt (як у site, доки немає akt.woff2).
 * Заголовки: Inter Tight → --font-display / --font-montserrat.
 * Логотип telebots.: Inter → --font-brand.
 */

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-akt',
  preload: true,
});

/** Wordmark «telebots.» */
export const inter = Inter({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

/** Display / headings */
export const interTight = Inter_Tight({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter-tight',
  preload: true,
});

export const fontVariables = `${manrope.variable} ${inter.variable} ${interTight.variable}`;
