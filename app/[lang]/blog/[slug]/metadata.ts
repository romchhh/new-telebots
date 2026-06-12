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

  const image = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;

  return {
    ...generateSEOMetadata({
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      url: `${baseUrl}/uk/blog/${slug}`,
      lang: 'uk',
      ukOnly: true,
      type: 'article',
      image,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      openGraphTitle: post.title,
      openGraphDescription: post.description,
    }),
  };
}
