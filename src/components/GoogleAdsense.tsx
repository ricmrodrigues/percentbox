import Script from "next/script";
import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/adsense";

/**
 * Loads the AdSense library (required for Auto ads + manual units).
 * Enable Auto ads in AdSense for percentbox.com so Google can place ads.
 */
export function GoogleAdsense() {
  if (!isAdsenseEnabled) return null;

  return (
    <>
      <Script
        id="adsense-init"
        async
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
