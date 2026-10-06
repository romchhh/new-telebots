'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Language } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import PortfolioHomeShowcaseCard from '@/components/PortfolioHomeShowcaseCard';
import {
  resolveShowcaseCategoryLabel,
  type PortfolioShowcaseCard,
  type PortfolioShowcaseCategoryCopy,
} from '@/lib/portfolioShowcaseLabels';
import {
  BTN_ARROW_CIRCLE_OUTLINE,
  BTN_NAV_CIRCLE,
  HORIZONTAL_SCROLL_RAIL,
  HORIZONTAL_SCROLL_WRAP,
  ICON_ARROW_IN_CIRCLE,
  ICON_ARROW_NAV,
} from '@/lib/siteUi';

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

export type PortfolioShowcaseScrollerProps = {
  lang: Language;
  cards: PortfolioShowcaseCard[];
  heading: ReactNode;
  headingId: string;
  viewAllHref: string;
  viewAllLabel: string;
  scrollPrevLabel: string;
  scrollNextLabel: string;
  categoryCopy?: PortfolioShowcaseCategoryCopy;
  sectionId?: string;
  className?: string;
  lead?: ReactNode;
  /** Рекламний лендинг не веде в загальне портфоліо. */
  showViewAll?: boolean;
  /** Замість посилання «усі кейси» — своя дія, наприклад кнопка заявки. */
  headerAction?: ReactNode;
  /** Якщо задано, картка не веде на кейс, а лишає людину на сторінці. */
  onCardClick?: (card: PortfolioShowcaseCard) => void;
};

export default function PortfolioShowcaseScroller({
  lang,
  cards,
  heading,
  headingId,
  viewAllHref,
  viewAllLabel,
  scrollPrevLabel,
  scrollNextLabel,
  categoryCopy,
  sectionId,
  className = '',
  lead,
  showViewAll = true,
  headerAction,
  onCardClick,
}: PortfolioShowcaseScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-portfolio-card]');
    const gap = window.matchMedia('(min-width: 1024px)').matches ? 24 : 20;
    const step = card ? card.offsetWidth + gap : Math.min(el.clientWidth * 0.85, 360);
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  if (cards.length === 0) return null;

  return (
    <section
      id={sectionId}
      className={`bg-white py-16 sm:py-20 md:py-24 lg:py-28 ${SITE_PX} ${className}`}
      aria-labelledby={headingId}
    >
      <div className={`${SITE_INNER_WIDE} min-w-0`}>
        <div className="mb-10 flex min-w-0 flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8 xl:gap-10">
          <div className="min-w-0 flex-1 lg:max-w-[min(100%,36rem)]">
            <div id={headingId}>{heading}</div>
            {lead ? <div className="mt-4 sm:mt-5">{lead}</div> : null}
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-3 self-start lg:shrink-0 lg:self-auto lg:gap-4">
            <div className="hidden gap-2.5 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label={scrollPrevLabel}
                className={BTN_NAV_CIRCLE}
              >
                <ArrowLeft className={ICON_ARROW_NAV} strokeWidth={2.25} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label={scrollNextLabel}
                className={BTN_NAV_CIRCLE}
              >
                <ArrowRight className={ICON_ARROW_NAV} strokeWidth={2.25} aria-hidden />
              </button>
            </div>
            {headerAction ?? (showViewAll ? (
              <Link href={viewAllHref} className="group inline-flex items-center gap-3" style={sans}>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900 sm:text-sm">
                  {viewAllLabel}
                </span>
                <span className={BTN_ARROW_CIRCLE_OUTLINE}>
                  <ArrowUpRight
                    className={`${ICON_ARROW_IN_CIRCLE} text-neutral-900`}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </span>
              </Link>
            ) : null)}
          </div>
        </div>
      </div>

      <div className={HORIZONTAL_SCROLL_WRAP}>
        <div
          ref={scrollerRef}
          className={`${HORIZONTAL_SCROLL_RAIL} gap-4 pb-1 sm:gap-5 lg:gap-6 ${SITE_PX}`}
        >
          {cards.map((card, index) => {
            const wideOnLg = index % 3 === 1;
            const mobileCardWidth =
              'w-[min(86vw,21rem)] shrink-0 snap-start sm:w-[23rem] md:w-[24.5rem]';
            return (
              <PortfolioHomeShowcaseCard
                key={card.id}
                card={card}
                lang={lang}
                categoryLabel={resolveShowcaseCategoryLabel(card, categoryCopy)}
                wide={wideOnLg}
                compactTitle
                onClick={onCardClick ? () => onCardClick(card) : undefined}
                className={
                  wideOnLg
                    ? `${mobileCardWidth} lg:w-[min(36rem,calc((100vw-8rem)*0.52))] lg:snap-center xl:w-[min(40rem,calc((100vw-8rem)*0.5))]`
                    : `${mobileCardWidth} lg:w-[min(20rem,calc((100vw-8rem)*0.3))] xl:w-[min(21rem,calc((100vw-8rem)*0.28))]`
                }
                sizes={
                  wideOnLg
                    ? '(max-width: 1024px) 86vw, 40rem'
                    : '(max-width: 1024px) 86vw, 21rem'
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PortfolioShowcaseHeading({
  line1,
  line2,
  className = '',
}: {
  line1: string;
  line2?: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(1.65rem,4vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900 lg:max-w-[16ch] ${className}`}
      style={display}
    >
      <span className="block lg:inline">{line1}</span>
      {line2 ? (
        <>
          <span className="hidden lg:inline"> </span>
          <span className="block lg:inline">{line2}</span>
        </>
      ) : null}
    </h2>
  );
}
