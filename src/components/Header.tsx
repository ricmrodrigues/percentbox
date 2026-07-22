import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { ToolsNav } from "./ToolsNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="PercentBox"
            width={36}
            height={36}
            priority
            className="h-9 w-9 shrink-0 rounded-xl shadow-md shadow-emerald-500/25 transition group-hover:shadow-emerald-500/40"
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-base font-bold tracking-tight text-slate-900 dark:text-white">
              PercentBox
            </span>
            <span className="hidden text-[11px] text-slate-500 dark:text-slate-400 sm:block">
              Free calculators
            </span>
          </div>
        </Link>
        <nav
          aria-label="Primary"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <ToolsNav />
          <Link
            href="/about"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 md:inline"
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
