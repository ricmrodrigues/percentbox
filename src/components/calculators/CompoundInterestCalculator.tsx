"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackCalculation, trackToolView } from "@/lib/analytics";
import {
  type CompoundFrequency,
  compoundInterest,
  formatMoney,
  formatNum,
  parseNum,
} from "@/lib/phase-a";
import { CalcInput, CalcShell, ChipRow, ResultBlock } from "./CalcShell";

const FREQ: { label: string; value: CompoundFrequency }[] = [
  { label: "Annually", value: "annually" },
  { label: "Semi-annual", value: "semiannually" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Monthly", value: "monthly" },
  { label: "Daily", value: "daily" },
];

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");
  const [contrib, setContrib] = useState("100");
  const [freq, setFreq] = useState<CompoundFrequency>("monthly");
  const tracked = useRef("");

  useEffect(() => {
    trackToolView("compound", freq);
  }, [freq]);

  const result = useMemo(() => {
    const p = parseNum(principal);
    const r = parseNum(rate);
    const y = parseNum(years);
    const c = parseNum(contrib) ?? 0;
    if (p === null || r === null || y === null || p < 0 || y < 0) return null;
    return compoundInterest(p, r, y, freq, c);
  }, [principal, rate, years, contrib, freq]);

  useEffect(() => {
    if (!result) return;
    const key = `${principal}|${rate}|${years}|${contrib}|${freq}`;
    if (key === tracked.current) return;
    const t = window.setTimeout(() => {
      tracked.current = key;
      trackCalculation("compound", { frequency: freq });
    }, 800);
    return () => window.clearTimeout(t);
  }, [result, principal, rate, years, contrib, freq]);

  return (
    <CalcShell
      title="Compound Interest Calculator"
      description="Project growth with compound interest and optional regular contributions"
      result={
        result ? (
          <div>
            <ResultBlock
              primary={`$${formatMoney(result.balance)}`}
              detail={`Interest earned $${formatMoney(result.interestEarned)} · Contributed $${formatMoney(result.totalContributed)}`}
              formula={`FV = P(1+r/n)^(nt) + PMT × [((1+r/n)^(nt)−1) ÷ (r/n)]`}
            />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Final balance", result.balance],
                ["Total contributed", result.totalContributed],
                ["Interest earned", result.interestEarned],
              ].map(([label, val]) => (
                <div
                  key={label as string}
                  className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40"
                >
                  <p className="text-[10px] font-medium uppercase text-slate-500">
                    {label as string}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    ${formatMoney(val as number)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-emerald-800/70 dark:text-emerald-200/60">
              {formatNum(result.periods, 0)} compounding periods
            </p>
          </div>
        ) : (
          <ResultBlock primary="—" detail="Enter principal, rate, and years" />
        )
      }
    >
      <CalcInput
        id="principal"
        label="Starting principal"
        value={principal}
        onChange={setPrincipal}
        prefix="$"
        placeholder="10000"
      />
      <CalcInput
        id="rate"
        label="Annual interest rate"
        value={rate}
        onChange={setRate}
        suffix="%"
        placeholder="5"
      />
      <CalcInput
        id="years"
        label="Years"
        value={years}
        onChange={setYears}
        placeholder="10"
      />
      <CalcInput
        id="contrib"
        label="Contribution per period"
        value={contrib}
        onChange={setContrib}
        prefix="$"
        placeholder="100"
      />
      <div className="sm:col-span-2">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          Compounding frequency
        </p>
        <ChipRow
          options={FREQ.map((f) => ({ label: f.label, value: f.value }))}
          active={freq}
          onSelect={(v) => setFreq(v as CompoundFrequency)}
        />
        <p className="mt-2 text-xs text-slate-400">
          Contribution is applied once per compounding period (e.g. monthly
          when compounding monthly).
        </p>
      </div>
    </CalcShell>
  );
}
