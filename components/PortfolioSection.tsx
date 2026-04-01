'use client';

import { useEffect, useRef, useState } from 'react';
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

function PortfolioProject({ project, lang }: { project: { image: string; category: string; title: string; caseId: string }; lang: Language }) {
  return (
    <Link
      href={`/${lang}/portfolio/${project.caseId}`}
      className="group flex-shrink-0 w-[280px] min-w-[280px] sm:w-[320px] sm:min-w-[320px] aspect-square block relative overflow-hidden rounded-lg snap-start"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} | TeleBots`}
          fill
          className="object-cover object-center min-w-full min-h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          quality={85}
          sizes="(max-width: 640px) 280px, 320px"
        />
      </div>
      <div
        className="absolute inset-0 bg-black/50 pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 flex items-end p-4 sm:p-5">
        <div>
          <p className="text-xs font-normal tracking-[0.2em] text-gray-300 mb-1">
            {project.category}
          </p>
          <h3 className="text-base sm:text-lg font-black leading-tight line-clamp-2">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioSection({ t }: PortfolioSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const [contentRef, isContentVisible] = useScrollAnimation();

  const casesData = cases[validLang] || cases.uk;
  const allCaseIds = Object.keys(casesData);

  const projects = allCaseIds.map((caseId) => {
    const caseData = (casesData as Record<string, { mainImage?: string; portfolioCategory?: string; title?: string }>)[caseId];
    const category = caseData?.portfolioCategory === 'chatbots' ? t.portfolio.telegram : t.portfolio.website;
    return {
      image: caseData?.mainImage || '/portfolio/portfolio-dr-tolstikova-bot.jpg',
      category,
      title: caseData?.title || 'Project',
      caseId,
    };
  });

  return (
    <section id="portfolio" className="bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-0 min-w-0">
        <div
          className={`p-8 sm:p-12 lg:p-16 xl:p-24 flex flex-col justify-center scroll-animate-left ${isContentVisible ? 'animate' : ''}`}
          ref={contentRef}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
            {t.portfolio.title}
          </h2>
          <Link
            href={`/${validLang}/portfolio`}
            className="group flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center px-3"
          >
            <div className="flex items-center justify-center flex-wrap gap-1">
              <span className="text-sm font-semibold tracking-wider text-center leading-tight">{t.portfolio.viewPortfolio}</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </div>
          </Link>
        </div>

        <ZoomingImageBlock t={t} />
      </div>

      {/* Портфоліо — горизонтальний скрол знизу */}
      <div className="overflow-hidden w-full min-w-0">
        <div
          className="flex overflow-x-scroll overflow-y-hidden gap-4 sm:gap-5 pl-6 pr-6 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-10 py-8 sm:py-10 scroll-smooth snap-x snap-mandatory min-w-0 w-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.3)_transparent] overscroll-x-contain"
          style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
        >
          {projects.map((project) => (
            <PortfolioProject key={project.caseId} project={project} lang={validLang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ZoomingImageBlock({ t }: { t: typeof import('./translations').translations.uk }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Нормалізуємо положення блоку від 0 (виходить знизу) до 1 (вийшов нагорі)
      const visibleStart = viewportHeight * 0.1;
      const visibleEnd = viewportHeight * 0.9;
      const centerY = rect.top + rect.height / 2;

      const raw =
        rect.height <= 0
          ? 0
          : (visibleEnd - centerY) / (visibleEnd - visibleStart);

      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Робимо масштаб максимумом у середині прокрутки (ефект "наблизився" → "віддалився")
  const peakFactor = 1 - Math.abs(progress - 0.5) * 2; // 0 → 1 → 0
  const scale = 1 + peakFactor * 0.15; // від 1 до 1.15

  return (
    <div className="relative flex flex-col justify-center w-full min-w-0 p-6 sm:p-8 lg:p-10" ref={containerRef}>
      <div
        className="relative w-full aspect-[1500/970] rounded-lg overflow-hidden will-change-transform"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 80ms linear',
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <Image
          src="/portfolio/portfolio-default.jpg"
          alt="Featured project"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={80}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 z-10">
          <p className="text-xs font-normal tracking-[0.2em] text-gray-400 mb-1">
            {t.portfolio.website}
          </p>
          <h3 className="text-lg sm:text-xl font-black">Featured Project</h3>
        </div>
      </div>
    </div>
  );
}
