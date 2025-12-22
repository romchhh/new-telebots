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
    let subtitleIndex = 0;
    
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
            
            // Підзаголовок - середня швидкість (60ms)
            const subtitleInterval = setInterval(() => {
              if (subtitleIndex < t.hero.subtitle.length) {
                setDisplayedSubtitle(t.hero.subtitle.slice(0, subtitleIndex + 1));
                subtitleIndex++;
              } else {
                clearInterval(subtitleInterval);
                setIsContentComplete(true);
              }
            }, 60);
          }
        }, 80);
      }
    }, 50);

    return () => {
      clearInterval(titleInterval);
    };
  }, [t.hero.title, t.hero.subtitle]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/thumb-1920-407909.jpg)',
          filter: 'blur(2px)',
        }}
      />
      <div
        className="absolute inset-0 bg-black/70"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
          {displayedTitle}
          {displayedTitleItalic && (
            <>
              <br />
              <span className="italic font-normal">{displayedTitleItalic}</span>
            </>
          )}
          {(!isTitleComplete || !isTitleItalicComplete) && <span className="animate-pulse">|</span>}
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed font-semibold">
          {displayedSubtitle}
          {isTitleItalicComplete && displayedSubtitle.length < t.hero.subtitle.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>
      
      <button
        onClick={handleScrollDown}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0"
        style={{
          animation: 'fadeIn 1s ease-in-out 0.5s forwards, bounce 2s infinite 1.5s'
        }}
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>
    </section>
  );
}

