import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import {
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "About PercentBox — Free Percentage Calculator",
  description:
    "Learn about PercentBox: a free, privacy-friendly online percentage calculator for percent of, change, tips, and discounts. No signup required.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About PercentBox",
    description:
      "Free, fast percentage calculators built for students, shoppers, and everyday math.",
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "AboutPage",
        name: "About PercentBox",
        url: absoluteUrl("/about"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "About" }]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About PercentBox
          </h1>
          <div className="prose-slate mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              <strong className="text-slate-900 dark:text-white">
                PercentBox
              </strong>{" "}
              is a free online percentage calculator designed to be faster and
              cleaner than cluttered ad-heavy tools. We focus on the math people
              actually need:{" "}
              <em>what is X% of Y</em>, reverse percentages, increases and
              decreases, percentage change, tips, and discounts.
            </p>
            <p>
              Everything runs in your browser. There is no account, no tracking
              login wall, and calculation history stays on your device via
              localStorage. Results update as you type so you can explore
              numbers without friction.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              Who it is for
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Students checking homework and exam-style percent problems</li>
              <li>Shoppers comparing discounts and sale prices</li>
              <li>Diners splitting tips and bills</li>
              <li>Anyone who needs a reliable percent increase or change</li>
            </ul>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              Our approach
            </h2>
            <p>
              We publish clear formulas, worked examples, and FAQ content so
              answers are transparent—not a black box. The site is mobile-first,
              lightweight, and built with modern web standards for speed and
              accessibility.
            </p>
            <p>
              Start with the{" "}
              <Link
                href="/"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                main percentage calculator
              </Link>{" "}
              or jump to a specialized tool below.
            </p>
          </div>
          <RelatedTools />
        </div>
      </main>
      <Footer />
    </>
  );
}
