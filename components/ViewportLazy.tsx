'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type ViewportLazyProps = {
  children: ReactNode;
  /** Резерв висоти до завантаження — менше CLS при скролі */
  minHeight?: string;
  /** Завантажити секцію до появи у viewport (px) */
  rootMargin?: string;
};

/** Монтує children лише коли блок наближається до viewport — не тягне JS/CSS-логіку на старті. */
export default function ViewportLazy({
  children,
  minHeight = '1px',
  rootMargin = '500px',
}: ViewportLazyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref} style={visible ? undefined : { minHeight }}>{visible ? children : null}</div>;
}
