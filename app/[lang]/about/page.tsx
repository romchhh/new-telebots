'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import SuccessMessage from '@/components/SuccessMessage';
import StructuredData from '@/components/StructuredData';
import { sendToTelegram } from '@/lib/telegram';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';
import { legal } from '@/lib/legal';

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
  const [faqRef, isFaqVisible] = useScrollAnimation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

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
      {/* Hero з фото та цитатою */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden -mt-16 pt-16">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: 'url(/about-hero-macbook.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 backdrop-blur-[2px]" style={{ WebkitBackdropFilter: 'blur(2px)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
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
      <section className="py-16 md:py-24 lg:py-28 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20 md:mb-28 lg:mb-36 min-w-0 overflow-hidden">
            <h1 className="text-[clamp(3rem,12vw,6rem)] sm:text-[clamp(2.5rem,9vw,5rem)] md:text-[clamp(3.5rem,9.5vw,9.5rem)] font-black text-black leading-[0.88] tracking-[-0.02em] uppercase break-words max-w-full">
              {t.about.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Фото з текстом і кнопкою */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative w-full aspect-[4031/2981]">
          <Image
            src="/about-hero.png"
            alt="TeleBots"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
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
              className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-[1.5] max-w-4xl md:max-w-5xl px-6 md:px-8 lg:px-12 tracking-[0.02em]"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '0 2px 20px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {t.about.ourWorkDesc}
            </p>
            {/* Кнопка на фото — тільки desktop */}
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center justify-center bg-transparent border-2 border-white text-white text-lg md:text-xl font-medium px-12 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-200 uppercase tracking-wider"
            >
              {t.modal.title}
            </button>
          </div>
        </div>
        
        {/* Кнопка під фото — тільки mobile */}
        <div className="md:hidden flex justify-center py-8 bg-white">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center bg-black border-2 border-black text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-white hover:text-black hover:border-black transition-colors duration-200 uppercase tracking-wider"
          >
            {t.modal.title}
          </button>
        </div>
      </div>
      
      <section className="py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 md:mb-20 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
            <p className="text-sm font-bold text-gray-500 tracking-[0.3em] uppercase mb-6">
              {t.about.pageTitle}
            </p>
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

      {/* Чорна секція Чому обирають нас? — на всю ширину, як на сторінці послуг */}
      <section className="w-full bg-black text-white py-20 md:py-24 lg:py-28 px-6 md:px-10 lg:px-16" ref={mediaRef}>
        <div className={`max-w-7xl mx-auto scroll-animate-up ${isMediaContentVisible ? 'animate' : ''}`} ref={mediaContentRef}>
          <h2 className="text-sm font-bold text-white/80 tracking-[0.3em] uppercase mb-6">
            {t.about.whyChoose}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-normal leading-[1.75] mb-16 max-w-4xl">
            {t.about.pageIntro}
          </p>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-none">
                200+
              </div>
              <p className="text-gray-400 font-normal text-lg md:text-xl">{t.about.stats.projects}</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-none">
                4
              </div>
              <p className="text-gray-400 font-normal text-lg md:text-xl">{t.about.stats.years}</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-gray-300 font-normal leading-[1.75]">
                {t.about.stats.support}
              </p>
            </div>
          </div>
          <div className="text-center pt-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              {t.about.stats.cta}
            </h3>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-32 px-6 md:px-10 lg:px-16 bg-white">
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

          {/* Секція Послуги */}
          <div className={`mb-20 lg:mb-28 scroll-animate-up ${isServicesVisible ? 'animate' : ''}`} ref={servicesRef}>
            <h2 className="text-sm font-bold text-black tracking-[0.3em] uppercase mb-6">
              {t.about.services}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-[1.7] mb-12 max-w-2xl">
              {t.about.servicesDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <Link href={`/${lang}/services`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
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
              <Link href={`/${lang}/services`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
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
              <Link href={`/${lang}/services`} className="block p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
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
              className="inline-flex items-center justify-center bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              {t.contact.telegram}
            </a>
            <a
              href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-10 py-5 hover:bg-gray-800 transition-colors rounded-full font-medium text-base md:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Секція FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className={`scroll-animate-up ${isFaqVisible ? 'animate' : ''}`} ref={faqRef}>
            <h2 className="text-sm font-bold text-white/80 tracking-[0.3em] uppercase mb-10">
              {t.about.faq?.title || 'Часті запитання'}
            </h2>
            
            <div className="space-y-0">
              {t.about.faq?.items?.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="border-t border-white/20 last:border-b">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                  >
                    <span className="text-white text-lg md:text-xl lg:text-2xl font-normal pr-8">
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
                      <p className="text-gray-300 text-base md:text-lg lg:text-xl font-normal leading-relaxed">
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

