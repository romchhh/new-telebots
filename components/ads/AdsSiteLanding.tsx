'use client';

import { lazy, Suspense, useEffect, useMemo, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Key, Phone, Sparkles, Star } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import AboutInfoCards from '@/components/AboutInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FullBleedHeroImage from '@/components/FullBleedHeroImage';
import HeroStatsCircle from '@/components/HeroStatsCircle';
import OrderCtaPill from '@/components/OrderCtaPill';
import PortfolioShowcaseScroller, {
  PortfolioShowcaseHeading,
} from '@/components/PortfolioShowcaseScroller';
import SuccessMessage from '@/components/SuccessMessage';
import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import { translations } from '@/components/translations';
import { captureLeadSource } from '@/lib/leadSource';
import { sendToTelegram } from '@/lib/telegram';
import { legal } from '@/lib/legal';
import { getPortfolioCards } from '@/lib/portfolioCards';
import { SITE_INNER_WIDE, SITE_PX } from '@/lib/siteLayout';
import {
  CTA_ARROW_CIRCLE,
  CTA_ARROW_ICON,
  HORIZONTAL_SCROLL_RAIL,
  HORIZONTAL_SCROLL_WRAP,
  RADIUS_CARD,
  RADIUS_PILL,
  RADIUS_SHELL,
} from '@/lib/siteUi';
import {
  ADS_SITE_FAQ,
  ADS_SITE_INCLUDES_INTRO_ITEMS,
  ADS_SITE_PRICES,
  ADS_SITE_PROBLEMS,
  ADS_GOOGLE_PROFILE_URL,
  ADS_GOOGLE_RATING,
  ADS_SITE_STEPS,
  ADS_TELEGRAM_URL,
  type AdsSiteLandingCopy,
} from '@/lib/adsSiteLanding';

const SECTION_Y = 'py-10 sm:py-12 md:py-14 lg:py-16';

const OrderModal = lazy(() => import('@/components/OrderModal'));

const display = { fontFamily: 'var(--font-display)' };
const montserrat = { fontFamily: 'var(--font-montserrat)' };
const sans = { fontFamily: 'var(--font-sans)' };
const headerLogoStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: 900,
  fontFamily: "'Arial Black', sans-serif",
  letterSpacing: '-0.5px',
  lineHeight: 1,
};

const OFFER_IMAGES = [
  '/portfolio/portfolio-emaro-autocare.jpg',
  '/portfolio/portfolio-filo-estate.jpg',
  '/portfolio/portfolio-flix-market.jpg',
];

const STEP_KEYS = ['pink', 'dark', 'light', 'pink'] as const;

function AdsFamiliarSticker({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      aria-hidden
    >
      <div
        className={`relative rotate-[2.5deg] ${RADIUS_CARD} border-2 border-neutral-900 bg-brand px-6 py-4 shadow-[5px_5px_0_#171717] sm:px-8 sm:py-5 md:px-9 md:py-6`}
      >
        <Sparkles className="absolute -right-2 -top-2 h-6 w-6 text-neutral-900 sm:h-7 sm:w-7" strokeWidth={2.25} />
        <p
          className="text-[clamp(1.35rem,3.5vw,1.85rem)] font-black uppercase leading-none tracking-tight text-neutral-900"
          style={display}
        >
          Знайомо?
        </p>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-900/70 sm:text-sm" style={sans}>
          Більшість клієнтів
        </p>
      </div>
      <span
        className={`absolute -bottom-3 -left-3 hidden h-10 w-10 items-center justify-center ${RADIUS_CARD} border-2 border-neutral-900 bg-white text-lg font-black text-neutral-900 sm:flex`}
        style={display}
      >
        !
      </span>
    </div>
  );
}

