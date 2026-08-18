import { notFound } from 'next/navigation';
import FullBleedHeroImage from '@/components/FullBleedHeroImage';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { getPortfolioCards } from '@/lib/portfolioCards';
import { getServiceSeoLongForm } from '@/lib/servicePagesSeoContent';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';
import { siteUrl as baseUrl } from '@/lib/site';
import SitePageShell from '@/components/SitePageShell';
import ServicePageClient from './ServicePageClient';
import {
  SERVICE_IDS,
  SERVICE_IMAGES,
  getServiceKeyForTranslations,
  type ServiceId,
} from './metadata';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; serviceId: string }>;
}) {
  const { lang: langParam, serviceId: serviceIdParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const serviceId = SERVICE_IDS.includes(serviceIdParam as ServiceId)
    ? (serviceIdParam as ServiceId)
    : null;

  if (!serviceId) notFound();

  const serviceKey = getServiceKeyForTranslations(serviceId);
  const t = translations[lang];
  const service = serviceKey ? t.services[serviceKey] : null;
  if (!service) notFound();

  const longForm = getServiceSeoLongForm(lang, serviceId);
  const desiredCategory = serviceId === 'chatbots' ? 'chatbots' : 'websites';
  const cases = getPortfolioCards(lang)
    .filter((card) => card.category === desiredCategory)
    .map(({ id, image, title, subtitle, tags, highlights }) => ({
      id,
      image,
      title,
      subtitle,
      tags,
      highlights,
    }));

  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
    { name: BREADCRUMB_SERVICES[lang], url: `/${lang}/services` },
    { name: service.title, url: `/${lang}/services/${serviceId}` },
  ];

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData type="breadcrumb" lang={lang} breadcrumbs={breadcrumbs} />
      <StructuredData
        type="service"
        lang={lang}
        serviceName={service.title}
        serviceDescription={service.subtitle}
        serviceUrl={`${baseUrl}/${lang}/services/${serviceId}`}
      />
      {longForm?.faq?.length ? (
        <StructuredData
          type="faq"
          lang={lang}
          faqs={longForm.faq.map((item) => ({ question: item.question, answer: item.answer }))}
        />
      ) : null}
      <SitePageShell initialLang={lang} t={t} modalServiceName={service.title}>
        <ServicePageClient
          lang={lang}
          serviceId={serviceId}
          cases={cases}
          longForm={longForm}
          heroBackground={
            <FullBleedHeroImage
              src={SERVICE_IMAGES[serviceId]}
              alt={`${service.title} — TeleBots`}
            />
          }
        />
      </SitePageShell>
    </>
  );
}
