"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Read a set of string fields from the page query string once on mount, then
 * mirror the current inputs back into the URL with history.replaceState so the
 * address bar is always a shareable link to the user's own calculation.
 */
export function useShareableParams(
  values: Record<string, string>,
  apply: (fromUrl: Record<string, string>) => void,
) {
  const loaded = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of Object.keys(values)) {
      const v = params.get(key);
      if (v !== null && v.length <= 32) found[key] = v;
    }
    if (Object.keys(found).length > 0) apply(found);
    loaded.current = true;
    // Only on mount: the URL is the initial state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const serialized = JSON.stringify(values);
  useEffect(() => {
    if (!loaded.current) return;
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(JSON.parse(serialized) as Record<string, string>)) {
      if (v !== "") params.set(k, v);
    }
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
    window.history.replaceState(window.history.state, "", next);
  }, [serialized]);
}

/** "Copy link to this result" button state. */
export function useCopyLink() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copy this link", url);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, []);
  return { copied, copy };
}
