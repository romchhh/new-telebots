import type { BlogPost } from '../types';
import { pricingPosts } from './pricing';
import { telegramBusinessPosts } from './telegram-business';
import { legacyBlogMeta } from '../legacy-meta';

export const allBlogPosts: BlogPost[] = [
  ...telegramBusinessPosts,
  ...pricingPosts,
  ...legacyBlogMeta,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return allBlogPosts.filter((p) => p.featured);
}

/** Схожі статті для внутрішнього лінкування (relatedSlugs → category → інші) */
export function getRelatedPosts(currentSlug: string, limit = 4): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  const others = allBlogPosts.filter((p) => p.slug !== currentSlug);
  const picked: BlogPost[] = [];
  const seen = new Set<string>();

  const push = (post: BlogPost | undefined) => {
    if (!post || seen.has(post.slug) || picked.length >= limit) return;
    seen.add(post.slug);
    picked.push(post);
  };

  for (const slug of current?.relatedSlugs ?? []) {
    push(getBlogPostBySlug(slug));
  }

  if (picked.length < limit && current) {
    for (const post of others.filter((p) => p.category === current.category)) {
      push(post);
    }
  }

  if (picked.length < limit) {
    for (const post of others) {
      push(post);
    }
  }

  return picked;
}
