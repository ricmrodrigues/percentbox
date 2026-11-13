import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  RATE_CONTENT,
  RATE_PAGES_UPDATED,
  multiplier,
  rateRow,
} from "@/content/rates";
import { RATE_SLUGS, ratePath } from "@/lib/rates";
import { RATE_INDEX_SNIPPET } from "@/lib/search-snippets";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const url = absoluteUrl("/percent-of");

export const metadata: Metadata = {
  title: { absolute: RATE_INDEX_SNIPPET.title },
  description: RATE_INDEX_SNIPPET.description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "PercentBox",
    title: RATE_INDEX_SNIPPET.title,
    description: RATE_INDEX_SNIPPET.description,
  },
  twitter: {
    card: "summary_large_image",
    title: RATE_INDEX_SNIPPET.title,
    description: RATE_INDEX_SNIPPET.description,
  },
};

const th = "px-3 py-2.5 text-left font-semibold sm:px-4";
const td = "px-3 py-2 tabular-nums sm:px-4";

export default function PercentOfIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Percent of a number", path: "/percent-of" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-emerald-50/80 to-transparent px-4 pb-6 pt-8 dark:border-slate-800 dark:from-emerald-950/20 sm:px-6 sm:pt-10">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Percent of a number" }]} />
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Percent of a Number: Tables by Rate
            </h1>
            <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              To find a percent of a number, multiply the number by the percent and divide by 100: 25% of 80
              is 80 × 0.25 = 20. Pick a rate below for a full table of round numbers and prices, a mental-math
              shortcut, and the reverse calculations. For any other rate, use the{" "}
              <Link href="/what-is-x-percent-of-y" className="font-medium text-emerald-700 underline dark:text-emerald-400">
                What is X% of Y? calculator
              </Link>
              .
            </p>
            <EditorialMeta updated={RATE_PAGES_UPDATED} />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-10 px-4 py-6 sm:px-6 sm:py-8">
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm">
              <caption className="px-3 pt-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300 sm:px-4">
                Common rates, their multipliers, and a quick example
              </caption>
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  <th scope="col" className={th}>Rate</th>
                  <th scope="col" className={th}>Multiply by</th>
                  <th scope="col" className={th}>Fraction</th>
                  <th scope="col" className={th}>Of 200</th>
                  <th scope="col" className={th}>Off 80</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
                {RATE_SLUGS.map((r) => (
                  <tr key={r}>
                    <th scope="row" className={td}>
                      <Link href={ratePath(r)} className="font-semibold text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400">
                        {r}% of a number
                      </Link>
                    </th>
                    <td className={td}>{multiplier(r)}</td>
                    <td className={td}>{RATE_CONTENT[r].fraction ?? "—"}</td>
                    <td className={td}>{rateRow(r, "200").of}</td>
                    <td className={td}>{rateRow(r, "80").off}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section aria-labelledby="how-heading" className="max-w-3xl">
            <h2 id="how-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Three sentences that use the same rate
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li><strong>“20% of 80”</strong> is the share: 80 × 0.2 = 16.</li>
              <li><strong>“20% off 80”</strong> is what is left: 80 × 0.8 = 64.</li>
              <li><strong>“80 plus 20%”</strong> is the new total: 80 × 1.2 = 96.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
              Every rate page shows all three side by side, because mixing them up is the most common percentage
              mistake. If you have two numbers and want the percent between them, that is a different question:
              use{" "}
              <Link href="/x-is-what-percent-of-y" className="font-medium text-emerald-700 underline dark:text-emerald-400">
                X is what percent of Y
              </Link>{" "}
              or the{" "}
              <Link href="/percentage-change-calculator" className="font-medium text-emerald-700 underline dark:text-emerald-400">
                percentage change calculator
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
