'use client';

import { FormEvent, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { legal } from '@/lib/legal';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  t: typeof import('./translations').translations.uk;
  onSubmit: (data: { name: string; phone: string; request: string }) => void;
}

export default function OrderModal({ isOpen, onClose, serviceName, t, onSubmit }: OrderModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      request: formData.get('request') as string,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-white max-w-lg w-full p-8 md:p-12 rounded-xl shadow-2xl">
        {/* Кнопка закриття */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm hover:border-gray-400 transition"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-black text-black mb-8 pr-12">
          {t.modal.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Поле імені */}
          <div>
            <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
              {t.modal.name} *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.modal.namePlaceholder}
              className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
            />
          </div>

          {/* Поле телефону */}
          <div>
            <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
              {t.modal.phone} *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t.modal.phonePlaceholder}
              className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent"
            />
          </div>

          {/* Поле запиту */}
          <div>
            <label className="block text-sm font-normal mb-2" style={{ color: '#E76F51' }}>
              {t.modal.request}
            </label>
            <textarea
              name="request"
              rows={4}
              placeholder={t.modal.requestPlaceholder}
              className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent resize-none"
            />
          </div>

          {/* Кнопка відправки */}
          <button
            type="submit"
            className="w-full py-4 text-white font-normal text-base rounded-full transition hover:opacity-90 bg-black"
          >
            {t.modal.submit}
          </button>

          {/* Кнопки Telegram та WhatsApp */}
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 mt-6 overflow-x-auto min-w-0">
            <a
              href="https://t.me/telebotsnowayrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full border-2 border-black text-black font-semibold text-xs sm:text-sm hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">{t.contact.telegram}</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full border-2 border-green-600 text-green-700 font-semibold text-xs sm:text-sm hover:bg-green-600 hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="whitespace-nowrap">{t.contact.whatsapp}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

