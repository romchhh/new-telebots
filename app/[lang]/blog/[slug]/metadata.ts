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
  if (!post) return { title: { absolute: 'TeleBots' } };

  return {
    ...generateSEOMetadata({
      title: post.seoTitle ?? post.title,
      description: post.description,
      keywords: post.keywords,
      url: `${baseUrl}/uk/blog/${slug}`,
      lang: 'uk',
      ukOnly: true,
      type: 'article',
      openGraphTitle: post.title,
      openGraphDescription: post.description,
      // Локальні обкладинки; зовнішні Unsplash — fallback на home hero в resolveOgBackgroundPath
      ogBackground: post.image.startsWith('http') ? '/other/og-hero.jpg' : post.image,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    }),
  };
}
