'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import type { Language } from '@/components/translations';
import type { PortfolioCaseData } from '@/lib/portfolioCases';

type CasePreviewModalProps = {
  caseId: string;
  caseData: PortfolioCaseData;
  lang: Language;
  onClose: () => void;
  onOrderClick?: () => void;
};

function copy(lang: Language, uk: string, en: string, pl: string, ru: string) {
  if (lang === 'en') return en;
  if (lang === 'pl') return pl;
  if (lang === 'ru') return ru;
  return uk;
}

export default function CasePreviewModal({
  caseId,
  caseData,
  lang,
  onClose,
  onOrderClick,
}: CasePreviewModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const image = caseData.mainImage || '/portfolio/portfolio-default.jpg';
  const features = (caseData.features || []).slice(0, 6);
  const results = (caseData.results || []).slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`case-preview-${caseId}`}
    >
      <div
        className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label={copy(lang, 'Закрити', 'Close', 'Zamknij', 'Закрыть')}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/10] w-full shrink-0 bg-zinc-100">
          <Image
            src={image}
            alt={caseData.subtitle || caseData.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            {(caseData.category || caseData.duration) && (
              <p className="mb-1 text-xs font-medium tracking-[0.15em] text-white/70">
                {[caseData.category, caseData.duration].filter(Boolean).join(' · ')}
              </p>
            )}
            <h2
              id={`case-preview-${caseId}`}
              className="text-xl font-black leading-tight text-white sm:text-2xl"
            >
              {caseData.title}
            </h2>
            {caseData.subtitle && (
              <p className="mt-1 text-sm text-white/85 sm:text-base">{caseData.subtitle}</p>
            )}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          {caseData.description && (
            <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-700 sm:text-base">
              {caseData.description}
            </p>
          )}

          {results.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {results.map((r) => (
                <div key={`${r.value}-${r.label}`} className="rounded-lg bg-zinc-50 px-3 py-3 text-center">
                  <div className="text-lg font-black text-black sm:text-xl">{r.value}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-zinc-500 sm:text-xs">{r.label}</div>
                </div>
              ))}
            </div>
          )}

          {features.length > 0 && (
            <ul className="mt-6 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-zinc-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3 border-t border-zinc-100 bg-white p-4 sm:px-6 sm:py-4">
          {caseData.liveUrl && (
            <a
              href={caseData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-50"
            >
              {copy(lang, 'Відкрити проєкт', 'View project', 'Zobacz projekt', 'Открыть проект')}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {onOrderClick && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOrderClick();
              }}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:flex-none"
            >
              {copy(lang, 'Замовити подібне', 'Order similar', 'Zamów podobne', 'Заказать похожее')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
