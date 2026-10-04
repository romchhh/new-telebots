'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import OrderCtaPill from '@/components/OrderCtaPill';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import { BTN_OUTLINE, CARD_MEDIA, CTA_ARROW_CIRCLE, CTA_ARROW_ICON, RADIUS_PILL } from '@/lib/siteUi';

interface ServicesPassionSectionProps {
  t: typeof import('./translations').translations.uk;
}

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

export default function ServicesPassionSection({ t }: ServicesPassionSectionProps) {
  const params = useParams();
  const pathname = usePathname();
  const langParam = params?.lang as string;
  const validLang = ['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk';
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

  const linkClass = `${BTN_OUTLINE} w-full sm:w-auto`;

  return (
    <section
      className={`relative overflow-hidden border-b border-neutral-100 bg-white pt-24 md:pt-28 ${SITE_PX}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 z-0 h-[min(50vw,320px)] w-[min(50vw,320px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-8 z-0 h-[min(55vw,440px)] w-[min(55vw,440px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.14)_0%,transparent_70%)] blur-3xl"
        aria-hidden
      />

      <article className={`relative z-10 ${SITE_INNER_WIDE} pb-12 md:pb-16 lg:pb-20`}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500" style={sans}>
              {t.nav.services}
            </p>
            <h1
              className="text-[clamp(1.85rem,4.5vw,3.35rem)] font-black uppercase leading-[1.04] tracking-tight text-neutral-900"
              style={display}
            >
              {t.services.passion}
            </h1>
            <p
              className="mt-5 max-w-xl text-lg font-semibold leading-snug text-neutral-800 sm:text-xl"
              style={sans}
            >
              {t.services.passionTitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg" style={sans}>
              {t.services.passionDesc}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base" style={sans}>
              {t.services.passionMoreQuestion}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <OrderCtaPill
                size="sm"
                variant="brand"
                label={t.about.getInTouch}
                href={`/${validLang}/contact`}
                elevated
                className="w-full sm:w-auto sm:min-w-[14rem]"
              />
              <button
                type="button"
                onClick={scrollToServicesList}
                className={`group inline-flex w-full items-center justify-between gap-3 ${RADIUS_PILL} border border-neutral-200 bg-neutral-50 pl-5 pr-1.5 py-2 text-left transition hover:border-neutral-300 hover:bg-white sm:w-auto sm:min-w-[14rem]`}
                style={sans}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-neutral-900">
                  {t.services.toServices}
                </span>
                <span
                  className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white transition-transform group-hover:scale-105 ${CTA_ARROW_CIRCLE.sm}`}
                >
                  <ArrowUpRight className={CTA_ARROW_ICON.sm} strokeWidth={2.25} aria-hidden />
                </span>
              </button>
              <Link href={`/${validLang}/portfolio`} className={`${linkClass} w-full sm:w-auto`}>
                {t.services.toPortfolio}
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className={`relative aspect-[4/3] ${CARD_MEDIA} lg:aspect-[5/4]`}>
              <Image
                src="/services/services-hero_new.jpg"
                alt="TeleBots — послуги розробки сайтів, чат-ботів та дизайну"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
