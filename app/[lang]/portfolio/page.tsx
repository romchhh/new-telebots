'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import StructuredData from '@/components/StructuredData';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { cases } from '@/components/cases';

export default function PortfolioPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const t = translations[lang];

  // Створюємо список проєктів для ItemList schema
  const casesData = cases[validLang] || cases.uk;
  const allCaseIds = Object.keys(casesData);
  const portfolioItems = allCaseIds.map((caseId) => {
    const caseData = (casesData as any)[caseId];
    return {
      name: caseData?.title || 'Project',
      url: `/${validLang}/portfolio/${caseId}`,
      description: caseData?.subtitle || '',
    };
  });

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    checkScroll();
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      checkScroll();
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
      service: selectedService || 'Portfolio consultation',
    });

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
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.nav.portfolio, url: `/${lang}/portfolio` },
        ]}
      />
      {portfolioItems.length > 0 && (
        <>
          <StructuredData type="itemList" items={portfolioItems} />
          <StructuredData type="collectionPage" />
        </>
      )}
      <div className="min-h-screen bg-white">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
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
        <Portfolio />
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
