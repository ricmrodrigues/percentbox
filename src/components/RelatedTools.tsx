import Link from "next/link";
import { TOOLS } from "@/lib/seo";

/** Hand-picked neighbours: tools that answer the next question a visitor tends to have. */
const RELATED: Record<string, string[]> = {
  "percentage-calculator": ["what-is-x-percent-of-y", "x-is-what-percent-of-y", "percentage-change-calculator", "percentage-point-calculator"],
  "what-is-x-percent-of-y": ["x-is-what-percent-of-y", "percentage-increase-calculator", "discount-calculator", "tip-calculator"],
  "x-is-what-percent-of-y": ["what-is-x-percent-of-y", "weighted-grade-calculator", "percentage-change-calculator"],
  "percentage-increase-calculator": ["percentage-decrease-calculator", "percentage-change-calculator", "cagr-calculator", "compound-interest-calculator"],
  "percentage-decrease-calculator": ["percentage-increase-calculator", "discount-calculator", "percentage-change-calculator"],
  "percentage-change-calculator": ["percentage-point-calculator", "cagr-calculator", "percentage-increase-calculator", "percentage-decrease-calculator"],
  "tip-calculator": ["what-is-x-percent-of-y", "discount-calculator", "vat-calculator"],
  "discount-calculator": ["percentage-decrease-calculator", "vat-calculator", "markup-calculator"],
  "markup-calculator": ["vat-calculator", "discount-calculator", "percentage-change-calculator"],
  "vat-calculator": ["markup-calculator", "discount-calculator", "what-is-x-percent-of-y"],
  "compound-interest-calculator": ["cagr-calculator", "loan-calculator", "percentage-increase-calculator"],
  "loan-calculator": ["compound-interest-calculator", "percentage-point-calculator", "cagr-calculator"],
  "percentage-point-calculator": ["percentage-change-calculator", "loan-calculator", "compound-interest-calculator"],
  "cagr-calculator": ["compound-interest-calculator", "percentage-change-calculator", "percentage-increase-calculator"],
  "weighted-grade-calculator": ["x-is-what-percent-of-y", "percentage-calculator", "what-is-x-percent-of-y"],
};

export function RelatedTools({ currentSlug, slugs }: { currentSlug?: string; slugs?: string[] }) {
  const wanted = slugs ?? (currentSlug ? RELATED[currentSlug] : undefined);
  const tools = wanted
    ? wanted.map((s) => TOOLS.find((t) => t.slug === s)).filter((t) => t !== undefined)
    : TOOLS.filter((t) => t.slug !== currentSlug);

  if (tools.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="related-tools-heading">
      <h2
        id="related-tools-heading"
        className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        {wanted ? "Related calculators" : "All calculators"}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={`/${tool.slug}`}
              className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
            >
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                {tool.shortTitle}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {tool.description.slice(0, 110)}
                {tool.description.length > 110 ? "…" : ""}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
