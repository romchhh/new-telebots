'use client';

import Link from 'next/link';
import type { CSSProperties, FormEvent } from 'react';
import { Language } from './translations';
import { legal, WHATSAPP_WA_ME } from '@/lib/legal';
import { BLOG_PATH } from '@/lib/site';
import { sendToTelegram } from '@/lib/telegram';

interface FooterProps {
  t: typeof import('./translations').translations.uk;
  lang: Language;
  setLang: (lang: Language) => void;
  currentLang?: Language;
  onConsultClick?: () => void;
}

const SOCIALS = [
  { label: 'Telegram', href: 'https://t.me/telebotsnowayrm', icon: 'telegram' },
  { label: 'WhatsApp', href: WHATSAPP_WA_ME, icon: 'whatsapp' },
  { label: 'Instagram', href: 'https://www.instagram.com/telebotsnowayrm/', icon: 'instagram' },
  { label: 'Channel', href: 'https://t.me/TeleBotsNowayrmChannel', icon: 'telegram' },
] as const;

function copy(lang: Language) {
  if (lang === 'en') {
    return {
      home: 'Home',
      heading: 'Need a site or bot for your process?',
      discuss: 'Discuss a project',
      subscribe: 'Subscribe',
      subscribeTo: 'to the design journal',
      emailPh: 'Your email',
      privacy: 'Privacy policy',
      credit: 'Design & web by TeleBots',
      navAria: 'Site sections',
      socialAria: 'Social media and messengers',
    };
  }
  if (lang === 'pl') {
    return {
      home: 'Start',
      heading: 'Potrzebujesz strony lub bota pod swój proces?',
      discuss: 'Omówmy projekt',
      subscribe: 'Zapisz się',
      subscribeTo: 'do dziennika designu',
      emailPh: 'Twój email',
      privacy: 'Polityka prywatności',
      credit: 'Design i web — TeleBots',
      navAria: 'Sekcje strony',
      socialAria: 'Social media i messengery',
    };
  }
  if (lang === 'ru') {
    return {
      home: 'Главная',
      heading: 'Нужен сайт или бот под ваш процесс?',
      discuss: 'Обсудить проект',
      subscribe: 'Подписаться',
      subscribeTo: 'на дизайн-журнал',
      emailPh: 'Ваш email',
      privacy: 'Политика конфиденциальности',
      credit: 'Дизайн и разработка — TeleBots',
      navAria: 'Разделы сайта',
      socialAria: 'Соцсети и мессенджеры',
    };
  }
  return {
    home: 'Головна',
    heading: 'Потрібен сайт або бот під ваш процес?',
    discuss: 'Обговорити проєкт',
    subscribe: 'Підписатись',
    subscribeTo: 'на дизайн-журнал',
    emailPh: 'Ваш email',
    privacy: 'Політика конфіденційності',
    credit: 'Дизайн і розробка — TeleBots',
    navAria: 'Розділи сайту',
    socialAria: 'Соцмережі та месенджери',
  };
}

