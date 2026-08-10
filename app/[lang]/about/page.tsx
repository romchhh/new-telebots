'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { sendToTelegram } from '@/lib/telegram';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { legal } from '@/lib/legal';
import { SITE_PX, SITE_CONTAINER, SITE_INNER_WIDE } from '@/lib/siteLayout';
import AboutHeadline from '@/components/AboutHeadline';
import AboutServiceTeasers from '@/components/AboutServiceTeasers';
import FaqAccordion from '@/components/FaqAccordion';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function AboutPage() {
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

  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [introRef, isIntroVisible] = useScrollAnimation();
  const [leftRef, isLeftVisible] = useScrollAnimation();
  const [rightRef, isRightVisible] = useScrollAnimation();
  const [processRef, isProcessVisible] = useScrollAnimation();
  const [servicesRef, isServicesVisible] = useScrollAnimation();
  const [buttonsRef, isButtonsVisible] = useScrollAnimation();
  const [mediaRef, isMediaVisible] = useScrollAnimation();
  const [mediaContentRef, isMediaContentVisible] = useScrollAnimation();
  const [quoteRef, isQuoteVisible] = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = () => {
    setSelectedService(t.modal.title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };
  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({ name: data.name, phone: data.phone, request: data.request, service: selectedService });
    if (success) {
      closeModal();
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  const howToSteps = [
    { name: t.about.process.step1.split('.')[0], text: t.about.process.step1 },
    { name: t.about.process.step2.split('.')[0], text: t.about.process.step2 },
    { name: t.about.process.step3.split('.')[0], text: t.about.process.step3 },
    { name: t.about.process.step4.split('.')[0], text: t.about.process.step4 },
    { name: t.about.process.step5.split('.')[0], text: t.about.process.step5 },
  ];

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.brand, url: `/${lang}` },
          { name: t.about.pageTitle, url: `/${lang}/about` },
        ]}
      />
      <StructuredData
        type="howTo"
        howToSteps={howToSteps}
      />
      {t.about.faq?.items && t.about.faq.items.length > 0 && (
        <StructuredData type="faq" faqs={t.about.faq.items} />
      )}
      <div className="min-h-screen bg-white">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <Navigation
          isScrolled={isScrolled}
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />
        <main id="main-content">
      {/* Hero з фото та цитатою */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0">
          <Image
            src="/other/about-hero-macbook.jpg"
            alt="TeleBots — робоче місце команди розробки"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-[min(65vw,520px)] w-[min(65vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-3xl" aria-hidden />
        <div className={`relative z-10 py-24 md:py-32 ${SITE_CONTAINER}`}>
          <div className={`max-w-5xl mx-auto scroll-animate-up ${isQuoteVisible ? 'animate' : ''}`} ref={quoteRef}>
            <blockquote>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed italic text-white drop-shadow-lg">
                <span className="text-5xl md:text-7xl lg:text-8xl text-white/40 font-black leading-none" style={{ fontFamily: 'serif' }}>&ldquo;</span>
                {t.about.quote}
                <span className="text-5xl md:text-7xl lg:text-8xl text-white/40 font-black leading-none" style={{ fontFamily: 'serif' }}>&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Основний блок під цитатою */}
      <section className={`py-16 md:py-24 lg:py-28 bg-white ${SITE_PX}`}>
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20 md:mb-28 lg:mb-36 min-w-0">
            <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:justify-between md:gap-8 lg:gap-10 xl:gap-12">
              <div className="min-w-0 w-full flex-1 md:min-w-0 md:pr-4 lg:pr-8 xl:pr-10">
                <AboutHeadline headline={t.about.headline} />
              </div>
              <AboutServiceTeasers t={t} lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* CEO / засновник */}
      <section className={`border-t border-gray-100 bg-white pb-16 md:pb-24 ${SITE_PX}`} aria-labelledby="about-founder-name">
        <div className={`${SITE_INNER_WIDE}`}>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-zinc-100 md:mx-0 md:max-w-none">
              <Image
                src="/other/roman-fedoniuk.webp"
                alt={t.about.founder.imageAlt}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 90vw, 40vw"
                quality={80}
              />
            </div>
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                {t.about.founder.role}
              </p>
              <h2
                id="about-founder-name"
                className="mb-5 text-3xl font-black tracking-tight text-black md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t.about.founder.name}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-[1.65]">
                {t.about.founder.bio}
              </p>
              <div className="mt-8">
                <OrderCtaPill size="sm" label={t.modal.title} onClick={openModal} className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фото + сітка — як на головній (AboutSection): на фото stats.cta, ourWorkDesc у першій колонці */}
      <section className={`relative bg-white pb-20 md:pb-28 lg:pb-36 ${SITE_PX}`}>
        <div className={SITE_INNER_WIDE}>
          <div className="relative mb-6 overflow-hidden rounded-2xl md:mb-20">
            <div className="relative h-[200px] w-full sm:h-[220px] md:h-[240px] lg:h-[260px]">
              <Image
                src="/other/about-hero.png"
                alt="TeleBots"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
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
                  <OrderCtaPill
                    size="sm"
                    label={t.modal.title}
                    onClick={openModal}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 flex justify-center md:hidden">
            <OrderCtaPill
              size="md"
              label={t.modal.title}
              onClick={openModal}
              elevated
              className="w-full max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-14 lg:gap-24">
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
                {t.about.ourWork}
              </h2>
              <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
                {t.about.ourWorkDesc}
              </p>
              <Link
                href={`/${lang}#portfolio`}
                className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
              >
                {t.about.portfolio}
              </Link>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
                {t.about.services}
              </h2>
              <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
                {t.about.servicesDesc}
              </p>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
              >
                {t.about.services}
              </Link>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] sm:text-4xl lg:text-[2.75rem] font-black text-black uppercase tracking-[0.06em] leading-[1.1] mb-2 md:mb-3">
                {t.about.contact}
              </h2>
              <p className="text-[20px] md:text-[19px] lg:text-[21px] text-black leading-[1.65] font-normal mb-8 md:mb-9">
                {t.about.contactDesc}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center bg-white border-2 border-black text-black text-[17px] md:text-[16px] lg:text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit"
              >
                {t.about.getInTouch}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`py-20 md:py-28 lg:py-32 bg-gray-50 ${SITE_PX}`}>
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 md:mb-20 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
            <p className={`text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal leading-[1.6] max-w-3xl scroll-animate-up ${isIntroVisible ? 'animate' : ''}`} ref={introRef}>
              {t.about.pageIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div className={`scroll-animate-left ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
              <h2 className="text-sm font-bold text-black tracking-[0.3em] uppercase mb-8">
                {t.about.weDevelop}
              </h2>
              <ul className="space-y-4">
                {[
                  t.about.weDevelopServices.telegramBots,
                  t.about.weDevelopServices.chatbots,
                  t.about.weDevelopServices.websites,
                  t.about.weDevelopServices.parsers,
                  t.about.weDevelopServices.funnels,
                  t.about.weDevelopServices.leadGen,
                  t.about.weDevelopServices.ecommerce,
                  t.about.weDevelopServices.ai,
                  t.about.weDevelopServices.design,
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-lg md:text-xl leading-[1.7]">
                    <span className="text-black font-bold mt-1">—</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
              <h2 className="text-sm font-bold text-black tracking-[0.3em] uppercase mb-8">
                {t.about.whyChoose}
              </h2>
              <ul className="space-y-4">
                {[
                  t.about.advantages.experience,
                  t.about.advantages.designer,
                  t.about.advantages.crm,
                  t.about.advantages.stores,
                  t.about.advantages.payments,
                  t.about.advantages.speed,
                  t.about.advantages.individual,
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-lg md:text-xl leading-[1.7]">
                    <span className="text-black font-bold mt-1">—</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика — білий фон, як на головній */}
      <section className={`w-full border-y border-black/5 bg-white py-20 text-black md:py-24 lg:py-28 ${SITE_PX}`} ref={mediaRef}>
        <div className={`w-full scroll-animate-up ${isMediaContentVisible ? 'animate' : ''}`} ref={mediaContentRef}>
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            {t.about.whyChoose}
          </h2>
          <p className="mb-16 max-w-4xl text-xl font-normal leading-[1.75] text-gray-700 md:text-2xl lg:text-3xl">
            {t.about.pageIntro}
          </p>
          <div className="mb-16 grid gap-10 md:grid-cols-3 md:gap-12">
            <div>
              <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl lg:text-6xl">
                200+
              </div>
              <p className="text-lg font-normal text-gray-600 md:text-xl">{t.about.stats.projects}</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-black leading-none text-brand md:text-5xl lg:text-6xl">
                4
              </div>
              <p className="text-lg font-normal text-gray-600 md:text-xl">{t.about.stats.years}</p>
            </div>
            <div>
              <p className="text-xl font-normal leading-[1.75] text-gray-700 md:text-2xl">
                {t.about.stats.support}
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl pt-4 text-center">
            <p className="text-lg font-bold leading-relaxed text-black sm:text-xl md:text-2xl lg:text-3xl">
              {t.about.stats.cta}
            </p>
          </div>
        </div>
      </section>

      <section className={`pt-20 md:pt-28 pb-32 bg-white ${SITE_PX}`}>
        <div className="max-w-[1600px] mx-auto">
          <div className={`mb-20 lg:mb-28 scroll-animate-up ${isProcessVisible ? 'animate' : ''}`} ref={processRef}>
            <h2 className="text-sm font-bold text-black tracking-[0.3em] uppercase mb-12">
              {t.about.howItWorks}
            </h2>
            <div className="space-y-6">
              {[
                t.about.process.step1,
                t.about.process.step2,
                t.about.process.step3,
                t.about.process.step4,
                t.about.process.step5,
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-base font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-lg md:text-xl leading-[1.75] pt-1.5 group-hover:text-black transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Секція Що ми робимо? */}
          <div className={`mb-20 lg:mb-28 scroll-animate-up ${isServicesVisible ? 'animate' : ''}`} ref={servicesRef}>
            <h2 className="text-sm font-bold text-black tracking-[0.3em] uppercase mb-6">
              {t.about.services}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-[1.7] mb-12 max-w-2xl">
              {t.about.servicesDesc}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
              <Link href={`/${lang}/services/websites`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-800">
                  {t.services.websites}
                </h3>
                <p className="text-gray-600 text-lg leading-[1.65] mb-6 line-clamp-3">
                  {t.services.websitesDesc}
                </p>
                <span className="text-base font-medium text-black uppercase tracking-wider inline-flex items-center gap-2">
                  {t.services.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link href={`/${lang}/services/chatbots`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-800">
                  {t.services.chatbots}
                </h3>
                <p className="text-gray-600 text-lg leading-[1.65] mb-6 line-clamp-3">
                  {t.services.chatbotsDesc}
                </p>
                <span className="text-base font-medium text-black uppercase tracking-wider inline-flex items-center gap-2">
                  {t.services.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link href={`/${lang}/solutions/data-parsers`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-800">
                  {t.services.parsers}
                </h3>
                <p className="text-gray-600 text-lg leading-[1.65] mb-6 line-clamp-3">
                  {t.services.parsersDesc}
                </p>
                <span className="text-base font-medium text-black uppercase tracking-wider inline-flex items-center gap-2">
                  {t.services.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link href={`/${lang}/services/design`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-800">
                  {t.services.designService}
                </h3>
                <p className="text-gray-600 text-lg leading-[1.65] mb-6 line-clamp-3">
                  {t.services.designServiceDesc}
                </p>
                <span className="text-base font-medium text-black uppercase tracking-wider inline-flex items-center gap-2">
                  {t.services.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center justify-center bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg"
            >
              {t.services.mainTitle}
            </Link>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-20 scroll-animate-up ${isButtonsVisible ? 'animate' : ''}`} ref={buttonsRef}>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              {t.about.getInTouch}
            </Link>
            <a
              href="https://t.me/telebotsnowayrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              <FaTelegramPlane className="w-6 h-6 flex-shrink-0" aria-hidden />
              {t.contact.telegram}
            </a>
            <a
              href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              <FaWhatsapp className="w-6 h-6 flex-shrink-0" aria-hidden />
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {(t.about.faq?.items?.length ?? 0) > 0 ? (
        <FaqAccordion
          title={t.about.faq?.title || 'Часті запитання'}
          items={t.about.faq!.items}
          sectionClassName={SITE_PX}
        />
      ) : null}
        </main>
        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceName={selectedService}
        t={t}
        onSubmit={handleSubmit}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
    </>
  );
}

