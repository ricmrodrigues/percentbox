import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition group-hover:shadow-emerald-500/40">
            %
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              PercentBox
            </span>
            <span className="hidden text-[11px] text-slate-500 dark:text-slate-400 sm:block">
              Free percentage calculator
            </span>
          </div>
        </a>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="#how-it-works"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 sm:inline"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 sm:inline"
          >
            FAQ
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
