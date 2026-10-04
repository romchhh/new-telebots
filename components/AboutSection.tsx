'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import OrderCtaPill from '@/components/OrderCtaPill';
import AboutInfoCards from '@/components/AboutInfoCards';
import type { Language } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';
import { RADIUS_CARD } from '@/lib/siteUi';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function AboutSection({ t, onOrderClick }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (
    ['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk'
  ) as Language;
  return (
    <section className={`relative bg-white pt-0 pb-20 md:pb-28 lg:pb-36 ${SITE_PX}`}>
      <div className={SITE_INNER_WIDE}>
        {/* Фото з текстом і кнопкою — картка з відступами й заокругленням */}
        <div className={`relative mb-6 overflow-hidden ${RADIUS_CARD} md:mb-20`}>
          <div className="relative h-[200px] w-full sm:h-[220px] md:h-[240px] lg:h-[260px]">
            <Image
              src="/other/about-hero.png"
              alt="Команда TeleBots: робочий процес розробки"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 90vw"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 w-full"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.25) 100%)',
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-4 md:gap-5 md:px-10">
              <p
                className="max-w-3xl text-center text-sm font-semibold leading-snug tracking-[0.01em] text-white sm:text-base md:max-w-4xl md:text-lg md:font-bold lg:text-xl"
                style={{
                  fontFamily: 'var(--font-sans)',
                  textShadow: '0 2px 16px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                {t.about.photoMessage}
              </p>
              <div className="hidden w-full max-w-sm md:block">
                {onOrderClick ? (
                  <OrderCtaPill size="sm" label={t.modal.title} onClick={onOrderClick} className="w-full" />
                ) : (
                  <OrderCtaPill
                    size="sm"
                    label={t.modal.title}
                    href={`/${currentLang}/contact`}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка під фото — тільки mobile */}
        <div className="mb-16 flex justify-center md:hidden">
          {onOrderClick ? (
            <OrderCtaPill
              size="md"
              label={t.modal.title}
              onClick={onOrderClick}
              elevated
              className="w-full max-w-md"
            />
          ) : (
            <OrderCtaPill
              size="md"
              label={t.modal.title}
              href={`/${currentLang}/contact`}
              elevated
              className="w-full max-w-md"
            />
          )}
        </div>

        <AboutInfoCards
          copy={t.about.whyUs}
          lang={currentLang}
          onContactClick={onOrderClick}
          contactHref={`/${currentLang}/contact`}
        />
      </div>
    </section>
  );
}

