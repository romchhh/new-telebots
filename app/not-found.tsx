import type { Metadata } from 'next';
import NotFoundPage from '@/components/NotFoundPage';
import SiteHtmlShell from '@/components/SiteHtmlShell';
import { DEFAULT_SITE_LANGUAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Сторінку не знайдено | TeleBots' },
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <SiteHtmlShell lang={DEFAULT_SITE_LANGUAGE}>
      <NotFoundPage />
    </SiteHtmlShell>
  );
}
