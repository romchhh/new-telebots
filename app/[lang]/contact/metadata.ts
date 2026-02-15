import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Контакти | Замовити розробку, консультація — TeleBots'
    : lang === 'en'
    ? 'Contact | Order Development, Consultation — TeleBots'
    : lang === 'pl'
    ? 'Kontakt | Zamów rozwój, konsultacja — TeleBots'
    : 'Контакты | Заказать разработку, консультация — TeleBots';

  const description = lang === 'uk'
    ? 'Замовити розробку телеграм бота або сайту. Безкоштовна консультація, швидкий відгук. Telegram, WhatsApp, Email. Київ, Україна.'
    : lang === 'en'
    ? 'Order Telegram bot or website development. Free consultation, quick response. Telegram, WhatsApp, Email.'
    : lang === 'pl'
    ? 'Zamów rozwój bota Telegram lub strony. Bezpłatna konsultacja, szybka odpowiedź. Telegram, WhatsApp.'
    : 'Заказать разработку телеграм бота или сайта. Бесплатная консультация, быстрый ответ. Telegram, WhatsApp, Email.';

  const keywords = lang === 'uk'
    ? 'контакти, замовити розробку, консультація, залишити заявку, телеграм, whatsapp, TeleBots, Київ, Україна'
    : lang === 'en'
    ? 'contact, order development, consultation, leave request, telegram, whatsapp, TeleBots'
    : lang === 'pl'
    ? 'kontakt, zamów rozwój, konsultacja, zostaw wniosek, telegram, whatsapp, TeleBots'
    : 'контакты, заказать разработку, консультация, оставить заявку, телеграм, whatsapp, TeleBots';

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/contact`,
      lang,
    }),
  };
}

