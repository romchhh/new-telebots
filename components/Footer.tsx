'use client';

import Image from 'next/image';
import Link from 'next/link';
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
            <div className="relative h-3 w-auto mb-8 max-w-[50px] mx-auto md:mx-0">
              <Image
                src="/whitelogo.png"
                alt="TeleBots"
                width={50}
                height={12}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm font-semibold leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black tracking-wider mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${currentLanguage}/about`} className="text-gray-400 hover:text-white transition text-sm font-semibold">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLanguage}/services`} className="text-gray-400 hover:text-white transition text-sm font-semibold">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLanguage}#portfolio`} className="text-gray-400 hover:text-white transition text-sm font-semibold">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLanguage}/blog`} className="text-gray-400 hover:text-white transition text-sm font-semibold">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLanguage}/contact`} className="text-gray-400 hover:text-white transition text-sm font-semibold">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black tracking-wider mb-6">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.email}</span>
                <a href="mailto:roman.fedoniuk@gmail.com" className="hover:text-white transition">
                  roman.fedoniuk@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm font-semibold">
                <span className="block text-xs font-normal text-gray-500 mb-1">{t.footer.phone}</span>
                <a href="tel:+380960908006" className="hover:text-white transition">
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
                className="text-gray-400 hover:text-white transition text-sm font-semibold"
              >
                Instagram
              </a>
              <a
                href="https://t.me/TeleBotsNowayrmChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-sm font-semibold"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-semibold mb-4 md:mb-0 text-center md:text-left">
            © 2025 TeleBots. {t.footer.rights}
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

