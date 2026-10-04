'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getCaseHref } from '@/lib/portfolioCases';
import type { Language } from '@/components/translations';

export type PortfolioCaseCardData = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string;
};

type PortfolioCaseCardProps = {
  card: PortfolioCaseCardData;
  lang: Language;
  className?: string;
  sizes?: string;
  /** Світла картка на білому фоні (хаб /portfolio) */
  theme?: 'dark' | 'light';
  /** Ширша картка в асиметричній сітці (центральна колонка) */
  wide?: boolean;
};

/** Єдина картка кейсу — як на /portfolio */
export default function PortfolioCaseCard({
  card,
  lang,
  className = '',
  sizes = '(max-width: 1024px) 50vw, 33vw',
  theme = 'dark',
  wide = false,
}: PortfolioCaseCardProps) {
  const light = theme === 'light';
  return (
    <Link
      href={getCaseHref(lang, card.id)}
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-colors ${
        light
          ? 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-white'
          : 'border-black/10 bg-[#141414] hover:border-black/25'
      } ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-b-xl sm:rounded-b-2xl ${
          light ? 'bg-neutral-200' : 'bg-zinc-900'
        } ${wide ? 'aspect-[5/4] sm:aspect-[16/11]' : 'aspect-[16/11]'}`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={sizes}
          quality={85}
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5 md:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide sm:px-2.5 sm:py-1 sm:text-[11px] ${
                light
                  ? 'border-neutral-300 bg-white text-neutral-600'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-1.5 flex items-start justify-between gap-2 sm:mb-2 sm:gap-3">
          <h3
            className={`text-sm font-black uppercase leading-tight tracking-wide sm:text-xl md:text-2xl ${
              light ? 'text-neutral-900' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {card.title}
          </h3>
          <span
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors sm:mt-1 sm:h-8 sm:w-8 ${
              light
                ? 'border-neutral-300 text-neutral-900 group-hover:border-brand group-hover:text-brand'
                : 'border-white/20 text-white group-hover:border-brand group-hover:text-brand'
            }`}
          >
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
          </span>
        </div>
        <p
          className={`mb-2 text-xs leading-snug sm:mb-3 sm:text-sm md:text-base ${
            light ? 'text-neutral-600' : 'text-white/55'
          }`}
        >
          {card.subtitle}
        </p>
        <p
          className={`mt-auto hidden text-sm leading-relaxed sm:block ${
            light ? 'text-neutral-500' : 'text-white/40'
          }`}
        >
          {card.highlights}
        </p>
      </div>
    </Link>
  );
}
