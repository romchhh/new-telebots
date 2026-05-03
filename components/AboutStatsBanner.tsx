'use client';

import { useScrollAnimation } from './useScrollAnimation';

interface AboutStatsBannerProps {
  t: typeof import('./translations').translations.uk;
}

export default function AboutStatsBanner({ t }: AboutStatsBannerProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="w-full bg-black px-6 py-20 text-white md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl scroll-animate-up ${isVisible ? 'animate' : ''}`}>
        <div className="mb-16 grid gap-10 md:mb-16 md:grid-cols-3 md:gap-12">
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-white md:text-5xl lg:text-6xl">200+</div>
            <p className="text-lg font-normal text-gray-400 md:text-xl">{t.about.stats.projects}</p>
          </div>
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-white md:text-5xl lg:text-6xl">4</div>
            <p className="text-lg font-normal text-gray-400 md:text-xl">{t.about.stats.years}</p>
          </div>
          <div>
            <p className="text-xl font-normal leading-[1.75] text-gray-300 md:text-2xl">{t.about.stats.support}</p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl pt-4 text-center">
          <p className="text-lg font-bold leading-relaxed text-white sm:text-xl md:text-2xl">
            {t.about.stats.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
