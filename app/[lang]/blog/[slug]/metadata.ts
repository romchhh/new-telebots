import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getBlogPostBySlug } from '@/lib/blog/posts';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'TeleBots' };

  return {
    ...generateSEOMetadata({
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      url: `${baseUrl}/uk/blog/${slug}`,
      lang: 'uk',
      type: 'article',
      image: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
      openGraphTitle: post.title,
      openGraphDescription: post.description,
    }),
  };
}
