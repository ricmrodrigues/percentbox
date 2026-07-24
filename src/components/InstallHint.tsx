"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "percentbox-ios-install-hint-dismissed";

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return iOS;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return (
    nav.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

/**
 * iOS never shows an install banner. This tip appears only on iPhone/iPad
 * Safari (not when already added to Home Screen), and is dismissible.
 */
export function InstallHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // ignore
    }
    if (isIos() && !isStandalone()) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Add PercentBox to your Home Screen"
      className="border-b border-emerald-200/80 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100"
    >
      <div className="mx-auto flex max-w-6xl items-start gap-3 sm:items-center">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-xs font-bold text-white sm:mt-0">
          %
        </span>
        <div className="min-w-0 flex-1 leading-snug">
          <p className="font-semibold">Install on iPhone / iPad</p>
          <p className="mt-0.5 text-xs text-emerald-900/80 dark:text-emerald-200/80 sm:text-sm">
            Tap{" "}
            <span className="inline-flex items-center gap-0.5 font-semibold">
              Share
              <svg
                className="inline h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
                />
              </svg>
            </span>{" "}
            → <strong>Add to Home Screen</strong> for a full-screen app icon
            (Safari).
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss install tip"
          className="shrink-0 cursor-pointer rounded-lg px-2 py-1 text-xs font-semibold text-emerald-800/70 transition hover:bg-emerald-100 hover:text-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-900"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
