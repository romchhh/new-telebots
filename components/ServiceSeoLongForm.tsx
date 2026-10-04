import { type ReactNode } from 'react';
import type { ServiceLongFormBundle, ServiceRichBlock } from '@/lib/servicePagesSeo/types';
import FaqAccordion from '@/components/FaqAccordion';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { SITE_PX } from '@/lib/siteLayout';
import {
  SERVICE_CARD,
  SERVICE_CARD_BODY,
  SERVICE_CARD_GRID,
  SERVICE_CARD_SIZE,
  SERVICE_CARD_TITLE,
  SERVICE_SECTION_Y,
} from '@/lib/siteUi';

interface ServiceSeoLongFormProps {
  copy: ServiceLongFormBundle;
}

const display = { fontFamily: 'var(--font-display)' } as const;
const shell = 'mx-auto w-full max-w-[90rem]';
const sectionPad = SITE_PX;
const sectionY = SERVICE_SECTION_Y;

function SectionTitle({ children, index, dark }: { children: ReactNode; index?: number; dark?: boolean }) {
  return (
    <div className="mb-10 text-center md:mb-16">
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
            ? 'text-2xl sm:text-4xl lg:text-[3.25rem] font-semibold text-white tracking-tight leading-tight relative z-10'
            : 'text-2xl sm:text-4xl lg:text-[3.25rem] font-semibold text-black tracking-tight leading-tight relative z-10'
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

  const body = `${SERVICE_CARD_TITLE} sm:leading-snug`;
  const desc = SERVICE_CARD_BODY;
  const card = `${SERVICE_CARD_SIZE} ${SERVICE_CARD}`;
  const cardGap = SERVICE_CARD_GRID;

  return (
    <>
      {/* Детальні блоки послуги */}
      <section className={`${sectionY} ${sectionPad} bg-white border-t border-gray-100`}>
        <div className={shell}>
          <SectionTitle index={1}>{whatWeDoTitle}</SectionTitle>
          <div className={cardGap}>
            {whatWeDoItems.map((item: ServiceRichBlock, i: number) => (
              <article key={item.title} className={card}>
                <KeyboardKeyBadge n={i + 1} size="md" className="mb-4 sm:mb-5" />
                <h3 className={`${SERVICE_CARD_TITLE} mb-2 sm:mb-3`} style={display}>
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
                  <KeyboardKeyBadge n={i + 1} size="md" className="mb-4 sm:mb-5" />
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
                  <KeyboardKeyBadge n={i + 1} size="md" className="mb-4 sm:mb-5" />
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
                  size="md"
                  className="mb-4 sm:mb-5"
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
