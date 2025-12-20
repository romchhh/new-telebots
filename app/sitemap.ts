import { MetadataRoute } from 'next';
import { cases } from '@/components/cases';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['uk', 'en', 'pl', 'ru'];
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Додаємо основні сторінки
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            uk: `${baseUrl}/uk${route}`,
            en: `${baseUrl}/en${route}`,
            pl: `${baseUrl}/pl${route}`,
            ru: `${baseUrl}/ru${route}`,
          },
        },
      });
    });
  });

  // Додаємо сторінки кейсів
  languages.forEach((lang) => {
    const casesData = cases[lang as keyof typeof cases] || cases.uk;
    const caseIds = Object.keys(casesData);
    
    caseIds.forEach((caseId) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/portfolio/${caseId}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            uk: `${baseUrl}/uk/portfolio/${caseId}`,
            en: `${baseUrl}/en/portfolio/${caseId}`,
            pl: `${baseUrl}/pl/portfolio/${caseId}`,
            ru: `${baseUrl}/ru/portfolio/${caseId}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
