import { Metadata } from 'next';
import { cases } from '@/components/cases';
import { Language } from '@/components/translations';
import {
  buildCaseSeoDescription,
  buildCaseSeoKeywords,
  generateMetadata as generateSEOMetadata,
} from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata(params: {
  lang: string;
  caseId: string;
}): Promise<Metadata> {
  const lang = (['uk', 'en', 'pl', 'ru'].includes(params.lang) ? params.lang : 'uk') as Language;
  const casesData = cases[lang] || cases.uk;
  const caseData = (casesData as Record<string, {
    title: string;
    subtitle?: string;
    description?: string;
    mainImage: string;
    category?: string;
    portfolioCategory?: string;
    technologies?: string[];
    features?: string[];
    results?: Array<{ value: string; label: string }>;
  }>)[params.caseId];

  if (!caseData) {
    return {
      title: 'Case Not Found',
      description: 'The requested case was not found.',
      robots: { index: false, follow: false },
    };
  }

  const title =
    lang === 'uk'
      ? `${caseData.title} — кейс TeleBots`
      : `${caseData.title} | TeleBots Cases`;

  const description = buildCaseSeoDescription(caseData, lang);
  const ogDescription =
    caseData.results && caseData.results.length > 0
      ? `${description} ${caseData.results.slice(0, 2).map((result: { value: string; label: string }) => `${result.value} ${result.label}`).join('. ')}`
      : description;
  const image = `${baseUrl}${caseData.mainImage}`;
  const url = `${baseUrl}/${lang}/portfolio/${params.caseId}`;
  const keywords = buildCaseSeoKeywords(caseData, lang);

  return {
    ...generateSEOMetadata({
      title,
      description,
      image,
      type: 'article',
      url,
      lang,
      caseId: params.caseId,
      openGraphDescription: ogDescription,
    }),
    keywords,
  };
}








