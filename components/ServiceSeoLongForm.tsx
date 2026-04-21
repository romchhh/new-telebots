'use client';

import { useState, type ReactNode } from 'react';
import type { ServiceLongFormBundle, ServiceRichBlock } from '@/lib/servicePagesSeo/types';
import { useScrollAnimation } from '@/components/useScrollAnimation';

interface ServiceSeoLongFormProps {
  copy: ServiceLongFormBundle;
}

const montserrat = { fontFamily: 'var(--font-montserrat)' } as const;
const shell = 'max-w-7xl mx-auto w-full';
const sectionPad = 'px-4 sm:px-6 md:px-10 lg:px-16';
const sectionY = 'py-20 md:py-28';

function SectionTitle({ children, index, dark }: { children: ReactNode; index?: number; dark?: boolean }) {
  return (
    <div className="mb-10 md:mb-14 text-center">
      {index !== undefined && (
        <span
          className={
            dark
              ? 'block text-[6rem] md:text-[8rem] font-light leading-none text-white/[0.08] select-none -mb-6 md:-mb-8'
              : 'block text-[6rem] md:text-[8rem] font-light leading-none text-gray-100 select-none -mb-6 md:-mb-8'
          }
          style={montserrat}
          aria-hidden
        >
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h2
        className={
          dark
            ? 'text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight relative z-10'
            : 'text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight relative z-10'
        }
        style={montserrat}
      >
        {children}
      </h2>
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

  const body = 'text-gray-900 text-lg md:text-xl leading-snug font-light';

  return (
    <>
      {/* Детальні блоки послуги */}
      <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle index={1}>{whatWeDoTitle}</SectionTitle>
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {whatWeDoItems.map((item: ServiceRichBlock) => (
              <article
                key={item.title}
                className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <h3
                  className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3 leading-tight"
                  style={montserrat}
                >
                  {item.title}
                </h3>
                <p className={body}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {websitesExtras ? (
        <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
          <div className={shell}>
            <SectionTitle index={2}>{websitesExtras.scopeTitle}</SectionTitle>
            <ul className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
              {websitesExtras.scopeItems.map((line: string) => (
                <li
                  key={line}
                  className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300"
                >
                  <p className={body}>{line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {designExtras ? (
        <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
          <div className={shell}>
            <SectionTitle index={2}>{designExtras.processTitle}</SectionTitle>
            <ol className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
              {designExtras.processItems.map((step: string, i: number) => (
                <li
                  key={step}
                  className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300"
                >
                  <span
                    className="block text-[2.75rem] md:text-[3rem] font-light italic leading-none text-black mb-5 select-none"
                    style={montserrat}
                    aria-hidden
                  >
                    [{String(i + 1).padStart(2, '0')}]
                  </span>
                  <p className={body}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle index={3}>{techTitle}</SectionTitle>
          <ul className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {techLines.map((line: string) => (
              <li
                key={line}
                className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300"
              >
                <p className={body}>{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${sectionY} ${sectionPad} bg-black`}>
        <div className={`${shell} max-w-4xl`}>
          <div className={`scroll-animate-up ${isFaqVisible ? 'animate' : ''}`} ref={faqRef}>
            <SectionTitle index={4} dark>
              {faqTitle}
            </SectionTitle>

            <div className="space-y-0">
              {faq.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="border-t border-white/20 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span
                      className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-snug"
                      style={montserrat}
                    >
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
                      <p
                        className="text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                        style={montserrat}
                      >
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
