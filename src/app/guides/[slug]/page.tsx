import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { GuideBody } from "@/components/GuideBody";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import {
  GUIDE_AUTHOR,
  GUIDES,
  formatGuideDate,
  getGuide,
  guideReadingMinutes,
} from "@/content/guides";
import {
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    title: guide.title,
    description: guide.description,
    authors: [{ name: GUIDE_AUTHOR, url: absoluteUrl("/about") }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = absoluteUrl(`/guides/${guide.slug}`);
  const related = guide.relatedGuides
    .map((relatedSlug) => getGuide(relatedSlug))
    .filter((item) => item !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: guide.published,
        dateModified: guide.updated,
        author: {
          "@type": "Person",
          name: GUIDE_AUTHOR,
          url: absoluteUrl("/about"),
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        url,
        inLanguage: "en-US",
      },
      faqJsonLd(guide.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: `/guides/${guide.slug}` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: guide.title },
            ]}
          />
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {guide.description}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            By{" "}
            <Link
              href="/about"
              className="font-medium text-emerald-700 underline dark:text-emerald-400"
            >
              {GUIDE_AUTHOR}
            </Link>
            {" · "}
            {guideReadingMinutes(guide)} min read · Updated{" "}
            <time dateTime={guide.updated}>{formatGuideDate(guide.updated)}</time>
          </p>

          <div className="mt-8">
            <GuideBody markdown={guide.body} />
          </div>

          <section className="mt-12" aria-labelledby="guide-faq">
            <h2
              id="guide-faq"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              FAQ
            </h2>
            <dl className="mt-4 space-y-4">
              {guide.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <dt className="font-semibold text-slate-900 dark:text-white">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {related.length > 0 && (
            <section className="mt-12" aria-labelledby="related-guides">
              <h2
                id="related-guides"
                className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Keep reading
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/guides/${item.slug}`}
                      className="font-medium text-emerald-700 underline dark:text-emerald-400"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <RelatedTools slugs={guide.relatedTools} />
          <p className="mt-8">
            <Link
              href="/guides"
              className="text-sm font-medium text-emerald-700 underline dark:text-emerald-400"
            >
              ← All guides
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
