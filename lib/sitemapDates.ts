import { allBlogPosts } from '@/lib/blog/posts';

/**
 * Стабільні lastmod для sitemap (не «сьогодні»).
 * Оновлюйте дату сторінки, коли змінюєте її контент/SEO.
 * caseStudy синхронізуйте з CASE_ARTICLE_MODIFIED у lib/seo.ts.
 */
export const SITE_PAGE_LASTMOD = {
  home: '2026-08-13',
  about: '2026-08-13',
  services: '2026-08-13',
  portfolio: '2026-08-13',
  contact: '2026-08-13',
  pricing: '2026-08-13',
  offer: '2026-08-13',
  serviceDetail: '2026-08-13',
  solution: '2026-08-13',
  caseStudy: '2026-08-01',
} as const;

export function getBlogIndexLastmod(): string {
  let max = '2025-01-01';
  for (const post of allBlogPosts) {
    const d = post.updatedAt.slice(0, 10);
    if (d > max) max = d;
  }
  return max;
}
