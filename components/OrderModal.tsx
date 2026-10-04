'use client';

import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { legal } from '@/lib/legal';
import { WEBMCP_ORDER } from '@/lib/webmcp';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import { antiSpamFromFormData, type AntiSpamFields } from '@/lib/antiSpam';
import FormHoneypot from '@/components/FormHoneypot';
import type { Language } from '@/components/translations';
import PhoneNumberField from '@/components/PhoneNumberField';
import {
  BTN_BRAND,
  BTN_GHOST_LIGHT,
  INPUT_LIGHT,
  RADIUS_PILL,
  SHELL_LIGHT,
  TEXTAREA_LIGHT,
  TYPE_EYEBROW,
  TYPE_SECTION_TITLE,
} from '@/lib/siteUi';

export type OrderModalSubmitData = {
  name: string;
  phone: string;
  request: string;
} & AntiSpamFields;

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  t: typeof import('./translations').translations.uk;
  onSubmit: (data: OrderModalSubmitData) => void | Promise<void>;
}

const fieldClass = INPUT_LIGHT;
const textareaClass = `${TEXTAREA_LIGHT} min-h-[96px]`;

export default function OrderModal({ isOpen, onClose, serviceName, t, onSubmit }: OrderModalProps) {
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
        ...antiSpamFromFormData(formData),
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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-[1.75rem] ${SHELL_LIGHT}`}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.15)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="relative flex min-h-0 flex-1 flex-col p-6 md:p-8">
          <button
            type="button"
            onClick={onClose}
            className={`absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center ${RADIUS_PILL} border border-neutral-200 bg-white text-neutral-600 transition hover:border-brand/40 hover:text-neutral-900`}
            aria-label={t.modal.close}
          >
            <X className="h-4 w-4" strokeWidth={2.25} />
          </button>

          <p className={`mb-2 pr-12 ${TYPE_EYEBROW} text-brand`}>{t.contact.formEyebrow}</p>
          <h2 id={titleId} className={`mb-1 pr-10 ${TYPE_SECTION_TITLE} text-neutral-900 md:text-3xl`}>
            {t.modal.title}
          </h2>
          {serviceName ? <p className="mb-6 text-sm text-neutral-500">{serviceName}</p> : <div className="mb-6" />}

          <form
            onSubmit={handleSubmit}
            className="relative flex min-h-0 flex-1 flex-col"
            toolname={WEBMCP_ORDER.toolname}
            tooldescription={WEBMCP_ORDER.tooldescription}
          >
            <FormHoneypot />
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pr-0.5">
              <input
                ref={firstFieldRef}
                id="order-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder={`${t.modal.namePlaceholder} *`}
                toolparamdescription={WEBMCP_ORDER.params.name}
                className={fieldClass}
                aria-label={t.modal.name}
              />

              <PhoneNumberField
                id="order-phone"
                required
                placeholder={t.modal.phonePlaceholder}
                ariaLabel={t.modal.phone}
                toolparamdescription={WEBMCP_ORDER.params.phone}
              />

              <textarea
                id="order-request"
                name="request"
                rows={3}
                placeholder={t.modal.requestPlaceholder}
                toolparamdescription={WEBMCP_ORDER.params.request}
                className={textareaClass}
                aria-label={t.modal.request}
              />
            </div>

            <div className="mt-5 space-y-4 border-t border-neutral-100 pt-5">
              <p className="text-xs leading-relaxed text-neutral-500">
                {t.contact.consentBefore}{' '}
                <Link href={`/${lang}/privacy`} className="text-brand underline underline-offset-2 hover:text-brand-dark">
                  {t.contact.consentLink}
                </Link>
              </p>
              {error ? (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {error}
                </p>
              ) : null}
              <button type="submit" disabled={sending} className={`w-full ${BTN_BRAND}`}>
                {sending ? SUBMITTING[lang] : t.contact.submitDiscuss}
              </button>

              <p className="text-center text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                {t.modal.orWriteDirectly}
              </p>
              <div className="flex w-full gap-2 pb-1">
                <a
                  href="https://t.me/telebotsnowayrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 ${BTN_GHOST_LIGHT}`}
                >
                  <FaTelegramPlane className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span className="truncate">Telegram</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 ${BTN_GHOST_LIGHT}`}
                >
                  <FaWhatsapp className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
