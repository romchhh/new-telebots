import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';

interface AboutStatsBannerProps {
  t: typeof import('./translations').translations.uk;
}

export default function AboutStatsBanner({ t }: AboutStatsBannerProps) {
  return (
    <section className={`w-full border-y border-black/5 bg-white py-20 text-black md:py-24 lg:py-28 ${SITE_PX}`}>
      <div className={SITE_INNER}>
        <div className="mb-16 grid gap-10 md:mb-16 md:grid-cols-3 md:gap-12">
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl lg:text-6xl">200+</div>
            <p className="text-lg font-normal text-gray-600 md:text-xl">{t.about.stats.projects}</p>
          </div>
          <div>
            <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl lg:text-6xl">4</div>
            <p className="text-lg font-normal text-gray-600 md:text-xl">{t.about.stats.years}</p>
          </div>
          <div>
            <p className="text-xl font-normal leading-[1.75] text-gray-700 md:text-2xl">{t.about.stats.support}</p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl pt-4 text-center">
          <p className="text-lg font-bold leading-relaxed text-black sm:text-xl md:text-2xl">
            {t.about.stats.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
