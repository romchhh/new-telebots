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
    ? 'Соцмережі - TeleBots | Кейси, поради та новини з розробки'
    : lang === 'en'
    ? 'Social media - TeleBots | Cases, Tips & Development News'
    : lang === 'pl'
    ? 'Media społecznościowe - TeleBots | Przypadki, wskazówki i wiadomości o rozwoju'
    : 'Соцсети - TeleBots | Кейсы, советы и новости о разработке';

  const description = lang === 'uk'
    ? 'Дізнайтеся про новини, кейси успішних проєктів та поради з розробки від TeleBots. Підписуйтесь на наші канали для отримання контенту!'
    : lang === 'en'
    ? 'Learn about news, successful project cases and development tips from TeleBots. Subscribe to our channels for fresh content!'
    : lang === 'pl'
    ? 'Dowiedz się o wiadomościach, przypadkach projektów i wskazówkach od TeleBots. Subskrybuj nasze kanały!'
    : 'Узнайте о новостях, кейсах проектов и советах от TeleBots. Подписывайтесь на наши каналы!';

  const keywords = lang === 'uk'
    ? 'соцмережі, соцмережі TeleBots, кейси розробки телеграм ботів, поради з розробки, телеграм бот, чат-бот, автоматизація бізнесу, веб-розробка, технології'
    : lang === 'en'
    ? 'social media, telegram bot development cases, development tips, telegram bot, chatbot, business automation, web development, technologies'
    : lang === 'pl'
    ? 'media społecznościowe, przypadki rozwoju botów, wskazówki, bot telegram, chatbot, automatyzacja biznesu, rozwój stron, technologie'
    : 'соцсети, кейсы разработки телеграм ботов, советы по разработке, телеграм бот, чат-бот, автоматизация бизнеса, веб-разработка, технологии';

  return {
    ...generateSEOMetadata({
      title,
      description,
      keywords,
      url: `${baseUrl}/${lang}/blog`,
      lang,
    }),
  };
}

