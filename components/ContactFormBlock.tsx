'use client';

import { useState, FormEvent } from 'react';
import { sendToTelegram } from '@/lib/telegram';
import { translations, Language } from '@/components/translations';

type T = (typeof translations)['uk'];

const SUBMIT_ERROR: Record<Language, string> = {
  uk: "Помилка відправки. Спробуйте ще раз або зв'яжіться з нами безпосередньо.",
  en: 'Error sending. Please try again or contact us directly.',
  pl: 'Błąd wysyłki. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
  ru: 'Ошибка отправки. Попробуйте ещё раз или свяжитесь с нами напрямую.',
};

interface ContactFormBlockProps {
  t: T;
  lang: Language;
  onSuccess?: () => void;
  className?: string;
  /** When set (e.g. on a service page), included in Telegram payload */
  serviceName?: string;
}

export default function ContactFormBlock({
  t,
  lang,
  onSuccess,
  className = '',
  serviceName,
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
        {t.contact.formTitle}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
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
          <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
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
          <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
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
            className="inline-flex items-center justify-center min-w-[min(100%,280px)] sm:min-w-[300px] md:min-w-[340px] px-14 py-5 md:px-16 md:py-6 text-white font-semibold text-lg md:text-xl rounded-full transition hover:opacity-90 bg-black tracking-wide"
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
