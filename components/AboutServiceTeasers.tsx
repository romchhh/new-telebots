'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_IDS, SERVICE_IMAGES, SERVICE_KEY_MAP } from '@/app/[lang]/services/[serviceId]/metadata';

type T = typeof import('./translations').translations.uk;

export default function AboutServiceTeasers({ t, lang }: { t: T; lang: string }) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-4 md:mt-0 md:w-[min(100%,460px)] lg:w-[min(100%,500px)]">
      {SERVICE_IDS.map((id) => {
        const key = SERVICE_KEY_MAP[id];
        const page = t.services[key];
        return (
          <Link
            key={id}
            href={`/${lang}/services/${id}`}
            className="group relative block min-h-[168px] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/15 bg-black shadow-md outline-none transition duration-200 hover:border-white/55 hover:shadow-[0_14px_44px_rgba(0,0,0,0.22)] focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.995] md:min-h-[196px] lg:min-h-[208px]"
          >
            <Image
              src={SERVICE_IMAGES[id]}
              alt=""
              fill
              className="object-cover opacity-45 transition duration-300 group-hover:scale-[1.04] group-hover:opacity-[0.58]"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/58 to-black/25" aria-hidden />
            <div className="relative z-10 flex min-h-[168px] flex-col justify-end p-5 md:min-h-[196px] md:p-6 lg:min-h-[208px]">
              <span className="text-left text-sm font-bold uppercase tracking-[0.18em] text-white md:text-base">
                {page.title}
              </span>
              <p className="mt-2 line-clamp-3 text-left text-xs font-medium leading-snug text-white/92 md:text-sm md:leading-relaxed">
                {page.teaserOffer}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-left text-xs font-semibold uppercase tracking-[0.12em] text-white transition-[gap] duration-200 group-hover:gap-2.5 md:text-[13px]">
                {t.services.learnMore}
                <span aria-hidden className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
