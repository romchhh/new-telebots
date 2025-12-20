'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cases } from './cases';
import { translations, Language } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const ImageWithBlur = ({ src, alt, width, height, priority = false, className }: { src: string; alt: string; width: number; height: number; priority?: boolean; className?: string }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    quality={75}
    loading={priority ? "eager" : "lazy"}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjoxKy46LiE1MTc5PUVFSktGRk5PS0ZPRUVFRf/2wBDAR"
    className={className}
  />
);

export default function Portfolio() {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = cases[validLang] || cases.uk;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [portfolioRef, isPortfolioVisible] = useScrollAnimation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  // Створюємо масив кейсів з даних cases.js
  const imageMap: { [key: string]: { image: string; caseId: string; category: string } } = {
    'dr-tolstikova-bot': { image: '/dr-tolstikova-bot.jpg', caseId: 'dr-tolstikova-bot', category: 'chatbots' },
    'nieznany-piekarz': { image: '/Group 1000007023.png', caseId: 'nieznany-piekarz', category: 'websites' },
    'nutritionist-bot': { image: '/nutritionist-bot.jpg', caseId: 'nutritionist-bot', category: 'chatbots' },
    'cats-fresh': { image: '/cats-fresh-project.jpg', caseId: 'cats-fresh', category: 'websites' },
    'applum-bot': { image: '/IMAGE 2025-10-04 03:26:23.jpg', caseId: 'applum-bot', category: 'chatbots' },
    'easyplay': { image: '/IMAGE 2025-12-20 03:07:17.jpg', caseId: 'easyplay', category: 'websites' },
    'webinar-bot': { image: '/port44.png', caseId: 'webinar-bot', category: 'chatbots' },
    'normalnoauto': { image: '/port77.png', caseId: 'normalnoauto', category: 'chatbots' },
    'kvartyrant': { image: '/port99.png', caseId: 'kvartyrant', category: 'chatbots' },
    'cosmy': { image: '/port1010.png', caseId: 'cosmy', category: 'chatbots' },
    'newlineschool': { image: '/IMAGE 2025-10-04 04:24:06.jpg', caseId: 'newlineschool', category: 'websites' },
    'flixmarket': { image: '/IMAGE 2025-10-04 03:34:02.jpg', caseId: 'flixmarket', category: 'chatbots' },
    'alexandraaleksiuk': { image: '/IMAGE 2025-10-04 04:56:05.jpg', caseId: 'alexandraaleksiuk', category: 'websites' },
    'offer-dpuchkov': { image: '/IMAGE 2025-10-04 04:56:47.jpg', caseId: 'offer-dpuchkov', category: 'websites' },
    'vsk-technology': { image: '/vsk-technology.png', caseId: 'vsk-technology', category: 'websites' },
    'v12-auto': { image: '/v12-auto.png', caseId: 'v12-auto', category: 'websites' },
    'tripvibe': { image: '/tripvibe.png', caseId: 'tripvibe', category: 'websites' },
    'tron-energy-bot': { image: '/IMAGE 2025-10-13 22:39:19.jpg', caseId: 'tron-energy-bot', category: 'chatbots' },
    'chars-kyiv': { image: '/screenshot-2025-11-03-01-49-01.png', caseId: 'chars-kyiv', category: 'websites' },
    'style-chat-vakhula': { image: '/IMAGE 2025-11-03 02:12:02.jpg', caseId: 'style-chat-vakhula', category: 'chatbots' },
    'landscaper-academy': { image: '/screenshot-2025-12-20-03-02-08.png', caseId: 'landscaper-academy', category: 'websites' }
  };

  // Паттерни розмірів для створення красивої сітки з однаковими висотами в межах блоку
  const sizePatterns = [
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 2 }, // Великий квадрат (2x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 2 }, // Високий прямокутник (1x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 1 }, // Широкий прямокутник (2x1)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 2 }, // Великий квадрат (2x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 2 }, // Високий прямокутник (1x2)
    { colSpan: 2, rowSpan: 1 }, // Широкий прямокутник (2x1)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 2 }, // Великий квадрат (2x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 2 }, // Високий прямокутник (1x2)
    { colSpan: 2, rowSpan: 1 }, // Широкий прямокутник (2x1)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 1 }, // Широкий прямокутник (2x1)
    { colSpan: 1, rowSpan: 2 }, // Високий прямокутник (1x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
    { colSpan: 2, rowSpan: 2 }, // Великий квадрат (2x2)
    { colSpan: 1, rowSpan: 1 }, // Маленький квадрат
  ];

  // Створюємо масив робіт з cases.js
  const works = Object.keys(casesData).map((caseId, index) => {
    const caseData = (casesData as any)[caseId];
    const imageData = imageMap[caseId] || { image: caseData.mainImage, caseId, category: caseData.portfolioCategory || 'websites' };
    const sizePattern = sizePatterns[index % sizePatterns.length];
    
    return {
      title: caseData.title,
      alt: caseData.subtitle,
      image: imageData.image,
      largeImage: imageData.image,
      caseId: imageData.caseId,
      category: imageData.category,
      colSpan: sizePattern.colSpan,
      rowSpan: sizePattern.rowSpan
    };
  });

  const filteredProjects = selectedCategory === 'all'
    ? works
    : works.filter(work => work.category === selectedCategory);

  const getCaseUrl = (caseId: string) => {
    return `/${validLang}/portfolio/${caseId}`;
  };

  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();

  // Обчислюємо висоту рядків залежно від розміру екрану
  const getGridAutoRows = () => {
    if (windowWidth <= 768) return '200px';
    if (windowWidth <= 1024) return '240px';
    return '280px';
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Чорний блок зверху */}
      <section className="bg-black text-white">
        <div className="grid lg:grid-cols-2">
          <div className={`p-16 lg:p-24 flex flex-col justify-center scroll-animate-left ${isContentVisible ? 'animate' : ''}`} ref={contentRef}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">
              {t.portfolio.recent}
            </p>
            <h2 className="text-5xl lg:text-6xl font-black mb-12 leading-tight">
              {t.portfolio.title}
            </h2>
          </div>

          <div className={`relative h-[600px] lg:h-auto overflow-hidden scroll-animate-right ${isImageVisible ? 'animate' : ''}`} ref={imageRef}>
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/70 via-black/40 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Featured project"
              className="w-full h-full object-cover translate-y-8"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 z-10">
              <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-2">
                {t.portfolio.website}
              </p>
              <h3 className="text-2xl font-black">
                Featured Project
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section 
        id='portfolio' 
        className='py-24 px-6 bg-white'
        ref={portfolioRef}
      >
        <div className='max-w-7xl mx-auto'>

          {/* Фільтри категорій */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-full p-2 gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {validLang === 'uk' ? 'Всі проєкти' :
                 validLang === 'en' ? 'All Projects' :
                 validLang === 'ru' ? 'Все проекты' :
                 'Wszystkie projekty'}
              </button>
              <button
                onClick={() => setSelectedCategory('chatbots')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'chatbots'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {validLang === 'uk' ? 'Чат-боти' :
                 validLang === 'en' ? 'Chatbots' :
                 validLang === 'ru' ? 'Чат-боты' :
                 'Chatboty'}
              </button>
              <button
                onClick={() => setSelectedCategory('websites')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'websites'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {validLang === 'uk' ? 'Сайти' :
                 validLang === 'en' ? 'Websites' :
                 validLang === 'ru' ? 'Сайты' :
                 'Strony'}
              </button>
            </div>
          </div>

          {/* Masonry Grid */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 ${
              isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              gridAutoRows: getGridAutoRows()
            }}
          >
            {filteredProjects.map((work, index) => {
              let colSpan = work.colSpan || 1;
              let rowSpan = work.rowSpan || 1;
              
              // Адаптація для мобільних пристроїв - зберігаємо різні розміри
              if (windowWidth <= 768) {
                // На мобільних (2 колонки) обмежуємо максимальний розмір до 2
                colSpan = Math.min(colSpan, 2);
                rowSpan = Math.min(rowSpan, 2);
                // Якщо colSpan більше 2, робимо його 2
                if (colSpan > 2) colSpan = 2;
                // Якщо rowSpan більше 2, залишаємо його, але не більше 2
                if (rowSpan > 2) rowSpan = 2;
              } else if (windowWidth <= 1024) {
                // На планшетах обмежуємо розміри
                colSpan = Math.min(colSpan, 2);
                rowSpan = Math.min(rowSpan, 2);
              }
              
              return (
                <div
                  key={index}
                  className='relative group overflow-hidden rounded-lg cursor-pointer'
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`
                  }}
                  onClick={(e) => {
                    if (!(e.target as HTMLElement).closest('a')) {
                      setLightboxImage({ src: work.largeImage, alt: work.alt });
                      setLightboxOpen(true);
                    }
                  }}
                >
                  <div className='relative w-full h-full'>
                    <ImageWithBlur
                      src={work.image}
                      alt={work.alt}
                      width={800}
                      height={800}
                      priority={index < 6}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Link
                      href={getCaseUrl(work.caseId)}
                      className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className='text-white'>
                        <h3 className='text-xl font-black mb-2'>
                          {work.title}
                        </h3>
                        <p className='text-sm text-gray-300 mb-4'>
                          {work.alt}
                        </p>
                        <div className='flex items-center gap-2 text-white'>
                          <span className="text-sm font-semibold">
                            {validLang === 'uk' ? 'Детальніше' :
                             validLang === 'en' ? 'View Details' :
                             validLang === 'ru' ? 'Подробнее' :
                             'Zobacz szczegóły'}
                          </span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1920}
              height={1080}
              quality={95}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}

