import Link from "next/link";
import { formatNum } from "@/lib/phase-a";

/**
 * Small reference tables computed from the same formulas as the calculators,
 * so each tool page carries a lookup that is specific to its own question.
 */

type Table = { caption: string; head: string[]; rows: (string | number)[][]; note?: string };

const r2 = (n: number) => formatNum(n, 2);

function tablesFor(slug: string): Table[] {
  switch (slug) {
    case "what-is-x-percent-of-y":
    case "percentage-calculator": {
      const pcts = [5, 10, 15, 20, 25, 50];
      const bases = [40, 80, 250, 1200];
      return [
        {
          caption: "Quick reference: X% of Y",
          head: ["%", ...bases.map(String)],
          rows: pcts.map((p) => [`${p}%`, ...bases.map((b) => r2((p / 100) * b))]),
          note: "Each column is one base. Reading across shows how the same percent scales with the base.",
        },
      ];
    }
    case "x-is-what-percent-of-y": {
      const outOf = [20, 40, 50, 60];
      const scores = [0.5, 0.65, 0.75, 0.9];
      return [
        {
          caption: "Test scores as percentages",
          head: ["Points out of", ...scores.map((s) => `${s * 100}% needs`)],
          rows: outOf.map((o) => [String(o), ...scores.map((s) => r2(s * o))]),
          note: "How many points equal a given percentage on tests of different lengths. For several tests with different weights, use the weighted grade calculator.",
        },
      ];
    }
    case "percentage-increase-calculator":
    case "percentage-decrease-calculator": {
      const ps = [10, 20, 25, 50, 75];
      return [
        {
          caption: "A rise and a fall of the same percent do not cancel",
          head: ["Change", "100 after rise", "Then fall by same %", "Net change", "Fall needed to undo rise"],
          rows: ps.map((p) => {
            const up = 100 * (1 + p / 100);
            const back = up * (1 - p / 100);
            return [`${p}%`, r2(up), r2(back), `${r2(back - 100)}%`, `${r2((1 - 100 / up) * 100)}%`];
          }),
        },
      ];
    }
    case "percentage-change-calculator": {
      const pairs: [number, number][] = [[80, 100], [100, 80], [50, 75], [75, 50], [200, 50]];
      return [
        {
          caption: "Direction matters: A → B vs B → A",
          head: ["From", "To", "Percent change"],
          rows: pairs.map(([a, b]) => [a, b, `${r2(((b - a) / a) * 100)}%`]),
          note: "The base is always the starting value, so swapping the order changes the answer. For percent difference with no natural starting point, see the percent error guide.",
        },
      ];
    }
    case "tip-calculator": {
      const bills = [20, 45, 80, 150];
      const tips = [10, 15, 18, 20];
      return [
        {
          caption: "Tip amounts by bill and rate",
          head: ["Bill", ...tips.map((t) => `${t}%`)],
          rows: bills.map((b) => [r2(b), ...tips.map((t) => r2((t / 100) * b))]),
          note: "Tipping customs differ widely by country and venue; this table is arithmetic, not etiquette advice.",
        },
      ];
    }
    case "discount-calculator": {
      const combos: [number, number][] = [[10, 10], [20, 10], [20, 20], [30, 20], [50, 20], [50, 50]];
      return [
        {
          caption: "Stacked discounts are not additive",
          head: ["First", "Then", "Price of 100 after both", "Real total discount", "Naive sum"],
          rows: combos.map(([a, b]) => {
            const p = 100 * (1 - a / 100) * (1 - b / 100);
            return [`${a}%`, `${b}%`, r2(p), `${r2(100 - p)}%`, `${a + b}%`];
          }),
        },
      ];
    }
    case "markup-calculator": {
      const ms = [10, 20, 25, 33.33, 50, 100];
      return [
        {
          caption: "Markup on cost and the margin it produces",
          head: ["Markup", "Sell price (cost 100)", "Margin"],
          rows: ms.map((m) => [`${r2(m)}%`, r2(100 * (1 + m / 100)), `${r2((m / (100 + m)) * 100)}%`]),
          note: "Margin is always smaller than the markup that produced it, because margin divides the same profit by the larger sell price.",
        },
      ];
    }
    case "vat-calculator": {
      return [
        {
          caption: "Standard VAT rates used in the presets (checked 7 October 2026)",
          head: ["Country / region", "Standard", "Reduced rates", "VAT share of a gross price"],
          rows: [
            ["Portugal (mainland)", "23%", "13%, 6%", `${r2((23 / 123) * 100)}%`],
            ["Portugal (Madeira)", "22%", "12%, 4%", `${r2((22 / 122) * 100)}%`],
            ["Portugal (Azores)", "16%", "9%, 4%", `${r2((16 / 116) * 100)}%`],
            ["Spain", "21%", "10%, 4%", `${r2((21 / 121) * 100)}%`],
            ["France", "20%", "10%, 5.5%, 2.1%", `${r2((20 / 120) * 100)}%`],
            ["Germany", "19%", "7%", `${r2((19 / 119) * 100)}%`],
            ["Italy", "22%", "10%, 5%, 4%", `${r2((22 / 122) * 100)}%`],
            ["Ireland", "23%", "13.5%, 9%, 4.8%", `${r2((23 / 123) * 100)}%`],
            ["Netherlands", "21%", "9%", `${r2((21 / 121) * 100)}%`],
            ["United Kingdom", "20%", "5%, 0%", `${r2((20 / 120) * 100)}%`],
          ],
          note: "Which rate applies depends on the product or service and on place-of-supply rules. Always confirm with the tax authority before invoicing.",
        },
      ];
    }
    case "compound-interest-calculator": {
      const n: [string, number][] = [["Yearly", 1], ["Quarterly", 4], ["Monthly", 12], ["Daily", 365]];
      return [
        {
          caption: "1,000 at 5% nominal for 10 years, by compounding frequency",
          head: ["Compounding", "Value after 10 years", "Effective annual rate"],
          rows: n.map(([l, k]) => [l, r2(1000 * (1 + 0.05 / k) ** (10 * k)), `${formatNum(((1 + 0.05 / k) ** k - 1) * 100, 3)}%`]),
          note: "Frequency matters less than the rate and the time. Going from yearly to daily adds about 0.13 percentage points of effective rate at 5%.",
        },
      ];
    }
    case "loan-calculator": {
      const rates = [3, 5, 7];
      const pay = (P: number, a: number, y: number) => {
        const r = a / 1200;
        const k = y * 12;
        return (P * r * (1 + r) ** k) / ((1 + r) ** k - 1);
      };
      return [
        {
          caption: "Monthly payment and total interest on 100,000",
          head: ["Rate", "15 years / month", "30 years / month", "Total interest 15y", "Total interest 30y"],
          rows: rates.map((a) => [
            `${a}%`,
            r2(pay(100000, a, 15)),
            r2(pay(100000, a, 30)),
            r2(pay(100000, a, 15) * 180 - 100000),
            r2(pay(100000, a, 30) * 360 - 100000),
          ]),
          note: "Fixed-rate amortising loan, monthly payments, no fees. Longer terms lower the payment and raise the total interest.",
        },
      ];
    }
    case "percentage-point-calculator": {
      const pairs: [number, number][] = [[1, 2], [2, 3], [4, 5], [10, 11], [40, 41]];
      return [
        {
          caption: "The same 1-point move is a very different relative change",
          head: ["Old rate", "New rate", "Point change", "Relative change"],
          rows: pairs.map(([a, b]) => [`${a}%`, `${b}%`, `+${b - a} pp`, `+${r2(((b - a) / a) * 100)}%`]),
        },
      ];
    }
    case "cagr-calculator": {
      const totals = [25, 50, 100, 200];
      const yrs = [3, 5, 10];
      return [
        {
          caption: "CAGR for a given total growth and period",
          head: ["Total growth", ...yrs.map((y) => `${y} years`)],
          rows: totals.map((t) => [`${t}%`, ...yrs.map((y) => `${r2(((1 + t / 100) ** (1 / y) - 1) * 100)}%`)]),
          note: "Doubling (100% total growth) over 10 years is about 7.18% a year, not 10%.",
        },
      ];
    }
    case "weighted-grade-calculator": {
      return [
        {
          caption: "Score needed on a final worth 50%, by current average and target",
          head: ["Current average (other 50%)", "Target 70%", "Target 80%", "Target 90%"],
          rows: [60, 70, 80, 90].map((c) => [`${c}%`, ...[70, 80, 90].map((t) => {
            const need = 2 * t - c;
            return need > 100 ? "not reachable" : `${need}%`;
          })]),
          note: "With a 50/50 split, needed = 2 × target − current. Other weights change the slope; use the calculator above.",
        },
      ];
    }
    default:
      return [];
  }
}

