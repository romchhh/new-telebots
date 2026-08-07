'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One-shot IntersectionObserver — без пересоздання на кожен рендер.
 * options як об'єкт у deps раніше глючив (новий {} щоразу).
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.08
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}
