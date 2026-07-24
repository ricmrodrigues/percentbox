"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackCalculation, trackToolView } from "@/lib/analytics";
import {
  VAT_PRESETS,
  formatMoney,
  formatNum,
  parseNum,
  vatCalc,
  type VatMode,
} from "@/lib/phase-a";
import { CalcInput, CalcShell, ChipRow, ResultBlock } from "./CalcShell";

export function VatCalculator() {
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("23");
  const [mode, setMode] = useState<VatMode>("add");
  const tracked = useRef("");

  useEffect(() => {
    trackToolView("vat", mode);
  }, [mode]);

  const result = useMemo(() => {
    const a = parseNum(amount);
    const r = parseNum(rate);
    if (a === null || r === null || r < 0) return null;
    return vatCalc(a, r, mode);
  }, [amount, rate, mode]);

  useEffect(() => {
    if (!result) return;
    const key = `${mode}|${amount}|${rate}`;
    if (key === tracked.current) return;
    const t = window.setTimeout(() => {
      tracked.current = key;
      trackCalculation("vat", { tool_mode: mode });
    }, 800);
    return () => window.clearTimeout(t);
  }, [result, mode, amount, rate]);

  return (
    <CalcShell
      title="VAT / Sales Tax Calculator"
      description="Add tax to a net amount or extract tax from a gross (tax-inclusive) price"
      result={
        result ? (
          <div>
            <ResultBlock
              primary={`$${formatMoney(mode === "add" ? result.gross : result.net)}`}
              detail={
                mode === "add"
                  ? `Net $${formatMoney(result.net)} + VAT $${formatMoney(result.vat)} = Gross $${formatMoney(result.gross)}`
                  : `Gross $${formatMoney(result.gross)} − VAT $${formatMoney(result.vat)} = Net $${formatMoney(result.net)}`
              }
              formula={
                mode === "add"
                  ? `Gross = net × (1 + rate/100)`
                  : `Net = gross ÷ (1 + rate/100)`
              }
            />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Net", result.net],
                ["VAT", result.vat],
                ["Gross", result.gross],
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
          </div>
        ) : (
          <ResultBlock primary="—" detail="Enter amount and rate" />
        )
      }
    >
      <div className="sm:col-span-2">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          Direction
        </p>
        <ChipRow
          options={[
            { label: "Add VAT (net → gross)", value: "add" },
            { label: "Extract VAT (gross → net)", value: "extract" },
          ]}
          active={mode}
          onSelect={(v) => setMode(v as VatMode)}
        />
      </div>
      <CalcInput
        id="amount"
        label={mode === "add" ? "Net amount (ex-VAT)" : "Gross amount (inc-VAT)"}
        value={amount}
        onChange={setAmount}
        prefix="$"
        placeholder="100"
      />
      <CalcInput
        id="rate"
        label="Tax / VAT rate"
        value={rate}
        onChange={setRate}
        suffix="%"
        placeholder="23"
      />
      <div className="sm:col-span-2">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
          Common rates
        </p>
        <ChipRow
          options={VAT_PRESETS.map((p) => ({
            label: `${p.label} (${formatNum(p.rate, 0)}%)`,
            value: p.rate,
          }))}
          active={parseNum(rate)}
          onSelect={(v) => setRate(String(v))}
        />
      </div>
    </CalcShell>
  );
}
