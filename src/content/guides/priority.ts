import type { Guide } from "./types";

const published = "2026-09-05";
const updated = "2026-09-26";

export const priorityGuides: Guide[] = [
  {
    slug: "how-loan-emi-works",
    title: "How Loan EMI Works",
    description:
      "How equated monthly installments split interest and principal, with a worked amortization, extra-payment examples, and the limits of a fixed-rate loan calculator.",
    published,
    updated,
    relatedTools: ["loan-calculator", "compound-interest-calculator"],
    relatedGuides: ["apr-versus-interest-rate", "compound-interest-basics"],
    faqs: [
      {
        q: "Why is so much of my first EMI interest?",
        a: "Interest is charged on the outstanding balance. At the start that balance is the full loan, so the interest slice is largest. The payment itself stays flat; only the split changes.",
      },
      {
        q: "Does paying extra principal always save money?",
        a: "On a standard amortizing loan, extra principal reduces the balance that future interest is calculated on. Contracts can charge prepayment fees or limit overpayments, so check the agreement before assuming every extra euro or dollar is free of cost.",
      },
      {
        q: "Can a fixed EMI calculator price a Euribor loan?",
        a: "Only as a what-if. Enter an assumed all-in rate (index plus spread) and treat the result as an estimate. When the index moves, the real installment moves with it.",
      },
    ],
    body: `
A friend of mine once forwarded a car-loan offer and asked a single question: “They want €489 a month. Is that mostly interest?” The honest answer is that it depends on which month you mean. An equated monthly installment (EMI) is a fixed payment, but the ingredients inside it are not fixed. Early on, interest takes a large share. Later, principal does. That shift is amortization, and it is the whole point of this guide.

PercentBox’s [loan calculator](/loan-calculator) uses the standard fixed-rate formula so you can see the payment, the total interest, and a month-by-month schedule. It is an educational estimate. It does not know your lender’s fees, insurance, or a floating index.

## What an EMI actually is

An EMI is one payment, due every month, sized so that a fixed interest rate and a fixed number of payments exactly pay the loan off. “Equated” means the payment amount stays the same. It does not mean each payment contains the same amount of interest.

Each month the lender does three things:

1. Compute interest on whatever you still owe.
2. Subtract that interest from your payment. The remainder reduces principal.
3. Carry the new, slightly smaller balance into next month.

Because the balance falls, next month’s interest is a little smaller, so a little more of the same payment hits principal. The pattern is slow at first and faster near the end.

People sometimes expect a loan to behave like a subscription: pay the fee, keep the thing. A loan is the opposite. You are buying back the principal you borrowed, and renting the unpaid part at the agreed rate until it is gone.

## The formula, without the fog

If the annual nominal rate is R (as a percent), the monthly rate is r = R / 100 / 12. For n months and principal P, the payment M is:

M = P × r × (1 + r)^n / ((1 + r)^n − 1)

When r is zero, the payment is simply P / n. There is no interest to allocate.

Take a concrete personal loan: **€25,000**, **6.5%** nominal annual interest, **5 years** (60 months). The monthly rate is 0.065 / 12 = 0.00541666…. The formula produces a payment of about **€489.15**.

Check the first month by hand:

- Interest = 25,000 × 0.00541666… ≈ **€135.42**
- Principal = 489.15 − 135.42 ≈ **€353.73**
- New balance ≈ **€24,646.27**

Month two’s interest is charged on €24,646, not on €25,000, so it is a few euros smaller. Nothing dramatic happens in any single month. The drama is the sum.

## A short amortization, then the ending

| Month | Payment | Interest | Principal | Balance after |
| --- | --- | --- | --- | --- |
| 1 | €489.15 | €135.42 | €353.73 | €24,646 |
| 2 | €489.15 | €133.50 | €355.65 | €24,291 |
| 3 | €489.15 | €131.57 | €357.58 | €23,933 |
| 12 | €489.15 | €114.20 | €374.95 | €20,708 |
| 60 | €489.15 | €2.64 | €486.51 | €0 |

Figures are rounded to the cent for reading; a lender’s schedule may differ by a few cents because of their rounding rule. The shape is what matters. After a year you have paid about €5,870 and still owe about €20,700. You are not “halfway” in any sense that matches the calendar.

Over the full 60 months you pay about **€29,349**. Interest is the difference: about **€4,349**, or roughly 17% of the amount you borrowed, spread across five years. That is not the same thing as a 17% interest rate. The rate was 6.5% a year, charged on a shrinking balance.

## Why the early months feel like “all interest”

They are not all interest — in the example above, principal is already the larger slice in month one — but interest is at its peak, and that feels wrong if you expected the payment to be a down payment on the car. The feeling comes from comparing the interest line with the purchase price in your head, not with the remaining balance.

A larger loan or a longer term makes the early interest share bigger. A €200,000 mortgage at 4% for 30 years has a payment near €955. First-month interest is about €667. Principal is only about €288. That really does look like “mostly interest,” and the math is doing exactly what the contract says.

Two consequences follow:

- Selling or refinancing early means you have repaid less principal than a straight-line guess suggests.
- The interest you will still pay is mostly a function of how long the large balance stays large.

## Term length changes the total more than people expect

Same €25,000 at 6.5%, three different terms:

| Term | Monthly payment | Total interest | Interest as % of principal |
| --- | --- | --- | --- |
| 3 years (36) | about €766 | about €2,580 | about 10% |
| 5 years (60) | about €489 | about €4,349 | about 17% |
| 7 years (84) | about €370 | about €6,120 | about 24% |

The seven-year payment is easier to fit in a monthly budget. The extra cost is a bit over €3,500 compared with the three-year loan. Neither choice is “wrong.” One buys a lower payment with future interest; the other buys less interest with a higher payment. The [loan calculator](/loan-calculator) is useful precisely when you want to slide the term and see that trade instead of trusting the headline installment.

## Extra principal payments

Suppose that after month 12 you add €1,000 on top of the regular payment, and the contract applies it to principal. The balance falls by an extra €1,000 immediately. Every later month charges interest on a smaller number, so each regular payment retires principal a little faster, and the loan ends before month 60 if you keep the same installment.

A rough way to think about the saving: you avoid 6.5% a year on that €1,000 for as long as it would have stayed borrowed. It is not a perfect quote — the amortization curve is not a flat 6.5% of the extra amount for the original remaining term — but it stops the fantasy that “interest is already baked in, so overpaying does nothing.”

What the fantasy gets right is fees. Some personal loans, especially fixed-rate consumer credit in Europe, charge an early-repayment indemnity. If the fee is large, the interest you save can be partly eaten. Read the clause. A calculator cannot see it.

Also distinguish three actions people mix up:

- **Paying the next installment early** may not reduce interest at all if the lender just parks the money until the due date.
- **Paying extra principal** reduces the balance on which interest accrues.
- **Shortening the term** (recasting) lowers how long you pay; keeping the payment and the term the same is not always what the lender does by default. Ask which one your extra payment triggers.

## Fixed rate, variable rate, and “I’ll just type Euribor”

The formula above assumes r never changes. A mortgage priced as Euribor plus a spread fails that assumption on purpose. If 12-month Euribor is 2.4% and the spread is 1.1%, today’s all-in rate is 3.5%. You can type 3.5 into a fixed calculator and get a payment that matches the current period. You cannot get a promise about next year’s Euribor.

A practical way to use the tool anyway:

- Run the payment at the rate in the offer.
- Run it again at the rate plus 2 percentage points, and at the rate minus 1, if you want a stress range.
- Compare the payments as a household-budget question (“could I still pay this?”), not as a forecast.

[Percentage points](/guides/percentage-increase-vs-percentage-points) matter here. A move from 3.5% to 5.5% is 2 percentage points, which is a 57% relative increase in the rate. The payment does not rise by 57%, because principal repayment is mixed into the installment, but it rises enough to surprise people who only looked at the relative wording in a headline.

## What this calculator leaves out

A real annual percentage rate of charge (APR, or TAEG in Portugal and similar measures elsewhere) folds in certain fees so borrowers can compare offers. The nominal rate in the EMI formula does not. If one lender advertises 6.5% and another advertises 6.2% plus a €400 opening fee and mandatory insurance, the cheaper-looking rate can be the dearer loan. See [APR versus interest rate](/guides/apr-versus-interest-rate) for that distinction.

Also outside a simple schedule:

- Interest-only periods, balloons, and step payments
- Payment holidays that add unpaid interest back onto the balance
- Day-count conventions (some contracts accrue daily, not in neat twelfths)
- Taxes, stamp duty, or notary costs paid up front
- Inflation, which changes what the future payment feels like but does not change what you owe

If you are comparing a loan with saving the same monthly amount, the [compound interest calculator](/compound-interest-calculator) is the other half of the picture. A loan’s interest is the price of having the money now. Compound growth is the price of waiting. They use related math and answer different questions.

## Mistakes that throw the schedule off

**Using the annual rate as the monthly rate.** Dividing by 12 is required. Feeding 6.5% straight into the monthly formula inflates the payment into nonsense.

**Confusing the payment with the cost.** €489 × 60 is what leaves your account. Only €4,349 of that is interest. Quoting either number alone misleads.

**Averaging the interest.** “Half the term, so half the interest” is false. More interest is paid in the first half because the balance is higher.

**Ignoring zero and negative nonsense.** A zero term or a zero principal is not a loan. A negative rate is a different product. The calculator should refuse a broken input rather than invent a payment.

**Treating the schedule as advice.** A lower payment can be the right choice for cash flow and a poor choice for total cost, or the reverse. The table does not know your emergency fund, your job, or whether the purchase can wait.

## When to use the loan calculator

Use it when you have a principal, a fixed annual rate, and a term, and you want the installment plus a picture of how interest and principal trade places. Use it to compare terms before you sit down with a lender. Use it to test an extra principal payment as a scenario.

Do not use it as a substitute for the European Standardised Information Sheet, a mortgage offer, or a variable-rate illustration. Do not use it to decide that a payment you can technically make is a payment you should make. When the rate can move, run more than one rate and read the contract’s revision rule.

The schedule is a story about a shrinking balance. Once you can see month one and month sixty side by side, the “why is it all interest?” feeling usually turns into a smaller, more useful question: how long do I want this balance to stay large?
`,
  },
  {
    slug: "how-to-calculate-vat",
    title: "How to Calculate VAT",
    description:
      "Add VAT to a net price or remove it from a gross price, with European rate examples, a gross-versus-net table, and the mistakes that overstate tax.",
    published,
    updated,
    relatedTools: ["vat-calculator", "what-is-x-percent-of-y"],
    relatedGuides: ["sales-tax-versus-vat", "common-percentage-mistakes"],
    faqs: [
      {
        q: "Why can’t I take 23% of a VAT-inclusive price?",
        a: "The inclusive price already contains the tax. The VAT share of the gross amount is rate / (100 + rate), not rate / 100. At 23%, that is 23/123 of the gross price, about 18.7%, not 23%.",
      },
      {
        q: "Is VAT the same calculation as US sales tax?",
        a: "Adding a percent on top of a net price is the same arithmetic. Which price must be displayed, who remits the tax, and whether the rate is origin- or destination-based are legal questions the formula does not answer.",
      },
      {
        q: "Which Portugal rates does a quick calculator include?",
        a: "A calculator can preset the commonly quoted standard, intermediate, and reduced rates (23%, 13%, and 6% on the mainland). Islands, exemptions, and product classifications change. Confirm the rate for the actual supply.",
      },
    ],
    body: `
VAT questions arrive in two costumes that look similar and are not. A freelancer types “add 23% to €100” and wants the invoice total. A shopper looks at a €123 shelf price and wants to know how much of it is tax. Using the first method on the second problem is the classic VAT mistake, and it quietly overstates the tax.

This guide covers the arithmetic. It is not tax advice, and it is not a filing tool. Rates, place-of-supply rules, and exemptions belong to the official guidance in the country where the supply is taxed. When you only need the arithmetic, the [VAT calculator](/vat-calculator) adds tax or extracts it and shows net, VAT, and gross together.

## Net, VAT, and gross

Three words are enough, if you keep them glued to the right number.

- **Net** (exclusive, ex-VAT) is the price before tax.
- **VAT** is the tax amount itself.
- **Gross** (inclusive, inc-VAT) is what the buyer pays: net plus VAT.

They always satisfy one check: net + VAT = gross. If your three numbers fail that, round-off aside, the method was wrong.

Countries publish more than one rate. Portugal’s mainland headlines are often 23% standard, 13% intermediate, and 6% reduced, with different rates in the Azores and Madeira. Spain, France, Germany, and the UK each have their own standard and reduced bands. A preset button is a shortcut to a rate you still have to match to the goods or service. The math does not know whether a pastry and a laptop share a rate.

## Adding VAT to a net price

When the price in front of you does not yet include tax:

VAT = net × (rate / 100)

Gross = net × (1 + rate / 100)

Or, equivalently, gross = net + VAT.

**€100 net at 23%.** VAT = 100 × 0.23 = €23. Gross = €123. You can also do 100 × 1.23 = 123 in one step.

**€80 net at 20%** (a common UK-style standard rate in examples). VAT = €16. Gross = €96.

**€49.99 net at 6%.** VAT = 49.99 × 0.06 = €3.00 to the nearest cent if you round half-up on the third decimal in the usual commercial way (2.9994 rounds to 3.00). Gross ≈ €52.99. Cent rounding is where two “correct” invoices differ by one cent; agree a rounding rule and use it on every line.

A restaurant bill that says “prices exclude VAT” needs the add method. A restaurant bill that already says “VAT included” needs the extract method below. The words on the menu decide the formula, not the size of the percent.

## Extracting VAT from a gross price

When the price already includes tax, you are not multiplying the gross by the rate. You are splitting a number that already contains the tax.

Net = gross / (1 + rate / 100)

VAT = gross − net

The VAT fraction of the gross price is rate / (100 + rate). At 23%, that is 23/123 ≈ 0.18699, or about **18.70%** of the gross amount — not 23%.

**€123 gross at 23%.** Net = 123 / 1.23 = €100. VAT = €23. The check holds.

**€123 gross, incorrectly multiplied by 23%.** 123 × 0.23 = €28.29, and 123 − 28.29 = €94.71. That pair does not rebuild a 23% add-on (94.71 × 1.23 ≈ 116.49, not 123). The error is about €5 too much tax. On a €10,000 invoice the same mistake is hundreds.

| Gross price | Rate | Correct VAT (extract) | Wrong VAT (rate × gross) | Error |
| --- | --- | --- | --- | --- |
| €123 | 23% | €23.00 | €28.29 | +€5.29 |
| €60 | 20% | €10.00 | €12.00 | +€2.00 |
| €53 | 6% | €3.00 | €3.18 | +€0.18 |
| €1,130 | 13% | €130.00 | €146.90 | +€16.90 |

The wrong column is always larger. Inclusive-price tax is a slice of a bigger pie, so the slice’s percentage of the pie is smaller than the nominal rate.

## Worked shop-floor examples

**A Portuguese mainland invoice, standard rate.** You quote a service at €1,500 before tax. Gross = 1,500 × 1.23 = €1,845. VAT = €345. If the client is a business that can recover VAT, the €345 may be a cash-flow item rather than a cost. If the client is a private person, €1,845 is the price that matters. The calculator does not know which client you have. You do.

**A reduced-rate grocery line.** €12.00 including 6% VAT. Net = 12 / 1.06 ≈ €11.32. VAT ≈ €0.68. Taking 6% of €12 (€0.72) overstates the tax by about four cents. Harmless on one yogurt, sloppy on a month of stock.

**A discount, then VAT.** A €200 net fee with 10% off, then 23% VAT. Discount first: 200 × 0.90 = €180 net. Then VAT: 180 × 0.23 = €41.40. Gross = €221.40. Doing VAT first and the discount second (200 × 1.23 = 246, then 10% off = €221.40) happens to match **if** the discount is a percent of the whole gross. A fixed €20 discount does not commute the same way. Decide whether the discount applies to the net or the gross, write it down, and only then calculate. Stacked percent discounts have their own traps, covered in [how discounts work](/guides/how-to-calculate-discounts) and [stacked discounts](/guides/stacked-discounts).

## Several lines, one rate, and the rounding cent

Invoices are rarely one number. Suppose three net lines at 23%: €10.10, €10.10, and €10.10.

- VAT per line at 2 decimals: 10.10 × 0.23 = 2.323 → €2.32. Three lines: €6.96.
- VAT on the sum: 30.30 × 0.23 = 6.969 → €6.97.

One cent appears or disappears depending on whether you round per line or on the total. Tax authorities and accounting software pick a rule. A teaching calculator that rounds the final VAT to the cent is fine for a single price and the wrong tool for reproducing a 40-line invoice to the cent. If you are checking a bill, compare the net, the rate, and the gross, and allow a cent of rounding before you assume the shop made a conceptual mistake.

## What a percentage calculator will not decide

Cross-border sales, the reverse-charge mechanism, exemptions for medical or financial services, margin schemes for second-hand goods, and distance-selling thresholds are legal classifications. Typing a rate into a box does not establish that the rate applies.

Two situations where people still want the arithmetic after the classification is done:

- **Checking a receipt** that already shows a rate, to see whether the included tax matches.
- **Building a quote** from a net day-rate you actually control.

If you do not know the rate, stop. A wrong rate with perfect arithmetic is still a wrong invoice. Official finance-ministry or tax-agency pages are the source for the rate list; a preset in a calculator is only a memory aid.

[Sales tax versus VAT](/guides/sales-tax-versus-vat) compares the US-style add-on habit with VAT-inclusive shelf prices. The algebra of “add a percent” is shared. The question “which number is the customer looking at?” is not.

## Mistakes worth naming

**Multiplying a gross price by the rate** and calling the result VAT. Use the extract formula instead.

**Adding the rate twice.** Some people compute VAT and then also multiply the net by (1 + rate), and add those together. That charges the tax twice. Pick one path.

**Using “percent of” on the wrong base.** [What is 23% of 123](/what-is-x-percent-of-y) is a legitimate question with answer €28.29. It is just not “how much VAT is inside 123.”

**Forgetting that discounts change the base.** Percent-off and VAT compose by multiplication of factors, not by adding the percentages into one blob.

**Treating island and mainland rates as interchangeable** because a button said “Portugal.”

## When to use the VAT calculator

Use it when you already know the rate and you know whether your starting number is net or gross. Add mode for quotes and ex-VAT price lists. Extract mode for shelf prices, receipts, and “how much was the tax?” questions.

Use it to show a client both numbers, because arguments about VAT are often arguments about which number someone thought was the price.

Do not use it to choose a rate, to decide if a sale is exempt, or to prepare a return. When the result will be printed on an invoice, let accounting software that implements your rounding rule have the last word, and use the calculator as the independent check of the method.
`,
  },
  {
    slug: "mental-math-percentages",
    title: "Mental Math for Percentages",
    description:
      "Build 5%, 15%, 20%, and awkward tips from a 10% anchor, with restaurant-bill walkthroughs and a clear line for when to stop estimating.",
    published,
    updated,
    relatedTools: ["percentage-calculator", "tip-calculator", "discount-calculator"],
    relatedGuides: ["how-to-calculate-a-tip", "how-to-calculate-percentages"],
    faqs: [
      {
        q: "What is the fastest anchor for everyday percents?",
        a: "Ten percent. Move the decimal one place left. Five percent is half of that, twenty percent is double, and fifteen percent is the ten plus the five.",
      },
      {
        q: "How do I estimate an 18% tip without a phone?",
        a: "Find 10%, take half of it for 5% (together 15%), then add about a third of the 10% for the remaining 3%. Or find 20% and shave off a tenth of that 20%, which removes 2 percentage points.",
      },
      {
        q: "When is mental math the wrong tool?",
        a: "When a cent matters on an invoice, when discounts stack, when interest compounds, or when the number is money you cannot easily replace. Estimate to spot-check, then use a calculator for the figure you will pay or publish.",
      },
    ],
    body: `
Most percentage panic is not about the formula. It is about standing at a table, or in an aisle, wanting an answer before you unlock a phone. Mental math will not replace the [percentage calculator](/percentage-calculator). It will tell you whether the number on the screen is in the right neighborhood, and it will get you through a tip when the signal is bad.

The whole toolkit is one move — find 10% — plus the willingness to add and halve.

## The 10% and 1% anchors

Ten percent of a number is that number with the decimal point moved one place left.

- 10% of 64 is 6.4
- 10% of €64.50 is €6.45
- 10% of 250 is 25
- 10% of 8 is 0.8

One percent is the same move again: two places left. 1% of €64.50 is €0.645, about 65 cents. You rarely need 1% alone. You need it as a brick for 2%, 3%, or 4%.

If the number is awkward, round first and remember that you rounded. 10% of €64.50 is easier as 10% of €65, which is €6.50, then subtract 10% of the extra €0.50 (five cents). You are back at €6.45. Rounding without a return trip is how a “quick” tip becomes a rude one or an overly generous one without you noticing.

## Building the usual suspects

| Target | Built from | Example on €80 |
| --- | --- | --- |
| 5% | half of 10% | €4 |
| 15% | 10% + 5% | €12 |
| 20% | double 10% | €16 |
| 25% | a quarter of the whole, or 20% + 5% | €20 |
| 30% | 3 × 10% | €24 |
| 40% | 4 × 10% | €32 |
| 50% | half | €40 |
| 75% | half + a quarter | €60 |

Check 15% of 80 the long way: 0.15 × 80 = 12. The anchor matches. That match is why the method is safe to trust for estimates. You are not inventing a new formula. You are applying “percent means hundredths” in an order your head can hold.

**25%** is the one worth memorizing as a fraction. A quarter of the price is the sale price’s discount when a sign says 25% off, and it is also the VAT-ish chunk people mis-estimate. A quarter of €49 is a bit over €12 (€12.25). If a mental “25% off” answer is €20, you have halved instead of quartered.

**50% and 10%** are the two estimates I trust without rechecking. Everything else I rebuild from them.

## A restaurant bill, out loud

Bill: **€64.50**. You want about **18%**, which is a common “good, not theatrical” tip in places where tipping is expected. (If you are in a country where service is already in the price, this section is a math drill, not a custom. The [tip guide](/guides/how-to-calculate-a-tip) separates those cases.)

Path A, from 15% plus a bit:

- 10% = €6.45
- 5% = €3.23 (half of €6.45; half of 6 is 3, half of 0.45 is about 0.22, so €3.22–€3.23)
- 15% ≈ €9.68
- 3% is about a third of the 10%. A third of €6.45 is €2.15.
- 18% ≈ €9.68 + €2.15 = **€11.83**

Path B, from 20% minus a little:

- 20% = €12.90
- 2% ≈ €1.29
- 18% ≈ €12.90 − €1.29 = **€11.61**

The two paths differ by about twenty cents because “a third of 10%” is 3.33%, not 3%. Path B is the tighter 18%. Path A is a fine estimate if you know you ran slightly hot. The exact figure from the [tip calculator](/tip-calculator) is 0.18 × 64.50 = €11.61. Path B landed on it. That is the standard you are aiming at: within a small coin, not within a euro, on a bill this size.

Split three ways. Total with an €11.61 tip is €76.11. A third is about €25.40. Mental version: €75 split three ways is €25, and €1.11 is about 37 cents each, so **€25.37**. Close enough to hand someone a €25 note and a coin, and not close enough to write on an expense report.

## Discounts in the aisle

A jacket is **€119** with **30% off**.

- 10% of 119: 10% of 120 is 12, minus 10% of 1, so €11.90.
- 30% is three of those: €35.70.
- Sale price ≈ 119 − 36 = **€83**, if you round the discount to €36.

Exact: 119 × 0.70 = €83.30. You were 30 cents away, which is a good aisle estimate and a bad price to engrave on a receipt. Notice the shortcut I used at the end: instead of subtracting from 119, you can take **70% of the price** directly, because paying 70% is the same as removing 30%. 70% = 50% + 20% = 59.50 + 23.80 = €83.30. Two routes, one answer. If they disagree by more than rounding, redo the 10%.

**Double discounts** are where mental math should resign. A sign that says 20% off and then another 10% off is not 30% off. You can still do it in two steps: 20% off €119 is about €95 (exact €95.20), then 10% off that is about €9.50, sale price about €86. The single-step 30% answer (€83) is the wrong neighborhood to be confident in, even though it is only a few euros away. On a €2,000 sofa the gap is tens of euros. Walk through both factors, or open the [discount calculator](/discount-calculator). The longer explanation is in [stacked discounts](/guides/stacked-discounts).

## Percent change without a spreadsheet

A commute fare goes from **€2.40 to €2.70**. Difference = €0.30. The base is the old fare, €2.40. What percent of 2.40 is 0.30?

10% of 2.40 is 0.24. You are a little above 10%. 1% of 2.40 is 0.024, and 0.06 / 0.024 = 2.5. So about **12.5%**. Exact: 0.30 / 2.40 = 0.125 = 12.5%. The anchor got the whole answer because the numbers were kind.

When they are not kind — 47 increased to 61, say — find the difference (14) and ask “14 is what fraction of 47?” 10% of 47 is 4.7, and 14 / 4.7 is about 3, so about 30%. Exact is 14 / 47 ≈ 29.8%. For a conversation, “about 30%” is the right precision. For a contract, it is not.

Going backward is a different anchor. “What number, plus 15%, makes 92?” People add 15% of 92 and get stuck. The gross already includes the increase, so you divide by 1.15, you do not subtract 15% of the gross. 15% of 92 is about 13.8, and 92 − 13.8 = 78.2, but 78.2 × 1.15 ≈ 89.9, not 92. The correct start is 92 / 1.15 = 80. This is the same trap as extracting VAT, and mental math is where it bites, because subtraction feels simpler than division. If you remember only one warning from this page, remember that one.

## Compatible numbers, the quiet skill

Mental math gets hard when the base is 17.4 and the rate is 12. It gets easy when you steer toward compatible pairs:

- 12% of 50. 10% is 5, 2% is 1, total 6. Or 12% is a bit under an eighth (12.5%), and an eighth of 50 is 6.25.
- 15% of 60. 10% is 6, 5% is 3, total 9. Also, 15% of 60 is 60% of 15, which is 9. Swapping can be easier: **x% of y = y% of x**.
- 8% of 25. 8% of 100 is 8, so 8% of 25 is a quarter of 8, which is 2.

The swap identity is worth taping to the inside of your head. 4% of 75 equals 75% of 4, and 75% of 4 is 3. You just did a “hard” percent by turning it into three-quarters of a small integer.

## Where I stop estimating

I stop when any of these are true:

- The result will be typed into an invoice, a tax line, or a loan application.
- Two percentages apply in sequence (discount then tax, fee then markup).
- The base is zero or close to it. Percent change from zero is not a mental-math edge case; it is undefined in the usual formula.
- I cannot name the base out loud. “Up 20%” is meaningless until you know 20% of what.
- The money is large relative to the error I might be making. A 2% slip on a €30 dinner is coins. A 2% slip on a house deposit is a month of groceries or worse.

A good habit is to estimate first, then let the calculator confirm. If the screen says 15% of €64.50 is €40, you do not need to know which key you mis-hit. You already know 10% is only €6.45, so €40 is impossible. That is the real job of mental math in a world where everyone has a calculator: catching the impossible answer, fast.

Use the [percentage calculator](/percentage-calculator) for the figure you will rely on. Use the anchors when you are deciding whether to rely on it.
`,
  },
  {
    slug: "common-percentage-mistakes",
    title: "Common Percentage Mistakes",
    description:
      "The base-value mixups, percentage-point confusions, stacked discounts, and reverse-percent errors that make a correct formula give the wrong decision.",
    published,
    updated,
    relatedTools: [
      "percentage-calculator",
      "percentage-change-calculator",
      "discount-calculator",
    ],
    relatedGuides: [
      "percentage-increase-vs-percentage-points",
      "stacked-discounts",
      "reverse-percentages",
    ],
    faqs: [
      {
        q: "Is a 25% increase reversed by a 25% decrease?",
        a: "No. Increase 80 by 25% and you land on 100. Decrease 100 by 25% and you land on 75, not 80. You need a 20% decrease to get from 100 back to 80, because the base changed.",
      },
      {
        q: "Can I add a 10% gain and a 10% gain and call it 20%?",
        a: "Only if both percents are of the same, unchanged base. Two successive 10% gains compound to 21%. A 10% gain on a small category plus a 10% gain on a large one is not a 20% gain overall.",
      },
      {
        q: "What is wrong with percent change from zero?",
        a: "The usual formula divides by the starting value. Division by zero is undefined, so “it went from 0 to 15, what percent increase is that?” has no ordinary percentage answer. Report the absolute change instead.",
      },
    ],
    body: `
A percentage is a comparison with a base. Almost every famous mistake is a story about using the wrong base, or about adding comparisons that do not share one. The arithmetic in the [percentage calculator](/percentage-calculator) is indifferent to that. It will correctly compute the question you typed, including the question you did not mean.

This is a field guide to the mismatches I see most often, each with numbers small enough to redo by hand.

## Swapping the part and the whole

“40 is what percent of 200?” The whole is 200. The part is 40. Percent = 40 / 200 × 100 = **20%**.

“200 is what percent of 40?” is a different sentence. 200 / 40 × 100 = **500%**. Both are valid calculations. Only one answers “what share of the class is this group?” or “what share of the budget is this line?”

Before you calculate, write the sentence with the word “of.” The number after “of” is the base, the divisor. If you cannot say the sentence, you do not have a percentage yet. You have two numbers and a mood.

Grades hide this constantly. A score of 18 out of 20 is 90%. A score of 18 out of 30 is 60%. The 18 did not change. The whole did. [Test-score percentages](/guides/test-score-percentages) walks through weighted exams, where each “whole” is a different assignment.

## Reversing a percent with the same percent

Start at 80. Increase by 25%: 80 × 1.25 = **100**. Decrease that result by 25%: 100 × 0.75 = **75**. You are not home. You are 5 below where you started.

The return trip from 100 to 80 is a drop of 20 on a base of 100, which is **20%**, not 25%. The forward trip was 20 on a base of 80, which is 25%. Same gap of 20, two bases, two percents.

| Start | Change | Land on | Reverse change that returns | Reverse percent |
| --- | --- | --- | --- | --- |
| 80 | +25% | 100 | −20 | 20% |
| 50 | +100% | 100 | −50 | 50% |
| 200 | −10% | 180 | +20 / 180 | about 11.11% |
| 100 | −50% | 50 | +50 / 50 | 100% |

The last row is the one that startles people in sales meetings. “Traffic halved, then it doubled, so we are flat.” Halving is −50%. Doubling is +100%. The product of the factors is 0.5 × 2 = 1, so you are flat — and the percentages you would naively add (−50 + 100 = +50) say you are up by half. **Multiply the factors. Do not add the percents.** Factors here are 1 + r, with r as a decimal, and decreases use a minus.

A price that falls 50% needs a 100% rise to recover. A portfolio chart that shows those two moves as equal-length bars in opposite directions is drawing the wrong picture. Equal percent moves are not equal recovery moves.

## Adding percents that do not share a base

A shop runs 20% off, then an extra 10% off at the till. The combined discount is not 30%. On a €100 item the first discount leaves €80, and 10% of €80 is €8, so you pay €72. That is 28% off, not 30%. The factors are 0.80 × 0.90 = 0.72. See [stacked discounts](/guides/stacked-discounts) for a longer table, including the order question (it does not matter for successive percent-off, and it does matter if one “discount” is a fixed amount).

The same shape shows up in growth. A town’s employment rises 10% in a year when the base was small, and a city’s rises 10% when the base was large. You cannot add those tens and talk about “20% more jobs in the region.” You add the **jobs**, then compare with the old regional total. Weights matter. An unweighted average of percentages is a hobby, not a statistic.

Successive investment years do compound, which is yet another operation. Two +10% years: 1.10 × 1.10 = 1.21, a **21%** gain, not 20%. The extra one point is last year’s gain earning its own gain. That is the entire subject of [compound interest](/guides/compound-interest-basics). Calling it 20% is a small error over two years and a ridiculous error over thirty.

## Percentage points dressed up as percent change

A poll moves from 40% support to 50% support. Two true sentences:

- Support rose by **10 percentage points**.
- Support rose by **25%** of its previous level (10 / 40 = 0.25).

A headline that says “support surged 10%” is using the percentage-point figure as if it were a relative change, or the relative figure as if it were points. Readers cannot tell which, and the two stories differ by a lot: 10% of 40% support would be a move to 44%, not to 50%.

Interest rates and VAT bands produce the same ambiguity. “The rate increased by 2%” might mean 5.00% became 5.10% (a 2% relative bump) or 5% became 7% (2 points). In contracts, insist on “percentage points” when you mean subtraction of rates. The longer unpacking, with poll and grade examples, is [percentage increase versus percentage points](/guides/percentage-increase-vs-percentage-points).

## The inclusive-price trap

You know the number after a percent has already been applied, and you try to undo it by subtracting that same percent of the final number.

A shirt costs €80 after 20% off. What was the original? Subtracting 20% of 80 gives 64, and 64 is not a price that becomes 80 after 20% off (64 × 0.8 = 51.2). The sale price is 80% of the original, so original = 80 / 0.80 = **€100**. Check: 20% of 100 is 20, and 100 − 20 = 80.

VAT-inclusive prices are the same trap with a different costume. Gross = net × (1 + rate). Net = gross / (1 + rate). Multiplying the gross by the rate overstates the tax. The full walk-through is in [how to calculate VAT](/guides/how-to-calculate-vat).

Any time the percent is already inside the number, **divide by the factor**. Do not subtract the percent of the result.

## Change from zero, and change of a tiny base

The percent-change formula is (new − old) / |old| × 100. If old is zero, you are dividing by zero. “We had no customers on Monday and 15 on Tuesday, a infinite percent increase” is a joke, not a metric. Report “15 more customers.” If your dashboard prints a huge percent because last period was nearly zero, read the absolute numbers before you celebrate or panic.

A base of 2 becoming 8 is a 300% increase and also “6 more.” Both can be true. Choosing the percentage without the absolute figure is how small counts get promoted into strategy.

## Averages of averages, and the missing weight

Two classes. One scores 90% with 10 students. One scores 60% with 40 students. The simple average of 90 and 60 is 75. The student-weighted result is (10 × 90 + 40 × 60) / 50 = **66%**. Quoting 75% describes two classrooms as if they were the same size. They are not.

Whenever you average percentages, ask what the percentage was “of,” and whether those wholes were equal. If they were not, average the parts and the wholes separately, then divide.

## A checklist before you trust the result

1. Say the base out loud. It is the number after “of,” or the starting value in a change.
2. If you are undoing a percent, divide by (1 ± rate), do not apply the percent again in reverse on the result.
3. If two percents happen in sequence, multiply the factors.
4. If you are talking about a rate that is already a percent, decide whether you mean points or relative change, and use the words.
5. If the starting value is zero, do not force a percent.
6. If you averaged percents, check that the groups were the same size.

Then calculate. The [percentage change calculator](/percentage-change-calculator) and the [discount calculator](/discount-calculator) are the right check once the sentence is clean. They will not rescue a sentence that compares the wrong things — that part stays with you, which is why it belongs in a guide and not only in a button.
`,
  },
];
