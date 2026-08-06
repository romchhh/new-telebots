'use client';

import { useScrollAnimation } from './useScrollAnimation';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

interface StatsSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function StatsSection({ t }: StatsSectionProps) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section className={`border-y border-black/5 bg-white py-20 text-black md:py-24 ${SITE_PX}`}>
      <div ref={ref} className={`${SITE_INNER} scroll-animate-up ${isVisible ? 'animate' : ''}`}>
        <div className="mb-12 grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl">
              {t.services.stats.projects}
            </div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl">
              {t.services.stats.years}
            </div>
          </div>
          <div>
            <div className="text-xl font-normal leading-[1.75] text-gray-700">
              {t.services.stats.support}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl pt-4 text-center">
          <p className="text-lg font-bold leading-relaxed text-black sm:text-xl md:text-2xl lg:text-3xl">
            {t.services.stats.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
