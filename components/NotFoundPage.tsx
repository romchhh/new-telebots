'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrderCtaPill from '@/components/OrderCtaPill';
import { translations, Language } from '@/components/translations';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

const display = { fontFamily: 'var(--font-display)' } as const;
const sans = { fontFamily: 'var(--font-sans)' } as const;

export default function NotFoundPage() {
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
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    checkScroll();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    router.push(currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`));
  };

  const copy =
    lang === 'uk'
      ? {
          hint: 'Сторінка переїхала або адресу введено з помилкою. Оберіть розділ нижче або поверніться на головну.',
          navTitle: 'Куди далі',
          back: 'Назад',
          home: 'На головну',
          contact: 'Написати нам',
        }
      : lang === 'en'
        ? {
            hint: 'The page may have moved, or the address is wrong. Pick a section below or go home.',
            navTitle: 'Where next',
            back: 'Back',
            home: 'Home',
            contact: 'Contact us',
          }
        : lang === 'pl'
          ? {
              hint: 'Strona mogła zostać przeniesiona albo adres jest błędny. Wybierz sekcję poniżej lub wróć na start.',
              navTitle: 'Dokąd dalej',
              back: 'Wstecz',
              home: 'Strona główna',
              contact: 'Napisz do nas',
            }
          : {
              hint: 'Страница переехала или адрес введён с ошибкой. Выберите раздел ниже или вернитесь на главную.',
              navTitle: 'Куда дальше',
              back: 'Назад',
              home: 'На главную',
              contact: 'Написать нам',
            };

  const quickLinks = [
    { href: `/${lang}`, label: copy.home },
    { href: `/${lang}/services`, label: t.nav.services },
    {
      href: `/${lang}/solutions/telegram-bots`,
      label:
        lang === 'uk'
          ? 'Telegram-боти'
          : lang === 'en'
            ? 'Telegram bots'
            : lang === 'pl'
              ? 'Boty Telegram'
              : 'Telegram-боты',
    },
    { href: `/${lang}/portfolio`, label: t.nav.portfolio },
    { href: `/${lang}/pricing`, label: t.nav.pricing },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation
        isScrolled={isScrolled}
        lang={lang}
        setLang={handleLangChange}
        t={t}
        currentLang={lang}
      />

      <main id="main-content">
        <section className={`relative overflow-hidden border-b border-gray-100 pt-28 md:pt-32 ${SITE_PX}`}>
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px),
                linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)
              `,
              backgroundSize: '52px 52px',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/4 z-0 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.14)_0%,transparent_70%)] blur-3xl"
            aria-hidden
          />

          <div className={`relative z-10 ${SITE_INNER} pb-16 md:pb-24`}>
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <div>
                <p
                  className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
                  style={sans}
                >
                  {t.footer.notFound}
                </p>
                <p
                  className="mb-4 select-none text-[clamp(5.5rem,18vw,9.5rem)] font-black leading-none tracking-tight text-black"
                  style={display}
                  aria-hidden
                >
                  404
                </p>
                <h1
                  className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl lg:text-4xl"
                  style={display}
                >
                  {t.footer.notFoundDesc}
                </h1>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base" style={sans}>
                  {copy.hint}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <OrderCtaPill
                    size="sm"
                    variant="brand"
                    label={copy.home}
                    href={`/${lang}`}
                    className="w-full sm:w-auto sm:min-w-[12rem]"
                  />
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:min-w-[12rem]"
                    style={sans}
                  >
                    {copy.contact}
                  </Link>
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:text-brand"
                    style={sans}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                    {copy.back}
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-zinc-50 p-6 sm:p-8">
                <p
                  className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
                  style={sans}
                >
                  {copy.navTitle}
                </p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                  {quickLinks.map((link, i) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 rounded-2xl border border-transparent bg-white px-4 py-3.5 shadow-[0_2px_0_#e4e4e7] transition-colors hover:border-brand/30 hover:shadow-[0_2px_0_var(--brand-dark)]"
                      >
                        <span
                          className="inline-flex h-8 min-w-8 select-none items-center justify-center rounded-lg bg-brand px-1.5 text-xs font-bold tabular-nums text-white shadow-[0_2px_0_var(--brand-dark)]"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-black" style={sans}>
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
    </div>
  );
}
