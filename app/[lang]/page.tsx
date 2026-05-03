import HomePageClient from '@/components/HomePageClient';
import HeroImage from '@/components/HeroImage';
import { translations, Language } from '@/components/translations';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[lang];

  return (
    <HomePageClient
      initialLang={lang}
      heroBackground={<HeroImage alt={t.hero.backgroundImageAlt} />}
    />
  );
}
