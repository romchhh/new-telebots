'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Instagram, Send } from 'lucide-react';
import OrderCtaPill from '@/components/OrderCtaPill';
import { Language } from './translations';
import { legal } from '@/lib/legal';
import { SITE_PX } from '@/lib/siteLayout';
import { BLOG_PATH } from '@/lib/site';

interface FooterProps {
  t: typeof import('./translations').translations.uk;
  lang: Language;
  setLang: (lang: Language) => void;
  currentLang?: Language;
  onConsultClick?: () => void;
}

const footerLogoStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: 900,
  fontFamily: "'Arial Black', sans-serif",
  letterSpacing: '-0.5px',
  lineHeight: 1,
  color: '#000',
};

export default function Footer({ t, lang, setLang, currentLang, onConsultClick }: FooterProps) {
  const currentLanguage = currentLang || lang;
  return (
    <footer id="contact" className="border-t border-black/10 bg-white text-black">
      <div className={`${SITE_PX} py-12 md:py-20`}>
        <div className="mb-10 grid gap-10 md:mb-16 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href={`/${currentLanguage}`}
              className="mb-5 inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="TeleBots"
            >
              <span style={footerLogoStyle}>telebots.</span>
            </Link>
            <p className="max-w-sm text-[15px] font-normal leading-[1.65] text-gray-600 md:text-[16px] lg:text-[17px]">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-black tracking-wider text-black md:mb-6">
              {t.footer.quickLinks}
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-2 md:flex md:flex-col md:items-start md:gap-0 md:space-y-3">
                <li>
                  <Link href={`/${currentLanguage}/services`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap" aria-label={`${t.nav.services} - TeleBots`}>
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/services/websites`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {t.services.websitesPage.title}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/services/chatbots`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {t.services.chatbotsPage.title}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/services/design`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {t.services.designPage.title}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/chatbots-buy`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'Buy chatbots'
                      : currentLanguage === 'pl'
                        ? 'Kup chatboty'
                        : currentLanguage === 'ru'
                          ? 'Чат-боты купить'
                          : 'Чат-боти купити'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/telegram-bots`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'Telegram bots'
                      : currentLanguage === 'pl'
                        ? 'Boty Telegram'
                        : currentLanguage === 'ru'
                          ? 'Telegram-боты'
                          : 'Telegram-боти'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/landing-pages`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'Landing pages'
                      : currentLanguage === 'pl'
                        ? 'Landing pages'
                        : currentLanguage === 'ru'
                          ? 'Лендинги'
                          : 'Лендінги'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/online-stores`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'Online stores'
                      : currentLanguage === 'pl'
                        ? 'Sklepy online'
                        : currentLanguage === 'ru'
                          ? 'Интернет-магазины'
                          : 'Інтернет-магазини'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/ai-chatbots`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'AI chatbots'
                      : currentLanguage === 'pl'
                        ? 'Chatboty AI'
                        : currentLanguage === 'ru'
                          ? 'AI чат-боты'
                          : 'AI чат-боти'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/solutions/data-parsers`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap">
                    {currentLanguage === 'en'
                      ? 'Data parsers'
                      : currentLanguage === 'pl'
                        ? 'Parsery danych'
                        : currentLanguage === 'ru'
                          ? 'Парсеры данных'
                          : 'Парсери даних'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/portfolio`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap" aria-label={`${t.nav.portfolio} - TeleBots`}>
                    {t.nav.portfolio}
                  </Link>
                </li>
                <li>
                  <Link href={BLOG_PATH} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap" aria-label={`${t.nav.blog} - TeleBots`}>
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/contact`} className="text-gray-600 hover:text-brand transition text-sm font-semibold whitespace-nowrap" aria-label={`${t.nav.contact} - TeleBots`}>
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact / Legal */}
          <div>
            <h2 className="mb-4 text-sm font-black tracking-wider text-black md:mb-6">
              {t.footer.contact}
            </h2>
            <ul className="mb-6 space-y-3">
              <li className="text-gray-600 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.legalBlockTitle}</span>
                <span className="block text-xs font-normal text-gray-500 mt-2 mb-0.5">{t.footer.recipientLabel}</span>
                <span className="text-black">{t.footer.companyName}</span>
                <span className="block text-gray-600 mt-1 break-all">{t.footer.footerIban}: {legal.iban}</span>
                <span className="block text-gray-600 mt-1">{t.footer.footerEdrpou}: {legal.edrpou}</span>
              </li>
              <li className="text-gray-600 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.address}</span>
                <span className="text-black">{t.footer.legalAddress}</span>
              </li>
              <li className="text-gray-600 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.phone}</span>
                <a href={`tel:${legal.phoneRaw}`} className="hover:text-brand transition" aria-label={`Phone - ${legal.phone}`}>
                  {legal.phone}
                </a>
              </li>
              <li className="text-gray-600 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.email}</span>
                <a href={`mailto:${legal.email}`} className="hover:text-brand transition break-all" aria-label={`Email - ${legal.email}`}>
                  {legal.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-2 md:pt-4">
              <a
                href="https://www.instagram.com/telebotsnowayrm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black/5"
                aria-label="Instagram - TeleBots"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/TeleBotsNowayrmChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black/5"
                aria-label="Telegram - TeleBots"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
            {onConsultClick && (
              <div className="mt-6 w-full max-w-sm md:mt-8">
                <OrderCtaPill
                  size="sm"
                  variant="brand"
                  label={t.nav.consultation}
                  onClick={onConsultClick}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm font-semibold text-gray-500 md:text-left">
            © 2026 TeleBots. {t.footer.rights}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end md:gap-x-6 md:gap-y-2">
            <Link href={`/${currentLanguage}/privacy`} className="text-gray-500 hover:text-brand transition text-sm font-semibold">
              {t.footer.privacy}
            </Link>
            <Link href={`/${currentLanguage}/terms`} className="text-gray-500 hover:text-brand transition text-sm font-semibold">
              {t.footer.terms}
            </Link>
            <Link href={`/${currentLanguage}/refund`} className="text-gray-500 hover:text-brand transition text-sm font-semibold">
              {t.footer.refund}
            </Link>
            <Link href={`/${currentLanguage}/offer`} className="text-gray-500 hover:text-brand transition text-sm font-semibold">
              {currentLanguage === 'en'
                ? 'Public offer'
                : currentLanguage === 'pl'
                  ? 'Oferta publiczna'
                  : currentLanguage === 'ru'
                    ? 'Публичная оферта'
                    : 'Публічна оферта'}
            </Link>
            <Link href={`/${currentLanguage}/pricing`} className="text-gray-500 hover:text-brand transition text-sm font-semibold">
              {t.footer.pricing}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
