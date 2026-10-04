'use client';

import React, { Suspense, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { translations, Language } from './translations';
import { useScrollAnimation } from './useScrollAnimation';
import OrderCtaPill from '@/components/OrderCtaPill';
import SiteCtaBand from '@/components/SiteCtaBand';
import CasePreviewModal from '@/components/CasePreviewModal';
import PortfolioHomeShowcaseCard from '@/components/PortfolioHomeShowcaseCard';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import { getPortfolioCards } from '@/lib/portfolioCards';
import { resolveShowcaseCategoryLabel } from '@/lib/portfolioShowcaseLabels';
import {
  getCasesData,
  isFlagshipCase,
  type PortfolioCaseData,
} from '@/lib/portfolioCases';

type PortfolioProps = {
  onOrderClick?: () => void;
};

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
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();
  const [gridRef, isGridVisible] = useScrollAnimation();

  const display = { fontFamily: 'var(--font-display)' };
  const sans = { fontFamily: 'var(--font-sans)' };

  const categoryCopy = {
    filterWebsites: t.portfolio.filterWebsites,
    filterChatbots: t.portfolio.filterChatbots,
  };

  const scrollToCases = () => {
    document.getElementById('portfolio-cases')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      {/* Hero — чорна сітка з фото та підписом (як до редизайну) */}
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
              onClick={scrollToCases}
              className="w-full max-w-md"
            />
          </div>

          <div
            className={`relative aspect-[1500/970] w-full overflow-hidden rounded-lg scroll-animate-right ${isImageVisible ? 'animate' : ''}`}
            ref={imageRef}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" aria-hidden />
            <Image
              src="/other/portfolio-hero.jpg"
              alt={t.portfolio.featuredProject}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={85}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8">
              <p className="mb-2 text-xs font-normal tracking-[0.2em] text-gray-400">{t.portfolio.website}</p>
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

      {/* Кейси */}
      <section id="portfolio" className={`bg-white py-14 sm:py-16 md:py-20 lg:py-24 ${SITE_PX}`} aria-labelledby="portfolio-grid-heading">
        <div className={`${SITE_INNER_WIDE} min-w-0`}>
          <div className="mb-10 flex flex-col gap-6 border-b border-neutral-100 pb-8 sm:mb-12 sm:pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-2xl">
              <h2
                id="portfolio-grid-heading"
                className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black uppercase leading-[1.08] tracking-tight text-neutral-900"
                style={display}
              >
                {t.services.toPortfolio}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base" style={sans}>
                {t.portfolio.startDate.value} · {t.portfolio.duration.value}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5" role="tablist" aria-label={t.portfolio.title}>
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
                  role="tab"
                  aria-selected={selectedCategory === key}
                  onClick={() => setSelectedCategory(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:py-2.5 ${
                    selectedCategory === key
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-base text-neutral-600" style={sans}>
              {t.portfolio.emptyText}
            </p>
          ) : (
            <div
              id="portfolio-cases"
              ref={gridRef}
              className={`grid scroll-mt-24 grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 scroll-animate-up ${isGridVisible ? 'animate' : ''}`}
            >
              {filtered.map((card) => (
                <PortfolioHomeShowcaseCard
                  key={card.id}
                  card={card}
                  lang={validLang}
                  categoryLabel={resolveShowcaseCategoryLabel(card, categoryCopy)}
                  compactTitle
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteCtaBand
        title={t.about.homeCta.title}
        text={t.about.homeCta.text}
        contactLabel={t.about.homeCta.contactLabel}
        pricingLabel={t.about.homeCta.pricingLabel}
        portfolioLabel={t.about.homeCta.portfolioLabel}
        pricingHref={`/${validLang}/pricing`}
        portfolioHref={`/${validLang}/portfolio`}
        onContactClick={onOrderClick}
      />

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
