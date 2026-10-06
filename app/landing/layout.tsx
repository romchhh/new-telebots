import SiteHtmlShell from '@/components/SiteHtmlShell';

/** Рекламний /landing не входить у [lang], тому html/body задаємо тут. */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <SiteHtmlShell lang="uk">{children}</SiteHtmlShell>;
}
