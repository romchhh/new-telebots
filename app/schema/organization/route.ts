import { NextRequest, NextResponse } from 'next/server';
import { generateOrganizationSchema } from '@/lib/seo';
import { Language } from '@/components/translations';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') || 'uk') as Language;
  const validLang = ['uk', 'en', 'pl', 'ru'].includes(lang) ? lang : 'uk';

  const schema = generateOrganizationSchema(validLang);

  return NextResponse.json(schema, {
    headers: {
      'Content-Type': 'application/ld+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
