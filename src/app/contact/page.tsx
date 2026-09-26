import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  CONTACT_EMAIL,
  PUBLISHER_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact PercentBox",
  description:
    "Email hello@percentbox.com for corrections, privacy requests, and feedback. PercentBox does not offer personal financial advice.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact PercentBox",
    description:
      "How to reach Ricardo Rodrigues about PercentBox: corrections, privacy, and general feedback.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "ContactPage",
        name: "Contact PercentBox",
        url: absoluteUrl("/contact"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
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
            items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Contact
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {PUBLISHER_NAME} reads mail about PercentBox. The useful messages
            are specific: a wrong formula, a broken page, an accessibility
            problem, or a privacy question.
          </p>

          <div className="mt-8 space-y-8 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Email
              </h2>
              <p className="mt-2 leading-relaxed">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-semibold text-emerald-700 underline dark:text-emerald-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-3 leading-relaxed">
                Include the page URL and what you expected the number to be.
                For a calculation dispute, send the inputs (rate, base, and
                which box they were in). A screenshot of the result helps.
              </p>
              <p className="mt-3 leading-relaxed">
                Aim for a reply within a few business days. Mail about a
                single-page correction is usually faster than a broad product
                suggestion. There is no phone line and no contact form; email
                is the support path.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                What to write about
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">
                    Corrections.
                  </strong>{" "}
                  A wrong factor, a swapped base, a rate described as if it
                  were universal, or a worked example that does not check out.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">
                    Privacy.
                  </strong>{" "}
                  Put “Privacy” in the subject. Questions about the consent
                  banner, analytics, or ads are answered against the{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    privacy policy
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">
                    Accessibility.
                  </strong>{" "}
                  If a calculator cannot be used with a keyboard or a screen
                  reader, say which page and which control.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">
                    Feedback.
                  </strong>{" "}
                  Missing explanations and confusing labels are welcome. Feature
                  requests are read; they are not a commitment to build.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                What this inbox is not
              </h2>
              <p className="mt-2 leading-relaxed">
                PercentBox does not give personal financial, tax, credit, or
                legal advice, and it does not intercede with a lender, a shop,
                or a tax authority. A loan illustration on this site is not an
                offer. For Portugal payroll estimates, use the sister site{" "}
                <a
                  href="https://portugalnetpay.com"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portugal Net Pay
                </a>{" "}
                rather than asking PercentBox to reproduce those tables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Useful links
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    About PercentBox
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    Educational guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  >
                    Percentage calculator
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
