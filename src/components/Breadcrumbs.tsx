import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <span aria-hidden className="text-slate-300 dark:text-slate-600">
                  /
                </span>
              )}
              {last || !item.href ? (
                <span
                  className={
                    last
                      ? "font-medium text-slate-800 dark:text-slate-200"
                      : undefined
                  }
                  aria-current={last ? "page" : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
