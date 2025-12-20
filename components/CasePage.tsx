'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cases } from './cases';
import { translations, Language } from './translations';
import OrderModal from './OrderModal';
import SuccessMessage from './SuccessMessage';
import { sendToTelegram } from '@/lib/telegram';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaMousePointer, 
  FaExternalLinkAlt, 
  FaRobot, 
  FaUtensils, 
  FaHeart, 
  FaCat, 
  FaShoppingCart, 
  FaChartLine, 
  FaBirthdayCake, 
  FaLeaf, 
  FaRocket, 
  FaGlobe, 
  FaBus, 
  FaCar, 
  FaGamepad, 
  FaGraduationCap, 
  FaCreditCard, 
  FaTruck, 
  FaStore, 
  FaMoneyBillWave,
  FaMobile,
  FaSearch,
  FaHome
} from 'react-icons/fa';

interface CasePageProps {
  caseId: string;
}

export default function CasePage({ caseId }: CasePageProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = cases[validLang] || cases.uk;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const caseData = (casesData as any)[caseId];
  
  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {validLang === 'uk' ? 'Кейс не знайдено' :
             validLang === 'en' ? 'Case not found' :
             validLang === 'ru' ? 'Кейс не найден' :
             'Przypadek nie znaleziony'}
          </h1>
          <Link 
            href={`/${validLang}/portfolio`}
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition"
          >
            <FaArrowLeft />
            {validLang === 'uk' ? 'Повернутися до портфоліо' :
             validLang === 'en' ? 'Back to Portfolio' :
             validLang === 'ru' ? 'Вернуться к портфолио' :
             'Powrót do portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  const getCaseIcon = (caseId: string) => {
    switch (caseId) {
      case 'dr-tolstikova-bot':
        return <FaChartLine className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'nieznany-piekarz':
        return <FaBirthdayCake className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'nutritionist-bot':
        return <FaLeaf className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'cats-fresh':
        return <FaCat className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'applum-bot':
        return <FaMobile className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'webinar-bot':
        return <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'subscription-site':
        return <FaGlobe className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'brandshop':
        return <FaStore className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'normalnoauto':
        return <FaCar className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'kvartyrant':
        return <FaHome className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'flixmarket':
        return <FaLeaf className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'gtrading':
        return <FaTruck className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'easyplay':
        return <FaGamepad className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'cosmy':
        return <FaHeart className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'newlineschool':
        return <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      case 'xpaid':
        return <FaCreditCard className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
      default:
        return <FaRobot className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black" />;
    }
  };

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      caseId: caseId,
    });
    
    if (success) {
      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } else {
      alert('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Чорний блок зверху з назвою, описом та фото */}
      <section className="bg-black text-white">
        <div className="grid lg:grid-cols-2">
          <div className="p-16 lg:p-24 flex flex-col justify-center">
            <Link 
              href={`/${validLang}/portfolio`}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 text-sm tracking-[0.2em]"
            >
              <FaArrowLeft className="w-4 h-4" />
              {validLang === 'uk' ? 'Повернутися до портфоліо' :
               validLang === 'en' ? 'Back to Portfolio' :
               validLang === 'ru' ? 'Вернуться к портфолио' :
               'Powrót do portfolio'}
            </Link>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
              {caseData.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              {caseData.subtitle}
            </p>

            {caseData.technologies && (
              <div className="flex flex-wrap gap-3">
                {caseData.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px]">
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/70 via-black/40 to-transparent z-10"></div>
            <div className="relative w-full flex items-center justify-center">
              <Image
                src={caseData.mainImage}
                alt={caseData.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseData.duration && (
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">
                  {validLang === 'uk' ? 'Тривалість' :
                   validLang === 'en' ? 'Duration' :
                   validLang === 'ru' ? 'Длительность' :
                   'Czas trwania'}
                </p>
                <p className="text-xl font-black text-black">{caseData.duration}</p>
              </div>
            )}

            {caseData.client && (
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">
                  {validLang === 'uk' ? 'Клієнт' :
                   validLang === 'en' ? 'Client' :
                   validLang === 'ru' ? 'Клиент' :
                   'Klient'}
                </p>
                <p className="text-xl font-black text-black">{caseData.client}</p>
              </div>
            )}

            {caseData.category && (
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-2">
                  {validLang === 'uk' ? 'Категорія' :
                   validLang === 'en' ? 'Category' :
                   validLang === 'ru' ? 'Категория' :
                   'Kategoria'}
                </p>
                <p className="text-xl font-black text-black">{caseData.category}</p>
              </div>
            )}
          </div>

          {caseData.liveUrl && (
            <div>
              <a
                href={caseData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 group"
              >
                <FaExternalLinkAlt className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm font-semibold tracking-wider">
                  {validLang === 'uk' ? 'Переглянути проект' :
                   validLang === 'en' ? 'View Project' :
                   validLang === 'ru' ? 'Посмотреть проект' :
                   'Zobacz projekt'}
                </span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Description */}
          {caseData.description && (
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-8">
                {validLang === 'uk' ? 'Опис проекту' :
                 validLang === 'en' ? 'Project Description' :
                 validLang === 'ru' ? 'Описание проекта' :
                 'Opis projektu'}
              </h2>
              <div className="prose prose-lg max-w-none">
                {caseData.description.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {caseData.features && (
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-12">
                {validLang === 'uk' ? 'Основні функції' :
                 validLang === 'en' ? 'Key Features' :
                 validLang === 'ru' ? 'Основные функции' :
                 'Kluczowe funkcje'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-6 border-b border-gray-200">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-normal text-base leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {caseData.results && (
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-12 text-center">
                {validLang === 'uk' ? 'Результати' :
                 validLang === 'en' ? 'Results' :
                 validLang === 'ru' ? 'Результаты' :
                 'Wyniki'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {caseData.results.map((result: { value: string; label: string }, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl lg:text-5xl font-black text-black mb-3">
                      {result.value}
                    </div>
                    <p className="text-gray-600 font-normal text-sm tracking-[0.1em] uppercase">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Кнопка замовлення */}
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full hover:bg-gray-800 transition-all duration-300 mx-auto"
            >
              <span className="text-sm font-semibold tracking-wider">
                {validLang === 'uk' ? 'Замовити розробку' :
                 validLang === 'en' ? 'Order Development' :
                 validLang === 'ru' ? 'Заказать разработку' :
                 'Zamów rozwój'}
              </span>
              <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Модальне вікно */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={caseData.title}
        t={t}
        onSubmit={handleSubmit}
      />
      
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
    </div>
  );
}

