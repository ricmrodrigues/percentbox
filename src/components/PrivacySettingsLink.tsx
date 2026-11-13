"use client";

import { useRouter } from "next/navigation";

/**
 * Reopens Google's consent message (AdSense Privacy & messaging) so visitors
 * can change or withdraw consent. Where Google's CMP is not active (for
 * example outside the regions that require consent, or with an ad blocker),
 * it falls back to the privacy policy.
 */
export function PrivacySettingsLink({ className = "" }: { className?: string }) {
  const router = useRouter();

  const open = () => {
    const fc = window.googlefc;
    if (typeof fc?.showRevocationMessage === "function") {
      fc.showRevocationMessage();
      return;
    }
    if (fc && Array.isArray(fc.callbackQueue)) {
      fc.callbackQueue.push(() => window.googlefc?.showRevocationMessage?.());
      return;
    }
    router.push("/privacy#privacy-settings");
  };

  return (
    <button type="button" className={className} onClick={open}>
      Privacy settings
    </button>
  );
}
