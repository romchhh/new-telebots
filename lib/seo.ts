import { Language } from '@/components/translations';
import { cases } from '@/components/cases';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
  caseId?: string;
  lang?: Language;
}

export function generateMetadata(config: SEOConfig) {
  const {
    title,
    description,
    keywords,
    image = `${baseUrl}/og-image.jpg`,
    type = 'website',
    url,
    lang = 'uk',
  } = config;

  const currentUrl = url || `${baseUrl}/${lang}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type,
      locale: lang === 'uk' ? 'uk_UA' : lang === 'en' ? 'en_US' : lang === 'pl' ? 'pl_PL' : 'ru_RU',
      url: currentUrl,
      title,
      description,
      siteName: 'TeleBots',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@telebotsnowayrm',
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        uk: `${baseUrl}/uk${url?.replace(`/${lang}`, '') || ''}`,
        en: `${baseUrl}/en${url?.replace(`/${lang}`, '') || ''}`,
        pl: `${baseUrl}/pl${url?.replace(`/${lang}`, '') || ''}`,
        ru: `${baseUrl}/ru${url?.replace(`/${lang}`, '') || ''}`,
      },
    },
  };
}

export function generateOrganizationSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TeleBots',
    url: `${baseUrl}/${lang}`,
    logo: `${baseUrl}/whitelogo.png`,
    description: lang === 'uk'
      ? 'Професійна розробка телеграм ботів, чат-ботів, сайтів, інтернет-магазинів, парсерів та ботів з AI'
      : 'Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+380960908006',
      contactType: 'customer service',
      email: 'roman.fedoniuk@gmail.com',
      areaServed: ['UA', 'US', 'PL', 'EU'],
      availableLanguage: ['uk', 'en', 'pl', 'ru'],
    },
    sameAs: [
      'https://t.me/telebotsnowayrm',
      'https://www.instagram.com/telebotsnowayrm/',
      'https://t.me/TeleBotsNowayrmChannel',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>, lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateArticleSchema(caseId: string, lang: Language = 'uk') {
  const casesData = cases[lang] || cases.uk;
  const caseData = (casesData as any)[caseId];

  if (!caseData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseData.title,
    description: caseData.subtitle,
    image: `${baseUrl}${caseData.mainImage}`,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'TeleBots',
      url: `${baseUrl}/${lang}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TeleBots',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/whitelogo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${lang}/portfolio/${caseId}`,
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string, lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'TeleBots',
      url: `${baseUrl}/${lang}`,
    },
    areaServed: {
      '@type': 'Country',
      name: ['Ukraine', 'United States', 'Poland', 'European Union'],
    },
    serviceType: serviceName,
  };
}

export function generateWebSiteSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TeleBots',
    url: `${baseUrl}/${lang}`,
    description: lang === 'uk'
      ? 'Професійна розробка телеграм ботів, чат-ботів, сайтів, інтернет-магазинів, парсерів та ботів з AI'
      : 'Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${lang}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

