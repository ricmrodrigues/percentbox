import type { EditorialDepth } from "./depth-types";

export const depthChange: Record<string, EditorialDepth> = {
  "percentage-increase-calculator": {
    relatedGuides: [
      "percentage-increase-vs-percentage-points",
      "inflation-and-percent-change",
    ],
    audience: [
      "This page is for a rate you already know and a starting amount you want to grow. A salary offer, a price “plus 8%,” a population projection in a textbook, a fee that increases by a stated percent. The output is the new amount and the size of the piece that was added. The page opens with Increase selected. Decrease is the other button in the same mode, and it is a different operation.",
      "If you have last year’s number and this year’s number and you want the percent, you do not have a rate yet. That is percentage change. If you have a rate and you want only the piece, not the new total, that is percent-of. People mix those three up most often on pay and on prices.",
    ],
    fields: [
      {
        name: "Starting value",
        detail:
          "The base the percent sticks to. A €40,000 salary goes here, not the hoped-for new salary. The rate is applied to this box. Type the units you want back: gross stays gross, a headcount stays a headcount.",
      },
      {
        name: "By percentage",
        detail:
          "The rate, already decided. 4 means multiply by 1.04. Decimals are allowed. A rate over 100 is allowed and means you add more than the original itself. Quick-select overwrites this box.",
      },
      {
        name: "Direction",
        detail:
          "Increase adds the piece. Decrease subtracts it. This URL opens on Increase. If you tap Decrease, you are using the decrease formula; the dedicated decrease page explains the ways that formula gets misread on sale tags.",
      },
      {
        name: "The two numbers in the result",
        detail:
          "The large number is the new value. The signed amount beside it is only the piece that was added. 40,000 increased by 4% shows 41,600 and +1,600. Copy the one your sentence needs. A contract that says “the new salary” wants 41,600. A sentence about “the raise” wants 1,600.",
      },
    ],
    formulaNotes: [
      "New value = starting value × (1 + percent ÷ 100). The piece alone is starting value × (percent ÷ 100). Adding them returns the new value, which is a useful checksum. 40,000 × 0.04 = 1,600, and 40,000 + 1,600 = 41,600, and 40,000 × 1.04 = 41,600.",
      "The base does not move. A second 4% raise, a year later, applies to 41,600, not to 40,000, and it is worth 1,664. Two successive 4% increases are not an 8% increase on the original. They compound: 1.04 × 1.04 = 1.0816, an 8.16% increase on the first base. This page applies one rate to one base per calculation. Run it again if there is a second year.",
      "Inflation is a second percent, not a mood. A 4% raise against 3% inflation is not automatically a 1% gain in purchasing power, though subtracting the rates is the usual shorthand. The more careful comparison divides the factors: 1.04 / 1.03 ≈ 1.0097, about 0.97% more purchasing power. The inflation guide shows when the shorthand is close enough and when it is not. This calculator will not subtract a second rate unless you type the problem that way yourself.",
    ],
    walkthroughs: [
      {
        title: "A 4% salary increase, gross, one year",
        paragraphs: [
          "Starting value 40000, by percentage 4, direction Increase. New gross is 41,600. The raise is 1,600. Nothing on the page withheld tax, social contributions, or a bonus. If the offer says “4% on base, bonus separate,” do not put the bonus in the starting value and then also talk about it as extra.",
          "To recover the old salary from the new one, divide by 1.04: 41,600 / 1.04 = 40,000. Subtracting 4% of 41,600 lands on 39,936, which is the classic wrong undo. The increase page applies a rate. It does not search for the rate that would get you home.",
        ],
      },
      {
        title: "A supplier price that rises 12.5%",
        paragraphs: [
          "A part costs €64 before the increase. Starting value 64, by percentage 12.5. The new price is 72. Ten percent is 6.40, 2.5% is 1.60, and the sum is 8, so 64 + 8 = 72. If the supplier’s email says “from 64 to 72,” check it on the change calculator: (72 − 64) / 64 = 12.5%. The match means the email and the rate are the same fact.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Putting the percent in the starting-value box",
        detail:
          "A sentence like “increase 4 by 100%” is a tiny number becoming 8. It is not a 4% raise. The rate belongs in By percentage. The amount belongs in Starting value. The boxes are labeled that way because swapping them is an easy way to grow the wrong thing.",
      },
    ],
    extraFaqs: [
      {
        q: "Can I model two raises in a row?",
        a: "Run the first raise, then type the new total as the next starting value. Or multiply the factors yourself: a 3% raise and then a 5% raise is 1.03 × 1.05 = 1.0815, an 8.15% increase on the original, not 8%.",
      },
      {
        q: "What about a raise that is “2 percentage points”?",
        a: "If a rate moves from 5% to 7%, the gap is 2 percentage points, or a 40% relative increase of the rate itself (2 / 5). Typing 5 and increasing by 2% produces 5.1, which is neither of those. Read the noun. This page increases the number in the first box.",
      },
      {
        q: "Does a negative percent work?",
        a: "A negative rate on Increase flips the sign and behaves like a decrease. Prefer the Decrease direction so the formula line matches the sentence. A positive rate with Decrease selected is the readable version of the same math.",
      },
    ],
  },
  "percentage-decrease-calculator": {
    relatedGuides: [
      "how-to-calculate-discounts",
      "stacked-discounts",
      "common-percentage-mistakes",
    ],
    audience: [
      "Use this when one rate comes off one starting value: a single markdown, a budget cut, a “down 15%,” a forecast that says the figure will be lower by a stated percent. You want both the remainder and the size of the cut. The page opens with Decrease selected so a sale-style question does not accidentally add.",
      "A discount calculator is the same multiplication with the labels “you pay” and “you save.” Come here when the thing being reduced is not a shelf price — headcount, energy use, a grade threshold — or when you want the decrease formula stated as a decrease. For two promotions stacked on one price, do not add the rates; the stacked-discounts guide is the one that multiplies the leftovers.",
    ],
    fields: [
      {
        name: "Starting value",
        detail:
          "The amount before the cut. The rate applies to this number, not to the number you hope to land on. A €200 jacket, a 50-person team, a 1,000-unit forecast: whatever is about to be reduced.",
      },
      {
        name: "By percentage",
        detail:
          "The rate removed. 10 means multiply by 0.90. 100 means multiply by zero. Above 100 the formula produces a negative result, which is arithmetic, not a price. Quick-select can overwrite a rate you typed.",
      },
      {
        name: "Direction",
        detail:
          "This URL starts on Decrease. Increase is one tap away and will add the piece instead. If the result is larger than the start, look at the direction button before you blame the rate.",
      },
      {
        name: "Result and the amount removed",
        detail:
          "The large number is what remains. The secondary amount is the cut. 200 decreased by 10% remains 180, and the cut is 20. Those two add back to 200. If you are talking about savings, quote the cut. If you are talking about what is left, quote the remainder.",
      },
    ],
    formulaNotes: [
      "Remaining = start × (1 − rate/100). Cut = start × (rate/100). They sum to the start. 200 × 0.90 = 180, and 200 × 0.10 = 20. You can also subtract the cut from the start. Both paths are one decrease. Neither path stacks a second offer.",
      "The undo is not the same percent. From 180, an increase of 10% is 198, short of 200 by 2. The return trip divides by 0.90, which is an increase of about 11.11%. Any time someone says “we’ll add back the same percent later,” run both directions before you agree.",
      "Two decreases in a row multiply. A 20% cut and then a 10% cut is 0.80 × 0.90 = 0.72, so 28% off the original, not 30%. Half off and then half off again leaves a quarter, which is 75% off, not 100% off. This page will do the second cut if you type the remainder as a new starting value. It will not add the badges for you, which is the correct refusal.",
    ],
    walkthroughs: [
      {
        title: "A team reduced by 15%",
        paragraphs: [
          "Forty people, down 15%. Starting value 40, by percentage 15, direction Decrease. The cut is 6 people and 34 remain. You cannot employ 0.4 of a person if a later rate does not divide evenly; say so. 12% of 40 is 4.8, which is a planning figure, not a name on a list. The calculator reports the product. Rounding people is a management decision.",
          "If leadership instead says “we need to be at 34, what percent is that?”, you do not have a rate yet. Change from 40 to 34 is a 15% decrease. The match is how you confirm the announcement. This page is the direction that starts from the rate.",
        ],
      },
      {
        title: "Depreciation used as a teaching decrease, not as tax law",
        paragraphs: [
          "A textbook says a machine worth 8,000 loses 20% of its current value each year, for two years. Year one: 8,000 decreased by 20% = 6,400. Year two starts at 6,400, not at 8,000: 6,400 × 0.80 = 5,120. The two-year loss is 2,880, which is 36% of the original, not 40%. Straight-line depreciation in a tax code is often a different rule entirely. This walkthrough is only the successive-percent version a textbook asked for.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Reading a lower price as this formula when the rate was on a different base",
        detail:
          "A phone that “was 1,000, now 700” is a change from 1,000 to 700, a 30% decrease. You may type 1000 and 30 here and land on 700. If the tag does not state the percent, do not invent one and then congratulate the formula. Measure the change first.",
      },
    ],
    extraFaqs: [
      {
        q: "Is percent off the same formula?",
        a: "Yes for a single rate applied to the original price. The discount calculator uses it and labels the outputs as pay and save. Stacked percent-off offers are several decreases. Add the rates only if the promotion literally says the percents combine that way, which most do not.",
      },
      {
        q: "What remains after a 100% decrease?",
        a: "Zero. There is no base left to increase back to the original. A forecast that says “down 100%” and also quotes a leftover is contradicting itself.",
      },
      {
        q: "Can the starting value be negative?",
        a: "The arithmetic will run. A negative base times a positive leftover is still negative, and “a decrease” in ordinary English may not match the sign you get. For money and counts, start from a positive amount and use direction to say whether it grows or shrinks.",
      },
      {
        q: "How is this different from percentage change?",
        a: "Here you bring the rate. Change discovers the rate from two observations. They confirm each other: decrease 200 by 10% to get 180, then ask for the change from 200 to 180 and see 10% down.",
      },
    ],
  },
  "percentage-change-calculator": {
    relatedGuides: [
      "inflation-and-percent-change",
      "percentage-increase-vs-percentage-points",
    ],
    audience: [
      "This page starts from two measurements of the same thing. A price last month and a price now, a weight before and after, a bill this year and last year, a score on the same scale. You do not know the rate yet. The rate is the output. Put the reference measurement in From, even when it is the larger one. The sign of the result is the direction.",
      "It is not a comparison of two unrelated piles. “Rent is what percent of salary” is a ratio, the reverse-percent page. “Rent went from 900 to 990” is a change, and it belongs here. The noun has to be the same noun.",
    ],
    fields: [
      {
        name: "From (original value)",
        detail:
          "The base. Usually the earlier measurement, or the budget, or the figure someone is treating as normal. The gap is divided by the absolute value of this number. Zero cannot be a base; percent change from zero is undefined.",
      },
      {
        name: "To (new value)",
        detail:
          "The later measurement, or the actual against the reference. It can be larger or smaller. From 50 to 40 is a decrease. You do not flip the boxes to force a positive number. A negative result is the decrease.",
      },
      {
        name: "The result",
        detail:
          "A percent with a direction, plus the absolute gap. From 80 to 100 is a 25% increase and a gap of 20. From 100 to 80 is a 20% decrease and a gap of 20. Quote both the percent and the direction. A bare 20 is the gap, not the percent.",
      },
      {
        name: "No percent button",
        detail:
          "There is no quick-select on this tab because you are solving for the percent. If you already know the percent, use Increase or Decrease.",
      },
    ],
    formulaNotes: [
      "Percent change = ((to − from) ÷ |from|) × 100. The absolute value on the base keeps the sign in the numerator, where the direction lives. From 80 to 100: (20 ÷ 80) × 100 = 25. From 100 to 80: (−20 ÷ 100) × 100 = −20. Same gap, different bases, different percents. That asymmetry is the whole subject, not a quirk.",
      "Percentage points are a subtraction. A rate that moves from 2% to 3% is +1 percentage point. The relative change in the rate is (3 − 2) / 2 = 50%. This calculator, given 2 and 3, reports 50%, because 2 and 3 are the numbers you typed. It does not know they were already percents. If you meant points, subtract. Say which one you meant in the sentence.",
      "Two legs do not add. Up 25% and then down 20% can land exactly where you started: 80 to 100 is +25%, 100 to 80 is −20%. The story “up 25 and down 20, so we are ahead by 5” is false. Run the overall change from the first number to the last number. The middle percents are a narrative. The endpoints are the result.",
    ],
    walkthroughs: [
      {
        title: "A grocery staple, one year apart",
        paragraphs: [
          "Olive oil was €7.40 a bottle and is now €8.51. From 7.40 to 8.51. The gap is 1.11. Divide by 7.40: 0.15, exactly 15% increase if the cents are exact. If the new price is 8.50, the change is (1.10 ÷ 7.40) × 100 ≈ 14.86%. Round only when you report it, and say you rounded. The shelf does not owe you a clean percent.",
          "The reverse trip, from 8.51 back to 7.40, is not a 15% decrease. 8.51 × 0.85 = 7.2335, which is short of the old price. The decrease that actually returns to 7.40 is 1.11 / 8.51 ≈ 13.04%. Anyone comparing “it rose 15% and later fell 15%” needs this paragraph.",
        ],
      },
      {
        title: "A KPI that fell, and a boss who wants it positive",
        paragraphs: [
          "Support tickets went from 1,240 to 1,054. From 1240, to 1054. The change is a decrease of about 15%: the gap is 186, and 186 / 1,240 = 0.15. Reporting “+15% improvement” smuggles in a judgment. The calculator’s job is the signed change in the count. Whether fewer tickets is good depends on why they fell. Do not make the From box the smaller number just to get a plus sign. That plus sign would describe a different history.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Mixing a partial period into a full one",
        detail:
          "March versus “the first half of April” is not a percent change in monthly demand. The formula will still divide. The sentence will be wrong because the two numbers do not cover the same kind of interval. Match the windows before you trust the percent.",
      },
    ],
    extraFaqs: [
      {
        q: "What if the new value is zero?",
        a: "From 40 to 0 is a 100% decrease. That one is defined, because you divided by 40, not by zero. From 0 to 40 is the case that breaks. Say “40 more” instead of a percent.",
      },
      {
        q: "Should I use the absolute value if the start is negative?",
        a: "The formula already divides by the absolute value of the start so a negative base does not flip the meaning of the sign twice. Negative bases are rare in prices and common in accounting deltas. If both numbers are profits and one crosses zero, say that in words. A percent across a sign change is easy to quote and hard to interpret.",
      },
      {
        q: "How do I check a claimed “up 15%”?",
        a: "You need both endpoints, or one endpoint and a willingness to apply the rate. If they gave you 80 and “up 15%,” the increase calculator should land on 92. If they gave you 80 and 92, this page should say 15%. If they gave you only “up 15%,” there is nothing to check.",
      },
    ],
  },
};
