import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { getServicesHubOgHero } from '@/lib/ogHeroCopy';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getHubPageSeo } from '@/lib/seoPagesRegistry';
import { siteUrl as baseUrl } from '@/lib/site';

/** Як ZOND `createPathMetadata(locale, "/services", servicesIndexMeta[locale])`. */
export function buildServicesHubMetadata(lang: Language): Metadata {
  const { title, description, keywords } = getHubPageSeo('services', lang);
  const heroOg = getServicesHubOgHero(lang);

  return generateSEOMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/${lang}/services`,
    lang,
    openGraphTitle: heroOg.title,
    openGraphDescription: heroOg.description,
    ogBackground: '/services/services-hero_new.jpg',
  });
}
