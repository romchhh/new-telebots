'use client';

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { GOT_IT } from '@/lib/formMessages';
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
        className="pointer-events-auto relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-fadeInScale md:p-12"
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-75" />
            <div className="relative rounded-full bg-green-500 p-4">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>

          <h3 className="mb-4 text-2xl font-black text-black md:text-3xl">{message}</h3>

          {description && (
            <p className="mb-6 text-base font-semibold leading-relaxed text-gray-600">{description}</p>
          )}

          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full rounded-full bg-black py-4 font-black tracking-wider text-white transition-colors hover:bg-gray-900"
          >
            {GOT_IT[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
