"use client";

import { useMemo, useState } from "react";
import {
  formatMoney,
  formatNum,
  markupFromCost,
  markupMarginFromPrices,
  parseNum,
  sellFromMargin,
} from "@/lib/phase-a";
import { CalcInput, CalcShell, ChipRow, ResultBlock } from "./CalcShell";

type Mode = "markup" | "margin" | "from-prices";

export function MarkupCalculator() {
  const [mode, setMode] = useState<Mode>("markup");
  const [cost, setCost] = useState("50");
  const [percent, setPercent] = useState("40");
  const [sell, setSell] = useState("70");

  const result = useMemo(() => {
    const c = parseNum(cost);
    const p = parseNum(percent);
    const s = parseNum(sell);
    if (mode === "markup") {
      if (c === null || p === null) return null;
      const r = markupFromCost(c, p);
      return {
        primary: `$${formatMoney(r.sellPrice)}`,
        detail: `Markup $${formatMoney(r.markupAmount)} · Margin ${formatNum(r.marginPercent, 2)}%`,
        formula: `Sell = cost × (1 + markup%/100) = ${formatMoney(c)} × (1 + ${formatNum(p)}/100)`,
      };
    }
    if (mode === "margin") {
      if (c === null || p === null) return null;
      const r = sellFromMargin(c, p);
      if (!r) return { primary: "—", detail: "Margin must be under 100%", formula: "" };
      return {
        primary: `$${formatMoney(r.sellPrice)}`,
        detail: `Profit $${formatMoney(r.profit)} · Markup ${formatNum(r.markupPercent, 2)}%`,
        formula: `Sell = cost ÷ (1 − margin%/100)`,
      };
    }
    if (c === null || s === null) return null;
    const r = markupMarginFromPrices(c, s);
    if (!r) return null;
    return {
      primary:
        r.marginPercent !== null
          ? `${formatNum(r.marginPercent, 2)}% margin`
          : "—",
      detail: `Profit $${formatMoney(r.profit)}${
        r.markupPercent !== null
          ? ` · Markup ${formatNum(r.markupPercent, 2)}%`
          : ""
      }`,
      formula: `Margin% = profit ÷ sell × 100 · Markup% = profit ÷ cost × 100`,
    };
  }, [mode, cost, percent, sell]);

  return (
    <CalcShell
      title="Markup & Margin Calculator"
      description="Convert between cost, sell price, markup %, and profit margin %"
      result={
        result ? (
          <ResultBlock
            primary={result.primary}
            detail={result.detail}
            formula={result.formula}
          />
        ) : (
          <ResultBlock primary="—" detail="Enter values to calculate" />
        )
      }
    >
      <div className="sm:col-span-2">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          Mode
        </p>
        <ChipRow
          options={[
            { label: "Markup on cost", value: "markup" },
            { label: "Margin on sell", value: "margin" },
            { label: "From cost & sell", value: "from-prices" },
          ]}
          active={mode}
          onSelect={(v) => setMode(v as Mode)}
        />
      </div>
      <CalcInput
        id="cost"
        label="Cost"
        value={cost}
        onChange={setCost}
        prefix="$"
        placeholder="50"
      />
      {mode === "from-prices" ? (
        <CalcInput
          id="sell"
          label="Sell price"
          value={sell}
          onChange={setSell}
          prefix="$"
          placeholder="70"
        />
      ) : (
        <CalcInput
          id="pct"
          label={mode === "markup" ? "Markup %" : "Margin %"}
          value={percent}
          onChange={setPercent}
          suffix="%"
          placeholder="40"
        />
      )}
    </CalcShell>
  );
}
