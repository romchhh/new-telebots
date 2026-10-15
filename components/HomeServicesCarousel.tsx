'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Language } from '@/components/translations';
import MobileHorizontalScrollHint, {
  useHorizontalScrollState,
} from '@/components/MobileHorizontalScrollHint';
import { getHomeServiceCardImage } from '@/lib/homeServicesCardImages';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import {
  HORIZONTAL_SCROLL_RAIL,
  HORIZONTAL_SCROLL_WRAP,
  RADIUS_PILL,
  RADIUS_SHELL,
  SITE_SECTION_Y,
} from '@/lib/siteUi';

export type HomeServiceCard = {
  title: string;
  body: string;
  href: string;
};

export type HomeServicesCopy = {
  title: string;
  lead: string;
  prevLabel: string;
  nextLabel: string;
  linkLabel: string;
  cards: HomeServiceCard[];
};

type HomeServicesCarouselProps = {
  copy: HomeServicesCopy;
  lang: Language;
};

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

export default function HomeServicesCarousel({ copy, lang }: HomeServicesCarouselProps) {
  const linkLabel = copy.linkLabel;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollState = useHorizontalScrollState(scrollerRef, [copy.cards.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-service-card]');
    const step = card ? card.offsetWidth + 20 : Math.min(el.clientWidth * 0.85, 360);
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section
      className={`relative bg-white ${SITE_SECTION_Y} ${SITE_PX}`}
      aria-labelledby="home-services-heading"
    >
      <div className={SITE_INNER_WIDE}>
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2
            id="home-services-heading"
            className="max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-tight text-neutral-900"
            style={display}
          >
            {copy.title}
          </h2>
          <div className="flex max-w-lg flex-1 flex-col gap-5 lg:max-w-md lg:items-end">
            <p
              className="text-sm leading-relaxed text-neutral-600 sm:text-base md:text-lg lg:text-right"
              style={sans}
            >
              {copy.lead}
            </p>
            <div className="hidden gap-3 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label={copy.prevLabel}
                className={`${RADIUS_PILL} inline-flex h-14 w-14 items-center justify-center border border-neutral-200 bg-white text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50`}
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label={copy.nextLabel}
                className={`${RADIUS_PILL} inline-flex h-14 w-14 items-center justify-center border border-neutral-200 bg-white text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50`}
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={HORIZONTAL_SCROLL_WRAP}>
        <div
          ref={scrollerRef}
          className={`${HORIZONTAL_SCROLL_RAIL} items-stretch gap-5 pb-2 sm:gap-6 ${SITE_PX}`}
        >
          {copy.cards.map((card, index) => {
            const num = String(index + 1).padStart(2, '0');
            const imageSrc = getHomeServiceCardImage(card.href);
            return (
              <article
                key={card.title}
                data-service-card
                className={`flex w-[min(86vw,21rem)] shrink-0 snap-start flex-col self-stretch ${RADIUS_SHELL} border border-[#e4d2d8] bg-[#f0e6ea] p-7 transition-colors hover:border-[#d9bcc6] hover:bg-[#eadde3] sm:w-[23rem] sm:p-8 md:w-[24.5rem] md:p-9`}
              >
                <h3
                  className="text-[clamp(1.85rem,5vw,2.5rem)] font-bold leading-[1.12] text-neutral-900 sm:text-[2.05rem] md:text-[2.25rem] lg:text-[2.5rem]"
                  style={sans}
                >
                  {card.title}
                </h3>
                <p className="mt-5 text-base font-semibold tabular-nums text-neutral-500 sm:mt-6 sm:text-lg" style={sans}>
                  {num}/
                </p>
                <p
                  className="mt-3 text-base leading-[1.6] text-neutral-600 sm:text-lg sm:leading-[1.55]"
                  style={sans}
                >
                  {card.body}
                </p>
                <div className="mt-auto pt-5 sm:pt-6">
                  <Link
                    href={`/${lang}/${card.href}`}
                    aria-label={`${card.title} — ${linkLabel}`}
                    className={`group flex h-16 w-full min-w-0 items-center gap-3 ${RADIUS_PILL} border border-neutral-200 bg-white py-1.5 pl-1.5 pr-1.5 shadow-sm transition hover:border-neutral-300 hover:bg-white sm:h-[4.5rem] sm:gap-3.5 sm:pl-2 sm:pr-2`}
                  >
                    <span
                      className={`relative h-12 w-12 shrink-0 overflow-hidden sm:h-14 sm:w-14 ${RADIUS_PILL}`}
                    >
                      <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="56px"
                        aria-hidden
                      />
                    </span>
                    <span
                      className="min-w-0 flex-1 truncate text-left text-base font-bold uppercase tracking-[0.06em] text-neutral-900 sm:text-lg"
                      style={sans}
                    >
                      {linkLabel}
                    </span>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white transition-transform group-hover:scale-105 sm:h-14 sm:w-14`}
                    >
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} aria-hidden />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <MobileHorizontalScrollHint
          lang={lang}
          state={scrollState}
          onPrev={() => scrollByCard(-1)}
          onNext={() => scrollByCard(1)}
          prevLabel={copy.prevLabel}
          nextLabel={copy.nextLabel}
        />
      </div>
    </section>
  );
}
