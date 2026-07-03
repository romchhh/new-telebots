import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LOCALE_COOKIE_NAME, resolvePreferredLanguage } from '@/lib/locale';

export default async function RootPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const lang = resolvePreferredLanguage(
    cookieStore.get(LOCALE_COOKIE_NAME)?.value,
    headerStore.get('accept-language')
  );
  redirect(`/${lang}`);
}
