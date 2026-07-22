"use client";

import { loadExample, POPULAR_EXAMPLES } from "@/lib/examples";

export function PopularCalculations() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-sm font-bold text-slate-900 dark:text-white">
        Popular calculations
      </h2>
      <p className="mt-1 text-xs text-slate-400">
        Tap any example to fill the calculator
      </p>
      <ul className="mt-3 space-y-1.5">
        {POPULAR_EXAMPLES.map((example) => (
          <li key={example.label}>
            <button
              type="button"
              onClick={() => loadExample(example)}
              className="group flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-emerald-700 underline decoration-emerald-300/70 underline-offset-2 transition hover:bg-emerald-50 hover:text-emerald-800 hover:decoration-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400 dark:decoration-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 dark:hover:decoration-emerald-400"
            >
              <span>{example.label}</span>
              <span
                aria-hidden
                className="shrink-0 text-emerald-500 transition group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
