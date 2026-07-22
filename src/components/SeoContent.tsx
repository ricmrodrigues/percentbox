const FAQS = [
  {
    q: "How do I calculate a percentage of a number?",
    a: "Multiply the number by the percentage, then divide by 100. For example, 20% of 150 is (20 ÷ 100) × 150 = 30. Use the “What is X% of Y?” tab above for instant results.",
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
];

export function SeoContent() {
  return (
    <div className="space-y-12">
      <section id="how-it-works" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          How to use this percentage calculator
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
          PercentBox is a free online percentage calculator designed for
          speed and clarity. Pick a mode, type your numbers, and get results
          instantly — no submit button needed. Perfect for schoolwork,
          shopping discounts, restaurant tips, markups, and everyday math.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "What is X% of Y?",
              body: "Find any percentage of a number. Example: What is 15% of 200? Answer: 30.",
            },
            {
              title: "X is what % of Y?",
              body: "Discover the relative size of two numbers. Example: 40 is 20% of 200.",
            },
            {
              title: "Increase / Decrease",
              body: "Raise or lower a value by a percent. Example: 100 increased by 12% = 112.",
            },
            {
              title: "Percentage Change",
              body: "Measure growth or decline from A to B. From 50 to 75 is a 50% increase.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Common percentage formulas
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3">Goal</th>
                <th className="px-4 py-3">Formula</th>
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
                  % increase / decrease
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
    </div>
  );
}
