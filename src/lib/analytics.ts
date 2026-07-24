/**
 * Google Analytics 4 helpers.
 * Measurement ID: NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX)
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const isGaEnabled = Boolean(GA_MEASUREMENT_ID);

type GtagCommand = "config" | "event" | "js" | "set" | "consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

/** SPA page view (App Router) */
export function trackPageView(url: string, title?: string) {
  if (!isGaEnabled) return;
  gtag("event", "page_view", {
    page_path: url,
    page_title: title ?? (typeof document !== "undefined" ? document.title : undefined),
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
  });
  // Also update config so subsequent events attach to the right page
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    send_page_view: false,
  });
}

/** Generic custom event */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (!isGaEnabled) return;
  gtag("event", name, params);
}

/** User opened / switched calculator tool or mode */
export function trackToolView(toolSlug: string, mode?: string) {
  trackEvent("tool_view", {
    tool_slug: toolSlug,
    tool_mode: mode,
  });
}

/** User completed a calculation (result shown) */
export function trackCalculation(
  tool: string,
  extras?: Record<string, string | number | boolean | undefined>
) {
  trackEvent("calculation", {
    calculator: tool,
    ...extras,
  });
}

/** User copied a result */
export function trackCopyResult(tool: string) {
  trackEvent("copy_result", { calculator: tool });
}

/** User tapped a popular example / preset */
export function trackExampleClick(label: string, tool?: string) {
  trackEvent("example_click", {
    example_label: label,
    calculator: tool,
  });
}

export type { GtagCommand };
