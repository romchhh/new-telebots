'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Language } from '@/components/translations';
import { getHomeServiceCardImage } from '@/lib/homeServicesCardImages';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import {
  BTN_NAV_CIRCLE,
  CTA_ARROW_CIRCLE,
  CTA_ARROW_ICON,
  ICON_ARROW_NAV,
  RADIUS_PILL,
  RADIUS_SHELL,
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
  cards: HomeServiceCard[];
};

type HomeServicesCarouselProps = {
  copy: HomeServicesCopy;
  lang: Language;
  linkLabel: string;
};

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

export default function HomeServicesCarousel({ copy, lang, linkLabel }: HomeServicesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-service-card]');
    const step = card ? card.offsetWidth + 20 : Math.min(el.clientWidth * 0.85, 360);
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section
      className={`relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 ${SITE_PX}`}
      aria-labelledby="home-services-heading"
    >
      <div className={SITE_INNER_WIDE}>
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2
            id="home-services-heading"
            className="max-w-[16ch] text-[clamp(1.65rem,4vw,2.75rem)] font-black uppercase leading-[1.02] tracking-tight text-neutral-900"
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
            <div className="flex gap-2.5 self-start lg:self-end">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label={copy.prevLabel}
                className={BTN_NAV_CIRCLE}
              >
                <ArrowLeft className={ICON_ARROW_NAV} strokeWidth={2.25} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label={copy.nextLabel}
                className={BTN_NAV_CIRCLE}
              >
                <ArrowRight className={ICON_ARROW_NAV} strokeWidth={2.25} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-w-0 overflow-hidden">
        <div
          ref={scrollerRef}
          className={`flex w-full min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-6 ${SITE_PX}`}
          style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
        >
          {copy.cards.map((card, index) => {
            const num = String(index + 1).padStart(2, '0');
            const imageSrc = getHomeServiceCardImage(card.href);
            return (
              <article
                key={card.title}
                data-service-card
                className={`flex min-h-[22rem] w-[min(86vw,21rem)] shrink-0 snap-start flex-col ${RADIUS_SHELL} border border-[#e4d2d8] bg-[#f0e6ea] p-7 transition-colors hover:border-[#d9bcc6] hover:bg-[#eadde3] sm:min-h-[24rem] sm:w-[23rem] sm:p-8 md:w-[24.5rem] md:p-9`}
              >
                <h3
                  className="text-[clamp(1.5rem,4.2vw,2rem)] font-bold leading-[1.15] text-neutral-900 sm:text-[1.65rem] md:text-[1.85rem] lg:text-[2rem]"
                  style={sans}
                >
                  {card.title}
                </h3>
                <p className="mt-6 text-base font-semibold tabular-nums text-neutral-500 sm:mt-8 sm:text-lg" style={sans}>
                  {num}/
                </p>
                <p
                  className="mt-3 flex-1 text-base leading-[1.6] text-neutral-600 sm:text-lg sm:leading-[1.55]"
                  style={sans}
                >
                  {card.body}
                </p>
                <Link
                  href={`/${lang}/${card.href}`}
                  aria-label={`${card.title} — ${linkLabel}`}
                  className={`group mt-10 flex w-full min-w-0 items-center gap-2.5 ${RADIUS_PILL} border border-[#dcc4cc] bg-[#faf5f7] p-1.5 transition hover:border-[#c9a8b3] hover:bg-white sm:gap-3`}
                >
                  <span
                    className={`relative h-11 w-[3.25rem] shrink-0 overflow-hidden sm:h-12 sm:w-14 ${RADIUS_PILL}`}
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
                    className="min-w-0 flex-1 truncate text-left text-xs font-bold uppercase tracking-[0.08em] text-neutral-900 sm:text-sm"
                    style={sans}
                  >
                    {linkLabel}
                  </span>
                  <span
                    className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white transition-transform group-hover:scale-105 ${CTA_ARROW_CIRCLE.sm}`}
                  >
                    <ArrowUpRight className={CTA_ARROW_ICON.sm} strokeWidth={2.25} aria-hidden />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
