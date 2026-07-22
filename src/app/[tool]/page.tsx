import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ToolPageContent } from "@/components/ToolPageContent";
import {
  TOOLS,
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  getToolBySlug,
  howToJsonLd,
  organizationJsonLd,
  softwareAppJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ tool: string }> };

export function generateStaticParams() {
  return TOOLS.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const url = absoluteUrl(`/${tool.slug}`);
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: tool.title,
      description: tool.description,
      siteName: "PercentBox",
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: "PercentBox logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: tool.shortTitle,
      description: tool.description,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ToolRoutePage({ params }: Props) {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      softwareAppJsonLd(tool),
      howToJsonLd(tool),
      faqJsonLd(tool.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: tool.shortTitle, path: `/${tool.slug}` },
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
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: tool.shortTitle },
              ]}
            />
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {tool.h1}
            </h1>
            <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              {tool.intro}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <AdSlot slot="top" className="mb-6" />
          <ToolPageContent tool={tool} />
          <AdSlot slot="below" className="mt-10" />
        </div>
      </main>
      <Footer />
    </>
  );
}
