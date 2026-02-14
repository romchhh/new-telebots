import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Шляхи, які не треба редіректити на /uk (SEO та спеціальні) */
const ALLOWED_ROOT_PATHS = [
  '/sitemap.xml',
  '/robots.txt',
  '/ai.txt',
  '/feed.xml',
  '/manifest.json',
  '/schema',
];

function isAllowedRootPath(pathname: string): boolean {
  return ALLOWED_ROOT_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // SEO та спеціальні файли — не чіпаємо
  if (isAllowedRootPath(pathname)) {
    return NextResponse.next();
  }

  // Якщо користувач заходить на кореневий шлях, перенаправляємо на /uk
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/uk', request.url));
  }

  // Перевіряємо, чи шлях починається з валідної мови
  const validLangs = ['uk', 'en', 'pl', 'ru'];
  const firstSegment = pathname.split('/')[1];

  // Якщо перший сегмент не є валідною мовою, перенаправляємо на /uk
  if (firstSegment && !validLangs.includes(firstSegment)) {
    // Статичні файли та служебні шляхи — не редіректимо
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|xml|json|webp)$/)
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(`/uk${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

