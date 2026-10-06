import Link from 'next/link';
import { Sparkles, Asterisk } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Language } from '@/components/translations';
import { RADIUS_CARD } from '@/lib/siteUi';

export type AboutWhyUsCopy = {
  title: string;
  yearsValue: string;
  yearsLabel: string;
  projectsValue: string;
  projectsLabel: string;
  projectsBody: string;
  team: string;
  contactLead: string;
  contactCta: string;
  ai: string;
  solutions: string;
};

type AboutInfoCardsProps = {
  copy: AboutWhyUsCopy;
  lang: Language;
  contactHref?: string;
  onContactClick?: () => void;
  /** Замість переходу на інші сторінки сайту — та сама дія, що й контакт. */
  onExploreClick?: () => void;
};

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

const lightCard =
  `relative flex flex-col justify-between overflow-hidden ${RADIUS_CARD} border border-brand/15 bg-brand-soft p-5 sm:p-6 lg:p-7 xl:p-8`;
const darkCard =
  `relative flex flex-col justify-between overflow-hidden ${RADIUS_CARD} border border-brand/20 bg-neutral-950 p-5 sm:p-6 lg:p-7 xl:p-8`;

function StatNumber({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-right text-[clamp(2.5rem,9vw,3.75rem)] font-black leading-none tracking-tight text-neutral-900 lg:text-[4rem]"
      style={display}
    >
      {children}
    </p>
  );
}

function OverlapCircles({ className = '' }: { className?: string }) {
  return (
    <span className={`relative ml-auto block h-11 w-11 shrink-0 sm:h-12 sm:w-12 ${className}`} aria-hidden>
      <span className="absolute right-0 top-0 h-8 w-8 rounded-full bg-brand sm:h-9 sm:w-9" />
      <span className="absolute bottom-0 left-0 h-8 w-8 rounded-full bg-brand-light/90 sm:h-9 sm:w-9" />
    </span>
  );
}

function ShieldMark({ className = '' }: { className?: string }) {
  return (
    <span className={`relative ml-auto block h-11 w-11 shrink-0 sm:h-12 sm:w-12 ${className}`} aria-hidden>
      <span className="absolute right-0 top-0 h-9 w-7 rounded-b-[1rem] rounded-t-md bg-brand sm:h-10 sm:w-8" />
      <span className="absolute bottom-0 left-0 h-9 w-7 rounded-b-[1rem] rounded-t-md bg-brand-light/70 sm:h-10 sm:w-8" />
    </span>
  );
}

function ContactPill({
  href,
  onClick,
  label,
}: {
  href: string;
  onClick?: () => void;
  label: string;
}) {
  const className =
    'inline-flex max-w-full items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-base font-semibold leading-none text-neutral-900 transition-colors hover:bg-brand-light sm:px-5 sm:py-2.5 sm:text-lg';

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className} style={sans}>
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
        {label}
      </button>
    );
  }

  return (
    <Link href={href} className={className} style={sans}>
      <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}

