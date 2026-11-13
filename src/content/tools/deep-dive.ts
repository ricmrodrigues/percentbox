/**
 * Extra below-the-calculator sections for the main tools that rank around
 * position 50 (Search Console, Aug–Nov 2026). Each page keeps one intent:
 * - percentage-increase-calculator: growing a value by a % and the % rise A→B
 * - percentage-decrease-calculator: shrinking a value by a % and the % drop A→B
 * - percentage-change-calculator: the signed change between two values
 * - vat-calculator: adding / removing VAT, with a checked table of rates
 * All figures in tables are computed with exact decimal math.
 */
import { type Dec, dec, divExact, fmt, mul, plusFactor, offFactor, sub } from "@/lib/exact";

export interface DeepDiveTable {
  caption: string;
  head: string[];
  rows: string[][];
  note?: string;
}

export interface DeepDiveSection {
  id: string;
  title: string;
  paragraphs?: string[];
  steps?: { q: string; a: string }[];
  table?: DeepDiveTable;
  links?: { href: string; label: string }[];
}

/** Format an exact division result; fails the build if it does not terminate. */
function pct(d: Dec | null): string {
  if (!d) throw new Error("Non-terminating division in deep-dive content");
  return fmt(d);
}

/** (b − a) ÷ a × 100, exact when it terminates; otherwise rounded with ≈. */
function changePct(a: string, b: string): string {
  const diff = sub(dec(b), dec(a));
  const exact = divExact(mul(diff, dec(100)), dec(a), 6);
  if (exact) {
    const s = fmt(exact);
    return exact.n > BigInt(0) ? `+${s}%` : `${s}%`;
  }
  const v = ((Number(b) - Number(a)) / Number(a)) * 100;
  return `≈ ${v > 0 ? "+" : "−"}${Math.abs(v).toFixed(2)}%`;
}

const n = (s: string) => fmt(dec(s));

function changeRows(pairs: [string, string][]): string[][] {
  return pairs.map(([a, b]) => {
    const diff = sub(dec(b), dec(a));
    return [n(a), n(b), (diff.n > BigInt(0) ? "+" : "") + fmt(diff), changePct(a, b)];
  });
}

const increaseRows = changeRows([
  ["8", "10"],
  ["80", "100"],
  ["64", "72"],
  ["400000", "460000"],
  ["50000", "80000"],
]);

const decreaseRows = changeRows([
  ["10", "8"],
  ["100", "75"],
  ["180", "153"],
  ["1000", "700"],
  ["35", "33.25"],
]);

const changeBothWays = changeRows([
  ["8", "10"],
  ["10", "8"],
  ["40", "50"],
  ["50", "40"],
  ["0.5", "2"],
  ["2", "0.5"],
]);

// Worked word problems (numbers checked with exact math below).
const water = fmt(mul(dec("220000"), plusFactor("15"))); // 253,000
const waterBackWrong = fmt(mul(dec("253000"), offFactor("15"))); // 215,050
const motel = fmt(mul(dec("80"), plusFactor("20"))); // 96
const elecPct = pct(divExact(mul(sub(dec("460000"), dec("400000")), dec(100)), dec("400000"))); // 15
const helmetSave = fmt(mul(dec("35"), dec("0.05"))); // 1.75
const de297 = fmt(mul(dec("250"), plusFactor("19"))); // 297.5
const de250 = pct(divExact(dec("297.5"), plusFactor("19"))); // 250
const uk50 = pct(divExact(dec("60"), plusFactor("20"))); // 50
const ukWrong = fmt(mul(dec("60"), dec("0.2"))); // 12
const ch = fmt(mul(dec("100"), plusFactor("8.1"))); // 108.1
const backFrom153 = pct(divExact(dec("153"), offFactor("15"))); // 180
const wrongFrom153 = fmt(mul(dec("153"), plusFactor("15"))); // 175.95

