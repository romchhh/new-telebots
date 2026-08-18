import HeroStatsCircle from '@/components/HeroStatsCircle';
import HeroOrderCta from '@/components/HeroOrderCta';
import { SITE_PX } from '@/lib/siteLayout';
import type { SiteCopy } from '@/components/translations';

type HeroSectionOverlayProps = {
  hero: SiteCopy['hero'];
  orderLabel: string;
};

const montserrat = { fontFamily: 'var(--font-montserrat)' };

/** Серверний оверлей hero — h1 у HTML без очікування гідрації HomePageClient. */
export default function HeroSectionOverlay({ hero, orderLabel }: HeroSectionOverlayProps) {
  return (
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/50 to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent md:from-black/50"
        aria-hidden
      />

      <HeroStatsCircle startDate={hero.startDate} duration={hero.duration} />

      <div
        className={`relative z-20 grid h-full max-h-full w-full overflow-hidden pb-2 pt-16 sm:pb-5 sm:pt-24 lg:pt-28 ${SITE_PX}`}
        style={{ gridTemplateRows: '1fr auto' }}
      >
        <div className="flex min-h-0 flex-col justify-center max-md:items-stretch md:justify-center max-lg:pr-[6.5rem] sm:max-lg:pr-40 lg:pr-64 xl:pr-72">
          <div className="min-h-0 w-full max-w-[min(100%,52rem)]">
            <h1
              className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-white text-[clamp(2.125rem,9.2vw,2.75rem)] sm:text-[clamp(2.5rem,6.5vw,3.5rem)] sm:leading-[0.92] md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-[5.5rem] xl:leading-[0.88]"
              style={montserrat}
            >
              {hero.title}
            </h1>
          </div>
        </div>

        <div className="flex min-h-0 shrink-0 flex-col-reverse gap-2 max-sm:-mt-10 sm:mt-0 sm:flex-col sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-10">
          <div className="min-w-0 space-y-1.5 sm:space-y-2 md:max-w-[46%] lg:max-w-[42%]">
            <p
              className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
              style={montserrat}
            >
              {hero.tagline}
            </p>
            {hero.intro && (
              <p
                className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
                style={montserrat}
              >
                {hero.intro}
              </p>
            )}
          </div>

          <div className="w-full shrink-0 sm:mb-0 md:w-auto">
            <HeroOrderCta
              eyebrow={hero.ctaQuestion}
              eyebrowMobile={hero.ctaQuestionShort}
              label={orderLabel}
              className="w-full max-w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
