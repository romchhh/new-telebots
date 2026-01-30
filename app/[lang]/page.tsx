'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import StructuredData from '@/components/StructuredData';
import { sendToTelegram } from '@/lib/telegram';

export default function Home() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Визначаємо мову з URL або використовуємо uk за замовчуванням
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);

  const t = translations[lang];

  // FAQ для головної сторінки (перші 3-4 питання)
  const mainPageFAQs = t.about.faq?.items?.slice(0, 4) || [];

  useEffect(() => {
    // Синхронізуємо мову з URL
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);
  const openModal = () => {
    setSelectedService(t.modal.title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };
  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({ name: data.name, phone: data.phone, request: data.request, service: selectedService });
    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="website" />
      <StructuredData type="aggregateRating" rating={5.0} reviewCount={200} />
      {mainPageFAQs.length > 0 && (
        <StructuredData type="faq" faqs={mainPageFAQs} />
      )}
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        
        <main id="main-content">
          <HeroSection t={t} />
          <AboutSection t={t} onOrderClick={openModal} />
          <ServicesSection t={t} />
          <PortfolioSection t={t} />
        </main>
        
        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} serviceName={selectedService} t={t} onSubmit={handleSubmit} />
      <SuccessMessage isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} message={t.modal.success} />
    </>
  );
}
