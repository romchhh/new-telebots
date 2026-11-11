'use client';

import { useParams } from 'next/navigation';
import AboutInfoCards from '@/components/AboutInfoCards';
import { useHomeModal } from '@/components/HomeModalProvider';
import type { Language } from '@/components/translations';
import { SITE_PX, SITE_INNER_WIDE } from '@/lib/siteLayout';

interface AboutSectionProps {
  t: typeof import('./translations').translations.uk;
  onOrderClick?: () => void;
}

export default function AboutSection({ t, onOrderClick }: AboutSectionProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const currentLang = (
    ['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk'
  ) as Language;
  const openFromShell = useHomeModal();
  const openOrder = onOrderClick ?? openFromShell;
  return (
    <section className={`relative bg-white pb-20 pt-12 md:pb-28 md:pt-16 lg:pb-36 ${SITE_PX}`}>
      <div className={SITE_INNER_WIDE}>
        <AboutInfoCards
          copy={t.about.whyUs}
          lang={currentLang}
          onContactClick={openOrder}
          contactHref={`/${currentLang}/contact`}
        />
      </div>
    </section>
  );
}

