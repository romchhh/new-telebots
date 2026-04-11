import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function GET() {
  const content = `# TeleBots

> Професійна розробка телеграм ботів, чат-ботів, сайтів, інтернет-магазинів, парсерів та ботів з AI. Дизайн: лого, айдентика, UI/UX. В команді є UI/UX дизайнер.

## Опис
TeleBots — команда розробників та дизайнерів. 200+ реалізованих проєктів. Мови: українська, англійська, польська, російська.

## Що ми робимо?
- Розробка чат-ботів (Telegram, WhatsApp, Viber)
- Розробка веб-сайтів та інтернет-магазинів
- Розробка парсерів
- Дизайн: логотипи, айдентика, дизайн сайтів та додатків, UI/UX
- AI інтеграції

## Контакти
- Сайт: ${baseUrl}
- Telegram: https://t.me/telebotsnowayrm
- Email: roman.fedoniuk@gmail.com
- Телефон: +380960908006

## Сторінки
- Головна: ${baseUrl}/uk
- Про нас: ${baseUrl}/uk/about
- Що ми робимо?: ${baseUrl}/uk/services
- Кейси: ${baseUrl}/uk/portfolio
- Соцмережі: ${baseUrl}/uk/blog
- Контакти: ${baseUrl}/uk/contact
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
