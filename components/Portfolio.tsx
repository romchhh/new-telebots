'use client';

import React, { Suspense, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { translations, Language } from './translations';
import { useScrollAnimation } from './useScrollAnimation';
import OrderCtaPill from '@/components/OrderCtaPill';
import CasePreviewModal from '@/components/CasePreviewModal';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import { SITE_PX } from '@/lib/siteLayout';
import { getPortfolioCards } from '@/lib/portfolioCards';
import {
  getCasesData,
  isFlagshipCase,
  type PortfolioCaseData,
} from '@/lib/portfolioCases';

type PortfolioProps = {
  onOrderClick?: () => void;
};

/**
 * useSearchParams змушує найближчий Suspense віддавати fallback у статичному HTML.
 * Тримаємо його в окремому вузлі, щоб герой з <h1> потрапляв у пререндер.
 */
function CaseQueryWatcher({ onCaseChange }: { onCaseChange: (caseId: string | null) => void }) {
  const searchParams = useSearchParams();
  const caseFromQuery = searchParams.get('case');

  useEffect(() => {
    onCaseChange(caseFromQuery);
  }, [caseFromQuery, onCaseChange]);

  return null;
}

export default function Portfolio({ onOrderClick }: PortfolioProps) {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = getCasesData(validLang);
  const cards = getPortfolioCards(validLang);

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'chatbots' | 'websites'>('all');
  const [previewCaseId, setPreviewCaseId] = useState<string | null>(null);
  const [portfolioRef, isPortfolioVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();
  const [introRef, isIntroVisible] = useScrollAnimation();

  const openLightCase = useCallback(
    (caseId: string, syncUrl = true) => {
      setPreviewCaseId(caseId);
      if (syncUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set('case', caseId);
        router.replace(`${url.pathname}?${url.searchParams.toString()}`, { scroll: false });
      }
    },
    [router]
  );

  const closeLightCase = useCallback(() => {
    setPreviewCaseId(null);
    const url = new URL(window.location.href);
    if (url.searchParams.has('case')) {
      url.searchParams.delete('case');
      const qs = url.searchParams.toString();
      router.replace(qs ? `${url.pathname}?${qs}` : url.pathname, { scroll: false });
    }
  }, [router]);

  const handleCaseQuery = useCallback(
    (caseFromQuery: string | null) => {
      if (!caseFromQuery) {
        setPreviewCaseId(null);
        return;
      }
      if (casesData[caseFromQuery] && !isFlagshipCase(caseFromQuery)) {
        setPreviewCaseId(caseFromQuery);
        return;
      }
      if (isFlagshipCase(caseFromQuery)) {
        router.replace(`/${validLang}/portfolio/${caseFromQuery}`);
      }
    },
    [casesData, router, validLang]
  );

  const filtered =
    selectedCategory === 'all'
      ? [...cards].sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'websites' ? -1 : 1;
        })
      : cards.filter((c) => c.category === selectedCategory);

  const previewData: PortfolioCaseData | null =
    previewCaseId && casesData[previewCaseId] ? casesData[previewCaseId] : null;

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <CaseQueryWatcher onCaseChange={handleCaseQuery} />
      </Suspense>
      <section className="relative overflow-hidden bg-black pb-8 pt-16 text-white md:pb-12 md:pt-24">
        <div
          className="pointer-events-none absolute -right-24 top-1/4 z-[5] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.22)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 z-[5] h-[min(50vw,360px)] w-[min(50vw,360px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-24 scroll-animate-left ${isContentVisible ? 'animate' : ''}`}
            ref={contentRef}
          >
            <h1
              className="mb-8 text-4xl font-black leading-tight sm:mb-12 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t.portfolio.title}
            </h1>
            <OrderCtaPill
              size="md"
              variant="brand"
              label={t.portfolio.viewPortfolio}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full max-w-md"
            />
          </div>

          <div
            className={`relative aspect-[1500/970] w-full overflow-hidden rounded-lg scroll-animate-right ${isImageVisible ? 'animate' : ''}`}
            ref={imageRef}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <Image
              src="/other/portfolio-hero.jpg"
              alt={t.portfolio.featuredProject}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8">
              <p className="mb-2 text-xs font-normal tracking-[0.2em] text-gray-400">
                {t.portfolio.website}
              </p>
              <h2 className="text-xl font-black sm:text-2xl">{t.portfolio.featuredProject}</h2>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
          }}
          aria-hidden
        />
      </section>

      <section
        id="portfolio"
        className="relative overflow-hidden bg-white"
        aria-labelledby="portfolio-intro-heading"
        ref={portfolioRef}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className={`relative pt-14 md:pt-20 lg:pt-24 ${SITE_PX}`}>
          <div
            className={`scroll-animate-up grid items-end gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)] lg:gap-16 ${isIntroVisible ? 'animate' : ''}`}
            ref={introRef}
          >
            <div className="max-w-3xl">
              <h2
                id="portfolio-intro-heading"
                className="text-3xl font-black leading-[1.08] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[3.35rem]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="block">{t.portfolio.heroIntroLine1}</span>
                <span className="mt-1.5 block text-brand sm:mt-2">{t.portfolio.heroIntroLine2}</span>
              </h2>
              <p
                className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg md:mt-7 md:text-xl md:leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {t.portfolio.heroIntroDescription}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-zinc-200 pt-6 sm:gap-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  {t.portfolio.startDate.label}
                </dt>
                <dd
                  className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {t.portfolio.startDate.value}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  {t.portfolio.duration.label}
                </dt>
                <dd
                  className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {t.portfolio.duration.value}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-zinc-100 pt-8 sm:mt-12 sm:gap-3 sm:pt-10 md:mt-14">
            {(
              [
                ['all', t.portfolio.filterAll],
                ['websites', t.portfolio.filterWebsites],
                ['chatbots', t.portfolio.filterChatbots],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedCategory(key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-3 sm:text-base ${
                  selectedCategory === key
                    ? 'bg-brand text-neutral-900 shadow-lg shadow-brand/25'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-brand-soft hover:text-brand-dark'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className={`grid grid-cols-2 gap-3 pb-16 pt-8 sm:gap-5 sm:pb-20 sm:pt-10 md:gap-6 md:pb-24 lg:grid-cols-3 lg:gap-7 scroll-animate-up ${isPortfolioVisible ? 'animate' : ''}`}
          >
            {filtered.map((card) => (
              <PortfolioCaseCard key={card.id} card={card} lang={validLang} />
            ))}
          </div>
        </div>
      </section>

      {previewCaseId && previewData && (
        <CasePreviewModal
          caseId={previewCaseId}
          caseData={previewData}
          lang={validLang}
          onClose={closeLightCase}
          onOrderClick={onOrderClick}
        />
      )}
    </div>
  );
}
