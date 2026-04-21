'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language } from './translations';

interface NavigationProps {
  isScrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof import('./translations').translations.uk;
  currentLang?: Language;
  onConsultClick?: () => void;
}

export default function Navigation({ isScrolled, lang, setLang, t, currentLang, onConsultClick }: NavigationProps) {
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
    const timer = window.setTimeout(() => setShowConsultWidget(true), 3000);
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
      isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2 lg:py-3 flex justify-between items-center lg:items-end">
        <Link href={`/${currentLanguage}`} className="flex items-end group lg:items-end justify-start w-auto flex-shrink-0 min-w-0">
          <div className="flex items-end">
            <Image
              src={isScrolled ? '/whitelogo_new.png' : '/whitelogo_new.png'}
              alt="TeleBots - Професійна розробка телеграм ботів, чат-ботів та сайтів"
              width={100}
              height={20}
              className="object-contain object-left w-[70px] lg:w-[100px] h-auto"
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          <Link href={`/${currentLanguage}/about`} className={`text-xs tracking-[0.2em] font-semibold transition ${
            isScrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.about}
          </Link>
          <Link href={`/${currentLanguage}/services`} className={`text-xs tracking-[0.2em] font-semibold transition ${
            isScrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.services}
          </Link>
          <Link href={`/${currentLanguage}/portfolio`} className={`text-xs tracking-[0.2em] font-semibold transition ${
            isScrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.portfolio}
          </Link>
          <Link href={`/${currentLanguage}/blog`} className={`text-xs tracking-[0.2em] font-semibold transition ${
            isScrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.blog}
          </Link>
          <Link href={`/${currentLanguage}/contact`} className={`text-xs tracking-[0.2em] font-semibold transition ${
            isScrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.contact}
          </Link>
          {onConsultClick && (
            <button
              type="button"
              onClick={onConsultClick}
              className="ml-6 px-8 py-3 text-sm tracking-[0.25em] font-semibold uppercase rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              {t.nav.consultation}
            </button>
          )}
          {showLanguageSelector && (
            <span className="ml-4 pl-4 border-l border-white/20 flex items-center">
              <LanguageSelector lang={lang} setLang={setLang} isScrolled={isScrolled} currentLang={currentLanguage} />
            </span>
          )}
        </div>

        <button
          onClick={() => {
            // Встановлюємо стан перед блокуванням скролу
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`lg:hidden z-50 relative transition ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
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
            <Link
              href={`/${currentLanguage}/about`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-semibold"
            >
              {t.nav.about}
            </Link>
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
              onClick={() => setShowConsultWidget(false)}
              className="absolute right-2 top-2 h-7 w-7 inline-flex items-center justify-center text-gray-400 hover:text-black transition-colors"
              aria-label="Close consultation widget"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-base sm:text-lg font-normal text-black pr-7 leading-snug">
              {currentLanguage === 'uk' ? 'Бажаєте записатися на консультацію?' : t.nav.consultation}
            </p>
            <button
              type="button"
              onClick={() => {
                setShowConsultWidget(false);
                onConsultClick();
              }}
              className="mt-4 inline-flex items-center justify-center w-full rounded-full bg-black text-white text-sm sm:text-base tracking-[0.1em] uppercase font-semibold px-5 py-3 hover:bg-gray-900 transition-colors"
            >
              {currentLanguage === 'uk' ? 'Залишити заявку' : t.nav.consultation}
            </button>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}

