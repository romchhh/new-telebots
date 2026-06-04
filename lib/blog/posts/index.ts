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
