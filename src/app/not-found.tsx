import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-sm font-semibold text-emerald-600">404</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            That URL does not exist. Try the free percentage calculator or one
            of the tools below.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Go to calculator
          </Link>
          <div className="mt-12 text-left">
            <RelatedTools />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
