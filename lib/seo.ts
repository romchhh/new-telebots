import { Language } from '@/components/translations';
import { cases } from '@/components/cases';
import { legal } from '@/lib/legal';
import { isFlagshipCase } from '@/lib/portfolioCaseTiers';
import { siteUrl, SITE_LANGUAGES, DEFAULT_SITE_LANGUAGE, type SiteLanguage } from '@/lib/site';

const baseUrl = siteUrl;

/** Шлях після /:lang (наприклад `/services` або `` для головної) */
export function extractLangPathSuffix(pathname: string, lang: Language): string {
  const prefix = `/${lang}`;
  if (pathname === prefix || pathname === `${prefix}/`) return '';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return '';
}

/** Повний URL сторінки для мови */
export function buildPageUrl(lang: Language, pathSuffix = ''): string {
  return `${baseUrl}/${lang}${pathSuffix}`;
}

/** hreflang для `<link rel="alternate" hreflang="…">` і sitemap xhtml:link */
export function buildHreflangLanguages(
  pathSuffix = '',
  options: { ukOnly?: boolean; langs?: readonly SiteLanguage[] } = {}
): Record<string, string> {
  if (options.ukOnly) {
    const ukUrl = buildPageUrl('uk', pathSuffix);
    return { 'x-default': ukUrl, uk: ukUrl };
  }

  const langs = options.langs ?? SITE_LANGUAGES;
  const result: Record<string, string> = {
    'x-default': buildPageUrl(DEFAULT_SITE_LANGUAGE, pathSuffix),
  };

  for (const lang of langs) {
    result[lang] = buildPageUrl(lang, pathSuffix);
  }

  return result;
}

/** XML-рядки xhtml:link для sitemap */
export function buildHreflangXmlLinks(
  pathSuffix = '',
  options: { ukOnly?: boolean; langs?: readonly SiteLanguage[] } = {}
): Array<{ hreflang: string; href: string }> {
  const languages = buildHreflangLanguages(pathSuffix, options);
  return Object.entries(languages).map(([hreflang, href]) => ({ hreflang, href }));
}

const OG_LOCALE: Record<Language, string> = {
  uk: 'uk_UA',
  en: 'en_US',
  pl: 'pl_PL',
  ru: 'ru_RU',
};

export function buildOpenGraphAlternateLocales(currentLang: Language): string[] {
  return SITE_LANGUAGES.filter((lang) => lang !== currentLang).map((lang) => OG_LOCALE[lang]);
}


/** Обмежує description для meta (Google ~150–160 символів) */
export function trimDescriptionForMeta(description: string, maxLength = 160): string {
  if (!description || description.length <= maxLength) return description;
  const trimmed = description.slice(0, maxLength - 3).trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  return lastSpace > maxLength * 0.7 ? trimmed.slice(0, lastSpace) + '...' : trimmed + '...';
}

/**
 * Strip trailing brand suffixes so we never emit `TeleBots | TeleBots`
 * or legacy `TeleBots Portfolio` / `TeleBots Cases`.
 */
export function stripBrandTitleSuffix(title: string): string {
  let next = (title || '').replace(/\s+/g, ' ').trim();
  for (let i = 0; i < 4; i++) {
    const stripped = next
      .replace(/\s*(?:\||-|—|–)\s*(?:кейс\s+)?TeleBots(?:\s+(?:Cases|Portfolio))?\s*$/i, '')
      .trim();
    if (stripped === next) break;
    next = stripped;
  }
  // Bare trailing brand without separator ("Блог TeleBots")
  next = next.replace(/(?:^|\s)TeleBots$/i, '').trim();
  // Dangling separators left after partial cleanup
  next = next.replace(/\s*(?:\||-|—|–)\s*$/g, '').trim();
  return next;
}

/** Soft SERP limit — beyond this Google often truncates the visible snippet. */
const TITLE_SOFT_MAX = 60;
const BRAND_SUFFIX = ' | TeleBots';

