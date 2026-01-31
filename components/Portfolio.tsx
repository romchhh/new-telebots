'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cases } from './cases';
import { translations, Language } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const BLUR_DATA =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADY=';

export default function Portfolio() {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = cases[validLang] || cases.uk;

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'chatbots' | 'websites'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [portfolioRef, isPortfolioVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const imageMap: Record<string, { image: string; category: string }> = {
    'tradeground-bot': { image: '/portfolio-tradeground-bot.png', category: 'chatbots' },
    '13vplus': { image: '/portfolio-13vplus.jpg', category: 'websites' },
    'dr-tolstikova-bot': { image: '/portfolio-dr-tolstikova-bot.jpg', category: 'chatbots' },
    'nieznany-piekarz': { image: '/portfolio-nieznany-piekarz.png', category: 'websites' },
    'nutritionist-bot': { image: '/portfolio-nutritionist-bot.jpg', category: 'chatbots' },
    'cats-fresh': { image: '/portfolio-cats-fresh.jpg', category: 'websites' },
    'applum-bot': { image: '/portfolio-applum-bot.jpg', category: 'chatbots' },
    'easyplay': { image: '/portfolio-easyplay.jpg', category: 'websites' },
    'webinar-bot': { image: '/portfolio-webinar-bot.png', category: 'chatbots' },
    'normalnoauto': { image: '/portfolio-normalnoauto.png', category: 'chatbots' },
    'kvartyrant': { image: '/portfolio-kvartyrant.png', category: 'chatbots' },
    'cosmy': { image: '/portfolio-cosmy.png', category: 'chatbots' },
    'newlineschool': { image: '/portfolio-newlineschool.jpg', category: 'websites' },
    'flixmarket': { image: '/portfolio-flixmarket.jpg', category: 'chatbots' },
    'alexandraaleksiuk': { image: '/portfolio-alexandraaleksiuk.jpg', category: 'websites' },
    'offer-dpuchkov': { image: '/portfolio-offer-dpuchkov.jpg', category: 'websites' },
    'vsk-technology': { image: '/portfolio-vsk-technology.png', category: 'websites' },
    'v12-auto': { image: '/portfolio-v12-auto.png', category: 'websites' },
    'tripvibe': { image: '/portfolio-tripvibe.png', category: 'websites' },
    'tron-energy-bot': { image: '/portfolio-tron-energy-bot.jpg', category: 'chatbots' },
    'chars-kyiv': { image: '/portfolio-chars-kyiv.png', category: 'websites' },
    'style-chat-vakhula': { image: '/portfolio-style-chat-vakhula.jpg', category: 'chatbots' },
    'landscaper-academy': { image: '/portfolio-landscaper-academy.png', category: 'websites' },
  };

  const works = Object.keys(casesData).map((caseId) => {
    const caseData = (casesData as Record<string, { mainImage?: string; portfolioCategory?: string; title?: string; subtitle?: string }>)[caseId];
    const map = imageMap[caseId] || {
      image: caseData?.mainImage || '/portfolio-dr-tolstikova-bot.jpg',
      category: (caseData?.portfolioCategory as string) || 'websites',
    };
    return {
      title: caseData?.title ?? 'Project',
      alt: caseData?.subtitle ?? '',
      image: map.image,
      caseId,
      category: map.category as 'chatbots' | 'websites',
    };
  });

  const filtered = selectedCategory === 'all'
    ? works
    : works.filter((w) => w.category === selectedCategory);

  // Різні розміри, пропорційно: базова клітинка квадрат → 1×1, 2×2 квадрати; 2×1, 1×2 прямокутники
  const sizePatterns = [
    { colSpan: 4, rowSpan: 1 }, // повна ширина
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 }, // високий
    { colSpan: 2, rowSpan: 2 }, // великий квадрат
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

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`p-8 sm:p-12 lg:p-16 xl:p-24 flex flex-col justify-center scroll-animate-left ${isContentVisible ? 'animate' : ''}`}
            ref={contentRef}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 sm:mb-6">{t.portfolio.recent}</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
              {t.portfolio.title}
            </h2>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
            >
              <div className="flex items-center justify-center flex-wrap gap-1">
                <span className="text-sm font-semibold tracking-wider text-center leading-tight">
                  {t.portfolio.viewPortfolio}
                </span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </div>
            </button>
          </div>

          <div
            className={`relative w-full aspect-[1500/970] overflow-hidden rounded-lg scroll-animate-right ${isImageVisible ? 'animate' : ''}`}
            ref={imageRef}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <Image
              src="/portfolio-default.jpg"
              alt="Featured project"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8 z-10">
              <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-2">{t.portfolio.website}</p>
              <h3 className="text-xl sm:text-2xl font-black">Featured Project</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" ref={portfolioRef}>
        <div className="w-full max-w-none mx-0">
          {/* Category switcher */}
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

          {/* Сітка: висота рядка = ширина колонки → пропорційні картки, dense заповнює «діри» */}
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
              return (
                <div
                  key={work.caseId}
                  className="group relative overflow-hidden rounded-lg"
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`,
                  }}
                  onClick={(e) => {
                    if (!(e.target as HTMLElement).closest('a')) {
                      setLightboxImage({ src: work.image, alt: work.alt });
                      setLightboxOpen(true);
                    }
                  }}
                >
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
                  <Link
                    href={`/${validLang}/portfolio/${work.caseId}`}
                    className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 sm:p-4 md:p-5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight line-clamp-2 mb-1">
                      {work.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-2 sm:mb-3 leading-snug">
                      {work.alt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold">
                      {t.portfolio.viewDetails}
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 rounded-full p-2 hover:bg-white/10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              quality={95}
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
