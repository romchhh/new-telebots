'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/** Заміна старого Button для статей Blog/BlogPost*.jsx */
export default function BlogLegacyButton({ children, className = '', ...props }: Props) {
  return (
    <button
      type="button"
      className={`rounded-lg bg-black px-6 py-3 font-semibold transition-colors hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
