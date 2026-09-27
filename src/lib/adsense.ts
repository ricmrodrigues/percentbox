/** Google AdSense publisher config */

const DEFAULT_CLIENT = "ca-pub-5355338650267313";

export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || DEFAULT_CLIENT;

/**
 * The review script loads whenever a publisher ID is configured.
 * Set NEXT_PUBLIC_ADSENSE_ENABLED=false to turn it off.
 * Unset (the production default today) or "true" both enable Auto ads code.
 * Manual units still require slot IDs — empty slots do not block the script.
 */
export const isAdsenseExplicitlyDisabled =
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED?.trim().toLowerCase() === "false";

export const isAdsenseEnabled =
  Boolean(ADSENSE_CLIENT) && !isAdsenseExplicitlyDisabled;

/**
 * Optional per-placement unit IDs from AdSense → Ads → By ad unit.
 * If empty, Auto ads (script + client only) still works when enabled in AdSense.
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

/**
 * Static library URL for the root layout. Empty when ads are disabled.
 * The client id is restricted to the characters AdSense actually uses so a
 * bad env value cannot break out of the script src.
 */
export function adsenseLibrarySrc(): string {
  if (!isAdsenseEnabled) return "";
  if (!/^ca-pub-[0-9]+$/.test(ADSENSE_CLIENT)) return "";
  return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
}
