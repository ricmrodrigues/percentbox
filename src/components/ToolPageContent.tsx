import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { CompoundInterestCalculator } from "@/components/calculators/CompoundInterestCalculator";
import { LoanCalculator } from "@/components/calculators/LoanCalculator";
import { MarkupCalculator } from "@/components/calculators/MarkupCalculator";
import { VatCalculator } from "@/components/calculators/VatCalculator";
import { RelatedTools } from "@/components/RelatedTools";
import { getGuide } from "@/content/guides";
import { getToolEditorial, type ToolEditorial } from "@/lib/tool-editorial";
import type { ToolPage } from "@/lib/seo";

function ToolCalculator({ tool }: { tool: ToolPage }) {
  switch (tool.kind) {
    case "markup":
      return <MarkupCalculator />;
    case "vat":
      return <VatCalculator />;
    case "compound":
      return <CompoundInterestCalculator />;
    case "loan":
      return <LoanCalculator />;
    case "percent":
    default: {
      const direction =
        tool.slug === "percentage-decrease-calculator"
          ? "decrease"
          : "increase";
      return (
        <Calculator
          initialMode={tool.mode ?? "percent-of"}
          initialDirection={direction}
        />
      );
    }
  }
}

function guidesFor(editorial: ToolEditorial) {
  const seen = new Set<string>();
  const guides = [];
  for (const slug of [editorial.guideSlug, ...editorial.relatedGuides]) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const guide = getGuide(slug);
    if (guide) guides.push(guide);
  }
  return guides;
}

const PAGE_LINKS = [
  ["#who-its-for", "Who it’s for"],
  ["#how-to-use", "Fields"],
  ["#walkthroughs", "Walkthroughs"],
  ["#formulas-heading", "Formula"],
  ["#pitfalls-heading", "Pitfalls"],
  ["#tool-faq-heading", "FAQ"],
] as const;

export function ToolPageContent({ tool }: { tool: ToolPage }) {
  const editorial = getToolEditorial(tool.slug);
  const faqs = [...tool.faqs, ...(editorial?.faqs ?? [])];
  const guides = editorial ? guidesFor(editorial) : [];

  return (
    <div className="space-y-10">
      {editorial && editorial.audience.length > 0 && (
        <>
          <nav aria-label="On this page" className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              On this page
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {PAGE_LINKS.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <section aria-labelledby="who-its-for">
            <h2
              id="who-its-for"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Who this calculator is for
            </h2>
            <div className="mt-3 max-w-3xl space-y-3 leading-relaxed text-slate-600 dark:text-slate-400">
              {editorial.audience.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </>
      )}

      <div id="calculator" className="scroll-mt-20">
        <ToolCalculator tool={tool} />
      </div>

      <section aria-labelledby="about-tool">
        <h2
          id="about-tool"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          About this {tool.shortTitle.toLowerCase()}
        </h2>
        <div className="mt-3 max-w-3xl space-y-3 leading-relaxed text-slate-600 dark:text-slate-400">
          {editorial?.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {editorial && editorial.fields.length > 0 && (
        <section aria-labelledby="how-to-use">
          <h2
            id="how-to-use"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            How to use each field
          </h2>
          <dl className="mt-4 max-w-3xl space-y-4">
            {editorial.fields.map((field) => (
              <div
                key={field.name}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <dt className="font-semibold text-slate-900 dark:text-white">
                  {field.name}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {field.detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {editorial && (
        <section aria-labelledby="when-to-use">
          <h2
            id="when-to-use"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            When to use this calculator
          </h2>
          <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
            {editorial.whenToUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="examples-heading">
        <h2
          id="examples-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Worked examples
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Example calculations for {tool.shortTitle}
            </caption>
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Question
                </th>
                <th scope="col" className="px-4 py-3">
                  Answer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
              {tool.examples.map((ex) => (
                <tr key={ex.q}>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                    {ex.q}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-700 dark:text-emerald-400">
                    {ex.a}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {editorial && editorial.walkthroughs.length > 0 && (
        <section aria-labelledby="walkthroughs">
          <h2
            id="walkthroughs"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Walkthroughs
          </h2>
          <div className="mt-4 max-w-3xl space-y-6">
            {editorial.walkthroughs.map((walk) => (
              <div key={walk.title}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {walk.title}
                </h3>
                <div className="mt-2 space-y-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {walk.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {tool.formulas.length > 0 && (
        <section aria-labelledby="formulas-heading">
          <h2
            id="formulas-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Formula
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Goal
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Formula
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
                {tool.formulas.map((f) => (
                  <tr key={f.goal}>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {f.goal}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                      {f.formula}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {editorial && editorial.formulaNotes.length > 0 && (
            <div className="mt-4 max-w-3xl space-y-3 leading-relaxed text-slate-600 dark:text-slate-400">
              {editorial.formulaNotes.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </section>
      )}

      {editorial && editorial.pitfalls.length > 0 && (
        <section aria-labelledby="pitfalls-heading">
          <h2
            id="pitfalls-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Mistakes this page will not catch for you
          </h2>
          <div className="mt-4 space-y-4">
            {editorial.pitfalls.map((pitfall) => (
              <div
                key={pitfall.title}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {pitfall.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {pitfall.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="tool-faq-heading">
        <h2
          id="tool-faq-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          FAQ
        </h2>
        <dl className="mt-5 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="font-semibold text-slate-900 dark:text-white">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {guides.length > 0 && (
        <section aria-labelledby="related-guides-heading">
          <h2
            id="related-guides-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Guides that go with this calculator
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
                >
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {guide.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {guide.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <RelatedTools currentSlug={tool.slug} />
    </div>
  );
}
