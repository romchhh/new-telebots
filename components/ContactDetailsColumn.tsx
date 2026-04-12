'use client';

import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { legal } from '@/lib/legal';
import { translations } from '@/components/translations';

type T = (typeof translations)['uk'];

interface ContactDetailsColumnProps {
  t: T;
  className?: string;
}

/**
 * Блок реквізитів і швидких контактів (як права колонка на /contact).
 */
export default function ContactDetailsColumn({ t, className = '' }: ContactDetailsColumnProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-10 md:mb-12 leading-tight">
        {t.contact.contacts}
      </h2>

      <div className="space-y-8">
        <div className="pb-6 border-b border-gray-200">
          <p className="text-lg font-black text-black">{t.footer.companyName}</p>
          <p className="text-gray-600 font-semibold mt-1 break-all">
            {t.footer.footerIban}: {legal.iban}
          </p>
          <p className="text-gray-600 font-semibold mt-1">
            {t.footer.footerEdrpou}: {legal.edrpou}
          </p>
          <p className="text-gray-600 font-semibold mt-2">
            {t.footer.address}: {t.footer.legalAddress}
          </p>
        </div>

        <div className="pb-6 border-b border-gray-200">
          <a
            href={`tel:${legal.phoneRaw}`}
            className="text-2xl font-black text-black hover:text-gray-600 transition"
          >
            {legal.phone}
          </a>
        </div>

        <div className="pb-6 border-b border-gray-200">
          <a
            href={`mailto:${legal.email}`}
            className="text-xl font-black text-black hover:text-gray-600 transition break-all"
          >
            {legal.email}
          </a>
        </div>

        <div className="pt-4 space-y-4">
          <a
            href={`https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
          >
            <FaWhatsapp className="w-6 h-6 flex-shrink-0" aria-hidden />
            <span className="tracking-wider font-black">{t.contact.whatsapp}</span>
            <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
              <div className="w-8 h-px bg-white" />
            </div>
          </a>

          <a
            href="https://t.me/telebotsnowayrm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-black text-white py-4 px-6 hover:bg-gray-900 transition-all duration-300 w-full rounded-full"
          >
            <FaTelegramPlane className="w-6 h-6 flex-shrink-0" aria-hidden />
            <span className="tracking-wider font-black">{t.contact.telegram}</span>
            <div className="w-0 group-hover:w-8 overflow-hidden transition-all duration-300 ml-0 group-hover:ml-3">
              <div className="w-8 h-px bg-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
