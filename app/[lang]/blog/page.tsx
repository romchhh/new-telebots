'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { Instagram, Send } from 'lucide-react';

const sectionHeadingClass =
  'text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-wide leading-tight';
const sectionHeadingWhiteClass =
  'text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight';

const ctaButtonClass =
  'inline-flex items-center justify-center w-full max-w-sm mx-auto font-bold border border-white text-white px-10 py-3.5 md:px-12 md:py-4 uppercase hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg md:text-xl rounded-full';

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
  const [channelsRef, isChannelsVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [leftRef, isLeftVisible] = useScrollAnimation();
  const [rightRef, isRightVisible] = useScrollAnimation();

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.blog?.title || 'Соцмережі', url: `/${lang}/blog` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={() => {
            window.location.href = `/${lang}#main-content`;
          }}
        />

        {/* Hero — типографіка як у ServicesPassionSection */}
        <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden md:min-h-screen md:justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/other/blog-hero.jpg)',
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[3px]"
            style={{ WebkitBackdropFilter: 'blur(3px)' }}
          />
          <div className="relative z-10 w-full px-4 pb-10 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-0 lg:pb-24 lg:px-16">
            <div
              ref={heroRef}
              className={`mx-auto max-w-4xl text-center md:max-w-5xl lg:max-w-7xl scroll-animate-up ${isHeroVisible ? 'animate' : ''}`}
            >
              <h1
                className="mb-3 font-bold uppercase leading-[1.12] text-white sm:mb-4 sm:leading-[1.15] md:mb-5 text-[clamp(1.45rem,6.2vw,2.35rem)] sm:text-4xl md:text-5xl lg:text-6xl [letter-spacing:0.05em] sm:[letter-spacing:0.1em] md:[letter-spacing:0.12em]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {t.blog?.title || 'Соцмережі'}
              </h1>
              <p
                className="mb-4 font-normal leading-snug text-white sm:mb-5 md:mb-6 text-lg sm:text-xl md:text-2xl [letter-spacing:0.04em] sm:[letter-spacing:0.08em] md:[letter-spacing:0.1em]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {t.blog?.subtitle ||
                  'Дізнавайтеся про останні новини, кейси та корисні поради від нашої команди'}
              </p>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-lg md:text-xl md:leading-relaxed">
                {t.blog?.description ||
                  'У нашому блозі ми ділимося досвідом розробки, кейсами успішних проєктів, корисними порадами та останніми новинами зі світу технологій. Слідкуйте за нами в соціальних мережах, щоб не пропустити нові публікації!'}
              </p>
            </div>
          </div>
        </section>

        {/* Соцмережі — одразу під hero */}
        <section className="py-16 md:py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div
              className={`mb-12 md:mb-16 text-center scroll-animate-up ${isChannelsVisible ? 'animate' : ''}`}
              ref={channelsRef}
            >
              <h2 className={`${sectionHeadingWhiteClass} mb-6`} style={{ fontFamily: 'var(--font-montserrat)' }}>
                {t.blog?.channelsTitle || 'Слідкуйте за нами'}
              </h2>
              <p
                className="text-lg sm:text-xl md:text-2xl text-gray-300 font-normal leading-relaxed max-w-4xl mx-auto"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {t.blog?.channelsSubtitle ||
                  'Підписуйтесь на наші канали, щоб отримувати найсвіжіші новини та корисний контент'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              <a
                href={t.blog?.instagramUrl || 'https://www.instagram.com/telebotsnowayrm/'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center rounded-2xl border border-white/20 bg-black/40 p-8 md:p-10 transition-colors hover:border-white/40"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white">
                  <Instagram className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-2xl font-black text-white md:text-3xl">
                  {t.blog?.instagramTitle || 'Instagram'}
                </h3>
                <p className="mb-8 flex-1 text-base font-normal leading-relaxed text-gray-300 md:text-lg">
                  {t.blog?.instagramDesc || 'Візуальний контент, кейси проєктів та закулісся нашої роботи'}
                </p>
                <span className={ctaButtonClass}>{t.blog?.followButton || 'Підписатися'}</span>
              </a>

              <a
                href={t.blog?.telegramUrl || 'https://t.me/telebotsnowayrmchannel'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center rounded-2xl border border-white/20 bg-black/40 p-8 md:p-10 transition-colors hover:border-white/40"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white">
                  <Send className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-2xl font-black text-white md:text-3xl">
                  {t.blog?.telegramTitle || 'Telegram канал'}
                </h3>
                <p className="mb-8 flex-1 text-base font-normal leading-relaxed text-gray-300 md:text-lg">
                  {t.blog?.telegramDesc || 'Аналітика, поради з розробки та новини зі світу технологій'}
                </p>
                <span className={ctaButtonClass}>{t.blog?.followButton || 'Підписатися'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Опис + дві колонки */}
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className={`mb-16 md:mb-24 scroll-animate-up ${isContentVisible ? 'animate' : ''}`} ref={contentRef}>
              <h2 className={`${sectionHeadingClass} mb-8`} style={{ fontFamily: 'var(--font-montserrat)' }}>
                {t.blog?.descriptionTitle || 'Наші соцмережі'}
              </h2>
              <p className="max-w-4xl text-xl font-semibold leading-relaxed text-gray-800 md:text-2xl">
                {t.blog?.description ||
                  'У нашому блозі ми ділимося досвідом розробки, кейсами успішних проєктів, корисними порадами та останніми новинами зі світу технологій. Слідкуйте за нами в соціальних мережах, щоб не пропустити нові публікації!'}
              </p>
            </div>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
              <div className={`scroll-animate-left ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
                <h2 className={`${sectionHeadingClass} mb-8`} style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {t.blog?.contentTitle || 'Що ми публікуємо'}
                </h2>
                <ul className="space-y-5">
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.content1 || 'Кейси успішних проєктів та їх реалізація'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.content2 || 'Корисні поради з розробки та автоматизації'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.content3 || 'Останні новини зі світу технологій'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.content4 || 'Аналітика та досвід роботи з різними інструментами'}
                  </li>
                </ul>
              </div>

              <div className={`scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
                <h2 className={`${sectionHeadingClass} mb-8`} style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {t.blog?.benefitsTitle || 'Чому варто читати'}
                </h2>
                <ul className="space-y-5">
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.benefit1 || 'Дізнаєтеся про найкращі практики розробки'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.benefit2 || 'Отримаєте практичні інсайти для вашого бізнесу'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.benefit3 || 'Будете в курсі останніх трендів та інновацій'}
                  </li>
                  <li className="text-lg font-semibold leading-relaxed text-gray-800">
                    <span className="mr-3 text-xl font-black text-black">•</span>
                    {t.blog?.benefit4 || 'Навчитеся на реальних прикладах та кейсах'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>
    </>
  );
}
