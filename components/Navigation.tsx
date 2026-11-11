'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import OrderCtaPill from '@/components/OrderCtaPill';
import { Language } from './translations';
import { SITE_INSET_L } from '@/lib/siteLayout';
import { BLOG_PATH } from '@/lib/site';
import { closeSiteMenu } from '@/lib/chrome';

interface NavigationProps {
  isScrolled: boolean;
  solidHeader?: boolean;
  transparentOnLight?: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof import('./translations').translations.uk;
  currentLang?: Language;
  onConsultClick?: () => void;
}

let consultWidgetShownInRuntime = false;
let consultWidgetDismissedInRuntime = false;

function homeLabel(lang: Language) {
  if (lang === 'en') return 'Home';
  if (lang === 'pl') return 'Start';
  if (lang === 'ru') return 'Главная';
  return 'Головна';
}

export default function Navigation({
  isScrolled,
  solidHeader = false,
  transparentOnLight = false,
  lang,
  setLang,
  t,
  currentLang,
  onConsultClick,
}: NavigationProps) {
  const headerSolid = solidHeader || isScrolled || transparentOnLight;
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConsultWidget, setShowConsultWidget] = useState(false);
  const currentLanguage = currentLang || lang;
  const showLanguageSelector = currentLanguage !== 'ru';
  const pathname = usePathname();
  const hideConsultWidget = pathname?.includes('/contact');

  const nav = [
    { href: `/${currentLanguage}`, label: homeLabel(currentLanguage), id: 'home' },
    { href: `/${currentLanguage}/services`, label: t.nav.services, id: 'services' },
    { href: `/${currentLanguage}/portfolio`, label: t.nav.portfolio, id: 'portfolio' },
    { href: BLOG_PATH, label: t.nav.blog, id: 'blog' },
    { href: `/${currentLanguage}/pricing`, label: t.nav.pricing, id: 'pricing' },
    { href: `/${currentLanguage}/contact`, label: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const shell = document.querySelector('.navigation-shell');
    if (!shell) return;
    const sync = () => setMenuOpen(shell.getAttribute('data-menu-phase') !== 'closed');
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(shell, { attributes: true, attributeFilter: ['data-menu-phase'] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted || !onConsultClick || hideConsultWidget) return;
    if (consultWidgetDismissedInRuntime) {
      setShowConsultWidget(false);
      return;
    }
    if (consultWidgetShownInRuntime) {
      setShowConsultWidget(true);
      return;
    }
    const reveal = () => {
      if (consultWidgetDismissedInRuntime) return;
      consultWidgetShownInRuntime = true;
      setShowConsultWidget(true);
    };
    const onScroll = () => {
      if (window.scrollY > 420) reveal();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = window.setTimeout(reveal, 14000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, [mounted, onConsultClick, hideConsultWidget]);

  useEffect(() => {
    if (!showConsultWidget) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const phase = document.querySelector('.navigation-shell')?.getAttribute('data-menu-phase');
      if (phase && phase !== 'closed') return;
      setShowConsultWidget(false);
      consultWidgetDismissedInRuntime = true;
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showConsultWidget]);

  const menuLabelOpen =
    currentLanguage === 'pl' || currentLanguage === 'en' ? 'Menu' : 'Меню';
  const menuLabelClose =
    currentLanguage === 'pl'
      ? 'Zamknij'
      : currentLanguage === 'en'
        ? 'Close'
        : currentLanguage === 'ru'
          ? 'Закрыть'
          : 'Закрити';

  return (
    <>
      <div className="navigation-controls" data-header-solid={headerSolid ? 'true' : 'false'}>
        <header className="site-header flex items-center justify-between">
          <div className="header-location">
            <Link
              aria-label="TeleBots — home"
              className="brand inline-flex items-center"
              href={`/${currentLanguage}`}
            >
              <span>telebots.</span>
            </Link>
          </div>
          <div className="header-actions">
            {showLanguageSelector ? (
              <LanguageSelector
                lang={lang}
                setLang={setLang}
                isScrolled={headerSolid && !menuOpen}
                currentLang={currentLanguage}
              />
            ) : null}
            <button
              aria-controls="site-navigation"
              aria-expanded="false"
              aria-label={menuLabelOpen}
              className="menu-toggle"
              type="button"
            >
              <span aria-hidden="true" className="menu-toggle-label">
                <span data-active="true">{menuLabelOpen}</span>
                <span>{menuLabelClose}</span>
              </span>
              <span aria-hidden="true" className="menu-toggle-disc">
                <span />
                <span />
              </span>
            </button>
          </div>
        </header>

        <nav
          aria-label="Main navigation"
          className="navigation-links"
          hidden
          id="site-navigation"
        >
          {nav.map((item, i) => (
            <Link key={item.id} href={item.href} style={{ ['--menu-index' as string]: i }}>
              {item.label}
            </Link>
          ))}
          {onConsultClick ? (
            <button
              type="button"
              style={{ ['--menu-index' as string]: nav.length }}
              onClick={() => {
                closeSiteMenu();
                onConsultClick();
              }}
            >
              {t.nav.consultation}
            </button>
          ) : null}
        </nav>
        <span className="sr-only" role="status" />
      </div>

      {mounted && showConsultWidget && !menuOpen && !hideConsultWidget && onConsultClick
        ? createPortal(
            <div className={`fixed bottom-4 z-[9998] pb-[env(safe-area-inset-bottom)] sm:bottom-6 ${SITE_INSET_L}`}>
              <div className="relative w-[280px] rounded-2xl border border-black/10 bg-white/95 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:w-[300px]">
                <button
                  type="button"
                  onClick={() => {
                    setShowConsultWidget(false);
                    consultWidgetDismissedInRuntime = true;
                  }}
                  className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center text-gray-400 transition-colors hover:text-black"
                  aria-label="Close consultation widget"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="pr-7 text-base font-normal leading-relaxed text-black sm:text-lg">
                  {t.nav.consultationWidgetPrompt}
                </p>
                <OrderCtaPill
                  size="sm"
                  variant="dark"
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
          )
        : null}
    </>
  );
}
