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
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h2 className={`font-bold text-white mb-4 md:mb-6 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef} style={{ letterSpacing: '0.15em', fontFamily: 'Montserrat, sans-serif' }}>
          {t.services.passion}
        </h2>
        <p className={`font-normal text-white mb-8 md:mb-10 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-relaxed scroll-animate-up ${isSubtitleVisible ? 'animate' : ''}`} ref={subtitleRef} style={{ letterSpacing: '0.2em', fontFamily: 'Montserrat, sans-serif' }}>
          {t.services.passionTitle}
        </p>
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 font-normal leading-relaxed mb-10 scroll-animate-up ${isTextVisible ? 'animate' : ''}`} ref={textRef}>
          {t.services.passionDesc}
        </p>
        <Link
          href="/services"
          className={`inline-block font-normal border border-white text-white px-8 py-3 md:px-10 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full scroll-animate-scale ${isButtonVisible ? 'animate' : ''}`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          ref={buttonRef}
        >
          {t.services.toServices}
        </Link>
      </div>
    </section>
  );
}