export default function AboutInfoCards({
  copy,
  lang,
  contactHref,
  onContactClick,
  onExploreClick,
}: AboutInfoCardsProps) {
  const resolvedContactHref = contactHref ?? `/${lang}/contact`;

  const labelLight = 'text-base font-semibold leading-snug text-neutral-900 sm:text-lg md:text-xl';
  const bodyLight = 'text-base leading-[1.55] text-neutral-700 sm:text-lg sm:leading-[1.5]';
  const labelDark = 'text-base font-semibold leading-snug text-white sm:text-lg md:text-xl';

  return (
    <div className="bg-white">
      <h2
        id="why-telebots-heading"
        className="mb-5 text-[clamp(1.65rem,3.8vw,2.35rem)] font-black uppercase leading-[1.05] tracking-tight text-neutral-900 sm:mb-7 lg:mb-8"
        style={display}
      >
        {copy.title}
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-12 lg:gap-4">
        <article
          className={`${lightCard} col-span-1 min-h-[160px] sm:min-h-[180px] lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:min-h-[280px]`}
        >
          <StatNumber>{copy.yearsValue}</StatNumber>
          <p className={`mt-3 max-w-[10rem] ${labelLight}`} style={sans}>
            {copy.yearsLabel}
          </p>
        </article>

        <article
          className={`${darkCard} col-span-1 min-h-[160px] sm:min-h-[180px] lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:min-h-[280px]`}
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/25 blur-2xl"
            aria-hidden
          />
          <OverlapCircles />
          <p className={`mt-auto ${labelDark}`} style={sans}>
            {copy.team}
          </p>
        </article>

        <article
          className={`${lightCard} col-span-2 min-h-[220px] sm:min-h-[240px] lg:col-span-5 lg:col-start-4 lg:row-start-1 lg:min-h-[280px]`}
        >
          <StatNumber>{copy.projectsValue}</StatNumber>
          <div className="mt-4 lg:mt-5">
            <p className={labelLight} style={sans}>
              {copy.projectsLabel}
            </p>
            <p className={`mt-2.5 lg:max-w-md ${bodyLight}`} style={sans}>
              {copy.projectsBody}
            </p>
          </div>
        </article>

        <article
          className={`${darkCard} col-span-2 min-h-[220px] sm:min-h-[240px] lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:min-h-[260px]`}
        >
          <div
            className="pointer-events-none absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-brand/20 blur-2xl"
            aria-hidden
          />
          <ShieldMark />
          <div className="mt-auto space-y-4 pt-4">
            <ContactPill href={resolvedContactHref} onClick={onContactClick} label={copy.contactCta} />
            <p className={`max-w-[20rem] ${labelDark}`} style={sans}>
              {copy.contactLead}
            </p>
          </div>
        </article>

        {onExploreClick ? (
          <button
            type="button"
            onClick={onExploreClick}
            className={`${lightCard} col-span-1 min-h-[152px] text-left transition-colors hover:border-brand/30 hover:bg-brand-light/35 sm:min-h-[172px] lg:col-span-4 lg:col-start-5 lg:row-start-2 lg:min-h-[260px]`}
          >
            <span className="flex flex-1" aria-hidden />
            <p className={labelLight} style={sans}>
              {copy.ai}
            </p>
          </button>
        ) : (
          <Link
            href={`/${lang}/solutions/ai-chatbots`}
            className={`${lightCard} col-span-1 min-h-[152px] transition-colors hover:border-brand/30 hover:bg-brand-light/35 sm:min-h-[172px] lg:col-span-4 lg:col-start-5 lg:row-start-2 lg:min-h-[260px]`}
          >
            <span className="flex flex-1" aria-hidden />
            <p className={labelLight} style={sans}>
              {copy.ai}
            </p>
          </Link>
        )}

        {onExploreClick ? (
          <button
            type="button"
            onClick={onExploreClick}
            className={`${lightCard} col-span-1 min-h-[152px] text-left transition-colors hover:border-brand/30 hover:bg-brand-light/35 sm:min-h-[172px] lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:min-h-[260px]`}
          >
            <Asterisk
              className="absolute right-5 top-5 h-8 w-8 text-neutral-900 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
              strokeWidth={1.75}
              aria-hidden
            />
            <span className="flex flex-1" aria-hidden />
            <p className={`pr-8 ${labelLight}`} style={sans}>
              {copy.solutions}
            </p>
          </button>
        ) : (
          <Link
            href={`/${lang}/services`}
            className={`${lightCard} col-span-1 min-h-[152px] transition-colors hover:border-brand/30 hover:bg-brand-light/35 sm:min-h-[172px] lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:min-h-[260px]`}
          >
            <Asterisk
              className="absolute right-5 top-5 h-8 w-8 text-neutral-900 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
              strokeWidth={1.75}
              aria-hidden
            />
            <span className="flex flex-1" aria-hidden />
            <p className={`pr-8 ${labelLight}`} style={sans}>
              {copy.solutions}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
