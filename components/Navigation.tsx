'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { X, ArrowUpRight } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import OrderCtaPill from '@/components/OrderCtaPill';
import { Language } from './translations';
import { SITE_PX, SITE_INSET_L } from '@/lib/siteLayout';

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
  fontSize: 20,
  fontWeight: 900,
  fontFamily: "'Arial Black', sans-serif",
  letterSpacing: '-0.5px',
  lineHeight: 1,
};

export default function Navigation({ isScrolled, solidHeader = false, lang, setLang, t, currentLang, onConsultClick }: NavigationProps) {
  const headerSolid = solidHeader || isScrolled;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showConsultWidget, setShowConsultWidget] = useState(false);
  const currentLanguage = currentLang || lang;
  const showLanguageSelector = currentLanguage !== 'ru';

  const navLinkClass = headerSolid
    ? 'inline-flex h-12 items-center text-xs font-semibold leading-none tracking-[0.2em] text-black transition-colors hover:text-brand lg:text-[13px]'
    : 'inline-flex h-12 items-center text-xs font-semibold leading-none tracking-[0.2em] text-white transition-colors hover:text-brand-light lg:text-[13px]';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerSolid
          ? 'border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className={`relative flex h-16 items-center justify-between lg:h-20 ${SITE_PX}`}>
        <Link
          href={`/${currentLanguage}`}
          className="relative z-10 inline-flex h-12 flex-shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="TeleBots"
        >
          <span style={{ ...headerLogoStyle, color: headerSolid ? '#000' : '#fff' }}>telebots.</span>
        </Link>

        <div className="pointer-events-none absolute inset-x-0 hidden justify-center lg:flex">
          <div className="pointer-events-auto flex items-center gap-7 xl:gap-9">
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
          </div>
        </div>

        <div className="relative z-10 hidden items-center gap-5 xl:gap-6 lg:flex">
          {onConsultClick && (
            <OrderCtaPill
              size="sm"
              variant="brand"
              label={t.nav.consultation}
              onClick={onConsultClick}
              className="min-h-12 !py-1.5 !pl-5 !pr-1.5 shadow-none"
            />
          )}
          {showLanguageSelector && (
            <span
              className={`inline-flex h-12 items-center border-l pl-5 xl:pl-6 ${
                headerSolid ? 'border-black/15' : 'border-white/25'
              }`}
            >
              <LanguageSelector
                lang={lang}
                setLang={setLang}
                isScrolled={headerSolid}
                currentLang={currentLanguage}
              />
            </span>
          )}
        </div>

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="relative z-50 inline-flex h-12 items-center justify-center gap-1.5 px-1 font-mono text-sm font-semibold uppercase tracking-wide text-brand transition hover:text-brand-dark lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '[close]' : '[menu]'}
          <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
        </button>
      </div>

      {mounted && isMenuOpen && createPortal(
        <div
          className="fixed inset-0 bg-white lg:hidden z-[9999]"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-6 z-[10000] inline-flex items-center gap-1.5 font-mono text-sm font-semibold uppercase tracking-wide text-brand transition hover:text-brand-dark"
            aria-label="Close menu"
          >
            [close]
            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </button>
          <div
            className={`flex h-full w-full flex-col items-center justify-center space-y-6 ${SITE_PX}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href={`/${currentLanguage}/services`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold tracking-wider text-black transition hover:text-brand"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${currentLanguage}/portfolio`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold tracking-wider text-black transition hover:text-brand"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${currentLanguage}/blog`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold tracking-wider text-black transition hover:text-brand"
            >
              {t.nav.blog}
            </Link>
            <Link
              href={`/${currentLanguage}/pricing`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold tracking-wider text-black transition hover:text-brand"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href={`/${currentLanguage}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold tracking-wider text-black transition hover:text-brand"
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
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-neutral-900 transition hover:bg-brand-light"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {t.nav.consultation}
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </span>
              </button>
            )}

            {showLanguageSelector && (
              <div className="flex justify-center pt-6">
                <LanguageSelector lang={lang} setLang={setLang} isMobile={true} isScrolled={true} currentLang={currentLanguage} />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {mounted && showConsultWidget && onConsultClick && createPortal(
        <div className={`fixed bottom-4 z-[9998] sm:bottom-6 ${SITE_INSET_L}`}>
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
