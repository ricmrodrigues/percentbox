"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * First-party Accept / Reject banner. The ad library tag is static. This
 * banner gates ad requests (pauseAdRequests) and Google Analytics.
 */
export function ConsentBanner() {
  useEffect(() => {
    const reopen = () => document.documentElement.classList.add("pb-consent-open");
    window.addEventListener("pb-consent-open", reopen);
    return () => window.removeEventListener("pb-consent-open", reopen);
  }, []);

  const choose = (choice: "accepted" | "rejected") => {
    window.__pbApplyConsent?.(choice);
    document.documentElement.classList.remove("pb-consent-open");
  };

  // Always in the server HTML; visibility comes from the html classes set by
  // the consent bootstrap script in <head> (see globals.css), so the banner
  // paints with the page instead of after hydration.
  return (
    <div
      id="pb-consent"
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-desc"
      className="pb-consent fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/95 sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <h2
            id="consent-title"
            className="text-sm font-bold text-slate-900 dark:text-white"
          >
            Cookies on PercentBox
          </h2>
          <p
            id="consent-desc"
            className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <span className="pb-consent-eea">
              Analytics stays off, and ad requests stay paused, until you accept. Essential storage (theme and the calculations you choose to keep on this device) is unaffected.
            </span>
            <span className="pb-consent-row">
              We use optional analytics and ads to keep the calculators free. Reject non-essential cookies if you would rather not load them.
            </span>{" "}
            Details are in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-emerald-700 underline dark:text-emerald-400"
            >
              privacy policy
            </Link>
            . This is a simple first-party choice, not a certified consent platform.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("pb-consent-open"))}
    >
      Cookie settings
    </button>
  );
}
