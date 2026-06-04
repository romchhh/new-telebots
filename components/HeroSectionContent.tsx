'use client';

import OrderCtaPill from '@/components/OrderCtaPill';

interface HeroSectionContentProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

const montserrat = { fontFamily: 'var(--font-montserrat)' };

export default function HeroSectionContent({ t, onOrderClick }: HeroSectionContentProps) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-10 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/50 to-black/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent md:from-black/50"
        aria-hidden
      />

      {/* Круг з датами — класичний стиль hero, збільшений */}
      <div className="absolute z-20 right-0 top-16 sm:top-24 md:top-28 lg:top-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(220px,58vw)] w-[min(220px,58vw)] -translate-x-1/2 -translate-y-1/2 sm:h-[min(240px,52vw)] sm:w-[min(240px,52vw)] md:h-[clamp(280px,32vw,440px)] md:w-[clamp(280px,32vw,440px)]"
          style={{
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 38%, rgba(0,0,0,0.14) 62%, transparent 86%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          aria-hidden
        />
        <div className="relative p-3 sm:p-5 md:p-7 lg:p-9 xl:p-10">
          <div className="relative h-[8.5rem] w-[8.5rem] sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
            <div className="absolute inset-0" aria-hidden>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/35" />
              <div className="absolute bottom-0 top-0 left-1/2 w-px bg-white/35" />
            </div>
            <div className="absolute right-0 top-0 flex h-1/2 w-1/2 flex-col items-end justify-end p-2 text-right sm:p-3 md:p-4 lg:p-6">
              <span
                className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-300 sm:text-xs md:text-sm lg:text-base"
                style={montserrat}
              >
                {t.hero.startDate.label}
              </span>
              <span
                className="text-sm font-semibold uppercase leading-tight text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
                style={montserrat}
              >
                {t.hero.startDate.value}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 flex h-1/2 w-1/2 flex-col items-start justify-start p-2 sm:p-3 md:p-4 lg:p-6">
              <span
                className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-300 sm:text-xs md:text-sm lg:text-base"
                style={montserrat}
              >
                {t.hero.duration.label}
              </span>
              <span
                className="text-sm font-semibold uppercase leading-tight text-white sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
                style={montserrat}
              >
                {t.hero.duration.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-20 grid h-full max-h-full w-full overflow-hidden px-4 pb-2 pt-16 sm:px-6 sm:pb-5 sm:pt-24 md:px-8 lg:pt-28 lg:px-12 xl:px-14"
        style={{ gridTemplateRows: '1fr auto' }}
      >
        {/* Заголовок: на моб — по центру по висоті */}
        <div className="flex min-h-0 flex-col justify-center max-md:items-stretch md:justify-center max-lg:pr-[6.5rem] sm:max-lg:pr-40 lg:pr-64 xl:pr-72">
          <div className="min-h-0 w-full max-w-[min(100%,52rem)]">
            <h1
              className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-white text-[clamp(2.125rem,9.2vw,2.75rem)] sm:text-[clamp(2.5rem,6.5vw,3.5rem)] sm:leading-[0.92] md:text-6xl md:leading-[0.9] lg:text-7xl xl:text-[5.5rem] xl:leading-[0.88]"
              style={montserrat}
            >
              {t.hero.title}
            </h1>
            <p
              className="mt-2 line-clamp-2 text-lg leading-snug text-white/90 sm:mt-3 sm:text-xl md:mt-4 md:text-2xl lg:text-3xl"
              style={montserrat}
            >
              {t.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Низ: на моб CTA вище (col-reverse), теглайн під кнопкою */}
        <div className="flex min-h-0 shrink-0 flex-col-reverse gap-2 max-sm:-mt-10 sm:mt-0 sm:flex-col sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-10">
          <div className="min-w-0 space-y-1.5 sm:space-y-2 md:max-w-[46%] lg:max-w-[42%]">
            <p
              className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
              style={montserrat}
            >
              {t.hero.tagline}
            </p>
            {t.hero.intro && (
              <p
                className="text-sm leading-snug text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
                style={montserrat}
              >
                {t.hero.intro}
              </p>
            )}
            <button
              type="button"
              onClick={handleScrollDown}
              className="mt-1 hidden items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white lg:inline-flex md:text-sm"
              style={montserrat}
              aria-label={t.hero.viewButton}
            >
              {t.hero.viewButton}
              <span className="text-base md:text-lg" aria-hidden>
                ↓
              </span>
            </button>
          </div>

          {onOrderClick && (
            <div className="w-full shrink-0 sm:mb-0 md:w-auto">
              <OrderCtaPill
                size="hero"
                eyebrow={t.hero.ctaQuestion}
                eyebrowMobile={t.hero.ctaQuestionShort}
                label={t.modal.title}
                onClick={onOrderClick}
                className="w-full max-w-full md:w-auto"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
