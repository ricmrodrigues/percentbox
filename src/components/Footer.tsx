export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white">
                %
              </span>
              <span className="font-bold text-slate-900 dark:text-white">
                PercentBox
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Fast, free percentage calculator for everyday math — tips,
              discounts, increases, and more. No signup required.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Calculators
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  What is X% of Y?
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Percentage increase calculator
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Tip calculator
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Discount calculator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              About
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>100% free · No login</li>
              <li>Works offline after load</li>
              <li>Privacy-friendly · local history only</li>
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
