import { allBlogPosts } from '@/lib/blog/posts';

/**
 * Стабільні lastmod для sitemap (не «сьогодні» на кожен білд).
 * Оновлюйте дату сторінки, коли змінюєте її контент/SEO.
 * caseStudy синхронізуйте з CASE_ARTICLE_MODIFIED у lib/seo.ts.
 */
export const SITE_PAGE_LASTMOD = {
  home: '2026-10-04',
  about: '2026-10-04',
  services: '2026-10-04',
  portfolio: '2026-10-04',
  contact: '2026-10-04',
  pricing: '2026-10-04',
  offer: '2026-10-04',
  serviceDetail: '2026-10-04',
  solution: '2026-10-04',
  caseStudy: '2026-10-04',
  legal: '2026-08-13',
} as const;

/** Окремий lastmod для нових/оновлених flagship-кейсів (синхронізуйте з CASE_ARTICLE_MODIFIED у lib/seo.ts). */
const CASE_STUDY_LASTMOD: Partial<Record<string, string>> = {
  'emaro-autocare': '2026-10-04',
};

export function getCaseStudyLastmod(caseId: string): string {
  return CASE_STUDY_LASTMOD[caseId] ?? SITE_PAGE_LASTMOD.caseStudy;
}

export function getBlogIndexLastmod(): string {
  let max = '2025-01-01';
  for (const post of allBlogPosts) {
    const d = post.updatedAt.slice(0, 10);
    if (d > max) max = d;
  }
  return max;
}
