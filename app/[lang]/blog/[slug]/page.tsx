import { notFound, redirect } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog/posts';

/**
 * metadata.ts не є спецфайлом Next.js — без цього реекспорту пости успадковували
 * метадані з blog/layout.tsx і всі отримували canonical на /uk/blog.
 */
export { generateMetadata } from './metadata';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ lang: 'uk', slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;

  if (langParam !== 'uk') {
    redirect(`/uk/blog/${slug}`);
  }

  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostPageClient post={post} />;
}
