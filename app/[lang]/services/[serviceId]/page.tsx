'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@/components/cases';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import ContactDetailsColumn from '@/components/ContactDetailsColumn';
import ContactFormBlock from '@/components/ContactFormBlock';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import ServiceSeoLongForm from '@/components/ServiceSeoLongForm';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { getServiceSeoLongForm } from '@/lib/servicePagesSeoContent';
import { sendToTelegram } from '@/lib/telegram';
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
    router.replace(`/${validLang}/services`);
    return null;
  }

  const imageSrc = SERVICE_IMAGES[serviceId];
  const casesData = (cases as any)[lang] || (cases as any).uk;
  const caseEntries = Object.entries(casesData) as [string, { portfolioCategory?: string; mainImage?: string; title?: string; subtitle?: string }][];
  const desiredCategory = serviceId === 'chatbots' ? 'chatbots' : 'websites';
  const serviceCases = caseEntries
    .filter(([, data]) => (data.portfolioCategory || 'websites') === desiredCategory)
    .slice(0, 3)
    .map(([caseId, data]) => ({
      caseId,
      image: data.mainImage || '/portfolio/portfolio-dr-tolstikova-bot.jpg',
      title: data.title || 'Project',
      subtitle: data.subtitle || '',
    }));

  const featured = serviceCases[0];
  const featuredImage = featured?.image ?? '/portfolio/portfolio-default.jpg';
  const featuredHref = featured ? `/${lang}/portfolio/${featured.caseId}` : `/${lang}/portfolio`;

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
          { name: t.nav.about, url: `/${lang}` },
          { name: t.nav.services, url: `/${lang}/services` },
          { name: serviceTitle, url: `/${lang}/services/${serviceId}` },
        ]}
      />
      <StructuredData
        type="service"
        serviceName={serviceTitle}
        serviceDescription={service.subtitle}
        serviceUrl={process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/services/${serviceId}` : undefined}
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
              <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
                <div className="max-w-4xl">
                  <h1
                    className="font-bold text-white mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '0.05em' }}
                  >
                    {serviceTitle}
                  </h1>
                  <p className="text-white/95 text-xl sm:text-2xl md:text-3xl mb-8 md:mb-10 max-w-3xl leading-relaxed">{service.subtitle}</p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center justify-center bg-white text-black font-black px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider text-base md:text-lg"
                  >
                    {service.button}
                  </button>
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
            className={`py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-animate-up ${isDescVisible ? 'animate' : ''}`}
          >
            <div className="max-w-7xl mx-auto w-full">
              {serviceExtended.descriptionSectionTitle ? (
                <div className="mb-10 md:mb-14 text-center">
                  <p
                    className="pointer-events-none select-none text-[clamp(2.75rem,12vw,8.5rem)] font-light text-gray-100 leading-[0.88]"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                    aria-hidden
                  >
                    TeleBots
                  </p>
                  <h2
                    className="relative z-10 -mt-5 sm:-mt-7 md:-mt-9 text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
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
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-900 leading-snug font-light text-center"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
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
            const headingStyle = { fontFamily: 'var(--font-montserrat)' };
            return (
              <section ref={blocksRef} className={`py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-animate-up ${isBlocksVisible ? 'animate' : ''}`}>
                <div className="max-w-7xl mx-auto space-y-14 md:space-y-16">
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

          {/* Portfolio */}
          <section ref={portfolioRef} className={`bg-black text-white py-20 md:py-28 px-6 md:px-10 lg:px-16 scroll-animate-up ${isPortfolioVisible ? 'animate' : ''}`}>
            <div className="max-w-6xl xl:max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-4">
                  <span
                    className="block text-[6rem] md:text-[8rem] font-light leading-none text-white/[0.08] select-none -mb-6 md:-mb-8"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                    aria-hidden
                  >
                    08
                  </span>
                  <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                    {t.services.servicePagePortfolioTitle}
                  </h2>
                </div>
                <p className="text-base text-gray-400 leading-relaxed max-w-sm mb-10">
                  {t.services.servicePagePortfolioSubtitle}
                </p>
                <Link
                  href={`/${lang}/portfolio`}
                  className="group flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-center leading-snug">{t.portfolio.viewPortfolio}</span>
                </Link>
              </div>
              <div className="relative w-full order-1 lg:order-2">
                <Link href={featuredHref} className="block group relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <Image
                    src={featuredImage}
                    alt={featured?.title ?? t.portfolio.featuredProject}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">{t.portfolio.viewDetails}</p>
                    <h3 className="text-lg sm:text-xl font-black">{featured?.title ?? t.portfolio.featuredProject}</h3>
                    {featured?.subtitle ? (
                      <p className="text-sm text-gray-300 mt-1.5 line-clamp-2">{featured.subtitle}</p>
                    ) : null}
                  </div>
                </Link>

                {serviceCases.length > 1 && (
                  <div className="mt-5 overflow-hidden w-full">
                    <div
                      className="flex overflow-x-scroll gap-3 py-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none]"
                      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
                    >
                      {serviceCases.slice(1).map((item) => (
                        <Link
                          key={item.caseId}
                          href={`/${lang}/portfolio/${item.caseId}`}
                          className="group flex-shrink-0 w-[200px] min-w-[200px] sm:w-[240px] sm:min-w-[240px] aspect-[4/3] relative overflow-hidden rounded-xl snap-start"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="240px"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <h3 className="text-xs sm:text-sm font-semibold line-clamp-2">{item.title}</h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

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
          <section ref={ctaRef} className={`py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-black text-white border-t border-white/10 scroll-animate-up ${isCtaVisible ? 'animate' : ''}`}>
            <div className="max-w-2xl mx-auto w-full text-center">
              <span
                className="block text-[6rem] md:text-[8rem] font-light leading-none text-white/[0.08] select-none -mb-6 md:-mb-8"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-hidden
              >
                10
              </span>
              <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                {lang === 'uk' ? 'Залишити заявку на розробку' : t.modal.title}
              </h2>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center border-2 border-white text-white font-black px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
              >
                {lang === 'uk' ? 'Обговорити проєкт' : service.button}
              </button>
            </div>
          </section>

          <section
            ref={contactBlockRef}
            className={`py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-animate-up ${isContactBlockVisible ? 'animate' : ''}`}
          >
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 lg:items-start lg:gap-0 lg:divide-x lg:divide-gray-200">
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
