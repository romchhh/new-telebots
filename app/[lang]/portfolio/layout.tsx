import { Metadata } from 'next';
import { generateMetadata as generatePortfolioMetadata } from './metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return generatePortfolioMetadata({ params });
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

