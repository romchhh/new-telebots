import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_COOKIE_NAME, resolvePreferredLanguage } from '@/lib/locale';

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

  if (pathname === '/') {
    const lang = getPreferredLanguage(request);
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
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

    // /services → /{lang}/services; блог завжди uk
    if (KNOWN_SITE_ROUTES.has(firstSegment)) {
      const lang = firstSegment === 'blog' ? 'uk' : getPreferredLanguage(request);
      return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
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
