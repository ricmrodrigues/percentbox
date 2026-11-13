import type { Guide } from "./types";

/**
 * Written for the homework-style questions that show up in Search Console
 * (Aug–Nov 2026): bills that "increase by 15%", "from 400,000 to 460,000",
 * "percent of change from 8 to 10", tips on a family dinner bill, a 5% sale
 * on a $35 book. All answers checked with exact decimal arithmetic.
 */
export const wordProblemGuides: Guide[] = [
  {
    slug: "percentage-word-problems",
    title: "Percentage Word Problems: Increase, Decrease, Change and Tips",
    description:
      "Twelve worked percentage word problems with full steps: increase by a percent, percent change from A to B, discounts, tips, splitting a bill, and working backwards.",
    published: "2026-11-13",
    updated: "2026-11-13",
    relatedTools: [
      "percentage-increase-calculator",
      "percentage-change-calculator",
      "percentage-decrease-calculator",
      "tip-calculator",
    ],
    relatedGuides: [
      "percentage-change-from-a-to-b",
      "reverse-percentages",
      "common-percentage-mistakes",
    ],
    faqs: [
      {
        q: "How do I know which formula a word problem wants?",
        a: "Look for the phrase. “X% of Y” multiplies. “Increase/decrease Y by X%” multiplies by (1 ± X/100). “From A to B” or “what is the percentage increase” divides the gap by A. “What percent of A is B” divides B by A.",
      },
      {
        q: "Do I divide by the old or the new number for percent change?",
        a: "By the old (starting) number. From 8 to 10 is (10 − 8) ÷ 8 = 25%. Dividing by 10 gives 20%, which is the most common wrong answer.",
      },
      {
        q: "When should I round?",
        a: "At the end. Keep full precision through the steps and round only the final answer, to the cent for money. Rounding the tip before splitting a bill can make the shares disagree with the total by a cent or two.",
      },
    ],
    body: `
Most percentage word problems are one of five sentences in disguise. Find the sentence, then the arithmetic is one line. Every answer below can be checked with the calculator linked next to it.

## Step 1: translate the sentence

| The problem says | It means | Arithmetic |
| --- | --- | --- |
| X% of Y | a share of Y | Y × X ÷ 100 |
| Y increases by X% | a new, bigger total | Y × (1 + X/100) |
| Y decreases by X%, X% off | a new, smaller total | Y × (1 − X/100) |
| from A to B, percentage increase/decrease | the rate between two numbers | (B − A) ÷ A × 100 |
| what percent of A is B | a share as a percent | B ÷ A × 100 |

## Increases

**1. Your water bill is 220,000. It increases by 15%. What is the new bill?**
Increase by a percent, so multiply by 1.15: 220,000 × 1.15 = **253,000**. The increase on its own is 33,000. ([Percentage increase calculator](/percentage-increase-calculator))

**2. The electricity bill increased from 400,000 to 460,000. What is the percentage increase?**
Two numbers, so you want the rate. Gap: 460,000 − 400,000 = 60,000. Divide by the old bill: 60,000 ÷ 400,000 = 0.15 = **15%**. ([Percentage change calculator](/percentage-change-calculator))

**3. What is the percent of change from 8 to 10?**
(10 − 8) ÷ 8 × 100 = **25%** increase. Not 20%: the base is the starting value, 8.

**4. A motel manager raises the room rate of $80.00 by 20%. What is the new rate?**
80 × 1.20 = **$96.00**.

## Decreases and discounts

**5. A textbook originally costs $100 but is marked down to $75. What is the percent decrease?**
Gap 25, divided by the original 100: **25%** decrease.

**6. A bookshop has a 5% discount sale. How much is saved on a $35 book?**
5% of 35 = 35 × 0.05 = **$1.75** saved, so the book costs $33.25. ([Discount calculator](/discount-calculator))

**7. Decrease 180 by 15%.**
180 × 0.85 = **153**. The amount removed is 27. ([Percentage decrease calculator](/percentage-decrease-calculator))

## Tips and splitting a bill

**8. A family's dinner bill was $64.00 and they left a 22% tip. How much was the tip, and what was the total?**
Tip: 64 × 0.22 = **$14.08**. Total: 64 + 14.08 = **$78.08** (or 64 × 1.22). ([Tip calculator](/tip-calculator))

**9. Six people share a $154.86 bill and add an 18% tip. How much does each person pay?**
Total with tip: 154.86 × 1.18 = 182.7348, so **$182.73** to the cent. Each share: 182.7348 ÷ 6 = 30.4558, so about **$30.46** each. Six shares of $30.46 come to $182.76, three cents more than the bill; someone pays a cent less, or the group leaves the extra.

## Shares and working backwards

**10. Mia plans to put 10% of her $2,400 pay into savings. How much is that?**
10% of 2,400 = **$240**. ([10% of common numbers](/percent-of/10))

**11. After a 20% increase a price is $96. What was it before?**
Undo the multiplication: 96 ÷ 1.2 = **$80**. Taking 20% off 96 gives 76.80, which is wrong because the 20% was worked out on 80, not on 96. ([Reverse percentages](/guides/reverse-percentages))

**12. 77 people each donated £145 to a charity, and it spent £7,635. What percent of the money was spent?**
Total raised: 77 × 145 = £11,165. Share spent: 7,635 ÷ 11,165 × 100 ≈ **68.38%**. £3,530 is left. ([X is what percent of Y](/x-is-what-percent-of-y))

## Three checks before you write the answer

- **Direction.** An increase must give a bigger number, a discount a smaller one.
- **Base.** Percent change divides by the starting value, never by the result.
- **Rounding.** Round once, at the end, to the precision the question asks for.
`,
  },
];