function AdsPainSection() {
  return (
    <section className={`relative bg-white ${SECTION_Y} ${SITE_PX}`} aria-labelledby="ads-problem-offer-heading">
      <div
        className="pointer-events-none absolute right-[6%] top-20 hidden h-44 w-44 rounded-full bg-brand/15 blur-3xl lg:block"
        aria-hidden
      />

      <div className={`${SITE_INNER_WIDE}`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 max-w-3xl">
            <h2
              id="ads-problem-offer-heading"
              className="text-[clamp(1.75rem,4.2vw,3rem)] font-black uppercase leading-[1.02] tracking-tight text-neutral-900"
              style={display}
            >
              Болі, з якими приходять — і що робимо замість цього
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 sm:text-xl" style={sans}>
              Спочатку — те, що чуємо на дзвінках. Далі — сайт «під ключ»: не список технологій, а результат, який можна перевірити з телефону.
            </p>
          </div>
          <AdsFamiliarSticker className="mx-auto lg:mx-0 lg:mt-2" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:gap-8">
          {ADS_SITE_PROBLEMS.map((line, index) => (
            <div
              key={line}
              className={`flex min-h-[5.5rem] items-start gap-5 ${RADIUS_SHELL} border border-[#e4d2d8] bg-[#f0e6ea]/80 p-7 transition hover:border-brand/40 sm:min-h-[6.25rem] sm:p-8 md:p-9`}
            >
              <KeyboardKeyBadge n={index + 1} size="md" className="mt-0.5 shrink-0" />
              <p className="text-lg font-medium leading-snug text-neutral-900 sm:text-xl md:text-[1.35rem] md:leading-snug" style={sans}>
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdsSiteIncludesSection({ onCta }: { onCta: () => void }) {
  return (
    <section className={`relative bg-white ${SECTION_Y} ${SITE_PX}`} aria-labelledby="ads-includes-heading">
      <div className={`${SITE_INNER_WIDE}`}>
        <div
          className={`relative ${RADIUS_SHELL} border border-brand/20 bg-brand-soft/60 p-7 sm:p-9 md:p-11 lg:p-12`}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
            <div className="max-w-md shrink-0 lg:sticky lg:top-28">
              <h2
                id="ads-includes-heading"
                className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-neutral-900"
                style={display}
              >
                Що входить у послугу
              </h2>
              <p className="mt-3 inline-flex items-center gap-2.5 text-lg font-semibold text-brand-dark sm:text-xl" style={sans}>
                <Key className="h-5 w-5 shrink-0 text-brand sm:h-6 sm:w-6" strokeWidth={2.25} aria-hidden />
                Розробка під ключ
              </p>
              <button
                type="button"
                onClick={onCta}
                className="mt-8 hidden items-center gap-3 text-base font-bold text-neutral-900 transition hover:text-brand lg:inline-flex"
                style={sans}
              >
                Отримати розрахунок
                <span className={`inline-flex h-10 w-10 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white`}>
                  <ArrowUpRight className="h-5 w-5" aria-hidden />
                </span>
              </button>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-4 lg:max-w-3xl lg:gap-5">
              {ADS_SITE_INCLUDES_INTRO_ITEMS.map((item, index) => (
                <article
                  key={item.kicker}
                  className={`${RADIUS_CARD} border border-[#e4d2d8] bg-white/95 p-5 sm:p-6 md:p-7 lg:border-l-4 lg:border-l-brand lg:pl-6`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className="text-xs font-black tabular-nums text-brand/80 sm:text-sm"
                      style={display}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-sm font-black uppercase tracking-[0.12em] text-brand-dark sm:text-base"
                      style={display}
                    >
                      {item.kicker}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-neutral-800 sm:text-lg md:text-xl" style={sans}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:hidden">
            <OrderCtaPill size="md" variant="dark" label="Отримати розрахунок" onClick={onCta} className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

function track(event: string, niche: string) {
  const win = window as Window & { dataLayer?: Record<string, string>[] };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event, landing: `site-${niche}` });
}

function TelegramLink({
  niche,
  className,
  children,
}: {
  niche: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={ADS_TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('ads_lp_telegram', niche)}
    >
      {children}
    </a>
  );
}

function HeroGoogleRating({ niche }: { niche: string }) {
  return (
    <a
      href={ADS_GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-5 inline-flex w-full max-w-md items-start gap-3 ${RADIUS_CARD} border border-white/25 bg-white/10 px-4 py-3.5 text-left backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15 sm:mt-6 sm:max-w-lg sm:gap-4 sm:px-5 sm:py-4`}
      onClick={() => track('ads_lp_google', niche)}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-12 sm:w-12">
        <FcGoogle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-white sm:text-base" style={sans}>
          TeleBots
        </span>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="inline-flex items-center gap-1 text-base font-black tabular-nums text-white sm:text-lg" style={display}>
            {ADS_GOOGLE_RATING.score}
            <Star className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          </span>
          <span className="text-sm text-white/90 sm:text-base" style={sans}>
            {ADS_GOOGLE_RATING.reviewsLabel}
          </span>
        </span>
        <span className="mt-1.5 block text-xs leading-snug text-white/75 sm:text-sm" style={sans}>
          {ADS_GOOGLE_RATING.category}
        </span>
      </span>
    </a>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 border-t border-neutral-200">
      {ADS_SITE_FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="border-b border-neutral-200">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-xl font-black leading-tight sm:text-2xl md:text-[1.75rem]" style={display}>
                {item.q}
              </span>
              <ChevronDown
                className={`h-6 w-6 shrink-0 text-neutral-900 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                strokeWidth={2.25}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <p className="max-w-3xl pb-6 text-base leading-relaxed text-neutral-600 sm:pb-7 sm:text-lg" style={sans}>
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function StepKey({ n, variant }: { n: string; variant: (typeof STEP_KEYS)[number] }) {
  const styles = {
    pink: 'bg-brand-light text-neutral-900 shadow-[0_5px_0_var(--brand),0_8px_20px_rgba(244,114,182,0.35)]',
    dark: 'bg-neutral-900 text-white shadow-[0_5px_0_#1a1a1a,0_8px_20px_rgba(0,0,0,0.2)]',
    light: 'bg-white text-neutral-900 border border-neutral-200 shadow-[0_5px_0_#d4d4d4,0_8px_16px_rgba(0,0,0,0.08)]',
  };
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center ${RADIUS_CARD} text-lg font-bold sm:h-14 sm:w-14 sm:text-xl ${styles[variant]}`}
      aria-hidden
    >
      {n}
    </span>
  );
}

export default function AdsSiteLanding({ copy }: { copy: AdsSiteLandingCopy }) {
  const t = translations.uk;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const serviceName = 'Розробка сайту під ключ';
  const baseLeadService = `Ads LP · ${serviceName} · ${copy.slug}`;
  const [leadService, setLeadService] = useState(baseLeadService);

  const cards = useMemo(
    () =>
      [...getPortfolioCards('uk')].sort((a, b) => {
        if (a.category === b.category) return 0;
        return a.category === 'websites' ? -1 : 1;
      }),
    []
  );

  useEffect(() => {
    captureLeadSource();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setHeaderSolid(window.scrollY > 50));
    };
    raf = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const openModal = (caseTitle?: string) => {
    setLeadService(caseTitle ? `${baseLeadService} · кейс ${caseTitle}` : baseLeadService);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: {
    name: string;
    phone: string;
    request: string;
    formStartedAt?: number;
    hp_field_xb7?: string;
  }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: leadService,
      formStartedAt: data.formStartedAt,
      hp_field_xb7: data.hp_field_xb7,
    });
    if (success) {
      track('ads_lp_form_submit', copy.slug);
      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } else {
      alert('Не вийшло відправити. Напишіть у Telegram.');
    }
  };

  const headerDark = headerSolid;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerSolid
            ? 'border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-sm'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className={`flex h-16 items-center justify-between lg:h-20 ${SITE_PX}`}>
          <a href="#top" className="inline-flex h-12 items-center" aria-label="TeleBots">
            <span style={{ ...headerLogoStyle, color: headerDark ? '#000' : '#fff' }}>telebots.</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:+${legal.phoneRaw}`}
              aria-label="Зателефонувати"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                headerDark ? 'border-neutral-200 text-neutral-900' : 'border-white/40 text-white'
              }`}
              onClick={() => track('ads_lp_phone', copy.slug)}
            >
              <Phone className="h-4 w-4" />
            </a>
            <TelegramLink
              niche={copy.slug}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                headerDark ? 'border-neutral-200 bg-white text-neutral-900' : 'border-white/40 bg-white/10 text-white'
              }`}
            >
              <FaTelegramPlane className="h-5 w-5 text-brand" aria-hidden />
              <span className="sr-only">Telegram</span>
            </TelegramLink>
            <OrderCtaPill
              size="sm"
              variant="brand"
              label="Розрахунок"
              onClick={() => openModal()}
              className="min-h-12 !py-1.5 !pl-4 !pr-1.5 shadow-none sm:!pl-5"
            />
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="relative h-[100svh] max-h-[100svh] overflow-hidden bg-black">
          <FullBleedHeroImage
            src="/other/hero-background.webp"
            alt="Фон: панорама міста та узбережжя на заході сонця"
          />
          <div className="absolute inset-0 z-10 bg-black/35" aria-hidden />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/50 to-black/10" aria-hidden />
          <div
            className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent md:from-black/50"
            aria-hidden
          />
          <HeroStatsCircle
            startDate={{ label: 'проєктів', value: '200+' }}
            duration={{ label: 'на лендінг', value: '5–7 днів' }}
          />
          <div
            className={`relative z-20 grid h-full max-h-full w-full overflow-hidden pb-2 pt-16 sm:pb-5 sm:pt-24 lg:pt-28 ${SITE_PX}`}
            style={{ gridTemplateRows: '1fr auto' }}
          >
            <div className="flex min-h-0 flex-col justify-center max-md:items-stretch md:justify-center max-lg:pr-[6.5rem] sm:max-lg:pr-40 lg:pr-64 xl:pr-72">
              <div className="min-h-0 w-full max-w-[min(100%,52rem)]">
                <h1
                  className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-white text-[clamp(2.125rem,9.2vw,2.75rem)] sm:text-[clamp(2.5rem,6.5vw,3.5rem)] sm:leading-[0.92] md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-[5.5rem] xl:leading-[0.88]"
                  style={montserrat}
                >
                  {copy.h1}
                </h1>
                <p
                  className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg md:mt-6 md:text-xl lg:text-2xl"
                  style={montserrat}
                >
                  {copy.lead}
                </p>
                <HeroGoogleRating niche={copy.slug} />
              </div>
            </div>
            <div className="flex min-h-0 w-full shrink-0 flex-col items-stretch gap-3 max-md:-translate-y-3 md:ml-auto md:w-[min(100%,28rem)] md:gap-4">
              <OrderCtaPill
                size="hero"
                variant="brand"
                label="Отримати розрахунок"
                onClick={() => openModal()}
                className="w-full max-w-none"
              />
              <TelegramLink
                niche={copy.slug}
                className={`inline-flex min-h-[4.5rem] w-full items-center justify-center gap-2.5 ${RADIUS_PILL} border border-white/70 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-900 md:min-h-[4.75rem] md:px-8 md:text-lg`}
              >
                <FaTelegramPlane className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                Написати в Telegram
              </TelegramLink>
            </div>
          </div>
        </section>

        <AdsPainSection />

        <section className={`relative bg-white ${SECTION_Y} ${SITE_PX}`} aria-labelledby="ads-offers-heading">
          <div className={SITE_INNER_WIDE}>
            <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <h2
                id="ads-offers-heading"
                className="max-w-[16ch] text-[clamp(1.65rem,4vw,2.75rem)] font-black uppercase leading-[1.02] tracking-tight text-neutral-900"
                style={display}
              >
                Вартість залежить від типу сайту
              </h2>
              <div className="flex max-w-lg flex-1 flex-col gap-5 lg:max-w-md lg:items-end">
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base md:text-lg lg:text-right" style={sans}>
                  Орієнтир, не прайс у договорі. Точну суму називаємо після розрахунку: скільки екранів і чи потрібна оплата.
                </p>
              </div>
            </div>
          </div>
          <div className={`relative ${HORIZONTAL_SCROLL_WRAP}`}>
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent lg:hidden`}
              aria-hidden
            />
            <div className={`${HORIZONTAL_SCROLL_RAIL} gap-4 pb-3 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0`}>
              {ADS_SITE_PRICES.map((row, index) => (
                <article
                  key={row.type}
                  data-offer-card
                  className={`flex min-h-[22rem] w-[calc(100%-3.25rem)] shrink-0 snap-start flex-col ${RADIUS_SHELL} border border-[#e4d2d8] bg-[#f0e6ea] p-7 sm:min-h-[24rem] sm:w-[calc(100%-4.5rem)] sm:p-8 md:w-[calc(50%-0.75rem)] md:p-9 lg:w-full lg:shrink`}
                >
                  <h3
                    className="text-[clamp(1.5rem,4.2vw,2rem)] font-bold leading-[1.15] text-neutral-900"
                    style={sans}
                  >
                    {row.type}
                  </h3>
                  <p className="mt-6 text-base font-semibold tabular-nums text-neutral-500 sm:mt-8 sm:text-lg" style={sans}>
                    {String(index + 1).padStart(2, '0')}/
                  </p>
                  <p className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-black leading-none text-neutral-900" style={display}>
                    {row.from}
                  </p>
                  <p className="mt-3 flex-1 text-base leading-[1.6] text-neutral-600 sm:text-lg" style={sans}>
                    {row.time}. {row.note}
                  </p>
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className={`group mt-10 flex w-full min-w-0 items-center gap-2.5 ${RADIUS_PILL} border border-[#dcc4cc] bg-[#faf5f7] p-1.5 text-left transition hover:border-[#c9a8b3] hover:bg-white sm:gap-3`}
                  >
                    <span className={`relative h-11 w-[3.25rem] shrink-0 overflow-hidden sm:h-12 sm:w-14 ${RADIUS_PILL}`}>
                      <Image
                        src={OFFER_IMAGES[index] ?? OFFER_IMAGES[0]}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs font-bold uppercase tracking-[0.08em] text-neutral-900 sm:text-sm" style={sans}>
                      Порахувати
                    </span>
                    <span className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white ${CTA_ARROW_CIRCLE.sm}`}>
                      <ArrowUpRight className={CTA_ARROW_ICON.sm} strokeWidth={2.25} aria-hidden />
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AdsSiteIncludesSection onCta={() => openModal()} />

        <PortfolioShowcaseScroller
          lang="uk"
          cards={cards}
          sectionId="ads-cases"
          headingId="ads-cases-heading"
          heading={<PortfolioShowcaseHeading line1="Сайти, які" line2="вже працюють" />}
          lead={
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl" style={sans}>
              Гортайте вбік. Це живі проєкти, не макети.
            </p>
          }
          viewAllHref="/uk/portfolio"
          viewAllLabel=""
          showViewAll={false}
          headerAction={
            <OrderCtaPill size="sm" variant="brand" label="Хочу так само" onClick={() => openModal()} />
          }
          onCardClick={(card) => openModal(card.title)}
          scrollPrevLabel="Попередні кейси"
          scrollNextLabel="Наступні кейси"
          categoryCopy={{ filterWebsites: 'Сайти', filterChatbots: 'Боти' }}
          className="!py-10 sm:!py-12 md:!py-14 lg:!py-16"
        />

        <section className={`relative bg-white ${SECTION_Y} ${SITE_PX}`} aria-labelledby="ads-steps-heading">
          <div className={`grid gap-12 lg:grid-cols-[minmax(0,34%)_minmax(0,66%)] lg:items-start lg:gap-10 xl:gap-14 ${SITE_INNER_WIDE}`}>
            <div className="lg:sticky lg:top-28 lg:max-w-md lg:self-start">
              <h2
                id="ads-steps-heading"
                className="text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
                style={display}
              >
                <span className="block">Як іде</span>
                <span className="mt-1 block">робота</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl" style={sans}>
                Спочатку називаємо тип сайту і вилку. Верстку починаємо, коли структура вже затверджена.
              </p>
              <div className="mt-7">
                <OrderCtaPill size="md" variant="dark" label="Порахувати мій сайт" onClick={() => openModal()} />
              </div>
            </div>
            <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 xl:gap-8">
              {ADS_SITE_STEPS.map((step, index) => (
                <article
                  key={step.n}
                  className={`flex h-full flex-col ${RADIUS_SHELL} border border-neutral-200/80 bg-neutral-50 p-6 sm:p-7 md:p-8 lg:p-10 xl:p-11`}
                >
                  <div className="mb-5 sm:mb-6">
                    <StepKey n={step.n} variant={STEP_KEYS[index] ?? 'light'} />
                  </div>
                  <h3
                    className="text-[clamp(1.5rem,3.2vw,2.15rem)] font-black uppercase leading-[1.05] tracking-[0.02em] text-neutral-900"
                    style={display}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-neutral-400 sm:text-lg" style={sans}>
                    {step.time}
                  </p>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-500 sm:text-lg md:text-[1.05rem]" style={sans}>
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`relative bg-white ${SECTION_Y} ${SITE_PX}`}>
          <div className={SITE_INNER_WIDE}>
            <div className={`relative mb-8 overflow-hidden md:mb-12 ${RADIUS_CARD}`}>
              <div className="relative h-[240px] w-full sm:h-[280px] md:h-[320px] lg:h-[380px]">
                <Image
                  src="/other/about-hero.png"
                  alt="Команда TeleBots: робочий процес розробки"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.25) 100%)',
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-4 md:gap-5 md:px-10">
                  <p
                    className="max-w-4xl text-center text-base font-semibold leading-snug text-white sm:text-lg md:text-xl md:font-bold lg:text-2xl"
                    style={{ ...sans, textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
                  >
                    Назвіть нішу і що має робити сайт. Повернемось з вилкою, без презентації на 20 слайдів.
                  </p>
                  <div className="hidden w-full max-w-md md:block">
                    <OrderCtaPill size="md" label="Отримати розрахунок" onClick={() => openModal()} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 flex justify-center md:hidden">
              <OrderCtaPill size="md" label="Отримати розрахунок" onClick={() => openModal()} elevated className="w-full max-w-md" />
            </div>
            <AboutInfoCards
              copy={t.about.whyUs}
              lang="uk"
              onContactClick={() => openModal()}
              onExploreClick={() => openModal()}
            />
          </div>
        </section>

        <section className={`bg-white ${SECTION_Y} ${SITE_PX}`} aria-labelledby="ads-faq-heading">
          <div className={SITE_INNER_WIDE}>
            <h2
              id="ads-faq-heading"
              className="max-w-[14ch] text-[clamp(2rem,5vw,3.25rem)] font-black uppercase leading-[1.02] tracking-tight"
              style={display}
            >
              Питання перед стартом
            </h2>
            <FaqAccordion />
          </div>
        </section>

        <section className={`w-full ${SECTION_Y} ${SITE_PX}`}>
          <div className={`${SITE_INNER_WIDE} relative overflow-hidden ${RADIUS_SHELL} bg-black px-6 py-12 text-white md:px-12 md:py-16`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/25 blur-3xl" aria-hidden />
            <h2
              className="relative mb-4 text-center text-[clamp(1.75rem,4vw,3.25rem)] font-black tracking-tight"
              style={display}
            >
              Розкажіть про бізнес, і ми порахуємо вартість
            </h2>
            <p className="relative mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
              Ім’я, телефон і кілька слів про задачу. Передзвонимо або напишемо з вилкою.
            </p>
            <div className="relative mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <OrderCtaPill
                size="sm"
                variant="brand"
                label="Отримати розрахунок"
                onClick={() => openModal()}
                className="w-full sm:w-auto sm:min-w-[14rem]"
              />
              <TelegramLink
                niche={copy.slug}
                className={`inline-flex w-full items-center justify-center gap-2 ${RADIUS_PILL} border-2 border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:border-brand hover:bg-brand/10 sm:w-auto`}
              >
                <FaTelegramPlane className="h-4 w-4 text-brand" aria-hidden />
                Написати в Telegram
              </TelegramLink>
            </div>
          </div>
        </section>

        <ContactFormSection
          t={t}
          lang="uk"
          id="ads-contact"
          className="bg-white !py-10 sm:!py-12 md:!py-14 lg:!py-16"
          serviceName={leadService}
          onSuccess={() => track('ads_lp_form_submit', copy.slug)}
        />
      </main>

      <footer className={`border-t border-neutral-100 py-10 text-base text-neutral-500 ${SITE_PX}`}>
        <p className="font-bold text-neutral-900">{legal.companyName}</p>
        <p className="mt-1">{legal.legalAddress}</p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          <a href={`tel:+${legal.phoneRaw}`} className="hover:text-neutral-900" onClick={() => track('ads_lp_phone', copy.slug)}>
            {legal.phone}
          </a>
          <TelegramLink niche={copy.slug} className="inline-flex items-center gap-1.5 hover:text-neutral-900">
            <FaTelegramPlane className="h-4 w-4 text-brand" aria-hidden />
            Telegram
          </TelegramLink>
          <a href={`mailto:${legal.email}`} className="hover:text-neutral-900">
            {legal.email}
          </a>
          <a href="/uk/privacy" className="underline underline-offset-4 hover:text-neutral-900">
            Політика конфіденційності
          </a>
        </p>
      </footer>

      <Suspense fallback={null}>
        {isModalOpen ? (
          <OrderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={serviceName}
            t={t}
            onSubmit={handleSubmit}
          />
        ) : null}
      </Suspense>
      {isSuccessOpen ? (
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={t.modal.success}
        />
      ) : null}
    </div>
  );
}
