/** Google AdSense publisher config */
export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ||
  "ca-pub-5355338650267313";

export const isAdsenseEnabled = Boolean(ADSENSE_CLIENT);

/**
 * Optional per-placement unit IDs from AdSense → Ads → By ad unit.
 * If empty, Auto ads (script only) still works when enabled in AdSense.
 */
export type AdPlacement = "top" | "sidebar" | "below" | "inline";

export const ADSENSE_SLOTS: Record<AdPlacement, string> = {
  top: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP?.trim() || "",
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR?.trim() || "",
  below: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW?.trim() || "",
  inline: process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE?.trim() || "",
};

export function hasManualSlot(placement: AdPlacement): boolean {
  return Boolean(ADSENSE_SLOTS[placement]);
}
