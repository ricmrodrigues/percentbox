import type { Guide } from "./types";

const published = "2026-09-05";
const updated = "2026-09-26";

export const financeGuides: Guide[] = [
  {
    slug: "markup-vs-margin-explained",
    title: "Markup vs Margin Explained",
    description:
      "Why a 40% markup is not a 40% margin, with the two formulas, a conversion table, and the pricing mistakes that erase a freelance profit.",
    published,
    updated,
    relatedTools: ["markup-calculator"],
    relatedGuides: ["how-to-calculate-percentages", "sales-tax-versus-vat"],
    faqs: [
      {
        q: "Which one divides by cost, and which by the selling price?",
        a: "Markup divides profit by cost. Margin divides profit by the selling price. The same euros of profit are a larger markup percent than margin percent, because cost is the smaller base.",
      },
      {
        q: "How do I turn a desired margin into a price?",
        a: "Selling price = cost / (1 − margin as a decimal). A 40% margin on a €50 cost is 50 / 0.60 ≈ €83.33. You cannot multiply the cost by 1.40 — that would be a 40% markup, which is only about a 28.6% margin.",
      },
      {
        q: "Can margin be 100% or more?",
        a: "A 100% margin would mean the entire selling price is profit and the cost is zero, so the formula divides by zero. Margins at or above 100% are not meaningful for a positive cost. Markups can be well above 100%: a €20 cost sold for €50 is a 150% markup and a 60% margin.",
      },
    ],
    body: `
A café owner once told me her cakes were “40% profit” and, in the next sentence, that she multiplied the ingredient cost by 1.4. Those are different policies. One is a **margin** (profit as a share of the price the customer pays). The other is a **markup** (profit as a share of what the cake cost her). The euros in the middle can be calculated either way. The percents are not interchangeable, and using the wrong one is how a “healthy margin” becomes a price that does not cover the tin, let alone the rent.

The [markup calculator](/markup-calculator) converts among cost, selling price, markup, and margin. You still have to decide which percent your supplier, your client, or your own rule was talking about.

## The two ratios

Let cost be C and selling price be S. Profit is S − C. Assume S is greater than C and both are positive.

Markup = (S − C) / C × 100%

Margin = (S − C) / S × 100%

**Cost €50, markup 40%.** Profit = 0.40 × 50 = €20. Selling price = €70. Margin = 20 / 70 ≈ **28.57%**. You marked up 40% and your margin is under 30%.

**Cost €50, margin 40%.** The €50 cost is 60% of the selling price, because 100% − 40% = 60%. Selling price = 50 / 0.60 ≈ **€83.33**. Profit ≈ €33.33. Markup = 33.33 / 50 ≈ **66.67%**.

Same word “40,” two prices, €13 apart. On a product you sell every day, that gap is the business.

| Cost | Policy | Sell price | Profit | The other percent |
| --- | --- | --- | --- | --- |
| €50 | 40% markup | €70.00 | €20.00 | margin ≈ 28.6% |
| €50 | 40% margin | €83.33 | €33.33 | markup ≈ 66.7% |
| €80 | sell at €100 | €100 | €20 | markup 25%, margin 20% |
| €20 | sell at €50 | €50 | €30 | markup 150%, margin 60% |
| €15 | 25% markup | €18.75 | €3.75 | margin 20% |

The €80 to €100 row is the one to memorize as a pair: **25% markup and 20% margin are the same deal.** If a wholesaler says “we work on 25” and a retailer says “I need 20 points,” they might already agree and not know it. Ask which base.

## From one percent to the other

You do not need a new story, only algebra.

Given markup m (as a decimal), margin = m / (1 + m). A 40% markup: 0.40 / 1.40 ≈ 0.2857 = **28.57% margin**.

Given margin g (as a decimal), markup = g / (1 − g). A 40% margin: 0.40 / 0.60 ≈ 0.6667 = **66.67% markup**.

The second formula is why margins near 100% explode. A 90% margin means markup = 0.90 / 0.10 = 900%. A 100% margin is division by zero. If a spreadsheet shows a margin over 100%, the cost was entered as zero, negative, or above the price (which is a loss, and the “margin” should be discussed as negative, not as a proud percent).

Selling price from markup is the friendly one: S = C × (1 + m).

Selling price from margin is the one people avoid and then regret avoiding: S = C / (1 − g). It feels like an extra step because you divide instead of multiply. The division is the entire correction for the fact that the percent lives on the larger number.

## A freelance day rate, fully loaded

Ingredients are rarely the whole cost. Suppose a designer’s hard cost for a small logo package is:

- Stock assets and fonts, €30
- Software slice for the week, €20
- Subcontractor illustration, €100

Direct cost = **€150**. She wants a **30% margin** so that profit contributes to tax, slow months, and the hours of revision she did not list as a cost. Selling price = 150 / 0.70 ≈ **€214.29**.

If she instead “adds 30%” (a markup), she invoices €195 and calls it a 30% profit. The margin on €195 is 45 / 195 ≈ **23%**, not 30%. Seven points disappeared into the definition. Whether 23% is enough is a business question. Pretending it is 30% is an accounting question with a wrong answer.

Now put a cost she forgot, say €40 of paid ads she ran for the client, into the base. New cost = €190. At a true 30% margin, price = 190 / 0.70 ≈ **€271**. The earlier €214 quote does not merely earn a thinner margin. 214 − 190 = €24 profit, and 24 / 214 ≈ **11% margin**. Forgotten costs do not reduce markup on paper. They reduce margin in the bank, because the selling price was computed from an incomplete C.

This is the practical reason to list costs before touching a percent. The [markup calculator](/markup-calculator) will convert whatever cost you type. It will not remember the software subscription.

## Channel markups stack

A maker sells to a shop at a 30% margin on a €40 cost. Wholesale price = 40 / 0.70 ≈ **€57.14**. The shop applies a **50% markup** (keystone-ish, though classic keystone is doubling, a 100% markup). Retail = 57.14 × 1.50 ≈ **€85.71**.

The customer’s price is not “30 + 50 = 80%” anything. Two businesses took two different percents on two different bases. The maker’s profit is about €17. The shop’s profit is about €28.57 on its own cost (the wholesale price), which is a margin of 28.57 / 85.71 ≈ **33%**, not 50%. The shop’s 50% was a markup. If the shop’s rule was actually a 50% margin, retail would be 57.14 / 0.50 = €114.28, and the product might not sell. Knowing which rule the buyer means is a pricing conversation, not a vocabulary quibble.

## Discounts that eat the margin

You priced €70 from a €50 cost, thinking “40% markup,” and the margin is about 28.6%. A **20% off** sale sets the till at 70 × 0.80 = €56. Profit = €6. Margin = 6 / 56 ≈ **10.7%**. Markup on the original cost is now 6 / 50 = 12%. The banner said 20% off. Your profit rate did not fall by 20% of 28.6 in a neat way you can do from memory; it fell because you gave away €14 of a €20 profit.

A deeper cut: 30% off €70 is €49, which is **below cost**. The sale is a loss of €1 per unit before you count payment fees. “Thirty off” sounded like a cousin of the “forty markup,” and it erased it. Before a promotion, recompute profit from the sale price minus cost. Do not subtract the discount percent from the margin percent. [How discounts work](/guides/how-to-calculate-discounts) is the sale-price half; this section is the “what remains for you” half.

## VAT is not markup

Adding 23% VAT to a €70 net price makes a €86.10 gross. That €16.10 is not profit if you have to remit it. Your margin is still computed on the net amounts: profit versus net selling price, cost versus net cost. Mixing a VAT-inclusive shelf price into the margin formula makes the margin look smaller (the same profit divided by a larger, tax-inflated price) and can trick you into raising prices to “repair” a margin that was never broken. Strip VAT first, then compare. [How to calculate VAT](/guides/how-to-calculate-vat) is the stripping step.

## Mistakes that show up in real quotes

**Multiplying by the margin.** Cost × 1.40 is a 40% markup. It is the wrong button for a 40% margin target.

**Dividing by the markup.** People sometimes do cost / 0.60 because they remember “divide for the tricky one” and use 60% as a generic complement. The complement is 1 minus the **margin**, not 1 minus the markup.

**Using revenue and cost from different tax treatments.** Net with gross, or a cost that is VAT-recoverable treated as if it were not.

**Ignoring fees.** A 3% card fee on an €83.33 charge is about €2.50. If your profit was €33, you still have a business. If your profit was €3.75 on the €18.75 trinket, the fee is most of the profit. Percent fees compose with margin; they are not already inside it unless you put them in C.

**Quoting margin to someone who buys on markup, or the reverse.** Repeat the base in the sentence: “40% on cost” or “40% of the selling price.”

## When to use the markup calculator

Use it when you have a cost and a target percent and you need the price before you say it out loud. Use the “from cost and sell” direction when you already have both numbers — a competitor’s shelf price and your cost — and you want to know what margin that price would imply for you. A pretty margin on their price only transfers if your cost matches theirs.

Use it to translate. If a brief says “maintain 35%,” calculate both interpretations once. The two prices are far enough apart that a one-line clarification (“on cost or on price?”) is cheaper than a year of the wrong invoice.

Do not use it as a full costing model. Overhead, labor hours, waste, and unsold stock never enter a two-number percent. Put those into the cost first, as plainly as you can, then let the percent do the only job it has: scaling that cost into a price on the base you actually meant.
`,
  },
  {
    slug: "compound-interest-basics",
    title: "Compound Interest Basics",
    description:
      "How compounding frequency and regular contributions change a balance, with a simple-interest contrast and the assumptions a calculator quietly makes.",
    published,
    updated,
    relatedTools: ["cagr-calculator", "compound-interest-calculator", "loan-calculator"],
    relatedGuides: ["simple-vs-compound-interest", "effective-annual-rate"],
    faqs: [
      {
        q: "Does compound interest mean I earn interest on the interest?",
        a: "Yes. After the first period, the balance that gets multiplied includes previous interest. That is the whole difference from simple interest, which pays only on the original principal.",
      },
      {
        q: "Is monthly compounding always much better than annual?",
        a: "At ordinary savings rates the gap is real and modest. Five percent annual versus 5% compounded monthly is about 5.12% effective. Over decades, or with contributions, the modest gap is worth seeing. It is not a doubling.",
      },
      {
        q: "Where do contributions fit in the formula?",
        a: "They are a separate series. Each contribution compounds for fewer periods than the original principal. The calculator adds that series; it does not assume the contribution earns a full multi-year factor on day one.",
      },
    ],
    body: `
Compound interest is a repeated multiplication. You earn a rate on whatever is there, the interest stays (or is charged, if you are the borrower), and the next round uses the new total. Simple interest refuses that second step and always uses the original principal. The gap between them is small over a short time at a low rate, and it is the plot of every long savings chart.

The [compound interest calculator](/compound-interest-calculator) projects a balance from a principal, a nominal annual rate, a compounding frequency, a time span, and an optional contribution each period. This page explains what that projection is assuming, so a smooth curve does not get mistaken for a promise.

## The formula, named in pieces

If P is principal, r is the nominal annual rate as a decimal, n is the number of compounding periods per year, and t is years, then with **no** extra contributions:

A = P × (1 + r/n)^(n×t)

The piece (1 + r/n) is the growth factor for one period. You multiply by it once per period. The exponent n×t counts the periods.

**€10,000 at 5% for 10 years, compounded monthly.** r/n = 0.05/12. The exponent is 120. The factor is about 1.647. The balance is about **€16,470**. Interest earned is about €6,470.

**The same money, simple interest at 5%.** Interest each year is 10,000 × 0.05 = €500, and it does not join the principal. Over 10 years that is €5,000. Balance = **€15,000**. Compounding paid about €1,470 more in this example, roughly a 9% larger pile of interest, not a different universe. The story gets louder if you stretch the years. At 30 years the compound balance at 5% monthly is about €44,600, while simple interest would leave €25,000. Same rate label, very different patience.

[Simple versus compound](/guides/simple-vs-compound-interest) stays with that contrast, including the cases (short treasury-style quotes, some loan fees) where simple is the contract you actually signed.

## Frequency is a smaller lever than the rate

Five percent, €10,000, 10 years:

| Compounding | Approximate balance | Effective annual rate |
| --- | --- | --- |
| Annual (n = 1) | €16,289 | 5.00% |
| Quarterly | €16,436 | about 5.09% |
| Monthly | €16,470 | about 5.12% |
| Daily (365) | €16,487 | about 5.13% |

The jump from annual to monthly is about €180 on €10,000 over a decade. The jump from monthly to daily is pocket change by comparison. Chasing a daily-compounding advertisement when the nominal rate is lower is a bad trade: 4.8% compounded daily loses to 5% compounded annually over long horizons. Compare **effective** rates, or just compare the balances the formula produces at your real horizon. [Effective annual rate](/guides/effective-annual-rate) is the single-number version of this table.

A nominal rate is the one in the contract before frequency is applied. An effective rate is what a year of compounding actually does to a balance with no contributions. They are equal only when n = 1.

## Contributions, the part that dominates

The no-contribution formula is a clean classroom object. Households rarely match it. Suppose the same €10,000, 5% monthly, 10 years, plus **€100 contributed at the end of each month**.

There are 120 contributions. They do not all grow for 10 years. The first one compounds for 119 months, the last one for none. The future value of that series is:

PMT × (((1 + r/n)^(n×t) − 1) / (r/n))

when the payment lands at the end of the period and the rate per period is not zero. Plugging in gives a contribution pile of about **€15,530** of future value, of which €12,000 was money you added and about €3,530 is growth on the contributions. Add the principal’s €16,470 and the account is near **€32,000**.

| Piece | What you put in | Where it ends (approx.) |
| --- | --- | --- |
| Opening €10,000 | €10,000 | €16,470 |
| €100 × 120 months | €12,000 | €15,530 |
| Total | €22,000 | about €32,000 |

More than half the ending balance, in this sketch, came from the contributions and their growth, not from the opening cheque. That is normal when the monthly amount is serious relative to the starting principal. It is also why “I don’t have a lump sum, so compound interest isn’t for me” misses the formula’s second term. The calculator’s contribution field is not a decoration.

Timing assumptions hide here. End-of-period versus beginning-of-period contributions shift the result by roughly one period of growth. A calculator should say which one it uses. If it does not, treat the output as a plan, not as a bank statement. PercentBox’s tool follows the standard end-of-period series shown above for the contribution term, on top of a principal that compounds for the full span.

## A rate that is not a savings rate

The same multiplication describes money you **owe**, if interest is compounding and you are not paying it down. A balance of €2,000 at 20% a year, compounded monthly, left alone for 3 years, becomes 2000 × (1 + 0.20/12)^36 ≈ **€3,620**. Nobody should leave a 20% balance untouched; the point is that “20%” without a payment is a compound path, not a one-time fee of €400.

Loans that you do pay monthly are a different formula: the payment is set so the balance hits zero, and interest is charged on the remaining balance each month. That is amortization, explained in [how loan EMI works](/guides/how-loan-emi-works), not a savings projection with a minus sign. Using the compound-interest tool to “see a loan” by typing a negative contribution will not reproduce an amortization schedule unless the contribution happens to equal the exact payment and the compounding convention matches. Use the loan tool for loans.

## What the smooth curve assumes

- The nominal rate does not change. Real savings rates move. A projection at today’s rate is a scenario.
- Every interest credit actually stays in the account. If you skim the interest, you have converted the plan back toward simple interest on the principal, plus whatever you did with the skimmed money.
- Contributions actually happen. A skipped year is not a rounding error; remove those payments from the series.
- Taxes and fees are absent unless you lower the rate or the contribution to mimic them. A 5% return taxed so that you keep 4% should be modeled at 4% if you want the spendable balance, or modeled gross if the account is tax-sheltered and you will think about tax later. Do not mix those stories in one unlabeled number.
- Inflation is absent. €16,470 in ten years buys less than €16,470 today. [Inflation and percent change](/guides/inflation-and-percent-change) is how to name that second percent. A compound projection that ignores it is still useful as a nominal balance. It is a poor answer to “will I feel richer?”

## A worked comparison you can redo

You can save **€200 a month** for **15 years**. You assume **4%** nominal, monthly compounding, starting from zero. The series formula gives a future value around **€49,200**. You contributed 200 × 180 = €36,000. Growth is the rest, about €13,200.

At **7%** the same deposits land near **€63,000**. The extra 3 percentage points are not “3% more money.” They are a different exponent on every contribution. The gap, roughly €14,000 in this sketch, is why rate assumptions deserve a range: run 3%, 5%, and 7%, and treat the middle as a plan only if you can say why that rate is plausible after fees.

None of those runs is a forecast of markets. A bank account can honestly offer a rate. A stock portfolio cannot honestly offer 7% as a contract. If you type 7% you are choosing a scenario, and the calculator is doing arithmetic on it. Label it that way when you show someone the picture.

## When to use the compound interest calculator

Use it to compare frequencies when a bank advertises “daily” as if it were a different product from “monthly” at the same nominal rate. Use it to see how much of an ending balance is contributions versus growth, which keeps the glory attached to the habit rather than to a magic rate. Use it to test “what if I start five years later?” by shortening t, which is usually a harsher result than shaving a percent off the rate.

Do not use it for a fixed monthly loan payment — that is the loan calculator. Do not use it as an investment performance report. And do not read a single run as the future. Two rates and a note about tax will teach you more than one precise-looking cent.
`,
  },
];
