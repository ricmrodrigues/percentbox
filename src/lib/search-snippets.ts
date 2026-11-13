/**
 * Search-result titles and meta descriptions, kept apart from the visible
 * page copy (H1, intro, card text). Written against the Search Console
 * queries each page is shown for (Aug–Nov 2026 export): main keyword first,
 * a worked answer in the snippet, titles ≤ 60 chars, descriptions ≤ 150.
 * Titles are absolute (they already include the brand when it fits).
 */
import { RATE_CONTENT, multiplier, rateRow } from "@/content/rates";
import type { RateSlug } from "@/lib/rates";

export interface SearchSnippet {
  title: string;
  description: string;
}

export const HOME_SNIPPET: SearchSnippet = {
  title: "Percentage Calculator: What Is X% of Y? | PercentBox",
  description:
    "What is 20% of 150? 30. Also X is what % of Y, % increase, decrease and change, tip and discount, with the working shown. Free, no signup.",
};

/** Keyed by tool slug. Tools not listed fall back to their own title/description. */
export const TOOL_SNIPPETS: Record<string, SearchSnippet> = {
  "percentage-calculator": {
    title: "Percent Calculator: 6 Modes, Step-by-Step | PercentBox",
    description:
      "Six percent tools in one: X% of Y, X is what % of Y, increase/decrease, change, tip and discount. 15% of 200 = 30. Free, no signup.",
  },
  "percentage-increase-calculator": {
    title: "Percentage Increase Calculator: 100 + 15% = 115 | PercentBox",
    description:
      "Add a percent: 100 + 15% = 115 (value × 1.15). Or use the Change tab for the % increase from 80 to 100 (25%). Free, no signup.",
  },
  "percentage-decrease-calculator": {
    title: "Percentage Decrease Calculator: 180 − 15% = 153 | PercentBox",
    description:
      "Take a percent off: 180 − 15% = 153 (value × 0.85). Or find the % decrease from 100 to 75 (25%) in the Change tab. Free, no signup.",
  },
  "percentage-change-calculator": {
    title: "Percentage Change Calculator: 8 to 10 = +25% | PercentBox",
    description:
      "Percent change = (new − old) ÷ |old| × 100. From 8 to 10 is +25%; from 50 to 40 is −20%. Working shown. Free, no signup.",
  },
  "discount-calculator": {
    title: "Discount Calculator: 30% Off $49.99 = $34.99 | PercentBox",
    description:
      "Sale price = price × (1 − discount ÷ 100). 30% off $49.99 is $34.99 and you save $15.00. Works for any price and %. Free, no signup.",
  },
  "tip-calculator": {
    title: "Tip Calculator: Tip, Total & Split per Person | PercentBox",
    description:
      "Tip = bill × tip% ÷ 100. An 18% tip on $64.50 is $11.61, total $76.11, split as many ways as you need. Free, no signup.",
  },
  "vat-calculator": {
    title: "VAT Calculator: Add or Remove VAT from a Price | PercentBox",
    description:
      "Add VAT: 100 + 23% = 123. Remove it: 123 ÷ 1.23 = 100 net. Presets for Portugal, Spain, Germany, France, UK and more. Free, no signup.",
  },
  "x-is-what-percent-of-y": {
    title: "X Is What Percent of Y? 25 of 200 = 12.5% | PercentBox",
    description:
      "Percent = X ÷ Y × 100. 25 is 12.5% of 200 and 9 is 75% of 12. Type two numbers to get the percent with the steps. Free, no signup.",
  },
  "what-is-x-percent-of-y": {
    title: "What Is X% of Y? 15% of 200 = 30 | PercentBox",
    description:
      "X% of Y = X ÷ 100 × Y. 15% of 200 = 30 and 6.62% of 10,000 = 662. Decimals and big numbers work. Free, no signup.",
  },
  "loan-calculator": {
    title: "Loan Calculator: Monthly Payment & Amortization | PercentBox",
    description:
      "Fixed-rate loan payment: $25,000 at 6.5% for 5 years ≈ $489/month. Total interest and a month-by-month schedule. Free, no signup.",
  },
};

/** Keyed by guide slug. */
export const GUIDE_SNIPPETS: Record<string, SearchSnippet> = {
  "how-to-calculate-a-tip": {
    title: "How to Calculate a Tip: 15%, 18%, 20% Examples | PercentBox",
    description:
      "Tip = bill × rate ÷ 100: 18% of 64.50 is 11.61, total 76.11. A 15–20% table, pre-tax vs after-tax, and splitting the bill. Free, no signup.",
  },
  "how-to-calculate-discounts": {
    title: "How to Calculate Discounts: Sale Price & Savings | PercentBox",
    description:
      "Sale price = price × (1 − rate ÷ 100): 25% off 80 is 60. Why 20% then 10% off is 28%, not 30%. Worked examples, free, no signup.",
  },
};

/** /percent-of/{rate}: computed from the same exact math as the page table. */
export function rateSnippet(rate: string): SearchSnippet {
  const unit = RATE_CONTENT[rate as RateSlug]?.fraction?.match(/^1\/(\d+)$/);
  const m = unit ? `÷ ${unit[1]}` : `× ${multiplier(rate)}`;
  const r200 = rateRow(rate, "200");
  const r80 = rateRow(rate, "80");
  return {
    title: `What Is ${rate}% of a Number? Table & Shortcut | PercentBox`,
    description: `${rate}% of a number = number ${m}. ${rate}% of 200 = ${r200.of}; ${rate}% off 80 = ${r80.off}; 80 plus ${rate}% = ${r80.plus}. Exact table. Free, no signup.`,
  };
}

export const RATE_INDEX_SNIPPET: SearchSnippet = {
  title: "Percent of a Number Tables: 5% to 90% | PercentBox",
  description:
    "Tables for 5% to 90%: n% of, n% off and plus n% for round numbers and prices, with a mental-math shortcut for each. Free, no signup.",
};
