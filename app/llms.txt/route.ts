import { servePublicText } from '@/lib/publicTextRoute';

export async function GET() {
  return servePublicText('llms.txt', 'text/markdown; charset=utf-8');
}
