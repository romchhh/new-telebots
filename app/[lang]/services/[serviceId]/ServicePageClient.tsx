import type { ReactNode } from 'react';
import PortfolioShowcaseScroller, {
  PortfolioShowcaseHeading,
} from '@/components/PortfolioShowcaseScroller';
import type { ServicePageCaseCard } from '@/lib/servicePageCases';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ServiceOutcomesSection from '@/components/ServiceOutcomesSection';
import {
  ServicePageFeaturePhoto,
  ServicePagePhotoStrip,
  ServicePageWidePhoto,
} from '@/components/ServicePagePhotos';
import SiteCtaBand from '@/components/SiteCtaBand';
import ContactFormSection from '@/components/ContactFormSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceSeoLongForm from '@/components/ServiceSeoLongForm';
import PricingTable from '@/components/PricingTable';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { translations, type Language } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';
import {
  SERVICE_CARD,
  SERVICE_CARD_GRID,
  SERVICE_CARD_SIZE,
  SERVICE_CARD_TITLE,
  SERVICE_SECTION_Y,
  TYPE_DISPLAY_H2,
} from '@/lib/siteUi';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';
import type { ServiceLongFormBundle } from '@/lib/servicePagesSeoContent';
import { getServicePageMedia } from '@/lib/servicePageMedia';
import { getServicePagePhotoCopy } from '@/lib/servicePagePhotoCopy';
import {
  getServiceKeyForTranslations,
  hasPricing,
  getPricingKey,
  type ServiceId,
} from './metadata';
import { getServiceOutcomesCopy } from '@/lib/serviceOutcomesCopy';

type ServicePageViewProps = {
  lang: Language;
  serviceId: ServiceId;
  heroBackground: ReactNode;
  cases: ServicePageCaseCard[];
  longForm: ServiceLongFormBundle | null;
};

