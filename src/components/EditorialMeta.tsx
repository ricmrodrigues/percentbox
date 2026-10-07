import Link from "next/link";
import { PUBLISHER_NAME } from "@/lib/seo";
import { formatIsoDate } from "@/lib/site-meta";

/** Visible author + last-updated line linking to About and the changelog. */
export function EditorialMeta({ updated }: { updated: string }) {
  return (
    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
      Written and maintained by{" "}
      <Link href="/about" className="font-medium text-emerald-700 underline dark:text-emerald-400">
        {PUBLISHER_NAME}
      </Link>
      {" · "}Last updated <time dateTime={updated}>{formatIsoDate(updated)}</time>
      {" · "}
      <Link href="/changelog" className="font-medium text-emerald-700 underline dark:text-emerald-400">
        What changed
      </Link>
    </p>
  );
}
