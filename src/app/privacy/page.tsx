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
  title: "Privacy Policy — PercentBox",
  description:
    "What PercentBox stores on your device, how the consent banner gates Google Analytics and AdSense, and how to contact Ricardo Rodrigues about privacy.",
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
        dateModified: "2026-09-26",
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
            Last updated: September 26, 2026
          </p>

          <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-400">
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Overview
              </h2>
              <p className="mt-2 leading-relaxed">
                PercentBox (“we”, “our”) provides free online percentage
                calculators and written guides at percentbox.com. The publisher
                is Ricardo Rodrigues (Portugal). This policy describes what the
                site actually does: calculations in your browser, a few pieces
                of storage on your device, optional Google Analytics 4, and
                optional Google AdSense. It also describes the limits of the
                consent banner, which is a first-party control and not a
                certified consent-management platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Calculator data
              </h2>
              <p className="mt-2 leading-relaxed">
                Numbers you enter are processed in your browser. We do not
                require an account and we do not store calculation inputs on
                our servers. Emailing us is a separate choice; the message
                contains whatever you put in it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Storage on your device
              </h2>
              <p className="mt-2 leading-relaxed">
                These are the names the site itself writes. Advertising and
                analytics cookies appear only if those scripts are allowed to
                load, and Google — not PercentBox — sets their names and
                lifetimes.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                    <tr>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Where</th>
                      <th className="px-4 py-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">percentbox-theme</td>
                      <td className="px-4 py-3">localStorage</td>
                      <td className="px-4 py-3">
                        Light or dark theme. Not used for ads.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">percentbox-history</td>
                      <td className="px-4 py-3">localStorage</td>
                      <td className="px-4 py-3">
                        Up to 10 recent calculation summaries on this device.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">pb_consent</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Stores Accept or Reject for about 180 days so the banner
                        can remember you.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Google Analytics cookies</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Only if analytics is allowed to load. Typically include
                        cookies such as <span className="font-mono">_ga</span>.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Advertising cookies</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Only if the AdSense script is allowed to load. Google
                        may set cookies to measure and (where permitted)
                        personalize ads.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 leading-relaxed">
                You can clear localStorage and cookies in your browser. Clearing
                them removes theme, history, and the stored consent choice, so
                the banner will ask again.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Consent banner
              </h2>
              <p className="mt-2 leading-relaxed">
                A banner at the bottom of the page offers{" "}
                <strong className="text-slate-800 dark:text-slate-200">
                  Accept
                </strong>{" "}
                and{" "}
                <strong className="text-slate-800 dark:text-slate-200">
                  Reject non-essential
                </strong>
                . Non-essential means Google Analytics and the AdSense script.
                Theme and calculation history are not gated, because they stay
                on your device and are part of using the calculators.
              </p>
              <p className="mt-2 leading-relaxed">
                If you reject, those scripts are not injected on later page
                views, and a reload drops any that were already added in the
                session. If you accept, the scripts may load and Consent Mode
                is updated to granted.
              </p>
              <p className="mt-2 leading-relaxed">
                <strong className="text-slate-800 dark:text-slate-200">
                  EEA and UK default.
                </strong>{" "}
                Before a choice is stored, the site treats the browser as in
                the EEA or the UK when the timezone is in Europe (or a few
                Atlantic territories such as the Azores, Madeira, and the
                Canary Islands) or when the browser language region is an EEA
                or UK country code. In that case analytics and AdSense stay off
                until you accept. Elsewhere, those scripts load unless you have
                rejected them, and the banner still lets you reject.
              </p>
              <p className="mt-2 leading-relaxed">
                That test is a lightweight heuristic. It is not an IP-address
                lookup, not a geolocation prompt, and not an IAB Transparency
                and Consent Framework platform. It can misclassify a traveler, a
                VPN, or a browser whose language does not match where the person
                is. Cookie settings in the footer reopens the choice.
              </p>
              <p className="mt-2 leading-relaxed">
                When the scripts are allowed to run, the page sets Google
                Consent Mode defaults for{" "}
                <span className="font-mono">ad_storage</span>,{" "}
                <span className="font-mono">ad_user_data</span>,{" "}
                <span className="font-mono">ad_personalization</span>, and{" "}
                <span className="font-mono">analytics_storage</span> to match
                that choice. Consent Mode is a signal to Google tags. It is not,
                by itself, a guarantee about how every ad product behaves in
                every country.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Cookies, ads, and personalization
              </h2>
              <p className="mt-2 leading-relaxed">
                If AdSense loads, Google may use cookies and similar
                technologies to show ads, measure them, and limit fraud. Third
                parties, including Google, may use advertising identifiers to
                serve ads based on visits to this and other sites where
                personalization is permitted. In the EEA and the UK, personalized
                ads generally should not run unless a valid consent exists.
                PercentBox’s banner is the control we provide; we do not claim
                it is a full regulatory consent platform.
              </p>
              <p className="mt-2 leading-relaxed">
                You can review ad personalization in{" "}
                <a
                  href="https://adssettings.google.com"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Ads Settings
                </a>{" "}
                and read{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  how Google uses data when you use our partners’ sites or apps
                </a>
                . Rejecting non-essential cookies on PercentBox stops this site
                from loading the AdSense script; it does not delete cookies
                Google may already have set in a previous visit. Clear cookies
                in the browser for that.
              </p>
              <p className="mt-2 leading-relaxed">
                Manual ad units appear only when a placement ID is configured.
                Empty placement settings do not insert placeholder boxes. Auto
                ads, if enabled in the AdSense account, are placed by Google’s
                script rather than by a slot we invented.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Analytics and how to opt out
              </h2>
              <p className="mt-2 leading-relaxed">
                When analytics is allowed and a measurement ID is configured, we
                use Google Analytics 4 for pages visited, coarse traffic source,
                device type, and calculator events such as copying a result. IP
                anonymization is requested where the tag supports it. Google’s
                own policy describes what it does with that data.
              </p>
              <p className="mt-2 leading-relaxed">
                You can opt out by choosing Reject non-essential on the banner,
                by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Analytics Opt-out add-on
                </a>
                , or by blocking the analytics domain in the browser. Rejecting
                on this site stops the tag from being added on subsequent
                loads.
              </p>
              <p className="mt-2 leading-relaxed">
                The host (Vercel) may keep standard server logs — IP address,
                user agent, and timestamps — for security and reliability. Those
                logs are not the calculator inputs.
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
                Privacy questions: email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Privacy`}
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                with “Privacy” in the subject, or use the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  contact page
                </Link>
                . Please include the page URL and whether you are asking about
                the banner, analytics, or ads.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Changes
              </h2>
              <p className="mt-2 leading-relaxed">
                We may update this policy as the banner or the tags change. The
                date at the top moves when we do. Continued use of the site
                after an update means you are using it under the revised policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
