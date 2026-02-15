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
    ? 'Блог - TeleBots | Кейси, поради та новини з розробки'
    : lang === 'en'
    ? 'Blog - TeleBots | Cases, Tips & Development News'
    : lang === 'pl'
    ? 'Blog - TeleBots | Przypadki, wskazówki i wiadomości o rozwoju'
    : 'Блог - TeleBots | Кейсы, советы и новости о разработке';

  const description = lang === 'uk'
    ? 'Дізнайтеся про новини, кейси успішних проєктів та поради з розробки від TeleBots. Підписуйтесь на наші канали для отримання контенту!'
    : lang === 'en'
    ? 'Learn about news, successful project cases and development tips from TeleBots. Subscribe to our channels for fresh content!'
    : lang === 'pl'
    ? 'Dowiedz się o wiadomościach, przypadkach projektów i wskazówkach od TeleBots. Subskrybuj nasze kanały!'
    : 'Узнайте о новостях, кейсах проектов и советах от TeleBots. Подписывайтесь на наши каналы!';

  const keywords = lang === 'uk'
    ? 'блог, кейси розробки телеграм ботів, поради з розробки, телеграм бот, чат-бот, автоматизація бізнесу, веб-розробка, технології'
    : lang === 'en'
    ? 'blog, telegram bot development cases, development tips, telegram bot, chatbot, business automation, web development, technologies'
    : lang === 'pl'
    ? 'blog, przypadki rozwoju botów, wskazówki, bot telegram, chatbot, automatyzacja biznesu, rozwój stron, technologie'
    : 'блог, кейсы разработки телеграм ботов, советы по разработке, телеграм бот, чат-бот, автоматизация бизнеса, веб-разработка, технологии';

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

