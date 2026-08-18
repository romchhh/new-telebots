import { redirect } from 'next/navigation';
import BlogHubPageClient from './BlogHubPageClient';
import SitePageShell from '@/components/SitePageShell';
import { translations } from '@/components/translations';

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== 'uk') {
    redirect('/uk/blog');
  }
  const t = translations.uk;
  return (
    <SitePageShell initialLang="uk" t={t}>
      <BlogHubPageClient />
    </SitePageShell>
  );
}
