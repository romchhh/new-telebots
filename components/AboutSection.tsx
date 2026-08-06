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
              alt="TeleBots"
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

        {/* Сітка з трьома колонками */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-14 lg:gap-24">
          {/* Ліва колонка - Our approach */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
              {t.about.ourWork}
            </h2>
            <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
              {t.about.ourWorkDesc}
            </p>
            <Link 
              href={`/${currentLang}#portfolio`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
            >
              {t.about.portfolio}
            </Link>
          </div>

          {/* Середня колонка — Що ми робимо? */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
              {t.about.services}
            </h2>
            <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
              {t.about.servicesDesc}
            </p>
            <Link 
              href={`/${currentLang}/services`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
            >
              {t.about.services}
            </Link>
          </div>

          {/* Права колонка - Контакти */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
              {t.about.contact}
            </h2>
            <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
              {t.about.contactDesc}
            </p>
            <Link 
              href={`/${currentLang}/contact`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
            >
              {t.about.getInTouch}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

