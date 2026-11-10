'use client';

import Link from 'next/link';
import { ArrowUpRight, Globe } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { getLegalContact, legal } from '@/lib/legal';
import { translations, type Language } from '@/components/translations';
import { BTN_OUTLINE, CTA_ARROW_CIRCLE, CTA_ARROW_ICON, RADIUS_PILL } from '@/lib/siteUi';

/** Messenger-кнопки завжди на український номер. */
const UA_WHATSAPP_HREF = `https://api.whatsapp.com/send/?phone=${legal.phoneRaw}&text&type=phone_number&app_absent=0`;
const TELEGRAM_HREF = 'https://t.me/telebotsnowayrm';

type T = (typeof translations)['uk'];

interface ContactDetailsColumnProps {
  t: T;
  lang?: Language;
  className?: string;
  variant?: 'light' | 'dark';
  layout?: 'default' | 'sidebar';
}

export default function ContactDetailsColumn({
  t,
  lang = 'uk',
  className = '',
  variant = 'light',
  layout = 'default',
}: ContactDetailsColumnProps) {
  const isDark = variant === 'dark';
  const c = t.contact;
  const contact = getLegalContact(lang);

  if (layout === 'sidebar') {
    const pillClass = isDark
      ? 'border-white/12 bg-white/[0.04] text-white/80'
      : 'border-neutral-200 bg-white text-neutral-700';
    const muted = isDark ? 'text-white/75' : 'text-neutral-600';
    const sub = isDark ? 'text-white/45' : 'text-neutral-500';
    const phoneClass = isDark
      ? 'text-brand hover:text-brand-light'
      : 'text-neutral-900 hover:text-brand';

    return (
      <div className={`flex h-full flex-col ${className}`}>
        <div className={`mb-8 inline-flex w-fit items-center gap-2.5 ${RADIUS_PILL} border px-5 py-2.5 text-base ${pillClass}`}>
          <Globe className={`h-5 w-5 ${isDark ? 'text-white/50' : 'text-neutral-400'}`} aria-hidden />
          {c.locationLabel}
        </div>

        <p className={`text-base leading-relaxed sm:text-lg ${muted}`}>{t.footer.legalAddress}</p>

        <div className="mt-8">
          <a
            href={`tel:${contact.phoneRaw}`}
            className={`text-2xl font-bold underline-offset-4 hover:underline sm:text-3xl ${phoneClass}`}
          >
            {contact.phone}
          </a>
          <p className={`mt-2 text-sm sm:text-base ${sub}`}>{c.phoneFree}</p>
        </div>

        <div className="mt-10 space-y-5">
          <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer" className="group block">
            <span className="inline-flex items-center gap-2.5 text-[clamp(1.35rem,5vw,2.25rem)] font-black text-brand transition group-hover:text-brand-dark sm:text-[clamp(1.65rem,4vw,2.25rem)]">
              <FaTelegramPlane className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden />
              {c.writeUs}
            </span>
            <span className={`mt-2 block text-base ${sub}`}>{c.writeUsSub}</span>
          </a>
          <a href={UA_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="group block">
            <span className="inline-flex items-center gap-2.5 text-[clamp(1.2rem,4.5vw,1.85rem)] font-black text-brand transition group-hover:text-brand-dark">
              <FaWhatsapp className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden />
              {c.whatsapp}
            </span>
            <span className={`mt-2 block text-base ${sub}`}>{legal.phone}</span>
          </a>
        </div>

        <div className="mt-auto pt-12">
          {isDark ? (
            <Link
              href={`/${lang}/portfolio`}
              className={`group inline-flex w-full items-center justify-between gap-3 ${RADIUS_PILL} border border-brand/35 bg-white/[0.03] pl-5 pr-1.5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:border-brand/55 hover:bg-brand/10 sm:text-sm`}
            >
              <span className="min-w-0 flex-1 text-left">{c.presentationCta}</span>
              <span
                className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} border border-brand/40 bg-transparent text-brand transition-transform group-hover:scale-105 ${CTA_ARROW_CIRCLE.sm}`}
              >
                <ArrowUpRight className={CTA_ARROW_ICON.sm} strokeWidth={2.25} aria-hidden />
              </span>
            </Link>
          ) : (
            <Link
              href={`/${lang}/portfolio`}
              className={`group inline-flex w-full items-center justify-between gap-3 ${BTN_OUTLINE} pl-5 pr-1.5 py-2`}
            >
              <span className="min-w-0 flex-1 text-left">{c.presentationCta}</span>
              <span
                className={`flex shrink-0 items-center justify-center ${RADIUS_PILL} bg-neutral-900 text-white transition-transform group-hover:scale-105 ${CTA_ARROW_CIRCLE.sm}`}
              >
                <ArrowUpRight className={CTA_ARROW_ICON.sm} strokeWidth={2.25} aria-hidden />
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h2
        className={`mb-10 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:mb-12 md:text-5xl ${isDark ? 'text-white' : 'text-neutral-900'}`}
      >
        {c.contacts}
      </h2>
      <div className="space-y-8">
        <div className={`border-b pb-6 ${isDark ? 'border-white/10' : 'border-neutral-200'}`}>
          <p className={`text-lg font-black ${isDark ? 'text-white' : 'text-neutral-900'}`}>{t.footer.companyName}</p>
          <p className={`mt-2 font-semibold ${isDark ? 'text-white/60' : 'text-neutral-600'}`}>
            {t.footer.address}: {t.footer.legalAddress}
          </p>
        </div>
        <a
          href={`tel:${contact.phoneRaw}`}
          className={`block text-2xl font-black transition ${isDark ? 'text-white hover:text-brand-light' : 'text-neutral-900 hover:text-brand'}`}
        >
          {contact.phone}
        </a>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={TELEGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 px-6 py-4 ${RADIUS_PILL} ${isDark ? 'bg-white text-neutral-900 hover:bg-brand-light' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
          >
            <FaTelegramPlane className="h-6 w-6" aria-hidden />
            <span className="font-black tracking-wider">{c.telegram}</span>
          </a>
          <a
            href={UA_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 px-6 py-4 ${RADIUS_PILL} ${isDark ? 'bg-white text-neutral-900 hover:bg-brand-light' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
          >
            <FaWhatsapp className="h-6 w-6" aria-hidden />
            <span className="font-black tracking-wider">{c.whatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
