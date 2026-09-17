'use client';

import { useEffect, useRef, useState } from 'react';
import { HONEYPOT_FIELD } from '@/lib/antiSpam';

/**
 * Hidden honeypot + form open timestamp.
 * Bots that fill every field get rejected server-side; humans never see this.
 */
export default function FormHoneypot() {
  const [startedAt] = useState(() => Date.now());
  const inputRef = useRef<HTMLInputElement>(null);

  // Clear any password-manager autofill into the honeypot
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.value = '';
    const id = window.setTimeout(() => {
      if (el.value) el.value = '';
    }, 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label htmlFor={HONEYPOT_FIELD}>Leave blank</label>
      <input
        ref={inputRef}
        id={HONEYPOT_FIELD}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        defaultValue=""
        data-lpignore="true"
        data-1p-ignore="true"
        data-form-type="other"
      />
      <input type="hidden" name="formStartedAt" value={String(startedAt)} readOnly />
    </div>
  );
}
