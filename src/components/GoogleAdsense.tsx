import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/adsense";

/**
 * Loads AdSense without next/script.
 * next/script adds data-nscript, which triggers:
 * "AdSense head tag doesn't support data-nscript attribute"
 */
export function GoogleAdsense() {
  if (!isAdsenseEnabled) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
