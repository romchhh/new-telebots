'use client';

import OrderCtaPill from '@/components/OrderCtaPill';
import { useHomeModal } from '@/components/HomeModalProvider';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import { RADIUS_SHELL } from '@/lib/siteUi';

export type SiteCtaBandProps = {
  title: string;
  text: string;
  contactLabel: string;
  /** @deprecated лишається для сумісності викликів — більше не рендериться */
  pricingLabel?: string;
  /** @deprecated лишається для сумісності викликів — більше не рендериться */
  portfolioLabel?: string;
  pricingHref?: string;
  portfolioHref?: string;
  onContactClick?: () => void;
  className?: string;
};

/** Чорна CTA-картка: на всю ширину контенту, з боковими відступами й заокругленням. */
export default function SiteCtaBand({
  title,
  text,
  contactLabel,
  onContactClick,
  className = '',
}: SiteCtaBandProps) {
  const openFromShell = useHomeModal();
  const openModal = onContactClick ?? openFromShell;
  return (
    <section className={`w-full pb-8 md:pb-10 ${SITE_PX} ${className}`}>
      <div
        className={`${SITE_INNER} relative overflow-hidden ${RADIUS_SHELL} bg-black px-6 py-7 text-white md:px-10 md:py-8`}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/25 blur-3xl"
          aria-hidden
        />
        <h2
          className="relative mb-4 text-center text-2xl font-black tracking-tight md:text-3xl lg:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <p className="relative mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-lg">
          {text}
        </p>
        <div className="relative mx-auto flex w-full max-w-lg justify-center sm:max-w-xl">
          <OrderCtaPill
            size="hero"
            variant="brand"
            label={contactLabel}
            onClick={openModal}
            className="w-full justify-between shadow-none"
          />
        </div>
      </div>
    </section>
  );
}
