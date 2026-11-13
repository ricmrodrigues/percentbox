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
    "What PercentBox stores on your device, how Google's consent message and Consent Mode govern Google Analytics and AdSense, and how to contact Ricardo Rodrigues about privacy.",
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
        dateModified: "2026-11-13",
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
            Last updated: November 13, 2026
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
                optional Google AdSense. Consent for analytics and ads is
                collected by Google’s own consent message, not by a
                PercentBox banner.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Who is responsible
              </h2>
              <p className="mt-2 leading-relaxed">
                The person responsible for this site is Ricardo Rodrigues, in
                Portugal. Contact{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Privacy`}
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                >
                  {CONTACT_EMAIL}
                </a>
                . There is no separate data-protection officer and no company
                registration published for PercentBox. This policy does not
                claim that a supervisory authority has reviewed or approved the
                site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Personal data the site processes
              </h2>
              <p className="mt-2 leading-relaxed">
                Numbers you type into a calculator stay in the browser. They
                are not sent to a PercentBox server and are not used to build
                an advertising profile. If you email us, we receive the address
                you send from and whatever you put in the message. If you
                consent to analytics or ads (or are outside the regions where
                consent is asked), Google receives the data those
                products normally collect (such as cookie identifiers, pages
                visited, and coarse technical data). The host, Vercel, may keep
                ordinary server logs: IP address, user agent, and timestamps.
                Those logs are not the calculator inputs.
              </p>
              <p className="mt-2 leading-relaxed">
                Theme and calculation history live in local storage on your
                device. We do not receive them. Your consent choice is stored by
                Google’s consent message, not by PercentBox.
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
                      <td className="px-4 py-3">Google consent cookies</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Set by Google’s consent message to remember your choice
                        (for example the IAB TCF consent string). Google sets
                        their names and lifetimes.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Google Analytics cookies</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Only when analytics storage is allowed under Consent
                        Mode. Typically include cookies such as{" "}
                        <span className="font-mono">_ga</span>.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Advertising cookies</td>
                      <td className="px-4 py-3">cookie</td>
                      <td className="px-4 py-3">
                        Only when ad storage is allowed under Consent Mode or
                        the TCF consent string. Google may set cookies to
                        measure and (where permitted) personalize ads.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 leading-relaxed">
                You can clear localStorage and cookies in your browser. Clearing
                them removes theme, history, and the stored consent choice, so
                Google’s consent message may ask again.
              </p>
            </section>

            <section id="privacy-settings">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Consent and privacy settings
              </h2>
              <p className="mt-2 leading-relaxed">
                PercentBox uses Google’s consent message (AdSense Privacy &amp;
                messaging), a Google-certified consent-management platform that
                works with the IAB Transparency and Consent Framework. Where
                Google shows it — visitors in the EEA, the UK, and Switzerland —
                it asks whether Google may use cookies and data for ads and
                analytics. PercentBox does not run a banner of its own.
              </p>
              <p className="mt-2 leading-relaxed">
                Before any Google tag runs, the page sets Google Consent Mode
                defaults. In the EEA, the UK, and Switzerland,{" "}
                <span className="font-mono">ad_storage</span>,{" "}
                <span className="font-mono">ad_user_data</span>,{" "}
                <span className="font-mono">ad_personalization</span>, and{" "}
                <span className="font-mono">analytics_storage</span> start as
                denied and change only when you make a choice in Google’s
                message. Elsewhere they start as granted. Google determines the
                region, not PercentBox. Consent Mode is a signal to Google tags.
                It is not, by itself, a guarantee about how every ad product
                behaves in every country.
              </p>
              <p className="mt-2 leading-relaxed">
                To change or withdraw your choice, use{" "}
                <strong className="text-slate-800 dark:text-slate-200">
                  Privacy settings
                </strong>{" "}
                in the footer, which reopens Google’s consent message. If the
                message is not available in your region or is blocked by an
                extension, the link brings you to this section; you can still
                clear cookies in your browser or use the opt-outs below.
                Theme and calculation history are not covered by consent,
                because they stay on your device and are part of using the
                calculators.
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
                personalization is permitted. In the EEA, the UK, and Switzerland, personalized
                ads run only when Google’s consent message has recorded consent
                for them. Without that consent Google may still show
                non-personalized or limited ads, as its own policies describe.
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
                . Withdrawing consent in Google’s message stops new ad and
                analytics cookies from being set. It does not delete cookies
                Google may already have set. Clear cookies in the browser for
                that.
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
                When a measurement ID is configured, we use Google Analytics 4 for pages visited, coarse traffic source,
                device type, and calculator events such as copying a result. The
                tag follows Consent Mode: when analytics storage is denied it
                sets no analytics cookies and sends only cookieless signals that
                Google describes in its Consent Mode documentation. Google’s
                own policy describes what it does with that data.
              </p>
              <p className="mt-2 leading-relaxed">
                You can opt out by declining in Google’s consent message (Privacy
                settings in the footer), by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Analytics Opt-out add-on
                </a>
                , or by blocking the analytics domain in the browser.
              </p>
              <p className="mt-2 leading-relaxed">
                The host (Vercel) may keep standard server logs — IP address,
                user agent, and timestamps — for security and reliability. Those
                logs do not contain what you type into a calculator. One
                exception: calculators keep your inputs in the page address so
                you can share a result. If you open or share such a link, the
                numbers in it are part of the requested URL and can appear in
                those logs, in your browser history, and wherever you paste it.
              </p>
              <p className="mt-2 leading-relaxed">
                PercentBox also uses Vercel Web Analytics to count page views.
                It does not set cookies and does not build a profile of you
                across sites; it records the page path, referrer, country, and
                device/browser type in aggregate so we can see which pages
                people actually use. See{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener"
                >
                  Vercel’s analytics privacy notes
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Why this data is used
              </h2>
              <p className="mt-2 leading-relaxed">
                Where the GDPR applies, these are the bases we actually rely
                on. They are not a certificate of compliance.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  Advertising and analytics cookies, and personalized ads, rely
                  on consent collected by Google’s consent message where that
                  message applies. Privacy settings in the footer lets you
                  withdraw consent for later processing. Withdrawal does not
                  undo a request Google already received.
                </li>
                <li>
                  If you email us, we use the address and the message to reply.
                  That is processing you started by writing. We do not add the
                  address to a marketing list.
                </li>
                <li>
                  Server logs, when the host keeps them, are used to operate
                  and secure the site. Where an IP address in those logs is
                  personal data, the basis is the legitimate interest in
                  keeping the service available and diagnosing abuse. We do not
                  use those logs to build an ad profile, and this policy does
                  not claim a formal legitimate-interest assessment has been
                  filed anywhere.
                </li>
              </ul>
              <p className="mt-2 leading-relaxed">
                Calculator results are not automated decisions that produce
                legal effects. They are arithmetic on numbers you typed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                How long it stays
              </h2>
              <p className="mt-2 leading-relaxed">
                Calculation history is at most ten summaries and
                stays until you clear it or clear site data. We do not set
                Google’s cookie lifetimes, including how long your consent choice
                is remembered; Google does. Email is kept long enough to handle the
                question and any follow-up. We do not publish a longer mailbox
                archive than that.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                International transfers
              </h2>
              <p className="mt-2 leading-relaxed">
                PercentBox does not run its own servers outside the host we
                use. Vercel may process requests, including log data, in the
                United States or other countries. Where Google Analytics or
                AdSense run, Google may process that data outside the EEA under
                Google’s own terms. Those terms describe Google’s transfer
                tools. We do not operate a separate transfer contract of our
                own, and we do not claim to have signed standard contractual
                clauses in PercentBox’s name beyond whatever the host and
                Google already require of a publisher account.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Your rights
              </h2>
              <p className="mt-2 leading-relaxed">
                If the GDPR applies to you, you can ask for access,
                rectification, erasure, restriction, or a copy of personal data
                we actually hold, and you can object to processing that is
                based on legitimate interests. You can withdraw consent for
                analytics and ads at any time with Privacy settings in the footer. You can
                also lodge a complaint with a supervisory authority. In
                Portugal that authority is the Comissão Nacional de Proteção de
                Dados (
                <a
                  href="https://www.cnpd.pt"
                  className="font-medium text-emerald-700 underline dark:text-emerald-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  cnpd.pt
                </a>
                ). If you live elsewhere in the EEA, the UK, or Switzerland, you
                may complain to the authority in your country instead. We will
                respond to requests sent to {CONTACT_EMAIL}. Calculator inputs
                that never left your browser are not data we can retrieve.
              </p>
              <p className="mt-2 leading-relaxed">
                We do not sell personal information. We do not trade calculator
                inputs for ads.
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
                consent, analytics, or ads.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Changes
              </h2>
              <p className="mt-2 leading-relaxed">
                We may update this policy as the consent setup or the tags change. The
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
