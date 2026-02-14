import { Metadata } from 'next';
import { Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  const title = lang === 'uk'
    ? 'Політика конфіденційності - TeleBots'
    : lang === 'en'
    ? 'Privacy Policy - TeleBots'
    : lang === 'pl'
    ? 'Polityka prywatności - TeleBots'
    : 'Политика конфиденциальности - TeleBots';

  const description = lang === 'uk'
    ? 'Політика конфіденційності TeleBots. Інформація про збір та використання персональних даних.'
    : lang === 'en'
    ? 'TeleBots Privacy Policy. Information about collection and use of personal data.'
    : lang === 'pl'
    ? 'Polityka prywatności TeleBots. Informacje o zbieraniu i wykorzystywaniu danych osobowych.'
    : 'Политика конфиденциальности TeleBots. Информация о сборе и использовании персональных данных.';

  return {
    ...generateSEOMetadata({
      title,
      description,
      url: `${baseUrl}/${lang}/privacy`,
      lang,
    }),
    robots: { index: true, follow: true },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
