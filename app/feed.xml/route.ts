import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function GET() {
  const now = new Date().toISOString();
  const languages = ['uk', 'en', 'pl', 'ru'];
  const paths = ['', '/about', '/services', '/portfolio', '/blog', '/contact'];

  const items = languages.flatMap((lang) =>
    paths.map(
      (path) => `
    <item>
      <title>TeleBots${path ? ` — ${path.slice(1)}` : ''}</title>
      <link>${baseUrl}/${lang}${path}</link>
      <guid isPermaLink="true">${baseUrl}/${lang}${path}</guid>
      <pubDate>${now}</pubDate>
      <description>Professional development of Telegram bots, chatbots, websites, e-commerce, parsers and AI bots. 200+ projects.</description>
    </item>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TeleBots</title>
    <link>${baseUrl}/uk</link>
    <description>Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots. 200+ projects.</description>
    <language>uk</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items.join('')}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
