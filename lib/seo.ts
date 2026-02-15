import { Language } from '@/components/translations';
import { cases } from '@/components/cases';
import { legal } from '@/lib/legal';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

/** Обмежує description для meta (Google ~150–160 символів) */
export function trimDescriptionForMeta(description: string, maxLength = 160): string {
  if (!description || description.length <= maxLength) return description;
  const trimmed = description.slice(0, maxLength - 3).trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  return lastSpace > maxLength * 0.7 ? trimmed.slice(0, lastSpace) + '...' : trimmed + '...';
}

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
    image = `${baseUrl}/portfolio/portfolio-default.jpg`,
    type = 'website',
    url,
    lang = 'uk',
  } = config;

  const currentUrl = url || `${baseUrl}/${lang}`;
  const pathSuffix = url ? url.replace(`${baseUrl}/${lang}`, '') : '';
  const metaDescription = trimDescriptionForMeta(description);

  return {
    title,
    description: metaDescription,
    keywords,
    openGraph: {
      type,
      locale: lang === 'uk' ? 'uk_UA' : lang === 'en' ? 'en_US' : lang === 'pl' ? 'pl_PL' : 'ru_RU',
      url: currentUrl,
      title,
      description: metaDescription,
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
      description: metaDescription,
      images: [image],
      creator: '@telebotsnowayrm',
      site: '@telebotsnowayrm',
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'x-default': `${baseUrl}/uk${pathSuffix}`,
        uk: `${baseUrl}/uk${pathSuffix}`,
        en: `${baseUrl}/en${pathSuffix}`,
        pl: `${baseUrl}/pl${pathSuffix}`,
        ru: `${baseUrl}/ru${pathSuffix}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
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
      ? 'Розробка телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. Швидкий старт за 24 години, 200+ проєктів. Автоматизація бізнесу під ключ.'
      : lang === 'en'
      ? 'Telegram bot and chatbot development, websites, e-commerce. Quick start in 24 hours, 200+ projects. Turnkey business automation.'
      : lang === 'pl'
      ? 'Rozwój botów Telegram, chatbotów, stron i sklepów online. Szybki start w 24 godziny, 200+ projektów. Automatyzacja biznesu pod klucz.'
      : 'Разработка телеграм ботов, чат-ботов, сайтов и интернет-магазинов. Быстрый старт за 24 часа, 200+ проектов. Автоматизация бизнеса под ключ.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: legal.phone,
      contactType: 'customer service',
      email: legal.email,
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
      streetAddress: legal.legalAddress,
      addressCountry: 'UA',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '200',
    },
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
  };
}

export function generateLocalBusinessSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/${lang}#organization`,
    name: 'TeleBots',
    image: `${baseUrl}/whitelogo.png`,
    logo: `${baseUrl}/whitelogo.png`,
    url: `${baseUrl}/${lang}`,
    telephone: legal.phone,
    email: legal.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: legal.legalAddress,
      addressLocality: 'Київ',
      addressRegion: 'Київ',
      postalCode: '01000',
      addressCountry: 'UA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.4501',
      longitude: '30.5234',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Country',
      name: ['Ukraine', 'United States', 'Poland', 'European Union'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '200',
    },
    sameAs: [
      'https://t.me/telebotsnowayrm',
      'https://www.instagram.com/telebotsnowayrm/',
      'https://t.me/TeleBotsNowayrmChannel',
    ],
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

export function generateProductSchema(serviceName: string, description: string, lang: Language = 'uk') {
  const serviceNames: { [key: string]: { [key in Language]?: string } } = {
    'websitesPage': {
      uk: 'Розробка веб-сайтів',
      en: 'Website Development',
      pl: 'Rozwój stron internetowych',
      ru: 'Разработка веб-сайтов',
    },
    'chatbotsPage': {
      uk: 'Розробка чат-ботів',
      en: 'Chatbot Development',
      pl: 'Rozwój chatbotów',
      ru: 'Разработка чат-ботов',
    },
    'parsersPage': {
      uk: 'Розробка парсерів',
      en: 'Parser Development',
      pl: 'Rozwój parserów',
      ru: 'Разработка парсеров',
    },
    'designPage': {
      uk: 'Дизайн (лого, айдентика, UI/UX)',
      en: 'Design (logo, identity, UI/UX)',
      pl: 'Design (logo, identyfikacja, UI/UX)',
      ru: 'Дизайн (логотипы, айдентика, UI/UX)',
    },
  };

  const name = serviceNames[serviceName]?.[lang] || serviceName;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'TeleBots',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'UAH',
      url: `${baseUrl}/${lang}/services`,
    },
    category: 'Digital Services',
  };
}

