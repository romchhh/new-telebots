'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        <main id="main-content">
          {/* Hero: photo + info + CTA */}
          <section className="relative min-h-[70vh] flex items-end justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={imageSrc}
                alt={`${serviceTitle} - TeleBots`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
            </div>
            <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-4xl">
                <h1 className="font-bold text-white mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                  {serviceTitle}
                </h1>
                <p className="text-white/95 text-xl sm:text-2xl md:text-3xl mb-8 md:mb-10 max-w-3xl leading-relaxed">
                  {service.subtitle}
                </p>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center bg-white text-black font-black px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider text-base md:text-lg"
                >
                  {service.button}
                </button>
              </div>
            </div>
          </section>

          {/* Short description — типографіка та ефект при скролі */}
          <section ref={descRef} className={`py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white scroll-animate-up ${isDescVisible ? 'animate' : ''}`}>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-[1.75rem] text-gray-700 leading-[1.7] tracking-tight font-normal">
                {service.description}
              </p>
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
            const headingClass = 'text-xs font-black text-black tracking-[0.25em] uppercase mb-6';
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

          {/* Portfolio link — стиль як на головній + ефект при скролі */}
          <section ref={portfolioRef} className={`bg-black text-white py-16 md:py-20 lg:py-24 px-6 md:px-10 lg:px-16 scroll-animate-up ${isPortfolioVisible ? 'animate' : ''}`}>
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-0 min-w-0">
              <div className="flex flex-col justify-center">
                <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 sm:mb-6">
                  {t.portfolio.recent}
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
                  {t.services.servicePagePortfolioTitle}
                </h2>
                <Link
                  href={`/${lang}/portfolio`}
                  className="group flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
                >
                  <div className="flex items-center justify-center flex-wrap gap-1">
                    <span className="text-sm font-semibold tracking-wider text-center leading-tight">{t.portfolio.viewPortfolio}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </div>
                </Link>
              </div>
              <div className="relative w-full min-w-0 flex flex-col justify-center">
                <div className="relative w-full aspect-[1500/970] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                  <Image
                    src="/portfolio/portfolio-default.jpg"
                    alt={t.portfolio.featuredProject}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 z-10">
                    <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-1">{t.portfolio.website}</p>
                    <h3 className="text-lg sm:text-xl font-black">{t.portfolio.featuredProject}</h3>
                  </div>
                </div>
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

        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />

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
