'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Paperclip } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { sendToTelegram } from '@/lib/telegram';
import { legal } from '@/lib/legal';
import { antiSpamFromFormData } from '@/lib/antiSpam';
import FormHoneypot from '@/components/FormHoneypot';
import { translations, Language } from '@/components/translations';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import { WEBMCP_CONSULTATION } from '@/lib/webmcp';
import { defaultDialCode, dialCodesForLang, type DialCode } from '@/lib/phoneDial';

type T = (typeof translations)['uk'];

interface ContactFormBlockProps {
  t: T;
  lang: Language;
  onSuccess?: () => void;
  className?: string;
  serviceName?: string;
  hideTitle?: boolean;
  /** Kept for call-site compat; form always uses site/app dark card fields */
  variant?: 'light' | 'dark' | 'site';
}

export default function ContactFormBlock({
  t,
  lang,
  onSuccess,
  className = '',
  serviceName,
  hideTitle = false,
}: ContactFormBlockProps) {
  const c = t.contact;
  const m = t.modal;
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileLabel, setFileLabel] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phoneLocal: '',
    telegram: '',
    project: '',
  });
  const [dialCode, setDialCode] = useState<DialCode>(() => defaultDialCode(lang));
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setDialCode(defaultDialCode(lang));
  }, [lang]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError('');
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');

    const phone = [dialCode, formData.phoneLocal.trim()].filter(Boolean).join(' ').trim();
    const telegramLine = formData.telegram.trim() ? `Telegram: ${formData.telegram.trim()}` : '';
    const projectLines = [telegramLine, formData.project.trim()].filter(Boolean);

    const attachment = fileRef.current?.files?.[0] ?? null;

    const success = await sendToTelegram(
      {
        name: formData.name,
        phone,
        project: projectLines.join('\n'),
        ...(serviceName ? { service: serviceName } : {}),
        ...antiSpamFromFormData(new FormData(e.currentTarget)),
      },
      attachment
    );

    setSending(false);

    if (success) {
      setFormData({ name: '', phoneLocal: '', telegram: '', project: '' });
      setDialCode(defaultDialCode(lang));
      setFileLabel('');
      if (fileRef.current) fileRef.current.value = '';
      onSuccess?.();
    } else {
      setError(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <div className={className}>
      {!hideTitle ? (
        <>
          <h2>
            {c.formHeadline} <span className="accent">{c.formHeadlineAccent}</span>
          </h2>
          <p className="contact-card-lead">{c.formEyebrow}</p>
        </>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="contact-form"
        toolname={WEBMCP_CONSULTATION.toolname}
        tooldescription={WEBMCP_CONSULTATION.tooldescription}
      >
        <FormHoneypot />

        <div className="form-fields">
          <label className="input-row" htmlFor="contact-name">
            <span>{m.name}</span>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder={m.namePlaceholder}
              toolparamdescription={WEBMCP_CONSULTATION.params.name}
              aria-label={m.name}
            />
          </label>

          <label className="input-row phone-row" htmlFor="contact-phone-local">
            <span>{m.phone}</span>
            <div className="phone-control">
              <select
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value as DialCode)}
                aria-label={m.phoneDial}
              >
                {dialCodesForLang(lang).map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                id="contact-phone-local"
                type="tel"
                name="phoneLocal"
                value={formData.phoneLocal}
                onChange={handleChange}
                required
                autoComplete="tel-national"
                inputMode="tel"
                placeholder={m.phoneLocalPlaceholder}
                toolparamdescription={WEBMCP_CONSULTATION.params.phone}
                aria-label={m.phone}
              />
            </div>
          </label>

          <label className="input-row" htmlFor="contact-telegram">
            <span>{m.telegram}</span>
            <input
              id="contact-telegram"
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              autoComplete="off"
              placeholder={m.telegramPlaceholder}
              aria-label={m.telegram}
            />
          </label>

          <textarea
            id="contact-project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            rows={3}
            placeholder={m.requestPlaceholder}
            toolparamdescription={WEBMCP_CONSULTATION.params.project}
            aria-label={m.request}
          />
        </div>

        <div className="attach-row">
          <input
            ref={fileRef}
            type="file"
            className="sr-only"
            id="contact-file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileLabel(file?.name ?? '');
            }}
          />
          <button type="button" onClick={() => fileRef.current?.click()} className="attach-button">
            <span className="attach-disc" aria-hidden>
              <Paperclip className="h-5 w-5" strokeWidth={2} />
            </span>
            <span>{fileLabel || c.attachFile}</span>
          </button>
        </div>

        {error ? (
          <p role="alert" className="form-error">
            {error}
          </p>
        ) : null}

        <div className="contact-form-messengers">
          <a
            href="https://t.me/telebotsnowayrm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-form-messenger"
          >
            <FaTelegramPlane aria-hidden />
            <span>{c.telegram}</span>
          </a>
          <a
            href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-form-messenger"
          >
            <FaWhatsapp aria-hidden />
            <span>{c.whatsapp}</span>
          </a>
        </div>

        <button type="submit" disabled={sending} className="submit-button">
          <span>{sending ? SUBMITTING[lang] : c.submitDiscuss}</span>
          {!sending ? <ArrowRight aria-hidden /> : null}
        </button>

        <p className="form-consent">
          {c.consentBefore}{' '}
          <Link href={`/${lang}/privacy`}>{c.consentLink}</Link>
        </p>
      </form>
    </div>
  );
}
