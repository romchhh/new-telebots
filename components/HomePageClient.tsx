'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import HeroSectionContent from '@/components/HeroSectionContent';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutStatsBanner from '@/components/AboutStatsBanner';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import StructuredData from '@/components/StructuredData';
import { sendToTelegram } from '@/lib/telegram';

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
      alert("Помилка відправки. Спробуйте ще раз або зв'яжіться з нами безпосередньо.");
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="website" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[{ name: t.nav.brand, url: `/${lang}` }]}
      />
      {process.env.NEXT_PUBLIC_SHOW_AGGREGATE_RATING !== 'false' && (
        <StructuredData type="aggregateRating" rating={5.0} reviewCount={200} />
      )}
      {mainPageFAQs.length > 0 && <StructuredData type="faq" faqs={mainPageFAQs} />}
      <div className="min-h-screen w-full overflow-x-hidden bg-white">
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
          <section className="relative flex min-h-screen flex-col overflow-hidden">
            {heroBackground}
            <HeroSectionContent t={t} onOrderClick={openModal} />
          </section>
          <AboutSection t={t} onOrderClick={openModal} />
          <PortfolioSection t={t} />
          <AboutStatsBanner t={t} />
        </main>

        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceName={selectedService}
        t={t}
        onSubmit={handleSubmit}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
    </>
  );
}
