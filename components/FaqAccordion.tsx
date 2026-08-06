'use client';

import { useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  title: string;
  items: FaqItem[];
  /** section = повний чорний блок; embedded = всередині контенту (блог) */
  variant?: 'section' | 'embedded';
  sectionClassName?: string;
  className?: string;
};

const display = { fontFamily: 'var(--font-display)' } as const;

/** Чорний FAQ-акордеон — як на About / Pricing */
export default function FaqAccordion({
  title,
  items,
  variant = 'section',
  sectionClassName = '',
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items.length) return null;

  const list = (
    <>
      <h2
        className={
          variant === 'embedded'
            ? 'mb-6 text-sm font-bold uppercase tracking-[0.3em] text-white/80'
            : 'mb-10 text-sm font-bold uppercase tracking-[0.3em] text-white/80'
        }
      >
        {title}
      </h2>
      <div className="space-y-0">
        {items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={`${index}-${item.question}`} className="border-t border-white/20 last:border-b">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
                aria-expanded={open}
              >
                <span
                  className="pr-4 text-lg font-normal leading-snug text-white md:text-xl lg:text-2xl"
                  style={display}
                >
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 text-2xl font-light text-white transition-transform duration-300 md:text-3xl"
                  style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open ? 'max-h-[min(2000px,90vh)] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 pr-4 sm:pr-12 md:pb-8">
                  <p className="text-base font-normal leading-relaxed text-gray-300 md:text-lg lg:text-xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  if (variant === 'embedded') {
    return (
      <div className={`rounded-2xl bg-black px-5 py-8 text-white sm:px-8 sm:py-10 ${className}`}>{list}</div>
    );
  }

  return (
    <section className={`bg-black py-20 text-white md:py-28 ${sectionClassName} ${className}`}>
      <div className="mx-auto w-full max-w-4xl">{list}</div>
    </section>
  );
}
