import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

const FAQS = [
  {
    q: "How do I calculate a percentage of a number?",
    a: "Multiply the number by the percentage, then divide by 100. For example, 20% of 150 is (20 ÷ 100) × 150 = 30. Use the “What is X% of Y?” mode above for instant results.",
  },
  {
    q: "How do I find what percent one number is of another?",
    a: "Divide the first number by the second, then multiply by 100. Example: 25 is what percent of 200? (25 ÷ 200) × 100 = 12.5%.",
  },
  {
    q: "How is percentage increase calculated?",
    a: "Percentage change = ((new − original) ÷ |original|) × 100. If a price goes from $80 to $100, the increase is ((100 − 80) ÷ 80) × 100 = 25%.",
  },
  {
    q: "How do I calculate a tip?",
    a: "Multiply the bill by the tip percentage divided by 100. An 18% tip on $64.50 is 0.18 × 64.50 = $11.61, for a total of $76.11. Our tip calculator can also split the bill.",
  },
  {
    q: "How do I calculate a discount?",
    a: "Savings = original price × (discount % ÷ 100). Final price = original − savings. A 25% off $79.99 item costs $59.99 and saves you $20.00.",
  },
  {
    q: "What is the difference between percentage change and percentage points?",
    a: "Percentage change is relative to the original value (e.g. from 10% to 15% interest is a 50% increase). Percentage points measure absolute difference (that same move is 5 percentage points).",
  },
  {
    q: "Can I use this percentage calculator on my phone?",
    a: "Yes. PercentBox is mobile-first and works in modern browsers on phones, tablets, and desktops without installing an app.",
  },
  {
    q: "Is PercentBox free to use?",
    a: "Yes. All calculators are free, with no account or signup required. Ads may appear to support the site.",
  },
];

const WORKED = [
  { q: "What is 15% of 200?", a: "30", href: "/what-is-x-percent-of-y" },
  { q: "What is 20% of 50?", a: "10", href: "/what-is-x-percent-of-y" },
  { q: "25 is what % of 100?", a: "25%", href: "/x-is-what-percent-of-y" },
  {
    q: "Increase 80 by 25%",
    a: "100",
    href: "/percentage-increase-calculator",
  },
  { q: "From 80 to 100 change", a: "25%", href: "/percentage-change-calculator" },
  {
    q: "18% tip on $64.50",
    a: "Tip $11.61 · Total $76.11",
    href: "/tip-calculator",
  },
  {
    q: "30% off $99.99",
    a: "Pay $69.99 · Save $30",
    href: "/discount-calculator",
  },
];

export function SeoContent() {
  return (
    <div className="space-y-12">
      <section id="how-it-works" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          How to use this percentage calculator
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
          PercentBox is a free online percentage calculator designed for speed
          and clarity. Pick a mode, type your numbers, and get results instantly
          — no submit button needed. Perfect for schoolwork, shopping discounts,
          restaurant tips, markups, and everyday math.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "What is X% of Y?",
              body: "Find any percentage of a number. Example: What is 15% of 200? Answer: 30.",
              href: "/what-is-x-percent-of-y",
            },
            {
              title: "X is what % of Y?",
              body: "Discover the relative size of two numbers. Example: 40 is 20% of 200.",
              href: "/x-is-what-percent-of-y",
            },
            {
              title: "Increase / Decrease",
              body: "Raise or lower a value by a percent. Example: 100 increased by 12% = 112.",
              href: "/percentage-increase-calculator",
            },
            {
              title: "Percentage Change",
              body: "Measure growth or decline from A to B. From 50 to 75 is a 50% increase.",
              href: "/percentage-change-calculator",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800"
            >
              <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {card.body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="worked-examples">
        <h2
          id="worked-examples"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Popular worked examples
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Static examples search engines can index — open a tool to recalculate
          with your own numbers.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Popular percentage calculation examples with answers
            </caption>
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Question
                </th>
                <th scope="col" className="px-4 py-3">
                  Answer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
              {WORKED.map((row) => (
                <tr key={row.q}>
                  <td className="px-4 py-3">
                    <Link
                      href={row.href}
                      className="text-slate-700 underline-offset-2 hover:text-emerald-700 hover:underline dark:text-slate-300 dark:hover:text-emerald-400"
                    >
                      {row.q}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-700 dark:text-emerald-400">
                    {row.a}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Common percentage formulas
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Percentage formulas reference</caption>
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Goal
                </th>
                <th scope="col" className="px-4 py-3">
                  Formula
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  X% of Y
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  (X ÷ 100) × Y
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  X is what % of Y
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  (X ÷ Y) × 100
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  % increase / decrease (change)
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  ((new − old) ÷ |old|) × 100
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  Value after % change
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  value × (1 ± percent/100)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  Tip total
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  bill + bill × (tip% ÷ 100)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  Sale price
                </td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700 dark:text-emerald-400 sm:text-sm">
                  price × (1 − discount%/100)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Frequently asked questions
        </h2>
        <dl className="mt-5 space-y-4">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="font-semibold text-slate-900 dark:text-white">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <RelatedTools />
    </div>
  );
}

export { FAQS as HOME_FAQS };