export default function Footer({ t, lang, currentLang, onConsultClick }: FooterProps) {
  const currentLanguage = currentLang || lang;
  const c = copy(currentLanguage);

  const nav = [
    { href: `/${currentLanguage}`, label: c.home },
    { href: `/${currentLanguage}/services`, label: t.nav.services },
    { href: `/${currentLanguage}/portfolio`, label: t.nav.portfolio },
    { href: BLOG_PATH, label: t.nav.blog },
    { href: `/${currentLanguage}/contact`, label: t.nav.contact },
  ];

  const onNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get('website') || '').trim()) return;
    const email = String(data.get('email') || '').trim();
    if (!email) return;
    const status = form.querySelector('#newsletter-status') as HTMLElement | null;
    if (status) {
      status.dataset.status = 'loading';
      status.textContent = '';
    }
    const ok = await sendToTelegram({
      name: 'Newsletter',
      phone: '—',
      request: email,
      service: 'Newsletter subscribe',
    });
    if (status) {
      status.dataset.status = ok ? 'success' : 'error';
      status.textContent = ok
        ? currentLanguage === 'en'
          ? 'Subscribed'
          : currentLanguage === 'pl'
            ? 'Zapisano'
            : currentLanguage === 'ru'
              ? 'Подписка оформлена'
              : 'Підписано'
        : currentLanguage === 'en'
          ? 'Try again later'
          : currentLanguage === 'pl'
            ? 'Spróbuj później'
            : currentLanguage === 'ru'
              ? 'Попробуйте позже'
              : 'Спробуйте пізніше';
    }
    if (ok) form.reset();
  };

  return (
    <footer aria-labelledby="finale-heading" className="site-finale" id="site-footer">
      <div className="finale-inner">
        <div className="finale-top" style={{ ['--reveal' as string]: 4 }}>
          <nav aria-label={c.navAria} className="finale-nav finale-reveal">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="finale-reveal finale-newsletter">
            <form aria-busy="false" className="newsletter" onSubmit={onNewsletter}>
              <label className="newsletter-label" htmlFor="newsletter-email">
                {c.subscribe}
                <br />
                {c.subscribeTo}
              </label>
              <div className="newsletter-field">
                <input
                  aria-describedby="newsletter-status"
                  autoComplete="email"
                  id="newsletter-email"
                  inputMode="email"
                  maxLength={120}
                  name="email"
                  placeholder={c.emailPh}
                  required
                  type="email"
                  defaultValue=""
                />
                <button aria-label={c.subscribe} type="submit">
                  <svg
                    aria-hidden="true"
                    className="tabler-icon tabler-icon-arrow-right"
                    fill="none"
                    height={24}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </button>
              </div>
              <div aria-hidden="true" className="honeypot">
                <label>
                  Website
                  <input autoComplete="off" name="website" tabIndex={-1} defaultValue="" />
                </label>
              </div>
              <p className="newsletter-status" data-status="idle" id="newsletter-status" role="status" />
            </form>
          </div>
        </div>

        <div className="finale-center">
          <h2
            className="finale-heading finale-reveal"
            id="finale-heading"
            style={{ ['--reveal' as string]: 3 }}
          >
            {c.heading}
          </h2>
          <a
            className="finale-email finale-reveal"
            href={`mailto:${legal.email}`}
            style={{ ['--reveal' as string]: 2 }}
          >
            {legal.email}
          </a>
          <div className="finale-actions finale-reveal" style={{ ['--reveal' as string]: 1 }}>
            <div className="footer-cta-dock footer-cta-dock--inline">
              <div className="cta-anchor">
                <button
                  aria-haspopup="dialog"
                  className="living-button living-button--light"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  type="button"
                  onClick={onConsultClick}
                >
                  <span aria-hidden="true" className="button-material">
                    <div
                      style={{
                        position: 'absolute',
                        isolation: 'isolate',
                        display: 'block',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '9999px',
                        backgroundColor: '#f4f4f6',
                        inset: 0,
                      }}
                    >
                      <span
                        style={{
                          position: 'relative',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      />
                    </div>
                  </span>
                  <span className="button-label">{c.discuss}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="finale-bottom" style={{ ['--reveal' as string]: 0 }}>
          <div className="finale-legal finale-reveal">
            <p>{t.footer.companyName}</p>
            <Link href={`/${currentLanguage}/privacy`}>{c.privacy}</Link>
            <p>
              © <span>2026</span> TeleBots
            </p>
          </div>
          <ul aria-label={c.socialAria} className="finale-socials finale-reveal">
            {SOCIALS.map(({ label, href, icon }) => (
              <li key={`${label}-${href}`}>
                <a href={href} rel="noopener noreferrer" target="_blank">
                  <span className="finale-social-label">{label}</span>
                  <span
                    aria-hidden="true"
                    className="social-icon"
                    style={{ ['--icon' as string]: `url(/images/${icon}.svg)` } as CSSProperties}
                  />
                  <span className="sr-only">( new tab )</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="finale-credit finale-reveal">
            <span>telebots.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
