import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { getServiceDetailOgHero } from '@/lib/ogHeroCopy';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getServicePageSeoMeta } from '@/lib/servicePageSeoMeta';
import { siteUrl as baseUrl } from '@/lib/site';
import { SERVICE_IDS, type ServiceId } from './metadata';

/** Як ZOND `createServiceMetadata(locale, slug, serviceMeta[locale][slug])`. */
export function buildServiceDetailMetadata(lang: Language, serviceId: ServiceId): Metadata {
  const meta = getServicePageSeoMeta(serviceId, lang);
  const heroOg = getServiceDetailOgHero(lang, serviceId);

  return generateSEOMetadata({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    url: `${baseUrl}/${lang}/services/${serviceId}`,
    lang,
    openGraphTitle: heroOg?.title || meta.openGraphTitle,
    openGraphDescription: heroOg?.description || meta.openGraphDescription,
  });
}

export function isServiceId(value: string): value is ServiceId {
  return SERVICE_IDS.includes(value as ServiceId);
}
