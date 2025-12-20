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
}

export default function Navigation({ isScrolled, lang, setLang, t, currentLang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentLanguage = currentLang || lang;
  const showLanguageSelector = currentLanguage !== 'ru';

  useEffect(() => {
    setMounted(true);
  }, []);

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
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-2 lg:py-3 flex justify-between items-center">
        <Link href={`/${currentLanguage}`} className="relative h-10 lg:h-16 w-auto">
          <Image
            src={isScrolled ? '/blacklogo.png' : '/whitelogo.png'}
            alt="TeleBots"
            width={200}
            height={40}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          <Link href={`/${currentLanguage}/about`} className={`text-xs tracking-[0.2em] font-black transition ${
            isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.about}
          </Link>
          <Link href={`/${currentLanguage}/services`} className={`text-xs tracking-[0.2em] font-black transition ${
            isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.services}
          </Link>
          <Link href={`/${currentLanguage}/portfolio`} className={`text-xs tracking-[0.2em] font-black transition ${
            isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.portfolio}
          </Link>
          <Link href={`/${currentLanguage}/blog`} className={`text-xs tracking-[0.2em] font-black transition ${
            isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.blog}
          </Link>
          <Link href={`/${currentLanguage}/contact`} className={`text-xs tracking-[0.2em] font-black transition ${
            isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-400'
          }`}>
            {t.nav.contact}
          </Link>
          {showLanguageSelector && (
            <LanguageSelector lang={lang} setLang={setLang} isScrolled={isScrolled} currentLang={currentLanguage} />
          )}
        </div>

        <button
          onClick={() => {
            // Встановлюємо стан перед блокуванням скролу
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`lg:hidden z-50 relative transition ${
            isScrolled ? 'text-black' : 'text-white'
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
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-black"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${currentLanguage}/services`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-black"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${currentLanguage}/portfolio`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-black"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${currentLanguage}/blog`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-black"
            >
              {t.nav.blog}
            </Link>
            <Link
              href={`/${currentLanguage}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl tracking-wider hover:text-gray-400 transition font-black"
            >
              {t.nav.contact}
            </Link>
            
            {showLanguageSelector && (
              <div className="pt-6">
                <LanguageSelector lang={lang} setLang={setLang} isMobile={true} currentLang={currentLanguage} />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}

