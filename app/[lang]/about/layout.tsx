import { Metadata } from 'next';
import { generateMetadata as generateAboutMetadata } from './metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return generateAboutMetadata({ params });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

