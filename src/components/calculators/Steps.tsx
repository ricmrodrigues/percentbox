"use client";

import { useCopyLink } from "@/lib/share";

/** Step-by-step working plus a "copy link to this result" button. */
export function StepsAndShare({ steps }: { steps: string[] }) {
  const link = useCopyLink();
  if (steps.length === 0) return null;
  return (
    <div className="mt-5 border-t border-emerald-200/60 pt-4 dark:border-emerald-900/50" aria-live="polite">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Step-by-step for your numbers
        </h3>
        <button
          type="button"
          onClick={link.copy}
          className="cursor-pointer rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50 dark:bg-slate-800 dark:text-emerald-300 dark:ring-emerald-900"
        >
          {link.copied ? "Link copied" : "Copy link to this result"}
        </button>
      </div>
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
