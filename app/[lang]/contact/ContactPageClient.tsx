import ContactFormSection from '@/components/ContactFormSection';
import StructuredData from '@/components/StructuredData';
import ContactPageHero from '@/components/ContactPageHero';
import SiteCtaBand from '@/components/SiteCtaBand';
import { translations, type Language } from '@/components/translations';
import { BREADCRUMB_HOME, BREADCRUMB_CONTACT } from '@/lib/breadcrumbLabels';

export default function ContactPageClient({ lang }: { lang: Language }) {
  const t = translations[lang];

  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
    { name: BREADCRUMB_CONTACT[lang], url: `/${lang}/contact` },
  ];

  const breadcrumbItems = breadcrumbs.map((crumb, index) => ({
    name: crumb.name,
    href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
  }));

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData type="contactPage" lang={lang} />
      <StructuredData type="breadcrumb" lang={lang} breadcrumbs={breadcrumbs} />
      <main id="main-content">
        <ContactPageHero
          title={t.contact.formTitle}
          subtitle={t.contact.help}
          breadcrumbs={breadcrumbItems}
        />

        <ContactFormSection t={t} lang={lang} className="bg-white pt-0" />

        <SiteCtaBand
          title={t.about.homeCta.title}
          text={t.about.homeCta.text}
          contactLabel={t.about.homeCta.contactLabel}
          pricingLabel={t.about.homeCta.pricingLabel}
          portfolioLabel={t.about.homeCta.portfolioLabel}
          pricingHref={`/${lang}/pricing`}
          portfolioHref={`/${lang}/portfolio`}
        />
      </main>
    </>
  );
}
