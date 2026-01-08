import { Metadata } from 'next';
import { generateMetadata as generateBlogMetadata } from './metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return generateBlogMetadata({ params });
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

