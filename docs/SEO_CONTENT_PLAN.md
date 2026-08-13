# SEO content plan — TeleBots (GSC high-intent queries)

Оновлено: 2026-08-13

## Цільові запити → URL

| GSC-запит | URL (uk) | H1 | Статус |
|-----------|----------|-----|--------|
| чат боти купити | `/uk/solutions/chatbots-buy` | Чат-боти купити — Telegram під ключ від $100 | ✅ live |
| розробка чат ботів ціна | `/uk/solutions/chatbot-development-price` | Розробка чат-ботів — ціна та пакети від $100 | ✅ live |
| telegram бот на заказ вартість | `/uk/solutions/telegram-bot-order-price` | Telegram-бот на замовлення — вартість від $100 | ✅ live |

EN/PL/RU — ті самі slug з локалізованими meta/H1.

## Внутрішня перелінковка

| З сторінки | Куди |
|------------|------|
| `/uk` (HomeResourceLinks) | pricing, chatbots-buy, chatbot-development-price, solutions |
| `/uk/pricing` (resourceLinks) | 3 intent landings, services/chatbots, blog |
| Footer (усі мови) | chatbots-buy, telegram-bots, landing-pages, online-stores |
| `/uk/services/chatbots` | → solutions (через SEO long-form + footer) |

## Meta / schema (оновлено в коді)

- **Services/chatbots** — title з «чат боти купити», keywords + agency Ukraine
- **Pricing** — title «Розробка чат-ботів ціна», keywords high-intent
- **Offer** — «TeleBots agency Ukraine» у title/description
- **Solutions** — FAQPage + Service + LocalBusiness на кожному landing (шаблон `[slug]/page.tsx`)

## Sitemap

Нові URL автоматично в `/sitemap.xml` через `SEO_LANDING_SLUGS`.  
`lastmod` для `solution`, `pricing`, `serviceDetail` → `2026-08-13`.

## Зовнішні посилання (ручна робота, не код)

- DOU / AIN guest posts → `/uk/solutions/chatbot-development-price`
- Clutch.co, GoodFirms — профіль з посиланням на `/uk`
- Українські каталоги (Prom, biz.ua) — NAP + URL

## Горизонт очікувань

- 6–10 тижнів — перші зміни позицій після індексації нових landings
- 2–3 місяці — ефект від зовнішніх посилань

## Наступні кроки (опційно)

1. GSC → URL Inspection → Request indexing для 3 нових uk URL
2. Моніторити CTR по «чат боти купити» (вже 50% при поз. 35)
3. A/B title у GSC якщо позиція 10–20 без кліків
