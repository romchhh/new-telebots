import { MetadataRoute } from 'next';
import { siteUrl as baseUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },

    ],
    host: baseUrl,
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/blog-sitemap.xml`],
  };
}

