'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';
import { legal } from '@/lib/legal';

export default function RefundPage() {
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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded" aria-label="Skip to main content">
        Skip to main content
      </a>
      <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
      <main id="main-content">
      <section className="pt-32 pb-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-px bg-black mr-4" />
              <h1 className="text-sm font-black text-black tracking-wider">
                {t.footer.refund}
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-8">
              {t.footer.refundTitle}
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 font-semibold leading-relaxed text-lg">
              {t.footer.refundIntro}
            </p>
            <p className="text-gray-700 font-semibold leading-relaxed">
              {t.footer.refundNoProcedure}
            </p>
            <p className="text-gray-700 font-semibold leading-relaxed">
              {t.footer.refundExceptions}
            </p>
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-black text-black mb-4">{t.footer.legalBlockTitle}</h3>
              <ul className="text-gray-700 font-semibold leading-relaxed space-y-1 text-base">
                <li>{t.footer.companyName}</li>
                <li>{t.footer.footerEdrpou}: {legal.edrpou}</li>
                <li>{t.footer.address}: {t.footer.legalAddress}</li>
                <li>{t.footer.phone}: <a href={`tel:${legal.phoneRaw}`} className="text-black hover:underline">{legal.phone}</a></li>
                <li>{t.footer.email}: <a href={`mailto:${legal.email}`} className="text-black hover:underline">{legal.email}</a></li>
              </ul>
            </div>
          </div>

          <Link
            href={`/${lang}`}
            className="group inline-flex items-center text-black font-semibold hover:text-gray-600 transition mt-12"
          >
            <div className="w-8 h-px bg-black mr-3 group-hover:w-12 transition-all" />
            {t.footer.backHome}
          </Link>
        </div>
      </section>
      </main>
      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
    </div>
  );
}
