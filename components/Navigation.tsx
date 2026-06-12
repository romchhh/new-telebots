'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import OrderCtaPill from '@/components/OrderCtaPill';
import { Language } from './translations';

interface NavigationProps {
  isScrolled: boolean;
  /** Завжди непрозорий хедер (блог, білі сторінки) */
  solidHeader?: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof import('./translations').translations.uk;
  currentLang?: Language;
  onConsultClick?: () => void;
}

let consultWidgetShownInRuntime = false;
let consultWidgetDismissedInRuntime = false;

const headerLogoStyle: CSSProperties = {
  color: '#fff',
  fontSize: 20,
  fontWeight: 900,
  fontFamily: "'Arial Black', sans-serif",
  letterSpacing: '-0.5px',
  lineHeight: 1,
};

const navLinkClass =
  'inline-flex h-12 items-center text-xs font-semibold leading-none tracking-[0.2em] text-white transition-colors hover:text-gray-400 lg:text-[13px]';

export default function Navigation({ isScrolled, solidHeader = false, lang, setLang, t, currentLang, onConsultClick }: NavigationProps) {
  const headerSolid = solidHeader || isScrolled;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showConsultWidget, setShowConsultWidget] = useState(false);
  const currentLanguage = currentLang || lang;
  const showLanguageSelector = currentLanguage !== 'ru';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !onConsultClick) return;
    if (consultWidgetDismissedInRuntime) {
      setShowConsultWidget(false);
      return;
    }

    if (consultWidgetShownInRuntime) {
      setShowConsultWidget(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowConsultWidget(true);
      consultWidgetShownInRuntime = true;
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [mounted, onConsultClick]);

  // Блокуємо скрол через overflow hidden
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      headerSolid ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href={`/${currentLanguage}`}
          className="inline-flex h-12 flex-shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="TeleBots"
        >
          <span style={headerLogoStyle}>telebots.</span>
        </Link>

        <div className="hidden items-center gap-7 xl:gap-9 lg:flex">
          <a href="https://brand.telebots.site/" target="_blank" rel="noopener noreferrer" className={navLinkClass}>
            {t.nav.brand}
          </a>
          <Link href={`/${currentLanguage}/services`} className={navLinkClass}>
            {t.nav.services}
          </Link>
          <Link href={`/${currentLanguage}/portfolio`} className={navLinkClass}>
            {t.nav.portfolio}
          </Link>
          <Link href={`/${currentLanguage}/blog`} className={navLinkClass}>
            {t.nav.blog}
          </Link>
          <Link href={`/${currentLanguage}/pricing`} className={navLinkClass}>
            {t.nav.pricing}
          </Link>
          <Link href={`/${currentLanguage}/contact`} className={navLinkClass}>
            {t.nav.contact}
          </Link>
          {onConsultClick && (
            <button
              type="button"
              onClick={onConsultClick}
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white px-8 text-xs font-semibold uppercase leading-none tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black lg:text-[13px]"
            >
              {t.nav.consultation}
            </button>
          )}
          {showLanguageSelector && (
            <span className="inline-flex h-12 items-center border-l border-white/20 pl-7 xl:pl-9">
              <LanguageSelector lang={lang} setLang={setLang} isScrolled={isScrolled} currentLang={currentLanguage} />
            </span>
          )}
        </div>

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="relative z-50 inline-flex h-12 w-12 items-center justify-center text-white transition lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex flex-col gap-1.5 w-7">
              <div className="h-0.5 bg-current w-full"></div>
              <div className="h-0.5 bg-current w-full"></div>
              <div className="h-0.5 bg-current w-3/4"></div>
            </div>
          )}
        </button>
      </div>

      {mounted && isMenuOpen && createPortal(
        <div
          className="fixed inset-0 bg-black lg:hidden z-[9999]"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`absolute top-6 right-6 z-[10000] ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="flex flex-col items-center justify-center h-full w-full space-y-6 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="https://brand.telebots.site/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.brand}
            </a>
            <Link
              href={`/${currentLanguage}/services`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${currentLanguage}/portfolio`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${currentLanguage}/blog`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.blog}
            </Link>
            <Link
              href={`/${currentLanguage}/pricing`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href={`/${currentLanguage}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.contact}
            </Link>
            {onConsultClick && (
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onConsultClick();
                }}
                className="mt-6 px-10 py-4 text-xl tracking-[0.25em] font-semibold uppercase rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                {t.nav.consultation}
              </button>
            )}
            
            {showLanguageSelector && (
              <div className="pt-6 flex justify-center">
                <LanguageSelector lang={lang} setLang={setLang} isMobile={true} isScrolled={true} currentLang={currentLanguage} />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {mounted && showConsultWidget && onConsultClick && createPortal(
        <div className="fixed left-4 bottom-4 z-[9998] sm:left-6 sm:bottom-6">
          <div className="relative w-[280px] sm:w-[300px] rounded-2xl border border-black/10 bg-white/95 backdrop-blur-sm shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-5">
            <button
              type="button"
              onClick={() => {
                setShowConsultWidget(false);
                consultWidgetDismissedInRuntime = true;
              }}
              className="absolute right-2 top-2 h-7 w-7 inline-flex items-center justify-center text-gray-400 hover:text-black transition-colors"
              aria-label="Close consultation widget"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-base sm:text-lg font-normal text-black pr-7 leading-relaxed">
              {t.nav.consultationWidgetPrompt}
            </p>
            <OrderCtaPill
              size="sm"
              label={t.nav.consultationWidgetCta}
              onClick={() => {
                setShowConsultWidget(false);
                consultWidgetDismissedInRuntime = true;
                onConsultClick();
              }}
              className="mt-4 w-full"
            />
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}

