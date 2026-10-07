"use client";

import { useMemo, useState } from "react";
import { formatNum, parseNum } from "@/lib/phase-a";
import { useShareableParams } from "@/lib/share";
import { CalcShell, ResultBlock } from "./CalcShell";
import { StepsAndShare } from "./Steps";

interface Row {
  name: string;
  score: string;
  weight: string;
}

const DEFAULT_ROWS: Row[] = [
  { name: "Homework", score: "92", weight: "20" },
  { name: "Midterm", score: "78", weight: "30" },
  { name: "Final exam", score: "", weight: "50" },
];

function encode(rows: Row[]) {
  return rows.map((r) => `${r.score}_${r.weight}`).join("~");
}

function decode(s: string): Row[] | null {
  const parts = s.split("~").slice(0, 12);
  const rows: Row[] = [];
  for (const [i, p] of parts.entries()) {
    const [score = "", weight = ""] = p.split("_");
    if (!/^\d*\.?\d*$/.test(score) || !/^\d*\.?\d*$/.test(weight)) return null;
    rows.push({ name: `Item ${i + 1}`, score, weight });
  }
  return rows.length ? rows : null;
}

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base font-semibold text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white";

export function WeightedGradeCalculator() {
  const [rows, setRows] = useState<Row[]>(DEFAULT_ROWS);
  const [target, setTarget] = useState("85");
  useShareableParams({ g: encode(rows), target }, (q) => {
    if (q.g) {
      const d = decode(q.g);
      if (d) setRows(d);
    }
    if (q.target && parseNum(q.target) !== null) setTarget(q.target);
  });

  const update = (i: number, key: keyof Row, v: string) => {
    if (key !== "name" && !(v === "" || /^\d*\.?\d*$/.test(v))) return;
    setRows((prev) => prev.map((r, j) => (j === i ? { ...r, [key]: v } : r)));
  };

  const r = useMemo(() => {
    let earned = 0;
    let gradedWeight = 0;
    let totalWeight = 0;
    let missingWeight = 0;
    const lines: string[] = [];
    for (const row of rows) {
      const w = parseNum(row.weight);
      if (w === null || w <= 0) continue;
      totalWeight += w;
      const s = parseNum(row.score);
      if (s === null) {
        missingWeight += w;
        continue;
      }
      earned += s * w;
      gradedWeight += w;
      lines.push(`${row.name}: ${formatNum(s)} × ${formatNum(w)} = ${formatNum(s * w)}`);
    }
    if (gradedWeight === 0) return null;
    const current = earned / gradedWeight;
    const t = parseNum(target);
    let needed: number | null = null;
    if (t !== null && missingWeight > 0) {
      needed = (t * totalWeight - earned) / missingWeight;
    }
    return { earned, gradedWeight, totalWeight, missingWeight, current, needed, lines, t };
  }, [rows, target]);

  const steps = r
    ? [
        `Multiply each graded score by its weight — ${r.lines.join("; ")}.`,
        `Add those products: ${formatNum(r.earned)}. Add the weights you have scores for: ${formatNum(r.gradedWeight)}.`,
        `Weighted average so far = ${formatNum(r.earned)} ÷ ${formatNum(r.gradedWeight)} = ${formatNum(r.current, 2)}%.`,
        ...(r.totalWeight !== 100
          ? [`Your weights add up to ${formatNum(r.totalWeight)}, not 100. That is fine — the calculator divides by the weight total — but check the syllabus in case a component is missing.`]
          : []),
        ...(r.needed !== null && r.t !== null
          ? [
              `To finish on ${formatNum(r.t)}%, the remaining ${formatNum(r.missingWeight)} weight must average (${formatNum(r.t)} × ${formatNum(r.totalWeight)} − ${formatNum(r.earned)}) ÷ ${formatNum(r.missingWeight)} = ${formatNum(r.needed, 2)}%.${r.needed > 100 ? " That is above 100%, so the target is out of reach unless extra credit exists." : r.needed <= 0 ? " You have already secured the target even with 0 on the rest." : ""}`,
            ]
          : []),
      ]
    : [];

  return (
    <CalcShell
      title="Weighted grade calculator"
      description="Enter each component’s score (%) and weight. Leave a score blank to see what you need on it."
      result={
        r ? (
          <div>
            <ResultBlock
              label="Weighted average of graded work"
              primary={`${formatNum(r.current, 2)}%`}
              detail={
                r.needed !== null
                  ? `Needed on the ungraded ${formatNum(r.missingWeight)} weight to reach ${formatNum(r.t ?? 0)}%: ${formatNum(r.needed, 2)}%`
                  : `Based on ${formatNum(r.gradedWeight)} of ${formatNum(r.totalWeight)} total weight`
              }
              formula="Σ(score × weight) ÷ Σ(weight)"
            />
            <StepsAndShare steps={steps} />
          </div>
        ) : (
          <ResultBlock primary="—" detail="Enter at least one score with a weight" />
        )
      }
    >
      <div className="sm:col-span-2">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Grade components</caption>
          <thead className="text-xs uppercase text-slate-500">
            <tr>
              <th scope="col" className="pb-1 pr-2">Component</th>
              <th scope="col" className="pb-1 pr-2">Score %</th>
              <th scope="col" className="pb-1 pr-2">Weight</th>
              <th scope="col" className="pb-1"><span className="sr-only">Remove</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="py-1 pr-2">
                  <input aria-label={`Component ${i + 1} name`} className={inputCls} value={row.name} maxLength={40} onChange={(e) => update(i, "name", e.target.value)} />
                </td>
                <td className="py-1 pr-2">
                  <input aria-label={`${row.name} score`} inputMode="decimal" className={inputCls} value={row.score} placeholder="blank = not yet" onChange={(e) => update(i, "score", e.target.value)} />
                </td>
                <td className="py-1 pr-2">
                  <input aria-label={`${row.name} weight`} inputMode="decimal" className={inputCls} value={row.weight} onChange={(e) => update(i, "weight", e.target.value)} />
                </td>
                <td className="py-1">
                  <button type="button" aria-label={`Remove ${row.name}`} className="cursor-pointer rounded-lg px-2 py-2 text-slate-400 hover:text-rose-600" onClick={() => setRows((p) => p.filter((_, j) => j !== i))}>
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex flex-wrap items-end gap-4">
          {rows.length < 12 && (
            <button type="button" className="cursor-pointer rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 dark:bg-slate-800 dark:text-slate-200" onClick={() => setRows((p) => [...p, { name: `Item ${p.length + 1}`, score: "", weight: "" }])}>
              + Add component
            </button>
          )}
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Target final grade (%)
            <input inputMode="decimal" className={`${inputCls} w-28`} value={target} onChange={(e) => /^\d*\.?\d*$/.test(e.target.value) && setTarget(e.target.value)} />
          </label>
        </div>
      </div>
    </CalcShell>
  );
}
