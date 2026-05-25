import { NextResponse } from 'next/server';
import { siteUrl as baseUrl } from '@/lib/site';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const languages = ['uk', 'en', 'pl', 'ru'];
  
  // Додайте тут ваші статті блогу коли вони з'являться
  const blogPosts: Array<{
    slug: string;
    lastmod: string;
    priority: number;
    changeFrequency: string;
  }> = [
    // Приклад структури для майбутніх статей:
    // { slug: 'telegram-bot-for-business', lastmod: '2026-05-01', priority: 0.8, changeFrequency: 'monthly' },
  ];

  const now = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ];

  function pushAlternates(path: string) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${baseUrl}/uk${path}`)}" />`);
    for (const lang of languages) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(`${baseUrl}/${lang}${path}`)}" />`);
    }
  }

  // Додаємо головну сторінку блогу
  for (const lang of languages) {
    const url = `${baseUrl}/${lang}/blog`;
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(url)}</loc>`);
    pushAlternates('/blog');
    lines.push(`    <lastmod>${now}</lastmod>`);
    lines.push('    <changefreq>daily</changefreq>');
    lines.push('    <priority>0.8</priority>');
    lines.push('  </url>');
  }

  // Додаємо статті блогу
  for (const lang of languages) {
    for (const post of blogPosts) {
      const url = `${baseUrl}/${lang}/blog/${post.slug}`;
      lines.push('  <url>');
      lines.push(`    <loc>${escapeXml(url)}</loc>`);
      pushAlternates(`/blog/${post.slug}`);
      lines.push(`    <lastmod>${post.lastmod}</lastmod>`);
      lines.push(`    <changefreq>${post.changeFrequency}</changefreq>`);
      lines.push(`    <priority>${post.priority}</priority>`);
      lines.push('  </url>');
    }
  }

  lines.push('</urlset>');
  const xml = lines.join('\n');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
