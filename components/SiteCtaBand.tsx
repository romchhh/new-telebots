'use client';

import Link from 'next/link';
import OrderCtaPill from '@/components/OrderCtaPill';
import { useHomeModal } from '@/components/HomeModalProvider';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

export type SiteCtaBandProps = {
  title: string;
  text: string;
  contactLabel: string;
  pricingLabel: string;
  portfolioLabel: string;
  pricingHref: string;
  portfolioHref: string;
  onContactClick?: () => void;
  className?: string;
};

/** Чорна CTA-картка: на всю ширину контенту, з боковими відступами й заокругленням. */
export default function SiteCtaBand({
  title,
  text,
  contactLabel,
  pricingLabel,
  portfolioLabel,
  pricingHref,
  portfolioHref,
  onContactClick,
  className = '',
}: SiteCtaBandProps) {
  const openFromShell = useHomeModal();
  const openModal = onContactClick ?? openFromShell;
  return (
    <section className={`w-full pb-16 md:pb-24 ${SITE_PX} ${className}`}>
      <div
        className={`${SITE_INNER} relative overflow-hidden rounded-2xl bg-black px-6 py-10 text-white md:px-10 md:py-12`}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/25 blur-3xl"
          aria-hidden
        />
        <h2
          className="relative mb-4 text-2xl font-black tracking-tight md:text-3xl lg:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <p className="relative mb-8 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          {text}
        </p>
        <div className="relative flex flex-col flex-wrap gap-3 sm:flex-row sm:items-stretch">
          <OrderCtaPill
            size="sm"
            variant="brand"
            label={contactLabel}
            onClick={openModal}
            className="w-full sm:w-auto sm:min-w-[14rem]"
          />
          <Link
            href={pricingHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-brand bg-transparent px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-neutral-900"
          >
            {pricingLabel}
          </Link>
          <Link
            href={portfolioHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand hover:bg-brand/10"
          >
            {portfolioLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
