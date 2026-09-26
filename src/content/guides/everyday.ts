import type { Guide } from "./types";

const published = "2026-09-05";
const updated = "2026-09-26";

export const everydayGuides: Guide[] = [
  {
    slug: "how-to-calculate-percentages",
    title: "How to Calculate Percentages",
    description:
      "The four everyday percentage formulas — percent of, reverse percent, apply a change, and change from A to B — with worked numbers and the base each one uses.",
    published,
    updated,
    relatedTools: [
      "percentage-calculator",
      "what-is-x-percent-of-y",
      "x-is-what-percent-of-y",
      "percentage-change-calculator",
    ],
    relatedGuides: ["mental-math-percentages", "common-percentage-mistakes", "reverse-percentages"],
    faqs: [
      {
        q: "What is the one sentence to memorize?",
        a: "A percentage is a fraction with denominator 100. “X% of Y” means (X/100) × Y. “X is what percent of Y” means (X/Y) × 100. Every other everyday case is one of those two, sometimes with the result fed back in as a new starting value.",
      },
      {
        q: "Do I multiply by 100 or divide by 100?",
        a: "Divide by 100 when you are turning a percent into a piece of a number (15% becomes 0.15, then you multiply). Multiply by 100 when you already have a ratio and you want to name it as a percent (0.125 becomes 12.5%).",
      },
      {
        q: "Is 200% twice the amount?",
        a: "200% of an amount is twice that amount. A 200% increase is three times the original, because you keep the original and add twice it. Read whether the sentence says “percent of” or “percent increase.”",
      },
    ],
    body: `
Percentages are a dialect of fractions. “Per cent” means “per hundred,” so 25% is 25/100, which is the same quantity as 1/4 and as 0.25. Once that translation is boring, the four formulas people actually need stop looking like four topics. They are two questions — take a piece, or name a ratio — plus the bookkeeping of a before-and-after.

Use the [percentage calculator](/percentage-calculator) when you want the number. Use this page when you want to know which number you were supposed to ask for.

## Turning a percent into a multiplier

The bridge between the percent sign and ordinary arithmetic is division by 100.

| Percent | Fraction | Decimal multiplier |
| --- | --- | --- |
| 1% | 1/100 | 0.01 |
| 5% | 5/100 = 1/20 | 0.05 |
| 10% | 10/100 = 1/10 | 0.10 |
| 12.5% | 1/8 | 0.125 |
| 25% | 1/4 | 0.25 |
| 100% | 1/1 | 1 |
| 150% | 3/2 | 1.5 |

To apply a percent, multiply by the decimal. To remove the percent sign from a rate you will add or subtract, do the same: 8% interest as a decimal is 0.08. Forgetting this division is how “8% of 500” becomes 4,000 instead of 40. If the result is about 100 times too big, the percent never became a decimal.

## What is X% of Y?

This is the piece-of-a-whole question. Result = (X / 100) × Y.

**15% of 200.** 15/100 = 0.15. 0.15 × 200 = **30**.

**7.5% of 80.** 0.075 × 80 = **6**. Half of 15% would be a different problem; 7.5 is already the rate, so you do not halve after multiplying.

**250% of 18.** 2.5 × 18 = **45**. More than 100% is allowed. It means more than the whole reference amount. It does not mean “an increase of 250%” unless the sentence says increase.

A useful rearrangement: X% of Y equals Y% of X. So 8% of 25 equals 25% of 8. A quarter of 8 is 2, which is the easier product. The [what is X% of Y calculator](/what-is-x-percent-of-y) does not care which way you find easier; the identity is for your head, and it is developed further in [mental math for percentages](/guides/mental-math-percentages).

## X is what percent of Y?

This names a ratio. Percent = (X / Y) × 100, and Y cannot be zero.

**25 is what percent of 200?** 25/200 = 0.125. × 100 = **12.5%**.

**42 out of 50.** 42/50 = 0.84 = **84%**. Test scores are this formula with a friendlier name. Weighted tests are several of these formulas glued together; see [test-score percentages](/guides/test-score-percentages).

**9 is what percent of 12?** 9/12 = 0.75 = **75%**.

The order is the whole difficulty. The phrase “percent of” points at the divisor. If you catch yourself dividing the larger number by the smaller one “because percents should be under 100,” you have added a rule the definition does not have. 18 is 150% of 12. That can be the right answer.

The dedicated tool is [X is what percent of Y](/x-is-what-percent-of-y). When the percent is already baked into a final price and you need the original, you want the inverse instead, covered in [reverse percentages](/guides/reverse-percentages).

## Applying an increase or a decrease

You have a starting value and a rate. You want the new value, not the ratio.

Increase: new = value × (1 + p/100)

Decrease: new = value × (1 − p/100)

The change itself, separated from the new total, is value × (p/100).

**100 increased by 15%.** 100 × 1.15 = **115**. The increase alone is 15.

**100 decreased by 15%.** 100 × 0.85 = **85**.

**€64.50 with an 18% tip.** The tip is the “percent of” piece: 64.50 × 0.18 = €11.61. The total is the increase formula: 64.50 × 1.18 = €76.11. Same rate, two questions — the piece, or the piece plus the original. The [tip calculator](/tip-calculator) prints both because dinner arguments are usually about the total.

**A 30% discount on €119.** Pay 70% of the price: 119 × 0.70 = €83.30. Savings = €35.70. “Percent off” is a decrease. The number you pay is 100% minus the discount, times the price.

Watch the language “percent increase” versus “percent of.” A 200% increase on 50 is 50 × (1 + 2) = 150. 200% of 50 is 100. The formulas differ by whether the original is still in the result.

## Change from an old number to a new one

Now you are not given the rate. You are given both endpoints.

Percent change = (new − old) / |old| × 100

The absolute value on the old number keeps the sign of the change in the numerator, where it belongs: positive means growth, negative means decline. Some textbooks drop the absolute value and assume the old number is positive, which is the usual case for prices and scores.

**From 80 to 100.** (100 − 80) / 80 × 100 = **25% increase**.

**From 100 to 80.** (80 − 100) / 100 × 100 = **20% decrease**.

Those are not mismatches. The gap is 20 either way. The base changed, so the percent changed. Undoing a 25% increase takes a 20% decrease. [Common percentage mistakes](/guides/common-percentage-mistakes) keeps a table of these return trips, because this is the error that makes “we gave it all back” false.

**From 50 to 0.** (0 − 50) / 50 × 100 = **−100%**. A total loss is a 100% decrease. The reverse, from 0 to 50, divides by zero and is not a percent change. Say “it went from nothing to 50.”

The [percentage change calculator](/percentage-change-calculator) is the right tool once both numbers exist. The [increase](/percentage-increase-calculator) and [decrease](/percentage-decrease-calculator) tools are the right ones when you have a rate instead of a second number.

## Choosing the formula on purpose

| You know | You want | Formula | Example |
| --- | --- | --- | --- |
| A rate and a base | The piece | (rate/100) × base | 15% of 200 = 30 |
| A part and a whole | The rate | (part/whole) × 100 | 25 of 200 = 12.5% |
| A value and a rate of change | The new value | value × (1 ± rate/100) | 100 + 15% = 115 |
| An old value and a new value | The rate of change | (new−old)/|old| × 100 | 80 → 100 = 25% |
| A final value that already includes the rate | The original | final / (1 ± rate/100) | 115 was 100 before +15% |

If two rows seem to fit, read the sentence again and mark the base. The calculator cannot do that marking for you. It can only multiply what you hand it.

## A longer worked mix

A club had **80** members. It grows **25%**, then loses **10** members, then you are asked what percent of the *original* club remains.

1. After growth: 80 × 1.25 = 100.
2. After the loss: 100 − 10 = 90. The loss was a count, not a percent. Do not turn 10 into 10% unless the sentence did.
3. 90 is what percent of the original 80? 90/80 × 100 = **112.5%**.

Someone who “adds 25 and subtracts 10” and declares +15% has mixed a percent with a headcount. The steps above keep the units intact. That bookkeeping, more than any trick, is the skill.

## When to use the calculators

Use them for any figure you will pay, publish, or grade. Use the matching tool rather than the general one when you want the labels (tip, discount, change) to match the story, so you are less likely to type the rate into the wrong box.

Use mental anchors — 10%, then halves and doubles — as a sanity check. If 15% of 200 comes back as 300, the anchor (10% is 20, so 15% is near 30) tells you the decimal slipped. The procedure is in [mental math for percentages](/guides/mental-math-percentages).

Do not average a pile of percentages until you know each one was taken of a comparable whole. Do not describe a move between two rates (8% interest to 10% interest) with the change formula until you have decided you mean relative change and not [percentage points](/guides/percentage-increase-vs-percentage-points). The four formulas are enough for daily life only when the sentence is already precise.
`,
  },
  {
    slug: "percentage-increase-vs-percentage-points",
    title: "Percentage Increase vs Percentage Points",
    description:
      "Why a rate moving from 8% to 10% is 2 percentage points and also a 25% relative increase, with polls, grades, and interest-rate examples.",
    published,
    updated,
    relatedTools: ["percentage-change-calculator", "percentage-increase-calculator"],
    relatedGuides: ["common-percentage-mistakes", "how-to-calculate-percentages"],
    faqs: [
      {
        q: "What is a percentage point?",
        a: "It is the arithmetic difference between two percentages. From 8% to 10% is 2 percentage points. You subtract. You do not divide.",
      },
      {
        q: "When is the relative percent the better description?",
        a: "When you care how large the move is compared with the starting rate: a jump from 1% to 2% is only 1 point but a 100% relative increase. Say both if the audience could confuse them.",
      },
      {
        q: "Are basis points the same idea?",
        a: "A basis point is one hundredth of a percentage point. 100 basis points = 1 percentage point. A central-bank move of 25 basis points is 0.25 percentage points, for example from 3.00% to 3.25%.",
      },
    ],
    body: `
Two true sentences can describe one change in a rate, and they sound like they disagree. A savings account moves from 2% interest to 3% interest. The difference is **1 percentage point**. Relative to the old rate, the increase is 1/2 = **50%**. Neither speaker is doing fantasy math. They are answering different questions, and English uses the word “percent” for both.

If you remember a single habit, make it this: when both numbers already wear a percent sign, say whether you subtracted or divided.

## Percentage points are a subtraction

Percentage points (sometimes written pp, or p.p.) measure the gap between two percentages by ordinary subtraction.

- 10% to 12% is **2 percentage points**
- 40% support to 50% support is **10 percentage points**
- 19% VAT to 23% VAT is **4 percentage points**
- 3.00% to 3.25% is **0.25 percentage points**, which bond traders also call **25 basis points**

There is no division. The “point” is already in percent units. This is the right tool when the rate itself is the object: a contract clause, a tax band, a poll share, a pass mark.

## Relative change divides by the starting rate

Apply the ordinary percent-change formula to the two rates, treating them as plain numbers:

Relative change = (new − old) / |old| × 100%

| Old rate | New rate | Percentage points | Relative change |
| --- | --- | --- | --- |
| 8% | 10% | +2 pp | (2/8) = +25% |
| 2% | 3% | +1 pp | +50% |
| 1% | 2% | +1 pp | +100% |
| 40% | 50% | +10 pp | +25% |
| 90% | 95% | +5 pp | about +5.6% |
| 20% | 15% | −5 pp | −25% |

The same 1 percentage point gap is a doubling when you start at 1% and a shrug when you start at 90%. Relative change is the right tool when the starting rate is the base that matters — “our click-through doubled” — and a misleading tool when the level of the rate is what people live with. A tax that moves from 1% to 2% really does double, and it also really is only one extra cent on a euro. Report the cents as well as the percent if you are talking to someone who pays the tax.

## Polls, where the mix-up is the headline

A candidate moves from 40% to 50% of decided voters.

- The share of the electorate changed by **10 percentage points**.
- The candidate’s support is **25% higher** than it was, relative to the old share.

“Up 10%” fits neither sentence cleanly. Readers who hear “10%” often picture a move from 40 to 44 (that is, 10% of 40, added on) or a move that is “10 percent more popular” in a vague sense. The 40-to-50 story is the 10-point story. If a journalist means the relative one, “up 25%” or “up a quarter” is available and unambiguous.

Small shares make the relative number loud. From 4% to 6% is 2 points and a **50%** relative increase. A minor party can truthfully claim both “we gained 2 points” and “support rose by half.” The first tells you they are still small. The second tells you the direction was strong. Printing only the second is how a 6% party is dressed as a surge without the denominator.

## Grades and cut scores

A passing bar moves from 70% to 75%. That is **5 percentage points**, not “5% harder” in the relative sense (the relative change of the bar is 5/70 ≈ 7.1%). A student who scored 74% passed yesterday and fails today. Their score did not fall. The threshold moved by 5 points.

Now take the student’s own score, from 70% to 77% of the marks. That is 7 percentage points of the exam, and a 10% relative improvement on their previous percentage score (7/70 = 0.10). Teachers usually mean points when they say “you went up 7 percent” in a hallway, and they usually mean the relative figure when they talk about improvement “by 10%.” Ask which denominator they used: the exam’s total marks, or last term’s percentage.

Weighted grades add a further base problem that is not about points at all. Averaging an 80% homework (worth 10% of the course) with a 60% final (worth 50%) by taking the mean of 80 and 60 is the unweighted mistake in [common percentage mistakes](/guides/common-percentage-mistakes). Points versus relative change is a second layer. You can get either layer wrong independently.

## Interest rates and central banks

Suppose a loan’s nominal rate moves from 6% to 7%.

- The rate is **1 percentage point** higher.
- The rate is about **16.7%** higher than it was (1/6 ≈ 0.1667).
- The monthly payment does **not** rise by 16.7%, and it does not rise by 1% of the payment either, except by coincidence.

On an amortizing loan the payment contains principal and interest. Interest is the part tied to the rate; principal repayment is tied to the remaining balance and the term. A 1 point move changes the interest slice a lot and the principal schedule a little, so the payment rise sits somewhere below the relative change in the rate. The way to see the actual euro change is to run both rates through the [loan calculator](/loan-calculator), not to multiply the old payment by 1.167.

Central banks speak in basis points because “0.25 percentage points” is a mouthful and “a quarter of a percent” is ambiguous (a quarter of a percent of what?). **25 basis points = 0.25 percentage points = 0.25% absolute on the rate.** It is not a 25% relative move unless the starting rate was 1%.

## VAT and prices, a related but different pair

A standard VAT rate moving from 20% to 23% is 3 percentage points, and a 15% relative increase in the rate (3/20). The price the customer pays does not rise by 15%. If a net price is €100, the gross moves from €120 to €123, which is €3, or **2.5%** more at the till (3/120). Three different percents, all defensible, describe one tax change:

1. +3 percentage points on the VAT rate
2. +15% relative change in the VAT rate
3. +2.5% change in the gross price

If you are the person paying, (3) is the price change. If you are comparing statutes, (1) is the statute change. (2) is mostly useful as a warning that relative language makes a 3-point tax move sound like a 15% price move. It is not. [How to calculate VAT](/guides/how-to-calculate-vat) shows the gross formula; this section is only about naming the change.

## How to write the sentence so it survives

- Prefer **“from 8% to 10%, up 2 percentage points”** when you mean subtraction.
- Prefer **“10 is 25% higher than 8”** when you mean division. Include the original number.
- Avoid **“up 2%”** and **“up 10%”** for moves between percentages. Both are commonly read the wrong way.
- If a decision or a headline depends on the figure, give the two raw percentages as well. “Support went from 40% to 50%” needs no jargon and cannot be mis-divided by a hurried reader.

The [percentage change calculator](/percentage-change-calculator) computes the relative column. It will happily tell you that 8 to 10 is 25%. It cannot tell you that you wanted points. That choice is the content of the sentence, which is why a calculator page alone never quite teaches this distinction.

## When the difference is too small to matter — and when it is not

On a move from 2% to 2.1%, the gap is 0.1 points and a 5% relative bump. For a household budget the cash effect may be noise. On a move from 2% to 4% in a mortgage offer, calling it “up 2%” instead of “up 2 points” can hide a payment change that is the size of a utility bill. Run the money. Name the points. If you still want the relative figure, label it as relative to the old rate, not as the change in the price.

Use both numbers when you are writing for anyone who might act. One number is a slogan. Two numbers are a measurement.
`,
  },
  {
    slug: "how-to-calculate-a-tip",
    title: "How to Calculate a Tip",
    description:
      "Tip, total, and per-person split with pre-tax versus post-tax bases, a 15–20% table, and what to do when service is already included.",
    published,
    updated,
    relatedTools: ["tip-calculator", "percentage-calculator"],
    relatedGuides: ["mental-math-percentages", "how-to-calculate-percentages"],
    faqs: [
      {
        q: "Should I tip on the tax?",
        a: "Where tipping is a custom on the meal, many people use the pre-tax subtotal, and some use the full bill. Pick one rule and stay with it. The percent is not a law; the base you choose changes the euros more than arguing over 18 versus 20 once the bill is small.",
      },
      {
        q: "How do I split an uneven tip fairly?",
        a: "Compute one tip on the whole bill, add it, then split the grand total by headcount if you shared equally. If people ordered very different amounts, split the pre-tip subtotals first and let each person tip on their own share.",
      },
      {
        q: "What if the receipt already has a service charge?",
        a: "A mandatory service charge is not a tip you still owe, unless you intend an extra. Read the line. In many European restaurants the printed prices already assume staff are paid a wage, and an extra percent is optional rather than expected.",
      },
    ],
    body: `
A tip is a percentage of a bill, then a decision about whose bill. The arithmetic is short. The arguments are about the base (before tax or after), the rate (local custom), and the split (equal heads or equal dishes). PercentBox’s [tip calculator](/tip-calculator) does the arithmetic for a rate, a bill, and a headcount. This page is about not feeding it the wrong bill.

## The two lines you actually want

Tip = bill × (rate / 100)

Total = bill + tip = bill × (1 + rate / 100)

Per person, if you split evenly = total / people

**18% on €64.50.** Tip = 64.50 × 0.18 = **€11.61**. Total = **€76.11**. Two people pay €38.06 each if you round the last cent onto one person, or €38.055 if you pretend coins divide forever. In cash, someone pays an extra cent. That is not a math failure.

**20% on €40.** Tip = €8. Total = €48. Clean numbers are how you notice a wrong key: if the calculator says the tip is €18, you doubled the bill in your head and you know to look again.

**15% on €100, split 4 ways.** Tip = €15. Total = €115. Each share = €28.75.

## A small table worth keeping

On a **€50** pre-tip bill:

| Rate | Tip | Total | Each, split by 2 | Each, split by 3 |
| --- | --- | --- | --- | --- |
| 10% | €5.00 | €55.00 | €27.50 | €18.33 |
| 15% | €7.50 | €57.50 | €28.75 | €19.17 |
| 18% | €9.00 | €59.00 | €29.50 | €19.67 |
| 20% | €10.00 | €60.00 | €30.00 | €20.00 |
| 25% | €12.50 | €62.50 | €31.25 | €20.83 |

Three-way splits create repeating cents. €59 / 3 = €19.666…. Two people pay €19.67 and one pays €19.66, or you round the total to a splittable number by adjusting the tip a few cents. Do that openly. Silent rounding is how friends decide the calculator is “wrong.”

For an ugly bill, build 15% or 20% from 10% as in [mental math for percentages](/guides/mental-math-percentages), then confirm with the tool if the total will be written down.

## Pre-tax or post-tax

Imagine a €50 meal and €5 of sales tax or VAT shown separately, so the card slip says €55.

- Tip 20% on the **meal**: 0.20 × 50 = €10. Total paid including tax = 55 + 10 = €65.
- Tip 20% on the **slip**: 0.20 × 55 = €11. Total = €66.

One euro, on this bill. On a €400 dinner the same choice is €8. Neither is a law of percentages. In the United States, custom is often described as a percent of the pre-tax restaurant bill, commonly in a 15–20% band, with 18–20% treated as a solid default when service was good. Local habit varies by city, and delivery apps add their own suggested buttons, which are sometimes calculated on a total that already includes fees.

In much of Europe, menu prices are service-inclusive wages-plus-tips are not the same social script. A percent on top can be a thanks, not an obligation. If a **service charge** is already on the bill, you are looking at a fee the venue added. Treating it as the subtotal for a second full tip double-counts the same idea. Read the words “service included,” “gratuity,” and “suggested tip” as different lines.

VAT muddies the printed total in a specific way. If prices on the menu already include 23% VAT, there may be no separate tax line to exclude. Your “pre-tax” figure is not shown. You would have to [extract the VAT](/guides/how-to-calculate-vat) to tip only on the net, which almost nobody does at the table, and which is an odd thing to do if the custom is “a percent of what I was charged for the food.” When tax is not a separate line, tip on the amount you are actually staring at, unless you have a reason not to.

## Uneven orders

Four people. Three ate pasta at €16, one ordered the €42 tasting menu, and you shared €10 of dessert. Subtotal €100. A 20% tip is €20, total €120.

**Equal split:** €30 each. The pasta eaters subsidize the tasting menu. That can be a deliberate “we’re out together” rule. It should not be a surprise.

**Split by food, tip on each share:** Each pasta diner’s food-plus-share-of-dessert needs a rule for the dessert. Say dessert is €2.50 each. Pasta person owes €18.50 before tip, then 20% is €3.70, total €22.20. The tasting menu is €44.50 before tip, tip €8.90, total €53.40. Sum of tips = 3 × 3.70 + 8.90 = €20. Good, the tip is conserved. The headache is the shared dessert, not the percent.

A practical compromise: split anything shared equally, compute one tip on the grand subtotal, and allocate that tip in proportion to each person’s unshared food. Proportional allocation is another percentage: person share / subtotal × tip. For the tasting menu, 42/100 × 20 = €8.40 of the tip, slightly different from the “tip on my own plate including dessert” version. Pick a rule before the card machine, not during it.

## Suggested buttons and double tipping

Card machines that flash 15 / 20 / 25 are applying those rates to whatever amount was sent to the machine. If the server already added a tip line, and you also press 20%, you tip twice. If a delivery app added a €4 service fee and the suggested tip is on (food + fee + tax), your “18%” is 18% of a larger base than the food. That may be what you want. It is rarely what people think they pressed.

Do one slow multiplication before you press. 20% of €64 is about €13. If the button says €22, something else is in the base, or the rate is not 20%. [What is 20% of the number on the screen](/what-is-x-percent-of-y) is the entire check.

## Rounding, cash, and minimums

Cash tips get rounded because coins are annoying. Rounding €11.61 to €12 is a slightly higher rate (12/64.50 ≈ 18.6%), not a different formula. Rounding down to €10 is about 15.5%. Name it as a rounded amount if you like; just do not call €10 “the 18%” afterward.

Some places have a suggested minimum that is a fixed amount on small bills, because 15% of a €3 coffee is a coin that does not match the labor. A fixed amount is not a percentage. Do not convert it back into a percent and then feel you have discovered a rule for larger bills.

## When to use the tip calculator

Use it when the bill is uneven, the split is more than two, or you are comparing 15, 18, and 20 before the card machine times out. Use it to show the per-person line so the argument is about the rate, not about mental division.

Do not use it to learn the local custom. The custom is not in the formula. Decide the rate and the base first — pre-tax if a tax line exists and that is your rule, full amount if it does not — then let the calculator multiply. If service is already charged, decide whether you are adding anything at all before you type a percent.
`,
  },
  {
    slug: "how-to-calculate-discounts",
    title: "How to Calculate Discounts",
    description:
      "Sale price, amount saved, and successive percent-off deals, including why 20% then 10% is not 30% off and how coupons change the order.",
    published,
    updated,
    relatedTools: ["discount-calculator", "percentage-decrease-calculator"],
    relatedGuides: ["stacked-discounts", "common-percentage-mistakes"],
    faqs: [
      {
        q: "How do I find the sale price in one step?",
        a: "Pay (100 − discount) percent of the original. Thirty percent off means you pay 70%: price × 0.70. The amount saved is price × 0.30. Those two pieces add back to the original price.",
      },
      {
        q: "Does the order of two percent-off discounts matter?",
        a: "No. 20% off then 10% off is the same factor as 10% then 20%, because 0.80 × 0.90 = 0.90 × 0.80. A fixed-amount coupon does care about order, because €10 off a smaller number is a different percent.",
      },
      {
        q: "How do I recover the original price from a sale price?",
        a: "Divide by the fraction you paid. If you paid 70% of the original, original = sale / 0.70. Subtracting 30% of the sale price gives the wrong original.",
      },
    ],
    body: `
A discount is a decrease with a shop attached. You usually want two outputs, not one: the **sale price** you will pay, and the **savings** the sign is boasting about. They are complements. If you know one and the original price, you know the other, and if they do not add up, the sign or the arithmetic is off.

The [discount calculator](/discount-calculator) is the one-step version. This page is the version that still works when there are two signs, a coupon, and a tax line.

## One discount

Savings = price × (discount / 100)

Sale price = price − savings = price × (1 − discount / 100)

**30% off €99.99.** Savings = 99.99 × 0.30 = €29.997, which a shop will round to **€30.00** or **€29.99** depending on its rule. Sale price ≈ **€69.99**. Paying 70% gives the same shelf number: 99.99 × 0.70.

**25% off €80.** Savings = €20. Sale = €60. This is the friendly one: a quarter off is a quarter of the price, and the rest is three quarters.

**50% off €49.99.** Sale = €24.995, which becomes €25.00 or €24.99. “Half price” is the discount people estimate best and the one cashiers still mistype, because half of 49.99 is not 25.00 exactly. A one-cent policy is a business rule sitting on top of the percent.

| Original | Off | You pay | You save | Check (pay + save) |
| --- | --- | --- | --- | --- |
| €80 | 25% | €60 | €20 | €80 |
| €99.99 | 30% | €69.99 | €30.00 | €99.99 |
| €120 | 15% | €102 | €18 | €120 |
| €45 | 10% | €40.50 | €4.50 | €45 |

The check column is worth doing with a pen. Sale plus savings must return the original, before tax. If a receipt’s discount line fails that, you are looking at tax, a second promotion, or a rounding policy, not at a mysterious percent.

## “You save” versus “you pay”

Shops advertise the savings because €30 off sounds larger than “pay €70.” Your budget cares about the pay line. Translate every sign into the pay factor:

- 10% off → pay 90% → × 0.90
- 20% off → × 0.80
- 30% off → × 0.70
- 70% off → × 0.30 (you are paying less than a third; the savings are the big number)

A sign that says “70% off” and a sign that says “pay 70%” are opposites. Read the word **off**. The [percentage decrease calculator](/percentage-decrease-calculator) is the same math with less retail language, useful when the “discount” is actually a budget cut or a markdown in a spreadsheet.

## Two discounts in a row

**20% off, then an extra 10% off**, original €100.

1. After 20%: €80.
2. After 10% of what remains: €80 × 0.90 = **€72**.
3. Total saved = €28, which is **28% off**, not 30%.

The combined pay factor is 0.80 × 0.90 = **0.72**. Order does not matter for two pure percents: 0.90 × 0.80 is also 0.72. What matters is that you multiply, and that the second percent applies to the reduced price. Adding 20 + 10 and taking 30% off would give €70, which is €2 too optimistic on a €100 item and €20 too optimistic on a €1,000 one.

| First off | Second off | Pay factor | True total off | Naive sum |
| --- | --- | --- | --- | --- |
| 10% | 10% | 0.81 | 19% | 20% |
| 20% | 10% | 0.72 | 28% | 30% |
| 25% | 25% | 0.5625 | 43.75% | 50% |
| 50% | 50% | 0.25 | 75% | 100% |

The last row is the cartoon version: half off, then half off again, is not free. It is 75% off. You still pay a quarter. I keep this row because it is the fastest way to see why percents do not add. A longer treatment with coupons that are fixed amounts — where order suddenly matters — is [stacked discounts](/guides/stacked-discounts).

## Coupons that are euros, not percents

A €100 jacket, **20% off**, plus a **€10 voucher**.

- Percent first: 100 × 0.80 = €80, then €10 → **€70**.
- Voucher first: 100 − 10 = €90, then 20% → **€72**.

Now order matters, and the shop’s terms decide it. “Voucher applies to full-price items only” and “voucher applies after promotions” are different prices. A percentage calculator cannot read the terms. It can show you both orders so you know how much the ambiguity is worth before you argue at the till. On this jacket the ambiguity is €2. On a €1,500 sofa with 15% off and a €100 voucher, compare both sequences before you assume the larger saving.

Also notice the voucher is a worse or better *percent* depending on the base. €10 off €100 is 10%. €10 off the already reduced €80 is 12.5%. Quoting the voucher as “an extra 10%” is only true against the original price.

## Tax after the discount

Most VAT and sales-tax systems want the tax on the amount you actually pay for the goods, so the discount comes first.

€100 net, 20% off, then 23% VAT.

- Net after discount = €80
- VAT = 80 × 0.23 = €18.40
- Gross = **€98.40**

If someone charges VAT on €100 (€23) and only then takes 20% off the gross (123 × 0.80 = €98.40), you land on the same gross **because** the discount was a percent of everything including tax. A fixed voucher breaks the coincidence: 20% off then VAT, versus VAT then a €10 voucher, will not match. When the receipt looks “a bit high,” recompute discount-then-tax as two steps instead of blending the rates. 20% off and 23% VAT is not a single 3% anything.

## From the sale price back to the original

The rack says €70 and the sticker says 30% off. What was it?

You are paying 70% of the original, so original = 70 / 0.70 = **€100**. Check: 30% of 100 is 30, and 100 − 30 = 70.

Subtracting 30% of 70 (which is 21) yields 49, and that number times 0.70 is 34.3, not 70. The subtraction felt like “undo” and was not. This is the reverse-percent problem, with the pay factor as the divisor. [Reverse percentages](/guides/reverse-percentages) collects several of these, including “what was the price before the increase?”

## Comparing two offers

Offer A: €120 with 25% off → pay €90.

Offer B: €100 with 10% off → pay €90.

The sale prices match. The “you save” banners do not (€30 versus €10), because the shops started from different fantasies of the original price. A discount percent is not a measure of value unless you believe the original. Compare **sale prices** (and what is included) when the originals are set by the seller. Compare **percents** when the original is a real previous price you actually saw.

## When to use the discount calculator

Use it on a single percent-off when the price is awkward (€47.90, 35% off) and you want both pay and save. Use it as a check on a mental estimate: 10% of €47.90 is €4.79, so 35% is about €16.77, sale about €31. If the tool says €40, you applied the percent to the wrong idea of “pay.”

For two promotions, do not type  the sum of the percents. Run the first sale price, then the second percent on that result, or multiply the pay factors yourself. Use the calculator once per step so each base is visible.

Do not use a discount percent to compare quality, and do not treat a crossed-out price as historical fact. The math of the markdown can be perfect while the “was” price was never charged. The formula’s job is the gap between the two numbers printed in front of you, not the honesty of the higher one.
`,
  },
];
