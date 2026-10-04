'use client';

import { INPUT_DARK, INPUT_LIGHT } from '@/lib/siteUi';

type PhoneNumberFieldProps = {
  id: string;
  name?: string;
  placeholder: string;
  ariaLabel: string;
  variant?: 'light' | 'dark';
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  toolparamdescription?: string;
};

export default function PhoneNumberField({
  id,
  name = 'phone',
  placeholder,
  ariaLabel,
  variant = 'light',
  required,
  value,
  onChange,
  className,
  toolparamdescription,
}: PhoneNumberFieldProps) {
  const inputClass = className ?? (variant === 'dark' ? INPUT_DARK : INPUT_LIGHT);

  return (
    <input
      id={id}
      type="tel"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete="tel"
      inputMode="tel"
      placeholder={placeholder}
      toolparamdescription={toolparamdescription}
      className={inputClass}
      aria-label={ariaLabel}
    />
  );
}
