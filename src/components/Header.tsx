import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="PercentBox"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-xl shadow-md shadow-emerald-500/25 transition group-hover:shadow-emerald-500/40"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              PercentBox
            </span>
            <span className="hidden text-[11px] text-slate-500 dark:text-slate-400 sm:block">
              Free percentage calculator
            </span>
          </div>
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-2 sm:gap-3"
        >
          <Link
            href="/percentage-calculator"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 md:inline"
          >
            % Calc
          </Link>
          <Link
            href="/loan-calculator"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 sm:inline"
          >
            Loan
          </Link>
          <Link
            href="/vat-calculator"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 sm:inline"
          >
            VAT
          </Link>
          <Link
            href="/markup-calculator"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 lg:inline"
          >
            Markup
          </Link>
          <Link
            href="/about"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 lg:inline"
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
