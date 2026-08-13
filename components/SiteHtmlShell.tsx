import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { fontVariables } from '@/lib/fonts';
import { siteUrl } from '@/lib/site';

/**
 * `<html>`/`<body>` живуть тут, а не в app/layout.tsx: root layout не має доступу
 * до параметра мови, а читання headers() робило б увесь сайт динамічним.
 */
export default function SiteHtmlShell({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} prefix="og: https://ogp.me/ns#" className={fontVariables}>
      <head>
        <link rel="icon" href="/other/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/other/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Блог TeleBots" href={`${siteUrl}/feed.xml`} />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="B6RsISu82MaHNjyNFTkfGrgB0SFwQDHLNrlGh0RoQe4" />
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}

        <link rel="author" href={`${siteUrl}/uk/about`} />

        <meta property="instagram:account" content="@telebotsnowayrm" />
        <meta name="pinterest-rich-pin" content="true" />

        <meta name="application-name" content="TeleBots" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="UA-32" />
        <meta name="geo.placename" content="Kyiv" />
        <meta name="geo.position" content="50.4501;30.5234" />
        <meta name="ICBM" content="50.4501, 30.5234" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6GS5CQC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <SpeedInsights />
        <Analytics />
        {/* Analytics після LCP — не блокують first paint / TBT */}
        <Script id="gtag-loader" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-7YWVBBJP8X" />
        <Script id="gtag-config" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-7YWVBBJP8X');
gtag('config','AW-16801058748');
window.gtag_report_conversion=function(url){
  var callback=function(){if(typeof url!='undefined'){window.location=url;}};
  gtag('event','conversion',{'send_to':'AW-16801058748/CPxTCNPDyqAcELyfr8s-','event_callback':callback});
  return false;
};`}
        </Script>
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N6GS5CQC');`}
        </Script>
        <Script id="ms-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vutiawpnrs");`}
        </Script>
      </body>
    </html>
  );
}
