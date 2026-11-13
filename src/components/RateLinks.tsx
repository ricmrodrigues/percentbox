import Link from "next/link";
import { RATE_SLUGS, ratePath } from "@/lib/rates";

/** Static links to the /percent-of/{rate} tables. */
export function RateLinks({
  heading = "Percent-of tables",
  className = "",
  compact = false,
}: {
  heading?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <nav
      aria-label={heading}
      className={`rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      <h2 className={compact ? "text-sm font-bold text-slate-900 dark:text-white" : "text-2xl font-bold tracking-tight text-slate-900 dark:text-white"}>
        {heading}
      </h2>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        n% of, n% off and plus n% for common numbers and prices
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5 text-sm">
        {RATE_SLUGS.map((r) => (
          <li key={r}>
            <Link
              href={ratePath(r)}
              className="inline-block rounded-lg bg-slate-100 px-2.5 py-1 font-semibold text-emerald-700 hover:bg-emerald-50 dark:bg-slate-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
            >
              {r}%
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm">
        <Link href="/percent-of" className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400">
          All percent-of tables
        </Link>
      </p>
    </nav>
  );
}
