'use client';

import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import PortfolioCaseCard, { type PortfolioCaseCardData } from '@/components/PortfolioCaseCard';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import SiteCtaBand from '@/components/SiteCtaBand';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceSeoLongForm from '@/components/ServiceSeoLongForm';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';
import { SITE_PX } from '@/lib/siteLayout';
import { BREADCRUMB_HOME, BREADCRUMB_SERVICES } from '@/lib/breadcrumbLabels';
import type { ServiceLongFormBundle } from '@/lib/servicePagesSeoContent';
import {
  getServiceKeyForTranslations,
  hasPricing,
  getPricingKey,
  type ServiceId,
} from './metadata';

const OrderModal = lazy(() => import('@/components/OrderModal'));
const SuccessMessage = lazy(() => import('@/components/SuccessMessage'));

type ServicePageClientProps = {
  initialLang: Language;
  serviceId: ServiceId;
  heroBackground: ReactNode;
  cases: PortfolioCaseCardData[];
  longForm: ServiceLongFormBundle | null;
};

export default function ServicePageClient({
  initialLang,
  serviceId,
  heroBackground,
  cases,
  longForm,
}: ServicePageClientProps) {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [lang, setLang] = useState<Language>(initialLang);

  const serviceKey = getServiceKeyForTranslations(serviceId);

  const t = translations[lang];
  const service = serviceKey ? t.services[serviceKey] : null;
  const serviceTitle = service?.title ?? '';
  const serviceStructure =
    service && (service as any).structure
      ? (service as any).structure as {
          mainTitle: string;
          leadGenTitle: string;
          supportTitle: string;
          salesTitle: string;
          crmTitle: string;
        }
      : null;

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    checkScroll();
    window.scrollTo(0, 0);
    const handleScroll = () => checkScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const [descRef, isDescVisible] = useScrollAnimation();
  const [offerRef, isOfferVisible] = useScrollAnimation();
  const [blocksRef, isBlocksVisible] = useScrollAnimation();
  const [portfolioRef, isPortfolioVisible] = useScrollAnimation();
  const [pricingRef, isPricingVisible] = useScrollAnimation();
  const [ctaRef, isCtaVisible] = useScrollAnimation();
  const [contactBlockRef, isContactBlockVisible] = useScrollAnimation();

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: serviceTitle,
    });
    if (success) {
      closeModal();
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  if (!serviceKey || !service) {
    return null;
  }

  const serviceCases = cases;

  const serviceExtended = service as typeof service & {
    serviceHero?: import('@/components/ServiceHeroSection').ServiceHeroCopy;
    audienceSection?: import('@/components/ServiceAudienceSection').ServiceAudienceCopy;
    descriptionSectionTitle?: string;
  };
  const heroCopy = serviceExtended.serviceHero;
  const audienceCopy = longForm?.audienceSection ?? serviceExtended.audienceSection;

  /** Одне джерело для розмітки і для видимих крихт — щоб вони не розійшлись */
  const breadcrumbs = [
    { name: BREADCRUMB_HOME[lang], url: `/${lang}` },
    { name: BREADCRUMB_SERVICES[lang], url: `/${lang}/services` },
    { name: serviceTitle, url: `/${lang}/services/${serviceId}` },
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />
        <main id="main-content">
          {heroCopy ? (
            <ServiceHeroSection
              heroBackground={heroBackground}
              hero={heroCopy}
              viewButtonLabel={t.hero.viewButton}
              orderButtonLabel={service.button}
              onOrderClick={openModal}
              scrollTargetId="service-main"
            />
          ) : null}

          <Breadcrumbs
            items={breadcrumbs.map((crumb, index) => ({
              name: crumb.name,
              href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
            }))}
          />

          {/* Блок «для вас, якщо» — після героя */}
          {audienceCopy && audienceCopy.items.length > 0 && (
            <section
              ref={offerRef}
              id="service-main"
              className={`border-t border-gray-100 bg-white scroll-animate-up ${isOfferVisible ? 'animate' : ''}`}
            >
              <ServiceAudienceSection copy={audienceCopy} />
            </section>
          )}

          {/* Short description */}
          <section
            ref={descRef}
            id={!audienceCopy?.items?.length ? 'service-main' : undefined}
            className={`py-20 md:py-28 bg-white border-t border-gray-100 scroll-animate-up ${SITE_PX} ${isDescVisible ? 'animate' : ''}`}
          >
            <div className="w-full">
              {serviceExtended.descriptionSectionTitle ? (
                <div className="mb-10 md:mb-14 text-center">
                  <p
                    className="pointer-events-none select-none text-[clamp(2.75rem,12vw,8.5rem)] font-light text-gray-100 leading-[0.88]"
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
                  {longForm.aboutParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base leading-relaxed font-normal text-gray-700 md:text-lg"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  className="mx-auto max-w-3xl text-center text-base leading-relaxed font-normal text-gray-700 md:text-lg"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {service.description}
                </p>
              )}

              {!longForm && serviceStructure && (
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
              )}
            </div>
          </section>

          {/* Приклади робіт — одразу після короткого опису */}
          {serviceCases.length > 0 && (
            <section
              ref={portfolioRef}
              className={`bg-black text-white py-20 md:py-28 scroll-animate-up ${SITE_PX} ${isPortfolioVisible ? 'animate' : ''}`}
            >
              <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <span
                    className="mb-2 block text-[6rem] font-light leading-none text-white/[0.08] select-none md:text-[8rem] -mb-6 md:-mb-8"
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
                className="w-full overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
                style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
              >
                <div className="flex w-max gap-4 sm:gap-5">
                  {serviceCases.map((card) => (
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
          )}

          {longForm ? <ServiceSeoLongForm copy={longForm} /> : null}

          {/* Info blocks: what we do, terms, integrations */}
          {(() => {
            const blocksRaw = (t.services as { servicePageBlocks?: Record<string, unknown> }).servicePageBlocks;
            if (!blocksRaw || typeof blocksRaw !== 'object') return null;
            const content = (blocksRaw[serviceId] as { whatWeDo?: string[]; terms?: string[]; integrations?: string[] } | undefined);
            if (!content?.whatWeDo?.length) return null;
            const titles = {
              whatWeDo: (blocksRaw.whatWeDoTitle as string) || 'Що ми робимо',
              terms: (blocksRaw.termsTitle as string) || 'Умови',
              integrations: (blocksRaw.integrationsTitle as string) || 'Інтеграції',
            };
            const cardClass =
              'rounded-2xl border border-gray-200 bg-zinc-50 p-3.5 sm:rounded-3xl sm:p-6 md:p-8';
            const textClass = 'text-lg font-semibold leading-snug tracking-tight text-black sm:text-xl sm:leading-snug';
            const headingStyle = { fontFamily: 'var(--font-display)' };
            return (
              <section ref={blocksRef} className={`py-16 md:py-28 bg-white border-t border-gray-100 scroll-animate-up ${SITE_PX} ${isBlocksVisible ? 'animate' : ''}`}>
                <div className="w-full space-y-10 md:space-y-16">
                  {[
                    { title: titles.whatWeDo, items: content.whatWeDo, index: 5 },
                    { title: titles.terms, items: content.terms || [], index: 6 },
                    { title: titles.integrations, items: content.integrations || [], index: 7 },
                  ].map(({ title: groupTitle, items: groupItems, index }) => (
                    <div key={groupTitle}>
                      <div className="mb-8 text-center md:mb-12">
                        <span
                          className="mb-[-1.25rem] block select-none text-[5rem] font-light leading-none text-gray-100 md:mb-[-2rem] md:text-[8rem]"
                          style={headingStyle}
                          aria-hidden
                        >
                          {String(index).padStart(2, '0')}
                        </span>
                        <h2
                          className="relative z-10 text-2xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
                          style={headingStyle}
                        >
                          {groupTitle}
                        </h2>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                        {groupItems.map((item, i) => (
                          <div
                            key={i}
                            className={`w-[calc(50%-6px)] min-w-0 max-w-[420px] md:w-[calc(33.333%-16px)] ${cardClass}`}
                          >
                            <KeyboardKeyBadge
                              symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                              size="sm"
                              className="mb-3 sm:mb-4"
                            />
                            <p className={textClass} style={headingStyle}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* Pricing + ефект при скролі */}
          {hasPricing(serviceId) && (
            <div ref={pricingRef} className={`scroll-animate-up ${isPricingVisible ? 'animate' : ''}`}>
              <PricingTable
                pricing={t.services[getPricingKey(serviceId)]}
                lang={lang}
                onContactClick={openModal}
                hideCategoryLabel
                sectionIndex={9}
                centerHeader
              />
            </div>
          )}

          {/* CTA */}
          <div ref={ctaRef} className={`scroll-animate-up ${isCtaVisible ? 'animate' : ''}`}>
            <SiteCtaBand
              title={t.about.homeCta.title}
              text={t.about.homeCta.text}
              contactLabel={t.about.homeCta.contactLabel}
              pricingLabel={t.about.homeCta.pricingLabel}
              portfolioLabel={t.about.homeCta.portfolioLabel}
              pricingHref={`/${lang}/pricing`}
              portfolioHref={`/${lang}/portfolio`}
              onContactClick={openModal}
              className="pt-16 md:pt-20"
            />
          </div>

          <section
            ref={contactBlockRef}
            className={`py-20 md:py-28 bg-white border-t border-gray-100 scroll-animate-up ${SITE_PX} ${isContactBlockVisible ? 'animate' : ''}`}
          >
            <div className="w-full grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
              <div className="lg:pr-10 xl:pr-14 2xl:pr-20">
                <ContactFormBlock
                  t={t}
                  lang={lang}
                  serviceName={serviceTitle}
                  onSuccess={() => {
                    setSuccessMessage(t.contact.success);
                    setIsSuccessOpen(true);
                  }}
                />
              </div>
              <div className="mt-14 lg:mt-0 lg:pl-10 xl:pl-14 2xl:pl-20">
                <ContactDetailsColumn t={t} />
              </div>
            </div>
          </section>
        </main>

        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />

        {isModalOpen ? (
          <Suspense fallback={null}>
            <OrderModal
              isOpen={isModalOpen}
              onClose={closeModal}
              serviceName={serviceTitle}
              t={t}
              onSubmit={handleSubmit}
            />
          </Suspense>
        ) : null}
        {isSuccessOpen ? (
          <Suspense fallback={null}>
            <SuccessMessage
              isOpen={isSuccessOpen}
              onClose={() => setIsSuccessOpen(false)}
              message={successMessage || t.modal.success}
            />
          </Suspense>
        ) : null}
      </div>
  );
}
