import Link from 'next/link';
import OrderCtaPill from '@/components/OrderCtaPill';
import type { Language } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import { RADIUS_CARD, RADIUS_SHELL } from '@/lib/siteUi';

type PrincipleCardCopy = {
  title: string;
  body: string;
};

type PrinciplesCopy = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  cards: PrincipleCardCopy[];
};

const KEY_VARIANTS = ['pink', 'dark', 'light'] as const;

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

function PrincipleKey({
  number,
  variant,
}: {
  number: number;
  variant: (typeof KEY_VARIANTS)[number];
}) {
  const styles = {
    pink: 'bg-brand-light text-neutral-900 shadow-[0_5px_0_var(--brand),0_8px_20px_rgba(244,114,182,0.35)]',
    dark: 'bg-neutral-900 text-white shadow-[0_5px_0_#1a1a1a,0_8px_20px_rgba(0,0,0,0.2)]',
    light:
      'bg-white text-neutral-900 border border-neutral-200 shadow-[0_5px_0_#d4d4d4,0_8px_16px_rgba(0,0,0,0.08)]',
  };

  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center ${RADIUS_CARD} text-xl font-bold sm:h-14 sm:w-14 sm:text-2xl ${styles[variant]}`}
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
  className = '',
}: {
  number: number;
  variant: (typeof KEY_VARIANTS)[number];
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col ${RADIUS_SHELL} border border-neutral-200/80 bg-neutral-50 p-6 sm:p-7 md:p-8 lg:p-10 xl:p-11 ${className}`}
    >
      <div className="mb-5 sm:mb-6">
        <PrincipleKey number={number} variant={variant} />
      </div>

      <h3
        className="text-[clamp(1.5rem,3.2vw,2.15rem)] font-black uppercase leading-[1.05] tracking-[0.02em] text-neutral-900"
        style={display}
      >
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500 sm:text-base md:mt-4 md:text-[1.05rem]">
        {body}
      </p>
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
  return (
    <section
      id="about"
      className={`relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 ${SITE_PX}`}
      aria-labelledby="home-principles-heading"
    >
      <div
        className={`grid gap-12 lg:grid-cols-[minmax(0,34%)_minmax(0,66%)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,32%)_minmax(0,68%)] xl:gap-14 ${SITE_INNER_WIDE}`}
      >
        <div className="lg:sticky lg:top-28 lg:max-w-md lg:self-start xl:max-w-lg">
          <p className="mb-4 text-sm font-normal lowercase text-neutral-400 sm:text-base" style={sans}>
            {principles.eyebrow}
          </p>
          <h2
            id="home-principles-heading"
            className="text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
            style={display}
          >
            <span className="block">{principles.titleLine1}</span>
            <span className="mt-1 block text-neutral-900">{principles.titleLine2}</span>
          </h2>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <OrderCtaPill
              size="sm"
              variant="dark"
              href={`/${lang}/services`}
              label={allServicesLabel}
              className="w-full sm:w-auto"
            />
            <OrderCtaPill
              size="sm"
              variant="solid"
              href={`/${lang}/pricing`}
              label={pricingLabel}
              elevated
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-8">
          {principles.cards.map((card, index) => (
            <PrincipleCard
              key={card.title}
              number={index + 1}
              variant={KEY_VARIANTS[index]}
              title={card.title}
              body={card.body}
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
