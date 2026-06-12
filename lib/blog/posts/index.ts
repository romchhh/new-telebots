import type { BlogPost } from '../types';
import { pricingPosts } from './pricing';
import { legacyBlogMeta } from '../legacy-meta';

export const allBlogPosts: BlogPost[] = [...pricingPosts, ...legacyBlogMeta];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return allBlogPosts.filter((p) => p.featured);
}

/** Схожі статті для внутрішнього лінкування */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  const others = allBlogPosts.filter((p) => p.slug !== currentSlug);
  const sameCategory = current
    ? others.filter((p) => p.category === current.category)
    : others;
  const pool = sameCategory.length >= limit ? sameCategory : others;
  return pool.slice(0, limit);
}
