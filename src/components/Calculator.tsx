"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  type CalculatorMode,
  type CalcResult,
  DISCOUNT_PRESETS,
  MODE_META,
  QUICK_PERCENTS,
  TIP_PRESETS,
  discountCalc,
  formatCurrency,
  formatNumber,
  increaseDecrease,
  isWhatPercent,
  parseNum,
  percentOf,
  percentageChange,
  tipCalc,
} from "@/lib/calculations";
import {
  type HistoryItem,
  addHistoryItem,
  clearHistory,
  loadHistory,
} from "@/lib/history";
import {
  type ExamplePreset,
  LOAD_EXAMPLE_EVENT,
} from "@/lib/examples";
import {
  trackCalculation,
  trackCopyResult,
  trackToolView,
} from "@/lib/analytics";

const MODES: CalculatorMode[] = [
  "percent-of",
  "is-what-percent",
  "increase-decrease",
  "change",
  "tip",
  "discount",
];

function NumberInput({
  id,
  label,
  value,
  onChange,
  placeholder = "0",
  prefix,
  suffix,
  autoFocus,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  autoFocus?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-medium text-slate-400">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          autoFocus={autoFocus}
          value={value}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, "");
            if (raw === "" || /^-?\d*\.?\d*$/.test(raw)) {
              onChange(raw);
            }
          }}
          placeholder={placeholder}
          className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-lg font-semibold text-slate-900 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-500 ${
            prefix ? "pl-8" : ""
          } ${suffix ? "pr-10" : ""}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm font-medium text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function QuickButtons({
  values,
  active,
  onSelect,
  format = (n) => `${n}%`,
}: {
  values: number[];
  active?: number | null;
  onSelect: (n: number) => void;
  format?: (n: number) => string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((n) => {
        const isActive = active === n;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onSelect(n)}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isActive
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
            }`}
          >
            {format(n)}
          </button>
        );
      })}
    </div>
  );
}

export function Calculator({
  initialMode = "percent-of",
  initialDirection = "increase",
}: {
  initialMode?: CalculatorMode;
  initialDirection?: "increase" | "decrease";
} = {}) {
  const [mode, setMode] = useState<CalculatorMode>(initialMode);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [direction, setDirection] = useState<"increase" | "decrease">(
    initialDirection
  );
  const [people, setPeople] = useState("1");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const lastSavedKey = useRef("");

  useEffect(() => {
    setHistory(loadHistory());
    setHydrated(true);
  }, []);

  // Keep mode in sync when navigating between SEO tool pages
  useEffect(() => {
    setMode(initialMode);
    setDirection(initialDirection);
  }, [initialMode, initialDirection]);

  useEffect(() => {
    trackToolView("percentage", mode);
  }, [mode]);

  // Popular examples / external presets fill the form instantly
  useEffect(() => {
    const onLoadExample = (event: Event) => {
      const detail = (event as CustomEvent<ExamplePreset>).detail;
      if (!detail) return;
      setMode(detail.mode);
      setA(detail.a);
      setB(detail.b);
      setDirection(detail.direction ?? "increase");
      setPeople(detail.people ?? "1");
      setCopied(false);
      lastSavedKey.current = "";
    };

    window.addEventListener(LOAD_EXAMPLE_EVENT, onLoadExample);
    return () => window.removeEventListener(LOAD_EXAMPLE_EVENT, onLoadExample);
  }, []);

  const switchMode = (m: CalculatorMode) => {
    setMode(m);
    setCopied(false);
  };

  const result: CalcResult | null = useMemo(() => {
    const nA = parseNum(a);
    const nB = parseNum(b);
    const nPeople = parseNum(people) ?? 1;

    switch (mode) {
      case "percent-of":
        if (nA === null || nB === null) return null;
        return percentOf(nA, nB);
      case "is-what-percent":
        if (nA === null || nB === null) return null;
        return isWhatPercent(nA, nB);
      case "increase-decrease":
        if (nA === null || nB === null) return null;
        return increaseDecrease(nA, nB, direction);
      case "change":
        if (nA === null || nB === null) return null;
        return percentageChange(nA, nB);
      case "tip":
        if (nA === null || nB === null) return null;
        return tipCalc(nA, nB, nPeople > 0 ? nPeople : 1);
      case "discount":
        if (nA === null || nB === null) return null;
        return discountCalc(nA, nB);
      default:
        return null;
    }
  }, [mode, a, b, direction, people]);

  // Save to history when a valid result stabilizes
  useEffect(() => {
    if (!result || !hydrated) return;
    const key = `${mode}|${result.label}|${result.detail}`;
    if (key === lastSavedKey.current) return;

    const t = window.setTimeout(() => {
      lastSavedKey.current = key;
      const displayResult =
        mode === "is-what-percent" || mode === "change"
          ? `${formatNumber(result.primary)}%`
          : mode === "tip" || mode === "discount"
            ? `$${formatCurrency(result.primary)}`
            : formatNumber(result.primary);

      setHistory((prev) =>
        addHistoryItem(prev, {
          mode,
          summary: result.label,
          result: displayResult,
        })
      );
      trackCalculation("percentage", { tool_mode: mode });
    }, 800);

    return () => window.clearTimeout(t);
  }, [result, mode, hydrated]);

  const copyResult = useCallback(async () => {
    if (!result) return;
    const text =
      result.detail?.replace(/^=\s*/, "") ||
      formatNumber(result.primary);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      trackCopyResult(`percentage:${mode}`);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      trackCopyResult(`percentage:${mode}`);
      setTimeout(() => setCopied(false), 1800);
    }
  }, [result, mode]);

  const clearAll = () => {
    setA("");
    setB("");
    setPeople("1");
    setCopied(false);
    lastSavedKey.current = "";
  };

  const applyHistory = (item: HistoryItem) => {
    setMode(item.mode);
  };

  const percentValue =
    mode === "percent-of" ? parseNum(a) : parseNum(b);

  return (
    <div className="w-full">
      {/* Mode switcher — responsive grid, no horizontal scroll */}
      <div
        role="tablist"
        aria-label="Calculator modes"
        className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
      >
        {MODES.map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              role="tab"
              type="button"
              aria-selected={active}
              title={MODE_META[m].title}
              onClick={() => switchMode(m)}
              className={`flex min-h-[2.75rem] cursor-pointer items-center justify-center rounded-xl px-2 py-2 text-center text-xs font-semibold leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:text-sm ${
                active
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {MODE_META[m].tab}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-7">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            {MODE_META[mode].title}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {MODE_META[mode].description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {mode === "percent-of" && (
            <>
              <NumberInput
                id="pct"
                label="Percentage (X%)"
                value={a}
                onChange={setA}
                suffix="%"
                placeholder="e.g. 20"
                autoFocus
              />
              <NumberInput
                id="of"
                label="Of number (Y)"
                value={b}
                onChange={setB}
                placeholder="e.g. 150"
              />
            </>
          )}

          {mode === "is-what-percent" && (
            <>
              <NumberInput
                id="part"
                label="Number (X)"
                value={a}
                onChange={setA}
                placeholder="e.g. 25"
                autoFocus
              />
              <NumberInput
                id="whole"
                label="Is what % of (Y)"
                value={b}
                onChange={setB}
                placeholder="e.g. 200"
              />
            </>
          )}

          {mode === "increase-decrease" && (
            <>
              <NumberInput
                id="value"
                label="Starting value"
                value={a}
                onChange={setA}
                placeholder="e.g. 100"
                autoFocus
              />
              <NumberInput
                id="by-pct"
                label="By percentage"
                value={b}
                onChange={setB}
                suffix="%"
                placeholder="e.g. 15"
              />
              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Direction
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setDirection("increase")}
                    className={`flex-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      direction === "increase"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    ↑ Increase
                  </button>
                  <button
                    type="button"
                    onClick={() => setDirection("decrease")}
                    className={`flex-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      direction === "decrease"
                        ? "bg-rose-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    ↓ Decrease
                  </button>
                </div>
              </div>
            </>
          )}

          {mode === "change" && (
            <>
              <NumberInput
                id="from"
                label="From (original value)"
                value={a}
                onChange={setA}
                placeholder="e.g. 80"
                autoFocus
              />
              <NumberInput
                id="to"
                label="To (new value)"
                value={b}
                onChange={setB}
                placeholder="e.g. 100"
              />
            </>
          )}

          {mode === "tip" && (
            <>
              <NumberInput
                id="bill"
                label="Bill amount"
                value={a}
                onChange={setA}
                prefix="$"
                placeholder="e.g. 64.50"
                autoFocus
              />
              <NumberInput
                id="tip-pct"
                label="Tip percentage"
                value={b}
                onChange={setB}
                suffix="%"
                placeholder="e.g. 18"
              />
              <NumberInput
                id="people"
                label="Split between (people)"
                value={people}
                onChange={setPeople}
                placeholder="1"
              />
            </>
          )}

          {mode === "discount" && (
            <>
              <NumberInput
                id="price"
                label="Original price"
                value={a}
                onChange={setA}
                prefix="$"
                placeholder="e.g. 79.99"
                autoFocus
              />
              <NumberInput
                id="disc-pct"
                label="Discount percentage"
                value={b}
                onChange={setB}
                suffix="%"
                placeholder="e.g. 25"
              />
            </>
          )}
        </div>

        {/* Quick percentage presets */}
        {(mode === "percent-of" ||
          mode === "increase-decrease" ||
          mode === "tip" ||
          mode === "discount") && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              Quick select
            </p>
            <QuickButtons
              values={
                mode === "tip"
                  ? TIP_PRESETS
                  : mode === "discount"
                    ? DISCOUNT_PRESETS
                    : QUICK_PERCENTS
              }
              active={percentValue}
              onSelect={(n) => {
                if (mode === "percent-of") setA(String(n));
                else setB(String(n));
              }}
            />
          </div>
        )}

        {/* Result panel */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-5 dark:from-emerald-950/40 dark:to-teal-950/30 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                Result
              </p>
              {result ? (
                <>
                  <p className="mt-1 break-words text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 sm:text-4xl">
                    {mode === "is-what-percent" || mode === "change"
                      ? `${formatNumber(result.primary)}%`
                      : mode === "tip" || mode === "discount"
                        ? `$${formatCurrency(result.primary)}`
                        : formatNumber(result.primary)}
                  </p>
                  {result.detail && (
                    <p className="mt-2 text-sm font-medium text-emerald-800/80 dark:text-emerald-200/80">
                      {result.detail}
                    </p>
                  )}
                  {result.formula && (
                    <p className="mt-2 font-mono text-xs text-emerald-700/60 dark:text-emerald-400/50">
                      {result.formula}
                    </p>
                  )}
                  {mode === "tip" && result.secondary !== undefined && (
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      <div className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40">
                        <p className="text-[10px] font-medium uppercase text-slate-500">
                          Tip
                        </p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          ${formatCurrency(result.secondary)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40">
                        <p className="text-[10px] font-medium uppercase text-slate-500">
                          Total
                        </p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          ${formatCurrency(result.primary)}
                        </p>
                      </div>
                      {parseNum(people) !== null &&
                        (parseNum(people) as number) > 1 && (
                          <div className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40">
                            <p className="text-[10px] font-medium uppercase text-slate-500">
                              Per person
                            </p>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                              $
                              {formatCurrency(
                                result.primary / (parseNum(people) as number)
                              )}
                            </p>
                          </div>
                        )}
                    </div>
                  )}
                  {mode === "discount" && result.secondary !== undefined && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40">
                        <p className="text-[10px] font-medium uppercase text-slate-500">
                          You save
                        </p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          ${formatCurrency(result.secondary)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white/60 px-3 py-2 dark:bg-slate-900/40">
                        <p className="text-[10px] font-medium uppercase text-slate-500">
                          Final price
                        </p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          ${formatCurrency(result.primary)}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="mt-2 text-lg text-emerald-800/50 dark:text-emerald-200/40">
                  Enter values to calculate
                </p>
              )}
            </div>

            <div className="flex shrink-0 flex-col gap-2">
              <button
                type="button"
                onClick={copyResult}
                disabled={!result}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800 dark:text-emerald-300 dark:ring-emerald-900 dark:hover:bg-slate-700"
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex cursor-pointer items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-white/60 hover:text-slate-700 dark:hover:bg-slate-800/60 dark:hover:text-slate-300"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      {hydrated && history.length > 0 && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Recent calculations
            </h3>
            <button
              type="button"
              onClick={() => setHistory(clearHistory())}
              className="cursor-pointer text-xs font-medium text-slate-400 transition hover:text-rose-500"
            >
              Clear history
            </button>
          </div>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {history.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => applyHistory(item)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 py-2.5 text-left transition hover:opacity-80"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm text-slate-600 dark:text-slate-300">
                      {item.summary}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {MODE_META[item.mode].short} ·{" "}
                      {new Date(item.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {item.result}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
