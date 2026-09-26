"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { isGaEnabled, trackPageView } from "@/lib/analytics";

function GaRouteListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isGaEnabled || !pathname) return;
    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * App Router page views. The gtag library itself is injected by the consent
 * bootstrap in the root layout (only when non-essential scripts are allowed).
 * No-ops when NEXT_PUBLIC_GA_MEASUREMENT_ID is unset.
 */
export function GoogleAnalytics() {
  if (!isGaEnabled) return null;

  return (
    <Suspense fallback={null}>
      <GaRouteListener />
    </Suspense>
  );
}
