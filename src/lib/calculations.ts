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
        ? `Tip: $${formatCurrency(tip)} · Total: $${formatCurrency(total)} · Per person: $${formatCurrency(perPerson)} (tip $${formatCurrency(tipPerPerson)} each)`
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

const f = (n: number) => formatNumber(n);
const m = (n: number) => formatCurrency(n);

/**
 * Plain-language working for the user's own inputs, one line per step.
 * Mirrors the arithmetic in the functions above so the steps and the
 * headline result can never disagree.
 */
export function stepsFor(
  mode: CalculatorMode,
  a: number,
  b: number,
  direction: "increase" | "decrease" = "increase",
  people = 1,
): string[] {
  switch (mode) {
    case "percent-of": {
      const dec = a / 100;
      return [
        `Turn the percent into a decimal: ${f(a)} ÷ 100 = ${f(dec)}.`,
        `Multiply by the number you are taking a share of: ${f(dec)} × ${f(b)} = ${f(dec * b)}.`,
        `Check: ${f(dec * b)} ÷ ${f(b)} × 100 = ${f(a)}%, so the answer rebuilds the percent you typed.`,
      ];
    }
    case "is-what-percent": {
      if (b === 0) return ["The whole (Y) is 0, so there is no percentage to compute."];
      const ratio = a / b;
      return [
        `Divide the part by the whole: ${f(a)} ÷ ${f(b)} = ${f(ratio)}.`,
        `Multiply by 100 to express it per hundred: ${f(ratio)} × 100 = ${f(ratio * 100)}%.`,
        `Check: ${f(ratio * 100)}% of ${f(b)} = ${f(ratio * b)}, which is your part.`,
      ];
    }
    case "increase-decrease": {
      const piece = (b / 100) * a;
      const factor = direction === "increase" ? 1 + b / 100 : 1 - b / 100;
      const result = a * factor;
      return [
        `Find ${f(b)}% of the starting value: ${f(b)} ÷ 100 × ${f(a)} = ${f(piece)}.`,
        direction === "increase"
          ? `Add it to the start: ${f(a)} + ${f(piece)} = ${f(result)}.`
          : `Subtract it from the start: ${f(a)} − ${f(piece)} = ${f(result)}.`,
        `One-step shortcut: ${f(a)} × ${f(factor)} = ${f(result)}.`,
        direction === "decrease"
          ? `Undoing it is not a ${f(b)}% increase: getting back to ${f(a)} from ${f(result)} needs ${result === 0 ? "an infinite" : `a ${f((a / result - 1) * 100)}%`} increase.`
          : `Undoing it is not a ${f(b)}% decrease: getting back to ${f(a)} from ${f(result)} needs a ${result === 0 ? "—" : f((1 - a / result) * 100)}% decrease.`,
      ];
    }
    case "change": {
      if (a === 0) return ["The starting value is 0, so a percentage change is undefined. Report the absolute change instead."];
      const diff = b - a;
      const pct = (diff / Math.abs(a)) * 100;
      return [
        `Subtract old from new: ${f(b)} − ${f(a)} = ${f(diff)}.`,
        `Divide by the old value (the base): ${f(diff)} ÷ ${f(Math.abs(a))} = ${f(diff / Math.abs(a))}.`,
        `Multiply by 100: ${f(pct)}% (${pct >= 0 ? "an increase" : "a decrease"}).`,
        b === 0
          ? `Reversed (from ${f(b)} back to ${f(a)}) the change is undefined because the base would be 0.`
          : `Reversed (from ${f(b)} back to ${f(a)}) the base changes, so the percent is ${f(((a - b) / Math.abs(b)) * 100)}%, not ${f(-pct)}%.`,
      ];
    }
    case "tip": {
      const tip = (b / 100) * a;
      const total = a + tip;
      const steps = [
        `Tip = ${f(b)}% of ${m(a)} = ${f(b)} ÷ 100 × ${m(a)} = ${m(tip)}.`,
        `Total = bill + tip = ${m(a)} + ${m(tip)} = ${m(total)}.`,
      ];
      if (people > 1) {
        steps.push(`Each of ${f(people)} people pays ${m(total)} ÷ ${f(people)} = ${m(total / people)}.`);
      }
      steps.push("Tip on the pre-tax subtotal if that is the local custom; this calculator tips on whatever amount you type.");
      return steps;
    }
    case "discount": {
      const save = (b / 100) * a;
      return [
        `Savings = ${f(b)}% of ${m(a)} = ${m(save)}.`,
        `Sale price = ${m(a)} − ${m(save)} = ${m(a - save)}.`,
        `Shortcut: ${m(a)} × ${f(1 - b / 100)} = ${m(a * (1 - b / 100))}.`,
        `A second discount stacks on the sale price, not the original: another ${f(b)}% off would give ${m(a * (1 - b / 100) ** 2)}, a total of ${f((1 - (1 - b / 100) ** 2) * 100)}% off, not ${f(2 * b)}%.`,
      ];
    }
  }
}
