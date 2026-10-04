import ServicesHubHero from '@/components/ServicesHubHero';
import ServiceItem from '@/components/ServiceItem';
import SiteCtaBand from '@/components/SiteCtaBand';
import ContactFormSection from '@/components/ContactFormSection';
import StructuredData from '@/components/StructuredData';
import { translations, type Language } from '@/components/translations';
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
        <ServicesHubHero t={t} />
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
        <SiteCtaBand
          title={t.about.homeCta.title}
          text={t.about.homeCta.text}
          contactLabel={t.about.homeCta.contactLabel}
          pricingLabel={t.about.homeCta.pricingLabel}
          portfolioLabel={t.about.homeCta.portfolioLabel}
          pricingHref={`/${lang}/pricing`}
          portfolioHref={`/${lang}/portfolio`}
        />
        <ContactFormSection t={t} lang={lang} className="border-t border-neutral-100 bg-white" />
      </main>
    </>
  );
}
