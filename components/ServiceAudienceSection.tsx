'use client';

import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

export type ServiceAudienceCopy = {
  title: string;
  titleAccent: string;
  items: string[];
};

interface ServiceAudienceSectionProps {
  copy: ServiceAudienceCopy;
}

const montserrat = { fontFamily: 'var(--font-sans)' } as const;

export default function ServiceAudienceSection({ copy }: ServiceAudienceSectionProps) {
  const { title, titleAccent, items } = copy;

  return (
    <div className={`relative overflow-hidden bg-white pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28 ${SITE_PX}`}>
      <div className={`relative ${SITE_INNER}`}>
        <h2
          className="mb-8 text-center text-2xl font-semibold leading-tight tracking-tight text-black sm:mb-14 sm:text-4xl lg:mb-16 lg:text-5xl"
          style={montserrat}
        >
          {title}{' '}
          <span className="font-semibold italic text-black">{titleAccent}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {items.map((text, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={num}
                className="w-[calc(50%-6px)] min-w-0 max-w-[420px] rounded-2xl border border-gray-200/70 bg-white/45 p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 sm:w-[calc(50%-12px)] sm:rounded-3xl sm:p-6 sm:shadow-[0_18px_45px_rgba(0,0,0,0.07)] md:w-[calc(33.333%-16px)] md:p-8"
              >
                <KeyboardKeyBadge n={i + 1} className="mb-2.5 sm:mb-5" />
                <p className="mt-0.5 text-sm leading-snug font-normal text-gray-700 sm:text-base sm:leading-snug">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
