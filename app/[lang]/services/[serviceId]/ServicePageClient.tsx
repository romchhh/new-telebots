import type { ReactNode } from 'react';
import PortfolioShowcaseScroller, {
  PortfolioShowcaseHeading,
} from '@/components/PortfolioShowcaseScroller';
import type { ServicePageCaseCard } from '@/lib/servicePageCases';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ServiceOutcomesSection from '@/components/ServiceOutcomesSection';
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
} from '@/lib/siteUi';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';
import type { ServiceLongFormBundle } from '@/lib/servicePagesSeoContent';
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
          {serviceExtended.descriptionSectionTitle ? (
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h2
                className="max-w-4xl text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {serviceExtended.descriptionSectionTitle}
              </h2>
              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.subtitle}
              </p>
            </div>
          ) : null}
          {longForm ? (
            <div className="mx-auto max-w-4xl space-y-7 md:space-y-8">
              {longForm.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg font-normal leading-relaxed text-gray-700 md:text-xl"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p
              className="mx-auto max-w-4xl text-center text-lg font-normal leading-relaxed text-gray-700 md:text-xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {service.description}
            </p>
          )}

          {!longForm && serviceStructure ? (
            <div className="space-y-6">
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
        </div>
      </section>

      {longForm ? <ServiceSeoLongForm copy={longForm} /> : null}

      {blockTitles && blockContent?.whatWeDo?.length ? (
        <section className={`border-t border-gray-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
          <div className="mx-auto w-full max-w-[90rem] space-y-12 md:space-y-20">
            {[
              { title: blockTitles.whatWeDo, items: blockContent.whatWeDo, index: 5 },
              { title: blockTitles.terms, items: blockContent.terms || [], index: 6 },
              { title: blockTitles.integrations, items: blockContent.integrations || [], index: 7 },
            ].map(({ title: groupTitle, items: groupItems, index }) => (
              <div key={groupTitle}>
                <div className="mb-10 text-center md:mb-14">
                  <span
                    className="mb-[-1.25rem] block select-none text-[5rem] font-light leading-none text-gray-100 md:mb-[-2rem] md:text-[8rem]"
                    style={{ fontFamily: 'var(--font-display)' }}
                    aria-hidden
                  >
                    {String(index).padStart(2, '0')}
                  </span>
                  <h2
                    className="relative z-10 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-black"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {groupTitle}
                  </h2>
                </div>
                <div className={SERVICE_CARD_GRID}>
                  {groupItems.map((item, i) => (
                    <div key={item} className={`${SERVICE_CARD_SIZE} ${SERVICE_CARD}`}>
                      <KeyboardKeyBadge
                        symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                        size="md"
                        className="mb-4 sm:mb-5"
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

      {hasPricing(serviceId) ? (
        <PricingTable
          pricing={t.services[getPricingKey(serviceId)]}
          lang={lang}
          hideCategoryLabel
          sectionIndex={9}
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
        className="pt-16 md:pt-20"
      />

      <ContactFormSection t={t} lang={lang} serviceName={serviceTitle} className="bg-white" />
    </main>
  );
}
