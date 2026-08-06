'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioCards } from '@/lib/portfolioCards';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import OrderModal from '@/components/OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SiteCtaBand from '@/components/SiteCtaBand';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import ServiceSeoLongForm from '@/components/ServiceSeoLongForm';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { getServiceSeoLongForm } from '@/lib/servicePagesSeoContent';
import { sendToTelegram } from '@/lib/telegram';
import { SITE_PX } from '@/lib/siteLayout';
import { siteUrl as baseUrl } from '@/lib/site';
import {
  SERVICE_IDS,
  getServiceKeyForTranslations,
  SERVICE_IMAGES,
  hasPricing,
  getPricingKey,
  type ServiceId,
} from './metadata';

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const serviceIdParam = params?.serviceId as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);

  const serviceId = SERVICE_IDS.includes(serviceIdParam as ServiceId) ? (serviceIdParam as ServiceId) : null;
  const serviceKey = serviceId ? getServiceKeyForTranslations(serviceId) : null;

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
      alert(lang === 'uk' ? 'Помилка відправки. Спробуйте ще раз.' : 'Error sending. Please try again.');
    }
  };

  if (!serviceId || !serviceKey || !service) {
    notFound();
  }

  const imageSrc = SERVICE_IMAGES[serviceId];
  const desiredCategory = serviceId === 'chatbots' ? 'chatbots' : 'websites';
  const serviceCases = getPortfolioCards(lang).filter((c) => c.category === desiredCategory);

  const serviceExtended = service as typeof service & {
    serviceHero?: import('@/components/ServiceHeroSection').ServiceHeroCopy;
    audienceSection?: import('@/components/ServiceAudienceSection').ServiceAudienceCopy;
    descriptionSectionTitle?: string;
  };
  const heroCopy = serviceExtended.serviceHero;
  const longForm = serviceId ? getServiceSeoLongForm(lang, serviceId) : null;
  const audienceCopy = longForm?.audienceSection ?? serviceExtended.audienceSection;

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.brand, url: `/${lang}` },
          { name: t.nav.services, url: `/${lang}/services` },
          { name: serviceTitle, url: `/${lang}/services/${serviceId}` },
        ]}
      />
      <StructuredData
        type="service"
        serviceName={serviceTitle}
        serviceDescription={service.subtitle}
        serviceUrl={`${baseUrl}/${lang}/services/${serviceId}`}
      />
      {longForm?.faq?.length ? (
        <StructuredData type="faq" faqs={longForm.faq.map((f) => ({ question: f.question, answer: f.answer }))} />
      ) : null}
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
              imageSrc={imageSrc}
              imageAlt={`${serviceTitle} — TeleBots`}
              hero={heroCopy}
              viewButtonLabel={t.hero.viewButton}
              orderButtonLabel={service.button}
              onOrderClick={openModal}
              scrollTargetId="service-main"
            />
          ) : (
            <section className="relative min-h-[70vh] flex items-end justify-center overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={imageSrc}
                  alt={`${serviceTitle} - TeleBots`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={80}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.28]"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
                      linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                  }}
                  aria-hidden
                />
                <div className="pointer-events-none absolute -right-20 top-1/3 h-[min(65vw,520px)] w-[min(65vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl" aria-hidden />
              </div>
              <div className={`relative z-10 w-full pb-16 md:pb-20 lg:pb-24 ${SITE_PX}`}>
                <div className="max-w-4xl">
                  <h1
                    className="font-bold text-white mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                  >
                    {serviceTitle}
                  </h1>
                  <p className="text-white/95 text-xl sm:text-2xl md:text-3xl mb-8 md:mb-10 max-w-3xl leading-relaxed">{service.subtitle}</p>
                  <OrderCtaPill
                    size="md"
                    label={service.button}
                    onClick={openModal}
                    className="w-full max-w-md"
                  />
                </div>
              </div>
            </section>
          )}

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
                    className="relative z-10 -mt-5 sm:-mt-7 md:-mt-9 text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {serviceExtended.descriptionSectionTitle}
                  </h2>
                </div>
              ) : null}
              {longForm ? (
                <div className="max-w-3xl mx-auto space-y-6 md:space-y-7">
                  {longForm.aboutParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-lg md:text-xl text-gray-900 leading-snug font-light"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-900 leading-snug font-light text-center"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.description}
                </p>
              )}

              {!longForm && serviceStructure && (
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                    {serviceStructure.mainTitle}
                  </h2>
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                      {serviceStructure.leadGenTitle}
                    </h2>
                    <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                      {serviceStructure.supportTitle}
                    </h2>
                    <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
                      {serviceStructure.salesTitle}
                    </h2>
                    <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight">
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
                  <h2 className="relative z-10 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
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
            const cardClass = 'rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300';
            const textClass = 'text-lg md:text-xl text-gray-900 leading-snug font-light';
            const headingStyle = { fontFamily: 'var(--font-display)' };
            return (
              <section ref={blocksRef} className={`py-20 md:py-28 bg-white border-t border-gray-100 scroll-animate-up ${SITE_PX} ${isBlocksVisible ? 'animate' : ''}`}>
                <div className="w-full space-y-14 md:space-y-16">
                  {[
                    { title: titles.whatWeDo, items: content.whatWeDo, index: 5 },
                    { title: titles.terms, items: content.terms || [], index: 6 },
                    { title: titles.integrations, items: content.integrations || [], index: 7 },
                  ].map(({ title: groupTitle, items: groupItems, index }) => (
                    <div key={groupTitle}>
                      <div className="text-center mb-10 md:mb-12">
                        <span
                          className="block text-[6rem] md:text-[8rem] font-light leading-none text-gray-100 select-none -mb-6 md:-mb-8"
                          style={headingStyle}
                          aria-hidden
                        >
                          {String(index).padStart(2, '0')}
                        </span>
                        <h2
                          className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight"
                          style={headingStyle}
                        >
                          {groupTitle}
                        </h2>
                      </div>
                      <div className="flex flex-wrap justify-center gap-6">
                        {groupItems.map((item, i) => (
                          <div
                            key={i}
                            className={`w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] ${cardClass}`}
                          >
                            <p className={textClass} style={headingStyle}>{item}</p>
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

        <OrderModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={serviceTitle}
          t={t}
          onSubmit={handleSubmit}
        />
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={successMessage || t.modal.success}
        />
      </div>
    </>
  );
}
