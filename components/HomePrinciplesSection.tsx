'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Language } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';

type PrincipleCardCopy = {
  title: string;
  body: string;
  serviceId: string;
  linkLabel: string;
};

type PrinciplesCopy = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  cards: PrincipleCardCopy[];
};

const KEY_VARIANTS = ['red', 'dark', 'light'] as const;

function PrincipleKey({
  number,
  variant,
}: {
  number: number;
  variant: (typeof KEY_VARIANTS)[number];
}) {
  const styles = {
    red: 'bg-[#F05A00] text-white shadow-[0_5px_0_#c44700,0_8px_20px_rgba(240,90,0,0.35)]',
    dark: 'bg-neutral-900 text-white shadow-[0_5px_0_#1a1a1a,0_8px_20px_rgba(0,0,0,0.2)]',
    light:
      'bg-white text-neutral-900 border border-neutral-200 shadow-[0_5px_0_#d4d4d4,0_8px_16px_rgba(0,0,0,0.08)]',
  };

  return (
    <span
      className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold sm:h-16 sm:w-16 sm:text-3xl ${styles[variant]}`}
      aria-hidden
    >
      {number}
    </span>
  );
}

function PrincipleCard({
  number,
  variant,
  title,
  body,
  href,
  linkLabel,
  className = '',
}: {
  number: number;
  variant: (typeof KEY_VARIANTS)[number];
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  className?: string;
}) {
  const montserrat = { fontFamily: 'var(--font-montserrat)' };

  return (
    <article
      className={`group/card flex h-full flex-col rounded-[1.75rem] bg-neutral-100 p-6 transition-shadow hover:shadow-md sm:rounded-[2rem] sm:p-7 md:p-8 lg:p-10 xl:p-11 ${className}`}
    >
      <PrincipleKey number={number} variant={variant} />
      <h3
        className="text-lg font-bold leading-snug text-neutral-900 sm:text-xl md:text-[1.35rem] md:leading-snug"
        style={montserrat}
      >
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500 sm:text-base md:mt-4 md:text-[1.05rem]">
        {body}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-[#F05A00] sm:mt-6 sm:text-base"
        style={montserrat}
      >
        {linkLabel}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover/card:scale-105">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </span>
      </Link>
    </article>
  );
}

interface HomePrinciplesSectionProps {
  principles: PrinciplesCopy;
  lang: Language;
  allServicesLabel: string;
  pricingLabel: string;
}

export default function HomePrinciplesSection({
  principles,
  lang,
  allServicesLabel,
  pricingLabel,
}: HomePrinciplesSectionProps) {
  const montserrat = { fontFamily: 'var(--font-montserrat)' };

  return (
    <section
      id="about"
      className={`relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 ${SITE_PX}`}
      aria-labelledby="home-principles-heading"
    >
      <div className={`grid gap-12 lg:grid-cols-[minmax(0,34%)_minmax(0,66%)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,32%)_minmax(0,68%)] xl:gap-14 ${SITE_INNER_WIDE}`}>
        <div className="lg:sticky lg:top-28 lg:max-w-md lg:self-start xl:max-w-lg">
          <p className="mb-4 text-sm font-normal lowercase text-neutral-400 sm:text-base" style={montserrat}>
            {principles.eyebrow}
          </p>
          <h2
            id="home-principles-heading"
            className="text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
            style={montserrat}
          >
            <span className="block">{principles.titleLine1}</span>
            <span className="mt-1 block text-[#F05A00]">{principles.titleLine2}</span>
          </h2>
          <Link
            href={`/${lang}/services`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-[#F05A00] hover:underline sm:text-base"
            style={montserrat}
          >
            {allServicesLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={`/${lang}/pricing`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-[#F05A00] hover:underline sm:text-base"
            style={montserrat}
          >
            {pricingLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-8">
          {principles.cards.map((card, index) => (
            <PrincipleCard
              key={card.serviceId}
              number={index + 1}
              variant={KEY_VARIANTS[index]}
              title={card.title}
              body={card.body}
              href={`/${lang}/services/${card.serviceId}`}
              linkLabel={card.linkLabel}
              className={
                index === 0
                  ? 'md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-2'
                  : index === 1
                    ? 'md:col-start-1 md:row-start-2 lg:col-start-1'
                    : 'md:col-start-2 md:row-start-2 lg:col-start-2'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
