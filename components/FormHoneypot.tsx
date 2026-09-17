'use client';

import { useRef } from 'react';
import { HONEYPOT_FIELD } from '@/lib/antiSpam';

/**
 * Hidden honeypot + form open timestamp.
 * Bots that fill every field get rejected server-side; humans never see this.
 */
export default function FormHoneypot() {
  const startedAt = useRef(Date.now());

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
      <label htmlFor={HONEYPOT_FIELD}>Company website</label>
      <input
        id={HONEYPOT_FIELD}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <input type="hidden" name="formStartedAt" value={String(startedAt.current)} readOnly />
    </div>
  );
}
