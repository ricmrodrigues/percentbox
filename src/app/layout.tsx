import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://percentbox.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Percentage Calculator — Free Online % Calculator | PercentBox",
    template: "%s | PercentBox",
  },
  description:
    "Free online percentage calculator. Instantly find what is X% of Y, percentage increase/decrease, tip, and discount. Fast, mobile-friendly, no signup.",
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
  ],
  authors: [{ name: "PercentBox" }],
  creator: "PercentBox",
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
    url: siteUrl,
    siteName: "PercentBox",
    title: "Percentage Calculator — Free Online % Calculator | PercentBox",
    description:
      "Calculate percentages instantly: X% of Y, percentage change, tips, and discounts. Clean, fast, and free.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "PercentBox logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Percentage Calculator | PercentBox",
    description:
      "Free online percentage calculator — tips, discounts, increase/decrease, and more.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "utilities",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "PercentBox Percentage Calculator",
      url: siteUrl,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free online percentage calculator for percent of, percentage change, tips, and discounts.",
    },
    {
      "@type": "WebSite",
      name: "PercentBox",
      url: siteUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate a percentage of a number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply the number by the percentage, then divide by 100. For example, 20% of 150 is (20 ÷ 100) × 150 = 30.",
          },
        },
        {
          "@type": "Question",
          name: "How is percentage increase calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Percentage change = ((new − original) ÷ |original|) × 100. If a price goes from $80 to $100, the increase is 25%.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate a tip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply the bill by the tip percentage divided by 100. An 18% tip on $64.50 is $11.61, for a total of $76.11.",
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
