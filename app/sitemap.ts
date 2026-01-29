import { MetadataRoute } from 'next';
import { cases } from '@/components/cases';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['uk', 'en', 'pl', 'ru'];
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/about',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/services',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/portfolio',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/blog',
      priority: 0.8,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/privacy',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/terms',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/refund',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Додаємо основні сторінки
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            uk: `${baseUrl}/uk${route.path}`,
            en: `${baseUrl}/en${route.path}`,
            pl: `${baseUrl}/pl${route.path}`,
            ru: `${baseUrl}/ru${route.path}`,
          },
        },
      });
    });
  });

  // Додаємо сторінки кейсів (портфоліо)
  languages.forEach((lang) => {
    const casesData = cases[lang as keyof typeof cases] || cases.uk;
    const caseIds = Object.keys(casesData);
    
    caseIds.forEach((caseId) => {
      // Використовуємо дату з об'єкта кейсу, якщо вона є, інакше поточну дату
      const caseData = (casesData as any)[caseId];
      let lastModified = now;
      
      // Якщо в майбутньому додасте дату створення/оновлення кейсів, можна використати її тут
      // if (caseData?.dateModified) lastModified = new Date(caseData.dateModified);
      
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/portfolio/${caseId}`,
        lastModified,
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

  // Сортуємо за пріоритетом (вища пріоритетність перша)
  sitemapEntries.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return sitemapEntries;
}
