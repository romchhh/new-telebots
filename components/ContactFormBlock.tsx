'use client';

import { useState, FormEvent } from 'react';
import { sendToTelegram } from '@/lib/telegram';
import { translations, Language } from '@/components/translations';
import { SUBMIT_ERROR } from '@/lib/formMessages';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await sendToTelegram({
      name: formData.name,
      phone: formData.phone,
      project: formData.project,
      ...(serviceName ? { service: serviceName } : {}),
    });

    if (success) {
      setFormData({ name: '', phone: '', project: '' });
      onSuccess?.();
    } else {
      alert(SUBMIT_ERROR[lang]);
    }
  };

  return (
    <div className={className}>
      {hideTitle ? null : (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
          {t.contact.formTitle}
        </h2>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label className="mb-2 block text-sm font-normal text-brand">
            {t.contact.name} *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t.contact.namePlaceholder}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-normal text-brand">
            {t.contact.phone} *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={t.contact.phonePlaceholder}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-normal text-brand">
            {t.contact.project}
          </label>
          <textarea
            name="project"
            value={formData.project}
            onChange={handleChange}
            rows={4}
            placeholder={t.contact.projectPlaceholder}
            className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent resize-none"
          />
        </div>

        <div className="w-full pt-2 text-center lg:text-left">
          <button
            type="submit"
            className="inline-flex items-center justify-center min-w-[min(100%,280px)] sm:min-w-[300px] md:min-w-[340px] px-14 py-5 md:px-16 md:py-6 text-neutral-900 font-semibold text-lg md:text-xl rounded-full transition hover:bg-brand-light bg-brand tracking-wide shadow-md shadow-brand/25"
          >
            {t.contact.submit}
          </button>
        </div>
      </form>

      <p className="text-gray-600 font-semibold mt-10 lg:mt-12 leading-relaxed text-base lg:text-lg">
        {t.contact.help}
      </p>
    </div>
  );
}
