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
    ? 'Блог TeleBots: кейси, SEO та автоматизація бізнесу'
    : lang === 'en'
    ? 'TeleBots Blog: case studies, SEO and automation'
    : lang === 'pl'
    ? 'Blog TeleBots: realizacje, SEO i automatyzacja'
    : 'Блог TeleBots: кейсы, SEO и автоматизация бизнеса';

  const description = lang === 'uk'
    ? 'Статті про розробку сайтів, Telegram-ботів, SEO-оптимізацію та автоматизацію бізнесу. Практичні кейси й інсайти команди TeleBots.'
    : lang === 'en'
    ? 'Articles on website development, Telegram bots, SEO optimization and business automation. Practical case studies from the TeleBots team.'
    : lang === 'pl'
    ? 'Artykuły o tworzeniu stron, botach Telegram, SEO i automatyzacji biznesu. Praktyczne realizacje zespołu TeleBots.'
    : 'Статьи о разработке сайтов, Telegram-ботах, SEO и автоматизации бизнеса. Практические кейсы команды TeleBots.';

  const keywords = lang === 'uk'
    ? 'блог про розробку сайтів, кейси Telegram-ботів, SEO для бізнесу, автоматизація бізнесу, веб-розробка, TeleBots'
    : lang === 'en'
    ? 'development blog, telegram bot case studies, website SEO, business automation, web development insights, TeleBots'
    : lang === 'pl'
    ? 'blog o tworzeniu stron, realizacje botów Telegram, SEO dla biznesu, automatyzacja biznesu, TeleBots'
    : 'блог о разработке сайтов, кейсы Telegram-ботов, SEO для бизнеса, автоматизация бизнеса, TeleBots';

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

