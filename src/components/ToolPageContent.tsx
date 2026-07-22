import { Calculator } from "@/components/Calculator";
import { RelatedTools } from "@/components/RelatedTools";
import type { ToolPage } from "@/lib/seo";

export function ToolPageContent({ tool }: { tool: ToolPage }) {
  const direction =
    tool.slug === "percentage-decrease-calculator" ? "decrease" : "increase";

  return (
    <div className="space-y-10">
      <div id="calculator" className="scroll-mt-20">
        <Calculator
          initialMode={tool.mode}
          initialDirection={direction}
        />
      </div>

      <section aria-labelledby="about-tool">
        <h2
          id="about-tool"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          About this {tool.shortTitle.toLowerCase()}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-400">
          {tool.intro}
        </p>
      </section>

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
          {tool.faqs.map((item) => (
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

      <RelatedTools currentSlug={tool.slug} />
    </div>
  );
}
