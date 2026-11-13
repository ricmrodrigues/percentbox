"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { TOOLS } from "@/lib/seo";

/** Short labels for compact nav chips (optional row on xl screens) */
const QUICK = [
  { href: "/percentage-calculator", label: "%" },
  { href: "/tip-calculator", label: "Tip" },
  { href: "/discount-calculator", label: "Discount" },
  { href: "/vat-calculator", label: "VAT" },
  { href: "/markup-calculator", label: "Markup" },
  { href: "/compound-interest-calculator", label: "Compound" },
  { href: "/loan-calculator", label: "Loan" },
] as const;

export function ToolsNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative flex items-center gap-1 sm:gap-2">
      {/* Quick links — large screens only */}
      <div className="hidden items-center gap-1 xl:flex">
        {QUICK.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-2 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Full calculator menu — always available */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
      >
        All calculators
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          role="menu"
          aria-label="All calculators"
          className="fixed inset-x-3 top-16 z-50 max-h-[min(70vh,28rem)] w-auto overflow-y-auto rounded-2xl border border-slate-200 bg-white py-2 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:max-h-none sm:w-80 sm:overflow-hidden"
        >
          <p className="px-4 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Choose a tool
          </p>
          <ul className="max-h-[min(70vh,28rem)] overflow-y-auto">
            {TOOLS.map((tool) => (
              <li key={tool.slug}>
                <Link
                  role="menuitem"
                  href={`/${tool.slug}`}
                  onClick={() => {
                    trackEvent("nav_tool_click", { tool_slug: tool.slug });
                    setOpen(false);
                  }}
                  className="block px-4 py-2.5 text-left transition hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                >
                  <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {tool.shortTitle}
                  </span>
                  <span className="mt-0.5 line-clamp-1 block text-xs text-slate-500 dark:text-slate-400">
                    {tool.description}
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-t border-slate-100 dark:border-slate-800">
              <Link
                role="menuitem"
                href="/percent-of"
                onClick={() => {
                  trackEvent("nav_tool_click", { tool_slug: "percent-of" });
                  setOpen(false);
                }}
                className="block px-4 py-2.5 text-left transition hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
              >
                <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                  Percent-of tables (5%–90%)
                </span>
                <span className="mt-0.5 line-clamp-1 block text-xs text-slate-500 dark:text-slate-400">
                  n% of, n% off and plus n% for common numbers and prices
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
