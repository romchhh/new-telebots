'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import UkAboutHeadline from '@/components/UkAboutHeadline';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function AboutSection({ t, onOrderClick }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        {/* Великий заголовок */}
        <div className="mb-20 md:mb-28 lg:mb-36 min-w-0">
          {currentLang === 'uk' ? (
            <UkAboutHeadline />
          ) : (
            <h1 className="text-[clamp(1.1rem,7.2vw,6rem)] sm:text-[clamp(1.6rem,6vw,5rem)] md:text-[clamp(3.5rem,9.5vw,9.5rem)] font-black text-black leading-[0.9] tracking-[-0.02em] uppercase max-w-full hyphens-none break-normal">
              {t.about.title}
            </h1>
          )}
        </div>

        {/* Фото з текстом і кнопкою */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mb-16 md:mb-20">
          <div className="relative w-full aspect-[4031/2981]">
            <Image src="/other/about-hero.png" alt="TeleBots" fill className="object-cover" sizes="100vw" priority />
            {/* Градієнтне затемнення зверху — комп і mobile */}
            <div 
              className="absolute inset-x-0 top-0 h-[30%] md:h-[25%] pointer-events-none w-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.08) 60%, transparent 100%)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            />
            {/* Текст і кнопка поверх фото */}
            <div className="absolute inset-0 flex flex-col items-center justify-between pt-[4%] md:pt-[3%] pb-[4%] md:pb-[2%]">
              <p 
                className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold md:font-extrabold leading-[1.45] max-w-4xl md:max-w-5xl px-6 md:px-8 lg:px-12 tracking-[0.02em]"
                style={{ 
                  fontFamily: 'var(--font-montserrat)',
                  textShadow: '0 2px 20px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                {t.about.stats.cta}
              </p>
              {/* Кнопка на фото — тільки desktop */}
              <div className="hidden md:block">
                {onOrderClick ? (
                  <button 
                    onClick={onOrderClick} 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white text-lg md:text-xl font-medium px-12 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-200 uppercase tracking-wider"
                  >
                    {t.modal.title}
                  </button>
                ) : (
                  <Link 
                    href={`/${currentLang}/contact`} 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white text-lg md:text-xl font-medium px-12 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-200 uppercase tracking-wider"
                  >
                    {t.modal.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Кнопка під фото — тільки mobile */}
          <div className="md:hidden flex justify-center py-8 bg-white">
            {onOrderClick ? (
              <button 
                onClick={onOrderClick} 
                className="inline-flex items-center justify-center bg-black border-2 border-black text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-200 uppercase tracking-wider"
              >
                {t.modal.title}
              </button>
            ) : (
              <Link 
                href={`/${currentLang}/contact`} 
                className="inline-flex items-center justify-center bg-black border-2 border-black text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-200 uppercase tracking-wider"
              >
                {t.modal.title}
              </Link>
            )}
          </div>
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

