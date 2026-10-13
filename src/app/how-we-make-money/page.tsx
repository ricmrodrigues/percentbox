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
  title: "How We Make Money — PercentBox",
  description:
    "PercentBox is free. How ads and affiliate links pay for it, and why they never change a calculator result.",
  alternates: { canonical: absoluteUrl("/how-we-make-money") },
  robots: { index: true, follow: true },
};

const link = "font-medium text-emerald-700 underline dark:text-emerald-400";
const h2 = "pt-4 text-xl font-bold text-slate-900 dark:text-white";

export default function HowWeMakeMoneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "WebPage",
        name: "How we make money",
        url: absoluteUrl("/how-we-make-money"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: "2026-10-13",
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "How we make money", path: "/how-we-make-money" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "How we make money" }]} />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How we make money
          </h1>
          <p className="mt-2 text-sm text-slate-500">Updated October 13, 2026</p>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              PercentBox is free and has no paid plan. It is paid for in two
              ways, and both are advertising. Every paid element is labelled
              where it appears, as the Portuguese Advertising Code (Código da
              Publicidade, article 8) requires advertising to be clearly
              identifiable.
            </p>
            <h2 className={h2}>Ads (Google AdSense)</h2>
            <p>
              Some pages show ads served by Google AdSense. We don&apos;t pick
              the individual ads and don&apos;t endorse what they sell. In the
              EEA, the UK and Switzerland, ads only load after you accept
              non-essential cookies. See the{" "}
              <Link href="/privacy" className={link}>privacy policy</Link>.
            </p>
            <h2 className={h2}>Affiliate links</h2>
            <p>
              Some pages may contain a recommendation box for a service that
              fits the topic, such as a money-transfer service or a current
              account. These boxes are marked <strong>Ad · affiliate link</strong>.
              If you sign up through one, the provider may pay us a commission.{" "}
              <strong>It costs you nothing extra</strong>: you pay the same
              price as anyone else.
            </p>
            <h2 className={h2}>What money never changes</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Calculator results. Every calculator runs the same formula
                whether or not the page carries an ad or an affiliate box, and
                no partner can see or change it.
              </li>
              <li>
                Guides. They are written to explain the maths first. A box is
                only added where it fits and never replaces the explanation.
              </li>
              <li>
                We never promote credit or loans, insurance quotes, or
                investment, trading or crypto products.
              </li>
            </ul>
            <p>
              Questions go to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a>.
              Who publishes the site is on the{" "}
              <Link href="/about" className={link}>About page</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
