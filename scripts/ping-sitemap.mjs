#!/usr/bin/env node
/**
 * Після деплою: підказати Google/Bing, що sitemap оновився.
 * Запуск: npm run ping:sitemap
 * (Дублює GSC → Sitemaps → resubmit; можна запускати одразу після deploy.)
 */
const base = (process.env.NEXT_PUBLIC_BASE_URL || 'https://telebots.site').replace(/\/$/, '');

const sitemaps = [`${base}/sitemap.xml`, `${base}/blog-sitemap.xml`];

const pingTargets = [
  (url) => `https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`,
  (url) => `https://www.bing.com/ping?sitemap=${encodeURIComponent(url)}`,
];

async function ping(name, pingUrl) {
  try {
    const res = await fetch(pingUrl, { method: 'GET', redirect: 'follow' });
    const ok = res.ok || res.status === 204;
    console.log(`${ok ? '✓' : '✗'} ${name}: HTTP ${res.status}`);
    return ok;
  } catch (err) {
    console.error(`✗ ${name}:`, err instanceof Error ? err.message : err);
    return false;
  }
}

console.log(`Pinging sitemaps for ${base}\n`);

for (const sitemapUrl of sitemaps) {
  console.log(sitemapUrl);
  for (const build of pingTargets) {
    const engine = build === pingTargets[0] ? 'Google' : 'Bing';
    await ping(engine, build(sitemapUrl));
  }
  console.log('');
}
