import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import HeroImage from '@/components/HeroImage';
import HeroSectionOverlay from '@/components/HeroSectionOverlay';
import HomePrinciplesSection from '@/components/HomePrinciplesSection';
import AboutStatsBanner from '@/components/AboutStatsBanner';
import HomeResourceLinks from '@/components/HomeResourceLinks';
import StructuredData from '@/components/StructuredData';
import { translations, Language } from '@/components/translations';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';
import { siteUrl as baseUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;

  // Brand suffix comes from root layout title.template (`%s | TeleBots`) — do not add it here.
  const title =
    lang === 'uk'
      ? 'Замовити розробку Telegram-ботів і сайтів | від $100'
      : lang === 'en'
        ? 'Order Telegram Bots & Websites | from $100'
        : lang === 'pl'
          ? 'Zamów boty Telegram i strony | od $100'
          : 'Заказать Telegram-ботов и сайты | от $100';

  const description =
    lang === 'uk'
      ? 'Розробка Telegram-ботів від $100, лендінгів від $150, інтернет-магазинів від $400. Чат-бот для бізнесу, CRM, e-commerce. 200+ проєктів, безкоштовна консультація, старт за 24 год.'
      : lang === 'en'
        ? 'Telegram bots from $100, landings from $150, online stores from $400. Business chatbots, CRM, e-commerce. 200+ projects, free consultation, start in 24h.'
        : lang === 'pl'
          ? 'Boty Telegram od $100, landingi od $150, sklepy od $400. Chatboty biznesowe, CRM, e-commerce. 200+ projektów, darmowa konsultacja, start w 24h.'
          : 'Telegram-боты от $100, лендинги от $150, интернет-магазины от $400. Чат-бот для бизнеса, CRM, e-commerce. 200+ проектов, бесплатная консультация, старт за 24 часа.';

  const keywords =
    lang === 'uk'
      ? 'розробка сайтів, створення сайту під ключ, веб-розробка, лендинг замовити, інтернет-магазин під ключ, телеграм бот розробка, розробка чат-ботів, чат-бот для бізнесу, чат бот ціна, замовити телеграм бота, автоматизація бізнесу, AI чат-бот, TeleBots, TeleBots.site, TeleBots Україна, 200+ проєктів'
      : lang === 'en'
        ? 'website development, landing page design, e-commerce development, corporate website, SEO web development, telegram bot development, chatbot for business, business automation, TeleBots, TeleBots.site, TeleBots Ukraine, web development Ukraine, AI chatbot, 200+ projects'
        : lang === 'pl'
          ? 'rozwój stron internetowych, strona firmowa, sklep online, landing page, SEO strony, rozwój botów Telegram, chatboty, automatyzacja biznesu, TeleBots, TeleBots.site, TeleBots Ukraina, tworzenie stron www, chatbot AI, 200+ projektów'
          : 'разработка сайтов, создание сайта под ключ, веб-разработка, лендинг заказать, интернет-магазин под ключ, SEO продвижение сайта, разработка телеграм ботов, чат-боты для бизнеса, автоматизация бизнеса, TeleBots, TeleBots.site, TeleBots Украина, AI чат-бот, 200+ проектов';

  return generateSEOMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/${lang}`,
    lang,
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];
  const mainPageFAQs = t.about.faq?.items?.slice(0, 4) || [];

  return (
    <>
      <StructuredData type="organization" lang={lang} />
      <StructuredData type="localBusiness" lang={lang} />
      <StructuredData type="website" lang={lang} />
      <StructuredData
        type="breadcrumb"
        lang={lang}
        breadcrumbs={[{ name: BREADCRUMB_HOME[lang], url: `/${lang}` }]}
      />
      {mainPageFAQs.length > 0 ? (
        <StructuredData type="faq" lang={lang} faqs={mainPageFAQs} />
      ) : null}
      <HomePageClient
        initialLang={lang}
        t={t}
        hero={
          <section className="relative overflow-hidden bg-black">
            <HeroImage alt={t.hero.backgroundImageAlt} />
            <HeroSectionOverlay hero={t.hero} orderLabel={t.modal.title} />
          </section>
        }
        principles={
          <HomePrinciplesSection
            principles={t.about.principles}
            lang={lang}
            allServicesLabel={t.about.services}
            pricingLabel={t.nav.pricing}
          />
        }
        afterPortfolio={
          <>
            <AboutStatsBanner t={t} />
            <HomeResourceLinks lang={lang} copy={t.about.homeResources} />
          </>
        }
      />
    </>
  );
}
