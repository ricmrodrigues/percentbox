/**
 * Exact decimal arithmetic for statically generated tables. Every value on the
 * rate pages is a finite decimal (rates with ≤1 decimal, bases with ≤2), so
 * BigInt fixed-point math gives the exact answer with no float rounding.
 */
export interface Dec {
  n: bigint;
  scale: number; // value = n / 10^scale
}

export function dec(s: string | number): Dec {
  const str = String(s).replace(/,/g, "");
  if (!/^-?\d+(\.\d+)?$/.test(str)) throw new Error(`Not a decimal: ${str}`);
  const [i, f = ""] = str.split(".");
  return { n: BigInt(i + f), scale: f.length };
}

function align(a: Dec, b: Dec): [bigint, bigint, number] {
  const s = Math.max(a.scale, b.scale);
  return [
    a.n * BigInt(10) ** BigInt(s - a.scale),
    b.n * BigInt(10) ** BigInt(s - b.scale),
    s,
  ];
}

export const add = (a: Dec, b: Dec): Dec => {
  const [x, y, s] = align(a, b);
  return { n: x + y, scale: s };
};
export const sub = (a: Dec, b: Dec): Dec => {
  const [x, y, s] = align(a, b);
  return { n: x - y, scale: s };
};
export const mul = (a: Dec, b: Dec): Dec => ({ n: a.n * b.n, scale: a.scale + b.scale });
/** Divide by 10^k (e.g. percent → fraction is k = 2). */
export const shift = (a: Dec, k: number): Dec => ({ n: a.n, scale: a.scale + k });

/** rate% of base, exactly. */
export const pctOf = (rate: string, base: string): Dec => shift(mul(dec(rate), dec(base)), 2);
/** 1 − rate/100 and 1 + rate/100 as exact multipliers. */
export const offFactor = (rate: string): Dec => sub(dec(1), shift(dec(rate), 2));
export const plusFactor = (rate: string): Dec => add(dec(1), shift(dec(rate), 2));

/** Exact string with trailing zeros trimmed and thousands separators. */
export function fmt(a: Dec, opts: { minDecimals?: number } = {}): string {
  const neg = a.n < BigInt(0);
  const digits = (neg ? -a.n : a.n).toString().padStart(a.scale + 1, "0");
  let int = a.scale ? digits.slice(0, -a.scale) : digits;
  let frac = a.scale ? digits.slice(-a.scale) : "";
  frac = frac.replace(/0+$/, "");
  const min = opts.minDecimals ?? 0;
  if (frac.length > 0 && frac.length < min) frac = frac.padEnd(min, "0");
  int = int.replace(/^0+(?=\d)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${neg ? "−" : ""}${int}${frac ? `.${frac}` : ""}`;
}

/** Exact division when the result is a finite decimal with ≤ maxScale places; otherwise null. */
export function divExact(a: Dec, b: Dec, maxScale = 8): Dec | null {
  for (let s = 0; s <= maxScale; s++) {
    // a / b = q / 10^s  ⇔  q = a·10^s / b
    const num = a.n * BigInt(10) ** BigInt(s + b.scale);
    const den = b.n * BigInt(10) ** BigInt(a.scale);
    if (num % den === BigInt(0)) return { n: num / den, scale: s };
  }
  return null;
}
