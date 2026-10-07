"use client";

import { useMemo, useState } from "react";
import { formatNum, parseNum } from "@/lib/phase-a";
import { useShareableParams } from "@/lib/share";
import { CalcInput, CalcShell, ResultBlock } from "./CalcShell";
import { StepsAndShare } from "./Steps";

const sign = (n: number) => (n > 0 ? "+" : n < 0 ? "−" : "");

export function PercentagePointsCalculator() {
  const [from, setFrom] = useState("4");
  const [to, setTo] = useState("5");
  useShareableParams({ from, to }, (q) => {
    if (q.from && parseNum(q.from) !== null) setFrom(q.from);
    if (q.to && parseNum(q.to) !== null) setTo(q.to);
  });

  const r = useMemo(() => {
    const a = parseNum(from);
    const b = parseNum(to);
    if (a === null || b === null) return null;
    const pp = b - a;
    const rel = a === 0 ? null : (pp / Math.abs(a)) * 100;
    return { a, b, pp, rel };
  }, [from, to]);

  const steps = r
    ? [
        `Percentage-point change = new rate − old rate = ${formatNum(r.b)}% − ${formatNum(r.a)}% = ${sign(r.pp)}${formatNum(Math.abs(r.pp))} pp.`,
        r.rel === null
          ? "The old rate is 0%, so a relative (percent) change is undefined. Only the point change is meaningful."
          : `Relative change = point change ÷ old rate × 100 = ${formatNum(r.pp)} ÷ ${formatNum(Math.abs(r.a))} × 100 = ${sign(r.rel)}${formatNum(Math.abs(r.rel))}%.`,
        r.rel === null
          ? "Report it as “up X percentage points”."
          : `Both are true at once: the rate moved ${sign(r.pp)}${formatNum(Math.abs(r.pp))} percentage points, which is a ${formatNum(Math.abs(r.rel))}% ${r.rel >= 0 ? "rise" : "fall"} in the rate itself. Say which one you mean.`,
        `On €10,000 the yearly amount goes from €${formatNum(r.a * 100, 2)} to €${formatNum(r.b * 100, 2)} (a difference of €${formatNum(Math.abs(r.pp) * 100, 2)}), if the rate is a simple annual rate.`,
      ]
    : [];

  return (
    <CalcShell
      title="Percentage points vs percent change"
      description="Type two rates (interest, unemployment, a poll share, a tax rate) to see both ways of describing the move."
      result={
        r ? (
          <div>
            <ResultBlock
              label="Change in percentage points"
              primary={`${sign(r.pp)}${formatNum(Math.abs(r.pp))} pp`}
              detail={
                r.rel === null
                  ? "Relative change undefined (old rate is 0%)"
                  : `Relative change: ${sign(r.rel)}${formatNum(Math.abs(r.rel))}% of the old rate`
              }
              formula="pp = new − old · relative % = (new − old) ÷ old × 100"
            />
            <StepsAndShare steps={steps} />
          </div>
        ) : (
          <ResultBlock primary="—" detail="Enter both rates" />
        )
      }
    >
      <CalcInput id="pp-from" label="Old rate" value={from} onChange={setFrom} suffix="%" placeholder="4" />
      <CalcInput id="pp-to" label="New rate" value={to} onChange={setTo} suffix="%" placeholder="5" />
    </CalcShell>
  );
}
