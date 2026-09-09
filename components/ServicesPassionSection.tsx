'use client';

import Link from 'next/link';
import OrderCtaPill from '@/components/OrderCtaPill';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import { SITE_PX } from '@/lib/siteLayout';

interface ServicesPassionSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function ServicesPassionSection({ t }: ServicesPassionSectionProps) {
  const params = useParams();
  const pathname = usePathname();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  const servicesPath = `/${validLang}/services`;

  const scrollToServicesList = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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
          alt="TeleBots — послуги розробки сайтів, чат-ботів та дизайну"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl" aria-hidden />
      <div className={`relative z-10 w-full pb-10 pt-24 md:pb-20 md:pt-0 lg:pb-24 ${SITE_PX}`}>
        <div className="mx-auto max-w-4xl text-center md:max-w-5xl lg:max-w-7xl">
          <h1
            className="mb-3 font-semibold uppercase leading-[1.12] text-white sm:mb-4 sm:leading-[1.15] md:mb-5 text-[clamp(1.45rem,6.2vw,2.35rem)] sm:text-4xl md:text-5xl lg:text-6xl [letter-spacing:0.05em] sm:[letter-spacing:0.1em] md:[letter-spacing:0.12em]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.services.passion}
          </h1>
          <p
            className="mb-4 font-normal leading-snug text-white sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl [letter-spacing:0.04em] sm:[letter-spacing:0.08em] md:[letter-spacing:0.1em]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.services.passionTitle}
          </p>
          <p className="mx-auto mb-7 max-w-3xl text-lg leading-relaxed text-gray-300 sm:mb-8 sm:text-lg md:mb-10 md:text-xl md:leading-relaxed">
            {t.services.passionDesc}
          </p>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mb-6 sm:text-base">
            {t.services.passionMoreQuestion}
          </p>
          <div className="mx-auto flex w-full max-w-xl flex-col flex-wrap items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <OrderCtaPill
              size="sm"
              variant="brand"
              label={t.about.getInTouch}
              className="w-full sm:w-auto sm:min-w-[14rem]"
            />
            <Link
              href={`/${validLang}/services#services-list`}
              onClick={scrollToServicesList}
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              {t.services.toServices}
            </Link>
            <Link
              href={`/${validLang}/portfolio`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              {t.services.toPortfolio}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

