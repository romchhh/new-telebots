import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Якщо користувач заходить на кореневий шлях, перенаправляємо на /uk
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/uk', request.url));
  }
  
  // Перевіряємо, чи шлях починається з валідної мови
  const validLangs = ['uk', 'en', 'pl', 'ru'];
  const firstSegment = pathname.split('/')[1];
  
  // Якщо перший сегмент не є валідною мовою, перенаправляємо на /uk
  if (firstSegment && !validLangs.includes(firstSegment)) {
    // Якщо це не статичний файл (наприклад, /api, /_next, тощо), перенаправляємо
    if (!pathname.startsWith('/_next') && !pathname.startsWith('/api') && !pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)) {
      return NextResponse.redirect(new URL(`/uk${pathname}`, request.url));
    }
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

