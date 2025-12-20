import { Metadata } from 'next';
import { cases } from '@/components/cases';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export async function generateMetadata({
  params,
}: {
  params: { lang: string; caseId: string };
}): Promise<Metadata> {
  const lang = (['uk', 'en', 'pl', 'ru'].includes(params.lang) ? params.lang : 'uk') as Language;
  const casesData = cases[lang] || cases.uk;
  const caseData = (casesData as any)[params.caseId];

  if (!caseData) {
    return {
      title: 'Case Not Found',
      description: 'The requested case was not found.',
    };
  }

  const title = `${caseData.title} | TeleBots Portfolio`;
  const description = caseData.subtitle || caseData.description?.substring(0, 160) || '';
  const image = `${baseUrl}${caseData.mainImage}`;
  const url = `${baseUrl}/${lang}/portfolio/${params.caseId}`;

  return {
    ...generateSEOMetadata({
      title,
      description,
      image,
      type: 'article',
      url,
      lang,
      caseId: params.caseId,
    }),
    keywords: caseData.technologies?.join(', ') || '',
  };
}

