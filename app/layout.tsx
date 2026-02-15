import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://new.telebots.site';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TeleBots - Розробка телеграм ботів, сайтів та цифрових рішень",
    template: "%s | TeleBots",
  },
  description: "Розробка телеграм ботів, чат-ботів з AI, сайтів та інтернет-магазинів. Швидкий старт за 24 години, готове рішення за 2 тижні. 200+ проєктів. Автоматизація бізнесу під ключ.",
  keywords: ["телеграм бот розробка", "розробка чат-ботів", "розробка сайтів", "інтернет-магазин під ключ", "автоматизація бізнесу", "цифрові рішення для бізнесу", "TeleBots", "замовлення телеграм бота", "веб-розробка", "AI чат-бот", "дизайн логотипу", "UI/UX"],
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
    title: "TeleBots - Розробка телеграм ботів, сайтів та цифрових рішень",
    description: "Розробка телеграм ботів, чат-ботів з AI, сайтів та інтернет-магазинів. 200+ проєктів. Швидкий старт за 24 години.",
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
    title: "TeleBots - Розробка телеграм ботів, сайтів та цифрових рішень",
    description: "Розробка телеграм ботів, чат-ботів з AI, сайтів та інтернет-магазинів. 200+ проєктів. Швидкий старт за 24 години.",
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
    <html lang="uk" prefix="og: https://ogp.me/ns#">
      <head>
        {/* DNS Prefetch для швидкості */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Preconnect для критичних ресурсів */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload hero для LCP (головна) */}
        <link rel="preload" href="/other/hero-background.jpeg" as="image" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Icons — вкладка браузера та іконка в пошуку Google */}
        <link rel="icon" href="/other/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/other/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="google-site-verification" content="B6RsISu82MaHNjyNFTkfGrgB0SFwQDHLNrlGh0RoQe4" />
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
        
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
      </head>
      <body className="antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
