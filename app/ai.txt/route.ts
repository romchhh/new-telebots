import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export async function GET() {
  const content = `# TeleBots

> Розробка сайтів, лендингів та інтернет-магазинів під ключ; веб-інтерфейси та SEO. Також телеграм боти, чат-боти, парсери, AI. Дизайн: лого, айдентика, UI/UX.

## Опис
TeleBots — команда розробників та дизайнерів. 200+ реалізованих проєктів. Мови: українська, англійська, польська, російська.

## Що ми робимо?
- Розробка веб-сайтів, лендингів та інтернет-магазинів (Next.js, SEO)
- Розробка чат-ботів (Telegram, WhatsApp, Viber)
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