/**
 * Single brand format for document + OG/Twitter titles.
 * Skip `| TeleBots` when branding would push past ~60 chars (typical SERP cut),
 * so portfolio/case titles keep client + offer instead of truncating mid-phrase.
 */
export function withBrandTitle(title: string): string {
  const bare = stripBrandTitleSuffix(title);
  if (!bare || /^TeleBots$/i.test(bare)) return 'TeleBots';
  const branded = `${bare}${BRAND_SUFFIX}`;
  return branded.length <= TITLE_SOFT_MAX ? branded : bare;
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
  /** Блог лише українською — не генерувати hreflang en/pl/ru */
  ukOnly?: boolean;
  /** Обмежити hreflang лише мовами, де є цей контент (наприклад, кейс портфоліо) */
  hreflangLangs?: readonly SiteLanguage[];
  publishedTime?: string;
  modifiedTime?: string;
  /** Якщо задано — підставляється в openGraph/twitter title замість `title` */
  openGraphTitle?: string;
  /** Якщо задано — підставляється в openGraph/twitter description замість `description` */
  openGraphDescription?: string;
}

function sanitizeTextForSeo(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function buildCaseIntentKeywords(lang: Language): string[] {
  if (lang === 'en') {
    return ['case study', 'project example', 'website development', 'telegram bot development', 'business automation', 'TeleBots'];
  }
  if (lang === 'pl') {
    return ['studium przypadku', 'przykład projektu', 'tworzenie stron', 'bot Telegram', 'automatyzacja biznesu', 'TeleBots'];
  }
  if (lang === 'ru') {
    return ['кейс', 'пример проекта', 'разработка сайтов', 'разработка Telegram-ботов', 'автоматизация бизнеса', 'TeleBots'];
  }
  return ['кейс', 'приклад проєкту', 'розробка сайтів', 'розробка Telegram-ботів', 'автоматизація бізнесу', 'TeleBots'];
}

export function buildCaseSeoDescription(caseData: {
  subtitle?: string;
  description?: string;
  category?: string;
  technologies?: string[];
}, lang: Language = 'uk'): string {
  const subtitle = caseData.subtitle ? sanitizeTextForSeo(caseData.subtitle) : '';
  const body = caseData.description ? sanitizeTextForSeo(caseData.description) : '';
  const category = caseData.category ? sanitizeTextForSeo(caseData.category) : '';
  const technologies = Array.isArray(caseData.technologies)
    ? caseData.technologies.map((tech) => sanitizeTextForSeo(tech)).filter(Boolean)
    : [];

  const categoryLabel = lang === 'en' ? 'Category' : lang === 'pl' ? 'Kategoria' : lang === 'ru' ? 'Категория' : 'Категорія';
  const technologiesLabel = lang === 'en' ? 'Technologies' : lang === 'pl' ? 'Technologie' : lang === 'ru' ? 'Технологии' : 'Технології';

  const parts = [subtitle, body, category ? `${categoryLabel}: ${category}.` : '', technologies.length ? `${technologiesLabel}: ${technologies.slice(0, 5).join(', ')}.` : '']
    .filter(Boolean)
    .join(' ');

  return trimDescriptionForMeta(parts || subtitle || body, 160);
}

export function buildCaseSeoKeywords(caseData: {
  title: string;
  category?: string;
  portfolioCategory?: string;
  technologies?: string[];
  features?: string[];
}, lang: Language): string {
  const titleKeywords = sanitizeTextForSeo(caseData.title)
    .split(/[|,:()\-]/)
    .map((part) => sanitizeTextForSeo(part))
    .filter(Boolean);
  const category = caseData.category ? [sanitizeTextForSeo(caseData.category)] : [];
  const portfolioCategory = caseData.portfolioCategory ? [sanitizeTextForSeo(caseData.portfolioCategory)] : [];
  const technologies = Array.isArray(caseData.technologies)
    ? caseData.technologies.map((tech) => sanitizeTextForSeo(tech)).filter(Boolean)
    : [];
  const featureKeywords = Array.isArray(caseData.features)
    ? caseData.features.slice(0, 5).map((item) => sanitizeTextForSeo(item)).filter(Boolean)
    : [];

  const all = [
    ...titleKeywords,
    ...category,
    ...portfolioCategory,
    ...technologies,
    ...featureKeywords,
    ...buildCaseIntentKeywords(lang),
  ];

  return Array.from(new Set(all)).join(', ');
}

export function generateMetadata(config: SEOConfig) {
  const {
    title,
    description,
    keywords,
    image = `${baseUrl}/other/about-hero.png`,
    type = 'website',
    url,
    lang = 'uk',
    ukOnly = false,
    hreflangLangs,
    publishedTime,
    modifiedTime,
    openGraphTitle,
    openGraphDescription,
  } = config;

  const currentUrl = url || buildPageUrl(lang);
  const pathSuffix = url ? extractLangPathSuffix(new URL(url).pathname, lang) : '';
  // Absolute title: nested portfolio/case layouts sometimes skip root `title.template`,
  // which left case pages without `| TeleBots` while OG still had it.
  const brandedTitle = withBrandTitle(title);
  const ogTitle = openGraphTitle ? withBrandTitle(openGraphTitle) : brandedTitle;
  const metaDescription = trimDescriptionForMeta(description);
  const ogDescription = openGraphDescription
    ? trimDescriptionForMeta(openGraphDescription)
    : metaDescription;

  const hreflangLanguages = buildHreflangLanguages(pathSuffix, {
    ukOnly,
    langs: hreflangLangs,
  });

  const openGraphArticle =
    type === 'article' && publishedTime
      ? {
          publishedTime,
          modifiedTime: modifiedTime ?? publishedTime,
          authors: ['TeleBots'],
          section: 'Technology',
        }
      : {};

  return {
    title: { absolute: brandedTitle },
    description: metaDescription,
    keywords,
    openGraph: {
      type,
      locale: OG_LOCALE[lang],
      alternateLocale: ukOnly ? undefined : buildOpenGraphAlternateLocales(lang),
      url: currentUrl,
      title: ogTitle,
      description: ogDescription,
      siteName: 'TeleBots',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      ...openGraphArticle,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [image],
      creator: '@telebotsnowayrm',
      site: '@telebotsnowayrm',
    },
    alternates: {
      canonical: currentUrl,
      languages: hreflangLanguages,
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

/** Stable entity id — same across all locales so Google merges Knowledge Graph signals. */
export const ORGANIZATION_ENTITY_ID = `${baseUrl}/#organization`;

const ORGANIZATION_SAME_AS = [
  'https://t.me/telebotsnowayrm',
  'https://www.instagram.com/telebotsnowayrm/',
  'https://t.me/TeleBotsNowayrmChannel',
  'https://github.com/romchhh',
  `${baseUrl}/schema/organization`,
] as const;

function organizationPostalAddress() {
  return {
    '@type': 'PostalAddress' as const,
    streetAddress: legal.legalAddress,
    addressLocality: 'Київ',
    addressRegion: 'Київ',
    postalCode: '01000',
    addressCountry: 'UA',
  };
}

function organizationDescription(lang: Language): string {
  if (lang === 'uk') {
    return 'TeleBots (telebots.site) — українська студія розробки Telegram-ботів і сайтів під ключ: лендинги, e-commerce, SEO, CRM та оплата. ФОП Федонюк Р.І., Київ. 200+ проєктів.';
  }
  if (lang === 'en') {
    return 'TeleBots (telebots.site) is a Kyiv, Ukraine software studio for Telegram bots, websites, landings and e-commerce — CRM, payments and SEO. Not a cybersecurity group. 200+ projects.';
  }
  if (lang === 'pl') {
    return 'TeleBots (telebots.site) — studio z Kijowa: boty Telegram, strony, landingi i e-commerce, CRM, płatności i SEO. To nie grupa cyberbezpieczeństwa. 200+ projektów.';
  }
  return 'TeleBots (telebots.site) — студия в Киеве: Telegram-боты, сайты, лендинги и e-commerce, CRM, оплата и SEO. Не связана с хакерскими группировками. 200+ проектов.';
}

export function generateOrganizationSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ENTITY_ID,
    name: 'TeleBots',
    legalName: legal.companyName,
    alternateName: ['TeleBots.site', 'TeleBots Ukraine', 'TeleBots Kyiv'],
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/whitelogo_new.png`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/whitelogo_new.png`,
    description: organizationDescription(lang),
    disambiguatingDescription:
      lang === 'en'
        ? 'Ukrainian web and Telegram bot development agency at telebots.site — unrelated to any threat actor or malware group named TeleBots.'
        : lang === 'pl'
          ? 'Ukraińska agencja tworzenia stron i botów Telegram (telebots.site) — bez związku z grupami cyberprzestępczymi o podobnej nazwie.'
          : lang === 'ru'
            ? 'Украинская студия разработки сайтов и Telegram-ботов (telebots.site) — не связана с хакерскими группировками под похожим именем.'
            : 'Українська студія розробки сайтів і Telegram-ботів (telebots.site) — не пов’язана з хакерськими угрупованнями під схожою назвою.',
    taxID: legal.edrpou,
    identifier: {
      '@type': 'PropertyValue',
      name: 'EDRPOU',
      value: legal.edrpou,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: legal.phone,
      contactType: 'customer service',
      email: legal.email,
      areaServed: ['UA', 'US', 'PL', 'EU'],
      availableLanguage: ['uk', 'en', 'pl', 'ru'],
    },
    sameAs: [...ORGANIZATION_SAME_AS],
    address: organizationPostalAddress(),
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: lang === 'en' || lang === 'pl' ? 'Roman Fedoniuk' : 'Роман Федонюк',
      jobTitle: 'CEO',
      image: `${baseUrl}/other/roman-fedoniuk.webp`,
      url: `${baseUrl}/${lang}/about`,
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
    brand: {
      '@type': 'Brand',
      name: 'TeleBots',
      url: baseUrl,
    },
    knowsAbout: [
      'Telegram bot development',
      'Website development',
      'E-commerce',
      'Next.js',
      'Chatbots',
      'Business automation',
    ],
  };
}

export function generateLocalBusinessSchema(lang: Language = 'uk') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'TeleBots',
    legalName: legal.companyName,
    alternateName: ['TeleBots.site', 'TeleBots Ukraine'],
    image: `${baseUrl}/whitelogo_new.png`,
    logo: `${baseUrl}/whitelogo_new.png`,
    url: `${baseUrl}/${lang}`,
    telephone: legal.phone,
    email: legal.email,
    description: organizationDescription(lang),
    parentOrganization: {
      '@id': ORGANIZATION_ENTITY_ID,
    },
    address: organizationPostalAddress(),
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
    sameAs: [...ORGANIZATION_SAME_AS],
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

/** Stable case-study dates for Article JSON-LD + Open Graph (no per-case chronology yet). */
export const CASE_ARTICLE_PUBLISHED = '2025-01-15';
export const CASE_ARTICLE_MODIFIED = '2026-08-01';

export function generateArticleSchema(caseId: string, lang: Language = 'uk') {
  if (!isFlagshipCase(caseId)) return null;

  const casesData = cases[lang] || cases.uk;
  const caseData = (casesData as Record<string, {
    title: string;
    subtitle?: string;
    description?: string;
    category?: string;
    technologies?: string[];
    features?: string[];
    mainImage: string;
  }>)[caseId];

  if (!caseData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseData.title,
    description: buildCaseSeoDescription(caseData, lang),
    image: `${baseUrl}${caseData.mainImage}`,
    datePublished: CASE_ARTICLE_PUBLISHED,
    dateModified: CASE_ARTICLE_MODIFIED,
    articleSection: caseData.category || 'Case Study',
    keywords: buildCaseSeoKeywords({
      title: caseData.title,
      category: caseData.category,
      technologies: caseData.technologies,
      features: caseData.features,
    }, lang),
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
        url: `${baseUrl}/whitelogo_new.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${lang}/portfolio/${caseId}`,
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string, lang: Language = 'uk', serviceUrl?: string) {
  const schema: Record<string, unknown> = {
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
  if (serviceUrl) schema.url = serviceUrl;
  return schema;
}

type ServiceProductKey = 'websitesPage' | 'chatbotsPage' | 'designPage' | 'parsersPage';

type ProductReviewCopy = {
  author: string;
  body: Record<Language, string>;
};

const SERVICE_PRODUCT_CONFIG: Record<
  ServiceProductKey,
  {
    slug: string;
    imagePath: string;
    priceMin: number;
    priceMax: number;
    names: Record<Language, string>;
    review: ProductReviewCopy;
  }
> = {
  websitesPage: {
    slug: 'websites',
    imagePath: '/services/services-websites.jpg',
    priceMin: 150,
    priceMax: 800,
    names: {
      uk: 'Розробка веб-сайтів та інтернет-магазинів',
      en: 'Website & e-commerce development',
      pl: 'Tworzenie stron i sklepów internetowych',
      ru: 'Разработка сайтов и интернет-магазинов',
    },
    review: {
      author: 'New Study Line',
      body: {
        uk: 'Сайт школи англійської з SEO-блогом та онлайн-тестуванням — повноцінний інструмент для залучення лідів.',
        en: 'English school website with SEO blog and online testing — a full lead-generation tool.',
        pl: 'Strona szkoły języka angielskiego z blogiem SEO i testami online — narzędzie do pozyskiwania leadów.',
        ru: 'Сайт школы английского с SEO-блогом и онлайн-тестированием — полноценный инструмент для лидов.',
      },
    },
  },
  chatbotsPage: {
    slug: 'chatbots',
    imagePath: '/services/services-chatbots.jpg',
    priceMin: 100,
    priceMax: 300,
    names: {
      uk: 'Розробка чат-ботів (Telegram, WhatsApp, Viber)',
      en: 'Chatbot development (Telegram, WhatsApp, Viber)',
      pl: 'Rozwój chatbotów (Telegram, WhatsApp, Viber)',
      ru: 'Разработка чат-ботов (Telegram, WhatsApp, Viber)',
    },
    review: {
      author: 'Cosmy',
      body: {
        uk: 'Telegram-бот для інтернет-магазину: 400+ клієнтів, на 40% зросла зацікавленість завдяки автоматизації замовлень.',
        en: 'Telegram bot for e-commerce: 400+ clients and 40% higher engagement through order automation.',
        pl: 'Bot Telegram dla sklepu: 400+ klientów i 40% większe zaangażowanie dzięki automatyzacji zamówień.',
        ru: 'Telegram-бот для интернет-магазина: 400+ клиентов и рост вовлечённости на 40% за счёт автоматизации заказов.',
      },
    },
  },
  designPage: {
    slug: 'design',
    imagePath: '/services/services-design.jpg',
    priceMin: 150,
    priceMax: 600,
    names: {
      uk: 'Дизайн: лого, айдентика, UI/UX',
      en: 'Design: logo, brand identity, UI/UX',
      pl: 'Design: logo, identyfikacja, UI/UX',
      ru: 'Дизайн: логотип, айдентика, UI/UX',
    },
    review: {
      author: '13VPLUS',
      body: {
        uk: 'Магазин жіночого одягу з сучасним брендингом і зручним шляхом користувача до покупки.',
        en: 'Women’s fashion store with modern branding and a clear path from browse to purchase.',
        pl: 'Sklep odzieży damskiej z nowoczesnym brandingiem i wygodną ścieżką do zakupu.',
        ru: 'Магазин женской одежды с современным брендингом и удобным путём пользователя к покупке.',
      },
    },
  },
  parsersPage: {
    slug: 'parsers',
    imagePath: '/services/services-parsers.jpg',
    priceMin: 200,
    priceMax: 500,
    names: {
      uk: 'Розробка парсерів та збору даних',
      en: 'Parser & data collection development',
      pl: 'Rozwój parserów i zbierania danych',
      ru: 'Разработка парсеров и сбора данных',
    },
    review: {
      author: 'TeleBots',
      body: {
        uk: 'Автоматизований збір даних з маркетплейсів і оголошень — економія годин ручної роботи для аналітики.',
        en: 'Automated data collection from marketplaces and listings — hours of manual work saved for analytics.',
        pl: 'Automatyczne zbieranie danych z marketplace’ów i ogłoszeń — oszczędność godzin pracy ręcznej.',
        ru: 'Автоматизированный сбор данных с маркетплейсов и объявлений — экономия часов ручной работы.',
      },
    },
  },
};

const DIGITAL_SHIPPING_COUNTRIES = ['UA', 'US', 'PL', 'GB', 'DE', 'CA', 'AU'] as const;

function productPriceValidUntil(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().slice(0, 10);
}

function buildDigitalShippingDetails() {
  return {
    '@type': 'OfferShippingDetails',
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: '0',
      currency: 'USD',
    },
    shippingDestination: DIGITAL_SHIPPING_COUNTRIES.map((country) => ({
      '@type': 'DefinedRegion',
      addressCountry: country,
    })),
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 5,
        unitCode: 'DAY',
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 0,
        unitCode: 'DAY',
      },
    },
  };
}

function buildMerchantReturnPolicy(lang: Language) {
  return {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: [...DIGITAL_SHIPPING_COUNTRIES],
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    merchantReturnLink: `${baseUrl}/${lang}/refund`,
  };
}

export function generateProductSchema(serviceName: string, description: string, lang: Language = 'uk') {
  const config = SERVICE_PRODUCT_CONFIG[serviceName as ServiceProductKey];
  const slug = config?.slug ?? 'websites';
  const imagePath = config?.imagePath ?? '/services/services-websites.jpg';
  const priceMin = config?.priceMin ?? 100;
  const priceMax = config?.priceMax ?? priceMin;
  const name = config?.names[lang] ?? serviceName;
  const productUrl = `${baseUrl}/${lang}/services/${slug}`;
  const imageUrl = `${baseUrl}${imagePath}`;

  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    price: priceMin.toFixed(2),
    priceCurrency: 'USD',
    priceValidUntil: productPriceValidUntil(),
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url: productUrl,
    seller: {
      '@type': 'Organization',
      name: 'TeleBots',
      url: `${baseUrl}/${lang}`,
    },
    shippingDetails: buildDigitalShippingDetails(),
    hasMerchantReturnPolicy: buildMerchantReturnPolicy(lang),
  };

  if (priceMax > priceMin) {
    offer.priceSpecification = {
      '@type': 'PriceSpecification',
      price: priceMin.toFixed(2),
      minPrice: priceMin.toFixed(2),
      maxPrice: priceMax.toFixed(2),
      priceCurrency: 'USD',
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name,
    description,
    image: [imageUrl],
    url: productUrl,
    sku: `telebots-${slug}`,
    brand: {
      '@type': 'Brand',
      name: 'TeleBots',
    },
    offers: offer,
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
    inLanguage: lang,
    description: lang === 'uk'
      ? 'Telegram-боти, сайти та інтернет-магазини під ключ. 200+ проєктів, швидкий старт від 24 год. TeleBots.'
      : lang === 'en'
      ? 'Website and e-commerce development; Telegram bots and chatbots. 200+ projects. Quick start in 24 hours.'
      : lang === 'pl'
      ? 'Tworzenie stron, sklepów i landingów; boty Telegram i chatboty. 200+ projektów. Szybki start w 24 godziny.'
      : 'Разработка сайтов, интернет-магазинов и лендингов; телеграм боты и чат-боты. 200+ проектов. Быстрый старт за 24 часа.',
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
      ? 'Замовити розробку сайту, інтернет-магазину або телеграм бота. Безкоштовна консультація. Київ / віддалено.'
      : lang === 'en'
      ? 'Order website, e-commerce, or Telegram bot development. Free consultation. Remote-friendly.'
      : lang === 'pl'
      ? 'Zamów stronę, sklep online lub bota Telegram. Bezpłatna konsultacja.'
      : 'Заказать разработку сайта, интернет-магазина или телеграм бота. Бесплатная консультация.',
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
    name:
      lang === 'uk'
        ? 'Кейси розробки сайтів та телеграм ботів'
        : lang === 'en'
          ? 'Website & Telegram Bot Development Cases'
          : lang === 'pl'
            ? 'Realizacje: strony www i boty Telegram'
            : 'Кейсы разработки сайтов и телеграм-ботов',
    description:
      lang === 'uk'
        ? 'Кейси розробки сайтів, інтернет-магазинів, телеграм ботів і чат-ботів. 200+ проєктів.'
        : lang === 'en'
          ? 'Cases: websites, e-commerce, Telegram bots, chatbots. 200+ projects.'
          : lang === 'pl'
            ? 'Realizacje: strony, sklepy, boty Telegram i chatboty. 200+ projektów.'
            : 'Кейсы: сайты, интернет-магазины, телеграм боты и чат-боты. 200+ проектов.',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: toAbsoluteUrl(item.url),
      description: item.description,
    })),
  };
}

