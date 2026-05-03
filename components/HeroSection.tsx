'use client';

import Image from 'next/image';

interface HeroSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function HeroSection({ t, onOrderClick }: HeroSectionProps) {

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };


  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/other/hero-background.jpeg"
          alt={t.hero.backgroundImageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          decoding="sync"
          className="object-cover"
        />
      </div>

      {/* Градієнт затемнення знизу */}
      <div className="absolute inset-0 bg-black/15" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/52 to-black/5" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      {/* Зона під верхні елементи — на мобільному менша, щоб текст був вище */}
      <div
        className="relative z-0 flex-shrink-0 h-[120px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[300px]"
        aria-hidden
      />

      {/* ─── TAGLINE БЛОК (ліво) — на мобільному вужчий рядок, щоб круг справа не наїжджав ─── */}
      <div
        className="absolute top-24 sm:top-36 md:top-28 lg:top-32 xl:top-36 left-4 z-20 w-auto
          max-w-[calc(100vw-10.5rem)] sm:max-w-[min(100%,22rem)] md:max-w-none
          sm:w-[320px] md:left-6 md:w-[340px] lg:left-10 lg:w-[400px] xl:w-[440px]"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backdropFilter: 'blur(10px) saturate(1.35)',
              WebkitBackdropFilter: 'blur(10px) saturate(1.35)',
              background:
                'linear-gradient(145deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.22) 100%)',
            }}
          />
          {/* Скляний highlight (верхня крайка) */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 70%, transparent 100%)',
            }}
          />
          {/* Лівий вертикальний highlight */}
          <div
            className="absolute inset-y-0 left-0 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 60%, transparent 100%)',
            }}
          />
          {/* Легкий внутрішній border */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
          />
          {/* Текст */}
          <p
            className="relative px-6 py-5 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-7 xl:py-7 text-white/90 font-normal leading-relaxed text-[17px] md:text-[18px] lg:text-[19px] xl:text-[21px]"
            style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '0.02em' }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* ─── КРУГ З ДАТАМИ — мобільний: менший, праворуч; не перетинає теглайн і нижні тексти ─── */}
      <div className="absolute z-20 top-24 right-1 sm:right-1.5 md:top-24 md:right-2 lg:right-3 xl:right-5">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none
            w-[min(200px,52vw)] h-[min(200px,52vw)]
            sm:w-[min(220px,48vw)] sm:h-[min(220px,48vw)]
            md:w-[clamp(260px,30vw,420px)] md:h-[clamp(260px,30vw,420px)]"
          style={{
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.12) 62%, transparent 86%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            WebkitMaskImage:
              'radial-gradient(circle, black 0%, black 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.05) 88%, transparent 100%)',
            maskImage:
              'radial-gradient(circle, black 0%, black 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.05) 88%, transparent 100%)',
          }}
        />

        <div className="relative bg-transparent p-2.5 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div
            className="relative
              w-[7.25rem] h-[7.25rem]
              sm:w-40 sm:h-40
              md:w-40 md:h-40
              lg:w-60 lg:h-60
              xl:w-64 xl:h-64"
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30 md:bg-gray-600/40" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 md:bg-gray-600/40" />
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-1.5 sm:p-2.5 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-end items-end">
              <span className="text-[9px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-200 md:text-gray-300 uppercase tracking-[0.12em] md:tracking-[0.15em] mb-0.5 md:mb-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                {t.hero.startDate.label}
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-semibold md:font-medium uppercase tracking-[0.08em] md:tracking-[0.1em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
                {t.hero.startDate.value}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-1.5 sm:p-2.5 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-start items-start">
              <span className="text-[9px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-200 md:text-gray-300 uppercase tracking-[0.12em] md:tracking-[0.15em] mb-0.5 md:mb-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                {t.hero.duration.label}
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-semibold md:font-medium uppercase tracking-[0.08em] md:tracking-[0.1em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
                {t.hero.duration.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ОСНОВНИЙ КОНТЕНТ — z-30 щоб був над декоративним кругом; відступ зверху на мобільному щоб не злипався з кругом на низьких екранах ─── */}
      <div className="relative z-30 flex w-full flex-1 items-end justify-center px-4 pb-10 pt-10 sm:px-6 md:px-10 md:pb-20 md:pt-0 lg:px-16 lg:pb-24">
        <div className="mx-auto w-full max-w-4xl text-center md:max-w-5xl lg:max-w-7xl">
          <h1
            className="mx-auto mb-3 max-w-[min(100%,34rem)] font-bold uppercase leading-tight text-white sm:mb-4 sm:max-w-2xl sm:leading-[1.12] md:mb-5 md:max-w-3xl lg:max-w-4xl text-[clamp(1.2rem,4.8vw,2.05rem)] sm:text-3xl md:text-4xl lg:text-5xl [letter-spacing:0.04em] sm:[letter-spacing:0.07em] md:[letter-spacing:0.09em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.hero.title}
          </h1>
          <p
            className="mb-4 font-normal leading-snug text-white sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl [letter-spacing:0.04em] sm:[letter-spacing:0.08em] md:[letter-spacing:0.1em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-gray-300 sm:mb-5 sm:text-lg md:mb-6 md:text-xl md:leading-relaxed">
            {t.hero.intro}
          </p>
          <div className="flex justify-center gap-3 md:gap-6">
            <button
              onClick={handleScrollDown}
              className="flex-1 max-w-[200px] md:max-w-none md:flex-1 font-bold border border-white text-white px-4 py-3 md:px-10 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base md:text-xl lg:text-2xl rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              aria-label={t.hero.viewButton}
            >
              {t.hero.viewButton}
            </button>
            {onOrderClick && (
              <button
                onClick={onOrderClick}
                className="flex-1 max-w-[200px] md:max-w-none md:flex-1 font-bold bg-white text-black px-4 py-3 md:px-10 md:py-4 uppercase hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base md:text-xl lg:text-2xl rounded-full"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-label={t.modal.title}
              >
                {t.modal.title}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}