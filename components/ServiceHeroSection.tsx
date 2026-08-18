'use client';

import type { ReactNode } from 'react';
import OrderCtaPill from '@/components/OrderCtaPill';
import HeroStatsCircle from '@/components/HeroStatsCircle';
import { useHomeModal } from '@/components/HomeModalProvider';
import { SITE_PX } from '@/lib/siteLayout';

export type ServiceHeroCopy = {
  tagline: string;
  title: string;
  subtitle: string;
  intro: string;
  ctaQuestion: string;
  ctaQuestionShort?: string;
  startDate: { label: string; value: string };
  duration: { label: string; value: string };
};

interface ServiceHeroSectionProps {
  heroBackground: ReactNode;
  hero: ServiceHeroCopy;
  /** @deprecated layout mirrors home — kept for call-site compatibility */
  viewButtonLabel?: string;
  orderButtonLabel: string;
  onOrderClick?: () => void;
  scrollTargetId?: string;
}

const montserrat = { fontFamily: 'var(--font-montserrat)' };

export default function ServiceHeroSection({
  heroBackground,
  hero,
  orderButtonLabel,
  onOrderClick,
}: ServiceHeroSectionProps) {
  const openFromShell = useHomeModal();
  const openModal = onOrderClick ?? openFromShell;
  return (
    <section className="relative overflow-hidden bg-black">
      {heroBackground}

      <div className="absolute inset-0 z-10">
      {/* Ті самі шари затемнення, що на головній */}
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/50 to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent md:from-black/50"
        aria-hidden
      />

      {/* Сітка клітинок поверх затемнення */}
      <div
        className="pointer-events-none absolute inset-0 z-[15]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 z-[15] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <HeroStatsCircle startDate={hero.startDate} duration={hero.duration} />

      <div
        className={`relative z-20 grid h-full max-h-full w-full overflow-hidden pb-2 pt-16 sm:pb-5 sm:pt-24 lg:pt-28 ${SITE_PX}`}
        style={{ gridTemplateRows: '1fr auto' }}
      >
        {/* Заголовок: по центру по висоті, з відступом під коло дат */}
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

        {/* Низ: офер зліва, CTA справа (на моб CTA вище) */}
        <div className="flex min-h-0 shrink-0 flex-col-reverse gap-2 max-sm:-mt-10 sm:mt-0 sm:flex-col sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-10">
          <div className="min-w-0 space-y-1.5 sm:space-y-2 md:max-w-[46%] lg:max-w-[42%]">
            <p
              className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
              style={montserrat}
            >
              {hero.tagline}
            </p>
            {hero.intro ? (
              <p
                className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
                style={montserrat}
              >
                {hero.intro}
              </p>
            ) : null}
          </div>

          <div className="w-full shrink-0 sm:mb-0 md:w-auto">
            <OrderCtaPill
              size="hero"
              eyebrow={hero.ctaQuestion}
              eyebrowMobile={hero.ctaQuestionShort}
              label={orderButtonLabel}
              onClick={openModal}
              className="w-full max-w-full md:w-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
