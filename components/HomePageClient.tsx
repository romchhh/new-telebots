'use client';

import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ServiceHeroSection from '@/components/ServiceHeroSection';
import HomePrinciplesSection from '@/components/HomePrinciplesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutStatsBanner from '@/components/AboutStatsBanner';
import HomeResourceLinks from '@/components/HomeResourceLinks';
import SiteCtaBand from '@/components/SiteCtaBand';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

// Lazy load модалів для зменшення initial JavaScript bundle
const OrderModal = lazy(() => import('@/components/OrderModal'));
const SuccessMessage = lazy(() => import('@/components/SuccessMessage'));

interface HomePageClientProps {
  initialLang: Language;
  /** Серверний слот: `<HeroImage />` з HTML для LCP */
  heroBackground: ReactNode;
}

export default function HomePageClient({ initialLang, heroBackground }: HomePageClientProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    setLang(validLang);
  }, [validLang]);

  const t = translations[lang];
  const mainPageFAQs = t.about.faq?.items?.slice(0, 4) || [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const openModal = () => {
    setSelectedService(t.modal.title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };
  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: selectedService,
    });
    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="website" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[{ name: BREADCRUMB_HOME[lang], url: `/${lang}` }]}
      />
      {mainPageFAQs.length > 0 && <StructuredData type="faq" faqs={mainPageFAQs} />}
      <div className="min-h-screen bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />

        <main id="main-content">
          <ServiceHeroSection
            heroBackground={heroBackground}
            hero={{
              tagline: t.hero.tagline,
              title: t.hero.title,
              subtitle: t.hero.subtitle,
              intro: t.hero.intro,
              ctaQuestion: t.hero.ctaQuestion,
              ctaQuestionShort: t.hero.ctaQuestionShort,
              startDate: t.hero.startDate,
              duration: t.hero.duration,
            }}
            orderButtonLabel={t.modal.title}
            onOrderClick={openModal}
          />
          <HomePrinciplesSection
            principles={t.about.principles}
            lang={lang}
            allServicesLabel={t.about.services}
            pricingLabel={t.nav.pricing}
          />
          <AboutSection t={t} onOrderClick={openModal} />
          <PortfolioSection t={t} />
          <AboutStatsBanner t={t} />
          <HomeResourceLinks lang={lang} copy={t.about.homeResources} />
          <SiteCtaBand
            title={t.about.homeCta.title}
            text={t.about.homeCta.text}
            contactLabel={t.about.homeCta.contactLabel}
            pricingLabel={t.about.homeCta.pricingLabel}
            portfolioLabel={t.about.homeCta.portfolioLabel}
            pricingHref={`/${lang}/pricing`}
            portfolioHref={`/${lang}/portfolio`}
            onContactClick={openModal}
          />
        </main>

        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />
      </div>

      {/* Lazy loaded модалі */}
      <Suspense fallback={null}>
        {isModalOpen && (
          <OrderModal
            isOpen={isModalOpen}
            onClose={closeModal}
            serviceName={selectedService}
            t={t}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
      <Suspense fallback={null}>
        {isSuccessOpen && (
          <SuccessMessage
            isOpen={isSuccessOpen}
            onClose={() => setIsSuccessOpen(false)}
            message={t.modal.success}
          />
        )}
      </Suspense>
    </>
  );
}
