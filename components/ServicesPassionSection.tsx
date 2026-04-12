'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';

interface ServicesPassionSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesPassionSection({ t }: ServicesPassionSectionProps) {
  const params = useParams();
  const pathname = usePathname();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  const servicesPath = `/${validLang}/services`;

  const scrollToServicesList = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === servicesPath) {
      e.preventDefault();
      document.getElementById('services-list')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.replaceState(null, '', `${servicesPath}#services-list`);
    }
  };
  
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center md:min-h-screen md:justify-end overflow-hidden">
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
      <div className="relative z-10 w-full px-4 pb-10 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-0 lg:pb-24 lg:px-16">
        <div className="mx-auto max-w-4xl text-center md:max-w-5xl lg:max-w-7xl">
          <h1
            className="mb-3 font-bold uppercase leading-[1.12] text-white sm:mb-4 sm:leading-[1.15] md:mb-5 text-[clamp(1.45rem,6.2vw,2.35rem)] sm:text-4xl md:text-5xl lg:text-6xl [letter-spacing:0.05em] sm:[letter-spacing:0.1em] md:[letter-spacing:0.12em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.services.passion}
          </h1>
          <p
            className="mb-4 font-normal leading-snug text-white sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl [letter-spacing:0.04em] sm:[letter-spacing:0.08em] md:[letter-spacing:0.1em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.services.passionTitle}
          </p>
          <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-gray-300 sm:mb-5 sm:text-lg md:mb-6 md:text-xl md:leading-relaxed">
            {t.services.passionDesc}
          </p>
          <p
            className="mx-auto mb-7 max-w-3xl text-lg font-semibold text-white/95 sm:mb-8 md:mb-10 sm:text-lg md:text-xl [letter-spacing:0.05em] sm:[letter-spacing:0.06em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.services.passionMoreQuestion}
          </p>
          <div className="flex justify-center gap-3 sm:gap-3 md:gap-6">
            <Link
              href={`/${validLang}/services#services-list`}
              onClick={scrollToServicesList}
              className="max-w-[min(100%,200px)] flex-1 text-center font-bold border border-white text-white px-4 py-3.5 uppercase transition-all duration-300 hover:bg-white hover:text-black sm:max-w-[200px] sm:py-3 md:max-w-none md:flex-1 md:px-10 md:py-4 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              aria-label={t.services.toServices}
            >
              {t.services.toServices}
            </Link>
            <Link
              href={`/${validLang}/portfolio`}
              className="max-w-[min(100%,200px)] flex-1 text-center font-bold bg-white text-black px-4 py-3.5 uppercase transition-all duration-300 hover:bg-black hover:text-white sm:max-w-[200px] sm:py-3 md:max-w-none md:flex-1 md:px-10 md:py-4 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              aria-label={t.services.toPortfolio}
            >
              {t.services.toPortfolio}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

