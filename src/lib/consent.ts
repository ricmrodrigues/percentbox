import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/adsense";
import { GA_MEASUREMENT_ID, isGaEnabled } from "@/lib/analytics";

export const CONSENT_COOKIE = "pb_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

/**
 * EEA member states, the UK, and Switzerland.
 * Used as a language-region hint, not a geo IP lookup.
 * Switzerland is included because Google's EU user-consent policy covers it.
 */
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
  "CH",
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
 * Inline head bootstrap. Runs synchronously before the static adsbygoogle.js
 * tag that follows it in the layout.
 *
 * The ad library itself is not injected here. Ad *requests* are paused with
 * pauseAdRequests until this browser is allowed to be served ads: Accept, a
 * stored Accept, or a non-EEA/UK/Switzerland visitor who has not rejected.
 * Reject leaves requests paused. Google Analytics stays fully gated.
 *
 * Google's ad crawlers are unpaused so a bot that executes this script can
 * request ads. They are not people and no consent cookie is written for them.
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
  function isAdsCrawler(){
    var ua=navigator.userAgent||"";
    return ua.indexOf("Mediapartners-Google")!==-1
      || ua.indexOf("Google-Display-Ads-Bot")!==-1
      || ua.indexOf("AdsBot-Google")!==-1;
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
  function inject(src){
    if (document.querySelector('script[src="'+src+'"]')) return;
    var s=document.createElement("script");
    s.async=true;
    s.src=src;
    document.head.appendChild(s);
  }
  function enableGa(){
    if (!GA || document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
    inject("https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(GA));
    window.gtag("js", new Date());
    window.gtag("config", GA, {
      send_page_view: false,
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure"
    });
  }
  var autoAdsQueued=false;
  function queueAutoAds(){
    if (!ADS || autoAdsQueued) return;
    autoAdsQueued=true;
    var q=window.adsbygoogle=window.adsbygoogle||[];
    try { q.push({google_ad_client: ADS, enable_page_level_ads: true}); } catch(e){}
  }
  function setAdPause(paused){
    var q=window.adsbygoogle=window.adsbygoogle||[];
    q.pauseAdRequests=paused?1:0;
  }
  window.__pbApplyConsent=function(choice){
    var wasServing=!!(window.__pbConsent&&window.__pbConsent.allow);
    document.cookie=COOKIE+"="+choice+"; Path=/; Max-Age="+MAX_AGE+"; SameSite=Lax";
    var granted=choice==="accepted";
    var eea=isEea();
    window.__pbConsent={ choice: choice, eea: eea, allow: granted };
    applyConsentMode(granted);
    setAdPause(!granted);
    if (granted) enableGa();
    try { window.dispatchEvent(new Event("pb-consent")); } catch(e){}
    if (!granted && (wasServing || document.querySelector('script[src*="googletagmanager.com/gtag"]'))){
      window.location.reload();
    }
  };
  var choice=readChoice();
  var eea=isEea();
  var crawler=isAdsCrawler();
  var humanAllow=choice==="accepted" || (choice!=="rejected" && !eea);
  var serveAds=humanAllow || crawler;
  window.__pbConsent={ choice: choice, eea: eea, allow: humanAllow && !crawler };
  setAdPause(true);
  queueAutoAds();
  if (serveAds) setAdPause(false);
  applyConsentMode(serveAds);
  if (humanAllow && !crawler) enableGa();
})();`;
}
