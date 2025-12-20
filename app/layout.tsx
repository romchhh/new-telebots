import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://telebotsnowayrm.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TeleBots - Professional Digital Solutions",
    template: "%s | TeleBots",
  },
  description: "Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots. 200+ completed projects. Turnkey business automation.",
  keywords: ["telegram bot", "bot development", "chatbot", "website development", "e-commerce", "parser", "AI bot", "business automation"],
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
    title: "TeleBots - Professional Digital Solutions",
    description: "Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "TeleBots - Professional Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleBots - Professional Digital Solutions",
    description: "Professional development of Telegram bots, chatbots, websites, e-commerce stores, parsers and AI bots",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@telebotsnowayrm",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: baseUrl,
    languages: {
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
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
