'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useHomeModal } from '@/components/HomeModalProvider';
import { CTA_ARROW_CIRCLE, CTA_ARROW_ICON, RADIUS_PILL } from '@/lib/siteUi';

export type OrderCtaPillSize = 'hero' | 'md' | 'sm';
export type OrderCtaPillVariant = 'solid' | 'outline' | 'dark' | 'brand';

export type OrderCtaPillProps = {
  label: string;
  eyebrow?: string;
  /** Коротший підпис на вузьких екранах (як на референсі) */
  eyebrowMobile?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  className?: string;
  size?: OrderCtaPillSize;
  variant?: OrderCtaPillVariant;
  /** Однакова висота в парі з кнопкою, що має eyebrow */
  paired?: boolean;
  /** Тінь і рамка — на білому фоні */
  elevated?: boolean;
  type?: 'button' | 'submit';
};

const SIZE_STYLES: Record<
  OrderCtaPillSize,
  { root: string; eyebrow: string; label: string; circle: string; icon: string }
> = {
  hero: {
    root: 'min-w-0 max-w-full rounded-[2rem] pl-5 pr-1.5 py-3 sm:rounded-[2rem] sm:pl-6 sm:pr-2 sm:py-2.5 md:min-w-[min(100%,22rem)] md:max-w-[26rem] md:rounded-[2.25rem] md:pl-8 md:pr-3 md:py-3.5 lg:min-w-[24rem] lg:max-w-[28rem] lg:pl-9 lg:py-4',
    eyebrow: 'text-sm leading-tight text-black sm:text-sm md:text-base lg:text-lg',
    label: 'text-[17px] font-bold leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-[2rem]',
    circle: CTA_ARROW_CIRCLE.hero,
    icon: CTA_ARROW_ICON.hero,
  },
  md: {
    root: `${RADIUS_PILL} pl-4 pr-1.5 py-2 sm:pl-6 sm:pr-2 sm:py-2.5 md:pl-7 md:pr-2.5 md:py-3`,
    eyebrow: 'text-xs text-black sm:text-sm',
    label: 'text-base font-bold sm:text-lg md:text-xl',
    circle: CTA_ARROW_CIRCLE.md,
    icon: CTA_ARROW_ICON.md,
  },
  sm: {
    root: `${RADIUS_PILL} pl-4 pr-1.5 py-2 sm:pl-5 sm:pr-1.5 sm:py-2`,
    eyebrow: 'text-xs text-black',
    label: 'text-sm font-bold sm:text-base',
    circle: CTA_ARROW_CIRCLE.sm,
    icon: CTA_ARROW_ICON.sm,
  },
};

/** Біла кнопка-«пігулка» з чорним колом і стрілкою */
const OUTLINE_EYEBROW = 'text-white/85';

export default function OrderCtaPill({
  label,
  eyebrow,
  eyebrowMobile,
  onClick,
  href,
  className = '',
  size = 'md',
  variant = 'solid',
  paired = false,
  elevated = false,
  type = 'button',
}: OrderCtaPillProps) {
  const openFromShell = useHomeModal();
  const handleClick =
    onClick ??
    (href || type === 'submit'
      ? undefined
      : (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
          e.preventDefault();
          openFromShell();
        });
  const s = SIZE_STYLES[size];
  const isOutline = variant === 'outline';
  const isDark = variant === 'dark';
  const isBrand = variant === 'brand';
  const minHeightClass =
    size === 'hero'
      ? 'min-h-[4.5rem] sm:min-h-0'
      : paired
        ? 'min-h-[5.25rem] sm:min-h-[5.5rem]'
        : 'min-h-[3.25rem]';
  const gapClass = size === 'hero' ? 'gap-2.5 sm:gap-3' : 'gap-3';
  const variantClasses = isOutline
    ? 'border border-white/75 bg-transparent text-white hover:bg-white/10'
    : isDark
      ? 'bg-black text-white hover:bg-zinc-900'
      : isBrand
        ? 'bg-brand text-neutral-900 hover:bg-brand-light'
        : 'bg-white text-black hover:opacity-95';
  const classes = [
    `group flex h-full ${minHeightClass} cursor-pointer items-center justify-between ${gapClass} text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`,
    variantClasses,
    s.root,
    elevated && !isOutline && !isDark && !isBrand
      ? 'border border-gray-200 shadow-md shadow-black/5'
      : isBrand
        ? 'shadow-md shadow-brand/25'
        : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const eyebrowClass =
    isOutline || isDark ? OUTLINE_EYEBROW : isBrand ? 'text-neutral-800/80' : s.eyebrow;
  const labelClass = isOutline || isDark ? 'text-white' : 'text-black';
  const circleClass = isOutline
    ? 'border border-white bg-transparent text-white'
    : isDark
      ? 'bg-white text-black'
      : isBrand
        ? 'bg-neutral-900 text-white'
        : size === 'hero'
          ? 'bg-brand text-neutral-900 md:bg-black md:text-white'
          : 'bg-black text-white';
  const singleLinePaired = paired && !eyebrow;
  const textColClass = singleLinePaired
    ? 'flex min-w-0 flex-1 flex-col items-center justify-center pr-1.5 text-center sm:pr-2'
    : 'min-w-0 flex-1 pr-1.5 sm:pr-2';

  const mobileEyebrow = eyebrowMobile ?? eyebrow;

  const content = (
    <>
      <span className={textColClass}>
        {eyebrow ? (
          <>
            {mobileEyebrow && (
              <span className={`mb-0.5 block break-words sm:hidden ${eyebrowClass}`}>{mobileEyebrow}</span>
            )}
            <span className={`mb-0.5 hidden break-words sm:mb-1 sm:block ${eyebrowClass}`}>{eyebrow}</span>
          </>
        ) : null}
        <span className={`block break-words ${labelClass} ${s.label}`}>{label}</span>
      </span>
      <span
        className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} transition-transform group-hover:scale-105 ${circleClass} ${s.circle}`}
      >
        <ArrowUpRight className={s.icon} strokeWidth={2.25} aria-hidden />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={classes}
        aria-label={label}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      aria-label={label}
      className={classes}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {content}
    </button>
  );
}
