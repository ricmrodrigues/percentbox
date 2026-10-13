/**
 * Affiliate programmes. Set the tracking URL in the env var (Vercel project
 * settings) once the programme approves the account. An empty URL means the
 * box renders nothing, so nothing is visible until a link is configured.
 */
export type AffiliateProgram = "wise" | "revolut";

export const AFFILIATE_URLS: Record<AffiliateProgram, string> = {
  wise: process.env.NEXT_PUBLIC_AFFILIATE_WISE_URL?.trim() || "",
  revolut: process.env.NEXT_PUBLIC_AFFILIATE_REVOLUT_URL?.trim() || "",
};

export const AFFILIATE_COPY: Record<
  AffiliateProgram,
  { title: string; body: string; cta: string }
> = {
  wise: {
    title: "Buying or selling across borders?",
    body: "If you pay suppliers or get paid in another currency, Wise converts at the mid-market rate with the fee shown before you send. Worth comparing with your bank's exchange rate.",
    cta: "See Wise",
  },
  revolut: {
    title: "Splitting bills often?",
    body: "Revolut's current account and card let you split a bill with friends in the app and see spending by category. Check the plan fees before you sign up.",
    cta: "See Revolut",
  },
};

/** Which programmes appear on which tool page (slug). */
export const AFFILIATE_PLACEMENTS: Record<string, AffiliateProgram[]> = {
  "vat-calculator": ["wise"],
  "tip-calculator": ["revolut"],
  "discount-calculator": ["revolut"],
};
