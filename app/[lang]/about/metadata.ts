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
    ? 'Про нас | Розробка ботів для бізнесу — TeleBots'
    : lang === 'en'
    ? 'About Us | Bot Development for Business — TeleBots'
    : lang === 'pl'
    ? 'O nas | Boty dla biznesu — TeleBots'
    : 'О нас | Разработка ботов для бизнеса — TeleBots';

  const description = lang === 'uk'
    ? 'Досвід та автоматизація бізнесу. Команда TeleBots: розробка телеграм ботів, чат-ботів, сайтів. 200+ проєктів. Безкоштовна консультація.'
    : lang === 'en'
    ? 'Experience and business automation. TeleBots team: Telegram bots, chatbots, websites development. 200+ projects. Free consultation.'
    : lang === 'pl'
    ? 'Doświadczenie i automatyzacja biznesu. Zespół TeleBots: boty Telegram, chatboty, strony. 200+ projektów. Bezpłatna konsultacja.'
    : 'Опыт и автоматизация бизнеса. Команда TeleBots: разработка телеграм ботов, чат-ботов, сайтов. 200+ проектов. Бесплатная консультация.';

  const keywords = lang === 'uk'
    ? 'про нас, TeleBots, розробка ботів для бізнесу, команда розробників, автоматизація бізнесу, досвід, консультація, телеграм бот розробка, веб-розробка, цифрові рішення'
    : lang === 'en'
    ? 'about us, TeleBots, bot development for business, development team, business automation, experience, consultation, telegram bot development, web development, digital solutions'
    : lang === 'pl'
    ? 'o nas, TeleBots, boty dla biznesu, zespół deweloperów, automatyzacja biznesu, doświadczenie, konsultacja, rozwój botów Telegram, rozwój stron, rozwiązania cyfrowe'
    : 'о нас, TeleBots, разработка ботов для бизнеса, команда разработчиков, автоматизация бизнеса, опыт, консультация, разработка телеграм ботов, веб-разработка, цифровые решения';

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/about`,
      lang,
    }),
  };
}

