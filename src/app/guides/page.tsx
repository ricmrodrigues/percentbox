import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  GUIDE_AUTHOR,
  GUIDES,
  formatGuideDate,
  guideReadingMinutes,
} from "@/content/guides";
import {
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Percentage & Finance Guides — Learn the Math",
  description:
    "Original guides on percentages, VAT, tips, discounts, markup versus margin, compound interest, and loan payments. Written by Ricardo Rodrigues.",
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    title: "PercentBox Guides",
    description:
      "Step-by-step guides for percentages, tips, discounts, and everyday finance math.",
    url: absoluteUrl("/guides"),
  },
};

export default function GuidesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "CollectionPage",
        name: "PercentBox Guides",
        url: absoluteUrl("/guides"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        description: "Educational articles on percentages and everyday financial math.",
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
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
            items={[{ name: "Home", href: "/" }, { name: "Guides" }]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Guides &amp; explainers
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Original, practical articles that teach the math behind the free
            calculators. Written by {GUIDE_AUTHOR} for students, shoppers,
            freelancers, and anyone who wants to understand a percentage rather
            than only receive one.
          </p>
          <ul className="mt-8 space-y-4">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
                >
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {guide.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-500">
                    {guideReadingMinutes(guide)} min read · Updated{" "}
                    {formatGuideDate(guide.updated)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
