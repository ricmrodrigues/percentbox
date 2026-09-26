import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/adsense";
import { GA_MEASUREMENT_ID, isGaEnabled } from "@/lib/analytics";

export const CONSENT_COOKIE = "pb_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

/** EEA member states plus the UK. Used as a language-region hint, not a geo IP lookup. */
export const EEA_UK_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "UK",
] as const;

export type ConsentChoice = "accepted" | "rejected";

export interface PbConsentState {
  choice: ConsentChoice | null;
  eea: boolean;
  allow: boolean;
}

declare global {
  interface Window {
    __pbConsent?: PbConsentState;
    __pbApplyConsent?: (choice: ConsentChoice) => void;
  }
}

function safeToken(value: string): string {
  return /^[A-Za-z0-9_-]+$/.test(value) ? value : "";
}

/**
 * Inline head bootstrap. Runs before hydration so AdSense and GA are present
 * after JavaScript execution for visitors who are allowed to receive them.
 *
 * EEA/UK (timezone or language region) defaults to denied until Accept.
 * Everyone else loads the scripts unless they previously chose Reject.
 * A stored Reject never loads the scripts.
 *
 * next/script is intentionally not used for adsbygoogle.js: it adds
 * data-nscript, which AdSense rejects on the head tag.
 */
export function consentBootstrapScript(): string {
  const adsClient = isAdsenseEnabled ? safeToken(ADSENSE_CLIENT) : "";
  const gaId = isGaEnabled ? safeToken(GA_MEASUREMENT_ID) : "";

  return `(function(){
  var COOKIE=${JSON.stringify(CONSENT_COOKIE)};
  var MAX_AGE=${CONSENT_MAX_AGE_SECONDS};
  var EEA=${JSON.stringify([...EEA_UK_REGIONS])};
  var ADS=${JSON.stringify(adsClient)};
  var GA=${JSON.stringify(gaId)};
  function readChoice(){
    try {
      var m=document.cookie.match(new RegExp("(?:^|; )"+COOKIE+"=(accepted|rejected)(?:;|$)"));
      return m?m[1]:null;
    } catch(e){ return null; }
  }
  function isEea(){
    var tz="";
    try { tz=Intl.DateTimeFormat().resolvedOptions().timeZone||""; } catch(e){}
    if (tz.indexOf("Europe/")===0) return true;
    if (tz==="Atlantic/Azores"||tz==="Atlantic/Madeira"||tz==="Atlantic/Canary"||tz==="Atlantic/Faroe"||tz==="Atlantic/Reykjavik") return true;
    var lang=(navigator.language||"");
    var parts=lang.split("-");
    var region=(parts.length>1?parts[parts.length-1]:"").toUpperCase();
    for (var i=0;i<EEA.length;i++){ if (EEA[i]===region) return true; }
    return false;
  }
  function gtag(){ window.dataLayer.push(arguments); }
  window.dataLayer=window.dataLayer||[];
  if (!window.gtag) window.gtag=gtag;
  function applyConsentMode(granted){
    window.gtag("consent", window.__pbConsentBooted ? "update" : "default", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500
    });
    window.__pbConsentBooted=true;
  }
  function inject(src, cross){
    if (document.querySelector('script[src="'+src+'"]')) return;
    var s=document.createElement("script");
    s.async=true;
    s.src=src;
    if (cross) s.crossOrigin="anonymous";
    document.head.appendChild(s);
  }
  function enable(){
    if (ADS){
      inject("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(ADS), true);
    }
    if (GA && !document.querySelector('script[src*="googletagmanager.com/gtag/js"]')){
      inject("https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(GA), false);
      window.gtag("js", new Date());
      window.gtag("config", GA, {
        send_page_view: false,
        anonymize_ip: true,
        cookie_flags: "SameSite=None;Secure"
      });
    }
  }
  window.__pbApplyConsent=function(choice){
    document.cookie=COOKIE+"="+choice+"; Path=/; Max-Age="+MAX_AGE+"; SameSite=Lax";
    var granted=choice==="accepted";
    var eea=isEea();
    window.__pbConsent={ choice: choice, eea: eea, allow: granted };
    applyConsentMode(granted);
    if (granted) enable();
    try { window.dispatchEvent(new Event("pb-consent")); } catch(e){}
    if (!granted && document.querySelector('script[src*="googlesyndication.com"],script[src*="googletagmanager.com/gtag"]')){
      window.location.reload();
    }
  };
  var choice=readChoice();
  var eea=isEea();
  var allow=choice==="accepted" || (choice!=="rejected" && !eea);
  window.__pbConsent={ choice: choice, eea: eea, allow: allow };
  applyConsentMode(allow);
  if (allow) enable();
})();`;
}
