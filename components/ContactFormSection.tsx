'use client';

import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import ContactFormWithSuccess from '@/components/ContactFormWithSuccess';
import type { Language, SiteCopy } from '@/components/translations';
import { getLegalContact, legal, WHATSAPP_HREF } from '@/lib/legal';

const TELEGRAM_HREF = 'https://t.me/telebotsnowayrm';

type ContactFormSectionProps = {
  t: SiteCopy;
  lang: Language;
  serviceName?: string;
  id?: string;
  className?: string;
  onSuccess?: () => void;
};

export default function ContactFormSection({
  t,
  lang,
  serviceName,
  id = 'contact-form',
  className = '',
  onSuccess,
}: ContactFormSectionProps) {
  const c = t.contact;
  const contact = getLegalContact(lang);

  return (
    <section id={id} className={`contact-page bg-white ${className}`.trim()}>
      <div className="contact-intro">
        <h2 className="contact-intro-title">{c.contacts}</h2>
        <p className="contact-lead">{c.formEyebrow}</p>

        <ul className="contact-channels" aria-label={c.contacts}>
          <li>
            <a href={`tel:${contact.phoneRaw}`}>
              <span className="contact-label">{c.locationLabel}</span>
              <span className="contact-channel-value">{t.footer.legalAddress}</span>
              <span className="contact-channel-meta">{contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">Telegram</span>
              <span className="contact-channel-value">
                <FaTelegramPlane aria-hidden className="h-[0.9em] w-[0.9em]" />
                {c.writeUs}
              </span>
              <span className="contact-channel-meta">{c.writeUsSub}</span>
            </a>
          </li>
          <li>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-channel-value">
                <FaWhatsapp aria-hidden className="h-[0.9em] w-[0.9em]" />
                {c.whatsapp}
              </span>
              <span className="contact-channel-meta">{legal.whatsapp}</span>
            </a>
          </li>
          <li>
            <Link href={`/${lang}/portfolio`}>
              <span className="contact-label">{c.presentationCta}</span>
              <span className="contact-channel-value">{t.nav.portfolio}</span>
              <span className="contact-channel-meta">telebots.site</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="contact-card">
        <ContactFormWithSuccess
          t={t}
          lang={lang}
          serviceName={serviceName}
          variant="site"
          onSuccess={onSuccess}
        />
      </div>
    </section>
  );
}
