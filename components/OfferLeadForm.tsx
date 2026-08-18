'use client';

import { FormEvent, useState } from 'react';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from '@/components/SuccessMessage';
import { sendToTelegram } from '@/lib/telegram';
import { WEBMCP_OFFER } from '@/lib/webmcp';
import { OFFER_TELEGRAM_URL, type OfferPageCopy } from '@/lib/offerPageCopy';
import type { Language } from '@/components/translations';

export default function OfferLeadForm({
  lang,
  p,
}: {
  lang: Language;
  p: OfferPageCopy;
}) {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [formSending, setFormSending] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formSending) return;
    setFormSending(true);
    const success = await sendToTelegram({
      name: formData.name,
      phone: formData.phone,
      service: `Offer $200 · ${p.breadcrumb}`,
    });
    setFormSending(false);
    if (success) {
      setFormData({ name: '', phone: '' });
      setIsSuccessOpen(true);
    } else {
      alert(
        lang === 'uk'
          ? 'Помилка відправки. Спробуйте ще раз.'
          : lang === 'pl'
            ? 'Błąd wysyłki. Spróbuj ponownie.'
            : lang === 'ru'
              ? 'Ошибка отправки. Попробуйте ещё раз.'
              : 'Error sending. Please try again.'
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        toolname={WEBMCP_OFFER.toolname}
        tooldescription={WEBMCP_OFFER.tooldescription}
      >
        <div className="mb-8">
          <label htmlFor="offer-name" className="mb-2 block text-sm font-normal text-brand">
            {p.formName} *
          </label>
          <input
            id="offer-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder={p.formNamePlaceholder}
            toolparamdescription={WEBMCP_OFFER.params.name}
            className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-black focus:outline-none"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="offer-phone" className="mb-2 block text-sm font-normal text-brand">
            {p.formPhone} *
          </label>
          <input
            id="offer-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder={p.formPhonePlaceholder}
            toolparamdescription={WEBMCP_OFFER.params.phone}
            className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <OrderCtaPill
            size="sm"
            variant="brand"
            type="submit"
            label={formSending ? '…' : p.formSubmit}
            className="w-full sm:w-auto sm:min-w-[12rem]"
          />
          <a
            href={OFFER_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
          >
            {p.formTelegram}
          </a>
        </div>
      </form>
      {isSuccessOpen ? (
        <SuccessMessage
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
          message={p.formSuccess}
        />
      ) : null}
    </>
  );
}
