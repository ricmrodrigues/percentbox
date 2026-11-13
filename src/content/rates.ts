import {
  type Dec,
  dec,
  divExact,
  fmt,
  mul,
  offFactor,
  pctOf,
  plusFactor,
  shift,
  sub,
} from "@/lib/exact";
import { RATE_SLUGS, type RateSlug } from "@/lib/rates";

export interface RateContent {
  rate: RateSlug;
  /** Fraction shown next to the multiplier, when it reads naturally. */
  fraction?: string;
  /** Mental-math shortcut with a worked example (checked by hand). */
  shortcut: string;
  /** Where this rate turns up; short and specific to the rate. */
  context: string;
  /** One extra rate-specific note (a trap or a related fact). */
  note: string;
  /**
   * Real numbers people searched together with this rate (Search Console,
   * 11 Aug – 10 Nov 2026, "N% of M" queries). Only rates with real lookups.
   */
  lookups?: string[];
}

export const RATE_CONTENT: Record<RateSlug, RateContent> = {
  "5": {
    rate: "5",
    fraction: "1/20",
    shortcut:
      "Find 10% by moving the decimal point one place left, then halve it. 5% of 360: 10% is 36, half of that is 18.",
    context:
      "5% shows up in small fees, modest pay rises, and sales-tax rates in many places. It is also the UK’s reduced VAT rate, used for things like home energy and children’s car seats (gov.uk).",
    note:
      "Because 5% is small, the “plus 5%” and “5% off” columns sit close to the original. That makes it easy to mistake a 5% fee on a big sum for loose change: 5% of 78,000 is 3,900.",
    lookups: ["78000", "23.99", "41600", "18.90"],
  },
  "10": {
    rate: "10",
    fraction: "1/10",
    shortcut:
      "Move the decimal point one place to the left. 10% of 437 = 43.7, and 10% of 1,705 = 170.5.",
    context:
      "10% is the anchor for nearly all percentage mental math: once you know 10%, every multiple of 5% is one or two steps away. It is also a common service charge, member discount, and sales commission in textbook problems.",
    note:
      "Adding 10% and then taking 10% off does not bring you back: 100 becomes 110, then 99. The second 10% is taken from a bigger number.",
    lookups: ["1705", "67", "1338", "3090"],
  },
  "12.5": {
    rate: "12.5",
    fraction: "1/8",
    shortcut:
      "12.5% is exactly one eighth, so halve three times. 12.5% of 640: 320, then 160, then 80.",
    context:
      "12.5% is the rate you get when something is split into eight equal shares, and a service charge often added to restaurant bills in the UK. Being a clean fraction, it is one of the easiest “awkward-looking” percentages to do in your head.",
    note:
      "12.5% of a number with no factor of 8 gives up to three extra decimal places: 12.5% of 9.99 is 1.24875. Round only at the end, to the cent if it is money.",
    lookups: ["2400"],
  },
  "15": {
    rate: "15",
    fraction: "3/20",
    shortcut:
      "Take 10%, then add half of it. 15% of 80: 10% is 8, half of that is 4, so 15% is 12.",
    context:
      "15% is a standard restaurant tip in the US and a common sale discount. It is also the lowest standard VAT rate an EU country is allowed to set (Article 97 of the VAT Directive).",
    note:
      "For a tip, decide first whether you tip on the bill before or after tax; the 15% is the same, the base is not. The tip calculator handles the split between people.",
    lookups: ["2240"],
  },
  "18": {
    rate: "18",
    fraction: "9/50",
    shortcut:
      "Take 20% and subtract 2%. 18% of 50: 20% is 10, 2% is 1, so 18% is 9.",
    context:
      "18% sits between the classic 15% and 20% tips and is often one of the suggested options on US card-terminal tip screens.",
    note:
      "An 18% tip on a bill that already includes a service charge is a second tip. Check the receipt before you multiply.",
  },
  "20": {
    rate: "20",
    fraction: "1/5",
    shortcut:
      "Divide by 5, or double 10%. 20% of 85: 10% is 8.5, doubled is 17.",
    context:
      "20% is the standard VAT rate in the UK, France, Austria and Bulgaria, a generous restaurant tip, and one of the most common sale discounts.",
    note:
      "Removing 20% VAT from a price that already includes it is not “take 20% off”. The VAT inside a gross price is 1/6 of it: 120 including VAT is 100 net plus 20 VAT, and 20 is 16.67% of 120.",
    lookups: ["2240", "13428", "2109.66", "25.95", "30.99", "78.99"],
  },
  "25": {
    rate: "25",
    fraction: "1/4",
    shortcut:
      "A quarter: halve, then halve again. 25% of 360: 180, then 90.",
    context:
      "25% is one quarter, one of the most common sale discounts, and the standard VAT rate in Denmark, Sweden, Croatia and Norway.",
    note:
      "After 25% off, you pay 75%. To undo it, divide by 0.75 — adding 25% back is not enough. 80 with 25% off is 60, but 60 plus 25% is only 75.",
    lookups: ["24.98", "16.98", "38.95", "8.95", "21.95", "18.95"],
  },
  "30": {
    rate: "30",
    fraction: "3/10",
    shortcut:
      "Three times 10%. 30% of 70: 10% is 7, times 3 is 21.",
    context:
      "30% off is one of the most common sale badges, and 30% is a typical share in budgeting rules and textbook problems.",
    note:
      "Two separate 15% discounts are not 30% off: 0.85 × 0.85 = 0.7225, so you pay 72.25% and save 27.75%.",
    lookups: ["2240", "24.95", "11.95", "569.58", "79.99", "89.98"],
  },
  "33": {
    rate: "33",
    fraction: "33/100",
    shortcut:
      "Start from a third and take a little off. A third of 300 is 100; 33% of 300 is 99, because 33% is 0.33 exactly and a third is 33.333…%.",
    context:
      "33% is often used as shorthand for one third, in splits and in “a third off” sales. This page uses exactly 33%; if your problem says “one third”, divide by 3 instead.",
    note:
      "The gap between 33% and a third grows with the number: on 30,000 it is 100 (9,900 versus 10,000).",
  },
  "40": {
    rate: "40",
    fraction: "2/5",
    shortcut:
      "Four times 10%, or double 20%. 40% of 65: 10% is 6.5, times 4 is 26.",
    context:
      "40% off is a deep sale discount, and 40% turns up as a share of a budget or a score in many textbook problems.",
    note:
      "A 40% drop needs a 66.67% rise to get back: 100 falls to 60, and 60 × 1.6667 ≈ 100. Percentages of different bases do not cancel.",
  },
  "50": {
    rate: "50",
    fraction: "1/2",
    shortcut: "Halve it. 50% of 137 = 68.5.",
    context:
      "50% is half: half-price sales, 50/50 splits, and “half again” increases.",
    note:
      "Plus 50% and then 50% off leaves you at 75% of where you started: 100 → 150 → 75. A 50% loss needs a 100% gain to recover.",
  },
  "60": {
    rate: "60",
    fraction: "3/5",
    shortcut:
      "Half plus a tenth. 60% of 45: 50% is 22.5, 10% is 4.5, so 60% is 27.",
    context:
      "60% is a common pass mark and the price you pay after a 40% discount.",
    note:
      "“60% of” and “60% off” are far apart: 60% of 80 is 48, while 60% off 80 leaves 32.",
  },
  "70": {
    rate: "70",
    fraction: "7/10",
    shortcut:
      "The whole minus 30%. 70% of 90: 30% is 27, and 90 − 27 = 63.",
    context:
      "70% is what you pay after a 30% discount, and 70% off is clearance-sale territory.",
    note:
      "A 70% markdown followed by a 70% markup does not restore the price: 100 → 30 → 51.",
  },
  "75": {
    rate: "75",
    fraction: "3/4",
    shortcut:
      "Three quarters: take a quarter away. 75% of 48: a quarter is 12, so 48 − 12 = 36.",
    context:
      "75% is three quarters — what you pay after 25% off, and a common completion or attendance threshold.",
    note:
      "75% off and paying 75% are opposite deals: 75% off 80 leaves 20, paying 75% of 80 is 60.",
  },
  "80": {
    rate: "80",
    fraction: "4/5",
    shortcut:
      "The whole minus a fifth. 80% of 35: a fifth is 7, so 35 − 7 = 28.",
    context:
      "80% is what remains after a 20% cut: the price after 20% off, or a loan-to-value share in mortgage examples.",
    note:
      "80% of a price that includes 20% VAT is not the net price. The net is gross ÷ 1.2, which is 83.33% of the gross: 120 → 100, not 96.",
    lookups: ["770000", "990"],
  },
  "90": {
    rate: "90",
    fraction: "9/10",
    shortcut:
      "The whole minus a tenth. 90% of 52,000: 10% is 5,200, so 90% is 46,800.",
    context:
      "90% is what you keep after a 10% fee or discount, and a common top grade boundary.",
    note:
      "90% off is not the same as 90% of: 90% off 80 leaves 8, while 90% of 80 is 72.",
    lookups: ["52000"],
  },
};

