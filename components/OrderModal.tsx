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
      
      <div className="relative bg-white max-w-xl w-full max-h-[80vh] h-[80vh] p-6 md:p-8 rounded-xl shadow-2xl flex flex-col">
        {/* Кнопка закриття */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm hover:border-gray-400 transition"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4 pr-10">
          {t.modal.title}
        </h2>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col space-y-4 overflow-y-auto pr-1">
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
                rows={3}
                placeholder={t.modal.requestPlaceholder}
                className="w-full py-2 text-black font-normal text-base border-0 border-b-2 border-black focus:outline-none focus:border-black bg-transparent resize-none"
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* Кнопка відправки */}
            <button
              type="submit"
              className="w-full py-3.5 text-white font-normal text-base rounded-full transition hover:opacity-90 bg-black"
            >
              {t.modal.submit}
            </button>

            {/* Кнопки Telegram та WhatsApp */}
            <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-6 pb-1 overflow-x-auto min-w-0">
              <a
                href="https://t.me/telebotsnowayrm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-black text-black font-semibold text-base sm:text-lg hover:bg-black hover:text-white transition-colors flex-shrink-0"
              >
                <span className="whitespace-nowrap">Telegram</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-green-600 text-green-700 font-semibold text-base sm:text-lg hover:bg-green-600 hover:text-white transition-colors flex-shrink-0"
              >
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

