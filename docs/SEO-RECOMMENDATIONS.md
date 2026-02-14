# SEO: що вже зроблено та що ще можна зробити

## Вже реалізовано на сайті

- **Метадані**: унікальні title, description, keywords для кожної сторінки та мови
- **Open Graph і Twitter Cards**: зображення, заголовки, описи для соцмереж
- **Canonical + hreflang**: правильні canonical URL та alternates для uk/en/pl/ru та x-default
- **robots**: index, follow, налаштування googleBot (max-snippet, max-image-preview)
- **Sitemap.xml**: усі сторінки та мови, пріоритети, changeFrequency
- **Image sitemap**: ключові зображення додані до записів sitemap (головна, about, services, portfolio, blog, кейси)
- **robots.txt**: правила для краулерів, посилання на sitemap
- **ai.txt**: опис проєкту для AI-краулерів
- **Schema.org**: Organization, LocalBusiness, WebSite, BreadcrumbList, Article, FAQPage, HowTo, ContactPage, Product, ItemList тощо
- **Endpoint /schema/organization**: JSON-LD організації по запиту
- **Заголовки безпеки**: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, X-DNS-Prefetch-Control
- **Ключові слова**: розширені (design, UI/UX, logo, brand identity, web design)
- **Manifest, іконки**: PWA, favicon, apple-touch-icon
- **Next.js**: metadataBase, оптимізація зображень (avif, webp)

---

## Що ще можна зробити (рекомендації)

### Контент і техніка
1. **Окреме OG-зображення 1200×630** — зробити один файл `og-image.jpg` (1200×630) або використати `public/portfolio/portfolio-default.jpg` для поширення в соцмережах і підставити його в metadata замість services-hero.png де потрібно.
2. **Блог і контент** — якщо з’являться статті: унікальні title/description на пост, Article/BlogPosting schema, дати публікації/оновлення, посилання на автора.
3. **RSS** — при наявності блогу додати `/feed.xml` (RSS 2.0 або Atom) для підписок і краулерів.
4. **Внутрішні посилання** — у тексті сторінок (Про нас, Послуги, Портфоліо) додати посилання на інші ключові сторінки з якорним текстом (не лише меню/футер).
5. **Швидкість (Core Web Vitals)** — перевірити LCP (priority для hero-зображень), уникати великих блоків JS; Next.js Image вже використовується.

### Інструменти та моніторинг
6. **Google Search Console** — підтвердити сайт (verification вже в layout), відправити sitemap, дивитися покращення та помилки індексації.
7. **Bing Webmaster** — додати сайт і sitemap для пошуку Bing.
8. **Bing Webmaster Tools** — те саме для пошуку Bing.
9. **Google Analytics 4 / інша аналітика** — відстежувати пошуковий трафік і поведінку.

### Додаткова розмітка
10. **Відгуки** — якщо будуть реальні відгуки: Review schema (або AggregateRating з реальними даними).
11. **Події/послуги** — за потреби: Event або додаткові Service schema для окремих послуг/акцій.
12. **Відео** — якщо з’являться відео на сайті: VideoObject schema та відповідні мета-теги.

### Локалізація
13. **Geo-таргетинг** — у Search Console задати країни (UA, PL тощо) для відповідних мов.
14. **Переклад ключових фраз** — переконатися, що ключові слова в metadata відповідають пошуковим запитам у кожній мові (uk/en/pl/ru).

---

## Підсумок змін у цьому оновленні

- У **sitemap** для основних сторінок і кейсів портфоліо додано **image sitemap** (списки URL зображень).
- У **next.config** додано заголовки **X-Frame-Options** та **Referrer-Policy**.
- У **app/layout** розширено **keywords** (design, UI/UX, logo, brand identity, web design).

Далі найбільший ефект дасть контент (тексти, блог), якість OG-зображення та налаштування Search Console і аналітики.

---

## Пропозиція по SEO (пріоритети)

### Критично / швидко

1. **Домен у конфігурації**  
   Fallback у коді — `new.telebots.site`. Для іншого домену задайте змінну оточення (див. `.env.example`):
   ```bash
   NEXT_PUBLIC_BASE_URL=https://new.telebots.site
   ```
   Щоб canonical, OG, sitemap і schema використовували правильний домен.

2. **OG-зображення 1200×630**  
   Зробіть один файл під соцмережі (наприклад `other/og-image.jpg` або використайте `public/portfolio/portfolio-default.jpg` у форматі 1200×630) і підставте його в metadata замість `services-hero.png`. Це покращить прев’ю в пошуку та при поширенні посилань.

3. **Переконатися, що SEO-шляхи не редіректять**  
   Middleware вже виключає `/sitemap.xml`, `/robots.txt`, `/ai.txt`, `/schema/`. Після деплою перевірте, що ці URL віддають контент, а не головну.

### Контент і поведінка

4. **Унікальні title/description на мову**  
   Уже є для головної та сторінок. Варто перевірити, що фрази відповідають реальним пошуковим запитам у UA/EN/PL/RU (наприклад через Google Keyword Planner або Search Console).