export function generateArticleSchemaForBlog(
  title: string,
  description: string,
  publishedTime: string,
  lang: Language = 'uk',
  options?: { modifiedTime?: string; image?: string; slug?: string }
) {
  const slug = options?.slug ?? '';
  const pageUrl = slug ? `${baseUrl}/uk/blog/${slug}` : `${baseUrl}/uk/blog`;
  const imageUrl = options?.image
    ? options.image.startsWith('http')
      ? options.image
      : `${baseUrl}${options.image}`
    : `${baseUrl}/other/about-hero.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${pageUrl}#article`,
    headline: title,
    description,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    image: [imageUrl],
    inLanguage: 'uk',
    datePublished: publishedTime,
    dateModified: options?.modifiedTime ?? publishedTime,
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
        url: `${baseUrl}/whitelogo_new.png`,
      },
    },
  };
}

export function generateCollectionPageSchema(lang: Language = 'uk') {
  const casesData = cases[lang as keyof typeof cases] || cases.uk;
  const caseCount = Object.keys(casesData).length;

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name:
      lang === 'uk'
        ? 'Кейси розробки сайтів та ботів — TeleBots'
        : lang === 'en'
          ? 'Website & Bot Development Cases — TeleBots'
          : lang === 'pl'
            ? 'Realizacje stron i botów — TeleBots'
            : 'Кейсы разработки сайтов и ботов — TeleBots',
    description:
      lang === 'uk'
        ? 'Кейси розробки сайтів, інтернет-магазинів, телеграм ботів і чат-ботів. Приклади проєктів.'
        : lang === 'en'
          ? 'Website, e-commerce, Telegram bot and chatbot cases. Project examples.'
          : lang === 'pl'
            ? 'Realizacje stron, sklepów, botów Telegram i chatbotów.'
            : 'Кейсы: сайты, магазины, телеграм боты и чат-боты.',
    url: `${baseUrl}/${lang}/portfolio`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: caseCount,
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
  };
}








