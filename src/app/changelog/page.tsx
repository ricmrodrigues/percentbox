import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, PUBLISHER_NAME } from "@/lib/seo";
import { CHANGELOG, formatIsoDate } from "@/lib/site-meta";

export const metadata: Metadata = {
  title: "What Changed — PercentBox Changelog",
  description:
    "A dated log of changes to PercentBox calculators and guides: new tools, corrections, and content updates.",
  alternates: { canonical: absoluteUrl("/changelog") },
};

export default function ChangelogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Changelog", path: "/changelog" },
            ]),
          ],
        }}
      />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Changelog" }]} />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What changed
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            PercentBox is a small, independently run site maintained by{" "}
            <Link href="/about" className="font-medium text-emerald-700 underline dark:text-emerald-400">
              {PUBLISHER_NAME}
            </Link>
            . This page records what was added, fixed, or rewritten, newest first. If you spot an error in a
            calculator or guide, the{" "}
            <Link href="/contact" className="font-medium text-emerald-700 underline dark:text-emerald-400">
              contact page
            </Link>{" "}
            explains how to report it; corrections are logged here.
          </p>
          <ol className="mt-10 space-y-10">
            {CHANGELOG.map((entry) => (
              <li key={entry.date} className="border-l-2 border-emerald-200 pl-5 dark:border-emerald-900">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{entry.title}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  <time dateTime={entry.date}>{formatIsoDate(entry.date)}</time>
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-600 dark:text-slate-400">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </article>
      </main>
      <Footer />
    </>
  );
}
