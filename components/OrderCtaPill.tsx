'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type OrderCtaPillSize = 'hero' | 'md' | 'sm';

export type OrderCtaPillProps = {
  label: string;
  eyebrow?: string;
  /** Коротший підпис на вузьких екранах (як на референсі) */
  eyebrowMobile?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  className?: string;
  size?: OrderCtaPillSize;
  /** Тінь і рамка — на білому фоні */
  elevated?: boolean;
};

const SIZE_STYLES: Record<
  OrderCtaPillSize,
  { root: string; eyebrow: string; label: string; circle: string; icon: string }
> = {
  hero: {
    root: 'rounded-[1.75rem] pl-4 pr-1 py-2 sm:rounded-[2rem] sm:pl-6 sm:pr-2 sm:py-2.5 md:min-w-[min(100%,22rem)] md:max-w-[26rem] md:rounded-[2.25rem] md:pl-8 md:pr-3 md:py-3.5 lg:min-w-[24rem] lg:max-w-[28rem] lg:pl-9 lg:py-4',
    eyebrow: 'text-xs leading-none text-gray-500 sm:text-sm md:text-base lg:text-lg',
    label: 'text-[15px] font-bold leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-[2rem]',
    circle: 'h-11 w-11 shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-[4.25rem] xl:w-[4.25rem]',
    icon: 'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7',
  },
  md: {
    root: 'rounded-[1.75rem] pl-4 pr-1.5 py-2 sm:rounded-[2rem] sm:pl-6 sm:pr-2 sm:py-2.5 md:pl-7 md:pr-2.5 md:py-3',
    eyebrow: 'text-xs sm:text-sm',
    label: 'text-base font-bold sm:text-lg md:text-xl',
    circle: 'h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14',
    icon: 'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6',
  },
  sm: {
    root: 'rounded-[1.5rem] pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-1.5 sm:py-2',
    eyebrow: 'text-xs',
    label: 'text-sm font-bold sm:text-base',
    circle: 'h-10 w-10 sm:h-11 sm:w-11',
    icon: 'h-4 w-4 sm:h-5 sm:w-5',
  },
};

/** Біла кнопка-«пігулка» з чорним колом і стрілкою */
export default function OrderCtaPill({
  label,
  eyebrow,
  eyebrowMobile,
  onClick,
  href,
  className = '',
  size = 'md',
  elevated = false,
}: OrderCtaPillProps) {
  const s = SIZE_STYLES[size];
  const minHeightClass = size === 'hero' ? 'min-h-0 max-h-[3.5rem] sm:max-h-none' : 'min-h-[3.25rem]';
  const gapClass = size === 'hero' ? 'gap-2.5 sm:gap-3' : 'gap-3';
  const classes = [
    `group flex ${minHeightClass} items-center justify-between ${gapClass} bg-white text-left transition-opacity hover:opacity-95`,
    s.root,
    elevated ? 'border border-gray-200 shadow-md shadow-black/5' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mobileEyebrow = eyebrowMobile ?? eyebrow;

  const content = (
    <>
      <span className="min-w-0 flex-1 pr-2">
        {eyebrow && (
          <>
            {mobileEyebrow && (
              <span className={`mb-0.5 block sm:hidden ${s.eyebrow}`}>{mobileEyebrow}</span>
            )}
            <span className={`mb-0.5 hidden sm:mb-1 sm:block ${s.eyebrow}`}>{eyebrow}</span>
          </>
        )}
        <span className={`block text-black ${s.label}`}>{label}</span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-105 ${s.circle}`}
      >
        <ArrowUpRight className={s.icon} strokeWidth={2.25} aria-hidden />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        aria-label={label}
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={classes}
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {content}
    </button>
  );
}
