import Link from 'next/link';
import type { ReactNode } from 'react';

/** [текст](url) → посилання; url може бути відносним (/uk/contact) */
export function parseBlogInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isExternal = href.startsWith('http');
    parts.push(
      isExternal ? (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black underline underline-offset-2 hover:no-underline"
        >
          {label}
        </a>
      ) : (
        <Link
          key={key++}
          href={href}
          className="font-medium text-black underline underline-offset-2 hover:no-underline"
        >
          {label}
        </Link>
      ),
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : [text];
}
