import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { InstallHint } from "@/components/InstallHint";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  organizationJsonLd,
  webAppJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Percentage Calculator — Free Online % Calculator | PercentBox",
    template: "%s | PercentBox",
  },
  description:
    "Free online percentage calculator. Instantly find what is X% of Y, percentage increase/decrease, tip, and discount. Fast, mobile-friendly, no signup.",
  applicationName: SITE_NAME,
  keywords: [
    "percentage calculator",
    "what is x percent of y",
    "percent of calculator",
    "percentage increase calculator",
    "percentage decrease calculator",
    "percentage change calculator",
    "tip calculator",
    "discount calculator",
    "percent calculator online",
    "free percentage calculator",
    "x is what percent of y",
    "percent off calculator",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Percentage Calculator — Free Online % Calculator | PercentBox",
    description: SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator | PercentBox",
    description:
      "Free online percentage calculator — tips, discounts, increase/decrease, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      en: SITE_URL,
    },
  },
  category: "utilities",
  // iOS home-screen / standalone web app behavior
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#059669",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('percentbox-theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd(), websiteJsonLd(), webAppJsonLd()],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={rootJsonLd} />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <GoogleAnalytics />
        <InstallHint />
        {children}
      </body>
    </html>
  );
}
