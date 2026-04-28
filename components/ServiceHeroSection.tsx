'use client';

import Image from 'next/image';

export type ServiceHeroCopy = {
  tagline: string;
  title: string;
  subtitle: string;
  intro: string;
  ctaQuestion: string;
  startDate: { label: string; value: string };
  duration: { label: string; value: string };
};

interface ServiceHeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  hero: ServiceHeroCopy;
  viewButtonLabel: string;
  orderButtonLabel: string;
  onOrderClick: () => void;
  scrollTargetId?: string;
}

export default function ServiceHeroSection({
  imageSrc,
  imageAlt,
  hero,
  viewButtonLabel,
  orderButtonLabel,
  onOrderClick,
  scrollTargetId = 'service-main',
}: ServiceHeroSectionProps) {
  const handleScrollToContent = () => {
    const el = document.getElementById(scrollTargetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/72 to-black/55" />

      {/* Декоративна сітка + акцент */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-2xl" />

      <div
        className="relative z-0 flex-shrink-0 h-[120px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[300px]"
        aria-hidden
      />

      {/* Tagline — скляний блок */}
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
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 70%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 60%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
          />
          <p
            className="relative px-6 py-5 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-7 xl:py-7 text-white/90 font-normal leading-relaxed text-[17px] md:text-[18px] lg:text-[19px] xl:text-[21px]"
            style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '0.02em' }}
          >
            {hero.tagline}
          </p>
        </div>
      </div>

      {/* Круг з датами */}
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
                {hero.startDate.label}
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-semibold md:font-medium uppercase tracking-[0.08em] md:tracking-[0.1em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight text-right">
                {hero.startDate.value}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-1.5 sm:p-2.5 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-start items-start">
              <span className="text-[9px] sm:text-[10px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-200 md:text-gray-300 uppercase tracking-[0.12em] md:tracking-[0.15em] mb-0.5 md:mb-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                {hero.duration.label}
              </span>
              <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-semibold md:font-medium uppercase tracking-[0.08em] md:tracking-[0.1em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
                {hero.duration.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 flex w-full flex-1 items-end justify-center px-4 pb-10 pt-10 sm:px-6 md:px-10 md:pb-20 md:pt-0 lg:px-16 lg:pb-24">
        <div className="mx-auto w-full max-w-4xl text-center md:max-w-5xl lg:max-w-7xl">
          <h1
            className="mx-auto mb-3 max-w-[min(100%,36rem)] font-bold uppercase leading-tight text-white sm:mb-3 sm:max-w-3xl sm:leading-[1.12] md:mb-4 md:max-w-4xl lg:max-w-5xl text-[clamp(1rem,3.4vw,1.75rem)] sm:text-2xl md:text-3xl lg:text-4xl [letter-spacing:0.04em] sm:[letter-spacing:0.05em] md:[letter-spacing:0.07em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {hero.title}
          </h1>
          {hero.subtitle?.trim() && (
            <p
              className="mb-3 font-normal leading-snug text-white sm:mb-4 md:mb-5 text-base sm:text-lg md:text-xl [letter-spacing:0.03em] sm:[letter-spacing:0.05em] md:[letter-spacing:0.07em]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {hero.subtitle}
            </p>
          )}
          <p className="mx-auto mb-3 max-w-3xl text-base leading-relaxed text-gray-200/95 sm:mb-4 md:mb-5 sm:text-base md:text-lg md:leading-relaxed">
            {hero.intro}
          </p>
          <p
            className="mx-auto mb-6 max-w-3xl text-base font-semibold text-white/95 sm:mb-7 md:mb-9 md:text-lg [letter-spacing:0.04em] sm:[letter-spacing:0.05em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {hero.ctaQuestion}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-5 max-w-xl sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={handleScrollToContent}
              className="w-full sm:flex-1 sm:max-w-none font-bold border border-white text-white px-4 py-3 md:px-8 md:py-3.5 uppercase hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base md:text-lg rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {viewButtonLabel}
            </button>
            <button
              type="button"
              onClick={onOrderClick}
              className="w-full sm:flex-1 sm:max-w-none font-bold bg-white text-black px-4 py-3 md:px-8 md:py-3.5 uppercase hover:bg-black hover:text-white border border-white transition-all duration-300 text-sm sm:text-base md:text-lg rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {orderButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
