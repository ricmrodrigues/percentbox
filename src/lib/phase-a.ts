/** Pure math for Phase A calculators (markup, VAT, compound interest, loan). */

export function parseNum(value: string): number | null {
  if (value.trim() === "" || value === "-" || value === "." || value === "-.") {
    return null;
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function formatMoney(n: number, maxDecimals = 2): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDecimals,
  });
}

export function formatNum(n: number, maxDecimals = 4): string {
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

/** Markup: cost → sell price with markup % on cost */
export function markupFromCost(cost: number, markupPercent: number) {
  const markupAmount = cost * (markupPercent / 100);
  const sellPrice = cost + markupAmount;
  const marginPercent = sellPrice !== 0 ? (markupAmount / sellPrice) * 100 : 0;
  return { markupAmount, sellPrice, marginPercent };
}

/** Margin: cost + desired margin % of sell → sell price */
export function sellFromMargin(cost: number, marginPercent: number) {
  if (marginPercent >= 100) return null;
  const sellPrice = cost / (1 - marginPercent / 100);
  const profit = sellPrice - cost;
  const markupPercent = cost !== 0 ? (profit / cost) * 100 : 0;
  return { sellPrice, profit, markupPercent };
}

/** Given cost and sell, compute markup % and margin % */
export function markupMarginFromPrices(cost: number, sell: number) {
  if (cost === 0 && sell === 0) return null;
  const profit = sell - cost;
  const markupPercent = cost !== 0 ? (profit / cost) * 100 : null;
  const marginPercent = sell !== 0 ? (profit / sell) * 100 : null;
  return { profit, markupPercent, marginPercent };
}

export type VatMode = "add" | "extract";

/** VAT add: net → gross; extract: gross → net */
export function vatCalc(amount: number, ratePercent: number, mode: VatMode) {
  const rate = ratePercent / 100;
  if (mode === "add") {
    const vat = amount * rate;
    const gross = amount + vat;
    return { net: amount, vat, gross };
  }
  const net = amount / (1 + rate);
  const vat = amount - net;
  return { net, vat, gross: amount };
}

export const VAT_PRESETS: { label: string; rate: number; region?: string }[] = [
  { label: "PT standard", rate: 23, region: "Portugal" },
  { label: "PT intermediate", rate: 13, region: "Portugal" },
  { label: "PT reduced", rate: 6, region: "Portugal" },
  { label: "ES standard", rate: 21, region: "Spain" },
  { label: "DE standard", rate: 19, region: "Germany" },
  { label: "FR standard", rate: 20, region: "France" },
  { label: "UK standard", rate: 20, region: "UK" },
  { label: "US example", rate: 8, region: "US-like" },
  { label: "0%", rate: 0 },
];

export type CompoundFrequency =
  | "annually"
  | "semiannually"
  | "quarterly"
  | "monthly"
  | "daily";

export function compoundsPerYear(f: CompoundFrequency): number {
  switch (f) {
    case "annually":
      return 1;
    case "semiannually":
      return 2;
    case "quarterly":
      return 4;
    case "monthly":
      return 12;
    case "daily":
      return 365;
  }
}

/**
 * Future value with optional regular contribution at end of each period.
 * FV = P(1+r/n)^(nt) + PMT * [((1+r/n)^(nt) - 1) / (r/n)]
 */
export function compoundInterest(
  principal: number,
  annualRatePercent: number,
  years: number,
  frequency: CompoundFrequency,
  contribution = 0
) {
  const n = compoundsPerYear(frequency);
  const r = annualRatePercent / 100;
  const nt = n * years;
  if (years < 0 || n <= 0) return null;

  let futurePrincipal: number;
  let futureContrib = 0;

  if (r === 0) {
    futurePrincipal = principal;
    futureContrib = contribution * nt;
  } else {
    const factor = Math.pow(1 + r / n, nt);
    futurePrincipal = principal * factor;
    if (contribution !== 0) {
      futureContrib = contribution * ((factor - 1) / (r / n));
    }
  }

  const balance = futurePrincipal + futureContrib;
  const totalContributed = principal + contribution * nt;
  const interestEarned = balance - totalContributed;

  return {
    balance,
    totalContributed,
    interestEarned,
    periods: nt,
  };
}

export interface AmortizationRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

/** Standard fixed-rate loan amortization (monthly by default) */
export function loanAmortization(
  principal: number,
  annualRatePercent: number,
  years: number,
  paymentsPerYear = 12
): {
  payment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: AmortizationRow[];
} | null {
  if (principal <= 0 || years <= 0 || paymentsPerYear <= 0) return null;

  const n = Math.round(years * paymentsPerYear);
  const r = annualRatePercent / 100 / paymentsPerYear;

  let payment: number;
  if (r === 0) {
    payment = principal / n;
  } else {
    payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  const schedule: AmortizationRow[] = [];
  let balance = principal;
  let totalInterest = 0;

  for (let i = 1; i <= n; i++) {
    const interest = r === 0 ? 0 : balance * r;
    let principalPart = payment - interest;
    // Last payment adjustment for rounding
    if (i === n || principalPart > balance) {
      principalPart = balance;
      payment = principalPart + interest;
    }
    balance = Math.max(0, balance - principalPart);
    totalInterest += interest;
    schedule.push({
      period: i,
      payment: principalPart + interest,
      principal: principalPart,
      interest,
      balance,
    });
  }

  const totalPayment = schedule.reduce((s, row) => s + row.payment, 0);

  return {
    payment: schedule[0]?.payment ?? payment,
    totalPayment,
    totalInterest,
    schedule,
  };
}
