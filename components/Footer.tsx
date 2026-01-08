'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Send } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language } from './translations';

interface FooterProps {
  t: typeof import('./translations').translations.uk;
  lang: Language;
  setLang: (lang: Language) => void;
  currentLang?: Language;
}

export default function Footer({ t, lang, setLang, currentLang }: FooterProps) {
  const currentLanguage = currentLang || lang;
  const showLanguageSelector = currentLanguage !== 'ru';
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="relative h-3 w-auto max-w-[50px]">
                <Image
                  src="/whitelogo.png"
                  alt="TeleBots - Професійна розробка цифрових рішень"
                  width={50}
                  height={12}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-white text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>
                TeleBots
              </span>
            </div>
            <p className="text-gray-400 text-[15px] md:text-[16px] lg:text-[17px] font-normal leading-[1.65]">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black tracking-wider mb-6">
              {t.footer.quickLinks}
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <Link href={`/${currentLanguage}/about`} className="text-gray-400 hover:text-white transition text-sm font-semibold" aria-label={`${t.nav.about} - TeleBots`}>
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/services`} className="text-gray-400 hover:text-white transition text-sm font-semibold" aria-label={`${t.nav.services} - TeleBots`}>
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/portfolio`} className="text-gray-400 hover:text-white transition text-sm font-semibold" aria-label={`${t.nav.portfolio} - TeleBots`}>
                    {t.nav.portfolio}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/blog`} className="text-gray-400 hover:text-white transition text-sm font-semibold" aria-label={`${t.nav.blog} - TeleBots`}>
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href={`/${currentLanguage}/contact`} className="text-gray-400 hover:text-white transition text-sm font-semibold" aria-label={`${t.nav.contact} - TeleBots`}>
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black tracking-wider mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.email}</span>
                <a href="mailto:roman.fedoniuk@gmail.com" className="hover:text-white transition" aria-label="Email TeleBots - roman.fedoniuk@gmail.com">
                  roman.fedoniuk@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.phone}</span>
                <a href="tel:+380960908006" className="hover:text-white transition" aria-label="Phone TeleBots - +380960908006">
                  +38 0 96 090 80 06
                </a>
              </li>
              <li className="text-gray-400 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.address}</span>
                Kyiv, Ukraine
              </li>
            </ul>
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/telebotsnowayrm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 hover:border-white hover:bg-white/10"
                aria-label="Instagram - TeleBots"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/TeleBotsNowayrmChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 hover:border-white hover:bg-white/10"
                aria-label="Telegram - TeleBots"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-semibold mb-4 md:mb-0 text-center md:text-left">
            © 2026 TeleBots. {t.footer.rights}
          </p>
          <div className="flex space-x-6">
            <Link href={`/${currentLanguage}/privacy`} className="text-gray-500 hover:text-white transition text-sm font-semibold">
              {t.footer.privacy}
            </Link>
            <Link href={`/${currentLanguage}/terms`} className="text-gray-500 hover:text-white transition text-sm font-semibold">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

