import Link from "next/link";
import {
  AFFILIATE_COPY,
  AFFILIATE_PLACEMENTS,
  AFFILIATE_URLS,
  type AffiliateProgram,
} from "@/lib/affiliates";

export function AffiliateBox({ program }: { program: AffiliateProgram }) {
  const url = AFFILIATE_URLS[program];
  if (!url) return null;
  const copy = AFFILIATE_COPY[program];
  return (
    <aside className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Ad · affiliate link
      </p>
      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{copy.title}</p>
      <p className="mt-1 text-slate-600 dark:text-slate-400">{copy.body}</p>
      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-3 inline-block rounded-lg bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700"
      >
        {copy.cta} →
      </a>
      <p className="mt-3 text-xs text-slate-500">
        If you sign up through this link we may earn a commission, at no extra
        cost to you. It does not change any calculator result.{" "}
        <Link href="/how-we-make-money" className="underline">
          How we make money
        </Link>
      </p>
    </aside>
  );
}

/** Renders the boxes configured for this tool; nothing if no URL is set. */
export function AffiliateSlot({ slug, className }: { slug: string; className?: string }) {
  const programs = (AFFILIATE_PLACEMENTS[slug] ?? []).filter((p) => AFFILIATE_URLS[p]);
  if (programs.length === 0) return null;
  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {programs.map((p) => (
        <AffiliateBox key={p} program={p} />
      ))}
    </div>
  );
}
