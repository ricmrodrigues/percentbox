"use client";

import { useEffect, useRef } from "react";
import {
  ADSENSE_CLIENT,
  ADSENSE_SLOTS,
  type AdPlacement,
  hasManualSlot,
  isAdsenseEnabled,
} from "@/lib/adsense";

interface AdSlotProps {
  slot: AdPlacement;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const MIN_HEIGHT: Record<AdPlacement, string> = {
  top: "min-h-[90px]",
  sidebar: "min-h-[250px]",
  below: "min-h-[100px]",
  inline: "min-h-[90px]",
};

/**
 * Manual display unit when a data-ad-slot ID is configured.
 * With only the publisher script + Auto ads ON in AdSense, Google places ads
 * automatically (no dashed placeholders).
 */
export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const pushed = useRef(false);
  const unitId = ADSENSE_SLOTS[slot];
  const useManual = isAdsenseEnabled && hasManualSlot(slot);

  useEffect(() => {
    if (!useManual || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Script may not be ready yet, or extension blocked
    }
  }, [useManual]);

  if (!isAdsenseEnabled) return null;

  if (useManual && unitId) {
    return (
      <aside
        aria-label="Advertisement"
        className={`w-full overflow-hidden ${MIN_HEIGHT[slot]} ${className}`}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={unitId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  // Auto ads: no fake "AdSense placement" boxes
  return (
    <aside
      aria-label="Advertisement"
      data-ad-placement={slot}
      className={`w-full ${className}`}
    />
  );
}
