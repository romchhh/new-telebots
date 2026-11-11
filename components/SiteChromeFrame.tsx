'use client';

import type { ReactNode } from 'react';
import SiteChromeBoot from '@/components/SiteChromeBoot';

type SiteChromeFrameProps = {
  children: ReactNode;
  footer: ReactNode;
  navigation: ReactNode;
  className?: string;
};

/**
 * DOM shell matching site/app SiteChrome:
 * backdrop → page-holder → spacer → finale → stage → veil → controls
 */
export default function SiteChromeFrame({
  children,
  footer,
  navigation,
  className = '',
}: SiteChromeFrameProps) {
  return (
    <div className={`navigation-shell bg-white ${className}`.trim()} data-menu-phase="closed">
      <div aria-hidden="true" className="navigation-backdrop" />
      <div className="page-holder">
        <div className="site-page-content">
          <div className="site-page-inner">
            <div className="page-transition">{children}</div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="finale-spacer" />
      {footer}
      <div aria-hidden="true" className="navigation-stage" />
      <div aria-hidden="true" className="header-veil">
        <span />
        <span />
        <span />
        <span />
      </div>
      {navigation}
      <SiteChromeBoot />
    </div>
  );
}
