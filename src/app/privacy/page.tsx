import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy — PercentBox",
  description:
    "PercentBox privacy policy: how we handle data, cookies, local storage, and advertising (Google AdSense).",
  alternates: { canonical: absoluteUrl("/privacy") },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "WebPage",
        name: "Privacy Policy",
        url: absoluteUrl("/privacy"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/privacy" },
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
            items={[{ name: "Home", href: "/" }, { name: "Privacy" }]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: July 24, 2026
          </p>

          <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Overview
              </h2>
              <p className="mt-2 leading-relaxed">
                PercentBox (&quot;we&quot;, &quot;our&quot;) provides free online
                percentage calculators at percentbox.com. This policy explains
                what information is processed when you use the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Calculator data
              </h2>
              <p className="mt-2 leading-relaxed">
                Numbers you enter into the calculators are processed in your
                browser. We do not require an account and do not store your
                calculation inputs on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Local storage
              </h2>
              <p className="mt-2 leading-relaxed">
                We may use browser localStorage to remember preferences such as
                light/dark theme and a short list of recent calculations on your
                device only. You can clear this data anytime via your browser
                settings or the in-app clear history control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Cookies and advertising
              </h2>
              <p className="mt-2 leading-relaxed">
                We may display ads using Google AdSense (or similar partners).
                These services may use cookies and similar technologies to show
                relevant ads, measure performance, and prevent fraud. Third
                parties, including Google, may use cookies to serve ads based on
                your prior visits to this and other websites.
              </p>
              <p className="mt-2 leading-relaxed">
                You can manage ad personalization through{" "}
                <a
                  href="https://adssettings.google.com"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Ads Settings
                </a>{" "}
                and learn more at{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  How Google uses data when you use our partners&apos; sites
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Analytics and logs
              </h2>
              <p className="mt-2 leading-relaxed">
                We use <strong>Google Analytics 4</strong> to understand how the
                site is used (pages visited, traffic sources, device types, and
                aggregate interaction events such as calculator usage). Google
                may process data according to its own privacy policies. IP
                anonymization is enabled where supported. You can opt out with
                browser extensions such as Google Analytics Opt-out, or by
                blocking analytics cookies.
              </p>
              <p className="mt-2 leading-relaxed">
                Hosting providers (such as Vercel) may also collect standard
                server logs (IP address, user agent, timestamps) for security
                and reliability.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Children
              </h2>
              <p className="mt-2 leading-relaxed">
                The site is a general-purpose calculator and is not directed at
                children under 13. We do not knowingly collect personal
                information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-2 leading-relaxed">
                For privacy questions about PercentBox, contact us via the email
                associated with the domain registration / AdSense account
                operator.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Changes
              </h2>
              <p className="mt-2 leading-relaxed">
                We may update this policy from time to time. The &quot;Last
                updated&quot; date at the top will change when we do.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
