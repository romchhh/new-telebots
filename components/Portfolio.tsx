'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { translations, Language } from './translations';
import { useScrollAnimation } from './useScrollAnimation';
import OrderCtaPill from '@/components/OrderCtaPill';
import CasePreviewModal from '@/components/CasePreviewModal';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import {
  getCaseCategory,
  getCaseHref,
  getCasesData,
  getOrderedCaseIds,
  isFlagshipCase,
  type PortfolioCaseData,
} from '@/lib/portfolioCases';

const BLUR_DATA =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADY=';

type PortfolioProps = {
  onOrderClick?: () => void;
};

export default function Portfolio({ onOrderClick }: PortfolioProps) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = getCasesData(validLang);

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

  useEffect(() => {
    const caseFromQuery = searchParams.get('case');
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
  }, [searchParams, casesData, router, validLang]);

  const works = getOrderedCaseIds(validLang).map((caseId) => {
    const caseData = casesData[caseId];
    return {
      title: caseData?.title ?? 'Project',
      alt: caseData?.subtitle ?? '',
      image: caseData?.mainImage || '/portfolio/portfolio-dr-tolstikova-bot.jpg',
      caseId,
      category: getCaseCategory(caseId, caseData),
      flagship: isFlagshipCase(caseId),
    };
  });

  const filtered = selectedCategory === 'all'
    ? works
    : works.filter((w) => w.category === selectedCategory);

  const sizePatterns = [
    { colSpan: 4, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 4, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
  ];

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [containerWidth, setContainerWidth] = useState(0);
  const gridContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = gridContainerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setContainerWidth(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const COLS = windowWidth <= 768 ? 2 : windowWidth <= 1024 ? 3 : 4;
  const gapPx = windowWidth >= 640 ? 16 : 12;
  const cellSize = containerWidth > 0
    ? Math.max(100, (containerWidth - (COLS - 1) * gapPx) / COLS)
    : 200;
  const rowHeight = cellSize;

  const getSpan = (workIndex: number, kind: 'col' | 'row') => {
    const p = sizePatterns[workIndex % sizePatterns.length];
    let c = kind === 'col' ? p.colSpan : p.rowSpan;
    if (kind === 'col') c = Math.min(c, COLS);
    else if (COLS <= 2) c = Math.min(c, 2);
    return Math.max(1, c);
  };

  const previewData: PortfolioCaseData | null =
    previewCaseId && casesData[previewCaseId] ? casesData[previewCaseId] : null;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-[min(65vw,520px)] w-[min(65vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl" aria-hidden />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div
            className={`p-8 sm:p-12 lg:p-16 xl:p-24 flex flex-col justify-center scroll-animate-left ${isContentVisible ? 'animate' : ''}`}
            ref={contentRef}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
              {t.portfolio.title}
            </h1>
            <OrderCtaPill
              size="md"
              label={t.portfolio.viewPortfolio}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full max-w-md"
            />
          </div>

          <div
            className={`relative w-full aspect-[1500/970] overflow-hidden rounded-lg scroll-animate-right ${isImageVisible ? 'animate' : ''}`}
            ref={imageRef}
          >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <Image
              src="/portfolio/portfolio-default.jpg"
              alt="Featured project"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8 z-10">
              <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-2">{t.portfolio.website}</p>
              <h3 className="text-xl sm:text-2xl font-black">{t.portfolio.featuredProject}</h3>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-zinc-200/90 bg-zinc-50"
        aria-labelledby="portfolio-intro-heading"
      >
        <div className={`py-14 md:py-20 lg:py-24 ${SITE_INNER_WIDE}`}>
          <div
            className={`mx-auto max-w-3xl text-center scroll-animate-up ${isIntroVisible ? 'animate' : ''}`}
            ref={introRef}
          >
            <h2
              id="portfolio-intro-heading"
              className="mb-6 text-3xl font-black leading-[1.12] tracking-tight text-black sm:text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <span className="block">{t.portfolio.heroIntroLine1}</span>
              <span className="mt-2 block text-black/75">{t.portfolio.heroIntroLine2}</span>
            </h2>
            <p
              className="text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {t.portfolio.heroIntroDescription}
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className={`py-16 sm:py-20 bg-white ${SITE_PX}`} ref={portfolioRef}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {t.portfolio.filterAll}
            </button>
            <button
              onClick={() => setSelectedCategory('chatbots')}
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                selectedCategory === 'chatbots'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {t.portfolio.filterChatbots}
            </button>
            <button
              onClick={() => setSelectedCategory('websites')}
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                selectedCategory === 'websites'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {t.portfolio.filterWebsites}
            </button>
          </div>

          <div ref={gridContainerRef} className="w-full">
            <div
              className={`grid transition-all duration-500 ${
                isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridAutoRows: `${rowHeight}px`,
                gridAutoFlow: 'dense',
                gap: gapPx,
              }}
            >
            {filtered.map((work, index) => {
              const colSpan = getSpan(index, 'col');
              const rowSpan = getSpan(index, 'row');
              const cardInner = (
                <>
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={work.image}
                      alt={work.alt || work.title}
                      fill
                      className="object-cover object-center min-w-full min-h-full transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading={index < 8 ? 'eager' : 'lazy'}
                      quality={85}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 md:p-5">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight line-clamp-2 mb-1">
                      {work.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 line-clamp-2 mb-2 sm:mb-3 leading-snug">
                      {work.alt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold">
                      {t.portfolio.viewDetails}
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </>
              );

              return (
                <div
                  key={work.caseId}
                  className="group relative overflow-hidden rounded-lg"
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`,
                  }}
                >
                  {work.flagship ? (
                    <Link
                      href={getCaseHref(validLang, work.caseId)}
                      className="absolute inset-0 block"
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="absolute inset-0 block w-full text-left"
                      onClick={() => openLightCase(work.caseId)}
                      aria-label={work.title}
                    >
                      {cardInner}
                    </button>
                  )}
                </div>
              );
            })}
            </div>
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
