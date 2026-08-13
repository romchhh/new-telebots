/**
 * Маршрути верхнього рівня всередині app/[lang]/.
 *
 * Middleware редіректить /:route → /:lang/:route саме за цим списком. Маршрут,
 * якого тут немає, потрапляє в гілку rewrite і віддається двома URL одночасно
 * (/foo і /uk/foo) — для Google це дубль. Синхронність із файловою системою
 * перевіряє scripts/check-known-routes.mjs перед кожним білдом.
 */
export const KNOWN_SITE_ROUTES = [
  'about',
  'blog',
  'contact',
  'offer',
  'portfolio',
  'pricing',
  'privacy',
  'refund',
  'services',
  'solutions',
  'terms',
] as const;
