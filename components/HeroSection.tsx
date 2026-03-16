'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function HeroSection({ t, onOrderClick }: HeroSectionProps) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedTitleItalic, setDisplayedTitleItalic] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [isTitleItalicComplete, setIsTitleItalicComplete] = useState(false);
  const [isContentComplete, setIsContentComplete] = useState(false);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const titleParts = t.hero.title.split(' до ');
    const titleFirst = titleParts[0] + (titleParts.length > 1 ? ' до ' : '');
    const titleSecond = titleParts.length > 1 ? titleParts[1] : '';

    let titleIndex = 0;
    let titleItalicIndex = 0;

    const titleInterval = setInterval(() => {
      if (titleIndex < titleFirst.length) {
        setDisplayedTitle(titleFirst.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setIsTitleComplete(true);

        const titleItalicInterval = setInterval(() => {
          if (titleItalicIndex < titleSecond.length) {
            setDisplayedTitleItalic(titleSecond.slice(0, titleItalicIndex + 1));
            titleItalicIndex++;
          } else {
            clearInterval(titleItalicInterval);
            setIsTitleItalicComplete(true);
            setDisplayedSubtitle(t.hero.subtitle);
            setIsContentComplete(true);
          }
        }, 80);
      }
    }, 50);

    return () => {
      clearInterval(titleInterval);
    };
  }, [t.hero.title, t.hero.subtitle]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/other/hero-background.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Градієнт затемнення знизу */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Зона для таглайна */}
      <div
        className="relative z-0 flex-shrink-0 h-[460px] sm:h-[400px] md:h-[260px] lg:h-[280px] xl:h-[300px]"
        aria-hidden
      />

      {/* ─── TAGLINE БЛОК (ліво) — Liquid Glass ─── */}
      <div
        className={`absolute top-72 sm:top-64 md:top-28 lg:top-32 xl:top-36 left-4 md:left-6 lg:left-10 z-20 w-[320px] md:w-[340px] lg:w-[400px] xl:w-[440px] transition-all duration-700 ${
          isContentComplete ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
        }`}
      >
        {/*
          Liquid glass: багатошарова конструкція
          1. Зовнішня маска — м'який fade по краях через mask-image
          2. Основна підкладка — backdrop-blur + тонований фон
          3. Внутрішній highlight — світлий блік зверху (як скло)
          4. Border — тонкий напівпрозорий контур
        */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            /* М'який fade-out по всіх краях, найсильніше знизу і справа */
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 85% at 30% 40%, black 40%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.4) 78%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 90% 85% at 30% 40%, black 40%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.4) 78%, transparent 100%)',
          }}
        >
          {/* Blur підкладка */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(28px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.18) 100%)',
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
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
            }}
          />
          {/* Текст */}
          <p
            className="relative px-6 py-5 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-7 xl:py-7 text-white/90 font-normal leading-relaxed text-[17px] md:text-[18px] lg:text-[19px] xl:text-[21px]"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>

      {/* ─── КРУГ З ДАТАМИ (право) — плавний fade по краях ─── */}
      <div className="absolute top-20 md:top-24 right-4 md:right-6 lg:right-10 z-20">
        {/*
          Замість одного radial-gradient з backdrop-blur використовуємо
          два шари: сам blur і окремий mask, щоб fade був справді плавним
          і не мав видимої "стінки" по краях кола.
        */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 'clamp(260px, 30vw, 420px)',
            height: 'clamp(260px, 30vw, 420px)',
            /* Blur шар */
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '50%',
            /* Маска: чорний центр (blur видно) → прозорий край (blur зникає) */
            WebkitMaskImage:
              'radial-gradient(circle, black 0%, black 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.05) 88%, transparent 100%)',
            maskImage:
              'radial-gradient(circle, black 0%, black 30%, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.05) 88%, transparent 100%)',
            /* Фоновий тінт: дуже слабкий, щоб тільки трохи затемнити */
            background:
              'radial-gradient(circle, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.30) 35%, rgba(0,0,0,0.12) 60%, transparent 85%)',
          }}
        />

        {/* Основний блок з датами */}
        <div className="relative bg-transparent p-5 md:p-6 lg:p-8 xl:p-10">
          <div className="relative w-44 h-44 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-64 xl:h-64">
            {/* Розділові лінії */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600/40" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600/40" />
            </div>

            {/* Верхній правий квадрант — Початок */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-3 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-end items-end">
              <span className="text-[12px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-300 uppercase tracking-[0.15em] mb-1">
                {t.hero.startDate.label}
              </span>
              <span className="text-[16px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-medium uppercase tracking-[0.1em]">
                {t.hero.startDate.value}
              </span>
            </div>

            {/* Нижній лівий квадрант — Тривалість */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-3 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-start items-start">
              <span className="text-[12px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-300 uppercase tracking-[0.15em] mb-1">
                {t.hero.duration.label}
              </span>
              <span className="text-[16px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-medium uppercase tracking-[0.1em]">
                {t.hero.duration.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ОСНОВНИЙ КОНТЕНТ (заголовок + кнопки) ─── */}
      <div className="relative z-10 w-full flex-1 flex items-end justify-center px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center w-full">
          <h1
            className="font-bold text-white mb-4 md:mb-6 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl"
            style={{ letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="sr-only">{t.hero.title}</span>
            <span aria-hidden="true">
              {displayedTitle}
              {displayedTitleItalic}
              {(!isTitleComplete || !isTitleItalicComplete) && (
                <span className="animate-pulse">|</span>
              )}
            </span>
          </h1>

          {isTitleItalicComplete && (
            <p
              className="font-normal text-white mb-8 md:mb-10 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-relaxed"
              style={{ letterSpacing: '0.2em', fontFamily: 'Montserrat, sans-serif' }}
            >
              {(() => {
                const subtitleText = t.hero.subtitle;
                const italicPart = 'TeleBots approach';
                if (subtitleText.includes(italicPart)) {
                  const parts = subtitleText.split(italicPart);
                  return (
                    <>
                      {parts[0]}
                      <span className="italic">{italicPart}</span>
                      {parts[1]}
                    </>
                  );
                }
                return subtitleText;
              })()}
            </p>
          )}

          <div className="flex justify-center gap-3 md:gap-6">
            <button
              onClick={handleScrollDown}
              className="flex-1 max-w-[200px] md:max-w-none md:flex-1 font-normal border border-white text-white px-4 py-3 md:px-10 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base md:text-xl lg:text-2xl rounded-full"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              aria-label={t.hero.viewButton}
            >
              {t.hero.viewButton}
            </button>
            {onOrderClick && (
              <button
                onClick={onOrderClick}
                className="flex-1 max-w-[200px] md:max-w-none md:flex-1 font-normal bg-white text-black px-4 py-3 md:px-10 md:py-4 uppercase hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base md:text-xl lg:text-2xl rounded-full"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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