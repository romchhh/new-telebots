'use client';

import {
  useCallback,
  useEffect,
  useState,
  type RefObject,
} from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import type { Language } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';
import { RADIUS_PILL } from '@/lib/siteUi';

const SCROLL_HINT: Record<Language, string> = {
  uk: 'Гортайте вліво чи вправо, щоб побачити більше',
  en: 'Swipe left or right to see more',
  pl: 'Przesuń w lewo lub w prawo, aby zobaczyć więcej',
  ru: 'Листайте влево или вправо, чтобы увидеть больше',
};

export type HorizontalScrollState = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  hasOverflow: boolean;
  thumbStyle: { widthPercent: number; leftPercent: number };
};

export function useHorizontalScrollState(
  scrollerRef: RefObject<HTMLElement | null>,
  deps: unknown[] = []
): HorizontalScrollState {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [thumbStyle, setThumbStyle] = useState({ widthPercent: 100, leftPercent: 0 });

  const updateScrollState = useCallback(() => {
    const element = scrollerRef.current;
    if (!element) return;

    const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
    const overflow = maxScroll > 4;
    const scrollWidth = element.scrollWidth;

    setHasOverflow(overflow);
    setCanScrollLeft(element.scrollLeft > 4);
    setCanScrollRight(element.scrollLeft < maxScroll - 4);

    if (overflow && scrollWidth > 0) {
      setThumbStyle({
        widthPercent: (element.clientWidth / scrollWidth) * 100,
        leftPercent: (element.scrollLeft / scrollWidth) * 100,
      });
    } else {
      setThumbStyle({ widthPercent: 100, leftPercent: 0 });
    }
  }, [scrollerRef]);

  useEffect(() => {
    const element = scrollerRef.current;
    if (!element) return;

    updateScrollState();
    element.addEventListener('scroll', updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deps from caller (card count etc.)
  }, [updateScrollState, ...deps]);

  return { canScrollLeft, canScrollRight, hasOverflow, thumbStyle };
}

type MobileHorizontalScrollHintProps = {
  lang: Language;
  state: HorizontalScrollState;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  hint?: string;
  className?: string;
};

/** Мобільна підказка скролу — як у vcruise: трек + текст + стрілки. */
export default function MobileHorizontalScrollHint({
  lang,
  state,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  hint,
  className = '',
}: MobileHorizontalScrollHintProps) {
  if (!state.hasOverflow) return null;

  return (
    <div className={`mt-4 space-y-3 lg:hidden ${SITE_PX} ${className}`}>
      <div
        className="relative h-1 overflow-hidden rounded-full bg-neutral-200"
        role="presentation"
        aria-hidden
      >
        <div
          className="absolute top-0 h-full rounded-full bg-brand transition-[left,width] duration-200 ease-out"
          style={{
            width: `${state.thumbStyle.widthPercent}%`,
            left: `${state.thumbStyle.leftPercent}%`,
          }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <p
          className="flex min-w-0 items-center gap-2 text-sm leading-snug text-neutral-600"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center ${RADIUS_PILL} bg-[#f0e6ea] text-brand`}
            aria-hidden
          >
            <MoveHorizontal className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span>{hint ?? SCROLL_HINT[lang]}</span>
        </p>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-label={prevLabel}
            disabled={!state.canScrollLeft}
            onClick={onPrev}
            className={`flex h-12 w-12 items-center justify-center ${RADIUS_PILL} border border-neutral-200 bg-white text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:bg-white disabled:cursor-default disabled:opacity-40 sm:h-14 sm:w-14`}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            disabled={!state.canScrollRight}
            onClick={onNext}
            className={`flex h-12 w-12 items-center justify-center ${RADIUS_PILL} border border-neutral-200 bg-white text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:bg-white disabled:cursor-default disabled:opacity-40 sm:h-14 sm:w-14`}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
