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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white max-w-lg w-full p-8 md:p-12 shadow-2xl rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
          {t.modal.title}
        </h2>
        <p className="text-gray-400 mb-8 font-semibold">{serviceName}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-black mb-2 tracking-wider">
              {t.modal.name}
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.modal.namePlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black outline-none transition text-black font-semibold rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-black mb-2 tracking-wider">
              {t.modal.phone}
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t.modal.phonePlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black outline-none transition text-black font-semibold rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-black mb-2 tracking-wider">
              {t.modal.request}
            </label>
            <textarea
              name="request"
              rows={4}
              placeholder={t.modal.requestPlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-black outline-none transition resize-none text-black font-semibold rounded-md"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-4 hover:bg-gray-900 transition tracking-wider font-black rounded-md"
            >
              {t.modal.submit}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition tracking-wider font-black rounded-md"
            >
              {t.modal.close}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

