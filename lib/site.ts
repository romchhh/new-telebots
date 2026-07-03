/** Канонічний домен сайту (без trailing slash). Має збігатися з Google Search Console. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || 'https://telebots.site'
).replace(/\/$/, '');

/** Мови сайту для hreflang та sitemap */
export const SITE_LANGUAGES = ['uk', 'en', 'pl', 'ru'] as const;
export type SiteLanguage = (typeof SITE_LANGUAGES)[number];
export const DEFAULT_SITE_LANGUAGE: SiteLanguage = 'uk';
