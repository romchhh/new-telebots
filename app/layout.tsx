import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

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

/**
 * Pass-through: `<html>`/`<body>` рендерить SiteHtmlShell у мовному layout,
 * щоб атрибут lang був коректним без headers() (який робив усі сторінки динамічними).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
