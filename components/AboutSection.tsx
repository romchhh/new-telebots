'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function AboutSection({ t, onOrderClick }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');

  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Великий заголовок */}
        <div className="mb-20 md:mb-28 lg:mb-36 min-w-0 overflow-hidden">
          <h1 className="text-[clamp(3rem,12vw,6rem)] sm:text-[clamp(2.5rem,9vw,5rem)] md:text-[clamp(3.5rem,9.5vw,9.5rem)] font-black text-black leading-[0.88] tracking-[-0.02em] uppercase break-words max-w-full">
            {t.about.title}
          </h1>
        </div>

        {/* Фото з текстом та кнопкою — під заголовком */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mb-16 md:mb-20">
          <div className="relative w-full aspect-[1500/565]">
            <Image src="/iPhone 15 Pro.jpg" alt="TeleBots" fill className="object-contain" sizes="100vw" priority />
            <div className="absolute inset-0 backdrop-blur-md bg-black/15" />
            <div className="absolute inset-x-0 top-0 h-40 md:h-52 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="pt-10 md:pt-14">
                <p className="text-center text-white font-normal leading-relaxed text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl px-6 md:px-16 max-w-5xl mx-auto drop-shadow-2xl" style={{ letterSpacing: '0.2em', fontFamily: 'Montserrat, sans-serif' }}>
                  {t.about.ourWorkDesc}
                </p>
              </div>
              <div className="flex justify-center pb-10 md:pb-14">
                {onOrderClick ? (
                  <button onClick={onOrderClick} className="inline-flex items-center justify-center bg-black border-2 border-black text-white text-lg md:text-xl font-medium px-12 py-5 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-colors duration-200 uppercase tracking-wider">
                    {t.modal.title}
                  </button>
                ) : (
                  <Link href={`/${currentLang}/contact`} className="inline-flex items-center justify-center bg-black border-2 border-black text-white text-lg md:text-xl font-medium px-12 py-5 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-colors duration-200 uppercase tracking-wider">
                    {t.modal.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Сітка з трьома колонками */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-20">
          {/* Ліва колонка - Our approach */}
          <div className="space-y-5">
            <h2 className="text-[14px] md:text-[13px] lg:text-[14px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.ourWork}
            </h2>
            <p className="text-[18px] md:text-[17px] lg:text-[19px] text-black leading-[1.65] font-normal mb-8">
              {t.about.ourWorkDesc}
            </p>
            <Link 
              href={`/${currentLang}#portfolio`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[16px] md:text-[15px] lg:text-[16px] font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 w-fit"
            >
              <span className="mr-2.5">—</span>
              <span>{t.about.portfolio}</span>
            </Link>
          </div>

          {/* Середня колонка - Послуги */}
          <div className="space-y-5">
            <h2 className="text-[14px] md:text-[13px] lg:text-[14px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.services}
            </h2>
            <p className="text-[18px] md:text-[17px] lg:text-[19px] text-black leading-[1.65] font-normal mb-8">
              {t.about.servicesDesc}
            </p>
            <Link 
              href={`/${currentLang}/services`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[16px] md:text-[15px] lg:text-[16px] font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 w-fit"
            >
              <span className="mr-2.5">—</span>
              <span>{t.about.services}</span>
            </Link>
          </div>

          {/* Права колонка - Контакти */}
          <div className="space-y-5">
            <h2 className="text-[14px] md:text-[13px] lg:text-[14px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.contact}
            </h2>
            <p className="text-[18px] md:text-[17px] lg:text-[19px] text-black leading-[1.65] font-normal mb-8">
              {t.about.contactDesc}
            </p>
            <Link 
              href={`/${currentLang}/contact`} 
              className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[16px] md:text-[15px] lg:text-[16px] font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200 w-fit"
            >
              <span className="mr-2.5">—</span>
              <span>{t.about.getInTouch}</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

