'use client';

import { useState, useEffect } from 'react';

interface HeroSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTitleComplete, setIsTitleComplete] = useState(false);
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
    let titleIndex = 0;
    let subtitleIndex = 0;
    
    const titleInterval = setInterval(() => {
      if (titleIndex < t.hero.title.length) {
        setDisplayedTitle(t.hero.title.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setIsTitleComplete(true);
        
        // Починаємо друкувати підзаголовок після завершення заголовка
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex < t.hero.subtitle.length) {
            setDisplayedSubtitle(t.hero.subtitle.slice(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
            setIsContentComplete(true);
          }
        }, 30);
      }
    }, 100);

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
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
          {displayedTitle}
          {!isTitleComplete && <span className="animate-pulse">|</span>}
        </h1>
        <p className="text-white text-lg md:text-xl font-normal leading-relaxed">
          {displayedSubtitle}
          {isTitleComplete && displayedSubtitle.length < t.hero.subtitle.length && (
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

