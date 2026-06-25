import { servePublicText } from '@/lib/publicTextRoute';

/** RFC 9116 — канонічне розташування security.txt */
export async function GET() {
  return servePublicText('.well-known/security.txt');
}
