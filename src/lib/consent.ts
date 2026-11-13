import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/adsense";
import { GA_MEASUREMENT_ID, isGaEnabled } from "@/lib/analytics";

/**
 * Regions where Google Consent Mode defaults to "denied" until Google's CMP
 * (AdSense Privacy & messaging / Funding Choices) records a choice:
 * EEA member states, the UK, and Switzerland (ISO 3166-1 alpha-2).
 * Google resolves the visitor's region itself (IP-based), so no client-side
 * geo guess is needed here.
 */
export const CONSENT_REQUIRED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
] as const;

declare global {
  interface Window {
    googlefc?: {
      callbackQueue?: Array<(() => void) | Record<string, () => void>>;
      showRevocationMessage?: () => void;
    };
  }
}

function safeToken(value: string): string {
  return /^[A-Za-z0-9_-]+$/.test(value) ? value : "";
}

/**
 * Inline head bootstrap. Runs synchronously before the static adsbygoogle.js
 * tag that follows it in the layout, so the Consent Mode v2 defaults exist
 * before any Google tag reads them.
 *
 * Consent is collected by Google's own certified CMP (AdSense Privacy &
 * messaging, served by adsbygoogle.js), which writes the TCF string and sends
 * the Consent Mode "update". There is no first-party banner.
 *
 * - Default: denied for ad_storage, ad_user_data, ad_personalization and
 *   analytics_storage in CONSENT_REQUIRED_REGIONS; granted elsewhere.
 * - GA4 (when configured) always loads and follows Consent Mode: with
 *   analytics_storage denied it sets no cookies and sends cookieless pings.
 *
 * next/script is intentionally not used for adsbygoogle.js: it adds
 * data-nscript, which AdSense rejects on the head tag.
 */
export function consentBootstrapScript(): string {
  const adsClient = isAdsenseEnabled ? safeToken(ADSENSE_CLIENT) : "";
  const gaId = isGaEnabled ? safeToken(GA_MEASUREMENT_ID) : "";

  return `(function(){
  var REGIONS=${JSON.stringify([...CONSENT_REQUIRED_REGIONS])};
  var ADS=${JSON.stringify(adsClient)};
  var GA=${JSON.stringify(gaId)};
  window.dataLayer=window.dataLayer||[];
  function gtag(){ window.dataLayer.push(arguments); }
  if (!window.gtag) window.gtag=gtag;
  window.gtag("consent","default",{
    ad_storage:"granted",
    ad_user_data:"granted",
    ad_personalization:"granted",
    analytics_storage:"granted",
    functionality_storage:"granted",
    security_storage:"granted"
  });
  window.gtag("consent","default",{
    ad_storage:"denied",
    ad_user_data:"denied",
    ad_personalization:"denied",
    analytics_storage:"denied",
    functionality_storage:"granted",
    security_storage:"granted",
    region:REGIONS,
    wait_for_update:500
  });
  window.gtag("set","ads_data_redaction",true);
  if (GA){
    var s=document.createElement("script");
    s.async=true;
    s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(GA);
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", GA, { send_page_view: false });
  }
  if (ADS){
    var q=window.adsbygoogle=window.adsbygoogle||[];
    try { q.push({google_ad_client: ADS, enable_page_level_ads: true}); } catch(e){}
  }
})();`;
}
