import { allBlogPosts } from '@/lib/blog/posts';

/**
 * Стабільні lastmod для sitemap (не «сьогодні»).
 * Оновлюйте дату сторінки, коли змінюєте її контент/SEO.
 * caseStudy синхронізуйте з CASE_ARTICLE_MODIFIED у lib/seo.ts.
 */
export const SITE_PAGE_LASTMOD = {
  home: '2026-08-09',
  about: '2026-08-10',
  services: '2026-08-09',
  portfolio: '2026-08-01',
  contact: '2026-05-25',
  pricing: '2026-05-25',
  serviceDetail: '2026-08-09',
  solution: '2026-08-09',
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
