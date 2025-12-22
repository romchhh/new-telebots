'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';
import { Language } from './translations';
import { cases } from './cases';

interface PortfolioSectionProps {
  t: typeof import('./translations').translations.uk;
}

function PortfolioProject({ project, index, lang }: { project: { image: string; category: string; title: string; caseId: string }; index: number; lang: Language }) {
  const [projectRef, isProjectVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  return (
    <div
      ref={projectRef}
      className={`relative group overflow-hidden aspect-square scroll-animate-scale ${isProjectVisible ? 'animate' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/${lang}/portfolio/${project.caseId}`}
        className="block w-full h-full"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-100 flex items-end">
          <div className="p-4 md:p-8">
            <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-1 md:mb-2">
              {project.category}
            </p>
            <h3 className="text-base md:text-xl font-black leading-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PortfolioSection({ t }: PortfolioSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [imageRef, isImageVisible] = useScrollAnimation();
  
  // Отримуємо останні 4 кейси з cases.js
  const casesData = cases[validLang] || cases.uk;
  const allCaseIds = Object.keys(casesData);
  const last4CaseIds = allCaseIds.slice(-4); // Останні 4 кейси
  
  const imageMap: { [key: string]: { image: string; category: string } } = {
    'chars-kyiv': { image: '/screenshot-2025-11-03-01-49-01.png', category: 'websites' },
    'style-chat-vakhula': { image: '/image-2025-11-03-02-12-02.jpg', category: 'chatbots' },
    'tron-energy-bot': { image: '/image-2025-10-13-22-39-19.jpg', category: 'chatbots' },
    'tripvibe': { image: '/tripvibe.png', category: 'websites' },
    'v12-auto': { image: '/v12-auto.png', category: 'websites' },
    'vsk-technology': { image: '/vsk-technology.png', category: 'websites' },
    'offer-dpuchkov': { image: '/image-2025-10-04-04-56-47.jpg', category: 'websites' },
    'alexandraaleksiuk': { image: '/image-2025-10-04-04-56-05.jpg', category: 'websites' },
    'landscaper-academy': { image: '/screenshot-2025-12-20-03-02-08.png', category: 'websites' }
  };
  
  const projects = last4CaseIds.map((caseId) => {
    const caseData = (casesData as any)[caseId];
    const imageData = imageMap[caseId] || { 
      image: caseData?.mainImage || '/dr-tolstikova-bot.jpg', 
      category: caseData?.portfolioCategory === 'chatbots' ? t.portfolio.telegram : t.portfolio.website 
    };
    
    return {
      image: imageData.image,
      category: caseData?.portfolioCategory === 'chatbots' ? t.portfolio.telegram : t.portfolio.website,
      title: caseData?.title || 'Project',
      caseId: caseId
    };
  });

  return (
    <section id="portfolio" className="bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className={`p-16 lg:p-24 flex flex-col justify-center scroll-animate-left ${isContentVisible ? 'animate' : ''}`} ref={contentRef}>
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">
            {t.portfolio.recent}
          </p>
          <h2 className="text-5xl lg:text-6xl font-black mb-12 leading-tight">
            {t.portfolio.title}
          </h2>
          <Link 
            href={`/${validLang}/portfolio`}
            className="group flex items-center justify-center w-48 h-48 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
          >
            <div className="flex items-center justify-center flex-wrap gap-1">
              <span className="text-sm font-semibold tracking-wider text-center leading-tight">{t.portfolio.viewPortfolio}</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </div>
          </Link>
        </div>

        <div className={`relative h-full scroll-animate-right ${isImageVisible ? 'animate' : ''}`} ref={imageRef}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Featured project"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
            <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-2">
              {t.portfolio.website}
            </p>
            <h3 className="text-2xl font-black">
              Featured Project
            </h3>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <PortfolioProject key={index} project={project} index={index} lang={validLang} />
        ))}
      </div>
    </section>
  );
}

