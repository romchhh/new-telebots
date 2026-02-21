import { NextResponse } from 'next/server';
import { cases } from '@/components/cases';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

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
  const serviceIds = ['websites', 'chatbots', 'parsers', 'design'];

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: string;
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const now = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const lang of languages) {
    for (const route of routes) {
      const url = `${baseUrl}/${lang}${route.path}`;
      lines.push('  <url>');
      lines.push(`    <loc>${escapeXml(url)}</loc>`);
      lines.push(`    <lastmod>${now}</lastmod>`);
      lines.push(`    <changefreq>${route.changeFrequency}</changefreq>`);
      lines.push(`    <priority>${route.priority}</priority>`);
      lines.push('  </url>');
    }
  }

  for (const lang of languages) {
    for (const serviceId of serviceIds) {
      const url = `${baseUrl}/${lang}/services/${serviceId}`;
      lines.push('  <url>');
      lines.push(`    <loc>${escapeXml(url)}</loc>`);
      lines.push(`    <lastmod>${now}</lastmod>`);
      lines.push('    <changefreq>weekly</changefreq>');
      lines.push('    <priority>0.85</priority>');
      lines.push('  </url>');
    }
  }

  for (const lang of languages) {
    const casesData = cases[lang as keyof typeof cases] || cases.uk;
    const caseIds = Object.keys(casesData);
    for (const caseId of caseIds) {
      const url = `${baseUrl}/${lang}/portfolio/${caseId}`;
      lines.push('  <url>');
      lines.push(`    <loc>${escapeXml(url)}</loc>`);
      lines.push(`    <lastmod>${now}</lastmod>`);
      lines.push('    <changefreq>monthly</changefreq>');
      lines.push('    <priority>0.7</priority>');
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
