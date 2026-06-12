import { NextResponse } from 'next/server';
import { allBlogPosts } from '@/lib/blog/posts';
import { siteUrl as baseUrl } from '@/lib/site';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(dateStr: string): string {
  return new Date(dateStr).toUTCString();
}

export async function GET() {
  const sorted = [...allBlogPosts].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  const lastBuild = sorted[0]?.updatedAt ?? new Date().toISOString();

  const items = sorted
    .map((post) => {
      const link = `${baseUrl}/uk/blog/${post.slug}`;
      const image = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${toRfc822(post.publishedAt)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <enclosure url="${escapeXml(image)}" type="image/jpeg" />
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Блог TeleBots</title>
    <link>${baseUrl}/uk/blog</link>
    <description>Статті про ціни, розробку сайтів, Telegram-ботів та автоматизацію бізнесу від TeleBots.</description>
    <language>uk</language>
    <lastBuildDate>${toRfc822(lastBuild)}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
