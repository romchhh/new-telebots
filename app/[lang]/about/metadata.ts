import { Metadata } from 'next';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  const title = lang === 'uk'
    ? 'Про нас - TeleBots | Професійна розробка цифрових рішень'
    : lang === 'en'
    ? 'About Us - TeleBots | Professional Digital Solutions Development'
    : lang === 'pl'
    ? 'O nas - TeleBots | Profesjonalny rozwój rozwiązań cyfrowych'
    : 'О нас - TeleBots | Профессиональная разработка цифровых решений';

  const description = lang === 'uk'
    ? 'TeleBots - команда розробників телеграм ботів, чат-ботів, сайтів та інтернет-магазинів. 200+ реалізованих проєктів. Дізнайтеся про наші послуги та процес роботи. Зв\'яжіться сьогодні!'
    : lang === 'en'
    ? 'TeleBots - team of developers specializing in Telegram bots, chatbots, websites and online stores. 200+ completed projects. Learn about our services. Contact us today!'
    : lang === 'pl'
    ? 'TeleBots - zespół deweloperów specjalizujących się w botach Telegram, chatbotach, stronach internetowych i sklepach online. 200+ projektów. Dowiedz się więcej. Skontaktuj się dziś!'
    : 'TeleBots - команда разработчиков телеграм ботов, чат-ботов, сайтов и интернет-магазинов. 200+ проектов. Узнайте о наших услугах. Свяжитесь сегодня!';

  const keywords = lang === 'uk'
    ? 'про нас, TeleBots, розробка ботів, команда розробників, телеграм бот розробка, чат-бот розробка, веб-розробка, цифрові рішення'
    : lang === 'en'
    ? 'about us, TeleBots, bot development, development team, telegram bot development, chatbot development, web development, digital solutions'
    : lang === 'pl'
    ? 'o nas, TeleBots, rozwój botów, zespół deweloperów, rozwój botów Telegram, rozwój chatbotów, rozwój stron internetowych, rozwiązania cyfrowe'
    : 'о нас, TeleBots, разработка ботов, команда разработчиков, разработка телеграм ботов, разработка чат-ботов, веб-разработка, цифровые решения';

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

