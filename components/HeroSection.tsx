'use client';

import { useState, useEffect } from 'react';

interface HeroSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function HeroSection({ t }: HeroSectionProps) {
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
    // Розділяємо title на дві частини
    const titleParts = t.hero.title.split(' до ');
    const titleFirst = titleParts[0] + (titleParts.length > 1 ? ' до ' : '');
    const titleSecond = titleParts.length > 1 ? titleParts[1] : '';
    
    let titleIndex = 0;
    let titleItalicIndex = 0;
    
    // Перша частина заголовка - швидко (50ms)
    const titleInterval = setInterval(() => {
      if (titleIndex < titleFirst.length) {
        setDisplayedTitle(titleFirst.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setIsTitleComplete(true);
        
        // Друга частина заголовка (курсив) - повільніше (80ms)
        const titleItalicInterval = setInterval(() => {
          if (titleItalicIndex < titleSecond.length) {
            setDisplayedTitleItalic(titleSecond.slice(0, titleItalicIndex + 1));
            titleItalicIndex++;
          } else {
            clearInterval(titleItalicInterval);
            setIsTitleItalicComplete(true);
            // Підзаголовок відразу з'являється після заголовку
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/other/hero-background.jpeg)',
        }}
      />
      {/* Градієнт затемнення знизу */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />
      {/* Зона для таглайна — контент героя завжди нижче, щоб ніколи не налазив */}
      <div className="relative z-0 flex-shrink-0 h-[460px] sm:h-[400px] md:h-[260px] lg:h-[280px] xl:h-[300px]" aria-hidden />
      {/* Блок зліва — слоган (tagline), лише у верхній зоні */}
      <div
        className={`absolute top-72 sm:top-64 md:top-28 lg:top-32 xl:top-36 left-4 md:left-6 lg:left-10 z-20 w-[320px] md:w-[340px] lg:w-[400px] xl:w-[440px] transition-all duration-700 ${
          isContentComplete ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
        }`}
      >
        <div className="relative rounded-xl overflow-hidden min-h-[110px] md:min-h-[120px] lg:min-h-[130px] xl:min-h-[140px] border-l-2 border-white/30">
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.28) 70%, transparent 100%)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />
          <p
            className="relative p-5 md:p-5 lg:p-6 xl:p-7 text-white font-normal leading-relaxed text-[17px] md:text-[18px] lg:text-[19px] xl:text-[21px]"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}
          >
            {t.hero.tagline}
          </p>
        </div>
      </div>
      {/* Блок з інформацією про початок та тривалість - справа в кутку */}
      <div className="absolute top-20 md:top-24 right-4 md:right-6 lg:right-10 z-20">
        {/* Радіальний градієнтний blur — мʼякий перехід, сильніше розмиття по краях */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]" 
             style={{
               background: 'radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.05) 75%, transparent 90%)',
               backdropFilter: 'blur(8px)',
               WebkitBackdropFilter: 'blur(8px)',
               borderRadius: '50%'
             }}>
        </div>
        
        {/* Основний блок */}
        <div className="relative bg-transparent p-5 md:p-6 lg:p-8 xl:p-10">
          <div className="relative w-44 h-44 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-64 xl:h-64">
            {/* Дві лінії, що розділяють на квадранти */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600/40"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600/40"></div>
            </div>
            
            {/* Верхній правий квадрант - Початок (справа) */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-3 md:p-3 lg:p-5 xl:p-6 flex flex-col justify-end items-end">
              <span className="text-[12px] md:text-[9px] lg:text-[12px] xl:text-[13px] text-gray-300 uppercase tracking-[0.15em] mb-1">
                {t.hero.startDate.label}
              </span>
              <span className="text-[16px] md:text-[13px] lg:text-[18px] xl:text-[20px] text-white font-medium uppercase tracking-[0.1em]">
                {t.hero.startDate.value}
              </span>
            </div>
            
            {/* Нижній лівий квадрант - Тривалість (зліва) */}
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

      <div className="relative z-10 w-full flex-1 flex items-end justify-center px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Заголовок: повний текст для SEO/Google (sr-only), анімація для користувача (aria-hidden) */}
          <h1 className="font-bold text-white mb-4 md:mb-6 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl" style={{ letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}>
            <span className="sr-only">{t.hero.title}</span>
            <span aria-hidden="true">
              {displayedTitle}{displayedTitleItalic}
              {(!isTitleComplete || !isTitleItalicComplete) && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          {/* Підзаголовок */}
          {isTitleItalicComplete && (
            <p className="font-normal text-white mb-8 md:mb-10 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-relaxed" style={{ letterSpacing: '0.2em', fontFamily: 'Montserrat, sans-serif' }}>
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
          
          {/* Кнопка Переглянути */}
          {isContentComplete && (
            <div className="flex justify-center">
      <button
        onClick={handleScrollDown}
                className="font-normal border border-white text-white px-8 py-3 md:px-10 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                aria-label={t.hero.viewButton}
              >
                {t.hero.viewButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

