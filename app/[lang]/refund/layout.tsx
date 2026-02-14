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
    ? 'Політика повернення коштів - TeleBots'
    : lang === 'en'
    ? 'Refund Policy - TeleBots'
    : lang === 'pl'
    ? 'Polityka zwrotów - TeleBots'
    : 'Политика возврата средств - TeleBots';

  const description = lang === 'uk'
    ? 'Політика повернення коштів TeleBots. Умови та процедура повернення грошей за послуги.'
    : lang === 'en'
    ? 'TeleBots Refund Policy. Terms and procedure for refunds for services.'
    : lang === 'pl'
    ? 'Polityka zwrotów TeleBots. Warunki i procedura zwrotu środków za usługi.'
    : 'Политика возврата средств TeleBots. Условия и процедура возврата денег за услуги.';

  return {
    ...generateSEOMetadata({
      title,
      description,
      url: `${baseUrl}/${lang}/refund`,
      lang,
    }),
    robots: { index: true, follow: true },
  };
}

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
