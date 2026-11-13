import Link from "next/link";
import { DEEP_DIVE } from "@/content/tools/deep-dive";

const h2 = "text-2xl font-bold tracking-tight text-slate-900 dark:text-white";
const p = "leading-relaxed text-slate-600 dark:text-slate-400";
const linkCls = "font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400";

/** Below-the-calculator worked examples and explanations for a few main tools. */
export function ToolDeepDive({ slug }: { slug: string }) {
  const sections = DEEP_DIVE[slug];
  if (!sections) return null;
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id} className="max-w-3xl">
          <h2 id={s.id} className={h2}>
            {s.title}
          </h2>
          {s.paragraphs?.map((text) => (
            <p key={text} className={`mt-3 ${p}`}>
              {text}
            </p>
          ))}
          {s.steps && (
            <ol className="mt-4 space-y-4">
              {s.steps.map((st) => (
                <li
                  key={st.q}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{st.q}</p>
                  <p className={`mt-2 text-sm ${p}`}>{st.a}</p>
                </li>
              ))}
            </ol>
          )}
          {s.table && (
            <div className="mt-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-sm">
                  <caption className="px-4 pt-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {s.table.caption}
                  </caption>
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white tabular-nums dark:divide-slate-800 dark:bg-slate-950">
                    {s.table.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-4 py-2 ${j === row.length - 1 ? "font-semibold text-emerald-700 dark:text-emerald-400" : "text-slate-700 dark:text-slate-300"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {s.table.note && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.table.note}</p>}
            </div>
          )}
          {s.links && s.links.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}
