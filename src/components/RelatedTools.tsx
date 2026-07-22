import Link from "next/link";
import { TOOLS } from "@/lib/seo";

export function RelatedTools({ currentSlug }: { currentSlug?: string }) {
  const tools = TOOLS.filter((t) => t.slug !== currentSlug);

  return (
    <section className="mt-12" aria-labelledby="related-tools-heading">
      <h2
        id="related-tools-heading"
        className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        Related percentage tools
      </h2>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Free calculators for every common percentage problem.
      </p>
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
