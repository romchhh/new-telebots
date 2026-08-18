'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useScrollAnimation } from './useScrollAnimation';
import { Language } from './translations';
import { SITE_PX } from '@/lib/siteLayout';
import { getPortfolioCards } from '@/lib/portfolioCards';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';

interface PortfolioSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function PortfolioSection({ t }: PortfolioSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [contentRef, isContentVisible] = useScrollAnimation();
  const cards = [...getPortfolioCards(validLang)].sort((a, b) => {
    if (a.category === b.category) return 0;
    return a.category === 'websites' ? -1 : 1;
  });

  if (cards.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="bg-black text-white">
      <div className="grid min-h-0 min-w-0 lg:grid-cols-2">
        <div
          className={`flex flex-col justify-center py-8 sm:py-12 lg:py-16 xl:py-24 scroll-animate-left ${SITE_PX} ${isContentVisible ? 'animate' : ''}`}
          ref={contentRef}
        >
          <h2 className="mb-8 text-4xl font-black leading-tight sm:mb-12 sm:text-5xl lg:text-6xl">
            {t.portfolio.title}
          </h2>
          <Link
            href={`/${validLang}/portfolio`}
            className="group flex h-40 w-40 items-center justify-center rounded-full border-2 border-white px-3 text-center transition-all duration-300 hover:bg-white hover:text-black sm:h-48 sm:w-48"
          >
            <span className="text-center text-sm font-semibold leading-tight tracking-wider">
              {t.portfolio.viewPortfolio}
            </span>
          </Link>
        </div>

        <FeaturedImageBlock t={t} />
      </div>

      <div className="w-full min-w-0 overflow-hidden">
        <div
          className={`flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth py-8 sm:gap-5 sm:py-10 [scrollbar-color:rgba(255,255,255,0.3)_transparent] [scrollbar-width:thin] ${SITE_PX}`}
          style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
        >
          {cards.map((card) => (
            <PortfolioCaseCard
              key={card.id}
              card={card}
              lang={validLang}
              className="w-[min(82vw,18rem)] shrink-0 snap-start sm:w-[22rem]"
              sizes="352px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedImageBlock({ t }: { t: typeof import('./translations').translations.uk }) {
  return (
    <div className={`relative flex w-full min-w-0 flex-col justify-center py-6 sm:py-8 lg:py-10 ${SITE_PX}`}>
      <div className="relative aspect-[1500/970] w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <Image
          src="/other/portfolio-hero.jpg"
          alt={t.portfolio.featuredProject}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
          quality={80}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6">
          <p className="mb-1 text-xs font-normal tracking-[0.2em] text-gray-400">{t.portfolio.website}</p>
          <h3 className="text-lg font-black sm:text-xl">{t.portfolio.featuredProject}</h3>
        </div>
      </div>
    </div>
  );
}
