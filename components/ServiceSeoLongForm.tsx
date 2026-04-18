'use client';

import { useState, type ReactNode } from 'react';
import type { ServiceLongFormBundle, ServiceRichBlock } from '@/lib/servicePagesSeo/types';
import { useScrollAnimation } from '@/components/useScrollAnimation';

interface ServiceSeoLongFormProps {
  copy: ServiceLongFormBundle;
}

const shell = 'max-w-6xl mx-auto w-full';
const sectionPad = 'px-6 md:px-10 lg:px-16';
const sectionY = 'py-20 md:py-28';

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 md:mb-12 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.15rem] font-black text-black tracking-tight leading-[1.12]">
        {children}
      </h2>
      <div
        className="mt-5 md:mt-6 h-px w-12 md:w-16 bg-gradient-to-r from-black via-black/70 to-transparent"
        aria-hidden
      />
    </div>
  );
}

export default function ServiceSeoLongForm({ copy }: ServiceSeoLongFormProps) {
  const {
    whatWeDoTitle,
    whatWeDoItems,
    techTitle,
    techLines,
    faqTitle,
    faq,
    websitesExtras,
    designExtras,
  } = copy;

  const [faqRef, isFaqVisible] = useScrollAnimation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const body = 'text-gray-700 text-base md:text-lg leading-[1.75] tracking-tight';

  return (
    <>
      {/* Детальні блоки послуги */}
      <section className={`${sectionY} ${sectionPad} bg-gradient-to-b from-gray-50/90 via-white to-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle>{whatWeDoTitle}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {whatWeDoItems.map((item: ServiceRichBlock) => (
              <article
                key={item.title}
                className="group relative min-w-0 rounded-3xl border border-gray-200/80 bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_44px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:inset-x-8"
                  aria-hidden
                />
                <h3 className="text-lg md:text-xl font-bold text-black mb-3 pr-2 leading-snug">{item.title}</h3>
                <p className={body}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {websitesExtras ? (
        <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
          <div className={shell}>
            <SectionTitle>{websitesExtras.scopeTitle}</SectionTitle>
            <div className="rounded-3xl border border-gray-200/70 bg-gradient-to-br from-gray-50/90 to-white p-6 sm:p-8 md:p-10">
              <ul className="grid gap-4 sm:gap-5">
                {websitesExtras.scopeItems.map((line: string) => (
                  <li key={line} className="flex items-start gap-4">
                    <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black/80" aria-hidden />
                    <span className={`${body} pt-0.5`}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {designExtras ? (
        <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
          <div className={shell}>
            <SectionTitle>{designExtras.processTitle}</SectionTitle>
            <ol className="max-w-3xl space-y-5 md:space-y-6 rounded-3xl border border-gray-200/70 bg-gradient-to-br from-gray-50/90 to-white p-6 sm:p-8 md:p-10">
              {designExtras.processItems.map((step: string, i: number) => (
                <li key={step} className="flex gap-4 md:gap-5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white md:h-9 md:w-9 md:text-sm">
                    {i + 1}
                  </span>
                  <span className={`${body} pt-0.5 text-gray-800`}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className={`${sectionY} ${sectionPad} bg-gradient-to-b from-white via-gray-50/60 to-gray-50/90 border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle>{techTitle}</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
            {techLines.map((line: string) => (
              <div
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-gray-200/60 bg-white/80 px-4 py-3.5 md:px-5 md:py-4"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" aria-hidden />
                <span className={`${body} text-gray-800`}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionY} ${sectionPad} bg-black`}>
        <div className={`${shell} max-w-4xl`}>
          <div className={`scroll-animate-up ${isFaqVisible ? 'animate' : ''}`} ref={faqRef}>
            <h2 className="text-sm font-bold text-white/80 tracking-[0.3em] uppercase mb-10">
              {faqTitle}
            </h2>

            <div className="space-y-0">
              {faq.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="border-t border-white/20 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-snug">
                      {item.question}
                    </span>
                    <span
                      className="text-white text-2xl md:text-3xl font-light flex-shrink-0 transition-transform duration-300"
                      style={{ transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-[min(2000px,90vh)] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 md:pb-8 pr-4 sm:pr-12">
                      <p className="text-gray-300 text-base md:text-lg lg:text-xl font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
