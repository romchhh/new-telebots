import type { ReactNode } from 'react';
import Link from 'next/link';
import PortfolioCaseCard, { type PortfolioCaseCardData } from '@/components/PortfolioCaseCard';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormWithSuccess from '@/components/ContactFormWithSuccess';
import PricingTable from '@/components/PricingTable';
import SiteCtaBand from '@/components/SiteCtaBand';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceSeoLongForm from '@/components/ServiceSeoLongForm';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { translations, type Language } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';
import type { ServiceLongFormBundle } from '@/lib/servicePagesSeoContent';
import {
  getServiceKeyForTranslations,
  hasPricing,
  getPricingKey,
  type ServiceId,
} from './metadata';

type ServicePageViewProps = {
  lang: Language;
  serviceId: ServiceId;
  heroBackground: ReactNode;
  cases: PortfolioCaseCardData[];
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
    descriptionSectionTitle?: string;
  };
  const heroCopy = serviceExtended.serviceHero;
  const audienceCopy = longForm?.audienceSection ?? serviceExtended.audienceSection;

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

      <section
        id={!audienceCopy?.items?.length ? 'service-main' : undefined}
        className={`border-t border-gray-100 bg-white py-20 md:py-28 ${SITE_PX}`}
      >
        <div className="w-full">
          {serviceExtended.descriptionSectionTitle ? (
            <div className="mb-10 text-center md:mb-14">
              <p
                className="pointer-events-none select-none text-[clamp(2.75rem,12vw,8.5rem)] font-light leading-[0.88] text-gray-100"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden
              >
                TeleBots
              </p>
              <h2
                className="relative z-10 -mt-5 text-2xl font-semibold leading-tight tracking-tight text-black sm:-mt-7 sm:text-4xl md:-mt-9 lg:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {serviceExtended.descriptionSectionTitle}
              </h2>
            </div>
          ) : null}
          {longForm ? (
            <div className="mx-auto max-w-3xl space-y-6 md:space-y-7">
              {longForm.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base font-normal leading-relaxed text-gray-700 md:text-lg"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p
              className="mx-auto max-w-3xl text-center text-base font-normal leading-relaxed text-gray-700 md:text-lg"
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

      {cases.length > 0 ? (
        <section className={`bg-black py-20 text-white md:py-28 ${SITE_PX}`}>
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span
                className="-mb-6 block select-none text-[6rem] font-light leading-none text-white/[0.08] md:-mb-8 md:text-[8rem]"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden
              >
                03
              </span>
              <h2 className="relative z-10 text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {t.services.servicePagePortfolioTitle}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-400">
                {t.services.servicePagePortfolioSubtitle}
              </p>
            </div>
            <Link
              href={`/${lang}/portfolio`}
              className="group inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/40 px-3 text-center transition-all duration-300 hover:bg-white hover:text-black sm:h-36 sm:w-36"
            >
              <span className="text-xs font-semibold uppercase leading-snug tracking-[0.15em]">
                {t.portfolio.viewPortfolio}
              </span>
            </Link>
          </div>

          <div
            className="w-full overflow-x-auto overscroll-x-contain pb-2 [scrollbar-color:rgba(255,255,255,0.25)_transparent] [scrollbar-width:thin]"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
          >
            <div className="flex w-max gap-4 sm:gap-5">
              {cases.map((card) => (
                <PortfolioCaseCard
                  key={card.id}
                  card={card}
                  lang={lang}
                  className="w-[min(82vw,18rem)] shrink-0 sm:w-[20rem] lg:w-[22rem]"
                  sizes="352px"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {longForm ? <ServiceSeoLongForm copy={longForm} /> : null}

      {blockTitles && blockContent?.whatWeDo?.length ? (
        <section className={`border-t border-gray-100 bg-white py-16 md:py-28 ${SITE_PX}`}>
          <div className="w-full space-y-10 md:space-y-16">
            {[
              { title: blockTitles.whatWeDo, items: blockContent.whatWeDo, index: 5 },
              { title: blockTitles.terms, items: blockContent.terms || [], index: 6 },
              { title: blockTitles.integrations, items: blockContent.integrations || [], index: 7 },
            ].map(({ title: groupTitle, items: groupItems, index }) => (
              <div key={groupTitle}>
                <div className="mb-8 text-center md:mb-12">
                  <span
                    className="mb-[-1.25rem] block select-none text-[5rem] font-light leading-none text-gray-100 md:mb-[-2rem] md:text-[8rem]"
                    style={{ fontFamily: 'var(--font-display)' }}
                    aria-hidden
                  >
                    {String(index).padStart(2, '0')}
                  </span>
                  <h2
                    className="relative z-10 text-2xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {groupTitle}
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                  {groupItems.map((item, i) => (
                    <div
                      key={item}
                      className="w-[calc(50%-6px)] min-w-0 max-w-[420px] rounded-2xl border border-gray-200 bg-zinc-50 p-3.5 sm:rounded-3xl sm:p-6 md:w-[calc(33.333%-16px)] md:p-8"
                    >
                      <KeyboardKeyBadge
                        symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                        size="sm"
                        className="mb-3 sm:mb-4"
                      />
                      <p
                        className="text-lg font-semibold leading-snug tracking-tight text-black sm:text-xl sm:leading-snug"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
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

      <section className={`border-t border-gray-100 bg-white py-20 md:py-28 ${SITE_PX}`}>
        <div className="grid w-full lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
          <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
            <ContactFormWithSuccess t={t} lang={lang} serviceName={serviceTitle} />
          </div>
          <div className="mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20">
            <ContactDetailsColumn t={t} />
          </div>
        </div>
      </section>
    </main>
  );
}
