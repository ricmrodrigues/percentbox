import type { Guide } from "./types";

const published = "2026-09-26";
const updated = "2026-09-26";

export const moreGuidesA: Guide[] = [
  {
    slug: "reverse-percentages",
    title: "Reverse Percentages",
    description:
      "Recover the original number when you only know the result after a percent was added or removed, including VAT-inclusive prices and “before the discount” tags.",
    published,
    updated,
    relatedTools: ["x-is-what-percent-of-y", "vat-calculator", "discount-calculator"],
    relatedGuides: ["how-to-calculate-vat", "how-to-calculate-discounts", "common-percentage-mistakes"],
    faqs: [
      {
        q: "Why can’t I subtract 20% to undo a 20% increase?",
        a: "The increase was 20% of the original, not 20% of the result. The result is 120% of the original, so you divide by 1.20. Subtracting 20% of the result removes too much.",
      },
      {
        q: "What do I divide by after a discount?",
        a: "Divide by the fraction that remains. After 30% off, the sale price is 70% of the original, so divide by 0.70.",
      },
    ],
    body: `
A reverse percentage starts from the end. You know what the number became after someone added or removed a percent, and you want the number from before. The forward formulas multiply. The reverse formulas divide by the same factor. Almost every error in this family is a subtraction that felt like an undo key and was not.

## After an increase

If a value grew by p percent, the result equals original × (1 + p/100). So:

original = result / (1 + p/100)

**A bill is €115 after a 15% service charge.** Original = 115 / 1.15 = **€100**. Check: 15% of 100 is 15.

Subtracting 15% of 115 instead: 115 × 0.15 = 17.25, and 115 − 17.25 = 97.75. Then 97.75 × 1.15 ≈ 112.41, not 115. You overshot. The percent you subtracted was a percent of the wrong base — the enlarged one.

**A salary is €48,000 after a 4% raise.** Previous = 48000 / 1.04 ≈ **€46,153.85**. The raise itself was about €1,846, which is 4% of the old salary, not 4% of the new one (4% of 48,000 is €1,920, a common wrong answer that then fails the check: 46,080 × 1.04 = 47,923, not 48,000).

## After a decrease

original = result / (1 − p/100)

The divisor must stay positive, so p cannot be 100 or more. A 100% decrease leaves zero, and you cannot uniquely recover a starting value from zero.

**You paid €70 after 30% off.** original = 70 / 0.70 = **€100**.

**A stock index is at 8,000 after a 20% drop.** Previous = 8000 / 0.80 = **10,000**. People say “it needs to rise 20% to recover.” It needs to rise 2,000 on a base of 8,000, which is **25%**. The reverse of a percent drop is not the same percent rise. That asymmetry is the heart of [common percentage mistakes](/guides/common-percentage-mistakes).

## VAT and tax included

A gross price is a reverse-percentage problem in work clothes. Net = gross / (1 + rate/100). At 23%, divide by 1.23. At 20%, divide by 1.20. The [VAT calculator](/vat-calculator) extract mode is this division with the tax line shown separately. Doing it by hand matters when you want to see why “23% of the gross” is the wrong tax. Full examples live in [how to calculate VAT](/guides/how-to-calculate-vat).

## Two steps, still reversible

A price was increased 10%, then discounted 10%. The combined factor is 1.10 × 0.90 = 0.99. If you pay €99, the original was 99 / 0.99 = **€100**. You are not back by coincidence of “+10 and −10”; the factors multiply to 0.99, so you are 1% down, and the reverse divides by 0.99.

If you know only the final price and only one of the percents, you cannot uniquely split the history. Reverse percentages need the rate. They do not infer it. If the rate is what you are missing, you need both the before and the after, which is ordinary [percent change](/guides/percentage-change-from-a-to-b), not a reverse.

## A worksheet of undos

| You see | Rate already applied | Divide by | Original |
| --- | --- | --- | --- |
| €86.10 | VAT added at 23% | 1.23 | €70.00 |
| €56 | 30% off | 0.70 | €80.00 |
| €1,250 | 25% raise | 1.25 | €1,000 |
| 76 marks | a curve that added 10% of the raw score | 1.10 | about 69.1 |
| €48 | “20% smaller than last year” | 0.80 | €60 |

Read the verb before you pick the row. “20% smaller than last year” is a decrease, divisor 0.80. “20% of last year” would be a different sentence and a different original (if 48 is 20% of last year, last year was 240). The word **than** usually signals a change. The word **of** usually signals a share. Reverse percentages are for the change case, when the rate is known and the start is not.

The marks row is easy to misread in the other direction. If a teacher added 10 **percentage points** to a percent score, you subtract 10 points; you do not divide by 1.10. “Added 10% of the raw score” is a relative bump and does divide. [Percentage points](/guides/percentage-increase-vs-percentage-points) is the vocabulary. This table assumes the relative reading because that is the one division undoes.

## Fees that are not a pure percent

A €100 item with 20% off and then a €5 shipping fee is not a reverse-percent puzzle until you remove the fee. Sale price of the item = (amount you paid − shipping) only if shipping was added after the discount and was not itself discounted. If you paid €85 all-in and shipping was €5, the discounted item was €80, and the pre-discount price at 20% off was 80 / 0.80 = €100. If you divide 85 by 0.80 you get €106.25 and you have treated the shipping as if it had been discounted too. Peel off flat fees first. Then divide once.

Successive percents still use one combined divisor. Ten percent off and then another ten percent off is a pay factor of 0.81, so a €81 tag came from €100, not from 81 / 0.90 / 0.90 done in the wrong order — those two orders happen to match, which is comforting, and a fixed fee in the middle of them would not.

## When to use a calculator

Use the forward tools to check: take your recovered original, apply the percent, and demand the result you started with. If it misses, you subtracted instead of dividing. Use reverse division whenever a tag, a payslip, or a tax-inclusive total is the only number printed and the rate is stated next to it. If the rate is not stated, stop. Inventing “probably 20%” is not a reverse percentage. It is a guess with extra steps. The [discount calculator](/discount-calculator) checks the forward direction. The [VAT calculator](/vat-calculator) extract mode is the tax-shaped version of the same division. Neither tool can infer a rate you do not have.
`,
  },
  {
    slug: "percentage-change-from-a-to-b",
    title: "Percentage Change from A to B",
    description:
      "How to measure growth or decline between two numbers, why the base is the starting value, and how this differs from a gap in percentage points.",
    published,
    updated,
    relatedTools: ["percentage-change-calculator", "percentage-increase-calculator"],
    relatedGuides: ["percentage-increase-vs-percentage-points", "inflation-and-percent-change"],
    faqs: [
      {
        q: "Which number do I divide by?",
        a: "The starting value, often called the old or original value. Change from 80 to 100 divides the gap of 20 by 80, not by 100.",
      },
      {
        q: "What if the values fall?",
        a: "The numerator goes negative and the percent change is negative. A drop from 100 to 80 is −20%. Say “20% decrease” if you would rather keep the words positive and the direction in the verb.",
      },
    ],
    body: `
Percentage change answers a before-and-after question: compared with where we started, how large is the move? It is not “what percent is A of B,” and it is not the subtraction of two rates that are already percents. Those are neighboring tools. Mixing them up is how a 25% increase and a 10 percentage-point increase get reported as if they were synonyms.

## The formula

Percent change = (new − old) / |old| × 100

**From 80 to 100.** (20 / 80) × 100 = **+25%**.

**From 100 to 80.** (−20 / 100) × 100 = **−20%**.

**From 250 to 250.** **0%**. Nothing happened, and the formula agrees.

**From 40 to 10.** (−30 / 40) × 100 = **−75%**. A quarter of the start remains. People sometimes say “down by a factor of four” and sometimes “down 75%.” Both can be right: 10 is one fourth of 40, and the decline is three fourths of 40. Say which comparison you mean if the audience is tired.

The absolute value around the old number matters when the old number is negative, which is rare for prices and common for profit. Going from a loss of 20 to a loss of 10 is an improvement. The signed story gets political quickly (“percent change in profit”). For ordinary positive quantities — prices, headcount, kilograms — |old| is just old, and the sign of the result matches the direction of the move.

## A table of everyday moves

| From | To | Gap | Percent change | Plain words |
| --- | --- | --- | --- | --- |
| 50 | 75 | +25 | +50% | up by half |
| 75 | 50 | −25 | −33.33% | down by a third |
| 200 | 250 | +50 | +25% | a quarter more |
| 8 | 12 | +4 | +50% | half again |
| 1 | 2 | +1 | +100% | doubled |
| 2 | 1 | −1 | −50% | halved |

Doubling is +100%, not +200%. Tripling is +200%, because you added twice the original. “Percent of” and “percent change” split on this point: 200% of 2 is 4, while a 200% increase of 2 is 6. If a sentence is ambiguous, force it to pick “of” or “increase.”

## What the formula is not

It is not the difference of two percentages. Unemployment moving from 5% to 7% is **2 percentage points**. The relative change in that rate is (7 − 5) / 5 = **40%**. Both numbers are computable. Only the second one is “percentage change” in the sense of this page. The vocabulary is sorted in [percentage increase versus percentage points](/guides/percentage-increase-vs-percentage-points).

It is not a speed. “Up 10%” does not say per year unless you say per year. A 10% rise over five years is a different path from 10% a year for five years (that second path compounds to about 61%). If time is part of the claim, put time in the sentence, then decide whether you need this formula once or the [compound interest](/guides/compound-interest-basics) formula repeatedly.

It is undefined when the start is zero. From 0 to 15 there is no percent change to report. Report the absolute change. Dashboards that show thousands of percent because last month was almost zero are dividing by a crumb. Read the counts.

## Successive changes

A price goes 100 → 120 → 90.

- First leg: +20%
- Second leg: (90 − 120) / 120 = **−25%**
- Overall: (90 − 100) / 100 = **−10%**

You cannot add +20 and −25 to get the overall −5. The factors are 1.20 × 0.75 = 0.90, which is −10%, matching the overall formula. When you only have the leg percents and not the endpoints, multiply the factors. When you have the endpoints, ignore the legs and use the endpoints. Doing both and averaging them is not a method.

## When to use the percentage change calculator

Use the [percentage change calculator](/percentage-change-calculator) when both numbers are measurements of the same thing at two times or in two versions: a fare, a weight, a follower count, a bill. Put the earlier one in the “old” slot even if it is larger.

Use the increase or decrease calculators instead when you are given a rate and one value and you want the other value. Use percentage points, said out loud, when both inputs are already percents and you only subtracted.

## Worked comparisons that are not changes

A class goes from 28 students to 35. That is a change: (35 − 28) / 28 ≈ **25%**. “35 is what percent of 28” is **125%**, which is the new size as a share of the old size, equal to 100% plus the 25% increase. Both numbers describe the same pair. Reporting 125% as “attendance rose 125%” adds an extra hundred points of excitement the formula did not earn. If the sentence contains “rose,” “fell,” “up,” or “down,” you want the change, and the answer should be able to go negative. If the sentence contains “what percent is,” you want the ratio, and it is usually positive.

A price index level of 110 versus 100 is a 10% change and also “110% of the old index.” News copy that says the index “is at 110%” often means the level, not the change. Ask whether 100 is still in the number.

## Negative bases, briefly

Profit goes from −€20 to +€10. The gap is +€30. Dividing by the absolute value of the old profit gives 30/20 = **150%**, and the sign of the gap says things improved. Some analysts refuse percent change across a sign flip because “percent of a loss” is a story readers mishandle. If you publish it, publish the euro gap beside it. The calculator will emit a number whenever the start is not zero. You decide whether the number deserves a sentence.

For prices across years, a raw percent change still mixes inflation into the story. If you need “more expensive in today’s money,” pair this formula with a price index, as sketched in [inflation and percent change](/guides/inflation-and-percent-change). Use the [percentage change calculator](/percentage-change-calculator) once the two endpoints are the same kind of unit. Do not feed it a rate and a single price; that is the increase tool. If the two numbers are already rates — 5% and 7% — decide whether you wanted this relative change or a subtraction in [percentage points](/guides/percentage-increase-vs-percentage-points) before you copy the result into a sentence someone will act on.
`,
  },
  {
    slug: "stacked-discounts",
    title: "How Stacked Discounts Work",
    description:
      "Successive percent-off promotions multiply; they do not add. Worked stacks, fixed coupons, and a check you can do on a receipt.",
    published,
    updated,
    relatedTools: ["discount-calculator"],
    relatedGuides: ["how-to-calculate-discounts", "common-percentage-mistakes"],
    faqs: [
      {
        q: "Is 50% off plus 50% off free?",
        a: "No. You pay 50% of 50%, which is 25% of the original. The total discount is 75%.",
      },
      {
        q: "Does order matter?",
        a: "Not for two percentage discounts. It matters when one offer is a fixed amount of money, or when a coupon is refused on already-reduced items.",
      },
    ],
    body: `
Stacked discounts are several decreases applied one after another. Each percent acts on whatever price is left, so the combined effect is a product of pay-factors, not a sum of the badges. The difference is small on a modest stack and enormous when the badges are large. “Up to 70% off” plus an extra “20% off” is a genre of sign that needs a calculator more than it needs excitement.

## Multiply the pay factors

Pay factor for a discount d is (1 − d/100). Two discounts:

combined pay factor = factor₁ × factor₂

total percent off = (1 − combined pay factor) × 100

**20% then 10%.** Factors 0.80 and 0.90. Product **0.72**. You pay 72% and save **28%**, not 30%.

On a €250 jacket: after 20% the price is €200; after 10% it is **€180**. A naive 30% off would be €175. Five euros, on this jacket, is the entire content of the mistake. On a €2,500 sofa it is €50. The [discount calculator](/discount-calculator) used twice — once per step — shows the intermediate price, which is the number a cashier can match to the receipt.

| Stack | Factors | Pay | Total off | If you had added the percents |
| --- | --- | --- | --- | --- |
| 10% + 10% | 0.9 × 0.9 | 81% | 19% | 20% off, pay 80% |
| 15% + 10% | 0.85 × 0.9 | 76.5% | 23.5% | 25% off |
| 40% + 25% | 0.6 × 0.75 | 45% | 55% | 65% off |
| 50% + 50% | 0.5 × 0.5 | 25% | 75% | 100% off (free — false) |
| 30% + 20% + 10% | 0.7 × 0.8 × 0.9 | 50.4% | 49.6% | 60% off |

Three discounts feel like they “must” add into something round. 30 + 20 + 10 = 60, and the true discount is just under half. I would rather know I am paying about half than believe I am paying 40%.

## Order, coupons, and exclusions

Pure percents commute: 10% then 20% equals 20% then 10%. A **€15 voucher** does not commute with a percent.

€100 item, 20% off, €15 voucher:

- Percent then voucher: €80 − €15 = **€65**
- Voucher then percent: (€100 − €15) × 0.80 = **€68**

The better order for the shopper is percent first, and it is also the order many terms forbid (“voucher valid on full price only”) or require (“applied at checkout after promotions”). Read the exclusion before you multiply. A stacked-discount calculation that ignores “not combinable” is fan fiction.

Free shipping is not a percent of the item. It is a euro amount you would have paid, and only if you would have paid it. Folding a €5 shipping waiver into a “percent off” the product usually flatters the offer.

## Tax sits outside the stack

Compute the stacked net price first, then [add VAT or sales tax](/guides/how-to-calculate-vat) if the price you started from was exclusive. If the shelf price was already inclusive, the stack applies to the gross and you do not add tax again. The failure mode is stacking a percent off the inclusive price and then adding VAT on the result. That taxes a discount and double-counts the original tax.

## A receipt check

You should be able to point at three numbers: original, price after the first promotion, price after the second. If the receipt only shows the final discount as one line, reconstruct the factors and see whether the final pay factor matches. If it matches a sum instead of a product, the till added the percents and you were over-discounted — rare, and worth a polite question — or you misread one of the rates.

## A till-side example with three numbers

A coat is listed at €180. The seasonal sale is 25% off, and your loyalty code is an extra 15% off the reduced price. Tax is already inside the €180 (the shop is not going to add it again).

1. After 25%: 180 × 0.75 = **€135**.
2. After 15% of €135: 135 × 0.85 = **€114.75**.
3. Combined pay factor: 0.75 × 0.85 = 0.6375, so you pay **63.75%** of €180 and the true discount is **36.25%**, not 40%.

The naive 40% off would have been 180 × 0.60 = €108. The stack costs you €6.75 more than the added-percent fantasy. That is the number to remember when a friend says “it’s basically 40.” It is basically 36, and the basically is doing a few euros of work.

If the loyalty code is “€15 off” instead of 15% off, order matters and the terms matter. Percent then €15: 135 − 15 = €120. €15 then percent: (180 − 15) × 0.75 = €123.75. Three euros, and only if both can be combined. Write the intermediate €135 on the receipt check so a single “discount €65.25” line can be rebuilt. If you cannot rebuild it, ask which rate hit which base before you assume the till added the badges.

## When a stack is still worth it

A true 28% off can be a good price. The point of the arithmetic is not to sneer at promotions. It is to stop comparing a stacked offer with a single 30% offer as if the badges were denominators in the same fraction. Compare **final prices** of the specific items. Use factors when the original is shared and you are choosing which coupon pair to apply. The moment a voucher is a fixed amount, write both orders down. The larger of those two savings is the most the terms can be worth; the terms decide whether you are allowed to take it. The [discount calculator](/discount-calculator) is one step at a time, which is the right speed for a stack. One visit with the rates added together is the wrong speed. If a third offer is “an extra 5% off already reduced prices,” fold it in as another factor (× 0.95) and recompute the pay percent from the original. The badge count is not the discount. The product of the factors is.
`,
  },
  {
    slug: "simple-vs-compound-interest",
    title: "Simple vs Compound Interest",
    description:
      "Simple interest stays on the original principal. Compound interest pays interest on interest. A side-by-side balance sheet shows when the gap is small and when it takes over.",
    published,
    updated,
    relatedTools: ["compound-interest-calculator", "loan-calculator"],
    relatedGuides: ["compound-interest-basics", "effective-annual-rate"],
    faqs: [
      {
        q: "Which one do savings accounts usually use?",
        a: "They compound, often daily or monthly, and quote a nominal rate plus an effective one. A product that truly pays simple interest will say so, and the balance will grow in a straight line if you add nothing.",
      },
      {
        q: "Are loan payments simple interest?",
        a: "Many consumer loans charge interest on the remaining balance, which is a compounding-like accrual between payments, while the payment itself is set by an amortization formula. That is neither “simple interest on the original principal for the whole term” nor a savings-style compound projection.",
      },
    ],
    body: `
Simple interest and compound interest answer the same classroom question — what happens to money over time at a stated rate? — and then diverge on one rule. Simple interest always multiplies the **original** principal. Compound interest multiplies the **latest** balance. If interest is paid out and spent, the two stories collapse together, because nothing is left to compound. If interest stays put, compounding pulls ahead, slowly and then suddenly.

## The two expressions

Simple balance after t years at annual rate r (decimal), no contributions:

A_simple = P × (1 + r × t)

Compound balance, compounded n times a year:

A_compound = P × (1 + r/n)^(n × t)

**€5,000 at 6% for 3 years.**

- Simple: 5000 × (1 + 0.06 × 3) = 5000 × 1.18 = **€5,900**. Interest = €900, a straight €300 a year.
- Compound annual: 5000 × 1.06^3 = 5000 × 1.191016 = **€5,955.08**. Extra versus simple: about €55.
- Compound monthly: 5000 × (1 + 0.06/12)^36 ≈ **€5,983**. Extra versus simple: about €83.

Three years is not a fable. The gap is real and, at 6%, still a few percent of the interest rather than a doubling of it. Stretch the same €5,000 at 6% annual compounding to **20 years**: compound balance ≈ **€16,036**. Simple balance = 5000 × (1 + 0.06 × 20) = **€11,000**. Now the gap is about €5,000, the size of the original principal. Time, not a cleverer formula, did that. The exponent did it by being allowed to run.

## A year-by-year look

€1,000 at 10%, chosen because 10% makes the drift obvious. Real savings rates are often lower; the shape is the lesson.

| Year | Simple balance | Compound annual balance | Gap |
| --- | --- | --- | --- |
| 1 | €1,100 | €1,100 | €0 |
| 2 | €1,200 | €1,210 | €10 |
| 3 | €1,300 | €1,331 | €31 |
| 5 | €1,500 | €1,611 | €111 |
| 10 | €2,000 | €2,594 | €594 |

Year one matches. It has to: there is no prior interest to include. The famous “interest on interest” is a year-two event. Anyone selling compounding as a first-year miracle is selling something else.

## Where simple interest is the real contract

Some short-term notes, certain payroll advances, and a few statutory calculations still say interest equals principal × rate × time, with time as a fraction of a year. In that contract, compounding would **misquote** the amount due. Read the words “simple interest” before you reach for the compound tool.

Day-count quirks sit on top. “Time” might be actual days over 365, or 30/360. A simple-interest calculator that assumes a whole number of years will miss a 40-day loan. For forty days at 8% simple on €2,000: interest ≈ 2000 × 0.08 × (40/365) ≈ **€17.53**. Compounding that daily for forty days is a few cents different. On short clocks, fighting about compounding is less important than getting the day count right.

## Where people use the wrong one

**Quoting a multi-year savings goal with simple interest** understates the balance if the interest will actually be left on deposit, and the understatement grows with the rate and the years. It is a conservative error, and it is still an error if you are comparing two banks.

**Quoting a credit-card balance with simple interest on the original purchase** understates the cost if the balance revolves and interest is charged on interest. The compound (or daily-accrual) figure is the scary one because it is closer to the agreement. Pay the statement and the question goes away; the math is not a reason to carry the balance.

**Using compound math on an amortizing loan’s total interest** double-counts. A loan payment already includes interest on the remaining balance, and the balance is designed to fall. Total interest on a 5-year loan is not “compound the principal for 5 years.” It is the sum of the interest column in the schedule. See [how loan EMI works](/guides/how-loan-emi-works).

## Contributions change the ranking, not the definition

If you add money every month, both models can accept deposits. Simple interest on each deposit for the time that deposit has existed is a legitimate “no compounding” world. Compound interest lets each deposit’s interest start earning too. At low rates the practical gap may be smaller than the gap caused by skipping a contribution. The [compound interest calculator](/compound-interest-calculator) is the compounding world. If a product explicitly pays simple interest, do not “improve” it in the tool by turning frequency up. Model the contract you can sign.

## When the distinction should change a decision

It should change a decision when the horizon is long, the rate is not tiny, and interest will remain inside the account — retirement contributions, a child’s savings plan, a reserve you refuse to skim. It should not dominate a decision between two one-year deposit accounts whose nominal rates differ by a full percent; the rate gap will beat the compounding-frequency gap. Compare effective annual rates when the frequencies differ, using [effective annual rate](/guides/effective-annual-rate), and compare balances at the horizon you actually have.

## A savings goal said both ways

You want **€8,000** in **8 years** and you will not add monthly deposits. At **4%** compounded annually, the principal that grows into €8,000 is 8000 / (1.04^8). 1.04^8 ≈ 1.3686, so you need about **€5,845** today. Simple interest at 4% for 8 years multiplies by 1.32, so the same target would seem to need 8000 / 1.32 ≈ **€6,061** if someone used the straight-line formula by mistake. The €200 gap is the cost of ignoring interest on interest in the plan, or the surprise if the product really is simple and you planned as if it compounded.

Flip it into a loan-shaped warning without using the loan formula. Leaving **€1,000** unpaid at 18% compounded monthly for two years grows by (1 + 0.18/12)^24 − 1 ≈ **43%**, to about €1,429. Simple interest at 18% for two years would add 36%, to €1,360. On a nasty rate and a multi-year neglect, compounding is not a textbook flourish. It is why revolving balances hurt. Paying the balance off returns you to a world where the distinction does not get to run.

The rule to keep is almost dull: first year, they match; every later year, compound interest includes last year’s interest and simple interest declines to. If your contract says which world you are in, believe the contract over the more exciting curve. Use the [compound interest calculator](/compound-interest-calculator) only for the compounding contract, and label a simple-interest agreement as simple even if the curve looks less impressive.
`,
  },
  {
    slug: "effective-annual-rate",
    title: "Effective Annual Rate",
    description:
      "Turn a nominal rate and a compounding frequency into the true one-year growth factor, and see why daily compounding is a small edit to the rate rather than a new product.",
    published,
    updated,
    relatedTools: ["compound-interest-calculator"],
    relatedGuides: ["compound-interest-basics", "apr-versus-interest-rate"],
    faqs: [
      {
        q: "What is the difference between nominal and effective?",
        a: "The nominal annual rate is the stated rate before you account for how often interest compounds. The effective annual rate is the percent your balance actually grows in one year if interest stays invested and there are no contributions.",
      },
      {
        q: "Does a higher compounding frequency always win?",
        a: "Only against the same nominal rate. A lower nominal rate compounded daily can lose to a higher nominal rate compounded annually. Compare effective rates, or compare balances.",
      },
    ],
    body: `
Banks like to quote a rate and a rhythm separately: 5% “compounded monthly,” 4.9% “compounded daily.” Those phrases are not yet comparable. The effective annual rate (EAR, sometimes APY in US deposit advertising) folds the rhythm into one number: how much a balance grows over a year if you add nothing and remove nothing.

## The conversion

EAR = (1 + r/n)^n − 1

where r is the nominal annual rate as a decimal and n is the number of compounding periods per year.

**5% compounded monthly.** (1 + 0.05/12)^12 − 1 ≈ **5.116%**.

**5% compounded daily, using 365.** (1 + 0.05/365)^365 − 1 ≈ **5.127%**.

**5% compounded annually.** EAR = **5%** exactly. Nominal and effective match when interest is credited once a year.

The monthly-versus-daily gap on a 5% rate is about one hundredth of a percentage point in effective terms. On €10,000 that is about a euro a year. Advertising copy that treats “daily” as a different class of return, at the same nominal rate, is selling the euro.

| Nominal | Frequency | Effective annual rate (approx.) |
| --- | --- | --- |
| 3% | Monthly | 3.04% |
| 3% | Daily | 3.05% |
| 5% | Quarterly | 5.09% |
| 5% | Monthly | 5.12% |
| 8% | Monthly | 8.30% |
| 18% | Monthly | 19.56% |
| 20% | Daily | 22.13% |

The bottom rows are why the conversion stops being a rounding topic. Credit-card-like nominal rates, compounded often, hide several extra points inside the frequency. A loan or card disclosure may already be required to show a single comparable charge; deposits may show an APY. When you only have the nominal and the word “monthly,” compute the EAR yourself before you rank two offers.

## What EAR does not include

It does not include fees. A 5.12% effective savings rate with a €40 annual fee is a bad description of a €1,000 balance: the fee is 4% of the balance, eating most of the interest. Fold large fees into a balance comparison, not into a slogan about daily compounding.

It does not include tax. If interest is taxed at 20% and the tax is paid from the account, your spendable growth is lower. A rough adjustment is to compare after-tax rates only when both products are taxed the same way. A tax-exempt account versus a taxable one is not an EAR contest until you have applied the tax.

It does not describe a year in which you contribute every month. Contributions make the internal rate of the whole cash-flow stream a different statistic. EAR is specifically the empty-handed year: principal in, nothing added, interest left alone, see the percent. For a contribution plan, project the [balance](/guides/compound-interest-basics) at your horizon instead of anointing the EAR as the growth of every euro. Early contributions grow for more than a year; late ones grow for less. EAR is the rate each euro experiences per year it is present, which is still the right building block, but the blended result will not equal “principal × (1 + EAR)^years” once deposits keep arriving.

## Nominal rates in loans

Borrowing disclosures often use APR in a regulated way that may or may not match this EAR formula, because fee treatment and day count are specified by law. Do not assume “APR” on a mortgage and “effective annual rate” on a savings account are the same algebra. [APR versus interest rate](/guides/apr-versus-interest-rate) separates the borrowing vocabulary. Use the formula on this page when you are holding a nominal rate and a compounding frequency and nobody has handed you a single comparable percent yet.

## A ranking example

Offer A: 4.80% compounded daily. EAR ≈ (1 + 0.048/365)^365 − 1 ≈ **4.92%**.

Offer B: 5.00% compounded annually. EAR = **5.00%**.

B wins the rate comparison. A wins only if B has a catch — a minimum balance you will not keep, a teaser that expires, a tax difference. The effective rate breaks the tie between frequencies. It does not break ties between contracts. Once the EARs are within a few basis points, go read the fees and the lockup. The exponent has finished its job.

## Continuous compounding, only so you can ignore it

The mathematical limit as n grows without bound is e^r − 1. At 5%, e^0.05 − 1 ≈ **5.127%**. Daily compounding already landed on about 5.127%. “Compounded continuously” on a consumer savings account is a rounding story next to daily, not a new digit in your balance. I mention it so a brochure that says continuous does not sound like a different asset class. At 20% the continuous effective rate is about 22.14%, and daily was about 22.13%. The drama, again, is the 20, not the adverb.

## One year of a real deposit, checked

€4,000 at 3.6% nominal, compounded monthly. Period rate = 0.036/12 = 0.003. After 12 months the factor is 1.003^12 ≈ 1.03660. EAR ≈ **3.660%**. Interest earned ≈ €146.40. If the bank posts €146.40, you are looking at this convention. If the bank posts €144.00, that is simple 3.6% of 4,000, and the account did not do what “compounded monthly” led you to expect — or a fee took the difference. Two euros is small. The habit of checking one year on a round principal is not.

## When to calculate it

Calculate EAR when two savings offers quote different compounding rhythms, or when a nominal rate looks moderate but compounds monthly at a high level (the 18% row). You can also get it indirectly: divide a one-year compound projection from the [compound interest calculator](/compound-interest-calculator) by the principal, subtract 1, and you have reconstructed the EAR. If that reconstruction disagrees with a bank’s advertised APY, someone is using a different day count (360 versus 365) or including a bonus that is not interest. Ask which. The formula is too short to argue with; the inputs are where offers get slippery. Do not use EAR to rank a loan’s APR against a deposit’s APY without reading [what those labels include](/guides/apr-versus-interest-rate).
`,
  },
  {
    slug: "test-score-percentages",
    title: "How to Calculate a Test Score Percentage",
    description:
      "Turn marks into a percent, weight several assignments, and avoid the average-of-averages trap when one exam counts more than homework.",
    published,
    updated,
    relatedTools: ["x-is-what-percent-of-y", "percentage-calculator"],
    relatedGuides: ["how-to-calculate-percentages", "common-percentage-mistakes"],
    faqs: [
      {
        q: "Is percent the same as points?",
        a: "Only when the test is out of 100. A score of 42 out of 50 is 84%, not 42%. Divide by the points available, then multiply by 100.",
      },
      {
        q: "How do weighted grades work?",
        a: "Multiply each percentage score by its weight, then add. The weights should sum to 100% of the course (or to 1 as decimals). Do not take a simple mean of the percentages unless every assignment has the same weight.",
      },
    ],
    body: `
A test percentage is the reverse-looking formula that is actually the easy one: part divided by whole, times 100. The pain starts when a course has several wholes — a quiz out of 20, a paper out of 40, a final out of 100 — and each whole is a different share of the grade. This page does the single test first, then the weighted course, because skipping to the average is how a strong final gets diluted by a short quiz or, worse, the reverse.

## One test

Percent = (points earned / points possible) × 100

**42 out of 50.** 42/50 = 0.84 = **84%**.

**18 out of 20.** 90%. The 18 is not “18%.” It is 18 marks. The percent sign arrives only after the division.

**7 out of 8.** 87.5%. People round this to 88% in conversation. A syllabus that says “87.5 and above” cares about the half. Know the rounding rule before you round.

**Bonus marks.** If the teacher allows 55 out of 50, the ratio is 110%. That can be a legitimate score under that policy. It is not a reason to change the denominator to 55. The whole was 50; you exceeded it.

The [X is what percent of Y](/x-is-what-percent-of-y) tool is this calculation with X = earned and Y = possible. Zero possible marks is not a test. Do not divide by it.

## Dropping a lowest score

Four quizzes, out of 10 each: 10, 8, 7, and 4. If the lowest is dropped, you average 10, 8, and 7.

- As percents those are 100, 80, and 70.
- Mean = **83.3%**.
- If you forget to drop the 4, the mean of the four percents is **72.5%**.

Dropping happens before the average, on the scores the policy names. If the quizzes were worth different points, convert each to a percent first or, more safely, add earned points and divide by possible points among the quizzes you keep. Those two methods match when every quiz has the same total. They do not match when one “quiz” is out of 30 and another out of 10 and you average the percents while thinking you averaged the points. Decide which policy is written down.

## Weights

A course states:

- Homework: 20% of the grade, and you scored 90% on it
- Midterm: 30%, you scored 70%
- Final: 50%, you scored 80%

Course percent = 0.20 × 90 + 0.30 × 70 + 0.50 × 80

= 18 + 21 + 40 = **79%**

The simple average of 90, 70, and 80 is **80%**. One point, in this example, because the scores were not wildly different. Change the final to 50% and the homework to 100%:

Weighted = 0.20 × 100 + 0.30 × 70 + 0.50 × 50 = 20 + 21 + 25 = **66%**

Unweighted mean of 100, 70, and 50 = **73.3%**. Now the shortcut flatters you by 7 points, which is the difference between letter grades in plenty of scales. The final was half the course and it was the weak paper. An unweighted mean pretends the homework was a third of the course. The syllabus said a fifth.

| Component | Weight | Your percent | Contribution (weight × percent) |
| --- | --- | --- | --- |
| Homework | 0.20 | 100 | 20 |
| Midterm | 0.30 | 70 | 21 |
| Final | 0.50 | 50 | 25 |
| Course | 1.00 | — | **66** |

Check that the weights sum to 1 (or 100%). A syllabus that lists 20, 30, and 40 has forgotten 10%. Do not quietly rescale unless the instructor tells you the remainder is unused. Ask.

## Points hiding inside weights

Sometimes homework is “20 points of the course” and you scored 18 of those, the midterm is 30 points and you scored 21, the final is 50 and you scored 25. Then you do not need percents at all: 18 + 21 + 25 = **64** out of **100**, which is 64%. I got 66 a moment ago with slightly different inputs; the method is the point. Adding raw marks works when the points available already are the weights. Averaging percents is what you do when each component was graded on its own scale and the syllabus supplies the weights separately. Using both methods on the same numbers without converting is double bookkeeping.

## Curves and letter cuts

A curve that “adds 5%” might mean 5 percentage points (74 becomes 79) or 5% relative (74 × 1.05 = 77.7). Those are not equal. [Percentage points versus percent change](/guides/percentage-increase-vs-percentage-points) is the language to bring to that argument. A cut score (“70% is the pass”) is a threshold on the percent, not a percent change from last year’s class average. Being 2 points under a 70% cut is 68%, which is 2 percentage points short, and it is also about 2.9% relatively short of the cut (2/70). Only the points version tells you how many marks to find on a 100-point scale: 2 marks.

## What you need on the next paper

Sometimes the useful question is forward, not backward. The course is 79% with the final still unwritten, and the final is 40% of the grade. The other 60% is already locked at 85%.

Course = 0.60 × 85 + 0.40 × final.

You want the course to reach 80.

0.60 × 85 = 51, so 51 + 0.40 × final = 80, and final = (80 − 51) / 0.40 = **72.5%**.

A 70% on the final would leave the course at 51 + 28 = 79. You do not “need a 70 because the course is already about 80.” The weight decides. If you instead average the locked 85 with the final as if they were equal, you will study for the wrong target. Write the equation with the weights visible. The [percentage calculator](/percentage-calculator) can compute 40% of a guessed final; it will not build the equation. That line is the homework.

## When to use the calculator

Use it to convert an awkward fraction (83 out of 120 is 69.166…%) and to check a weighted sum you did in a notes app. Type each contribution as “weight percent of score” only if you are careful: 20% of 90 is 18, which is exactly the contribution in the first example, and then you must **add contributions**, not average them again.

Do not use a single “what percent is this of that” for a whole course unless you have already collapsed the course into one earned total and one possible total. The collapse is the actual work. The division at the end is the easy line. Zero points available is not a score you can percent; it is a missing assignment, and the syllabus says whether that missing work is a zero or a hole in the average. Those are different denominators. Read that sentence before you divide.
`,
  },
];
