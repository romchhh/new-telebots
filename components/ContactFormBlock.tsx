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
    email: '',
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
        email: formData.email,
        phone: formData.phone,
        project: projectLines.join('\n'),
        ...(serviceName ? { service: serviceName } : {}),
        ...antiSpamFromFormData(new FormData(e.currentTarget)),
      },
      attachment
    );

    setSending(false);

    if (success) {
      setFormData({ name: '', email: '', phone: '', project: '' });
      setFileLabel('');
      if (fileRef.current) fileRef.current.value = '';
      onSuccess?.();
    } else {
      setError(SUBMIT_ERROR[lang]);
    }
  };

  const inputClass = isDark ? INPUT_DARK : INPUT_LIGHT;
  const textareaClass = isDark ? TEXTAREA_DARK : TEXTAREA_LIGHT;

  return (
    <div className={className}>
      {!hideTitle ? (
        <h2
          className={`mb-10 sm:mb-12 ${FORM_HEADLINE} ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          {c.formHeadline}{' '}
          <span className="text-brand">{c.formHeadlineAccent}</span>
        </h2>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="relative space-y-6 sm:space-y-7"
        toolname={WEBMCP_CONSULTATION.toolname}
        tooldescription={WEBMCP_CONSULTATION.tooldescription}
      >
        <FormHoneypot />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
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
            className={inputClass}
            aria-label={c.name}
          />
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder={`${c.emailPlaceholder} *`}
            className={inputClass}
            aria-label={c.email}
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
            className={`${inputClass} sm:col-span-2`}
          />
        </div>

        <textarea
          id="contact-project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          rows={5}
          placeholder={c.projectPlaceholderDark}
          toolparamdescription={WEBMCP_CONSULTATION.params.project}
          className={textareaClass}
          aria-label={c.project}
        />

        <div className="flex flex-wrap items-center gap-3 pt-1">
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
            className={`inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] transition sm:text-base ${
              isDark ? 'text-white/55 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12 ${RADIUS_PILL} border-2 ${
                isDark ? 'border-white/15 bg-white/5' : 'border-neutral-300 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              }`}
            >
              <Paperclip className="h-5 w-5" strokeWidth={2} aria-hidden />
            </span>
            {c.attachFile}
            {fileLabel ? `: ${fileLabel}` : ''}
          </button>
        </div>

        <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <p
            className={`max-w-lg text-xs leading-relaxed ${isDark ? 'text-white/35' : 'text-neutral-500'}`}
          >
            {c.consentBefore}{' '}
            <Link
              href={`/${lang}/privacy`}
              className={`underline underline-offset-2 ${isDark ? 'text-white/45 hover:text-white/60' : 'text-neutral-600 hover:text-neutral-800'}`}
            >
              {c.consentLink}
            </Link>
          </p>
          {error ? (
            <p role="alert" className={`text-base font-medium sm:order-first sm:w-full ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={sending}
            className={`inline-flex w-full shrink-0 items-center justify-center sm:w-auto sm:min-w-[280px] ${
              isDark ? BTN_BRAND : BTN_BRAND_LG
            }`}
          >
            {sending ? SUBMITTING[lang] : c.submitDiscuss}
          </button>
        </div>
      </form>
    </div>
  );
}
