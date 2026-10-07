/** Editorial dates and the public changelog shown at /changelog. */

export const SITE_LAST_UPDATED = "2026-10-07";

/** Per-tool "last reviewed" date shown under the H1. */
export const TOOL_UPDATED: Record<string, string> = {};
export function toolUpdated(slug: string): string {
  return TOOL_UPDATED[slug] ?? SITE_LAST_UPDATED;
}

export interface ChangelogEntry {
  date: string;
  title: string;
  items: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-10-07",
    title: "Step-by-step working, shareable results, and three new tools",
    items: [
      "Every percentage, VAT, and markup calculator now shows the step-by-step working for the numbers you type, not just a generic formula.",
      "Calculator inputs are kept in the page address, so “Copy link” shares the exact calculation.",
      "New: Percentage Point calculator (points vs relative change), CAGR calculator, and Weighted Grade calculator, each with worked examples and pitfalls.",
      "Each tool page gained a computed comparison table (e.g. stacked discounts, markup vs margin, rise-then-fall asymmetry, loan payments by term).",
      "VAT page: rate table with official sources, plus Madeira and Azores presets. Rates checked on 7 October 2026.",
      "Related tools are now chosen per page instead of listing every calculator.",
      "No advertising is placed above a calculator.",
      "Added privacy-friendly Vercel Web Analytics (no cookies) to count visits; the privacy policy and terms explain it and how shared links carry your inputs.",
      "Guides now link to the specific calculators they discuss rather than to every tool.",
    ],
  },
  {
    date: "2026-09-27",
    title: "Guides library and deeper calculator pages",
    items: [
      "Published 22 guides covering percentages, discounts, VAT, markup vs margin, interest, and loans.",
      "Added field-by-field explanations, walkthroughs, and pitfalls to each calculator page.",
      "Expanded the About, Contact, Privacy, and Terms pages.",
    ],
  },
  {
    date: "2026-07-24",
    title: "Analytics and home-screen support",
    items: [
      "Added consent-gated Google Analytics and an “Add to Home Screen” tip for iOS.",
    ],
  },
  {
    date: "2026-07-22",
    title: "Launch",
    items: [
      "Launched the multi-mode percentage calculator with dedicated pages for percent-of, increase, decrease, change, tip, and discount.",
      "Added markup/margin, VAT, compound interest, and loan calculators the same week.",
    ],
  },
];

export function formatIsoDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!d) {
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(
      new Date(Date.UTC(y, (m ?? 1) - 1, 1)),
    );
  }
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}
