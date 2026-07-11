import { NextResponse } from 'next/server';
import { allBlogPosts } from '@/lib/blog/posts';
import { siteUrl as baseUrl } from '@/lib/site';

const CATEGORY_LABELS: Record<string, string> = {
  pricing: 'Ціни та тарифи',
  telegram: 'Telegram-боти',
  websites: 'Сайти та e-commerce',
  ai: 'Штучний інтелект',
  security: 'Безпека',
  business: 'Бізнес та продажі',
};

function buildBlogSection(): string {
  const featured = allBlogPosts.filter((p) => p.featured);

  const formatPost = (post: (typeof allBlogPosts)[number]) =>
    `- ${post.title}: ${baseUrl}/uk/blog/${post.slug}`;

  const lines: string[] = [
    `Індекс блогу: ${baseUrl}/uk/blog`,
    `Мова статей: українська (${allBlogPosts.length} публікацій)`,
    '',
  ];

  if (featured.length > 0) {
    lines.push('Рекомендовані статті про ціни:');
    lines.push(...featured.map(formatPost));
    lines.push('');
  }

  const other = allBlogPosts.filter((p) => !p.featured);
  if (other.length > 0) {
    lines.push('Інші статті:');
    lines.push(...other.map(formatPost));
  }

  lines.push('');
  lines.push('Теми блогу:');
  const categories = [...new Set(allBlogPosts.map((p) => p.category))];
  for (const category of categories) {
    const count = allBlogPosts.filter((p) => p.category === category).length;
    lines.push(`- ${CATEGORY_LABELS[category] ?? category} (${count})`);
  }

  return lines.join('\n');
}

export async function GET() {
  const content = `# TeleBots

> Розробка сайтів, інтернет-магазинів, Telegram-ботів і UI/UX під ключ. Next.js, SEO, CRM, оплати, AI. 200+ проєктів, 4 роки на ринку. Безкоштовна консультація перед стартом.

## Про компанію
TeleBots — digital-студія з України. Одна команда закриває повний цикл: стратегія, дизайн у Figma, розробка, інтеграції та запуск. Працюємо з бізнесом, стартапами та агенціями як підрядник.

Мови інтерфейсу сайту: українська (основна), англійська, польська, російська.
Блог — лише українською.

## Послуги
- Сайти та e-commerce (лендинги, корпоративні сайти, інтернет-магазини на Next.js, SEO, аналітика): ${baseUrl}/uk/services/websites
- Чат-боти (Telegram, WhatsApp, Viber: CRM, оплати, розсилки, AI): ${baseUrl}/uk/services/chatbots
- Дизайн UI/UX (лого, айдентика, макети в Figma, передача в розробку): ${baseUrl}/uk/services/design
- Усі послуги: ${baseUrl}/uk/services
- Прозорі тарифи та пакети: ${baseUrl}/uk/pricing

## SEO-сторінки послуг (uk / en / pl / ru)
- Розробка Telegram-ботів: ${baseUrl}/uk/solutions/telegram-bots
- Лендінги під ключ: ${baseUrl}/uk/solutions/landing-pages
- Інтернет-магазини: ${baseUrl}/uk/solutions/online-stores
- AI-чат-боти: ${baseUrl}/uk/solutions/ai-chatbots
- Парсери та збір даних: ${baseUrl}/uk/solutions/data-parsers

## Блог
${buildBlogSection()}

## Кейси та портфоліо
- Реалізовані проєкти (сайти, боти, e-commerce): ${baseUrl}/uk/portfolio

## Ключові запити, які ми закриваємо
- замовити сайт під ключ, розробка сайту ціна, скільки коштує сайт
- інтернет-магазин під ключ, e-commerce на Next.js
- Telegram-бот для бізнесу, чат-бот з оплатою та CRM
- UI/UX дизайн, логотип та айдентика
- автоматизація заявок, воронки продажів у месенджерах
- парсери даних, інтеграція AI у бота або сайт

## Контакти
- Сайт: ${baseUrl}
- Форма заявки: ${baseUrl}/uk/contact
- Telegram: https://t.me/telebotsnowayrm
- Email: roman.fedoniuk@gmail.com
- Телефон: +380960908006
- WhatsApp: +380960908006

## Основні сторінки
- Головна: ${baseUrl}/uk
- Про нас: ${baseUrl}/uk/about
- Що ми робимо?: ${baseUrl}/uk/services
- Кейси: ${baseUrl}/uk/portfolio
- Блог: ${baseUrl}/uk/blog
- Ціни: ${baseUrl}/uk/pricing
- Контакти: ${baseUrl}/uk/contact

## Для індексації
- Sitemap: ${baseUrl}/sitemap.xml
- Sitemap блогу: ${baseUrl}/blog-sitemap.xml
- RSS: ${baseUrl}/feed.xml
- Організація (schema): ${baseUrl}/schema/organization
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
