import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getHubPageSeo } from '@/lib/seoPagesRegistry';
import { siteUrl as baseUrl } from '@/lib/site';

/** Як ZOND `createPathMetadata(locale, "/services", servicesIndexMeta[locale])`. */
export function buildServicesHubMetadata(lang: Language): Metadata {
  const { title, description, keywords } = getHubPageSeo('services', lang);

  return generateSEOMetadata({
    title,
    description,
    keywords,
    image: '/services/services-hero_new.jpg',
    url: `${baseUrl}/${lang}/services`,
    lang,
  });
}
