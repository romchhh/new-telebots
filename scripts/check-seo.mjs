#!/usr/bin/env node
/**
 * Lightweight SEO invariants (regex on source files).
 * Run: node scripts/check-seo.mjs
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
let failed = false;

function fail(msg) {
  console.error(`✖ ${msg}`);
  failed = true;
}

function ok(msg) {
  console.log(`✓ ${msg}`);
}

function relative(p) {
  return p.replace(`${root}/`, '');
}

function walkTs(dir, fn) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walkTs(p, fn);
    else if (/\.(ts|tsx|mjs)$/.test(name)) fn(p, readFileSync(p, 'utf8'));
  }
}

if (existsSync(join(root, 'app/[lang]/portfolio/metadata.ts'))) {
  fail('app/[lang]/portfolio/metadata.ts має бути видалений — meta лише в page.tsx (+ searchParams).');
} else {
  ok('portfolio metadata: один generateMetadata у page.tsx');
}

if (existsSync(join(root, 'components/SEOHead.tsx'))) {
  fail('components/SEOHead.tsx — видаліть, використовуйте lib/seo.ts');
} else {
  ok('SEOHead відсутній');
}

const badTitleRe = /metaTitle:\s*['"][^'"]*(?:—|\|)\s*TeleBots['"]/;
let badTitles = 0;
for (const dir of [
  join(root, 'lib/seoLandings'),
  join(root, 'lib'),
  join(root, 'app/[lang]'),
]) {
  if (!existsSync(dir)) continue;
  walkTs(dir, (file, content) => {
    if (badTitleRe.test(content)) {
      fail(`${relative(file)}: metaTitle містить ручний суфікс TeleBots`);
      badTitles += 1;
    }
  });
}
if (badTitles === 0) ok('metaTitle без ручного «— TeleBots» / «| TeleBots»');

const tiersSrc = readFileSync(join(root, 'lib/portfolioCaseTiers.ts'), 'utf8');
const liveBlock = tiersSrc.match(/export const LIVE_CASE_IDS\s*=\s*\[([\s\S]*?)\]\s*as const/);
if (!liveBlock) {
  fail('Не знайдено LIVE_CASE_IDS у lib/portfolioCaseTiers.ts');
} else {
  const liveIds = [...liveBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  const cardsSrc = readFileSync(join(root, 'lib/portfolioCards.ts'), 'utf8');
  let missingCard = 0;
  for (const id of liveIds) {
    if (!cardsSrc.includes(`id: '${id}'`) && !cardsSrc.includes(`id: "${id}"`)) {
      fail(`Live case ${id} немає в portfolioCards`);
      missingCard += 1;
    }
  }
  if (missingCard === 0) ok(`live cases ↔ cards: ${liveIds.length} ID`);
}

const sitemapSrc = readFileSync(join(root, 'app/sitemap.xml/route.ts'), 'utf8');
if (!sitemapSrc.includes('getCaseStudyLastmod')) {
  fail('sitemap.xml/route.ts має використовувати getCaseStudyLastmod(caseId)');
} else {
  ok('sitemap: per-case lastmod');
}

const portfolioPage = readFileSync(join(root, 'app/[lang]/portfolio/page.tsx'), 'utf8');
if (!portfolioPage.includes('buildPortfolioHubMetadata') || portfolioPage.includes('searchParams')) {
  fail('portfolio/page.tsx: статичний generateMetadata без searchParams; noindex ?case= — middleware');
} else {
  ok('portfolio hub: статичний generateMetadata');
}

const mw = readFileSync(join(root, 'middleware.ts'), 'utf8');
if (!mw.includes("X-Robots-Tag', 'noindex, follow") || !mw.includes("searchParams.has('case')")) {
  fail('middleware: очікується X-Robots-Tag для /portfolio?case=');
} else {
  ok('middleware: noindex для ?case=');
}

const globalsCss = readFileSync(join(root, 'app/globals.css'), 'utf8');
if (globalsCss.includes('tool-form-active') || globalsCss.includes('tool-submit-active')) {
  fail('WebMCP pseudo-classes мають бути в public/webmcp-agent.css, не в globals.css');
} else {
  ok('WebMCP CSS винесено з Tailwind bundle');
}

const shellSrc = readFileSync(join(root, 'components/SiteHtmlShell.tsx'), 'utf8');
if (!shellSrc.includes('/webmcp-agent.css')) {
  fail('SiteHtmlShell: підключіть /webmcp-agent.css для WebMCP');
} else {
  ok('webmcp-agent.css підключено');
}

if (!existsSync(join(root, 'public/webmcp-agent.css'))) {
  fail('public/webmcp-agent.css відсутній');
} else {
  ok('public/webmcp-agent.css на місці');
}

process.exit(failed ? 1 : 0);
