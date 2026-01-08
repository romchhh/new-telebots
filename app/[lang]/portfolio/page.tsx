'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { cases } from '@/components/cases';

export default function PortfolioPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);
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
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        <main id="main-content">
        <Portfolio />
        </main>
        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>
    </>
  );
}
