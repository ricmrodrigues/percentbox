interface AdSlotProps {
  slot: "top" | "sidebar" | "below" | "inline";
  className?: string;
}

const LABELS: Record<AdSlotProps["slot"], string> = {
  top: "Advertisement",
  sidebar: "Advertisement",
  below: "Advertisement",
  inline: "Advertisement",
};

/**
 * AdSense-ready placeholder. Replace the inner content with
 * <ins class="adsbygoogle"> when you have an AdSense publisher ID.
 */
export function AdSlot({ slot, className = "" }: AdSlotProps) {
  const heights: Record<AdSlotProps["slot"], string> = {
    top: "min-h-[90px]",
    sidebar: "min-h-[250px]",
    below: "min-h-[100px]",
    inline: "min-h-[90px]",
  };

  return (
    <aside
      aria-label="Advertisement"
      data-ad-slot={slot}
      className={`flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-3 py-4 text-center dark:border-slate-700 dark:bg-slate-800/40 ${heights[slot]} ${className}`}
    >
      <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {LABELS[slot]}
      </span>
      <span className="mt-1 text-xs text-slate-400 dark:text-slate-500">
        AdSense placement
      </span>
      {/* 
        When ready, replace with:
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXX"
          data-ad-slot="YYYYYYYY"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      */}
    </aside>
  );
}
