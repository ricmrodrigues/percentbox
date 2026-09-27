import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import {
  CONTACT_EMAIL,
  PUBLISHER_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "About PercentBox — Who Runs It and Why",
  description:
    "PercentBox is a free educational calculator site published by Ricardo Rodrigues in Portugal. Formulas, guides, and how it relates to Portugal Net Pay.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About PercentBox",
    description:
      "Who publishes PercentBox, what the calculators are for, and the editorial standards behind the guides.",
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
        dateModified: "2026-09-27",
        author: {
          "@type": "Person",
          name: PUBLISHER_NAME,
        },
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
          <p className="mt-2 text-sm text-slate-500">
            Updated September 27, 2026 · Published by {PUBLISHER_NAME}
          </p>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              <strong className="text-slate-900 dark:text-white">
                PercentBox
              </strong>{" "}
              is a free educational website for everyday percentage and finance
              arithmetic. The calculators give an instant number. The{" "}
              <Link
                href="/guides"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                guides
              </Link>{" "}
              explain the base, the formula, and the mistakes that make a
              correct formula answer the wrong question.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              Who runs it
            </h2>
            <p>
              PercentBox is published by{" "}
              <strong className="text-slate-900 dark:text-white">
                {PUBLISHER_NAME}
              </strong>
              , working from Portugal. It is an independent educational
              project, not a bank, tax office, or licensed advisory firm. There
              is no office address published here because the site does not
              offer in-person services.
            </p>
            <p>
              The same publisher also runs{" "}
              <a
                href="https://portugalnetpay.com"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portugal Net Pay
              </a>{" "}
              (SalarioBox), a sister site for Portugal-specific salary and tax
              estimates in English and Portuguese. PercentBox stays on general
              percentage and finance math — VAT arithmetic, markup, compound
              interest, tips, discounts, and fixed-rate loan illustrations —
              that is not tied to one country’s payroll tables.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              What the site is for
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Students checking percent-of, reverse percent, and percent-change
                problems
              </li>
              <li>Shoppers comparing a real sale price with a stacked discount</li>
              <li>Diners splitting a tip when the bill does not divide cleanly</li>
              <li>
                Freelancers separating markup (on cost) from margin (on price)
              </li>
              <li>
                Anyone who wants a fixed-rate loan payment or a compound-interest
                scenario labeled as a scenario
              </li>
            </ul>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              How the calculators work
            </h2>
            <p>
              Calculations run in your browser. There is no account, and the
              numbers you type are not stored on a PercentBox server. Optional
              history (the last few calculations) and the light/dark theme live
              in localStorage on your device. You can clear them in the
              calculator or in your browser settings.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              Editorial standards
            </h2>
            <p>
              Guides are original explanations with worked numbers, not copied
              textbook chapters and not filler wrapped around a keyword. When
              a result depends on a local rule — a VAT rate, a tipping custom, a
              lender’s fee — the article says so and points you to an official
              source or the contract rather than inventing a universal answer.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              How a calculator page is checked
            </h2>
            <p>
              Each tool page states who the formula is for, what every field
              means, the operation the page actually runs, at least one
              worked example with the inputs written out, the mistakes that
              produce a confident wrong number, and a short FAQ. The formula
              line in the calculator is the same operation as the prose. If
              they disagree, the page is wrong and should be corrected.
            </p>
            <p>
              Worked examples use amounts you can redo by hand. Where a figure
              is rounded to the cent, the page says it is rounded. VAT presets
              are memory aids for commonly cited rates, not a decision about
              which rate a supply takes. Percent change is kept separate from
              percentage points. A loan schedule is not a compound-interest
              projection, and a markup is not a margin. An updated date means
              the prose was reviewed. It does not mean a tax authority changed
              a rate that day.
            </p>
            <p>
              Tools and articles are educational estimates. They are not tax,
              legal, investment, or credit advice.
            </p>
            <p>
              Pages show an author and an updated date when the content model
              has one. If you find a wrong factor, a swapped base, or a stale
              rate description, write to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              or use the{" "}
              <Link
                href="/contact"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                contact page
              </Link>
              . Corrections are part of the job.
            </p>
            <h2 className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
              Advertising and measurement
            </h2>
            <p>
              The site may show ads through Google AdSense so the tools can stay
              free, and it may use Google Analytics 4 to see which pages are
              actually used. A first-party banner lets you accept or reject
              those non-essential scripts.               Visitors whose browser looks like the
              EEA, the UK, or Switzerland do not get those scripts until they
              accept. Details,
              including what this banner is not, are in the{" "}
              <Link
                href="/privacy"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                privacy policy
              </Link>
              .
            </p>
            <p>
              Start with the{" "}
              <Link
                href="/"
                className="font-medium text-emerald-700 underline dark:text-emerald-400"
              >
                percentage calculator
              </Link>{" "}
              or open a guide if you want the method before the number.
            </p>
          </div>
          <RelatedTools />
        </div>
      </main>
      <Footer />
    </>
  );
}
