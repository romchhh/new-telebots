import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { CTA_ARROW_CIRCLE, CTA_ARROW_ICON, RADIUS_PILL } from '@/lib/siteUi';

export type CtaArrowDiscSheen = 'dark' | 'light' | 'outline' | 'muted' | 'brand-ghost';

const SHEEN_CLASS: Record<CtaArrowDiscSheen, string> = {
  dark: 'cta-pill-arrow-disc--dark',
  light: 'cta-pill-arrow-disc--light',
  outline: 'cta-pill-arrow-disc--outline',
  muted: 'cta-pill-arrow-disc--muted',
  'brand-ghost': 'cta-pill-arrow-disc--brand-ghost',
};

export type CtaArrowDiscSize = keyof typeof CTA_ARROW_CIRCLE;

type CtaArrowDiscProps = {
  sheen?: CtaArrowDiscSheen;
  size?: CtaArrowDiscSize;
  /** Колір фону / тексту (bg-black text-white тощо) */
  toneClass?: string;
  className?: string;
  strokeWidth?: number;
  icon?: LucideIcon;
  iconClassName?: string;
};

/** Круг зі стрілкою + обʼємне відсвічування (усі CTA на сайті). */
export default function CtaArrowDisc({
  sheen = 'dark',
  size = 'sm',
  toneClass = 'bg-neutral-900 text-white',
  className = '',
  strokeWidth = 2.25,
  icon: Icon = ArrowUpRight,
  iconClassName = '',
}: CtaArrowDiscProps) {
  return (
    <span
      className={[
        'cta-pill-arrow-disc',
        SHEEN_CLASS[sheen],
        'flex shrink-0 items-center justify-center',
        RADIUS_PILL,
        'transition-transform group-hover:scale-105',
        toneClass,
        CTA_ARROW_CIRCLE[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Icon
        className={['cta-pill-arrow-icon', CTA_ARROW_ICON[size], iconClassName].filter(Boolean).join(' ')}
        strokeWidth={strokeWidth}
        aria-hidden
      />
    </span>
  );
}
