"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackCalculation, trackToolView } from "@/lib/analytics";
import {
  formatMoney,
  formatNum,
  markupFromCost,
  markupMarginFromPrices,
  parseNum,
  sellFromMargin,
} from "@/lib/phase-a";
import { useShareableParams } from "@/lib/share";
import { CalcInput, CalcShell, ChipRow, ResultBlock } from "./CalcShell";
import { StepsAndShare } from "./Steps";

type Mode = "markup" | "margin" | "from-prices";

export function MarkupCalculator() {
  const [mode, setMode] = useState<Mode>("markup");
  const [cost, setCost] = useState("50");
  const [percent, setPercent] = useState("40");
  const [sell, setSell] = useState("70");
  const tracked = useRef("");
  useShareableParams({ mode, cost, pct: percent, sell }, (q) => {
    if (q.mode === "markup" || q.mode === "margin" || q.mode === "from-prices") setMode(q.mode);
    if (q.cost && parseNum(q.cost) !== null) setCost(q.cost);
    if (q.pct && parseNum(q.pct) !== null) setPercent(q.pct);
    if (q.sell && parseNum(q.sell) !== null) setSell(q.sell);
  });

  useEffect(() => {
    trackToolView("markup", mode);
  }, [mode]);

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

  const steps = useMemo(() => {
    const c = parseNum(cost);
    const p = parseNum(percent);
    const s = parseNum(sell);
    if (mode === "markup" && c !== null && p !== null) {
      const sp = c * (1 + p / 100);
      return [
        `Markup amount = ${formatNum(p)}% of cost = ${formatMoney(c)} × ${formatNum(p / 100)} = ${formatMoney(sp - c)}.`,
        `Sell price = cost + markup = ${formatMoney(c)} + ${formatMoney(sp - c)} = ${formatMoney(sp)}.`,
        sp === 0 ? "Sell price is 0, so margin is undefined." : `Margin = profit ÷ sell = ${formatMoney(sp - c)} ÷ ${formatMoney(sp)} = ${formatNum(((sp - c) / sp) * 100, 2)}%. Same profit, bigger base, smaller percent.`,
      ];
    }
    if (mode === "margin" && c !== null && p !== null && p < 100) {
      const sp = c / (1 - p / 100);
      return [
        `A ${formatNum(p)}% margin means cost is ${formatNum(100 - p)}% of the sell price.`,
        `Sell price = cost ÷ ${formatNum(1 - p / 100)} = ${formatMoney(c)} ÷ ${formatNum(1 - p / 100)} = ${formatMoney(sp)}.`,
        c === 0 ? "Cost is 0, so markup is undefined." : `Markup on cost = ${formatMoney(sp - c)} ÷ ${formatMoney(c)} = ${formatNum(((sp - c) / c) * 100, 2)}%. Adding ${formatNum(p)}% to cost would have given only ${formatMoney(c * (1 + p / 100))}.`,
      ];
    }
    if (mode === "from-prices" && c !== null && s !== null && s !== 0) {
      return [
        `Profit = sell − cost = ${formatMoney(s)} − ${formatMoney(c)} = ${formatMoney(s - c)}.`,
        `Margin = profit ÷ sell × 100 = ${formatNum(((s - c) / s) * 100, 2)}%.`,
        c === 0 ? "Cost is 0, so markup is undefined." : `Markup = profit ÷ cost × 100 = ${formatNum(((s - c) / c) * 100, 2)}%.`,
      ];
    }
    return [];
  }, [mode, cost, percent, sell]);

  useEffect(() => {
    if (!result || result.primary === "—") return;
    const key = `${mode}|${cost}|${percent}|${sell}`;
    if (key === tracked.current) return;
    const t = window.setTimeout(() => {
      tracked.current = key;
      trackCalculation("markup", { tool_mode: mode });
    }, 800);
    return () => window.clearTimeout(t);
  }, [result, mode, cost, percent, sell]);

  return (
    <CalcShell
      title="Markup & Margin Calculator"
      description="Convert between cost, sell price, markup %, and profit margin %"
      result={
        result ? (
          <div>
          <ResultBlock
            primary={result.primary}
            detail={result.detail}
            formula={result.formula}
          />
          <StepsAndShare steps={steps} />
          </div>
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
