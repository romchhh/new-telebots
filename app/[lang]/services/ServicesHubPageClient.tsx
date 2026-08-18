import ServicesPassionSection from '@/components/ServicesPassionSection';
import ServiceItem from '@/components/ServiceItem';
import StatsSection from '@/components/StatsSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormWithSuccess from '@/components/ContactFormWithSuccess';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';

export default function ServicesHubPageClient({ lang }: { lang: Language }) {
  const t = translations[lang];

  const services = [
    {
      key: 'websitesPage' as const,
      image: '/services/services-websites.jpg',
      imagePosition: 'right' as const,
    },
    {
      key: 'chatbotsPage' as const,
      image: '/services/services-chatbots.jpg',
      imagePosition: 'left' as const,
    },
    {
      key: 'designPage' as const,
      image: '/services/services-design.jpg',
      imagePosition: 'right' as const,
    },
  ];

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[
          { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
          { name: BREADCRUMB_SERVICES[lang], url: `/${lang}/services` },
        ]}
      />
      {services.map((service) => (
        <StructuredData
          key={service.key}
          type="serviceOffer"
          lang={lang}
          serviceName={service.key}
          serviceDescription={t.services[service.key]?.description || ''}
        />
      ))}
      <main id="main-content">
        <ServicesPassionSection t={t} />
        <div id="services-list" className="scroll-mt-20 pt-12 md:scroll-mt-24 md:pt-16 lg:pt-24">
          {services.map((service) => (
            <ServiceItem
              key={service.key}
              serviceKey={service.key}
              image={service.image}
              imagePosition={service.imagePosition}
              lang={lang}
              t={t}
            />
          ))}
        </div>
        <StatsSection t={t} />
        <section className={`border-t border-gray-100 bg-white py-16 md:py-24 ${SITE_PX}`}>
          <div className={`${SITE_INNER} grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200`}>
            <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
              <ContactFormWithSuccess t={t} lang={lang} />
            </div>
            <div className="mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20">
              <ContactDetailsColumn t={t} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
