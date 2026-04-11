'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface ServicesPassionSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesPassionSection({ t }: ServicesPassionSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/services/services-hero_new.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[3px]" style={{ WebkitBackdropFilter: 'blur(3px)' }} />
      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h1 className="font-bold text-white mb-4 md:mb-6 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl" style={{ letterSpacing: '0.15em', fontFamily: 'var(--font-montserrat)' }}>
            {t.services.passion}
          </h1>
          <p className="font-normal text-white mb-8 md:mb-10 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-relaxed" style={{ letterSpacing: '0.2em', fontFamily: 'var(--font-montserrat)' }}>
            {t.services.passionTitle}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 md:mb-12 font-normal max-w-4xl mx-auto">
            {t.services.passionDesc}
          </p>
          <div className="w-full text-center">
            <Link
              href={`/${validLang}/services#services-list`}
              className="inline-flex items-center justify-center border border-white text-white px-10 py-3.5 md:px-12 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg md:text-xl rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              aria-label={t.services.toServices}
            >
              {t.services.toServices}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

