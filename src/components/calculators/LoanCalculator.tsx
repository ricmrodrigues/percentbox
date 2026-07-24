"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackCalculation, trackToolView } from "@/lib/analytics";
import {
  formatMoney,
  formatNum,
  loanAmortization,
  parseNum,
} from "@/lib/phase-a";
import { CalcInput, CalcShell, ResultBlock } from "./CalcShell";

export function LoanCalculator() {
  const [principal, setPrincipal] = useState("25000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("5");
  const [showTable, setShowTable] = useState(false);
  const tracked = useRef("");

  useEffect(() => {
    trackToolView("loan");
  }, []);

  const result = useMemo(() => {
    const p = parseNum(principal);
    const r = parseNum(rate);
    const y = parseNum(years);
    if (p === null || r === null || y === null || p <= 0 || y <= 0 || r < 0) {
      return null;
    }
    return loanAmortization(p, r, y, 12);
  }, [principal, rate, years]);

  useEffect(() => {
    if (!result) return;
    const key = `${principal}|${rate}|${years}`;
    if (key === tracked.current) return;
    const t = window.setTimeout(() => {
      tracked.current = key;
      trackCalculation("loan");
    }, 800);
    return () => window.clearTimeout(t);
  }, [result, principal, rate, years]);

  const previewRows = result
    ? showTable
      ? result.schedule
      : result.schedule.slice(0, 6)
    : [];

  return (
    <div className="space-y-4">
      <CalcShell
        title="Loan / EMI Calculator"
        description="Fixed-rate loan with monthly payments and full amortization schedule"
        result={
          result ? (
            <div>
              <ResultBlock
                primary={`$${formatMoney(result.payment)}/mo`}
                detail={`Total paid $${formatMoney(result.totalPayment)} · Interest $${formatMoney(result.totalInterest)}`}
                formula={`M = P × r(1+r)^n ÷ ((1+r)^n − 1) · r = annual/12 · n = years×12`}
              />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Monthly payment", result.payment],
                  ["Total interest", result.totalInterest],
                  ["Total of payments", result.totalPayment],
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
                {formatNum(result.schedule.length, 0)} monthly payments · fixed
                rate (not Euribor / variable)
              </p>
            </div>
          ) : (
            <ResultBlock
              primary="—"
              detail="Enter loan amount, rate, and term"
            />
          )
        }
      >
        <CalcInput
          id="loan-amount"
          label="Loan amount"
          value={principal}
          onChange={setPrincipal}
          prefix="$"
          placeholder="25000"
        />
        <CalcInput
          id="loan-rate"
          label="Annual interest rate"
          value={rate}
          onChange={setRate}
          suffix="%"
          placeholder="6.5"
        />
        <CalcInput
          id="loan-years"
          label="Term (years)"
          value={years}
          onChange={setYears}
          placeholder="5"
        />
      </CalcShell>

      {result && result.schedule.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Amortization schedule
            </h3>
            {result.schedule.length > 6 && (
              <button
                type="button"
                onClick={() => setShowTable((v) => !v)}
                className="cursor-pointer text-xs font-semibold text-emerald-700 dark:text-emerald-400"
              >
                {showTable
                  ? "Show first months"
                  : `Show all ${result.schedule.length} months`}
              </button>
            )}
          </div>
          <div className="max-h-80 overflow-auto rounded-xl border border-slate-100 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="sticky top-0 bg-slate-50 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  <th className="px-3 py-2">#</th>
                  <th className="px-3 py-2">Payment</th>
                  <th className="px-3 py-2">Principal</th>
                  <th className="px-3 py-2">Interest</th>
                  <th className="px-3 py-2">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {previewRows.map((row) => (
                  <tr key={row.period}>
                    <td className="px-3 py-1.5 text-slate-500">{row.period}</td>
                    <td className="px-3 py-1.5 font-medium text-slate-800 dark:text-slate-200">
                      ${formatMoney(row.payment)}
                    </td>
                    <td className="px-3 py-1.5 text-slate-600 dark:text-slate-400">
                      ${formatMoney(row.principal)}
                    </td>
                    <td className="px-3 py-1.5 text-slate-600 dark:text-slate-400">
                      ${formatMoney(row.interest)}
                    </td>
                    <td className="px-3 py-1.5 text-slate-600 dark:text-slate-400">
                      ${formatMoney(row.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