export function generateHowToSchema(steps: Array<{ name: string; text: string }>, lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'uk'
      ? 'Як замовити розробку в TeleBots'
      : lang === 'en'
      ? 'How to order development at TeleBots'
      : lang === 'pl'
      ? 'Jak zamówić rozwój w TeleBots'
      : 'Как заказать разработку в TeleBots',
    description: lang === 'uk'
      ? 'Покрокова інструкція як замовити розробку цифрових рішень у TeleBots'
      : lang === 'en'
      ? 'Step-by-step guide on how to order digital solutions development at TeleBots'
      : lang === 'pl'
      ? 'Instrukcja krok po kroku, jak zamówić rozwój rozwiązań cyfrowych w TeleBots'
      : 'Пошаговая инструкция как заказать разработку цифровых решений в TeleBots',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateWebSiteSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TeleBots',
    url: `${baseUrl}/${lang}`,
    description: lang === 'uk'
      ? 'Розробка телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. 200+ проєктів. Швидкий старт за 24 години.'
      : lang === 'en'
      ? 'Telegram bot and chatbot development, websites, e-commerce. 200+ projects. Quick start in 24 hours.'
      : lang === 'pl'
      ? 'Rozwój botów Telegram, chatbotów, stron. 200+ projektów. Szybki start w 24 godziny.'
      : 'Разработка телеграм ботов, чат-ботов, сайтов. 200+ проектов. Быстрый старт за 24 часа.',
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

export function generateContactPageSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: lang === 'uk' ? 'Контакти - TeleBots' : 'Contact - TeleBots',
    url: `${baseUrl}/${lang}/contact`,
    description: lang === 'uk'
      ? 'Замовити розробку телеграм бота або сайту. Безкоштовна консультація, швидкий відгук. Київ, Україна.'
      : lang === 'en'
      ? 'Order Telegram bot or website development. Free consultation, quick response.'
      : lang === 'pl'
      ? 'Zamów rozwój bota Telegram lub strony. Bezpłatna konsultacja, szybka odpowiedź.'
      : 'Заказать разработку телеграм бота или сайта. Бесплатная консультация, быстрый ответ.',
    mainEntity: {
      '@type': 'Organization',
      name: 'TeleBots',
      email: legal.email,
      telephone: legal.phone,
    },
  };
}

export function generateAggregateRatingSchema(rating: number = 5.0, reviewCount: number = 200) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.toString(),
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviewCount.toString(),
  };
}

export function generateItemListSchema(items: Array<{ name: string; url: string; description?: string }>, lang: Language = 'uk') {
  const toAbsoluteUrl = (url: string) => (url.startsWith('http') ? url : `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'uk' ? 'Кейси розробки телеграм ботів та сайтів' : lang === 'en' ? 'Telegram Bot & Website Development Cases' : 'Portfolio Projects',
    description: lang === 'uk'
      ? 'Кейси розробки телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. 200+ проєктів.'
      : lang === 'en'
      ? 'Cases: Telegram bots, chatbots, websites, e-commerce. 200+ projects.'
      : 'List of successful projects from TeleBots',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: toAbsoluteUrl(item.url),
      description: item.description,
    })),
  };
}

export function generateArticleSchemaForBlog(title: string, description: string, publishedTime: string, lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: publishedTime,
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
  };
}

export function generateCollectionPageSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: lang === 'uk' ? 'Кейси розробки телеграм ботів — TeleBots' : lang === 'en' ? 'Telegram Bot & Website Cases — TeleBots' : 'TeleBots Portfolio',
    description: lang === 'uk'
      ? 'Кейси розробки телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. Приклади проєктів.'
      : lang === 'en'
      ? 'Telegram bot, chatbot, website and e-commerce development cases. Project examples.'
      : 'Collection of successful development projects from TeleBots',
    url: `${baseUrl}/${lang}/portfolio`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 200,
    },
  };
}

export function generateSoftwareApplicationSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TeleBots Development Services',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Telegram',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'UAH',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '200',
    },
  };
}








