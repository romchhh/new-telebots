import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_COOKIE_NAME, resolvePreferredLanguage } from '@/lib/locale';
import { isLightCase } from '@/lib/portfolioCaseTiers';
import { CANONICAL_HOST } from '@/lib/site';

/** Постійний редірект (308) — Google передає сигнали на цільовий URL */
const PERMANENT_REDIRECT = 308;

function permanentRedirect(url: URL) {
  return NextResponse.redirect(url, PERMANENT_REDIRECT);
}

/** Шляхи, які не треба редіректити на /uk (SEO та спеціальні) */
const ALLOWED_ROOT_PATHS = [
  '/sitemap.xml',
  '/blog-sitemap.xml',
  '/robots.txt',
  '/ads.txt',
  '/humans.txt',
  '/llms.txt',
  '/security.txt',
  '/ai.txt',
  '/feed.xml',
  '/manifest.json',
  '/schema',
  '/.well-known',
];

const VALID_LANGS = ['uk', 'en', 'pl', 'ru'] as const;

/** Сторінки без префікса мови — редірект на /uk/... */
const KNOWN_SITE_ROUTES = new Set([
  'services',
  'solutions',
  'portfolio',
  'contact',
  'about',
  'pricing',
  'blog',
  'privacy',
  'terms',
  'refund',
]);

function isAllowedRootPath(pathname: string): boolean {
  return ALLOWED_ROOT_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );
}

function withLangHeader(response: NextResponse, lang: string) {
  response.headers.set('x-site-lang', lang);
  return response;
}

function getPreferredLanguage(request: NextRequest) {
  return resolvePreferredLanguage(
    request.cookies.get(LOCALE_COOKIE_NAME)?.value,
    request.headers.get('accept-language')
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isAllowedRootPath(pathname)) {
    return NextResponse.next();
  }

  // www / new (staging alias) → telebots.site (один канонічний хост у GSC)
  const hostname = request.nextUrl.hostname;
  if (
    hostname === `www.${CANONICAL_HOST}` ||
    hostname === `new.${CANONICAL_HOST}`
  ) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    return permanentRedirect(url);
  }

  if (pathname === '/') {
    const lang = getPreferredLanguage(request);
    return permanentRedirect(new URL(`/${lang}`, request.url));
  }

  const firstSegment = pathname.split('/')[1];
  const siteLang = firstSegment && VALID_LANGS.includes(firstSegment as (typeof VALID_LANGS)[number])
    ? firstSegment
    : 'uk';

  // Блог лише українською
  if (/^\/(en|pl|ru)\/blog(\/|$)/.test(pathname)) {
    const ukPath = pathname.replace(/^\/(en|pl|ru)/, '/uk');
    return permanentRedirect(new URL(ukPath, request.url));
  }

  // Light кейси без окремого URL → хаб /portfolio?case= (зберігаємо UX, віддаємо crawl budget)
  const lightCaseMatch = pathname.match(/^\/(uk|en|pl|ru)\/portfolio\/([^/]+)\/?$/);
  if (lightCaseMatch) {
    const [, lang, caseId] = lightCaseMatch;
    if (isLightCase(caseId)) {
      const target = new URL(`/${lang}/portfolio`, request.url);
      target.searchParams.set('case', caseId);
      return permanentRedirect(target);
    }
  }

  if (firstSegment && !VALID_LANGS.includes(firstSegment as (typeof VALID_LANGS)[number])) {
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|xml|json|webp|txt)$/)
    ) {
      return withLangHeader(NextResponse.next(), siteLang);
    }

    // /services → /{lang}/services; блог завжди uk
    if (KNOWN_SITE_ROUTES.has(firstSegment)) {
      const lang = firstSegment === 'blog' ? 'uk' : getPreferredLanguage(request);
      return permanentRedirect(new URL(`/${lang}${pathname}`, request.url));
    }

    return NextResponse.rewrite(
      new URL(`/${getPreferredLanguage(request)}${pathname}`, request.url)
    );
  }

  return withLangHeader(NextResponse.next(), siteLang);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
