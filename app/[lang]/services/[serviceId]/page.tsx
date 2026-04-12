'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@/components/cases';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import ServiceAudienceSection from '@/components/ServiceAudienceSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
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

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: serviceTitle,
    });
    if (success) {
      closeModal();
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
          {serviceExtended.audienceSection && serviceExtended.audienceSection.items.length > 0 && (
            <section
              ref={offerRef}
              id="service-main"
              className={`bg-gradient-to-b from-gray-50 to-white scroll-animate-up ${isOfferVisible ? 'animate' : ''}`}
            >
              <ServiceAudienceSection copy={serviceExtended.audienceSection} />
            </section>
          )}

          {/* Short description — типографіка та ефект при скролі */}
          <section
            ref={descRef}
            id={!serviceExtended.audienceSection?.items?.length ? 'service-main' : undefined}
            className={`py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white scroll-animate-up ${isDescVisible ? 'animate' : ''}`}
          >
            <div className="max-w-4xl mx-auto space-y-10">
              {serviceExtended.descriptionSectionTitle ? (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight text-center mb-8 md:mb-10">
                  {serviceExtended.descriptionSectionTitle}
                </h2>
              ) : null}
              <p className="text-xl md:text-2xl lg:text-[1.75rem] text-gray-700 leading-[1.7] tracking-tight font-normal">
                {service.description}
              </p>

              {serviceStructure && (
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
                    {serviceStructure.mainTitle}
                  </h2>
                  <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-semibold text-black">
                      {serviceStructure.leadGenTitle}
                    </h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-black">
                      {serviceStructure.supportTitle}
                    </h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-black">
                      {serviceStructure.salesTitle}
                    </h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-black">
                      {serviceStructure.crmTitle}
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Info blocks: what we do, terms, integrations — типографіка + скрол */}
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
            const listClass = 'space-y-4';
            const itemClass = 'flex items-start gap-4';
            const dotClass = 'text-black mt-2 w-2 h-2 rounded-full bg-black flex-shrink-0';
            const textClass = 'text-gray-700 text-base md:text-lg leading-[1.65] tracking-tight';
            const headingClass =
              'text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mb-6';
            return (
              <section ref={blocksRef} className={`py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-gray-50/90 scroll-animate-up ${isBlocksVisible ? 'animate' : ''}`}>
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
                    <div>
                      <h2 className={headingClass}>{titles.whatWeDo}</h2>
                      <ul className={listClass}>
                        {content.whatWeDo.map((item, i) => (
                          <li key={i} className={itemClass}>
                            <span className={dotClass} aria-hidden />
                            <span className={textClass}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h2 className={headingClass}>{titles.terms}</h2>
                      <ul className={listClass}>
                        {(content.terms || []).map((item, i) => (
                          <li key={i} className={itemClass}>
                            <span className={dotClass} aria-hidden />
                            <span className={textClass}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                      <h2 className={headingClass}>{titles.integrations}</h2>
                      <ul className={listClass}>
                        {(content.integrations || []).map((item, i) => (
                          <li key={i} className={itemClass}>
                            <span className={dotClass} aria-hidden />
                            <span className={textClass}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })()}

          {/* Portfolio link + мікро-кейси — стиль як на головній + ефект при скролі */}
          <section ref={portfolioRef} className={`bg-black text-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-16 scroll-animate-up ${isPortfolioVisible ? 'animate' : ''}`}>
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-0 min-w-0">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 sm:mb-6 leading-tight">
                  {t.services.servicePagePortfolioTitle}
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                  {t.services.servicePagePortfolioSubtitle}
                </p>
                <Link
                  href={`/${lang}/portfolio`}
                  className="group flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
                >
                  <span className="text-sm font-semibold tracking-wider text-center leading-tight">{t.portfolio.viewPortfolio}</span>
                </Link>
              </div>
              <div className="relative w-full min-w-0 flex flex-col justify-center order-1 lg:order-2">
                <Link href={featuredHref} className="block group relative w-full aspect-[1500/970] rounded-xl overflow-hidden ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
                  <Image
                    src={featuredImage}
                    alt={featured?.title ?? t.portfolio.featuredProject}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent p-4 sm:p-6 z-10">
                    <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-1">{t.portfolio.viewDetails}</p>
                    <h3 className="text-lg sm:text-xl font-black">{featured?.title ?? t.portfolio.featuredProject}</h3>
                    {featured?.subtitle ? (
                      <p className="text-sm text-gray-300 mt-2 line-clamp-2">{featured.subtitle}</p>
                    ) : null}
                  </div>
                </Link>

                {serviceCases.length > 0 && (
                  <div className="mt-8 overflow-hidden w-full min-w-0">
                    <div
                      className="flex overflow-x-scroll overflow-y-hidden gap-4 sm:gap-5 py-4 sm:py-5 scroll-smooth snap-x snap-mandatory min-w-0 w-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.3)_transparent] overscroll-x-contain"
                      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
                    >
                      {serviceCases.map((item) => (
                        <Link
                          key={item.caseId}
                          href={`/${lang}/portfolio/${item.caseId}`}
                          className="group flex-shrink-0 w-[260px] min-w-[260px] sm:w-[300px] sm:min-w-[300px] aspect-[4/3] relative overflow-hidden rounded-lg snap-start bg-white/5 border border-white/10 hover:border-white/40 transition-colors"
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 260px, 300px"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                            <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                              {item.subtitle}
                            </p>
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
              />
            </div>
          )}

          {/* CTA block + ефект при скролі */}
          <section ref={ctaRef} className={`py-16 md:py-20 px-6 md:px-10 lg:px-16 bg-black text-white scroll-animate-scale ${isCtaVisible ? 'animate' : ''}`}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black mb-6">
                {t.modal.title}
              </h2>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center bg-white text-black font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider"
              >
                {service.button}
              </button>
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
          message={t.modal.success}
        />
      </div>
    </>
  );
}
