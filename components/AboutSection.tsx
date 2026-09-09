'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import OrderCtaPill from '@/components/OrderCtaPill';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function AboutSection({ t, onOrderClick }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  return (
    <section className={`relative bg-white pt-0 pb-20 md:pb-28 lg:pb-36 ${SITE_PX}`}>
      <div className={SITE_INNER_WIDE}>
        {/* Фото з текстом і кнопкою — картка з відступами й заокругленням */}
        <div className="relative mb-6 overflow-hidden rounded-2xl md:mb-20">
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

        {/* Три кольорові блоки */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {/* Чорний — Наша робота */}
          <div className="flex flex-col rounded-2xl bg-black p-7 sm:p-8 md:p-9 lg:p-10">
            <h2
              className="mb-4 text-[clamp(1.65rem,3.8vw,2.35rem)] font-black uppercase leading-[1.05] tracking-[0.04em] text-white md:mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.about.ourWork}
            </h2>
            <p className="mb-8 flex-1 text-base leading-[1.65] text-white/80 md:mb-10 md:text-[17px] lg:text-lg">
              {t.about.ourWorkDesc}
            </p>
            <Link
              href={`/${currentLang}/about`}
              className="inline-flex w-fit items-center justify-center rounded-full border-2 border-white px-7 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black md:text-base"
            >
              {t.footer.about}
            </Link>
          </div>

          {/* Білий — Що ми робимо? */}
          <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-8 md:p-9 lg:p-10">
            <h2
              className="mb-4 text-[clamp(1.65rem,3.8vw,2.35rem)] font-black uppercase leading-[1.05] tracking-[0.04em] text-black md:mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.about.services}
            </h2>
            <p className="mb-8 flex-1 text-base leading-[1.65] text-black/75 md:mb-10 md:text-[17px] lg:text-lg">
              {t.about.servicesDesc}
            </p>
            <Link
              href={`/${currentLang}/services`}
              className="inline-flex w-fit items-center justify-center rounded-full border-2 border-black bg-white px-7 py-3 text-[15px] font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white md:text-base"
            >
              {t.about.services}
            </Link>
          </div>

          {/* Рожевий — Контакти */}
          <div className="flex flex-col rounded-2xl bg-brand p-7 sm:p-8 md:p-9 lg:p-10">
            <h2
              className="mb-4 text-[clamp(1.65rem,3.8vw,2.35rem)] font-black uppercase leading-[1.05] tracking-[0.04em] text-black md:mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.about.contact}
            </h2>
            <p className="mb-8 flex-1 text-base leading-[1.65] text-black/75 md:mb-10 md:text-[17px] lg:text-lg">
              {t.about.contactDesc}
            </p>
            <Link
              href={`/${currentLang}/contact`}
              className="inline-flex w-fit items-center justify-center rounded-full border-2 border-black bg-transparent px-7 py-3 text-[15px] font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white md:text-base"
            >
              {t.about.getInTouch}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

