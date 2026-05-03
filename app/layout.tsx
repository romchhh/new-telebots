import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    template: "%s | TeleBots",
  },
  description:
    "Замовити розробку Telegram-бота чи сайту: лендинги, e-commerce, SEO, інтеграції з CRM і оплатою. 200+ проєктів, безкоштовна консультація, старт від 24 год. TeleBots.",
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
  authors: [{ name: "TeleBots" }],
  creator: "TeleBots",
  publisher: "TeleBots",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: baseUrl,
    siteName: "TeleBots",
    title: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    description:
      "Telegram-боти, сайти та e-commerce під ключ. 200+ проєктів, консультація, старт від 24 год.",
    images: [
      {
        url: `${baseUrl}/portfolio/portfolio-default.jpg`,
        width: 1200,
        height: 630,
        alt: "TeleBots - Professional Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleBots — розробка Telegram-ботів і сайтів під ключ",
    description:
      "Telegram-боти, сайти та e-commerce під ключ. 200+ проєктів, консультація, старт від 24 год.",
    images: [`${baseUrl}/portfolio/portfolio-default.jpg`],
    creator: "@telebotsnowayrm",
    site: "@telebotsnowayrm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    canonical: baseUrl,
    languages: {
      "x-default": `${baseUrl}/uk`,
      "uk": `${baseUrl}/uk`,
      "en": `${baseUrl}/en`,
      "pl": `${baseUrl}/pl`,
      "ru": `${baseUrl}/ru`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" prefix="og: https://ogp.me/ns#" className={montserrat.variable}>
      <head>
        {/* DNS Prefetch для швидкості */}
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Preconnect для критичних ресурсів */}

        {/* Icons — вкладка браузера та іконка в пошуку Google */}
        <link rel="icon" href="/other/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/other/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta description (fallback; сторінки [lang] додають свій через generateMetadata) */}
        <meta name="description" content="TeleBots — розробка сайтів та інтернет-магазинів під ключ, веб-інтерфейсів, Telegram ботів і автоматизації. 200+ проєктів. Київ / віддалено." />
        {/* Meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="B6RsISu82MaHNjyNFTkfGrgB0SFwQDHLNrlGh0RoQe4" />
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
        
        {/* WebSite schema — офіційна назва сайту для Google (поряд з favicon) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'TeleBots',
              url: baseUrl,
            }),
          }}
        />
        {/* og:site_name задано в metadata.openGraph — дублюємо для явності */}
        <meta property="og:site_name" content="TeleBots" />
        {/* Additional SEO meta tags */}
        <meta name="application-name" content="TeleBots" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="UA-32" />
        <meta name="geo.placename" content="Kyiv" />
        <meta name="geo.position" content="50.4501;30.5234" />
        <meta name="ICBM" content="50.4501, 30.5234" />
        <meta name="language" content="Ukrainian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7YWVBBJP8X" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7YWVBBJP8X');
gtag('config', 'AW-16801058748');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-16801058748/CPxTCNPDyqAcELyfr8s-',
      'event_callback': callback
  });
  return false;
}`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N6GS5CQC');`,
          }}
        />
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
        <Script id="ms-clarity" strategy="afterInteractive">
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
