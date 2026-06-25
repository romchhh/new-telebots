'use client';

import Link from 'next/link';
import type { Language } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';

interface HomeResourceLinksProps {
  lang: Language;
  copy: {
    title: string;
    pricing: string;
    blogBot: string;
    blogSite: string;
  };
}

export default function HomeResourceLinks({ lang, copy }: HomeResourceLinksProps) {
  const links = [
    { href: `/${lang}/pricing`, label: copy.pricing },
    { href: '/uk/blog/skilky-koshtuye-telegram-bot', label: copy.blogBot },
    { href: '/uk/blog/skilky-koshtuye-sayt', label: copy.blogSite },
  ];

  return (
    <section
      aria-label={copy.title}
      className={`border-t border-gray-100 bg-white py-10 ${SITE_PX}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">{copy.title}</h2>
        <ul className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-800 underline-offset-4 transition-colors hover:text-[#F05A00] hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
