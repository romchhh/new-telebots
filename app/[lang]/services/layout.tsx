import { Metadata } from 'next';
import { generateMetadata as generateServicesMetadata } from './metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return generateServicesMetadata({ params });
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