const SOURCES: Record<string, { label: string; href: string }[]> = {
  "vat-calculator": [
    { label: "European Commission — Your Europe: VAT rates applied in EU member countries", href: "https://europa.eu/youreurope/business/finance-and-tax/vat/vat-rules-rates/index_en.htm" },
    { label: "Portal das Finanças — Código do IVA, artigo 18.º (mainland rates 23% / 13% / 6%)", href: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva18.aspx" },
    { label: "Autoridade Tributária — Ofício Circulado 25045/2024 (Açores 16% / 9% / 4%; Madeira 22% / 12% / 4% since 1 Oct 2024)", href: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Documents/Oficio_circulado_25045_2024.pdf" },
    { label: "GOV.UK — VAT rates", href: "https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services" },
  ],
};

export function ToolExtras({ slug }: { slug: string }) {
  const tables = tablesFor(slug);
  const sources = SOURCES[slug];
  if (tables.length === 0) return null;
  return (
    <section aria-labelledby="comparison-heading">
      <h2 id="comparison-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        Comparison table
      </h2>
      {tables.map((t) => (
        <div key={t.caption} className="mt-4">
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <caption className="px-4 pt-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t.caption}
              </caption>
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  {t.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-950">
                {t.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-2 ${j === 0 ? "font-medium text-slate-800 dark:text-slate-200" : "text-slate-600 dark:text-slate-400"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {t.note && <p className="mt-2 max-w-3xl text-sm text-slate-500 dark:text-slate-400">{t.note}</p>}
        </div>
      ))}
      {sources && (
        <div className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
          <p className="font-semibold">Sources</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {sources.map((s) => (
              <li key={s.href}>
                <Link href={s.href} rel="noopener" className="text-emerald-700 underline dark:text-emerald-400">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
