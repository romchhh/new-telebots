import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isAllowedRootPath(pathname)) {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/uk', request.url));
  }

  const firstSegment = pathname.split('/')[1];
  const siteLang = firstSegment && VALID_LANGS.includes(firstSegment as (typeof VALID_LANGS)[number])
    ? firstSegment
    : 'uk';

  // Блог лише українською
  if (/^\/(en|pl|ru)\/blog(\/|$)/.test(pathname)) {
    const ukPath = pathname.replace(/^\/(en|pl|ru)/, '/uk');
    return NextResponse.redirect(new URL(ukPath, request.url));
  }

  if (firstSegment && !VALID_LANGS.includes(firstSegment as (typeof VALID_LANGS)[number])) {
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|xml|json|webp|txt)$/)
    ) {
      return withLangHeader(NextResponse.next(), siteLang);
    }

    // /services → /uk/services; /foobar → /uk/foobar (catch-all → 404)
    if (KNOWN_SITE_ROUTES.has(firstSegment)) {
      return NextResponse.redirect(new URL(`/uk${pathname}`, request.url));
    }

    return NextResponse.rewrite(new URL(`/uk${pathname}`, request.url));
  }

  return withLangHeader(NextResponse.next(), siteLang);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
