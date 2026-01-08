'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function AboutSection({ t }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');

  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-36 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Великий заголовок - стиль як DESIGNING TOMORROW TODAY */}
        <div className="mb-20 md:mb-28 lg:mb-36">
          <h1 className="text-[clamp(3rem,10vw,10rem)] font-black text-black leading-[0.88] tracking-[-0.02em] uppercase">
            {t.about.title}
          </h1>
        </div>

        {/* Сітка з трьома колонками */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-20">
          {/* Ліва колонка - Our approach */}
          <div className="space-y-5">
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.ourWork}
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-black leading-[1.65] font-normal mb-8">
              {t.about.ourWorkDesc}
            </p>
            <Link 
              href={`/${currentLang}#portfolio`} 
              className="inline-flex items-center text-[13px] md:text-[14px] font-medium text-black hover:opacity-50 transition-opacity duration-200"
            >
              <span className="mr-2.5">—</span>
              <span>{t.about.portfolio}</span>
            </Link>
          </div>

          {/* Середня колонка - Послуги */}
          <div className="space-y-5">
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.services}
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-black leading-[1.65] font-normal mb-8">
              {t.about.servicesDesc}
            </p>
            <Link 
              href={`/${currentLang}/services`} 
              className="inline-flex items-center text-[13px] md:text-[14px] font-medium text-black hover:opacity-50 transition-opacity duration-200"
            >
              <span className="mr-2.5">—</span>
              <span>{t.about.services}</span>
            </Link>
          </div>

          {/* Права колонка - Контакти */}
          <div className="space-y-5">
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.2em] uppercase mb-6">
              {t.about.contact}
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] text-black leading-[1.65] font-normal mb-8">
              {t.about.contactDesc}
            </p>
            <Link 
              href={`/${currentLang}/contact`} 
              className="inline-flex items-center text-[13px] md:text-[14px] font-medium text-black hover:opacity-50 transition-opacity duration-200"
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

