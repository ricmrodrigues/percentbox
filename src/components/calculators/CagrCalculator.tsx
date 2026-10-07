"use client";

import { useMemo, useState } from "react";
import { formatMoney, formatNum, parseNum } from "@/lib/phase-a";
import { useShareableParams } from "@/lib/share";
import { CalcInput, CalcShell, ResultBlock } from "./CalcShell";
import { StepsAndShare } from "./Steps";

export function CagrCalculator() {
  const [start, setStart] = useState("10000");
  const [end, setEnd] = useState("16000");
  const [years, setYears] = useState("5");
  useShareableParams({ start, end, years }, (q) => {
    if (q.start && parseNum(q.start) !== null) setStart(q.start);
    if (q.end && parseNum(q.end) !== null) setEnd(q.end);
    if (q.years && parseNum(q.years) !== null) setYears(q.years);
  });

  const r = useMemo(() => {
    const s = parseNum(start);
    const e = parseNum(end);
    const n = parseNum(years);
    if (s === null || e === null || n === null) return null;
    if (s <= 0 || e < 0 || n <= 0) return { error: "Start must be above 0, end 0 or more, and years above 0." } as const;
    const ratio = e / s;
    const cagr = (Math.pow(ratio, 1 / n) - 1) * 100;
    const total = (ratio - 1) * 100;
    const simpleAvg = total / n;
    const rows: { year: number; value: number }[] = [];
    const whole = Math.floor(n);
    if (Number.isInteger(n) && n <= 30) {
      for (let y = 0; y <= whole; y++) rows.push({ year: y, value: s * Math.pow(1 + cagr / 100, y) });
    }
    return { s, e, n, ratio, cagr, total, simpleAvg, rows } as const;
  }, [start, end, years]);

  const ok = r && !("error" in r);
  const steps = ok
    ? [
        `Growth multiple = end ÷ start = ${formatMoney(r.e)} ÷ ${formatMoney(r.s)} = ${formatNum(r.ratio, 4)}.`,
        `Take the ${formatNum(r.n)}th root (raise to 1 ÷ ${formatNum(r.n)}): ${formatNum(r.ratio, 4)}^(1/${formatNum(r.n)}) = ${formatNum(1 + r.cagr / 100, 5)}.`,
        `Subtract 1 and multiply by 100: CAGR = ${formatNum(r.cagr, 2)}% per year.`,
        `Compare: total growth is ${formatNum(r.total, 2)}%, and simply dividing by ${formatNum(r.n)} years gives ${formatNum(r.simpleAvg, 2)}% — higher than the CAGR because it ignores compounding.`,
      ]
    : [];

  return (
    <CalcShell
      title="CAGR calculator"
      description="Compound annual growth rate: the steady yearly rate that turns the start value into the end value."
      result={
        !r ? (
          <ResultBlock primary="—" detail="Enter start, end, and years" />
        ) : "error" in r ? (
          <ResultBlock primary="—" detail={r.error} />
        ) : (
          <div>
            <ResultBlock
              label="CAGR"
              primary={`${formatNum(r.cagr, 2)}% / year`}
              detail={`Total growth ${formatNum(r.total, 2)}% over ${formatNum(r.n)} years · simple average ${formatNum(r.simpleAvg, 2)}% / year`}
              formula="CAGR = (end ÷ start)^(1 ÷ years) − 1"
            />
            {r.rows.length > 1 && (
              <div className="mt-4 overflow-x-auto rounded-lg bg-white/60 dark:bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Value each year at a constant CAGR</caption>
                  <thead className="text-xs uppercase text-slate-500">
                    <tr>
                      <th scope="col" className="px-3 py-2">Year</th>
                      <th scope="col" className="px-3 py-2">Value at constant CAGR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.rows.map((row) => (
                      <tr key={row.year} className="border-t border-emerald-100 dark:border-slate-800">
                        <td className="px-3 py-1.5">{row.year}</td>
                        <td className="px-3 py-1.5 font-semibold">{formatMoney(row.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <StepsAndShare steps={steps} />
          </div>
        )
      }
    >
      <CalcInput id="cagr-start" label="Start value" value={start} onChange={setStart} placeholder="10000" />
      <CalcInput id="cagr-end" label="End value" value={end} onChange={setEnd} placeholder="16000" />
      <CalcInput id="cagr-years" label="Years between them" value={years} onChange={setYears} placeholder="5" />
    </CalcShell>
  );
}
