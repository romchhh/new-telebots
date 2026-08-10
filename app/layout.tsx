import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope, Montserrat, Unbounded } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

/** Основний текст / UI */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

/**
 * Заголовки (поза hero): Unbounded
 * Геометричний display з кирилицею — серйозніше за Oswald, без «спортивного» стиснення.
 */
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-unbounded",
  preload: true,
});

/** Hero-секції — без змін */
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    template: "%s | TeleBots",
  },
  description:
    "Telegram-боти від $100, лендінги від $150, e-commerce від $400. 200+ проєктів, безкоштовна консультація, старт за 24 год.",
  keywords: [
    "розробка сайтів",
    "створення сайту під ключ",
    "веб-розробка Україна",
    "лендинг замовити",
    "інтернет-магазин під ключ",
    "розробка сайту на Next.js",
    "телеграм бот розробка",
    "розробка чат-ботів",
    "автоматизація бізнесу",
    "TeleBots",
    "UI/UX дизайн сайту",
  ],
  authors: [{ name: "TeleBots", url: siteUrl }],
  creator: "TeleBots",
  publisher: "TeleBots",
  category: "Technology",
  classification: "Web Development & Bot Creation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "TeleBots",
    title: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    description:
      "Telegram-боти від $100, лендінги від $150, e-commerce від $400. 200+ проєктів, консультація, старт від 24 год.",
    images: [
      {
        url: `${siteUrl}/other/about-hero.png`,
        width: 1200,
        height: 630,
        alt: "TeleBots - Professional Digital Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    description:
      "Telegram-боти від $100, лендінги від $150, e-commerce від $400. 200+ проєктів, консультація, старт від 24 год.",
    images: [`${siteUrl}/other/about-hero.png`],
    creator: "@telebotsnowayrm",
    site: "@telebotsnowayrm",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "B6RsISu82MaHNjyNFTkfGrgB0SFwQDHLNrlGh0RoQe4",
  },
  icons: {
    icon: [
      { url: "/other/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/other/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/other/favicon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get('x-site-lang') ?? 'uk';
  const htmlLang = ['uk', 'en', 'pl', 'ru'].includes(lang) ? lang : 'uk';

  return (
    <html
      lang={htmlLang}
      prefix="og: https://ogp.me/ns#"
      className={`${manrope.variable} ${unbounded.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Icons — вкладка браузера та іконка в пошуку Google */}
        <link rel="icon" href="/other/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/other/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Блог TeleBots" href={`${siteUrl}/feed.xml`} />
        
        {/* Meta tags */}
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
