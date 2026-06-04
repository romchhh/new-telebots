import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...generateSEOMetadata({
      title: 'Блог TeleBots: ціни, Telegram-боти, сайти та SEO',
      description:
        '19 статей українською про розробку сайтів, Telegram-ботів, ціни TeleBots, SEO та автоматизацію бізнесу. Практичні гайди та кейси.',
      keywords:
        'блог telebots, скільки коштує сайт, telegram бот гайд, seo блог, розробка сайтів україна, ціни на бота',
      url: `${baseUrl}/uk/blog`,
      lang: 'uk',
    }),
  };
}
