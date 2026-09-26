import Link from "next/link";
import {
  parseGuideMarkdown,
  parseInline,
  type InlinePart,
} from "@/lib/guide-markdown";

function Rich({ text }: { text: string }) {
  const parts = parseInline(text);
  return (
    <>
      {parts.map((part, i) => (
        <Inline key={i} part={part} />
      ))}
    </>
  );
}

function Inline({ part }: { part: InlinePart }) {
  if (part.type === "strong") return <strong className="text-slate-900 dark:text-white">{part.text}</strong>;
  if (part.type === "code") {
    return (
      <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.9em] text-emerald-800 dark:bg-slate-800 dark:text-emerald-300">
        {part.text}
      </code>
    );
  }
  if (part.type === "link") {
    const external = part.href.startsWith("http");
    if (external) {
      return (
        <a
          href={part.href}
          className="font-medium text-emerald-700 underline dark:text-emerald-400"
          rel="noopener noreferrer"
          target="_blank"
        >
          {part.text}
        </a>
      );
    }
    return (
      <Link
        href={part.href}
        className="font-medium text-emerald-700 underline dark:text-emerald-400"
      >
        {part.text}
      </Link>
    );
  }
  return <>{part.text}</>;
}

export function GuideBody({ markdown }: { markdown: string }) {
  const blocks = parseGuideMarkdown(markdown);
  return (
    <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="pt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="pt-3 text-lg font-semibold text-slate-900 dark:text-white"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const List = block.type === "ol" ? "ol" : "ul";
          return (
            <List
              key={i}
              className={
                block.type === "ol"
                  ? "list-decimal space-y-2 pl-5"
                  : "list-disc space-y-2 pl-5"
              }
            >
              {block.items.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </List>
          );
        }
        if (block.type === "note") {
          return (
            <aside
              key={i}
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100"
            >
              <Rich text={block.text} />
            </aside>
          );
        }
        if (block.type === "table") {
          return (
            <div
              key={i}
              className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                  <tr>
                    {block.headers.map((h) => (
                      <th key={h} scope="col" className="px-4 py-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
                  {block.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 text-slate-700 dark:text-slate-300"
                        >
                          <Rich text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={i}>
            <Rich text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
