'use client';

import { useEffect } from 'react';
import { bootSiteChrome } from '@/lib/chrome';

/** Boots site/app menu + finale runtime against the current chrome DOM. */
export default function SiteChromeBoot() {
  useEffect(() => {
    const stop = bootSiteChrome();
    return stop;
  }, []);
  return null;
}
