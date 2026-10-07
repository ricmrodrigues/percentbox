import type { Guide } from "./types";

const published = "2026-09-26";
const updated = "2026-09-26";

export const moreGuidesB: Guide[] = [
  {
    slug: "salary-increase-percentage",
    title: "How to Calculate a Salary Increase Percentage",
    description:
      "Compare a raise with the old salary, separate cost-of-living talk from the cash, and see why a percent raise on a bonus is not the same base.",
    published,
    updated,
    relatedTools: ["percentage-increase-calculator", "percentage-change-calculator"],
    relatedGuides: ["percentage-change-from-a-to-b", "inflation-and-percent-change"],
    faqs: [
      {
        q: "Do I divide by the old salary or the new one?",
        a: "By the old salary. A move from €40,000 to €44,000 is an increase of €4,000, and 4,000 / 40,000 = 10%. Dividing by the new salary gives about 9.1%, which is a different statistic (how much of the new pay is the raise).",
      },
      {
        q: "Is a 3% raise a 3% better standard of living?",
        a: "Only if prices did not change. If inflation was 3%, a 3% nominal raise leaves purchasing power roughly flat. Subtracting inflation from the raise is a rough real-terms picture, not a full cost-of-living study.",
      },
    ],
    body: `
A raise is a percent change with a payslip attached. The base is last year’s agreed salary, not the household budget, not the midpoint of a band, and not the number after tax unless you deliberately switch the conversation to take-home pay. Keep those bases apart and the percentage stops being a mood.

## The raise itself

Percent raise = (new − old) / old × 100

**€40,000 to €44,000.** Gap = €4,000. 4000 / 40000 = **10%**.

**€57,500 to €60,000.** Gap = €2,500. 2500 / 57500 ≈ **4.35%**. Quoting this as “about 4%” is fine in a kitchen and sloppy in a counter-offer. 4% of 57,500 is €2,300, so a €2,500 raise is a bit more than 4%. The [percentage change calculator](/percentage-change-calculator) earns its keep on the awkward salaries.

Going the other way — you were promised 6% and you want the new gross:

new = old × (1.06)

**€3,200 a month × 1.06 = €3,392.** The monthly increase is €192. Annualized, if there are 12 equal months and no thirteenth-month quirk, that is €2,304 a year. If your contract pays 14 months, multiply by 14, not by 12, before you compare with an annual offer from another employer. The percent is the same; the cash is not, because the base “annual” was defined differently.

## What people accidentally divide by

| Old | New | Correct raise | Gap / new (a different number) |
| --- | --- | --- | --- |
| €40,000 | €44,000 | 10% | 9.09% |
| €44,000 | €40,000 | −9.09% | — |
| €28,000 | €30,800 | 10% | 9.09% |

The right-hand column answers “what percent of my new salary is the raise?” which can be interesting and is not what an employer means by “a 10% raise.” Notice that a 10% raise is undone by about a 9.09% cut, not by a 10% cut. [Reverse percentages](/guides/reverse-percentages) is the same asymmetry.

## Bonus, equity, and “total compensation”

A 10% raise on a €50,000 salary is €5,000. A 10% raise on a €5,000 bonus is €500. If someone says “we increased compensation 10%” while lifting only the bonus, the salary might be flat. Compute the percent on the slice that changed, and compute a separate percent on the total if the total is what you are comparing across jobs.

Total last year: €50,000 salary + €5,000 bonus = €55,000. This year: €50,000 + €8,000 = €58,000. Overall change = 3000 / 55000 ≈ **5.45%**. The bonus itself rose 60%. Both sentences are true. The overall one is the one that pays the rent. Do not let the 60% stand in for the year.

Hourly to salaried comparisons need a shared hour count. €22 an hour for 1,800 hours is €39,600. A salary of €42,000 is about 6.1% more money and might be fewer or more hours. A percent on the hourly rate (€22 to €24 is about 9.1%) ignores unpaid overtime. If hours changed, the honest comparison is annual cash over annual hours, then a percent change between those effective rates.

## Tax and the raise that shrinks

Gross-to-net is not a single percent you can reuse, because tax brackets and social contributions are often progressive. A 10% gross raise does not become a 10% net raise in general. It might land close, or a slice of it might be taxed at a higher marginal rate so the net increase is a smaller percent of net pay.

Example shape, not a Portugal or US filing: suppose you take home 70% of a €40,000 gross (net €28,000) and, after a raise to €44,000, you take home 68% because more of the income sits in a higher band (net €29,920). Net rose by €1,920, which is **6.9%** of the old net, while gross rose 10%. I invented the 70% and 68% to show the bookkeeping. Your real percentages belong to your country’s payroll rules — for Portugal-specific salary estimates, Ricardo points people to the sister site [Portugal Net Pay](https://portugalnetpay.com). PercentBox will not invent a bracket table. It will insist you run the percent on the base you claim to be talking about. If the argument is “my lifestyle,” the base is net. If the argument is “what did the employer add,” the base is gross.

## Inflation beside the raise

A 4% raise in a year when consumer prices rose about 4% is a real-terms standstill, roughly. A 4% raise when inflation was 2% is about a 2% gain in purchasing power, using the shortcut real ≈ nominal − inflation. That shortcut is a small-rate approximation. The more careful version divides factors: (1.04 / 1.02) − 1 ≈ **1.96%**. [Inflation and percent change](/guides/inflation-and-percent-change) shows when the shortcut is enough. Neither version knows your personal inflation — rent, childcare, a commute — which can diverge from a national index. Use the index to stop yourself calling a below-inflation raise a win. Use your own bills to decide whether the index matches your life.

## When to use the calculators

Use the [percentage increase calculator](/percentage-increase-calculator) when HR gives you a percent and you want the new gross before you celebrate. Use the change calculator when both salaries are known and you want the percent that was actually delivered, including the awkward 4.35% cases.

## Offers that are not on the same base

Employer A offers €36,000 for 12 payments. Employer B offers €3,150 a month for 13 payments, a structure some contracts use. B’s annual cash is 3150 × 13 = **€40,950**, which is (40950 − 36000) / 36000 ≈ **13.75%** more than A, not “€150 more a month” as a lifestyle summary. Per month, if you naively compare 36,000/12 = €3,000 with €3,150, B looks **5%** higher per paycheck and the thirteenth payment is invisible. Quote the annual cash percent and the monthly cash separately. They answer different questions (“what hits my account this month” versus “what is the offer worth over a year”).

A percent raise on A’s structure does not transport. Ten percent on €36,000 is €39,600 a year. Ten percent on B’s monthly rate is €3,465 × 13 = €45,045. Comparing “both got 10%” without the base is how two colleagues misread each other’s news.

Do the bonus and the salary as separate rows if either one can be quoted alone in a way that flatters the package. Subtract nothing for inflation until you have said the nominal percent out loud. They are two sentences: what the employer paid, and what prices did. Collapsing them into one unlabeled percent is how a cost-of-living adjustment gets described as generosity, or a real raise gets described as nothing. The [percentage increase calculator](/percentage-increase-calculator) applies one rate to one base. Run it twice if you have two bases. Do not average the resulting percents.
`,
  },
  {
    slug: "inflation-and-percent-change",
    title: "Inflation and Percent Change",
    description:
      "Separate a nominal price change from a real one, apply an index without pretending it is your personal cost of living, and avoid subtracting large rates carelessly.",
    published,
    updated,
    relatedTools: ["cagr-calculator", "percentage-change-calculator"],
    relatedGuides: ["percentage-change-from-a-to-b", "salary-increase-percentage"],
    faqs: [
      {
        q: "Can I just subtract the inflation rate from the price increase?",
        a: "For small rates the subtraction is a decent approximation. A 6% price rise with 2% inflation is about 4% real, and the factor method gives (1.06/1.02) − 1 ≈ 3.9%. At large rates, divide the factors instead of subtracting.",
      },
      {
        q: "Does CPI describe my household?",
        a: "It describes a defined basket, not your rent contract or your tuition bill. Use it as a common benchmark. If one price dominates your budget, compute that item’s own percent change as well.",
      },
    ],
    body: `
Inflation is a percent change in a price index. A pay rise is a percent change in a wage. A grocery item’s jump is a percent change in that sticker. None of them is automatically the others. “Real” change is the attempt to look at one of them after taking an index into account, so that a bigger number of euros is not confused with more loaves of bread.

## Nominal change first

Do not skip the plain formula. A rent that moves from €900 to €990 rose by 90/900 = **10%**. That 10% is nominal. It is what your bank transfer does. It is true whether or not a statistics office published anything that month. The [percentage change calculator](/percentage-change-calculator) is this step. Finish it before you adjust anything.

## A price index is also a percent change

Suppose a consumer price index goes from 110 to 114.6. Inflation over the period is (114.6 − 110) / 110 = **4.18%**. Agencies often publish that percent for you, which saves the division and does not change its meaning. The index level is a made-up base (often 100 in some year). Only the percent change, or the ratio of two levels, is comparable.

To express an old euro amount in the purchasing power of a later index:

later equivalent = old amount × (later index / earlier index)

€900 in the earlier period, indexes 110 then 114.6: 900 × (114.6/110) ≈ **€937.64**. That is the rent that would have merely kept up with this index. The actual new rent is €990, which is 990 / 937.64 − 1 ≈ **5.6%** above the inflation-adjusted old rent. You can also divide factors: the rent factor is 1.10, the price factor is 114.6/110 = 1.0418, and 1.10 / 1.0418 − 1 ≈ **5.6%**. Same real increase. The rent got more expensive even in index terms, by about five and a half percent, on top of the inflation that was already in the air.

## Subtracting rates

nominal − inflation ≈ real is the shortcut. 10% − 4.18% = 5.82%, close to 5.6%, and a bit high. The shortcut pretends the inflation applies to the old price only, not to the path between. The error is about the product of the two small rates (roughly 0.10 × 0.0418 = 0.4 percentage points), which is why textbooks say “fine when both rates are small.”

| Nominal rise | Inflation | Shortcut (subtract) | Factor method |
| --- | --- | --- | --- |
| 3% | 2% | 1.0 pp | 0.98% |
| 10% | 4% | 6.0 pp | 5.77% |
| 50% | 20% | 30 pp | 25% |
| 8% | 10% | −2 pp | −1.82% |

The third row is where subtraction becomes a different story. A 50% nominal jump with 20% inflation is a **25%** real increase (1.50 / 1.20 = 1.25), not 30%. Hyperinflation makes the shortcut unusable. Household rates usually sit in the first rows, where you will not ruin a decision by subtracting — and you will look more careful if you divide.

The last row is a real decline: prices rose faster than the thing you are tracking. Wages do this in bad years. Calling an 8% raise “a raise” is nominally true and really incomplete if the index rose 10%.

## Baskets are not your life

A national index averages thousands of prices with weights from a typical consumption survey. If your rent is 40% of spending and the index weights shelter at 15%, your personal inflation can be far from the headline even when the statisticians are doing their job. Compute the percent change of the two or three bills that dominate — rent, childcare, energy — with the ordinary formula, and let the index handle the rest of the basket as a benchmark rather than as a verdict.

Indexes also differ on purpose: consumer prices, producer prices, a single city’s housing index, a wage index. Dividing a wage by a producer-price index answers a question you may not have asked. Match the index to the story. For “can I buy the same household basket,” a consumer price index is the usual choice. For “did this house beat local property prices,” use a housing series. Do not divide a salary by a stock index and call it inflation.

## Chained periods

Year 1 inflation 8%, year 2 inflation 3%. The two-year price factor is 1.08 × 1.03 = 1.1124, or **11.24%**, not 11%. Adding the published annual rates is the shortcut again, and over many years it drifts. When you have index levels, ignore the annual headlines and divide the latest level by the earliest. When you only have annual rates, multiply the factors. This is the same “do not add successive percents” rule as in [stacked discounts](/guides/stacked-discounts), wearing a macroeconomic coat.

## When the adjustment is worth doing

Do it when you compare money across several years: a salary then and now, a project budget, a parent’s anecdote about what bread cost. Do it when a nominal raise is small enough that inflation might have eaten it. Skip it when both numbers are from the same week. A 10% off sale is not an inflation calculation.

## A wage and a basket, side by side

In year 0 you earn €2,000 a month and a defined basket of groceries costs €400. In year 3 you earn €2,240 and the same basket costs €460.

- Wage factor: 2240/2000 = 1.12, so **+12%** nominal.
- Basket factor: 460/400 = 1.15, so **+15%** on that basket.
- Real wage against this basket: 1.12 / 1.15 − 1 ≈ **−2.6%**.

You were paid more euros and you can buy slightly less of that basket. A national CPI of +10% over the same years would tell a kinder story (1.12 / 1.10 − 1 ≈ +1.8%), because the official basket is not your groceries. Both can be published without one of them being a lie. Say which basket you divided by. If you only subtract (12 − 15 = −3) you are close to −2.6 and you should still show the factors when the rates leave the single digits.

Old menu prices people repeat at dinner (“it was 80 cents”) are the same exercise with worse memory. Write the two prices, run [percent change](/guides/percentage-change-from-a-to-b), then decide whether an index for the intervening years exists and is relevant. Nostalgia is not a denominator.

Keep the nominal percent in the sentence even after you compute the real one. “Rent rose 10% on the lease, about 5.6% after this index” is two facts. Dropping the 10% hides what the contract did. The index explains the contract. It does not replace it.
`,
  },
  {
    slug: "sales-tax-versus-vat",
    title: "Sales Tax versus VAT",
    description:
      "The shared arithmetic of adding a tax rate, and the practical difference between a US-style add-on and a VAT-inclusive price tag.",
    published,
    updated,
    relatedTools: ["vat-calculator", "what-is-x-percent-of-y"],
    relatedGuides: ["how-to-calculate-vat", "how-to-calculate-discounts"],
    faqs: [
      {
        q: "Is the formula for adding sales tax different from adding VAT?",
        a: "No. Gross = net × (1 + rate/100) in both cases. What differs is whether the price you were shown is already gross, and who files the tax.",
      },
      {
        q: "Why do European shelf prices look “higher” than US tags for the same rate?",
        a: "Often because the VAT is already inside the tag, while a US tag may be the pre-tax price with sales tax added at the register. Compare net with net or gross with gross before you compare the rates.",
      },
    ],
    body: `
Sales tax and VAT are different legal systems that collide in the same café conversation: “just add the percent.” The arithmetic of adding a rate to a net price is identical. The arithmetic people **need** differs because of what the price tag already contains. This page stays on that practical difference. It is not a guide to nexus, registration, or input-tax recovery.

## One formula, two habits

Net price, rate r:

tax = net × r/100

gross = net × (1 + r/100)

**€100 or $100 net, 20% tax.** Tax = 20. Gross = **120**. Whether you call the 20 VAT or sales tax, the multiplication does not care.

The habits:

- Many **US sales-tax** displays show the pre-tax price and add the tax at payment. The number on the shelf is often the net. You use the add formula at the register. Rates vary by state and city, and a “9%” assumption from another zip code is a wrong input, not a wrong formula.
- Many **VAT** displays, including in the EU and the UK, show a consumer price that already includes VAT. The number on the shelf is often the gross. You use the extract formula if you want the tax or the net. Multiplying the shelf price by the rate overstates the tax, which is the main trap in [how to calculate VAT](/guides/how-to-calculate-vat).

| What you are holding | What you want | Operation | 20% example |
| --- | --- | --- | --- |
| Net tag $50 | Amount to pay | × 1.20 | $60 |
| Gross tag €60 | Net and VAT | ÷ 1.20 | net €50, VAT €10 |
| Gross tag €60, wrongly × 0.20 | “the tax” | do not | €12, which is too high |

A traveler comparing a $50 US tag plus tax with a €60 European tag is not comparing the same kind of number, and is also not comparing the same currency. Even after you pick gross or net consistently, the goods may differ. The percent cannot finish a cross-border price comparison by itself. It can stop you adding 20% to a price that already had 20% inside it.

## Inclusive, exclusive, and the receipt

A receipt that prints net, tax, and total lets you audit both habits. Check that tax / net equals the rate within a cent, and that net + tax = total. If the only number you were shown before paying was the total, you were in inclusive-price land even if the legal system “usually” adds tax at the end. Believe the paper in your hand over the national stereotype.

Business invoices often flip the other way: a VAT invoice shows net, VAT, and gross explicitly, because the buyer may need the VAT line. The [VAT calculator](/vat-calculator) add mode matches that invoice. Extract mode matches a consumer trying to see the tax inside a menu that never listed it.

## Discounts

Apply the discount on the same base the shop uses, then tax, or tax-inclusive discount as the terms state. A US “10% off” coupon on a pre-tax price reduces the net, and sales tax is computed on the reduced net. A VAT-inclusive “10% off” usually reduces the gross, and the VAT inside it shrinks in proportion. Both are coherent. Mixing them — taking 10% off a VAT-inclusive price and then adding VAT again — charges tax on a price that already contained tax. If the total moves by more than the discount, recompute in one mode only.

## Several rates

US sales tax can be a stack of state, county, and city rates that you **add** into one combined rate before the formula (6% + 1.5% + 0.5% = 8%, then multiply once). You add those rates because they are all applied to the same net price, not because stacking percents is generally safe. This is one of the few everyday cases where adding percents is correct: same base, simultaneous taxes, not successive discounts. Successive discounts still multiply, as in [stacked discounts](/guides/stacked-discounts). VAT standard and reduced rates are **not** added together on one item; an item gets the rate that applies to it. A basket can contain both, line by line.

## The same shirt, two tags

A shirt has a €48 production cost, which is irrelevant to the tax formula and relevant to not confusing markup with tax. The retailer wants €80 before tax.

- US-style tag at 8% sales tax: shelf might read **$80** if we pretend the currency, register adds 80 × 0.08 = $6.40, customer pays **$86.40**.
- VAT-style tag at 23%: the customer price is often 80 × 1.23 = **€98.40** printed on the shelf. The VAT inside it is €18.40, which is not 23% of 98.40.

Someone comparing “$86.40 with tax” to “€98.40” is comparing gross to gross only after the exchange rate, and comparing two different rates (8 versus 23) that no formula will reconcile into a moral about which country is expensive. The arithmetic job is smaller: do not add 23% to €98.40, and do not forget the $6.40 on the $80 tag. [Markup versus margin](/guides/markup-vs-margin-explained) is a separate percent on the €48 cost. Mixing “I marked up 40% and the tax is 23%, so the price is cost times 1.63” is a muddle of bases. Markup applies to cost. VAT applies to the net selling price. They are sequential, and only if the 40% was a markup: 48 × 1.40 = 67.20 net, then tax on 67.20, which is not the €80 example. I changed the selling price on purpose. If the percents feel mergeable, you have lost track of which number they touch.

## When to use the VAT calculator for either system

Use add mode when you know the pre-tax price and the combined rate, whether the statute calls it sales tax or VAT. Use extract mode when the price in front of you is the amount you pay and you want the tax broken out. Rename the result in your head if “VAT” is the wrong legal word; the screen is doing the arithmetic you chose.

Do not use it to discover the rate. A combined local sales-tax rate, or the correct VAT category for a kind of food, is an external fact. Wrong rate in, confident gross out. Look the rate up, then calculate. Several items at several rates are several lines. Add the taxes in euros at the end. Do not average the rates unless the net amounts happen to be equal, and even then show the lines.
`,
  },
  {
    slug: "apr-versus-interest-rate",
    title: "APR versus Interest Rate",
    description:
      "Why a loan’s nominal interest rate and its APR can differ, what fees do to the comparison, and what a fixed-rate EMI calculator still will not show.",
    published,
    updated,
    relatedTools: ["percentage-point-calculator", "loan-calculator"],
    relatedGuides: ["how-loan-emi-works", "effective-annual-rate"],
    faqs: [
      {
        q: "Is APR the same as the monthly interest rate times 12?",
        a: "Not always. The nominal rate divided into months drives the installment. APR (or a similar comparison rate) may fold in certain fees and use a regulated method so two offers can be compared. A higher APR with a lower nominal rate means fees are doing real work.",
      },
      {
        q: "Which number should I type into an EMI calculator?",
        a: "The nominal interest rate that the contract applies to the balance, not the APR, unless the lender tells you the APR is the rate used in the payment formula and there are no separate fees. Using APR as if it were the nominal rate mis-states the payment when fees were the reason the APR was higher.",
      },
    ],
    body: `
A loan advertisement can show two percents that both look like “the rate.” One is the interest rate used to charge interest on the balance. The other is a comparison figure — APR in the US and UK consumer-credit vocabulary, TAEG in much of the EU — built so that fees and the interest together have a single percent attached. They coincide when there are no fees and the day-count conventions line up. They separate as soon as someone charges an arrangement fee, a mandatory insurance premium, or a discount that is really a fee in disguise.

PercentBox’s [loan calculator](/loan-calculator) uses the nominal rate you type to build a fixed installment and an amortization schedule. It does not compute a regulated APR. This page is about not feeding it the wrong one of the two numbers, and about not treating either number as the full cost in euros.

## What the installment actually uses

The EMI formula wants a monthly rate. Lenders usually take a nominal annual rate and divide by 12. That nominal rate is the one that reproduces the payment. If the contract says 6.5% and the payment matches the formula at 6.5%, you have found the nominal rate. The walk-through of that formula, including a €25,000 example, is in [how loan EMI works](/guides/how-loan-emi-works).

If you instead type a higher APR that was inflated by a €400 fee, the calculator will invent a higher payment than the lender will collect each month. You will think the offer is less affordable than it is, month to month, and you will still need to remember the €400 leaves your account up front. The fee and the installment are both real. They are not the same cash flow, so they do not belong in the same input box unless the tool was built to model both.

## What comparison rates are trying to do

Suppose two 5-year loans of €10,000.

- Lender A: 7% nominal, no fees. Payment about €198 a month. Total paid about €11,880. Cost of credit about €1,880.
- Lender B: 6.4% nominal, €300 arrangement fee taken at the start. Payment about €195 a month. Total of payments about €11,700, plus the €300, so about €12,000. Cost of credit about €2,000, and you did not even receive the full €10,000 to spend if the fee was deducted from the advance.

B’s monthly payment looks cheaper. B costs more once the fee is included, and the amount of cash you actually received may be smaller. A regulated APR/TAEG is an attempt to put A and B on one percent scale so the fee cannot hide. The exact percent depends on the legal recipe (which fees count, how the time value is calculated). I am not going to pretend a two-line formula reproduces your country’s APR. I am going to say: if B’s comparison rate is higher than A’s, believe that ranking over the ranking of the nominal rates, then still look at the euro totals.

## A sketch you can compute without claiming it is “the” APR

One rough classroom approach treats the fee as reducing the net advance, then asks what rate would make the payment you will actually make consistent with that smaller advance. That internal rate is in the spirit of a comparison rate. It will not match a legal APR to the decimal, because the legal one has rules about which charges are finance charges and about day count. Use it as intuition: **fees raise the true rate above the nominal, more so on short loans and small principals**, because a €300 fee is a large fraction of a €2,000 one-year loan and a smaller fraction of a €200,000 mortgage.

On short loans, compare euros of interest plus euros of fees. On long loans, a small rate gap compounds into a large euro gap, so the nominal rate regains importance and the fee matters less relatively — unless the fee is itself a percent of the loan. A 2% arrangement fee on €200,000 is €4,000. That is not a rounding error. Put it in the cash column even when the APR difference looks like a few tenths of a point.

## Nominal, effective, APR

These three get stacked in casual speech.

- **Nominal annual rate:** the contract rate before you worry about monthly compounding or fees. Often divided by 12 for the payment.
- **Effective annual rate:** what a year of compounding does to a balance with no fees, from [the EAR formula](/guides/effective-annual-rate). Monthly compounding makes the effective rate a bit higher than the nominal.
- **APR / TAEG:** a regulated comparison price of the credit, which may include fees and may be defined so that it is comparable across lenders. It is not “nominal times something” you should invent.

A savings APY and a loan APR are both “one percent that already did some combining,” and they are not interchangeable. Do not subtract a savings APY from a loan APR and call the difference your spread without reading what each percent includes.

## Variable rates

If the nominal rate is Euribor plus a spread, both the payment and any APR illustration that assumed a constant index will go stale when Euribor moves. The comparison rate in a pre-contractual sheet is tied to the assumptions printed on that sheet. When the index changes, rerun the payment at the new all-in nominal rate. Do not add the index change to the APR as if both were percentage points of the same object unless the disclosure tells you to. [Percentage points](/guides/percentage-increase-vs-percentage-points) are the right unit for “the index rose by 0.5 points.” The effect on APR is a second calculation.

## When to use the loan calculator

Use it with the **nominal** rate to see the installment, the total interest, and the shape of amortization. Then add fees that the calculator omitted, in euros, on the side. Compare two offers on total euros paid and on cash received today, not only on the lower monthly payment.

Use a published APR or TAEG as a ranking signal produced under a known legal definition, and read which fees it claimed to include. If the APR is high and the nominal rate is low, hunt the fee. If you cannot find a fee and the two percents still disagree, you may be looking at a compounding or day-count difference, and the lender’s repayment schedule — not a generic calculator — is the document that wins.
`,
  },
  {
    slug: "percent-error",
    title: "Percent Error and Percent Difference",
    description:
      "How science-lab percent error uses a theoretical value, how percent difference compares two measurements, and why the denominator changes the story.",
    published,
    updated,
    relatedTools: ["percentage-change-calculator", "x-is-what-percent-of-y"],
    relatedGuides: ["percentage-change-from-a-to-b", "common-percentage-mistakes"],
    faqs: [
      {
        q: "What is the denominator in percent error?",
        a: "The accepted or theoretical value, not the experimental one. Percent error = (experimental − theoretical) / theoretical × 100. Some courses want the absolute value so the result is never negative.",
      },
      {
        q: "How is percent difference different?",
        a: "Percent difference compares two measurements when neither is “the true one,” often dividing by their average. Percent error compares a measurement with a value treated as true.",
      },
    ],
    body: `
Percent error and percent difference are percentage-change formulas with opinions about which number deserves to be the base. Ordinary percent change from A to B uses A, the earlier one, as the base. A lab report may instead treat a handbook value as the base, or treat neither measurement as privileged and use their average. The numerator is still a gap. The argument is about the denominator. Pick it on purpose and the percent becomes a claim someone else can check.

## Percent error

When one value is accepted as the reference — a theoretical density, a manufacturer’s length, the true count in a puzzle — 

percent error = (experimental − theoretical) / theoretical × 100

Many school sheets ask for the absolute value in the numerator so “error” is a magnitude. Keep the sign if you care whether you ran high or low, and say that you kept it.

**A length is known to be 50.0 cm. You measure 51.5 cm.**

Error = 1.5. Percent error = 1.5 / 50 × 100 = **3%**. With the sign, **+3%** (you measured long).

If you wrongly divide by your own measurement: 1.5 / 51.5 ≈ 2.9%. Close, here, because the error is small. It will not stay close. A sloppy measurement of 80 against a true 50 is (30/50) = **60%** error, not 30/80 = 37.5%. Dividing by the experimental value rewards large mistakes with a smaller-looking percent. That is a bad incentive. The theoretical value stays in the denominator.

**Zero as the theoretical value** breaks the formula, same as any percent change from zero. A prediction of 0 and a measurement of 0.2 has no percent error in this definition. Report the absolute error.

The [percentage change calculator](/percentage-change-calculator) will compute this if you put the theoretical value in the old slot and the measurement in the new slot. Label the result “percent error” yourself. The tool does not know you are in a lab.

## Percent difference

Two students measure the same string as 20.0 cm and 21.0 cm. Neither is the handbook. A common definition is:

percent difference = |a − b| / ((a + b) / 2) × 100

The denominator is the average of the two measurements.

Gap = 1.0. Average = 20.5. Percent difference = 1 / 20.5 × 100 ≈ **4.88%**.

If you had treated 20 as true, the percent error of the 21 would be 5%. If you had treated 21 as true, the percent error of the 20 would be about 4.76%. The average-denominator version sits between them and refuses to anoint a winner. That refusal is the point. Do not call it percent error in the same sentence. The names mark who was allowed to be “right.”

| a | b | Percent difference (avg base) | If a were “true” |
| --- | --- | --- | --- |
| 20 | 21 | 4.88% | 5% |
| 100 | 110 | 9.52% | 10% |
| 8 | 12 | 40% | 50% |

As the two numbers spread apart, “difference” and “error” stop being casually interchangeable. Say which denominator you used in the first line of the answer, not in a footnote.

## Relative error in plain arithmetic

The same shape shows up outside labs. You estimate a bill as €60 and it is €64.50. If you treat €64.50 as the true amount, the percent error of the estimate is (60 − 64.50) / 64.50 ≈ **−7%**. If you are checking a mental-math method and the true value is the calculator, the calculator’s number is the theoretical one. [Mental math](/guides/mental-math-percentages) is “good” when this percent stays inside a tolerance you chose (a few percent on a tip, not a few percent on a tax filing).

A forecast of 10% sales growth that comes in at 7% is not a 3% error in the sales. It is 3 **percentage points** of growth, and the relative error on the growth rate is (7 − 10) / 10 = **−30%** if you treat 10 as the reference forecast. The error on the sales level depends on the actual sales. Vocabulary from [percentage points](/guides/percentage-increase-vs-percentage-points) saves you from calling a miss on a rate a miss on the revenue.

## Propagation, lightly

If a density is mass divided by volume, and each measurement has a percent error, a rough upper bound used in school labs is to **add the percent errors** of the inputs for a product or a quotient. Mass 2% high and volume 1% low can push density about 3% high, in that rough rule, because dividing by a smaller volume makes the result larger and the mass error points the same way. This is not a statistical confidence interval. It is a way to stop quoting a density to five digits when the mass was only good to two percent. If the course wants differentials or standard deviations, use that method. Do not let “percent of a percent” creep in here: you are adding percentage-point-like relative errors of different measurements, under a stated approximation, not taking 2% of 1%.

A calculator result of 1.333333 from inputs you only know to the nearest gram is theater. Match the output’s precision to the percent error of the inputs. [Percent of a percentage](/guides/percent-of-a-percentage) is a different operation; do not multiply the two error percents and call that the combined error.

## When to bother

Use percent error when a reference value is genuinely more trusted than the measurement: a calibration mass, a known concentration, an answer key. Use percent difference when two methods are peers and you want a symmetric gap. Use ordinary percent change when time or a before-and-after story supplies the base for you.

Always write the absolute gap next to the percent if the numbers are small. A 50% error on a 0.2 mm gap can be a tiny miss. A 2% error on a bridge length is not a tiny miss. The percent is the comparison. The unit is the consequence. The [percentage change calculator](/percentage-change-calculator) will divide whichever pair you give it. Label the denominator in your notes so tomorrow’s you knows whether you claimed an error or a difference.
`,
  },
  {
    slug: "percent-of-a-percentage",
    title: "Percent of a Percentage",
    description:
      "What people mean by “50% of 20%,” when to multiply the decimals, and when they actually wanted percentage points instead.",
    published,
    updated,
    relatedTools: ["percentage-calculator", "what-is-x-percent-of-y"],
    relatedGuides: ["percentage-increase-vs-percentage-points", "how-to-calculate-percentages"],
    faqs: [
      {
        q: "What is 50% of 20%?",
        a: "Multiply the decimals: 0.50 × 0.20 = 0.10, which is 10%. Half of a 20% share is a 10% share of the original whole, if that is the question you meant.",
      },
      {
        q: "Is “20% more than 20%” the same idea?",
        a: "No. Twenty percent more than a 20% rate can be read as a relative bump (20% × 1.20 = 24%) or, wrongly, as 40%. It is not “50% of 20%.” Read the word of versus the word more.",
      },
    ],
    body: `
“Percent of a percentage” sounds like a riddle and is usually one of three ordinary operations wearing a sloppy sentence. You either multiply two rates, or you take a percent of a count that happens to have been produced by an earlier percent, or you meant percentage points and said “percent” because the first number already had a sign. The fix is to name the whole you are taking a piece of.

## Multiplying two percents

**50% of 20%** = 0.50 × 0.20 = 0.10 = **10%**.

**10% of 10%** = **1%**.

**25% of 8%** = **2%**.

This is legitimate when both percents refer to a nested share. A club is 20% of the school, and half of the club (50% of that 20%) is 10% of the school. The outer whole is the school. You multiplied because “of” means multiply, and a percent is a decimal. The [what is X% of Y](/what-is-x-percent-of-y) calculator will do it if you convert the second percent to a plain number first: 50% of 20 = 10, and you remember the result is still “percent of the school,” not “percent of the percent sign.”

| Phrase | Decimals | Result |
| --- | --- | --- |
| 50% of 20% | 0.5 × 0.2 | 10% |
| 10% of 30% | 0.1 × 0.3 | 3% |
| 200% of 15% | 2 × 0.15 | 30% |
| 5% of 5% | 0.05 × 0.05 | 0.25% |

200% of 15% is 30%, not 215% and not 17%. Doubling a share doubles the share. It does not add 200 percentage points.

## A percent of a count that came from a percent

A town has 40,000 people. 20% are under 18, which is 8,000 children. 25% of those children are in secondary school: 0.25 × 8000 = **2,000**, which is 5% of the town (0.25 × 0.20 = 0.05). You can work in people or in nested percents. Working in people is safer when the second percent might be “25% of the town” misread as “25% of the children.” The sentences differ by a factor of five here (10,000 versus 2,000). If you cannot point at the group the second percent applies to, do not multiply yet.

This is the same discipline as the base check in [how to calculate percentages](/guides/how-to-calculate-percentages). Nested percents do not deserve a new formula. They deserve a slower sentence.

## When the speaker wanted points

“We want 50% of the 20% margin” might mean half the margin as a share of price, so a 10% margin, which is the multiplication above. In a pricing meeting it might instead mean “cut the margin by half,” which is the same multiplication, or “take 50 percentage points off a 20% margin,” which is impossible without going negative and is probably not what they meant. “Add 5% to the 20%” is the dangerous one.

- Add 5 **percentage points**: 20% + 5% = **25%** (subtraction and addition of rates).
- Add 5% **of** the 20% rate: 20% × 1.05 = **21%** (a relative bump).
- Take 5% **of** 20%: **1%**, which is a different request again.

[Percentage increase versus percentage points](/guides/percentage-increase-vs-percentage-points) is the long version. The short version: if both numbers are rates and someone says “of,” multiply decimals. If they say “points” or “up 5 percent” while staring at a rate, make them choose addition of points or a relative factor before you touch a calculator.

## Successive percents in time are not “percent of a percent” in this sense

A 10% gain followed by a 10% gain is 1.10 × 1.10 = 1.21, a 21% gain. People describe this sloppily as “10% of 10%.” The extra 1 point is 10% of the first 10% gain, applied to the original principal (0.10 × 0.10 = 0.01), added to the two 10% legs. So the phrase sneaks in through the cross term of compounding. You still should not calculate a two-year return by typing “10% of 10%” into a percent-of tool and reporting 1%. The 1% is only the cross term. The full factor includes both years’ growth. Use [compound interest](/guides/compound-interest-basics) for the full factor. Use this page for nested shares.

## A check that catches nonsense

After you multiply, translate back into people, euros, or marks with a round total. 50% of 20% of 200 students: 20% of 200 is 40, half of 40 is 20. If your decimal method said 50 students, you took 50% of 200 and ignored the 20%, or you added. The round total is the judge. Percents of percents feel abstract exactly until you restore the whole.

## Budgets and “a cut of a cut”

A department has 15% of the company budget. Leadership asks for a 10% reduction **in that department’s budget**, not a 10 percentage-point bite out of the company. The department’s share becomes 15% × 0.90 = **13.5%** of the company, if nothing else moves. People who subtract 10 from 15 and announce “we are down to 5% of the company” have removed two thirds of the department. The phrase “10% cut” almost always means multiply by 0.90, a relative cut. “Cut 10 percentage points” would mean 15 − 10 = 5, and it is a violent thing to say by accident.

The mirror image is a bonus pool. “5% of the 8% bonus budget” might mean 0.05 × 0.08 = 0.4% of payroll set aside for a subgroup, or it might mean a sloppy way to say “5 percent, out of an 8 percent conversation,” which is not a multiplication. Ask whether the second number is a pool you are slicing. If it is a pool, multiply and then convert back to money with one payroll total so the room can see euros. If it is not a pool, stop and rewrite the sentence in points or in a single percent.

A final trap is successive “percent of” in a commission chain: an affiliate gets 20% of a fee that is itself 10% of a sale. The affiliate gets 2% of the sale (0.20 × 0.10), which is €20 on a €1,000 sale, not €200 and not €20 plus €100. Writing the euros next to the percents makes the chain obvious. Hiding in percents of percents makes it sound like everyone is being paid twice.

Use the percentage calculator on the decimals, or on the counts. Do not use it to add two percents that were supposed to be nested, and do not use it to multiply two percents that were supposed to be points. The operation is the meaning. The button is only the arithmetic you already chose. When the result will be a share of a real whole — students, euros, marks — multiply that whole last and see if the headcount is one a person could point at.
`,
  },
];
