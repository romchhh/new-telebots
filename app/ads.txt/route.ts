import { servePublicText } from '@/lib/publicTextRoute';

export async function GET() {
  return servePublicText('ads.txt');
}
