'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { cases } from '@/components/cases';
import Image from 'next/image';

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
  const [mediaImageRef, isMediaImageVisible] = useScrollAnimation();
  const [mediaContentRef, isMediaContentVisible] = useScrollAnimation();
  const [quoteRef, isQuoteVisible] = useScrollAnimation();
  const [faqRef, isFaqVisible] = useScrollAnimation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
          { name: t.nav.about, url: `/${lang}` },
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
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
        <main id="main-content">
      {/* Чорний банер з цитатою */}
      <div className="bg-black text-white py-24 md:py-32 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-5xl mx-auto scroll-animate-up ${isQuoteVisible ? 'animate' : ''}`} ref={quoteRef}>
            <blockquote>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed italic">
                <span className="text-5xl md:text-7xl lg:text-8xl text-white/30 font-black leading-none" style={{ fontFamily: 'serif' }}>&ldquo;</span>
                {t.about.quote}
                <span className="text-5xl md:text-7xl lg:text-8xl text-white/30 font-black leading-none" style={{ fontFamily: 'serif' }}>&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Триколонковий блок під цитатою */}
      <section className="py-20 md:py-28 lg:py-36 px-6 md:px-10 lg:px-16 bg-white relative">
        <div className="max-w-[1600px] mx-auto">
          {/* Великий заголовок */}
          <div className="mb-20 md:mb-28 lg:mb-32">
            <h1 className="text-[clamp(3rem,10vw,10rem)] font-black text-black leading-[0.88] tracking-[-0.02em] uppercase">
              {t.about.title}
            </h1>
          </div>

          {/* Сітка з трьома колонками */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-24">
          {/* Ліва колонка — Наша робота */}
            <div className="flex flex-col">
              <h2 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-6">
              {t.about.ourWork}
            </h2>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[1.75] font-normal mb-8 flex-grow">
              {t.about.ourWorkDesc}
            </p>
            <Link
              href={`/${lang}#portfolio`}
                className="inline-flex items-center text-[13px] md:text-[14px] font-medium text-black hover:opacity-60 transition-opacity duration-200 uppercase tracking-[0.1em]"
            >
                <span className="mr-2">—</span>
              {t.about.portfolio}
            </Link>
          </div>

          {/* Середня колонка — Кейси розробок */}
            <div className="flex flex-col">
              <h2 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-6">
                {t.about.portfolio}
              </h2>
              <div className="space-y-4 flex-grow">
            {(() => {
              const casesData = cases[validLang] || cases.uk;
              const allCaseIds = Object.keys(casesData);
              const last3CaseIds = allCaseIds.slice(-3);
              
              const imageMap: { [key: string]: string } = {
                'dr-tolstikova-bot': '/dr-tolstikova-bot.jpg',
                'nieznany-piekarz': '/Group 1000007023.png',
                'nutritionist-bot': '/nutritionist-bot.jpg',
                'cats-fresh': '/cats-fresh-project.jpg',
                'tripvibe': '/tripvibe.png',
                'v12-auto': '/v12-auto.png',
                'vsk-technology': '/vsk-technology.png',
                'chars-kyiv': '/screenshot-2025-11-03-01-49-01.png',
                'style-chat-vakhula': '/image-2025-11-03-02-12-02.jpg',
                'tron-energy-bot': '/image-2025-10-13-22-39-19.jpg',
                'offer-dpuchkov': '/image-2025-10-04-04-56-47.jpg',
                'alexandraaleksiuk': '/image-2025-10-04-04-56-05.jpg',
                'landscaper-academy': '/screenshot-2025-12-20-03-02-08.png'
              };

              return last3CaseIds.map((caseId, index) => {
                const caseData = (casesData as any)[caseId];
                const image = imageMap[caseId] || caseData?.mainImage || '/dr-tolstikova-bot.jpg';
                return (
                  <Link
                    key={caseId}
                    href={`/${lang}/portfolio/${caseId}`}
                        className="group block relative bg-gray-100 overflow-hidden hover:opacity-90 transition-opacity duration-200"
                  >
                        <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={image}
                        alt={caseData?.title || 'Project'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                );
              });
            })()}
              </div>
          </div>

          {/* Права колонка — Послуги */}
            <div className="flex flex-col">
              <h2 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-6">
              {t.about.services}
            </h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-black mb-8 flex-grow">
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.chatbots}</span>
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.websites}</span>
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.parsers}</span>
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.ecommerce}</span>
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.ai}</span>
                <span className="text-[11px] md:text-[12px] leading-[1.8] font-normal uppercase tracking-[0.2em]">{t.services.automation}</span>
            </div>
            <Link
              href={`/${lang}/services`}
                className="inline-flex items-center text-[13px] md:text-[14px] font-medium text-black hover:opacity-60 transition-opacity duration-200 uppercase tracking-[0.1em]"
            >
                <span className="mr-2">—</span>
              {t.about.services}
            </Link>
          </div>
        </div>
        </div>
      </section>
      
      <section className="pt-20 md:pt-28 pb-32 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className={`mb-24 md:mb-32 lg:mb-40 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.3em] uppercase mb-8">
              {t.about.pageTitle}
            </h2>
            <p className={`text-[16px] md:text-[18px] lg:text-[20px] text-black font-normal leading-[1.75] max-w-4xl scroll-animate-up ${isIntroVisible ? 'animate' : ''}`} ref={introRef}>
              {t.about.pageIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 mb-32 lg:mb-40">
            <div className={`scroll-animate-left ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
              <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.3em] uppercase mb-6">
                {t.about.weDevelop}
              </h2>
              <ul className="space-y-5">
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.telegramBots}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.chatbots}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.websites}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.parsers}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.funnels}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.leadGen}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.ecommerce}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.weDevelopServices.ai}
                </li>
              </ul>
            </div>

            <div className={`scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
              <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.3em] uppercase mb-6">
                {t.about.whyChoose}
              </h2>
              <ul className="space-y-5">
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.experience}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.crm}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.stores}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.payments}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.speed}
                </li>
                <li className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                  {t.about.advantages.individual}
                </li>
              </ul>
            </div>
          </div>

          {/* Чорна секція з медіа */}
          <div className="mb-20 lg:mb-32" ref={mediaRef}>
            <div className="grid lg:grid-cols-2 bg-black">
              <div className={`relative h-[500px] lg:h-[600px] scroll-animate-left ${isMediaImageVisible ? 'animate' : ''}`} ref={mediaImageRef}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                  alt="Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-12 md:p-16 lg:p-24 flex flex-col justify-center text-white scroll-animate-right ${isMediaContentVisible ? 'animate' : ''}`} ref={mediaContentRef}>
                <h2 className="text-[10px] md:text-[11px] font-bold text-white tracking-[0.3em] uppercase mb-8">
                  {t.about.whyChoose}
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-300 font-normal leading-[1.75] mb-12">
                  {t.about.pageIntro}
                </p>
                <div className="space-y-8">
                  <div className="pb-8 border-b border-gray-700">
                    <div className="text-[clamp(3rem,6vw,5rem)] font-black text-white mb-4 leading-none">
                      200+
                    </div>
                    <p className="text-gray-400 font-normal text-[16px] md:text-[18px]">{t.about.stats.projects}</p>
                  </div>
                  <div className="pb-8 border-b border-gray-700">
                    <div className="text-[clamp(3rem,6vw,5rem)] font-black text-white mb-4 leading-none">
                      4
                    </div>
                    <p className="text-gray-400 font-normal text-[16px] md:text-[18px]">{t.about.stats.years}</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-300 font-normal leading-[1.75] mb-4">
                      {t.about.stats.support}
                    </p>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-black text-white">
                      {t.about.stats.cta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mb-32 lg:mb-40 scroll-animate-up ${isProcessVisible ? 'animate' : ''}`} ref={processRef}>
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.3em] uppercase mb-12">
              {t.about.howItWorks}
            </h2>
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
              <div className="space-y-8">
                <div className="pb-8 border-b border-gray-300">
                  <p className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                    {t.about.process.step1}
                  </p>
                </div>
                <div className="pb-8 border-b border-gray-300">
                  <p className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                    {t.about.process.step2}
                  </p>
                </div>
                <div className="pb-8 border-b border-gray-300">
                  <p className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                    {t.about.process.step3}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="pb-8 border-b border-gray-300">
                  <p className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                    {t.about.process.step4}
                  </p>
                </div>
                <div className="pb-8 border-b border-gray-300">
                  <p className="text-black font-normal leading-[1.75] text-[16px] md:text-[18px] lg:text-[20px]">
                    {t.about.process.step5}
                  </p>
                </div>
                <div className="relative h-[350px] lg:h-[450px] mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070"
                    alt="Process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Секція Послуги */}
          <div className={`mb-32 lg:mb-40 scroll-animate-up ${isServicesVisible ? 'animate' : ''}`} ref={servicesRef}>
            <h2 className="text-[10px] md:text-[11px] font-bold text-black tracking-[0.3em] uppercase mb-8">
              {t.about.services}
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-black font-normal leading-[1.75] mb-16 max-w-4xl">
              {t.about.servicesDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">
              <div className="p-8 md:p-10">
                <h3 className="text-[18px] md:text-[20px] font-normal text-black mb-6">
                  {t.services.websites}
                </h3>
                <p className="text-[16px] md:text-[18px] text-black leading-[1.75] mb-8">
                  {t.services.websitesDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-[13px] md:text-[14px] text-black font-medium hover:opacity-60 transition-opacity duration-200 uppercase tracking-[0.1em]"
                >
                  <span className="mr-2">—</span>
                  <span>{t.services.learnMore}</span>
                </Link>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-[18px] md:text-[20px] font-normal text-black mb-6">
                  {t.services.chatbots}
                </h3>
                <p className="text-[16px] md:text-[18px] text-black leading-[1.75] mb-8">
                  {t.services.chatbotsDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-[13px] md:text-[14px] text-black font-medium hover:opacity-60 transition-opacity duration-200 uppercase tracking-[0.1em]"
                >
                  <span className="mr-2">—</span>
                  <span>{t.services.learnMore}</span>
                </Link>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-[18px] md:text-[20px] font-normal text-black mb-6">
                  {t.services.parsers}
                </h3>
                <p className="text-[16px] md:text-[18px] text-black leading-[1.75] mb-8">
                  {t.services.parsersDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-[13px] md:text-[14px] text-black font-medium hover:opacity-60 transition-opacity duration-200 uppercase tracking-[0.1em]"
                >
                  <span className="mr-2">—</span>
                  <span>{t.services.learnMore}</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 hover:opacity-80 transition-opacity duration-200 rounded-full"
              >
                <span className="text-[14px] md:text-[15px] font-medium">{t.services.mainTitle}</span>
              </Link>
            </div>
          </div>

          <div className={`flex flex-col md:flex-row gap-6 justify-center items-center pt-16 border-t border-gray-200 scroll-animate-up ${isButtonsVisible ? 'animate' : ''}`} ref={buttonsRef}>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center bg-black text-white px-10 py-4 hover:opacity-80 transition-opacity duration-200 rounded-full uppercase tracking-[0.1em]"
            >
              <span className="text-[12px] md:text-[13px] font-medium">{t.about.getInTouch}</span>
            </Link>
            <a
              href="https://t.me/telebotsnowayrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-10 py-4 hover:opacity-80 transition-opacity duration-200 rounded-full uppercase tracking-[0.1em]"
            >
              <span className="text-[12px] md:text-[13px] font-medium">{t.contact.telegram}</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=380960908006&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-10 py-4 hover:opacity-80 transition-opacity duration-200 rounded-full uppercase tracking-[0.1em]"
            >
              <span className="text-[12px] md:text-[13px] font-medium">{t.contact.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Секція FAQ */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className={`mb-12 md:mb-16 scroll-animate-up ${isFaqVisible ? 'animate' : ''}`} ref={faqRef}>
            <h2 className="text-[10px] md:text-[11px] font-bold text-white tracking-[0.3em] uppercase mb-12">
              {t.about.faq?.title || 'Часті запитання'}
            </h2>
            
            <div className="space-y-0">
              {t.about.faq?.items?.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="border-t border-white/20 last:border-b">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                  >
                    <span className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal pr-8">
                      {item.question}
                    </span>
                    <span className="text-white text-2xl md:text-3xl font-light flex-shrink-0 transition-transform duration-300" style={{ transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 md:pb-8 pr-12">
                      <p className="text-gray-300 text-[15px] md:text-[17px] lg:text-[19px] font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        </main>
        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>
    </>
  );
}

