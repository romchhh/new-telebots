'use client';

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { GOT_IT } from '@/lib/formMessages';
import { BTN_BRAND, RADIUS_PILL, SHELL_LIGHT } from '@/lib/siteUi';
import type { Language } from '@/components/translations';
import { usePathname } from 'next/navigation';

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  description?: string;
}

export default function SuccessMessage({ isOpen, onClose, message, description }: SuccessMessageProps) {
  const pathname = usePathname();
  const lang = (['uk', 'en', 'pl', 'ru'].includes(pathname?.split('/')[1] ?? '')
    ? pathname.split('/')[1]
    : 'uk') as Language;

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(onClose, 4000);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="pointer-events-auto absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="status"
        className={`pointer-events-auto relative w-full max-w-md overflow-hidden p-8 animate-fadeInScale md:p-10 ${SHELL_LIGHT}`}
      >
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12)_0%,transparent_70%)] blur-2xl"
          aria-hidden
        />
        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className={`absolute inset-0 animate-ping ${RADIUS_PILL} bg-brand/20 opacity-60`} />
            <div className={`relative ${RADIUS_PILL} bg-brand p-4 shadow-lg shadow-brand/30`}>
              <CheckCircle className="h-10 w-10 text-neutral-900" strokeWidth={2.25} />
            </div>
          </div>

          <h3 className="mb-3 text-xl font-black leading-tight text-neutral-900 md:text-2xl">{message}</h3>

          {description ? (
            <p className="mb-6 text-sm leading-relaxed text-neutral-600">{description}</p>
          ) : null}

          <button type="button" onClick={onClose} className={`mt-2 w-full ${BTN_BRAND}`}>
            {GOT_IT[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
