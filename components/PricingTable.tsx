'use client';

import Link from 'next/link';
import PricingPlansGrid from '@/components/PricingPlansGrid';

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
  forWhom?: string;
};

type PricingData = {
  categoryLabel: string;
  title: string;
  subtitle: string;
  popularBadge: string;
  featuresLabel?: string;
  forWhomLabel?: string;
  contactNote: string;
  contactLink: string;
  contactSuffix: string;
  plans: Plan[];
};

interface PricingTableProps {
  pricing: PricingData;
  lang: string;
  onContactClick?: () => void;
  hideCategoryLabel?: boolean;
  embedded?: boolean;
  sectionIndex?: number;
  centerHeader?: boolean;
}

export default function PricingTable({
  pricing,
  lang,
  onContactClick,
  hideCategoryLabel,
  embedded,
  sectionIndex,
  centerHeader,
}: PricingTableProps) {
  const sectionPad = embedded ? 'py-8 sm:py-10 px-0' : 'py-16 sm:py-20 px-4 sm:px-6';

  return (
    <section className={`${sectionPad} bg-white`}>
      <div className="mx-auto max-w-7xl">
        <div className={`mb-10 sm:mb-12 ${centerHeader ? 'text-center' : ''}`}>
          {!hideCategoryLabel && (
            <div className="mb-4 flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-black">
                {pricing.categoryLabel}
              </span>
            </div>
          )}
          <div className={`relative ${centerHeader ? 'mx-auto max-w-4xl' : ''}`}>
            {sectionIndex !== undefined && (
              <span
                className="-mb-6 block select-none text-[6rem] font-light leading-none text-gray-100 md:-mb-8 md:text-[8rem]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-hidden
              >
                {String(sectionIndex).padStart(2, '0')}
              </span>
            )}
            <h2
              className="relative z-10 mb-4 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {pricing.title}
            </h2>
          </div>
          <p
            className={`max-w-2xl text-lg text-gray-600 ${centerHeader ? 'mx-auto text-center' : ''}`}
          >
            {pricing.subtitle}
          </p>
        </div>

        <PricingPlansGrid plans={pricing.plans} popularLabel={pricing.popularBadge} />

        <div className="mt-10 text-center sm:mt-12">
          <p className="text-base text-gray-600">
            {pricing.contactNote}{' '}
            {onContactClick ? (
              <button
                type="button"
                onClick={onContactClick}
                className="cursor-pointer font-semibold text-black underline hover:no-underline"
              >
                {pricing.contactLink}
              </button>
            ) : (
              <Link
                href={`/${lang}/contact`}
                className="font-semibold text-black underline hover:no-underline"
              >
                {pricing.contactLink}
              </Link>
            )}{' '}
            {pricing.contactSuffix}
          </p>
        </div>
      </div>
    </section>
  );
}
