'use client';

import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SiteCtaBand from '@/components/SiteCtaBand';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import { HomeModalProvider } from '@/components/HomeModalProvider';
import type { Language, SiteCopy } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { SUBMIT_ERROR } from '@/lib/formMessages';

const OrderModal = lazy(() => import('@/components/OrderModal'));
const SuccessMessage = lazy(() => import('@/components/SuccessMessage'));

interface HomePageClientProps {
  initialLang: Language;
  t: SiteCopy;
  /** Серверний слот: hero-секція з LCP-зображенням і SSR-заголовком */
  hero: ReactNode;
  /** Послуги / принципи одразу під hero — в initial HTML */
  principles: ReactNode;
  /** Цифри та внутрішні лінки після фото-секцій — теж SSR */
  afterPortfolio: ReactNode;
}

export default function HomePageClient({ initialLang, t, hero, principles, afterPortfolio }: HomePageClientProps) {
  const params = useParams();
  const langParam = params?.lang as string;

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(initialLang);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setLang(validLang);
  }, [validLang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    raf = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
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
    <HomeModalProvider openModal={openModal}>
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
          {hero}
          {principles}
          <AboutSection t={t} onOrderClick={openModal} />
          <PortfolioSection t={t} />
          {afterPortfolio}
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
    </HomeModalProvider>
  );
}
