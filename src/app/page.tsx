import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PopularCalculations } from "@/components/PopularCalculations";
import { HOME_FAQS, SeoContent } from "@/components/SeoContent";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  webAppJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Percentage Calculator — Free Online % Calculator | PercentBox",
  },
  description:
    "Free percentage calculator online. What is X% of Y, percentage increase & decrease, tip calculator, and discount calculator. Instant results, mobile-friendly, no signup.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Percentage Calculator — Free Online % Calculator | PercentBox",
    description:
      "Calculate percentages instantly: X% of Y, percentage change, tips, and discounts. Clean, fast, and free.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      webAppJsonLd(),
      faqJsonLd(HOME_FAQS),
      breadcrumbJsonLd([{ name: "Home", path: "/" }]),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Percentage Calculator — Free Online % Calculator | PercentBox",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#webapp` },
        description:
          "Free online percentage calculator for percent of, change, tips, and discounts.",
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />

      <main className="flex-1">
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-emerald-50/80 to-transparent px-4 pb-8 pt-8 dark:border-slate-800 dark:from-emerald-950/20 sm:px-6 sm:pb-10 sm:pt-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Free · Instant · No signup
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Percentage Calculator
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Calculate any percentage in seconds —{" "}
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                what is X% of Y
              </strong>
              , percentage increase &amp; decrease, tips, and discounts. Clean,
              fast, and built for mobile.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-500">
              Also try{" "}
              <a
                href="/loan-calculator"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                loan / EMI
              </a>
              ,{" "}
              <a
                href="/vat-calculator"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                VAT
              </a>
              ,{" "}
              <a
                href="/markup-calculator"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                markup &amp; margin
              </a>
              , and{" "}
              <a
                href="/compound-interest-calculator"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                compound interest
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <AdSlot slot="top" className="mb-6" />

          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div id="calculator" className="min-w-0 scroll-mt-20">
              <Calculator />
              <AdSlot slot="below" className="mt-6" />
            </div>

            <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
              <AdSlot slot="sidebar" />

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Quick tips
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    Results update as you type — no calculate button
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    Tap quick % buttons for common values
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    Copy any result with one click
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    History is saved on this device only
                  </li>
                </ul>
              </div>

              <PopularCalculations />

              <nav
                aria-label="Calculator tools"
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  All tools
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    ["What is X% of Y?", "/what-is-x-percent-of-y"],
                    ["Markup / margin", "/markup-calculator"],
                    ["VAT / sales tax", "/vat-calculator"],
                    ["Compound interest", "/compound-interest-calculator"],
                    ["Loan / EMI", "/loan-calculator"],
                    ["Tip calculator", "/tip-calculator"],
                    ["Discount calculator", "/discount-calculator"],
                    ["Percentage change", "/percentage-change-calculator"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>

          <AdSlot slot="inline" className="my-10" />

          <SeoContent />
        </div>
      </main>

      <Footer />
    </>
  );
}
