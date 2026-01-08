'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { translations, Language } from '@/components/translations';
import { useState, useEffect } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const params = useParams();
  const router = useRouter();
  const langParam = params?.lang as string;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const quickLinks = [
    { href: `/${lang}`, label: lang === 'uk' ? 'Головна' : lang === 'en' ? 'Home' : lang === 'pl' ? 'Strona główna' : 'Главная' },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/portfolio`, label: t.nav.portfolio },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Анімований фон з градієнтом */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />
      
      {/* Плаваючі елементи */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <Navigation isScrolled={isScrolled} lang={lang} setLang={handleLangChange} t={t} currentLang={lang} />
      
      <section className="pt-32 pb-32 px-6 min-h-screen flex items-center relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ліва частина - 404 та текст */}
            <div className="text-center md:text-left">
              <div className="mb-8 relative inline-block">
                <h1 className="text-[12rem] md:text-[18rem] font-black text-white leading-none mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  404
                </h1>
                <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-center md:justify-start mb-6">
                  <div className="w-12 h-px bg-white/50 mr-4"></div>
                  <h2 className="text-sm font-black text-white/80 tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}>
                    {t.footer.notFound}
                  </h2>
                  <div className="w-12 h-px bg-white/50 ml-4"></div>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.footer.notFoundDesc}
                </p>
                <p className="text-base text-gray-400 font-normal leading-relaxed">
                  {lang === 'uk' 
                    ? 'Можливо, сторінка переїхала або ви ввели неправильну адресу. Спробуйте перейти на головну або використайте навігацію нижче.'
                    : lang === 'en'
                    ? 'The page might have moved or you entered the wrong address. Try going to the home page or use the navigation below.'
                    : lang === 'pl'
                    ? 'Strona mogła zostać przeniesiona lub wpisałeś nieprawidłowy adres. Spróbuj przejść na stronę główną lub użyj nawigacji poniżej.'
                    : 'Страница могла быть перемещена или вы ввели неправильный адрес. Попробуйте перейти на главную или используйте навигацию ниже.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href={`/${lang}`}
                  className="group inline-flex items-center justify-center bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300 rounded-full font-black tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span>{t.footer.backHome}</span>
                </Link>
                <button
                  onClick={() => router.back()}
                  className="group inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full font-black tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span>{lang === 'uk' ? 'Назад' : lang === 'en' ? 'Back' : lang === 'pl' ? 'Wstecz' : 'Назад'}</span>
                </button>
              </div>
            </div>

            {/* Права частина - Швидкі посилання */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Search className="w-5 h-5 mr-3 text-white/60" />
                  <h3 className="text-lg font-black text-white uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
                    {lang === 'uk' ? 'Швидка навігація' : lang === 'en' ? 'Quick Navigation' : lang === 'pl' ? 'Szybka nawigacja' : 'Быстрая навигация'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 py-2"
                      >
                        <div className="w-0 group-hover:w-2 h-px bg-white transition-all duration-300 mr-0 group-hover:mr-3" />
                        <span className="font-semibold uppercase tracking-wider text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {link.label}
                        </span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

