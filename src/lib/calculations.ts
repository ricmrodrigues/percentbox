export type CalculatorMode =
  | "percent-of"
  | "is-what-percent"
  | "increase-decrease"
  | "change"
  | "tip"
  | "discount";

export interface CalcResult {
  primary: number;
  secondary?: number;
  label: string;
  detail?: string;
  formula?: string;
}

export function parseNum(value: string): number | null {
  if (value.trim() === "" || value === "-" || value === "." || value === "-.") {
    return null;
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function formatNumber(n: number, maxDecimals = 4): string {
  if (!Number.isFinite(n)) return "—";
  if (Math.abs(n) >= 1e12 || (Math.abs(n) > 0 && Math.abs(n) < 1e-6)) {
    return n.toExponential(4);
  }
  const rounded =
    Math.abs(n - Math.round(n)) < 1e-10
      ? Math.round(n)
      : Number(n.toFixed(maxDecimals));
  return rounded.toLocaleString(undefined, {
    maximumFractionDigits: maxDecimals,
  });
}

export function formatCurrency(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/** What is X% of Y? */
export function percentOf(x: number, y: number): CalcResult {
  const result = (x / 100) * y;
  return {
    primary: result,
    label: `${formatNumber(x)}% of ${formatNumber(y)}`,
    detail: `= ${formatNumber(result)}`,
    formula: `(${formatNumber(x)} ÷ 100) × ${formatNumber(y)} = ${formatNumber(result)}`,
  };
}

/** X is what % of Y? */
export function isWhatPercent(x: number, y: number): CalcResult | null {
  if (y === 0) return null;
  const result = (x / y) * 100;
  return {
    primary: result,
    label: `${formatNumber(x)} is what % of ${formatNumber(y)}`,
    detail: `= ${formatNumber(result)}%`,
    formula: `(${formatNumber(x)} ÷ ${formatNumber(y)}) × 100 = ${formatNumber(result)}%`,
  };
}

/** Percentage increase/decrease: Y increased/decreased by X% */
export function increaseDecrease(
  value: number,
  percent: number,
  direction: "increase" | "decrease"
): CalcResult {
  const delta = (percent / 100) * value;
  const result =
    direction === "increase" ? value + delta : value - delta;
  const word = direction === "increase" ? "increased" : "decreased";
  return {
    primary: result,
    secondary: Math.abs(delta),
    label: `${formatNumber(value)} ${word} by ${formatNumber(percent)}%`,
    detail: `= ${formatNumber(result)} (${direction === "increase" ? "+" : "−"}${formatNumber(Math.abs(delta))})`,
    formula:
      direction === "increase"
        ? `${formatNumber(value)} + (${formatNumber(percent)}% × ${formatNumber(value)}) = ${formatNumber(result)}`
        : `${formatNumber(value)} − (${formatNumber(percent)}% × ${formatNumber(value)}) = ${formatNumber(result)}`,
  };
}

/** Percentage change from A to B */
export function percentageChange(from: number, to: number): CalcResult | null {
  if (from === 0) return null;
  const change = to - from;
  const percent = (change / Math.abs(from)) * 100;
  const direction = percent >= 0 ? "increase" : "decrease";
  return {
    primary: percent,
    secondary: change,
    label: `Change from ${formatNumber(from)} to ${formatNumber(to)}`,
    detail: `= ${formatNumber(Math.abs(percent))}% ${direction} (${percent >= 0 ? "+" : ""}${formatNumber(change)})`,
    formula: `((${formatNumber(to)} − ${formatNumber(from)}) ÷ ${formatNumber(Math.abs(from))}) × 100 = ${formatNumber(percent)}%`,
  };
}

/** Tip calculator */
export function tipCalc(
  bill: number,
  tipPercent: number,
  people: number = 1
): CalcResult {
  const tip = (tipPercent / 100) * bill;
  const total = bill + tip;
  const perPerson = people > 0 ? total / people : total;
  const tipPerPerson = people > 0 ? tip / people : tip;
  return {
    primary: total,
    secondary: tip,
    label: `${formatNumber(tipPercent)}% tip on $${formatCurrency(bill)}`,
    detail:
      people > 1
        ? `Tip: $${formatCurrency(tip)} · Total: $${formatCurrency(total)} · Per person: $${formatCurrency(perPerson)}`
        : `Tip: $${formatCurrency(tip)} · Total: $${formatCurrency(total)}`,
    formula: `Tip $${formatCurrency(tip)} + Bill $${formatCurrency(bill)} = $${formatCurrency(total)}${people > 1 ? ` ÷ ${people} = $${formatCurrency(perPerson)}/person` : ""}`,
  };
}

/** Discount calculator */
export function discountCalc(
  price: number,
  discountPercent: number
): CalcResult {
  const savings = (discountPercent / 100) * price;
  const finalPrice = price - savings;
  return {
    primary: finalPrice,
    secondary: savings,
    label: `${formatNumber(discountPercent)}% off $${formatCurrency(price)}`,
    detail: `You pay: $${formatCurrency(finalPrice)} · You save: $${formatCurrency(savings)}`,
    formula: `$${formatCurrency(price)} − (${formatNumber(discountPercent)}% × $${formatCurrency(price)}) = $${formatCurrency(finalPrice)}`,
  };
}

export const QUICK_PERCENTS = [5, 10, 12, 15, 18, 20, 25, 30, 40, 50, 75, 100];

export const TIP_PRESETS = [10, 15, 18, 20, 22, 25];

export const DISCOUNT_PRESETS = [5, 10, 15, 20, 25, 30, 40, 50, 70];

export const MODE_META: Record<
  CalculatorMode,
  { title: string; short: string; tab: string; description: string }
> = {
  "percent-of": {
    title: "What is X% of Y?",
    short: "% of",
    tab: "% of",
    description: "Find a percentage of a number",
  },
  "is-what-percent": {
    title: "X is what % of Y?",
    short: "X is % of Y",
    tab: "is % of",
    description: "Find what percent one number is of another",
  },
  "increase-decrease": {
    title: "Percentage Increase / Decrease",
    short: "Inc / Dec",
    tab: "Inc / Dec",
    description: "Increase or decrease a value by a percentage",
  },
  change: {
    title: "Percentage Change",
    short: "Change",
    tab: "Change",
    description: "Calculate the percent change from A to B",
  },
  tip: {
    title: "Tip Calculator",
    short: "Tip",
    tab: "Tip",
    description: "Calculate tip and split the bill",
  },
  discount: {
    title: "Discount Calculator",
    short: "Discount",
    tab: "Discount",
    description: "Find sale price and how much you save",
  },
};
