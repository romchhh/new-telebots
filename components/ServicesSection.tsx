'use client';

import Link from 'next/link';
import { useScrollAnimation } from './useScrollAnimation';

interface ServicesSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesSection({ t }: ServicesSectionProps) {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation();
  const [buttonRef, isButtonVisible] = useScrollAnimation<HTMLAnchorElement>();
  
  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h2 className={`text-5xl md:text-7xl font-black text-white mb-8 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
          {t.services.passion}
          <br />
          <span className="italic font-normal">{t.services.passionTitle}</span>
        </h2>
        <p className={`text-xl text-gray-300 font-semibold leading-relaxed mb-10 scroll-animate-up ${isTextVisible ? 'animate' : ''}`} ref={textRef}>
          {t.services.passionDesc}
        </p>
        <Link
          href="/services"
          className={`inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300 font-black tracking-wider rounded-full scroll-animate-scale ${isButtonVisible ? 'animate' : ''}`}
          ref={buttonRef}
        >
          {t.services.toServices}
        </Link>
      </div>
    </section>
  );
}

