import Link from "next/link";
import { TOOLS } from "@/lib/seo";

export function Footer() {
  const year = new Date().getFullYear();
  const mid = Math.ceil(TOOLS.length / 2);
  const colA = TOOLS.slice(0, mid);
  const colB = TOOLS.slice(mid);

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg shadow-sm"
              />
              <span className="font-bold text-slate-900 dark:text-white">
                PercentBox
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Free calculators for percentages, VAT, markup, compound interest,
              loans, tips, and discounts. No signup required.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Calculators
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {colA.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/${t.slug}`}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {t.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              More tools
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {colB.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/${t.slug}`}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {t.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Site
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Sitemap
                </a>
              </li>
              <li>100% free · No login</li>
              <li>Privacy-friendly · local history</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:flex-row">
          <p>© {year} PercentBox. All rights reserved.</p>
          <p>Built for speed · Mobile-first · SEO optimized</p>
        </div>
      </div>
    </footer>
  );
}
