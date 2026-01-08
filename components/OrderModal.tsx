'use client';

import { FormEvent } from 'react';
import { X } from 'lucide-react';
import { Language } from './translations';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  t: typeof import('./translations').translations.uk;
  onSubmit: (data: { name: string; phone: string; request: string }) => void;
}

export default function OrderModal({ isOpen, onClose, serviceName, t, onSubmit }: OrderModalProps) {
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
        </form>
      </div>
    </div>
  );
}

