'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
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
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
      
      <section className="pt-32 pb-32 px-6 bg-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-9xl md:text-[12rem] font-black text-black leading-none mb-8">
              404
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-black mr-4"></div>
              <h2 className="text-sm font-black text-black tracking-wider">
                {t.footer.notFound}
              </h2>
              <div className="w-12 h-px bg-black ml-4"></div>
            </div>
            <p className="text-xl text-gray-700 font-semibold leading-relaxed mb-12 max-w-2xl mx-auto">
              {t.footer.notFoundDesc}
            </p>
          </div>

          <Link
            href={`/${lang}`}
            className="group inline-flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 rounded-md"
          >
            <span className="tracking-wider font-black">{t.footer.backHome}</span>
            <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
              <div className="w-8 h-px bg-white"></div>
            </div>
          </Link>
        </div>
      </section>

      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
    </div>
  );
}

