'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { useScrollAnimation } from '@/components/useScrollAnimation';

function CapabilityCard({ text, index, isParentVisible }: { text: string; index: number; isParentVisible: boolean }) {
  return (
    <div 
      className={`text-center p-8 border-2 border-gray-200 rounded-md hover:border-black hover:bg-gray-50 transition-all scroll-animate-scale ${isParentVisible ? 'animate' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <p className="text-lg font-black text-black">{text}</p>
    </div>
  );
}

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
  const [capabilitiesRef, isCapabilitiesVisible] = useScrollAnimation();
  const [servicesRef, isServicesVisible] = useScrollAnimation();
  const [buttonsRef, isButtonsVisible] = useScrollAnimation();
  const [mediaRef, isMediaVisible] = useScrollAnimation();
  const [mediaImageRef, isMediaImageVisible] = useScrollAnimation();
  const [mediaContentRef, isMediaContentVisible] = useScrollAnimation();
  const [quoteRef, isQuoteVisible] = useScrollAnimation();

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.about, url: `/${lang}` },
          { name: t.about.pageTitle, url: `/${lang}/about` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
      
      {/* Чорний банер з цитатою */}
      <div className="bg-black text-white py-24 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-5xl mx-auto scroll-animate-up ${isQuoteVisible ? 'animate' : ''}`} ref={quoteRef}>
            <blockquote className="relative pl-12 md:pl-16">
              <span className="absolute left-0 top-0 text-5xl md:text-7xl lg:text-8xl text-white/30 font-black leading-none" style={{ fontFamily: 'serif' }}>
                &ldquo;
              </span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed relative z-10 italic pl-4">
                {t.about.quote}
              </p>
              <span className="inline-block text-5xl md:text-7xl lg:text-8xl text-white/30 font-black leading-none mt-2" style={{ fontFamily: 'serif' }}>
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </div>
      
      <section className="pt-32 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-20 scroll-animate-up ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-black mr-4"></div>
              <h1 className="text-sm font-black text-black tracking-wider uppercase">
                {t.about.pageTitle}
              </h1>
            </div>
            <p className={`text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed max-w-4xl scroll-animate-up ${isIntroVisible ? 'animate' : ''}`} ref={introRef}>
              {t.about.pageIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-24">
            <div className={`scroll-animate-left ${isLeftVisible ? 'animate' : ''}`} ref={leftRef}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider uppercase">
                  {t.about.weDevelop}
                </h2>
              </div>
              <ul className="space-y-5">
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.telegramBots}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.chatbots}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.websites}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.parsers}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.funnels}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.leadGen}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.ecommerce}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.weDevelopServices.ai}
                </li>
              </ul>
            </div>

            <div className={`scroll-animate-right ${isRightVisible ? 'animate' : ''}`} ref={rightRef}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-black mr-4"></div>
                <h2 className="text-sm font-black text-black tracking-wider uppercase">
                  {t.about.whyChoose}
                </h2>
              </div>
              <ul className="space-y-5">
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.experience}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.crm}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.stores}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.payments}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.speed}
                </li>
                <li className="text-gray-800 font-semibold leading-relaxed text-lg">
                  <span className="text-black font-black mr-3 text-xl">•</span>
                  {t.about.advantages.individual}
                </li>
              </ul>
            </div>
          </div>

          {/* Чорна секція з медіа */}
          <div className="mb-20" ref={mediaRef}>
            <div className="grid lg:grid-cols-2 bg-black">
              <div className={`relative h-[500px] lg:h-[600px] scroll-animate-left ${isMediaImageVisible ? 'animate' : ''}`} ref={mediaImageRef}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                  alt="Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-12 lg:p-24 flex flex-col justify-center text-white scroll-animate-right ${isMediaContentVisible ? 'animate' : ''}`} ref={mediaContentRef}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-px bg-white mr-4"></div>
                  <h2 className="text-sm font-black text-white tracking-wider uppercase">
                    {t.about.whyChoose}
                  </h2>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed mb-12">
                  {t.about.pageIntro}
                </p>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-700">
                    <div className="text-5xl md:text-6xl font-black text-white mb-3">
                      200+
                    </div>
                    <p className="text-gray-400 font-semibold text-lg">{t.about.stats.projects}</p>
                  </div>
                  <div className="pb-6 border-b border-gray-700">
                    <div className="text-5xl md:text-6xl font-black text-white mb-3">
                      4
                    </div>
                    <p className="text-gray-400 font-semibold text-lg">{t.about.stats.years}</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-300 font-semibold leading-relaxed mb-4">
                      {t.about.stats.support}
                    </p>
                    <p className="text-xl font-black text-white">
                      {t.about.stats.cta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mb-24 scroll-animate-up ${isProcessVisible ? 'animate' : ''}`} ref={processRef}>
            <div className="flex items-center mb-10">
              <div className="w-16 h-px bg-black mr-4"></div>
              <h2 className="text-sm font-black text-black tracking-wider uppercase">
                {t.about.howItWorks}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-300">
                  <p className="text-gray-800 font-semibold leading-relaxed text-lg md:text-xl">
                    {t.about.process.step1}
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-300">
                  <p className="text-gray-800 font-semibold leading-relaxed text-lg md:text-xl">
                    {t.about.process.step2}
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-300">
                  <p className="text-gray-800 font-semibold leading-relaxed text-lg md:text-xl">
                    {t.about.process.step3}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-300">
                  <p className="text-gray-800 font-semibold leading-relaxed text-lg md:text-xl">
                    {t.about.process.step4}
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-300">
                  <p className="text-gray-800 font-semibold leading-relaxed text-lg md:text-xl">
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

          <div className="mb-20" ref={capabilitiesRef}>
            <div className={`flex items-center mb-10 scroll-animate-up ${isCapabilitiesVisible ? 'animate' : ''}`}>
              <div className="w-16 h-px bg-black mr-4"></div>
              <h2 className="text-sm font-black text-black tracking-wider uppercase">
                {t.about.whatWeCanDo}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                t.about.capabilities.telegramBot,
                t.about.capabilities.website,
                t.about.capabilities.chatbot,
                t.about.capabilities.ecommerce,
                t.about.capabilities.parser
              ].map((capability, index) => (
                <CapabilityCard 
                  key={index} 
                  text={capability} 
                  index={index}
                  isParentVisible={isCapabilitiesVisible}
                />
              ))}
            </div>
          </div>

          {/* Секція Послуги */}
          <div className={`mb-20 scroll-animate-up ${isServicesVisible ? 'animate' : ''}`} ref={servicesRef}>
            <div className="flex items-center mb-10">
              <div className="w-16 h-px bg-black mr-4"></div>
              <h2 className="text-sm font-black text-black tracking-wider uppercase">
                {t.about.services}
              </h2>
            </div>
            <p className="text-xl text-gray-600 font-semibold leading-relaxed mb-12 max-w-4xl">
              {t.about.servicesDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all duration-300">
                <h3 className="text-2xl font-black text-black mb-4">
                  {t.services.websites}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.services.websitesDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-black font-black hover:text-gray-600 transition-colors"
                >
                  <span className="tracking-wider">{t.services.learnMore}</span>
                  <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                    <div className="w-8 h-px bg-black"></div>
                  </div>
                </Link>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all duration-300">
                <h3 className="text-2xl font-black text-black mb-4">
                  {t.services.chatbots}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.services.chatbotsDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-black font-black hover:text-gray-600 transition-colors"
                >
                  <span className="tracking-wider">{t.services.learnMore}</span>
                  <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                    <div className="w-8 h-px bg-black"></div>
                  </div>
                </Link>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all duration-300">
                <h3 className="text-2xl font-black text-black mb-4">
                  {t.services.parsers}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.services.parsersDesc}
                </p>
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center text-black font-black hover:text-gray-600 transition-colors"
                >
                  <span className="tracking-wider">{t.services.learnMore}</span>
                  <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                    <div className="w-8 h-px bg-black"></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                href={`/${lang}/services`}
                className="group inline-flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 rounded-md"
              >
                <span className="tracking-wider font-black">{t.services.mainTitle}</span>
                <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                  <div className="w-8 h-px bg-white"></div>
                </div>
              </Link>
            </div>
          </div>

          <div className={`flex flex-col md:flex-row gap-4 justify-center items-center pt-12 border-t border-gray-200 scroll-animate-up ${isButtonsVisible ? 'animate' : ''}`} ref={buttonsRef}>
            <Link
              href={`/${lang}/contact`}
              className="group flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 rounded-md"
            >
              <span className="tracking-wider font-black">{t.about.getInTouch}</span>
              <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                <div className="w-8 h-px bg-white"></div>
              </div>
            </Link>
            <a
              href="https://t.me/telebotsnowayrm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 rounded-md"
            >
              <span className="tracking-wider font-black">{t.contact.telegram}</span>
              <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                <div className="w-8 h-px bg-white"></div>
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=380960908006&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all duration-300 rounded-md"
            >
              <span className="tracking-wider font-black">{t.contact.whatsapp}</span>
              <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
                <div className="w-8 h-px bg-white"></div>
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

