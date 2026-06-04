import { Metadata } from 'next';
import { generateMetadata as generateBlogMetadata } from './metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generateBlogMetadata();
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

