'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import FormHoneypot from '@/components/FormHoneypot';
import SuccessMessage from '@/components/SuccessMessage';
import { sendToTelegram } from '@/lib/telegram';
import { antiSpamFromFormData } from '@/lib/antiSpam';
import {
  type PartnershipDirectionId,
  type PartnershipPageCopy,
} from '@/lib/partnershipPageCopy';
import type { Language } from '@/components/translations';
import {
  BTN_BRAND_LG,
  INPUT_LIGHT,
  RADIUS_PILL,
  TEXTAREA_LIGHT,
  TYPE_DISPLAY_H2,
} from '@/lib/siteUi';

const display = { fontFamily: 'var(--font-display)' } as const;

export default function PartnershipLeadForm({
  lang,
  p,
}: {
  lang: Language;
  p: PartnershipPageCopy;
}) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    direction: '' as PartnershipDirectionId | '',
    comment: '',
    consent: false,
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    if (!formData.consent || !formData.direction) {
      setError(p.formError);
      return;
    }

    setSending(true);
    setError('');

    const directionLabel =
      p.formDirections.find((item) => item.id === formData.direction)?.label ?? formData.direction;
    const contact = formData.contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    const success = await sendToTelegram({
      name: formData.name.trim(),
      phone: contact,
      ...(isEmail ? { email: contact } : {}),
      service: `Partnership · ${p.navLabel}`,
      project: [
        `Напрям: ${directionLabel}`,
        formData.comment.trim() ? `Коментар: ${formData.comment.trim()}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
      ...antiSpamFromFormData(new FormData(e.currentTarget)),
    });

    setSending(false);

    if (success) {
      setFormData({
        name: '',
        contact: '',
        direction: '',
        comment: '',
        consent: false,
      });
      setIsSuccessOpen(true);
    } else {
      setError(p.formError);
    }
  };

  return (
    <>
      <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.18)] sm:p-8 md:p-10">
        <h3 className={`mb-6 text-neutral-900 sm:mb-8 ${TYPE_DISPLAY_H2}`} style={display}>
          {p.formTitle}
        </h3>

        <form onSubmit={handleSubmit} className="relative space-y-5 sm:space-y-6" noValidate>
          <FormHoneypot />

          <div>
            <label htmlFor="partnership-name" className="mb-2 block text-sm font-semibold text-neutral-800">
              {p.formName} *
            </label>
            <input
              id="partnership-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => {
                setError('');
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              placeholder={p.formNamePlaceholder}
              className={INPUT_LIGHT}
            />
          </div>

          <div>
            <label htmlFor="partnership-contact" className="mb-2 block text-sm font-semibold text-neutral-800">
              {p.formContact} *
            </label>
            <input
              id="partnership-contact"
              name="contact"
              type="text"
              required
              autoComplete="tel"
              value={formData.contact}
              onChange={(e) => {
                setError('');
                setFormData((prev) => ({ ...prev, contact: e.target.value }));
              }}
              placeholder={p.formContactPlaceholder}
              className={INPUT_LIGHT}
            />
          </div>

          <div>
            <label htmlFor="partnership-direction" className="mb-2 block text-sm font-semibold text-neutral-800">
              {p.formDirection} *
            </label>
            <select
              id="partnership-direction"
              name="direction"
              required
              value={formData.direction}
              onChange={(e) => {
                setError('');
                setFormData((prev) => ({
                  ...prev,
                  direction: e.target.value as PartnershipDirectionId | '',
                }));
              }}
              className={`${INPUT_LIGHT} appearance-none bg-[length:1rem] bg-[right_1.25rem_center] bg-no-repeat pr-12`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23525252'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
              }}
            >
              <option value="" disabled>
                {p.formDirectionPlaceholder}
              </option>
              {p.formDirections.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="partnership-comment" className="mb-2 block text-sm font-semibold text-neutral-800">
              {p.formComment}
            </label>
            <textarea
              id="partnership-comment"
              name="comment"
              rows={4}
              value={formData.comment}
              onChange={(e) => {
                setError('');
                setFormData((prev) => ({ ...prev, comment: e.target.value }));
              }}
              placeholder={p.formCommentPlaceholder}
              className={TEXTAREA_LIGHT}
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-neutral-600">
            <input
              type="checkbox"
              name="consent"
              required
              checked={formData.consent}
              onChange={(e) => {
                setError('');
                setFormData((prev) => ({ ...prev, consent: e.target.checked }));
              }}
              className={`mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand)] ${RADIUS_PILL}`}
            />
            <span>
              {p.formConsent}{' '}
              <Link
                href={`/${lang}/privacy`}
                className="font-semibold text-neutral-900 underline-offset-2 hover:text-brand hover:underline"
              >
                {p.formConsentLink}
              </Link>
            </span>
          </label>

          {error ? (
            <p role="alert" className="text-sm font-medium text-red-600">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={sending}
            className={`inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[16rem] ${BTN_BRAND_LG}`}
          >
            {sending ? p.formSending : p.formSubmit}
          </button>
        </form>
      </div>

      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={p.formSuccess}
      />
    </>
  );
}