export const DEEP_DIVE: Record<string, DeepDiveSection[]> = {
  "percentage-increase-calculator": [
    {
      id: "increase-a-to-b",
      title: "How to find the percentage increase from one number to another",
      paragraphs: [
        "If you already have the old and the new number, you are looking for the rate, not applying one. Subtract the old number from the new one, divide by the old number, and multiply by 100: percentage increase = (new − old) ÷ old × 100.",
        "Always divide by the starting value. From 8 to 10 the gap is 2, and 2 ÷ 8 = 25%. Dividing by the new value (2 ÷ 10 = 20%) is the most common wrong answer.",
      ],
      table: {
        caption: "Percentage increase from A to B",
        head: ["From", "To", "Gap", "Increase"],
        rows: increaseRows,
        note: "The percentage change calculator does this for any pair, including decreases, with the steps shown.",
      },
      links: [{ href: "/percentage-change-calculator", label: "Percentage change calculator (A → B)" }],
    },
    {
      id: "increase-word-problems",
      title: "Percentage increase word problems, step by step",
      steps: [
        {
          q: "Your water bill is 220,000. It increases by 15%. What is the new bill?",
          a: `Multiply by 1.15: 220,000 × 1.15 = ${water}. The increase itself is 33,000.`,
        },
        {
          q: "The electricity bill went from 400,000 to 460,000. What is the percentage increase?",
          a: `The gap is 60,000. Divide by the old bill: 60,000 ÷ 400,000 = 0.15, so the increase is ${elecPct}%.`,
        },
        {
          q: "A motel raises its room rate of $80.00 by 20%. What is the new rate?",
          a: `80 × 1.20 = ${motel}, so the new rate is $${motel}.00.`,
        },
      ],
      links: [{ href: "/guides/percentage-word-problems", label: "More worked percentage word problems" }],
    },
    {
      id: "increase-reverse",
      title: "Going back: the value before an increase",
      paragraphs: [
        `If a bill is ${water} after a 15% increase, divide by 1.15 to get the original: ${water} ÷ 1.15 = 220,000. Taking 15% off ${water} gives ${waterBackWrong}, which is wrong, because the 15% was worked out on 220,000, not on ${water}.`,
      ],
      links: [{ href: "/guides/reverse-percentages", label: "Reverse percentages guide" }],
    },
    {
      id: "increase-mistakes",
      title: "Common percentage increase mistakes",
      paragraphs: [
        "Dividing by the new value. From 8 to 10 is a 25% increase (2 ÷ 8), not 20% (2 ÷ 10).",
        "Adding successive increases. Two 10% rises are 1.1 × 1.1 = 1.21, a 21% increase, not 20%.",
        "Undoing with the same percent. 100 plus 10% is 110, but 110 minus 10% is 99.",
        "Calling a change in a rate a percent change. A rate moving from 5% to 7% went up 2 percentage points, which is a 40% relative increase.",
      ],
    },
    {
      id: "increase-points",
      title: "Percentage increase vs percentage point increase",
      paragraphs: [
        "When the thing that changes is itself a percentage (an interest rate, a tax rate, a vote share), there are two ways to describe the move. From 5% to 7% is an increase of 2 percentage points (7 − 5). It is also a 40% increase relative to where it started ((7 − 5) ÷ 5 × 100). Both are correct; they answer different questions. Say which one you mean.",
      ],
      links: [
        { href: "/percentage-point-calculator", label: "Percentage point calculator" },
        { href: "/guides/percentage-increase-vs-percentage-points", label: "Percentage increase vs percentage points" },
      ],
    },
  ],

  "percentage-decrease-calculator": [
    {
      id: "decrease-a-to-b",
      title: "How to find the percentage decrease from one number to another",
      paragraphs: [
        "With an old and a new number, percentage decrease = (old − new) ÷ old × 100. Divide by the starting value, never by the smaller new one: from 100 to 75 is a 25% decrease (25 ÷ 100), not 33.33% (25 ÷ 75).",
      ],
      table: {
        caption: "Percentage decrease from A to B",
        head: ["From", "To", "Gap", "Change"],
        rows: decreaseRows,
      },
      links: [{ href: "/percentage-change-calculator", label: "Percentage change calculator (A → B)" }],
    },
    {
      id: "decrease-word-problems",
      title: "Percentage decrease word problems, step by step",
      steps: [
        {
          q: "Decrease 180 by 15%.",
          a: "Multiply by 0.85: 180 × 0.85 = 153. The amount removed is 27.",
        },
        {
          q: "A textbook originally costs $100 but is marked down to $75. What is the percent decrease?",
          a: "The drop is $25. Divide by the original price: 25 ÷ 100 = 0.25, a 25% decrease.",
        },
        {
          q: "A shop has a 5% discount sale. How much is saved on a $35 book?",
          a: `5% of 35 = 35 × 0.05 = ${helmetSave}, so the saving is $${helmetSave} and the book costs $33.25.`,
        },
      ],
      links: [{ href: "/guides/percentage-word-problems", label: "More worked percentage word problems" }],
    },
    {
      id: "decrease-reverse",
      title: "Going back: the value before a decrease",
      paragraphs: [
        `If a value is 153 after a 15% decrease, divide by 0.85: 153 ÷ 0.85 = ${backFrom153}. Adding 15% to 153 gives ${wrongFrom153}, which is short, because the 15% was taken from the larger original.`,
        "The same rule finds an original price from a sale price: $60 after 25% off was $60 ÷ 0.75 = $80.",
      ],
      links: [{ href: "/guides/reverse-percentages", label: "Reverse percentages guide" }],
    },
    {
      id: "decrease-mistakes",
      title: "Common percentage decrease mistakes",
      paragraphs: [
        "Dividing by the new value. From 100 to 75 is a 25% decrease, not 33.33%.",
        "Adding successive decreases. 20% off and then 10% off is 0.8 × 0.9 = 0.72, so 28% off in total, not 30%.",
        "Decreasing by more than 100%. An amount can fall by at most 100% (to zero). “Down 150%” only makes sense for a figure that can go negative, such as profit.",
        "Confusing a cut in a rate with a percent decrease. An interest rate cut from 4% to 3% is 1 percentage point, which is a 25% decrease of the rate.",
      ],
      links: [{ href: "/guides/stacked-discounts", label: "Stacked discounts guide" }],
    },
  ],

  "percentage-change-calculator": [
    {
      id: "change-both-ways",
      title: "Percent change works in both directions — but not symmetrically",
      paragraphs: [
        "Percent change = (new − old) ÷ |old| × 100. A positive answer is an increase, a negative one a decrease. Swapping the two numbers does not just flip the sign, because the base changes: 8 to 10 is +25%, but 10 to 8 is −20%.",
      ],
      table: {
        caption: "Percent change in both directions",
        head: ["Old", "New", "Gap", "Percent change"],
        rows: changeBothWays,
      },
    },
    {
      id: "change-vs-difference",
      title: "Percent change vs percent difference",
      paragraphs: [
        "Percent change has a direction: one value is “before” and the other “after”. When neither number comes first — two shops’ prices, two lab results — use percent difference, which divides by the average of the two: |A − B| ÷ ((A + B) ÷ 2) × 100. For 8 and 10 that is 2 ÷ 9 × 100 ≈ 22.22%, between the +25% and −20% of the two percent changes.",
      ],
      links: [{ href: "/guides/percent-error", label: "Percent error and percent difference" }],
    },
    {
      id: "change-vs-points",
      title: "Percent change vs percentage point difference",
      paragraphs: [
        "If the two values are themselves percentages, report the move in points as well. Unemployment going from 4% to 5% is up 1 percentage point, which is a 25% percent change. Headlines that say “up 25%” and “up 1 point” can both be describing the same month.",
      ],
      links: [
        { href: "/percentage-point-calculator", label: "Percentage point calculator" },
        { href: "/guides/percentage-increase-vs-percentage-points", label: "Percentage increase vs percentage points" },
      ],
    },
    {
      id: "change-mistakes",
      title: "Common percent change mistakes",
      paragraphs: [
        "Expecting gains and losses to cancel. +50% then −50% takes 100 to 150 and then to 75: a 25% loss overall.",
        "Averaging percent changes over several years. Use the compound annual growth rate instead; it is the single yearly rate that gives the same end result.",
        "Using zero or a negative starting value. Percent change from 0 is undefined, and from a negative base the sign is hard to read. Report the absolute change instead.",
        "Working backwards with the wrong base. If a value rose 25% to 10, it started at 10 ÷ 1.25 = 8, not at 10 − 25% = 7.5.",
      ],
      links: [
        { href: "/cagr-calculator", label: "CAGR calculator" },
        { href: "/guides/percentage-change-from-a-to-b", label: "Percentage change from A to B guide" },
      ],
    },
  ],

  "vat-calculator": [
    {
      id: "vat-worked-examples",
      title: "Adding and removing VAT: worked examples",
      steps: [
        {
          q: "Add 19% German VAT to €250 net.",
          a: `Multiply by 1.19: 250 × 1.19 = €${de297}0 gross, of which €47.50 is VAT.`,
        },
        {
          q: "Remove 19% VAT from €297.50 gross.",
          a: `Divide by 1.19: 297.50 ÷ 1.19 = €${de250} net. The VAT is €47.50.`,
        },
        {
          q: "A UK price is £60 including 20% VAT. How much is VAT?",
          a: `Net = 60 ÷ 1.2 = £${uk50}, so VAT is £10. Taking 20% of £60 gives £${ukWrong}, which overstates the VAT by £2.`,
        },
        {
          q: "Add 8.1% Swiss VAT to CHF 100.",
          a: `100 × 1.081 = CHF ${ch}0.`,
        },
      ],
      paragraphs: [
        "A quick check for any rate: the VAT inside a gross price is rate ÷ (100 + rate) of it. At 20% that is 20 ÷ 120 = one sixth; at 23% it is 23 ÷ 123, about 18.7%. The rates table on this page lists that share for each country’s standard rate.",
      ],
      links: [
        { href: "/guides/how-to-calculate-vat", label: "How to calculate VAT" },
        { href: "/guides/sales-tax-versus-vat", label: "Sales tax vs VAT" },
        { href: "/percent-of/20", label: "20% of common numbers and prices" },
      ],
    },
  ],
};
