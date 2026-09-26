import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  CONTACT_EMAIL,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use — PercentBox",
  description:
    "Terms for using PercentBox calculators and guides: educational estimates, acceptable use, and how advertising fits in.",
  alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "WebPage",
        name: "Terms of use",
        url: absoluteUrl("/terms"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Terms", path: "/terms" },
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
            items={[{ name: "Home", href: "/" }, { name: "Terms" }]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Terms of use
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 26, 2026
          </p>
          <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Acceptance
              </h2>
              <p className="mt-2 leading-relaxed">
                By using percentbox.com (“PercentBox”, “the site”), you agree to
                these terms. If you do not agree, do not use the site.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Educational purpose
              </h2>
              <p className="mt-2 leading-relaxed">
                Calculators and articles are for education, estimation, and
                convenience. Results come from standard formulas applied to the
                numbers you enter. They are not professional tax, accounting,
                investment, legal, or financial advice, and they are not an
                offer of credit. Confirm important decisions with a qualified
                professional or an official source.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Accuracy
              </h2>
              <p className="mt-2 leading-relaxed">
                The goal is correct math and clear explanations. Service may be
                interrupted, and results can be affected by rounding, browser
                differences, or a mistaken input. A preset tax rate is a memory
                aid, not a determination that the rate applies to you.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Acceptable use
              </h2>
              <p className="mt-2 leading-relaxed">
                You may use the site for personal and educational purposes. You
                may not abuse the service, attempt to disrupt it, scrape it in
                a way that harms availability, or use it for unlawful activity.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Intellectual property
              </h2>
              <p className="mt-2 leading-relaxed">
                Site design, branding, and original written content belong to
                PercentBox or its licensors. You may quote short excerpts with
                attribution and a link for non-commercial educational use.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Advertising
              </h2>
              <p className="mt-2 leading-relaxed">
                The site may display third-party advertisements, including
                Google AdSense, to support free access. Whether those scripts
                load depends on the choice described in the{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  privacy policy
                </Link>
                . An advertisement is not an endorsement.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Limitation of liability
              </h2>
              <p className="mt-2 leading-relaxed">
                To the fullest extent permitted by law, PercentBox is not liable
                for loss or damage arising from use of, or reliance on, the
                site’s calculators or content.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-2 leading-relaxed">
                Questions about these terms:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                or the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
