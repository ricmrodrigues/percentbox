/**
 * Rates that have a /percent-of/{rate} table page. Chosen from the common
 * percentages people search for (Search Console, Aug–Nov 2026: 25%, 20% and
 * 30% lead the "N% of M" queries) plus the usual tip, discount and tax rates.
 * Client-safe: no heavy content here.
 */
export const RATE_SLUGS = [
  "5",
  "10",
  "12.5",
  "15",
  "18",
  "20",
  "25",
  "30",
  "33",
  "40",
  "50",
  "60",
  "70",
  "75",
  "80",
  "90",
] as const;

export type RateSlug = (typeof RATE_SLUGS)[number];

export function isRateSlug(s: string): s is RateSlug {
  return (RATE_SLUGS as readonly string[]).includes(s);
}

export const ratePath = (rate: string) => `/percent-of/${rate}`;

/** Normalise user input like "25.0" or "025" to a rate slug, if one exists. */
export function matchRate(input: string): RateSlug | null {
  const n = Number(input);
  if (!Number.isFinite(n)) return null;
  const hit = RATE_SLUGS.find((r) => Number(r) === n);
  return hit ?? null;
}
