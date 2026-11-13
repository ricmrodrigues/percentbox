import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calculator } from "@/components/Calculator";
import { EditorialMeta } from "@/components/EditorialMeta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  PRICE_BASES,
  RATE_CONTENT,
  RATE_PAGES_UPDATED,
  ROUND_BASES,
  multiplier,
  neighbours,
  offMultiplier,
  plusMultiplier,
  rateFaqs,
  rateReverse,
  rateRow,
} from "@/content/rates";
import { RATE_SLUGS, isRateSlug, ratePath } from "@/lib/rates";
import { rateSnippet } from "@/lib/search-snippets";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ rate: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return RATE_SLUGS.map((rate) => ({ rate }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { rate } = await params;
  if (!isRateSlug(rate)) return {};
  const { title, description } = rateSnippet(rate);
  const url = absoluteUrl(ratePath(rate));
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, siteName: "PercentBox" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const th = "px-3 py-2.5 text-left font-semibold sm:px-4";
const td = "px-3 py-2 tabular-nums sm:px-4";

function RateTable({
  rate,
  caption,
  bases,
}: {
  rate: string;
  caption: string;
  bases: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm">
        <caption className="px-3 pt-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300 sm:px-4">
          {caption}
        </caption>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          <tr>
            <th scope="col" className={th}>Number</th>
            <th scope="col" className={th}>{rate}% of</th>
            <th scope="col" className={th}>{rate}% off</th>
            <th scope="col" className={th}>Plus {rate}%</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
          {bases.map((base) => {
            const row = rateRow(rate, base);
            return (
              <tr key={base}>
                <th scope="row" className={`${td} font-medium text-slate-900 dark:text-white`}>
                  {row.base}
                </th>
                <td className={`${td} font-semibold text-emerald-700 dark:text-emerald-400`}>{row.of}</td>
                <td className={`${td} text-slate-700 dark:text-slate-300`}>{row.off}</td>
                <td className={`${td} text-slate-700 dark:text-slate-300`}>{row.plus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const linkCls =
  "font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400";

export default async function RatePage({ params }: Props) {
  const { rate } = await params;
  if (!isRateSlug(rate)) notFound();
  const content = RATE_CONTENT[rate];
  const faqs = rateFaqs(rate);
  const rev = rateReverse(rate);
  const { prev, next } = neighbours(rate);
  const mult = multiplier(rate);
  const ex200 = rateRow(rate, "200");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Percent of a number", path: "/percent-of" },
        { name: `${rate}% of a number`, path: ratePath(rate) },
      ]),
      faqJsonLd(faqs),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-emerald-50/80 to-transparent px-4 pb-6 pt-8 dark:border-slate-800 dark:from-emerald-950/20 sm:px-6 sm:pt-10">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Percent of a number", href: "/percent-of" },
                { name: `${rate}%` },
              ]}
            />
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What Is {rate}% of a Number?
            </h1>
            <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Multiply the number by {mult}
              {content.fraction ? ` (${content.fraction})` : ""}. For example,{" "}
              {rate}% of 200 is <strong className="text-slate-800 dark:text-slate-200">{ex200.of}</strong>.
              Type any number below, or use the table.
            </p>
            <EditorialMeta updated={RATE_PAGES_UPDATED} />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-10 px-4 py-6 sm:px-6 sm:py-8">
          <div id="calculator" className="scroll-mt-20">
            <Calculator initialMode="percent-of" initialA={rate} initialB="200" />
          </div>

          <section aria-labelledby="shortcut-heading" className="max-w-3xl">
            <h2 id="shortcut-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Mental-math shortcut for {rate}%
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{content.shortcut}</p>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{content.context}</p>
          </section>

          <section aria-labelledby="table-heading" className="space-y-4">
            <h2 id="table-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {rate}% of common numbers
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              “{rate}% of” is the share (number × {mult}). “{rate}% off” is what is left after taking it away
              (number × {offMultiplier(rate)}). “Plus {rate}%” adds it on (number × {plusMultiplier(rate)}).
              Values are exact, not rounded.
            </p>
            <RateTable rate={rate} caption={`Round numbers`} bases={ROUND_BASES} />
            <AdSlot slot="top" />
            <RateTable rate={rate} caption={`Typical prices`} bases={PRICE_BASES} />
            <p className="max-w-3xl text-xs text-slate-500">
              Shops round money to the cent, usually to the nearest one, so a till may show one cent more or less
              than these exact figures.
            </p>
            {content.lookups && content.lookups.length > 0 && (
              <RateTable
                rate={rate}
                caption={`Other numbers people look up with ${rate}%`}
                bases={content.lookups}
              />
            )}
          </section>

          <section aria-labelledby="reverse-heading" className="max-w-3xl">
            <h2 id="reverse-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Working backwards from {rate}%
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
              <li>
                <strong>{rate}% of a number is {rev.whole.piece}.</strong> Divide by {rev.whole.mult}:{" "}
                {rev.whole.piece} ÷ {rev.whole.mult} = {rev.whole.answer}.
              </li>
              <li>
                <strong>You paid {rev.beforeDiscount.paid} after {rate}% off.</strong> Divide by{" "}
                {rev.beforeDiscount.mult}: {rev.beforeDiscount.paid} ÷ {rev.beforeDiscount.mult} ={" "}
                {rev.beforeDiscount.answer} was the original price.
              </li>
              <li>
                <strong>A value is {rev.beforeIncrease.grown} after a {rate}% increase.</strong> Divide by{" "}
                {rev.beforeIncrease.mult}: {rev.beforeIncrease.grown} ÷ {rev.beforeIncrease.mult} ={" "}
                {rev.beforeIncrease.answer} before the increase.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{content.note}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              More on this in{" "}
              <Link href="/guides/reverse-percentages" className={linkCls}>reverse percentages</Link> and{" "}
              <Link href="/guides/mental-math-percentages" className={linkCls}>mental math for percentages</Link>.
            </p>
          </section>

          <section aria-labelledby="rate-faq-heading">
            <h2 id="rate-faq-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              FAQ
            </h2>
            <dl className="mt-5 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <dt className="font-semibold text-slate-900 dark:text-white">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <nav aria-labelledby="more-rates-heading" className="space-y-4">
            <h2 id="more-rates-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Other rates and tools
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {prev && (
                <Link href={ratePath(prev)} className={linkCls}>
                  ← What is {prev}% of a number?
                </Link>
              )}
              {prev && next && <span className="mx-2 text-slate-300">·</span>}
              {next && (
                <Link href={ratePath(next)} className={linkCls}>
                  What is {next}% of a number? →
                </Link>
              )}
            </p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {RATE_SLUGS.map((r) => (
                <li key={r}>
                  {r === rate ? (
                    <span aria-current="page" className="inline-block rounded-lg bg-emerald-600 px-3 py-1.5 font-semibold text-white">
                      {r}%
                    </span>
                  ) : (
                    <Link
                      href={ratePath(r)}
                      className="inline-block rounded-lg bg-slate-100 px-3 py-1.5 font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {r}%
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              <li><Link href="/percent-of" className={linkCls}>All percent-of tables</Link></li>
              <li><Link href="/what-is-x-percent-of-y" className={linkCls}>What is X% of Y? (any rate)</Link></li>
              <li><Link href="/x-is-what-percent-of-y" className={linkCls}>X is what percent of Y?</Link></li>
              <li><Link href="/discount-calculator" className={linkCls}>Discount calculator</Link></li>
              <li><Link href="/percentage-increase-calculator" className={linkCls}>Percentage increase calculator</Link></li>
              <li><Link href="/percentage-decrease-calculator" className={linkCls}>Percentage decrease calculator</Link></li>
            </ul>
          </nav>

          <AdSlot slot="below" />
        </div>
      </main>
      <Footer />
    </>
  );
}
