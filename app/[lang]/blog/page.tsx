'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { Instagram, Send, ArrowRight } from 'lucide-react';

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
        <section className="relative h-screen flex items-center pt-24 overflow-hidden">
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
        <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className={`mb-20 text-center scroll-animate-up ${isChannelsVisible ? 'animate' : ''}`} ref={channelsRef}>
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider uppercase">
                  {t.blog?.channelsTitle || 'Слідкуйте за нами'}
                </h2>
              </div>
              <p className="text-2xl md:text-3xl text-gray-900 font-black leading-tight max-w-4xl mx-auto mb-4">
                {t.blog?.channelsSubtitle || 'Підписуйтесь на наші канали, щоб отримувати найсвіжіші новини та корисний контент'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Instagram */}
              <a
                href={t.blog?.instagramUrl || 'https://www.instagram.com/telebotsnowayrm/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 p-10 lg:p-14 overflow-hidden rounded-3xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-8 -translate-y-8 rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="flex flex-col items-center mb-8">
                    <div className="mb-6 p-5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Instagram className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-black text-black mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {t.blog?.instagramTitle || 'Instagram'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      {t.blog?.instagramDesc || 'Візуальний контент, кейси проєктів та закулісся нашої роботи'}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-black font-black group-hover:translate-x-3 transition-transform duration-300 mt-6">
                    <span className="tracking-wider text-sm uppercase">{t.blog?.followButton || 'Підписатися'}</span>
                    <div className="w-0 group-hover:w-12 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-4">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>

              {/* Telegram Channel */}
              <a
                href={t.blog?.telegramUrl || 'https://t.me/telebotsnowayrmchannel'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 p-10 lg:p-14 overflow-hidden rounded-3xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-8 -translate-y-8 rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="flex flex-col items-center mb-8">
                    <div className="mb-6 p-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Send className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-black text-black mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                      {t.blog?.telegramTitle || 'Telegram канал'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      {t.blog?.telegramDesc || 'Аналітика, поради з розробки та новини зі світу технологій'}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-black font-black group-hover:translate-x-3 transition-transform duration-300 mt-6">
                    <span className="tracking-wider text-sm uppercase">{t.blog?.followButton || 'Підписатися'}</span>
                    <div className="w-0 group-hover:w-12 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-4">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
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
