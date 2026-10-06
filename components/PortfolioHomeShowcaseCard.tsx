'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getCaseHref } from '@/lib/portfolioCases';
import type { Language } from '@/components/translations';
import { RADIUS_CARD } from '@/lib/siteUi';

export type PortfolioHomeShowcaseCardData = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string;
};

type PortfolioHomeShowcaseCardProps = {
  card: PortfolioHomeShowcaseCardData;
  lang: Language;
  categoryLabel: string;
  wide?: boolean;
  compactTitle?: boolean;
  className?: string;
  sizes?: string;
  /** Рекламний лендинг: картка лишається на сторінці і відкриває заявку. */
  onClick?: () => void;
};

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

export default function PortfolioHomeShowcaseCard({
  card,
  lang,
  categoryLabel,
  wide = false,
  compactTitle = false,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 33vw',
  onClick,
}: PortfolioHomeShowcaseCardProps) {
  const shell = `group flex min-w-0 flex-col text-left ${className}`;
  const body = (
    <>
      <div
        className={`relative w-full overflow-hidden ${RADIUS_CARD} bg-neutral-200 ${
          wide
            ? 'aspect-[4/3] lg:aspect-[5/4] xl:aspect-[3/2]'
            : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={sizes}
          quality={85}
        />
      </div>
      <p
        className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:mt-6"
        style={sans}
      >
        {categoryLabel}
      </p>
      <h3
        className={`mt-2 flex items-start gap-2 font-bold leading-snug text-neutral-900 sm:mt-2.5 ${
          wide
            ? 'text-xl sm:text-2xl md:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.75rem]'
            : 'text-lg sm:text-xl md:text-[1.35rem] lg:text-[1.45rem]'
        }`}
        style={display}
      >
        <span
          className={`min-w-0 flex-1 ${compactTitle ? 'line-clamp-4' : 'line-clamp-3 lg:line-clamp-4'}`}
        >
          {card.title}: {card.subtitle}
        </span>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-neutral-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
          strokeWidth={2}
          aria-hidden
        />
      </h3>
      <p className="mt-3 text-sm leading-[1.65] text-neutral-600 sm:mt-4 sm:text-[15px]" style={sans}>
        {card.highlights}
      </p>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} data-portfolio-card className={shell}>
        {body}
      </button>
    );
  }

  return (
    <Link href={getCaseHref(lang, card.id)} data-portfolio-card className={shell}>
      {body}
    </Link>
  );
}
