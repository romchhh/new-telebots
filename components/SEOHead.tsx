'use client';

import { useParams } from 'next/navigation';
import { translations, Language } from './translations';
import { cases } from './cases';
import { legal } from '@/lib/legal';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  caseId?: string;
}

export default function SEOHead({ title, description, image, type = 'website', caseId }: SEOHeadProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://new.telebots.site';

  // Отримуємо дані кейсу, якщо вказано caseId
  let caseData = null;
  if (caseId) {
    const casesData = cases[validLang] || cases.uk;
    caseData = (casesData as any)[caseId];
  }

  const finalTitle = title || caseData?.title || t.hero.title;
  const finalDescription = description || caseData?.subtitle || t.hero.subtitle;
  const finalImage = image || caseData?.mainImage || `${baseUrl}/portfolio/portfolio-default.jpg`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'Organization',
    name: 'TeleBots',
    url: `${baseUrl}/${validLang}`,
    logo: `${baseUrl}/whitelogo.png`,
    description: finalDescription,
    ...(type === 'article' && caseData ? {
      headline: caseData.title,
      image: `${baseUrl}${caseData.mainImage}`,
      datePublished: new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'TeleBots',
      },
    } : {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: legal.phone,
        email: legal.email,
        contactType: 'customer service',
        areaServed: ['UA', 'US', 'PL', 'EU'],
        availableLanguage: ['uk', 'en', 'pl', 'ru'],
      },
      sameAs: [
        'https://t.me/telebotsnowayrm',
        'https://www.instagram.com/telebotsnowayrm/',
        'https://t.me/TeleBotsNowayrmChannel',
      ],
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}








