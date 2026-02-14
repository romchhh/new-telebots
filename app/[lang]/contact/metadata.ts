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
    ? 'Контакти - TeleBots | Зв\'яжіться з нами для розробки проєкту'
    : lang === 'en'
    ? 'Contact - TeleBots | Get in Touch for Project Development'
    : lang === 'pl'
    ? 'Kontakt - TeleBots | Skontaktuj się z nami w sprawie rozwoju projektu'
    : 'Контакты - TeleBots | Свяжитесь с нами для разработки проекта';

  const description = lang === 'uk'
    ? 'Зв\'яжіться з TeleBots для обговорення проєкту. Безкоштовна консультація, швидкий відгук. Telegram, WhatsApp, Email. Отримайте консультацію сьогодні!'
    : lang === 'en'
    ? 'Contact TeleBots to discuss your project. Free consultation, quick response. Telegram, WhatsApp, Email. Get consultation today!'
    : lang === 'pl'
    ? 'Skontaktuj się z TeleBots, aby omówić projekt. Bezpłatna konsultacja, szybka odpowiedź. Telegram, WhatsApp. Skontaktuj się dziś!'
    : 'Свяжитесь с TeleBots для обсуждения проекта. Бесплатная консультация, быстрый ответ. Telegram, WhatsApp, Email. Получите консультацию сегодня!';

  const keywords = lang === 'uk'
    ? 'контакти, зв\'язатися, залишити заявку, консультація, телеграм, whatsapp, email, розробка проєкту'
    : lang === 'en'
    ? 'contact, get in touch, leave a request, consultation, telegram, whatsapp, email, project development'
    : lang === 'pl'
    ? 'kontakt, skontaktuj się, zostaw wniosek, konsultacja, telegram, whatsapp, email, rozwój projektu'
    : 'контакты, связаться, оставить заявку, консультация, телеграм, whatsapp, email, разработка проекта';

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

