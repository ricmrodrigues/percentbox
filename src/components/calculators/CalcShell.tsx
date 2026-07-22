"use client";

import type { ReactNode } from "react";

export function CalcShell({
  title,
  description,
  children,
  result,
}: {
  title: string;
  description: string;
  children: ReactNode;
  result: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-7">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-5 dark:from-emerald-950/40 dark:to-teal-950/30 sm:p-6">
        {result}
      </div>
    </div>
  );
}

export function CalcInput({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
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
          value={value}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, "");
            if (raw === "" || /^-?\d*\.?\d*$/.test(raw)) onChange(raw);
          }}
          placeholder={placeholder}
          className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-lg font-semibold text-slate-900 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600 ${
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

export function ResultBlock({
  label,
  primary,
  detail,
  formula,
}: {
  label?: string;
  primary: string;
  detail?: string;
  formula?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
        {label ?? "Result"}
      </p>
      <p className="mt-1 break-words text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100 sm:text-4xl">
        {primary}
      </p>
      {detail && (
        <p className="mt-2 text-sm font-medium text-emerald-800/80 dark:text-emerald-200/80">
          {detail}
        </p>
      )}
      {formula && (
        <p className="mt-2 font-mono text-xs text-emerald-700/60 dark:text-emerald-400/50">
          {formula}
        </p>
      )}
    </div>
  );
}

export function ChipRow({
  options,
  active,
  onSelect,
}: {
  options: { label: string; value: string | number }[];
  active: string | number | null;
  onSelect: (v: string | number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const isActive = active === o.value;
        return (
          <button
            key={String(o.value) + o.label}
            type="button"
            onClick={() => onSelect(o.value)}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              isActive
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