export default function ServicePageClient({
  lang,
  serviceId,
  heroBackground,
  cases,
  longForm,
}: ServicePageViewProps) {
  const t = translations[lang];
  const serviceKey = getServiceKeyForTranslations(serviceId);
  const service = serviceKey ? t.services[serviceKey] : null;
  if (!serviceKey || !service) return null;

  const serviceTitle = service.title;
  const serviceStructure =
    service && (service as { structure?: {
      mainTitle: string;
      leadGenTitle: string;
      supportTitle: string;
      salesTitle: string;
      crmTitle: string;
    } }).structure
      ? (service as { structure: {
          mainTitle: string;
          leadGenTitle: string;
          supportTitle: string;
          salesTitle: string;
          crmTitle: string;
        } }).structure
      : null;

  const serviceExtended = service as typeof service & {
    serviceHero?: import('@/components/ServiceHeroSection').ServiceHeroCopy;
    audienceSection?: import('@/components/ServiceAudienceSection').ServiceAudienceCopy;
    outcomesSection?: import('@/components/ServiceOutcomesSection').ServiceOutcomesCopy;
    descriptionSectionTitle?: string;
  };
  const heroCopy = serviceExtended.serviceHero;
  const audienceCopy = longForm?.audienceSection ?? serviceExtended.audienceSection;
  const outcomesCopy = serviceExtended.outcomesSection ?? getServiceOutcomesCopy(lang, serviceId);
  const pageMedia = getServicePageMedia(serviceId);
  const photoCopy = getServicePagePhotoCopy(lang, serviceId);

  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
    { name: BREADCRUMB_SERVICES[lang], url: `/${lang}/services` },
    { name: serviceTitle, url: `/${lang}/services/${serviceId}` },
  ];

  const blocksRaw = (t.services as { servicePageBlocks?: Record<string, unknown> }).servicePageBlocks;
  const blockContent =
    blocksRaw && typeof blocksRaw === 'object'
      ? (blocksRaw[serviceId] as { whatWeDo?: string[]; terms?: string[]; integrations?: string[] } | undefined)
      : undefined;
  const blockTitles = blocksRaw
    ? {
        whatWeDo: (blocksRaw.whatWeDoTitle as string) || 'Що ми робимо',
        terms: (blocksRaw.termsTitle as string) || 'Умови',
        integrations: (blocksRaw.integrationsTitle as string) || 'Інтеграції',
      }
    : null;

  return (
    <main id="main-content">
      {heroCopy ? (
        <ServiceHeroSection
          heroBackground={heroBackground}
          hero={heroCopy}
          viewButtonLabel={t.hero.viewButton}
          orderButtonLabel={service.button}
          scrollTargetId="service-main"
        />
      ) : null}

      <Breadcrumbs
        items={breadcrumbs.map((crumb, index) => ({
          name: crumb.name,
          href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
        }))}
      />

      {audienceCopy && audienceCopy.items.length > 0 ? (
        <section id="service-main" className="border-t border-gray-100 bg-white">
          <ServiceAudienceSection copy={audienceCopy} />
        </section>
      ) : null}

      {outcomesCopy ? <ServiceOutcomesSection copy={outcomesCopy} /> : null}

      <ServicePagePhotoStrip
        media={pageMedia}
        title={photoCopy.title}
        lead={photoCopy.lead}
        alts={photoCopy.alts}
      />

      {cases.length > 0 ? (
        <PortfolioShowcaseScroller
          lang={lang}
          cards={cases}
          sectionId="service-portfolio"
          headingId="service-portfolio-heading"
          heading={
            <PortfolioShowcaseHeading
              line1={t.services.servicePagePortfolioLine1 ?? t.services.servicePageBentoTitle}
              line2={t.services.servicePagePortfolioLine2}
            />
          }
          viewAllHref={`/${lang}/portfolio`}
          viewAllLabel={t.portfolio.viewPortfolio}
          scrollPrevLabel={t.portfolio.homeScrollPrev ?? 'Previous'}
          scrollNextLabel={t.portfolio.homeScrollNext ?? 'Next'}
          categoryCopy={{
            filterWebsites: t.portfolio.filterWebsites,
            filterChatbots: t.portfolio.filterChatbots,
          }}
          className="border-t border-neutral-100"
        />
      ) : null}

      <section
        id={!audienceCopy?.items?.length ? 'service-main' : undefined}
        className={`border-t border-gray-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}
      >
        <div className="mx-auto w-full max-w-[90rem]">
          <ServicePageFeaturePhoto src={pageMedia.feature} alt={photoCopy.featureAlt}>
            {serviceExtended.descriptionSectionTitle ? (
              <div className="mb-6 md:mb-8">
                <h2
                  className={`max-w-4xl text-neutral-900 ${TYPE_DISPLAY_H2}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {serviceExtended.descriptionSectionTitle}
                </h2>
                <p
                  className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {service.subtitle}
                </p>
              </div>
            ) : null}
            {longForm ? (
              <div className="space-y-5 md:space-y-6">
                {longForm.aboutParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base font-normal leading-relaxed text-neutral-700 md:text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p
                className="text-base font-normal leading-relaxed text-neutral-700 md:text-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>
            )}

            {!longForm && serviceStructure ? (
              <div className="mt-10 space-y-6">
                <h2 className="text-2xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                  {serviceStructure.mainTitle}
                </h2>
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold leading-tight tracking-tight text-black sm:text-2xl">
                    {serviceStructure.leadGenTitle}
                  </h2>
                  <h2 className="text-lg font-semibold leading-tight tracking-tight text-black sm:text-2xl">
                    {serviceStructure.supportTitle}
                  </h2>
                  <h2 className="text-lg font-semibold leading-tight tracking-tight text-black sm:text-2xl">
                    {serviceStructure.salesTitle}
                  </h2>
                  <h2 className="text-lg font-semibold leading-tight tracking-tight text-black sm:text-2xl">
                    {serviceStructure.crmTitle}
                  </h2>
                </div>
              </div>
            ) : null}
          </ServicePageFeaturePhoto>
        </div>
      </section>

      {longForm ? <ServiceSeoLongForm copy={longForm} /> : null}

      {blockTitles && blockContent?.whatWeDo?.length ? (
        <section className={`border-t border-gray-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
          <div className="mx-auto w-full max-w-[90rem] space-y-10 md:space-y-14">
            {[
              { title: blockTitles.whatWeDo, items: blockContent.whatWeDo },
              { title: blockTitles.terms, items: blockContent.terms || [] },
              { title: blockTitles.integrations, items: blockContent.integrations || [] },
            ].map(({ title: groupTitle, items: groupItems }) => (
              <div key={groupTitle}>
                <div className="mb-6 sm:mb-8">
                  <h2
                    className={`text-neutral-900 ${TYPE_DISPLAY_H2}`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {groupTitle}
                  </h2>
                </div>
                <div className={SERVICE_CARD_GRID}>
                  {groupItems.map((item, i) => (
                    <div
                      key={item}
                      className={`${SERVICE_CARD_SIZE} ${SERVICE_CARD} transition-colors hover:border-neutral-300 hover:bg-neutral-100/70`}
                    >
                      <KeyboardKeyBadge
                        symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                        size="md"
                        className="mb-3 sm:mb-4"
                      />
                      <p className={SERVICE_CARD_TITLE} style={{ fontFamily: 'var(--font-display)' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <ServicePageWidePhoto src={pageMedia.wide} alt={photoCopy.wideAlt} />

      {hasPricing(serviceId) ? (
        <PricingTable
          pricing={t.services[getPricingKey(serviceId)]}
          lang={lang}
          hideCategoryLabel
          centerHeader
        />
      ) : null}

      <SiteCtaBand
        title={t.about.homeCta.title}
        text={t.about.homeCta.text}
        contactLabel={t.about.homeCta.contactLabel}
        pricingLabel={t.about.homeCta.pricingLabel}
        portfolioLabel={t.about.homeCta.portfolioLabel}
        pricingHref={`/${lang}/pricing`}
        portfolioHref={`/${lang}/portfolio`}
        className="pt-10 md:pt-12"
      />

      <ContactFormSection t={t} lang={lang} serviceName={serviceTitle} className="bg-white" />
    </main>
  );
}
