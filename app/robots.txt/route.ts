import { NextRequest, NextResponse } from 'next/server';
import { servePublicText } from '@/lib/publicTextRoute';
import { CANONICAL_HOST } from '@/lib/site';

/** Staging / alias hosts — never allow crawling even if a request reaches them. */
const BLOCKED_HOSTS = new Set([
  `new.${CANONICAL_HOST}`,
  `www.${CANONICAL_HOST}`,
]);

function isBlockedHost(hostname: string): boolean {
  if (BLOCKED_HOSTS.has(hostname)) return true;
  // Vercel preview deployments
  if (hostname.endsWith('.vercel.app')) return true;
  return false;
}

export async function GET(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || '';
  const hostname = host.split(':')[0].toLowerCase();

  if (isBlockedHost(hostname)) {
    return new NextResponse(
      `User-Agent: *\nDisallow: /\n\n# Non-canonical host — use https://${CANONICAL_HOST}/\n`,
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=300, s-maxage=300',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      }
    );
  }

  return servePublicText('robots.txt');
}
