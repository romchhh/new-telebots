import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormWithSuccess from '@/components/ContactFormWithSuccess';
import StructuredData from '@/components/StructuredData';
import ContactPageHero from '@/components/ContactPageHero';
import { translations, type Language } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';
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

        <section id="contact-form" className={`bg-white py-12 md:py-16 ${SITE_PX}`}>
          <div className="grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
            <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
              <ContactFormWithSuccess t={t} lang={lang} hideTitle />
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
