'use client';

import { useState, FormEvent } from 'react';
import { sendToTelegram } from '@/lib/telegram';
import { translations, Language } from '@/components/translations';
import { SUBMIT_ERROR, SUBMITTING } from '@/lib/formMessages';
import { WEBMCP_CONSULTATION } from '@/lib/webmcp';

type T = (typeof translations)['uk'];

interface ContactFormBlockProps {
  t: T;
  lang: Language;
  onSuccess?: () => void;
  className?: string;
  /** When set (e.g. on a service page), included in Telegram payload */
  serviceName?: string;
  /** Приховати внутрішній H2, якщо заголовок уже є в секції сторінки */
  hideTitle?: boolean;
}

export default function ContactFormBlock({
  t,
  lang,
  onSuccess,
  className = '',
  serviceName,
  hideTitle = false,
}: ContactFormBlockProps) {
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

    const success = await sendToTelegram({
      name: formData.name,
      phone: formData.phone,
      project: formData.project,
      ...(serviceName ? { service: serviceName } : {}),
    });

    setSending(false);

    if (success) {
      setFormData({ name: '', phone: '', project: '' });
      onSuccess?.();
    } else {
      setError(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <div className={className}>
      {hideTitle ? null : (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
          {t.contact.formTitle}
        </h2>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-10"
        toolname={WEBMCP_CONSULTATION.toolname}
        tooldescription={WEBMCP_CONSULTATION.tooldescription}
      >
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-normal text-brand">
            {t.contact.name} *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder={t.contact.namePlaceholder}
            toolparamdescription={WEBMCP_CONSULTATION.params.name}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-normal text-brand">
            {t.contact.phone} *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder={t.contact.phonePlaceholder}
            toolparamdescription={WEBMCP_CONSULTATION.params.phone}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
          />
        </div>

        <div>
          <label htmlFor="contact-project" className="mb-2 block text-sm font-normal text-brand">
            {t.contact.project}
          </label>
          <textarea
            id="contact-project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            rows={4}
            placeholder={t.contact.projectPlaceholder}
            toolparamdescription={WEBMCP_CONSULTATION.params.project}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent resize-none"
          />
        </div>

        <div className="w-full pt-2 text-center lg:text-left">
          {error ? (
            <p role="alert" className="mb-4 text-sm font-medium text-red-600 lg:text-left">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center min-w-[min(100%,280px)] sm:min-w-[300px] md:min-w-[340px] px-14 py-5 md:px-16 md:py-6 text-neutral-900 font-semibold text-lg md:text-xl rounded-full transition hover:bg-brand-light bg-brand tracking-wide shadow-md shadow-brand/25 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? SUBMITTING[lang] : t.contact.submit}
          </button>
        </div>
      </form>

      <p className="text-gray-600 font-semibold mt-10 lg:mt-12 leading-relaxed text-base lg:text-lg">
        {t.contact.help}
      </p>
    </div>
  );
}
