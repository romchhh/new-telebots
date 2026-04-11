'use client';

import Link from 'next/link';
import { useScrollAnimation } from './useScrollAnimation';

interface ServicesSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesSection({ t }: ServicesSectionProps) {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [subtitleRef, isSubtitleVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation();
  const [buttonRef, isButtonVisible] = useScrollAnimation<HTMLAnchorElement>();
  
  return (
    <section id="services" className="relative min-h-screen flex items-center" style={{ background: 'linear-gradient(to bottom right, rgba(254, 172, 214, 0.3) 0%, black 30%, black 70%, rgba(254, 172, 214, 0.3) 100%)' }}>
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 py-28 md:py-32 lg:py-36">
        <h2
          className={`font-bold text-white mb-6 sm:mb-8 md:mb-10 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.12] scroll-animate-up ${isTitleVisible ? 'animate' : ''}`}
          ref={titleRef}
          style={{ letterSpacing: '0.15em', fontFamily: 'var(--font-montserrat)' }}
        >
          {t.services.passion}
        </h2>
        <p
          className={`font-normal text-white mb-8 sm:mb-10 md:mb-12 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-[1.55] sm:leading-[1.5] scroll-animate-up ${isSubtitleVisible ? 'animate' : ''}`}
          ref={subtitleRef}
          style={{ letterSpacing: '0.2em', fontFamily: 'var(--font-montserrat)' }}
        >
          {t.services.passionTitle}
        </p>
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 font-normal leading-[1.7] sm:leading-[1.75] mb-12 sm:mb-14 md:mb-16 max-w-5xl scroll-animate-up ${isTextVisible ? 'animate' : ''}`}
          ref={textRef}
        >
          {t.services.passionDesc}
        </p>
        <Link
          href="/services"
          className={`inline-block font-normal border border-white text-white px-10 py-3.5 md:px-12 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full scroll-animate-scale ${isButtonVisible ? 'animate' : ''}`}
          style={{ fontFamily: 'var(--font-montserrat)' }}
          ref={buttonRef}
        >
          {t.services.toServices}
        </Link>
      </div>
    </section>
  );
}