export const ROUND_BASES = ["10", "20", "50", "100", "150", "200", "250", "500", "1000", "2000", "5000", "10000"];
export const PRICE_BASES = ["9.99", "19.99", "24.99", "49.99", "79.99", "99.99", "149.99", "199.99"];

export interface RateRow {
  base: string;
  of: string;
  off: string;
  plus: string;
}

export function rateRow(rate: string, base: string): RateRow {
  const b = dec(base);
  return {
    base: fmt(b),
    of: fmt(pctOf(rate, base)),
    off: fmt(mul(b, offFactor(rate))),
    plus: fmt(mul(b, plusFactor(rate))),
  };
}

export const multiplier = (rate: string): string => fmt(shift(dec(rate), 2));
export const offMultiplier = (rate: string): string => fmt(offFactor(rate));
export const plusMultiplier = (rate: string): string => fmt(plusFactor(rate));

function req(d: Dec | null): string {
  if (!d) throw new Error("Non-terminating division in rate content");
  return fmt(d);
}

export interface RateFaq {
  q: string;
  a: string;
}

/** Visible FAQs for a rate page. Every number is computed exactly. */
export function rateFaqs(rate: string): RateFaq[] {
  const of200 = fmt(pctOf(rate, "200"));
  const off80 = fmt(mul(dec("80"), offFactor(rate)));
  const piece = pctOf(rate, "200");
  const back = req(divExact(piece, shift(dec(rate), 2)));
  const up = mul(dec("100"), plusFactor(rate));
  const upDown = mul(up, offFactor(rate));
  const lost = sub(dec("100"), upDown);
  return [
    {
      q: `What is ${rate}% of 200?`,
      a: `${of200}. Multiply 200 by ${multiplier(rate)} (that is ${rate} ÷ 100): 200 × ${multiplier(rate)} = ${of200}.`,
    },
    {
      q: `How do I take ${rate}% off a price?`,
      a: `Multiply the price by ${offMultiplier(rate)}, which is 1 − ${multiplier(rate)}. ${rate}% off 80 = 80 × ${offMultiplier(rate)} = ${off80}. The amount you save is ${fmt(pctOf(rate, "80"))}.`,
    },
    {
      q: `If ${rate}% of a number is ${of200}, what is the number?`,
      a: `Divide by ${multiplier(rate)}: ${of200} ÷ ${multiplier(rate)} = ${back}. This is the reverse of “${rate}% of”, and it is how you find a whole from a known share.`,
    },
    {
      q: `Does adding ${rate}% and then taking ${rate}% off get you back to the start?`,
      a: `No. 100 plus ${rate}% is ${fmt(up)}; ${rate}% off ${fmt(up)} is ${fmt(upDown)}, which is ${fmt(lost)} short of 100. The second percentage is taken from a bigger number.`,
    },
  ];
}

/** Worked reverse examples shown under the table. */
export function rateReverse(rate: string) {
  const piece = pctOf(rate, "200");
  const paid = mul(dec("80"), offFactor(rate));
  const grown = mul(dec("80"), plusFactor(rate));
  return {
    whole: { piece: fmt(piece), mult: multiplier(rate), answer: req(divExact(piece, shift(dec(rate), 2))) },
    beforeDiscount: { paid: fmt(paid), mult: offMultiplier(rate), answer: req(divExact(paid, offFactor(rate))) },
    beforeIncrease: { grown: fmt(grown), mult: plusMultiplier(rate), answer: req(divExact(grown, plusFactor(rate))) },
  };
}

export function neighbours(rate: RateSlug): { prev?: RateSlug; next?: RateSlug } {
  const i = RATE_SLUGS.indexOf(rate);
  return { prev: RATE_SLUGS[i - 1], next: RATE_SLUGS[i + 1] };
}

export const RATE_PAGES_UPDATED = "2026-11-13";