5. **Внутрішні посилання з якірним текстом**  
   У блоках «Про нас», «Послуги», «Портфоліо» додати 1–2 посилання на інші ключові сторінки з природним якорем (не тільки меню/футер). Це посилює передачу ваги і покращує індексацію.

6. **Блог (якщо буде)**  
   Для кожної статті: унікальні title/description, BlogPosting schema, дати публікації/оновлення. Можна додати RSS `/feed.xml` для підписок і краулерів.

### Техніка

7. **Core Web Vitals**  
   Hero-зображення з `priority`, Next.js Image, AVIF/WebP — вже є. Перевірити в PageSpeed Insights / Search Console, щоб LCP і CLS були в зеленій зоні.

8. **Один JSON-LD на сторінку для головної сутності**  
   Зараз на головній є Organization, LocalBusiness, WebSite, AggregateRating, FAQ. Це прийнятно; головне — не дублювати однаковий опис у багатьох блоках. Для кейсів Article вже підключено.

9. **AggregateRating**  
   Якщо рейтинг 5.0 і 200 відгуків — реальні, залишайте. Якщо ні — краще прибрати або замінити на реальні дані (Google може покарати за фейкові відгуки).

### Моніторинг і інструменти

10. **Google Search Console**  
    Підтвердити домен new.telebots.site (meta verification вже в layout), відправити sitemap `https://new.telebots.site/sitemap.xml`, стежити за покращеннями та помилками індексації.

11. **Bing Webmaster Tools**  
    Додати сайт і sitemap для пошуку Bing.

12. **Аналітика**  
    GA4 або аналог — відстежувати пошуковий трафік і конверсії (наприклад, кліки «Написати в Telegram» з пошуку).

### Локалізація

13. **Geo-таргетинг у Search Console**  
    Для кожної мови (uk, en, pl, ru) можна вказати країни-цілі (UA, US, PL тощо), щоб пошук краще показував відповідну версію.

14. **Ключові фрази по мовах**  
    Переконатися, що keywords у metadata відповідають популярним запитам у кожній мові (окремо перевірити uk/en/pl/ru).

---

**Підсумок:** Найбільший ефект дасть правильний `NEXT_PUBLIC_BASE_URL`, якісне OG-зображення, робочі sitemap/robots та налаштовані Search Console + аналітика. Далі — контент (тексти, блог) і внутрішні посилання.

---

## Що ще можна покращити по SEO

### Вже зроблено в коді
- ItemList schema (портфоліо) — URL тепер абсолютні для кращої індексації.
- Cache-Control для `sitemap.xml`, `feed.xml`, `robots.txt` — кешування на 1 год.
- **Preload hero** — зображення `/other/hero-background.jpeg` прелодиться для покращення LCP на головній.
- **Meta description** — у `lib/seo.ts` додано `trimDescriptionForMeta()`: опис обрізається до 160 символів для OG/twitter/meta.
- **Google Analytics 4** — підключення через `NEXT_PUBLIC_GA_MEASUREMENT_ID` (next/script, afterInteractive). Якщо змінна не задана, скрипт не завантажується.
- **AggregateRating** — показується тільки якщо `NEXT_PUBLIC_SHOW_AGGREGATE_RATING !== 'false'` (можна вимкнути, якщо рейтинг не підтверджений).
- **Bing** — опційна meta перевірка: `NEXT_PUBLIC_BING_VERIFICATION`.
- **Base URL** — усюди fallback змінено на `new.telebots.site` (about, services, contact, portfolio, blog, legal, SEOHead).
- **.env.example** — додано приклад змінних для SEO та аналітики.

### Рекомендації (ручна робота / контент)

1. **Інструменти**
   - **Google Search Console** — додати ресурс new.telebots.site, підтвердити (meta-тег вже є), відправити sitemap.
   - **Bing Webmaster** — додати сайт і sitemap.
   - **Google Analytics 4** (або аналог) — подія на клік «Написати в Telegram» / контакт.

2. **Контент**
   - Переконатися, що **meta description** у межах 150–160 символів для ключових сторінок.
   - Якщо з’явиться **блог** — окремі title/description на статтю, BlogPosting schema, дати.
   - **Ключові фрази** — перевірити по мовах (uk/en/pl/ru) через Keyword Planner або Search Console.

3. **Техніка**
   - **Core Web Vitals** — перевірити в [PageSpeed Insights](https://pagespeed.web.dev/); hero-зображення вже з priority.
   - **AggregateRating** — якщо 5.0 і 200 відгуків не відповідають реальності, прибрати або оновити на реальні дані.

4. **Локалізація**
   - У Search Console для кожної мови вказати **країни-цілі** (UA, PL, US тощо).
   - Переконатися, що **keywords** у metadata відповідають пошуковим запитам у кожній мові.

5. **Додатково**
   - Якщо будуть **реальні відгуки** — додати Review schema або оновити AggregateRating.
   - Якщо з’являться **відео** — VideoObject schema та відповідні meta-теги.
   - **Preload** для hero-зображення на головній (опційно) — для покращення LCP.
