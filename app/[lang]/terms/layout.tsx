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
    ? 'Умови надання послуг - TeleBots'
    : lang === 'en'
    ? 'Terms of Service - TeleBots'
    : lang === 'pl'
    ? 'Regulamin usług - TeleBots'
    : 'Условия оказания услуг - TeleBots';

  const description = lang === 'uk'
    ? 'Умови надання послуг TeleBots. Правила використання послуг розробки ботів та сайтів.'
    : lang === 'en'
    ? 'TeleBots Terms of Service. Rules for using bot and website development services.'
    : lang === 'pl'
    ? 'Regulamin usług TeleBots. Zasady korzystania z usług rozwoju botów i stron.'
    : 'Условия оказания услуг TeleBots. Правила использования услуг разработки ботов и сайтов.';

  return {
    ...generateSEOMetadata({
      title,
      description,
      url: `${baseUrl}/${lang}/terms`,
      lang,
    }),
    robots: { index: true, follow: true },
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
