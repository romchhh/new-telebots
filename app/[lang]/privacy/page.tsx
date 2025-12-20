'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';

export default function PrivacyPage() {
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
      
      <section className="pt-32 pb-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-px bg-black mr-4"></div>
              <h1 className="text-sm font-black text-black tracking-wider">
                {t.footer.privacy}
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-8">
              {t.footer.privacyTitle}
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-semibold leading-relaxed text-lg mb-8">
              {t.footer.privacyContent}
            </p>
          </div>

          <Link
            href={`/${lang}`}
            className="group inline-flex items-center text-black font-semibold hover:text-gray-600 transition mt-12"
          >
            <div className="w-8 h-px bg-black mr-3 group-hover:w-12 transition-all"></div>
            {t.footer.backHome}
          </Link>
        </div>
      </section>

      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
    </div>
  );
}

