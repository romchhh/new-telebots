'use client';

import { type ReactNode } from 'react';
import type { ServiceLongFormBundle, ServiceRichBlock } from '@/lib/servicePagesSeo/types';
import FaqAccordion from '@/components/FaqAccordion';
import { SITE_PX } from '@/lib/siteLayout';

interface ServiceSeoLongFormProps {
  copy: ServiceLongFormBundle;
}

const display = { fontFamily: 'var(--font-display)' } as const;
const shell = 'mx-auto w-full';
const sectionPad = SITE_PX;
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
          style={display}
          aria-hidden
        >
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h2
        className={
          dark
            ? 'text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight relative z-10'
            : 'text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight relative z-10'
        }
        style={display}
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

  const body = 'text-gray-900 text-lg md:text-xl leading-snug font-light';

  return (
    <>
      {/* Детальні блоки послуги */}
      <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle index={1}>{whatWeDoTitle}</SectionTitle>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {whatWeDoItems.map((item: ServiceRichBlock) => (
              <article
                key={item.title}
                className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3 leading-tight"
                  style={display}
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
            <ul className="flex flex-wrap justify-center gap-6 w-full">
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
            <ol className="flex flex-wrap justify-center gap-6 w-full">
              {designExtras.processItems.map((step: string, i: number) => (
                <li
                  key={step}
                  className="w-[calc(50%-12px)] min-w-[140px] max-w-[420px] md:w-[calc(33.333%-16px)] rounded-3xl p-6 sm:p-8 border border-gray-200/70 bg-white/45 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.11)] hover:bg-white/75 hover:border-gray-300/90 transition-all duration-300"
                >
                  <span
                    className="block text-[2.75rem] md:text-[3rem] font-light italic leading-none text-black mb-5 select-none"
                    style={display}
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
          <ul className="flex flex-wrap justify-center gap-6 w-full">
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

      <FaqAccordion title={faqTitle} items={faq} sectionClassName={sectionPad} />
    </>
  );
}
