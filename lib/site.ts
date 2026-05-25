/** Канонічний домен сайту (без trailing slash). Має збігатися з Google Search Console. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || 'https://telebots.site'
).replace(/\/$/, '');
