'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CasePage from '@/components/CasePage';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';

export default function CasePageRoute() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const caseId = params?.caseId as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
  const t = translations[lang];

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

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="article" caseId={caseId} />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.nav.portfolio, url: `/${lang}/portfolio` },
          { name: caseId, url: `/${lang}/portfolio/${caseId}` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        <CasePage caseId={caseId} />
        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>
    </>
  );
}

