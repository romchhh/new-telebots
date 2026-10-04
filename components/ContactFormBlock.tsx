'use client';

import { useRef, useState, FormEvent } from 'react';
import Link from 'next/link';
import { Paperclip } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram';
import { antiSpamFromFormData } from '@/lib/antiSpam';
import FormHoneypot from '@/components/FormHoneypot';
import { translations, Language } from '@/components/translations';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import { WEBMCP_CONSULTATION } from '@/lib/webmcp';
import PhoneNumberField from '@/components/PhoneNumberField';
import {
  BTN_BRAND,
  BTN_BRAND_LG,
  FORM_HEADLINE,
  INPUT_DARK,
  INPUT_LIGHT,
  RADIUS_PILL,
  TEXTAREA_DARK,
  TEXTAREA_LIGHT,
} from '@/lib/siteUi';

type T = (typeof translations)['uk'];

interface ContactFormBlockProps {
  t: T;
  lang: Language;
  onSuccess?: () => void;
  className?: string;
  serviceName?: string;
  hideTitle?: boolean;
  variant?: 'light' | 'dark';
}

export default function ContactFormBlock({
  t,
  lang,
  onSuccess,
  className = '',
  serviceName,
  hideTitle = false,
  variant = 'light',
}: ContactFormBlockProps) {
  const isDark = variant === 'dark';
  const c = t.contact;
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileLabel, setFileLabel] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError('');
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');

    const attachment = fileRef.current?.files?.[0] ?? null;

    const projectLines = [formData.project].filter(Boolean);

    const success = await sendToTelegram(
      {
        name: formData.name,
        phone: formData.phone,
        project: projectLines.join('\n'),
        ...(serviceName ? { service: serviceName } : {}),
        ...antiSpamFromFormData(new FormData(e.currentTarget)),
      },
      attachment
    );

    setSending(false);

    if (success) {
      setFormData({ name: '', phone: '', project: '' });
      setFileLabel('');
      if (fileRef.current) fileRef.current.value = '';
      onSuccess?.();
    } else {
      setError(SUBMIT_ERROR[lang]);
    }
  };

  const inputClass = isDark ? INPUT_DARK : INPUT_LIGHT;
  const textareaClass = isDark ? TEXTAREA_DARK : TEXTAREA_LIGHT;
  const fieldClass = `${inputClass} max-sm:px-5 max-sm:py-3.5 max-sm:text-base`;
  const textareaClassMobile = `${textareaClass} max-sm:min-h-[9.5rem] max-sm:px-5 max-sm:py-4 max-sm:text-base md:min-h-[12rem]`;

  return (
    <div className={className}>
      {!hideTitle ? (
        <h2
          className={`mb-8 sm:mb-10 md:mb-12 ${FORM_HEADLINE} ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          {c.formHeadline}{' '}
          <span className="text-brand">{c.formHeadlineAccent}</span>
        </h2>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="relative space-y-5 sm:space-y-6 md:space-y-7"
        toolname={WEBMCP_CONSULTATION.toolname}
        tooldescription={WEBMCP_CONSULTATION.tooldescription}
      >
        <FormHoneypot />

        <div className="flex flex-col gap-4 sm:gap-5 md:grid md:grid-cols-2 md:gap-6">
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder={`${c.namePlaceholderDark} *`}
            toolparamdescription={WEBMCP_CONSULTATION.params.name}
            className={fieldClass}
            aria-label={c.name}
          />
          <PhoneNumberField
            id="contact-phone"
            value={formData.phone}
            onChange={handleChange}
            required
            variant={isDark ? 'dark' : 'light'}
            placeholder={c.phonePlaceholderDark}
            ariaLabel={c.phone}
            toolparamdescription={WEBMCP_CONSULTATION.params.phone}
            className={fieldClass}
          />
        </div>

        <textarea
          id="contact-project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          rows={4}
          placeholder={c.projectPlaceholderDark}
          toolparamdescription={WEBMCP_CONSULTATION.params.project}
          className={textareaClassMobile}
          aria-label={c.project}
        />

        <div className="flex flex-col gap-3 pt-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
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
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className={`inline-flex max-w-full items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition sm:gap-3 sm:text-sm md:text-base ${
              isDark ? 'text-white/55 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 ${RADIUS_PILL} border-2 ${
                isDark ? 'border-white/15 bg-white/5' : 'border-neutral-300 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              }`}
            >
              <Paperclip className="h-5 w-5" strokeWidth={2} aria-hidden />
            </span>
            <span className="min-w-0 truncate">{c.attachFile}</span>
            {fileLabel ? (
              <span className="min-w-0 truncate font-normal normal-case tracking-normal text-neutral-500">
                {fileLabel}
              </span>
            ) : null}
          </button>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-100 pt-5 sm:gap-5 sm:border-0 sm:pt-2 md:flex-row md:items-end md:justify-between md:gap-8">
          {error ? (
            <p
              role="alert"
              className={`text-sm font-medium md:order-first md:w-full ${isDark ? 'text-red-400' : 'text-red-600'}`}
            >
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={sending}
            className={`order-1 inline-flex w-full shrink-0 items-center justify-center md:order-none md:w-auto md:min-w-[280px] ${
              isDark ? BTN_BRAND : BTN_BRAND_LG
            }`}
          >
            {sending ? SUBMITTING[lang] : c.submitDiscuss}
          </button>
          <p
            className={`order-2 max-w-lg text-[11px] leading-relaxed sm:text-xs md:order-none ${isDark ? 'text-white/35' : 'text-neutral-500'}`}
          >
            {c.consentBefore}{' '}
            <Link
              href={`/${lang}/privacy`}
              className={`underline underline-offset-2 ${isDark ? 'text-white/45 hover:text-white/60' : 'text-neutral-600 hover:text-neutral-800'}`}
            >
              {c.consentLink}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
