'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { Instagram, Send } from 'lucide-react';

export default function BlogPage() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [lang, setLang] = useState<Language>(validLang);

  const t = translations[lang];

  useEffect(() => {
    if (langParam && langParam !== lang && ['uk', 'en', 'pl', 'ru'].includes(langParam)) {
      setLang(langParam as Language);
    }
  }, [langParam, lang]);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    checkScroll();
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      checkScroll();
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const [heroRef, isHeroVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [channelsRef, isChannelsVisible] = useScrollAnimation();
  const [leftRef, isLeftVisible] = useScrollAnimation();
  const [rightRef, isRightVisible] = useScrollAnimation();

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.blog?.title || 'Блог', url: `/${lang}/blog` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        
        {/* Hero Section в стилі послуг */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/glass-items-business-modern-office.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className={`relative z-10 max-w-4xl mx-auto px-6 py-32 scroll-animate-up ${isHeroVisible ? 'animate' : ''}`} ref={heroRef}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              {t.blog?.title || 'Блог'}
              <br />
              <span className="italic font-normal">{t.blog?.subtitle || 'Дізнавайтеся про останні новини, кейси та корисні поради від нашої команди'}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-semibold">
              {t.blog?.description || 'У нашому блозі ми ділимося досвідом розробки, кейсами успішних проєктів, корисними порадами та останніми новинами зі світу технологій. Слідкуйте за нами в соціальних мережах, щоб не пропустити нові публікації!'}
            </p>
          </div>
        </section>

        {/* Опис блогу */}
        <section className="pt-32 pb-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className={`mb-20 scroll-animate-up ${isContentVisible ? 'animate' : ''}`} ref={contentRef}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-black mr-4"></div>
                <h1 className="text-sm font-black text-black tracking-wider uppercase">
                  {t.blog?.descriptionTitle || 'Наш блог'}
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed max-w-4xl">
                {t.blog?.description || 'У нашому блозі ми ділимося досвідом розробки, кейсами успішних проєктів, корисними порадами та останніми новинами зі світу технологій. Слідкуйте за нами в соціальних мережах, щоб не пропустити нові публікації!'}
              </p>
            </div>

            {/* Двоколонкова секція з інформацією */}
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-24">
              <div className={`scroll-animate-left ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-px bg-black mr-4"></div>
                  <h2 className="text-sm font-black text-black tracking-wider uppercase">
                    {t.blog?.contentTitle || 'Що ми публікуємо'}
                  </h2>
                </div>
                <ul className="space-y-5">
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.content1 || 'Кейси успішних проєктів та їх реалізація'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.content2 || 'Корисні поради з розробки та автоматизації'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.content3 || 'Останні новини зі світу технологій'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.content4 || 'Аналітика та досвід роботи з різними інструментами'}
                  </li>
                </ul>
              </div>

              <div className={`scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-px bg-black mr-4"></div>
                  <h2 className="text-sm font-black text-black tracking-wider uppercase">
                    {t.blog?.benefitsTitle || 'Чому варто читати'}
                  </h2>
                </div>
                <ul className="space-y-5">
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.benefit1 || 'Дізнаєтеся про найкращі практики розробки'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.benefit2 || 'Отримаєте практичні інсайти для вашого бізнесу'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.benefit3 || 'Будете в курсі останніх трендів та інновацій'}
                  </li>
                  <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                    <span className="text-black font-black mr-3 text-xl">•</span>
                    {t.blog?.benefit4 || 'Навчитеся на реальних прикладах та кейсах'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Посилання на соціальні мережі */}
        <section className="py-24 px-6 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className={`mb-20 scroll-animate-up ${isChannelsVisible ? 'animate' : ''}`} ref={channelsRef}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider uppercase">
                  {t.blog?.channelsTitle || 'Слідкуйте за нами'}
                </h2>
              </div>
              <p className="text-xl text-gray-800 font-semibold leading-relaxed max-w-4xl mb-16">
                {t.blog?.channelsSubtitle || 'Підписуйтесь на наші канали, щоб отримувати найсвіжіші новини та корисний контент'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
              {/* Instagram */}
              <a
                href={t.blog?.instagramUrl || 'https://www.instagram.com/telebotsnowayrm/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-200 hover:border-black transition-all duration-300 p-8 lg:p-12"
              >
                <div className="flex items-start mb-6">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-black" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black mb-2">
                      {t.blog?.instagramTitle || 'Instagram'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.blog?.instagramDesc || 'Візуальний контент, кейси проєктів та закулісся нашої роботи'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-black font-black group-hover:translate-x-2 transition-transform duration-300">
                  <span className="tracking-wider text-sm">{t.blog?.followButton || 'Підписатися'}</span>
                  <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                    <div className="w-8 h-px bg-black"></div>
                  </div>
                </div>
              </a>

              {/* Telegram Channel */}
              <a
                href={t.blog?.telegramUrl || 'https://t.me/telebotsnowayrmchannel'}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-200 hover:border-black transition-all duration-300 p-8 lg:p-12"
              >
                <div className="flex items-start mb-6">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Send className="w-8 h-8 text-black" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black mb-2">
                      {t.blog?.telegramTitle || 'Telegram канал'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.blog?.telegramDesc || 'Аналітика, поради з розробки та новини зі світу технологій'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-black font-black group-hover:translate-x-2 transition-transform duration-300">
                  <span className="tracking-wider text-sm">{t.blog?.followButton || 'Підписатися'}</span>
                  <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                    <div className="w-8 h-px bg-black"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>
    </>
  );
}
