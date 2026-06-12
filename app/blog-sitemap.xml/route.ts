import { NextResponse } from 'next/server';
import { siteUrl as baseUrl } from '@/lib/site';
import { allBlogPosts } from '@/lib/blog/posts';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const blogPosts = allBlogPosts.map((post) => ({
    slug: post.slug,
    lastmod: post.updatedAt.slice(0, 10),
    priority: post.featured ? 0.9 : 0.8,
    changeFrequency: post.featured ? 'weekly' : 'monthly',
    image: post.image,
    imageAlt: post.imageAlt,
    title: post.title,
  }));

  const now = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ];

  const blogIndex = `${baseUrl}/uk/blog`;
  lines.push('  <url>');
  lines.push(`    <loc>${escapeXml(blogIndex)}</loc>`);
  lines.push(`    <lastmod>${now}</lastmod>`);
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push('    <priority>0.85</priority>');
  lines.push('  </url>');

  for (const post of blogPosts) {
    const url = `${baseUrl}/uk/blog/${post.slug}`;
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(url)}</loc>`);
    lines.push(`    <lastmod>${post.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${post.changeFrequency}</changefreq>`);
    lines.push(`    <priority>${post.priority}</priority>`);
    if (post.image) {
      const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
      lines.push('    <image:image>');
      lines.push(`      <image:loc>${escapeXml(imageUrl)}</image:loc>`);
      lines.push(`      <image:title>${escapeXml(post.title)}</image:title>`);
      lines.push(`      <image:caption>${escapeXml(post.imageAlt)}</image:caption>`);
      lines.push('    </image:image>');
    }
    lines.push('  </url>');
  }

  lines.push('</urlset>');

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
