import { MetadataRoute } from 'next';
import { cases } from '@/components/cases';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['uk', 'en', 'pl', 'ru'];
  const ogImage = `${baseUrl}/portfolio/portfolio-default.jpg`;
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    images?: string[];
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'daily', images: [ogImage, `${baseUrl}/other/hero-background.jpeg`] },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly', images: [`${baseUrl}/other/about-hero-macbook.jpg`, ogImage] },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly', images: [ogImage, `${baseUrl}/services/services-design.jpg`, `${baseUrl}/services/services-websites.jpg`, `${baseUrl}/services/services-chatbots.jpg`, `${baseUrl}/services/services-parsers.jpg`] },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly', images: [ogImage] },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily', images: [`${baseUrl}/other/blog-hero.jpg`, ogImage] },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly', images: [ogImage] },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Додаємо основні сторінки (з image sitemap для ключових сторінок)
  languages.forEach((lang) => {
    routes.forEach((route) => {
      const entry: MetadataRoute.Sitemap[number] = {
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
      };
      if (route.images?.length) {
        entry.images = route.images;
      }
      sitemapEntries.push(entry);
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
      
      const caseImage = caseData?.mainImage ? `${baseUrl}${caseData.mainImage}` : undefined;
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/portfolio/${caseId}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        ...(caseImage && { images: [caseImage] }),
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
