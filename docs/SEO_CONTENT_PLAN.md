# SEO content plan — TeleBots (GSC high-intent queries)

Оновлено: 2026-10-04

## Цільові запити → URL

| GSC-запит | URL (uk) | H1 | Статус |
|-----------|----------|-----|--------|
| чат боти купити | `/uk/solutions/chatbots-buy` | Чат-боти купити — Telegram під ключ від $100 | ✅ live |
| розробка чат ботів ціна | `/uk/solutions/chatbot-development-price` | Розробка чат-ботів — ціна та пакети від $100 | ✅ live |
| telegram бот на замовлення вартість | `/uk/solutions/telegram-bot-order-price` | Telegram-бот на замовлення — вартість від $100 | ✅ live |

EN/PL/RU — ті самі slug з локалізованими meta/H1.

Uk meta audit (title/description/H1 alignment): `lib/seoPagesRegistry.ts` → `SEO_UK_PAGE_AUDIT`.

## Внутрішня перелінковка

| З сторінки | Куди |
|------------|------|
| `/uk` (HomeResourceLinks) | pricing, chatbots-buy, chatbot-development-price, solutions |
| `/uk/pricing` (resourceLinks) | 3 intent landings, services/chatbots, blog |
| Footer (усі мови) | chatbots-buy, telegram-bots, landing-pages, online-stores |
| `/uk/services/chatbots` | → solutions (через SEO long-form + footer) |
| Solutions (website price landings) | кейс `emaro-autocare` у блоках portfolio (`lib/seoLandings/types.ts`) |

Legacy blog посилання на `/portfolio?case=` замінено на канонічний `/uk/portfolio` (light-кейси без окремої сторінки).

## Meta / schema (оновлено в коді)

- **Document titles** — один суфікс бренду через `withBrandTitle()` у `lib/seo.ts`; не дублювати «TeleBots» у сирих title.
- **Portfolio hub** — `?case=` → `noindex, follow` (middleware `X-Robots-Tag`) + canonical `/…/portfolio`; hub meta SSG без query.
- **Services/chatbots** — title з «чат боти купити», OG image `/services/services-chatbots.jpg`.
- **Pricing** — title «Розробка чат-ботів ціна», keywords high-intent.
- **Offer** — agency Ukraine у description, не в title.
- **Solutions** — FAQPage + Service + LocalBusiness на кожному landing (шаблон `[slug]/page.tsx`).

## Sitemap

Intent landings у `/sitemap.xml` через `SEO_LANDING_SLUGS`.  
Додано `privacy`, `terms`, `refund`.  
`lastmod` для home, services, portfolio, pricing, solutions, case studies → **2026-10-04** (`lib/sitemapDates.ts`).

## Автоперевірка (CI / prebuild)

```bash
npm run check:seo
```

Перевіряє: один `generateMetadata` для portfolio hub, відсутність `SEOHead`, title hygiene, live cases ↔ cards, sitemap lastmod, middleware noindex для `?case=`.

## Після деплою — Google Search Console (checklist)

1. URL Inspection → **Request indexing** (uk):
   - `https://telebots.site/uk/solutions/chatbots-buy`
   - `https://telebots.site/uk/services/chatbots`
   - `https://telebots.site/uk/pricing`
   - `https://telebots.site/uk/portfolio/emaro-autocare`
   - `https://telebots.site/uk/portfolio` (hub, без query)
2. Coverage → перевірити відсутність індексованих URL `/portfolio?case=*`.
3. Sitemaps → перечитати `https://telebots.site/sitemap.xml` (очікувані свіжі `lastmod`).
4. Rich Results Test — home FAQ, solutions FAQ, service FAQ + breadcrumb.

## Зовнішні посилання (ручна робота, не код)

- DOU / AIN guest posts → `/uk/solutions/chatbot-development-price`
- Clutch.co, GoodFirms — профіль з посиланням на `/uk`
- Українські каталоги (Prom, biz.ua) — NAP + URL

## Горизонт очікувань

- 6–10 тижнів — перші зміни позицій після індексації нових landings
- 2–3 місяці — ефект від зовнішніх посилань

## Наступні кроки (опційно)

1. Моніторити CTR по «чат боти купити» (вже 50% при поз. 35)
2. A/B title у GSC якщо позиція 10–20 без кліків
3. hreflang symmetry — перевірка при додаванні нових case-only мов
