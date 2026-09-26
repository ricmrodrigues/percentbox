"use client";

import { useEffect, useRef, useState } from "react";
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
 * Manual display unit when a data-ad-slot ID is configured AND the visitor
 * has allowed non-essential scripts. Empty slot env vars render nothing —
 * Auto ads come from the publisher script, not from placeholder boxes.
 */
export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const pushed = useRef(false);
  const unitId = ADSENSE_SLOTS[slot];
  const [allow, setAllow] = useState(false);
  const useManual = isAdsenseEnabled && hasManualSlot(slot) && allow;

  useEffect(() => {
    const sync = () => setAllow(Boolean(window.__pbConsent?.allow));
    sync();
    window.addEventListener("pb-consent", sync);
    return () => window.removeEventListener("pb-consent", sync);
  }, []);

  useEffect(() => {
    if (!useManual || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Script may not be ready yet, or an extension blocked it
    }
  }, [useManual]);

  if (!useManual || !unitId) return null;

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
