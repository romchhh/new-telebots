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
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-background.jpeg)',
        }}
      />
      {/* Градієнт затемнення знизу */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />
      {/* Блок з інформацією про початок та тривалість - справа в кутку */}
      <div className="absolute top-20 md:top-24 right-4 md:right-6 lg:right-10 z-20">
        {/* Радіальний градієнтний blur - плавний перехід з центру */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]" 
             style={{
               background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.1) 65%, transparent 85%)',
               backdropFilter: 'blur(4px)',
               WebkitBackdropFilter: 'blur(4px)',
               borderRadius: '50%'
             }}>
        </div>
        
        {/* Основний блок */}
        <div className="relative bg-transparent p-4 md:p-6 lg:p-8">
          <div className="relative w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48">
            {/* Дві лінії, що розділяють на квадранти */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600/40"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600/40"></div>
            </div>
            
            {/* Верхній правий квадрант - Початок (справа) */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-2 md:p-3 lg:p-4 flex flex-col justify-end items-end">
              <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-300 uppercase tracking-[0.15em] mb-1">
                {t.hero.startDate.label}
              </span>
              <span className="text-[11px] md:text-[13px] lg:text-[15px] text-white font-medium uppercase tracking-[0.1em]">
                {t.hero.startDate.value}
              </span>
            </div>
            
            {/* Нижній лівий квадрант - Тривалість (зліва) */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2 md:p-3 lg:p-4 flex flex-col justify-start items-start">
              <span className="text-[8px] md:text-[9px] lg:text-[10px] text-gray-300 uppercase tracking-[0.15em] mb-1">
                {t.hero.duration.label}
              </span>
              <span className="text-[11px] md:text-[13px] lg:text-[15px] text-white font-medium uppercase tracking-[0.1em]">
                {t.hero.duration.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Заголовок */}
          <h1 className="font-bold text-white mb-4 md:mb-6 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl" style={{ letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}>
          {displayedTitle}
          {(!isTitleComplete || !isTitleItalicComplete) && <span className="animate-pulse">|</span>}
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

