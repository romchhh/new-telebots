import { Metadata } from 'next';
import { cases } from '@/components/cases';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata(params: {
  lang: string;
  caseId: string;
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

  const title =
    lang === 'uk'
      ? `${caseData.title} — кейс TeleBots`
      : `${caseData.title} | TeleBots Cases`;

  const descriptionFromBody =
    typeof caseData.description === 'string'
      ? caseData.description.replace(/\s+/g, ' ').trim()
      : '';
  const description =
    caseData.subtitle ||
    (descriptionFromBody ? descriptionFromBody.slice(0, 300) : '') ||
    caseData.title;
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








