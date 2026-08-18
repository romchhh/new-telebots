'use client';

import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { legal } from '@/lib/legal';
import { WEBMCP_ORDER } from '@/lib/webmcp';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import type { Language } from '@/components/translations';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  t: typeof import('./translations').translations.uk;
  onSubmit: (data: { name: string; phone: string; request: string }) => void | Promise<void>;
}

export default function OrderModal({ isOpen, onClose, serviceName: _serviceName, t, onSubmit }: OrderModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const pathname = usePathname();
  const lang = (['uk', 'en', 'pl', 'ru'].includes(pathname?.split('/')[1] ?? '')
    ? pathname.split('/')[1]
    : 'uk') as Language;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      const tId = window.setTimeout(() => firstFieldRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(tId);
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      };
    }
    setSending(false);
    setError('');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');
    const formData = new FormData(e.currentTarget);
    try {
      await onSubmit({
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        request: formData.get('request') as string,
      });
    } catch {
      setError(SUBMIT_ERROR[lang]);
      setSending(false);
      return;
    }
    setSending(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92svh] w-full max-w-xl flex-col rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex items-center justify-center p-1 text-black transition-opacity hover:opacity-55"
          aria-label={t.modal.close}
        >
          <X className="h-5 w-5" strokeWidth={2.25} />
        </button>

        <h2 id={titleId} className="mb-4 pr-10 text-3xl font-black text-black md:text-4xl">
          {t.modal.title}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
          toolname={WEBMCP_ORDER.toolname}
          tooldescription={WEBMCP_ORDER.tooldescription}
        >
          <div className="flex min-h-0 flex-1 flex-col space-y-4 overflow-y-auto pr-1">
            <div>
              <label htmlFor="order-name" className="mb-2 block text-sm font-normal text-brand">
                {t.modal.name} *
              </label>
              <input
                ref={firstFieldRef}
                id="order-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder={t.modal.namePlaceholder}
                toolparamdescription={WEBMCP_ORDER.params.name}
                className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="order-phone" className="mb-2 block text-sm font-normal text-brand">
                {t.modal.phone} *
              </label>
              <input
                id="order-phone"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder={t.modal.phonePlaceholder}
                toolparamdescription={WEBMCP_ORDER.params.phone}
                className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="order-request" className="mb-2 block text-sm font-normal text-brand">
                {t.modal.request}
              </label>
              <textarea
                id="order-request"
                name="request"
                rows={3}
                placeholder={t.modal.requestPlaceholder}
                toolparamdescription={WEBMCP_ORDER.params.request}
                className="w-full resize-none border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {error ? (
              <p role="alert" className="text-sm font-medium text-red-600">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-brand py-3.5 text-base font-semibold text-neutral-900 shadow-md shadow-brand/25 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? SUBMITTING[lang] : t.modal.submit}
            </button>

            <div className="flex w-full gap-2 pb-1">
              <a
                href="https://t.me/telebotsnowayrm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-black px-2 py-2 text-xs font-semibold text-black transition-colors hover:bg-black hover:text-white sm:gap-2 sm:px-3 sm:text-sm"
              >
                <FaTelegramPlane className="h-4 w-4 shrink-0" aria-hidden />
                <span className="truncate">{t.contact.telegram}</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-black px-2 py-2 text-xs font-semibold text-black transition-colors hover:bg-black hover:text-white sm:gap-2 sm:px-3 sm:text-sm"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden />
                <span className="truncate">{t.contact.whatsapp}</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
