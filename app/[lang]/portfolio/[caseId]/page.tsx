'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CasePage from '@/components/CasePage';
import StructuredData from '@/components/StructuredData';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import { sendToTelegram } from '@/lib/telegram';
import { cases } from '@/components/cases';

export default function CasePageRoute() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const caseId = params?.caseId as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const t = translations[lang];
  const currentCaseData = ((cases[lang] || cases.uk) as Record<string, { title?: string }>)[caseId];
  const currentCaseTitle = currentCaseData?.title || caseId;

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

  const openConsultModal = () => {
    setIsModalOpen(true);
  };

  const closeConsultModal = () => {
    setIsModalOpen(false);
  };

  const handleConsultSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: t.modal.title,
      caseId,
    });

    if (success) {
      closeConsultModal();
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="article" caseId={caseId} />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.brand, url: `/${lang}` },
          { name: t.nav.portfolio, url: `/${lang}/portfolio` },
          { name: currentCaseTitle, url: `/${lang}/portfolio/${caseId}` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openConsultModal}
        />
        <CasePage caseId={caseId} />
        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openConsultModal}
        />
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeConsultModal}
        serviceName={t.modal.title}
        t={t}
        onSubmit={handleConsultSubmit}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
    </>
  );
}

