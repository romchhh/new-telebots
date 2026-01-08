import { Metadata } from 'next';
import { generateMetadata as generateContactMetadata } from './metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return generateContactMetadata({ params });
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

