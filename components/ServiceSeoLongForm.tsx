'use client';

import { type ReactNode } from 'react';
import type { ServiceLongFormBundle, ServiceRichBlock } from '@/lib/servicePagesSeo/types';
import FaqAccordion from '@/components/FaqAccordion';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
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
    <div className="mb-8 md:mb-14 text-center">
      {index !== undefined && (
        <span
          className={
            dark
              ? 'block text-[5rem] md:text-[8rem] font-light leading-none text-white/[0.08] select-none -mb-5 md:-mb-8'
              : 'block text-[5rem] md:text-[8rem] font-light leading-none text-gray-100 select-none -mb-5 md:-mb-8'
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
            ? 'text-2xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight relative z-10'
            : 'text-2xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight leading-tight relative z-10'
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

  const body = 'text-lg font-semibold leading-snug tracking-tight text-black sm:text-xl sm:leading-snug';
  const desc = 'text-base font-normal leading-snug text-gray-700 sm:text-lg sm:leading-snug';
  const card =
    'w-[calc(50%-6px)] min-w-0 max-w-[420px] rounded-2xl border border-gray-200 bg-zinc-50 p-3.5 sm:w-[calc(50%-12px)] sm:rounded-3xl sm:p-6 md:w-[calc(33.333%-16px)] md:p-8';
  const cardGap = 'flex w-full flex-wrap justify-center gap-3 sm:gap-6';

  return (
    <>
      {/* Детальні блоки послуги */}
      <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle index={1}>{whatWeDoTitle}</SectionTitle>
          <div className={cardGap}>
            {whatWeDoItems.map((item: ServiceRichBlock, i: number) => (
              <article key={item.title} className={card}>
                <KeyboardKeyBadge n={i + 1} size="sm" className="mb-3 sm:mb-4" />
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-black tracking-tight mb-2 sm:mb-3 leading-snug"
                  style={display}
                >
                  {item.title}
                </h3>
                <p className={desc}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {websitesExtras ? (
        <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
          <div className={shell}>
            <SectionTitle index={2}>{websitesExtras.scopeTitle}</SectionTitle>
            <ul className={cardGap}>
              {websitesExtras.scopeItems.map((line: string, i: number) => (
                <li key={line} className={card}>
                  <KeyboardKeyBadge n={i + 1} size="sm" className="mb-3 sm:mb-4" />
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
            <ol className={cardGap}>
              {designExtras.processItems.map((step: string, i: number) => (
                <li key={step} className={card}>
                  <KeyboardKeyBadge n={i + 1} size="sm" className="mb-3 sm:mb-4" />
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
          <ul className={cardGap}>
            {techLines.map((line: string, i: number) => (
              <li key={line} className={card}>
                <KeyboardKeyBadge
                  symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                  size="sm"
                  className="mb-3 sm:mb-4"
                />
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
