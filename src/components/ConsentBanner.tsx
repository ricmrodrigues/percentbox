"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * First-party Accept / Reject banner. The head bootstrap already applied
 * Consent Mode and loaded (or withheld) AdSense and GA before hydration.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [eea, setEea] = useState(false);

  useEffect(() => {
    const sync = () => {
      const state = window.__pbConsent;
      setEea(Boolean(state?.eea));
      setOpen(!state?.choice);
    };
    sync();
    const reopen = () => setOpen(true);
    window.addEventListener("pb-consent-open", reopen);
    return () => window.removeEventListener("pb-consent-open", reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: "accepted" | "rejected") => {
    window.__pbApplyConsent?.(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/95 sm:p-5"
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
            {eea
              ? "Analytics and advertising stay off until you accept. Essential storage (theme and the calculations you choose to keep on this device) is unaffected."
              : "We use optional analytics and ads to keep the calculators free. Reject non-essential cookies if you would rather not load them."}{" "}
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
