import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { getServicePageSeoMeta } from '@/lib/servicePageSeoMeta';
import { siteUrl as baseUrl } from '@/lib/site';
import { SERVICE_IDS, SERVICE_IMAGES, type ServiceId } from './metadata';

/** Як ZOND `createServiceMetadata(locale, slug, serviceMeta[locale][slug])`. */
export function buildServiceDetailMetadata(lang: Language, serviceId: ServiceId): Metadata {
  const meta = getServicePageSeoMeta(serviceId, lang);

  return generateSEOMetadata({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    image: SERVICE_IMAGES[serviceId],
    url: `${baseUrl}/${lang}/services/${serviceId}`,
    lang,
    openGraphTitle: meta.openGraphTitle,
    openGraphDescription: meta.openGraphDescription,
  });
}

export function isServiceId(value: string): value is ServiceId {
  return SERVICE_IDS.includes(value as ServiceId);
}
