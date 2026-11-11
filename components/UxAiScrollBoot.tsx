'use client';

import { useLayoutEffect } from 'react';
import { initUxAi } from '@/lib/chrome/ux-ai';

/** UX+AI scroll drum — init after section is in the DOM (site HomePage bootSite pattern). */
export default function UxAiScrollBoot() {
  useLayoutEffect(() => {
    const stop = initUxAi();
    return stop;
  }, []);

  return null;
}
