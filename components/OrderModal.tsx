'use client';

import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_HREF } from '@/lib/legal';
import { WEBMCP_ORDER } from '@/lib/webmcp';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import { antiSpamFromFormData, type AntiSpamFields } from '@/lib/antiSpam';
import FormHoneypot from '@/components/FormHoneypot';
import type { Language } from '@/components/translations';
import { defaultDialCode, dialCodesForLang, type DialCode } from '@/lib/phoneDial';
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

export default function OrderModal({ isOpen, onClose, t, onSubmit }: OrderModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const pathname = usePathname();
  const lang = (['uk', 'en', 'pl', 'ru'].includes(pathname?.split('/')[1] ?? '')
    ? pathname.split('/')[1]
    : 'uk') as Language;
  const [dialCode, setDialCode] = useState<DialCode>(() => defaultDialCode(lang));

  useEffect(() => {
    if (isOpen) {
      setDialCode(defaultDialCode(lang));
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
    setDialCode(defaultDialCode(lang));
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    return undefined;
  }, [isOpen, lang]);

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
    const phoneLocal = String(formData.get('phoneLocal') ?? '').trim();
    const phone = [dialCode, phoneLocal].filter(Boolean).join(' ').trim();
    const telegram = String(formData.get('telegram') ?? '').trim();
    const requestBody = String(formData.get('request') ?? '').trim();
    const requestParts = [telegram ? `Telegram: ${telegram}` : '', requestBody].filter(Boolean);

    try {
      await onSubmit({
        name: formData.get('name') as string,
        phone,
        request: requestParts.join('\n'),
        ...antiSpamFromFormData(formData),
      });
    } catch {
      setError(SUBMIT_ERROR[lang]);
      setSending(false);
      return;
    }
    setSending(false);
  };

  const c = t.contact;

  return (
    <div className="order-modal-root">
      <div className="order-modal-scrim" onClick={onClose} aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="order-modal-panel"
      >
        <div className="order-modal-scroll">
          <div className="order-modal-header">
            <h2 id={titleId}>{t.modal.title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="close-button"
              aria-label={t.modal.close}
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-form"
            toolname={WEBMCP_ORDER.toolname}
            tooldescription={WEBMCP_ORDER.tooldescription}
          >
            <FormHoneypot />
            <div className="form-fields">
              <label className="input-row" htmlFor="order-name">
                <span>{t.modal.name}</span>
                <input
                  ref={firstFieldRef}
                  id="order-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t.modal.namePlaceholder}
                  toolparamdescription={WEBMCP_ORDER.params.name}
                  aria-label={t.modal.name}
                />
              </label>

              <label className="input-row phone-row" htmlFor="order-phone-local">
                <span>{t.modal.phone}</span>
                <div className="phone-control">
                  <select
                    value={dialCode}
                    onChange={(e) => setDialCode(e.target.value as DialCode)}
                    aria-label={t.modal.phoneDial}
                  >
                    {dialCodesForLang(lang).map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="order-phone-local"
                    type="tel"
                    name="phoneLocal"
                    required
                    autoComplete="tel-national"
                    inputMode="tel"
                    placeholder={t.modal.phoneLocalPlaceholder}
                    toolparamdescription={WEBMCP_ORDER.params.phone}
                    aria-label={t.modal.phone}
                  />
                </div>
              </label>

              <label className="input-row" htmlFor="order-telegram">
                <span>{t.modal.telegram}</span>
                <input
                  id="order-telegram"
                  type="text"
                  name="telegram"
                  autoComplete="off"
                  placeholder={t.modal.telegramPlaceholder}
                  aria-label={t.modal.telegram}
                />
              </label>

              <textarea
                id="order-request"
                name="request"
                rows={3}
                placeholder={t.modal.requestPlaceholder}
                toolparamdescription={WEBMCP_ORDER.params.request}
                aria-label={t.modal.request}
              />
            </div>

            {error ? (
              <p role="alert" className="form-error">
                {error}
              </p>
            ) : null}

            <div className="order-modal-messengers">
              <a
                href="https://t.me/telebotsnowayrm"
                target="_blank"
                rel="noopener noreferrer"
                className="order-modal-messenger"
              >
                <FaTelegramPlane aria-hidden />
                <span>{c.telegram}</span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="order-modal-messenger"
              >
                <FaWhatsapp aria-hidden />
                <span>{c.whatsapp}</span>
              </a>
            </div>

            <button type="submit" disabled={sending} className="submit-button">
              <span>{sending ? SUBMITTING[lang] : t.modal.submit}</span>
              {!sending ? <ArrowRight aria-hidden /> : null}
            </button>

            <p className="form-consent">
              {c.consentBefore}{' '}
              <Link href={`/${lang}/privacy`}>{c.consentLink}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
