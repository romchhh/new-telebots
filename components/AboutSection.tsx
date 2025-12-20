'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useScrollAnimation } from './useScrollAnimation';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
}

export default function AboutSection({ t }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk');
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [leftRef, isLeftVisible] = useScrollAnimation();
  const [rightRef, isRightVisible] = useScrollAnimation();
  
  return (
    <section id="about" className="py-32 px-6 bg-white border-t border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Великий заголовок зліва */}
          <div className={`scroll-animate-left ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
            <h2 className="text-5xl lg:text-7xl font-black text-black leading-tight">
              {t.about.title}
            </h2>
          </div>

          {/* Дві колонки справа */}
          <div className={`flex flex-col gap-16 lg:gap-20 scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
            {/* Our Work */}
            <div className={`scroll-animate-up ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
              <h3 className="text-sm font-black text-black tracking-wider mb-4">
                {t.about.ourWork}
              </h3>
              <p className="text-gray-800 font-semibold leading-relaxed mb-6 text-base">
                {t.about.ourWorkDesc}
              </p>
              <Link href={`/${currentLang}#portfolio`} className="group inline-flex items-center text-black font-semibold hover:text-gray-600 transition">
                <div className="w-8 h-px bg-black mr-3 group-hover:w-12 transition-all"></div>
                {t.about.portfolio}
              </Link>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-black text-black tracking-wider mb-4">
                {t.about.services}
              </h3>
              <p className="text-gray-800 font-semibold leading-relaxed mb-6 text-base">
                {t.about.servicesDesc}
              </p>
              <Link href={`/${currentLang}/services`} className="group inline-flex items-center text-black font-semibold hover:text-gray-600 transition">
                <div className="w-8 h-px bg-black mr-3 group-hover:w-12 transition-all"></div>
                {t.about.services}
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-black text-black tracking-wider mb-4">
                {t.about.contact}
              </h3>
              <p className="text-gray-800 font-semibold leading-relaxed mb-6 text-base">
                {t.about.contactDesc}
              </p>
              <Link href={`/${currentLang}/contact`} className="group inline-flex items-center text-black font-black hover:text-gray-600 transition">
                <div className="w-8 h-px bg-black mr-3 group-hover:w-12 transition-all"></div>
                {t.about.getInTouch}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

