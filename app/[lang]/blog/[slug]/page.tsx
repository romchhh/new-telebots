import { notFound, redirect } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog/posts';

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
