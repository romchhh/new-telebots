/** Канонічний домен сайту (без trailing slash). Має збігатися з Google Search Console. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || 'https://telebots.site'
).replace(/\/$/, '');

/** Hostname для редіректів www → apex (telebots.site) */
export const CANONICAL_HOST = new URL(siteUrl).hostname;

/** Мови сайту для hreflang та sitemap */
export const SITE_LANGUAGES = ['uk', 'en', 'pl', 'ru'] as const;
export type SiteLanguage = (typeof SITE_LANGUAGES)[number];
export const DEFAULT_SITE_LANGUAGE: SiteLanguage = 'uk';

export function asSiteLang(value: string | undefined): SiteLanguage {
  return SITE_LANGUAGES.includes(value as SiteLanguage)
    ? (value as SiteLanguage)
    : DEFAULT_SITE_LANGUAGE;
}

/**
 * Блог існує лише українською, тож посилаємось одразу на /uk/blog.
 * Інакше en/pl/ru отримують 308-редірект на кожному кліку.
 */
export const BLOG_PATH = `/${DEFAULT_SITE_LANGUAGE}/blog`;
