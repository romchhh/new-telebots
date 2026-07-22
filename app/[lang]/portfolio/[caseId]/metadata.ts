import { Metadata } from 'next';
import { cases } from '@/components/cases';
import { Language } from '@/components/translations';
import { isFlagshipCase, isLightCase } from '@/lib/portfolioCases';
import {
  buildCaseSeoDescription,
  buildCaseSeoKeywords,
  generateMetadata as generateSEOMetadata,
} from '@/lib/seo';
import { siteUrl as baseUrl, SITE_LANGUAGES } from '@/lib/site';

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

  // Light / unknown: noindex — middleware 308 should already send crawlers to /portfolio
  if (!caseData || isLightCase(params.caseId) || !isFlagshipCase(params.caseId)) {
    return {
      title: 'Case',
      description: 'Portfolio case',
      robots: { index: false, follow: true },
      alternates: {
        canonical: `${baseUrl}/${lang}/portfolio`,
      },
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
  const hreflangLangs = SITE_LANGUAGES.filter((siteLang) =>
    Boolean((cases[siteLang as Language] as Record<string, unknown>)?.[params.caseId]) &&
      isFlagshipCase(params.caseId)
  );

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
      hreflangLangs: hreflangLangs.length > 0 ? hreflangLangs : ['uk'],
    }),
    keywords,
  };
}
