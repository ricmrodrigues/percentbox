import type { EditorialDepth } from "./depth-types";

export const depthCore: Record<string, EditorialDepth> = {
  "percentage-calculator": {
    relatedGuides: [
      "common-percentage-mistakes",
      "mental-math-percentages",
      "percentage-increase-vs-percentage-points",
    ],
    audience: [
      "This is the desk calculator: six modes, one page, and a formula line that changes when you change tabs. It is for the moment you have a percent problem and you are not yet sure which sentence it is. A student checking homework, a freelancer sanity-checking a quote, and someone splitting a bill can all start here. If you already know the sentence — “what percent is this of that,” “down by,” “from last month to this month” — the dedicated page for that sentence is the better teacher, because it stays on one formula.",
      "The page will not decide the sentence for you. “15% of 200,” “200 increased by 15%,” and “from 200 to 230” are three different questions that can all be true of the same story. The tabs exist so you can see which one you are actually asking before you copy a number into an email.",
    ],
    fields: [
      {
        name: "Mode tabs (% of, is % of, Inc / Dec, Change, Tip, Discount)",
        detail:
          "Each tab is a different formula, not a skin. The page opens on “% of.” Switching tabs keeps whatever digits were already typed, which is convenient when you meant to stay in the same problem and dangerous when you did not. Read the title under the tabs after you switch. If it does not match the sentence in your head, you are about to answer a different question.",
      },
      {
        name: "Percentage (X%) and Of number (Y)",
        detail:
          "These two boxes are the “what is X% of Y?” mode. X is the rate. Y is the whole, the number after the word “of.” 15 and 200 produce 30. Quick-select buttons write a common rate into X and leave Y alone.",
      },
      {
        name: "Number (X) and Is what % of (Y)",
        detail:
          "On the reverse tab, X is the part you already have and Y is the whole you are comparing it with. 9 and 12 produce 75%. Y is the denominator. Zero in Y is undefined, and the page should not invent a percent.",
      },
      {
        name: "Starting value, By percentage, and Direction",
        detail:
          "Increase / Decrease applies a rate you already know. Starting value is the base the rate sticks to. By percentage is the rate. Direction chooses add or subtract. 100 increased by 15% is 115. The same digits with Decrease are 85. The amount added or removed is shown beside the new total.",
      },
      {
        name: "From and To",
        detail:
          "Percentage change does not take a rate as an input. From is the reference measurement, usually the earlier one. To is the later one. From 80 to 100 is a 25% increase. Swap them and you get a 20% decrease. The gap in units is 20 either way; the percent changes because the base changed.",
      },
      {
        name: "Bill, tip, people, price, and discount",
        detail:
          "Tip multiplies the bill by the tip rate and divides the total by the headcount. Discount subtracts one percent-off from the original price and reports both what you pay and what you save. Those tabs are shortcuts. The tip and discount pages explain the customs and the stacked-offer mistakes in more detail.",
      },
      {
        name: "Quick select, copy, and history",
        detail:
          "Quick select fills the percent box for the mode that has one. It does nothing useful on Change, which has no percent input. Copy puts the result on the clipboard. History keeps a short list of recent summaries in this browser only; it is not an account and it does not sync.",
      },
    ],
    formulaNotes: [
      "Percent-of multiplies: (X ÷ 100) × Y. Reverse percent divides: (X ÷ Y) × 100. Increase multiplies by (1 + rate/100). Decrease multiplies by (1 − rate/100). Change divides the gap by the absolute value of the start: ((new − old) ÷ |old|) × 100. Tip is percent-of applied to a bill, then added back. Discount is a decrease, with the savings line called out separately.",
      "A useful check is to run the reverse of what you just did, on purpose. If 15% of 200 is 30, then 30 should be 15% of 200 on the reverse tab. If 100 increased by 15% is 115, the change from 100 to 115 should also be 15%. When those disagree, a digit moved or a tab did. The formulas meet there. They are not interchangeable on the way in.",
      "The calculator labels money fields with a dollar sign because the input needs a currency glyph. The arithmetic does not know whether you meant dollars, euros, or points. A percent of a count works the same way as a percent of a price. What changes is the sentence you are allowed to say afterward.",
    ],
    walkthroughs: [
      {
        title: "A quote that looks like one problem and is three",
        paragraphs: [
          "A client says: “The draft was €800. We want 15% more scope, and the new total should be shown against the old one.” Start on Increase, not on percent-of. Starting value 800, by percentage 15, direction Increase. The new fee is 920, and the piece you added is 120. Percent-of would have stopped at 120 and left you quoting the raise instead of the fee.",
          "Then check the story with Change: from 800 to 920. The result is 15% increase. That match is the point of having both tabs. If someone later says “15% of 800 was added,” that sentence is also true, and it is the percent-of tab: 120. Three sentences, three tabs, one project. Copy the one that matches the line in the proposal.",
        ],
      },
      {
        title: "Why 10% anchors fail on the reverse tab",
        paragraphs: [
          "You remember that 10% of 200 is 20, so 20% is 40. That anchor lives on the percent-of tab. It does not answer “45 is what percent of 200.” Divide 45 by 200 and multiply by 100: 22.5%. The 10% anchor can still check the neighborhood — 45 is a bit more than 40, so a bit more than 20% — but the tab has to be the reverse one or the anchor is answering a different question.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Letting Quick select rewrite a rate you typed on purpose",
        detail:
          "The buttons are for 5, 10, 15, 18, 20, and the other usual suspects. If you had typed 7.5 for a fee schedule, tapping 10 replaces it. The result updates immediately, with no calculate button to warn you. Glance at the percent box before you copy.",
      },
    ],
    extraFaqs: [
      {
        q: "Does this page replace the dedicated calculators?",
        a: "It uses the same formulas. The dedicated pages exist so a single question — a tip split, a VAT-inclusive price, a loan payment — gets a longer explanation than a tab label. Use this page to identify the question. Use the dedicated page when the question is already clear and the surrounding mistakes matter.",
      },
      {
        q: "Why does the formula line change when I only change tabs?",
        a: "Because the tab is the formula. The digits in the boxes are raw numbers until a formula claims them. A 15 and a 200 on percent-of mean 30. The same digits on the reverse tab mean 15 is 7.5% of 200. The formula line under the result is the authority, not the memory of the previous tab.",
      },
      {
        q: "Are the results stored anywhere?",
        a: "The calculation runs in the browser. An optional history list keeps a few recent summaries in local storage on this device. Clearing site data, or clearing history in the calculator, removes them. Nothing on this page requires an account.",
      },
      {
        q: "What should I do with a percent that came from a percent?",
        a: "Slow down. “20% of a 15% fee” is not 35% and not 5%. It is a percent of a percentage, a smaller piece of the original. The guide on that pattern walks through it. This calculator will happily multiply whatever you type, including a number that is already a rate.",
      },
    ],
  },
  "what-is-x-percent-of-y": {
    relatedGuides: [
      "mental-math-percentages",
      "percent-of-a-percentage",
      "common-percentage-mistakes",
    ],
    audience: [
      "Open this page when the sentence is literally “what is this percent of that number?” The percent is a rate you already have. The second number is the whole. You want the piece: a commission, a portion of a budget, a slice of a score, a fee that is defined as a percent of a base. You do not yet want a new total, and you do not yet want to know what percent something is.",
      "People land here from homework, from a contract that says “12% of fees collected,” and from the habit of taking 10% in their head and wanting a second opinion. The page opens on this mode. The other tabs are still on the calculator if the sentence turns out to be different. If it stays “percent of,” stay on this tab and read the formula line before you copy.",
    ],
    fields: [
      {
        name: "Percentage (X%)",
        detail:
          "The rate. 15 means fifteen per hundred, which the formula treats as 0.15. You can type decimals (7.5) and rates over 100 (250). Quick-select replaces this box with a common rate. It does not touch the other box.",
      },
      {
        name: "Of number (Y)",
        detail:
          "The whole, the number that follows “of” in the sentence. In “15% of 200,” 200 goes here, not 15. If the sentence has no “of,” you may be on the wrong page: a raise, a change between two measurements, or a reverse question.",
      },
      {
        name: "The result and the formula line",
        detail:
          "The primary number is the piece, not the piece plus the original. 15% of 200 is 30, and the formula line should read along the lines of (15 ÷ 100) × 200 = 30. If you needed 230, you wanted an increase.",
      },
      {
        name: "Quick select",
        detail:
          "Buttons such as 10, 15, 20, and 25 write the rate. They are a convenience for mental-math checks, not a suggestion that those rates are correct for your contract.",
      },
    ],
    formulaNotes: [
      "Divide the percent by 100, then multiply by the whole. Equivalently, multiply the whole by the percent and divide by 100. Both are the same product. 15% of 200 is 0.15 × 200 = 30. There is no addition in this formula. Addition is what turns the piece into a new total.",
      "The swap identity is the best mental check on awkward pairs: X% of Y equals Y% of X, because multiplication commutes. 8% of 25 equals 25% of 8, and both are 2. 12% of 50 equals 50% of 12, and both are 6. Use the swap to estimate, then let the page confirm the product you actually need.",
      "A rate above 100 is allowed. 250% of 18 is 45, which is larger than the whole. That is “two and a half times the whole,” not “the whole plus 250%.” The second sentence is an increase and equals 18 × 3.5 = 63. The mode name is doing real work.",
    ],
    walkthroughs: [
      {
        title: "A 12% commission on fees actually collected",
        paragraphs: [
          "A freelance agreement says 12% of fees collected this month. Fees collected are €4,860. This is percent-of, not a raise on last month’s commission. Percentage 12, of number 4860. The commission is 583.20. Ten percent would have been 486, and two percent is 97.20; adding those anchors lands on the same 583.20.",
          "If the agreement had said “12% more than last month’s commission,” you would leave this page. That sentence needs last month’s commission as a base and the increase calculator. The word “of” is the tell.",
        ],
      },
      {
        title: "A test section that is only part of the grade",
        paragraphs: [
          "A quiz is worth 20% of the course, and you scored 45 out of 50 on it. First find the quiz percent on the reverse page: 45 is 90% of 50. Then this page answers a different question: what is 90% of the 20-point category? 90% of 20 is 18. You earned 18 points toward the course from a quiz worth 20. Multiplying 45 by 20, or taking 20% of 45, answers a question nobody asked.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Taking a percent of a number that is already a percent",
        detail:
          "If a fee is 15% and someone offers “20% off the fee,” 20% of 15 is 3 percentage points of the original price, not 20% of the price. The piece is 3, and the fee that remains is 12% of the original. Type 15 only if 15 is the whole you mean. The percent-of-a-percentage guide is the longer version of this trap.",
      },
    ],
    extraFaqs: [
      {
        q: "How do I get the new total after adding this percent?",
        a: "Add the piece to the original, or switch to percentage increase. 15% of 200 is 30. The total after a 15% increase is 230. This page stops at the piece on purpose.",
      },
      {
        q: "Does the order of the boxes matter?",
        a: "Yes. The first box is the rate and the second is the whole. Swapping 15 and 200 asks for 200% of 15, which is also 30, only because of the swap identity. Swap 12 and 80 and you will not be so lucky: 12% of 80 is 9.6, while 80% of 12 is also 9.6. The identity says the product matches. The sentence you type into an email still has to name the right whole.",
      },
      {
        q: "Can I use this for a count, not money?",
        a: "Yes. 30% of 240 students is 72 students. The dollar sign on some other calculators is a label. This mode is a product of a rate and a number, whatever the number counts.",
      },
    ],
  },
  "x-is-what-percent-of-y": {
    relatedGuides: [
      "test-score-percentages",
      "percent-error",
      "common-percentage-mistakes",
    ],
    audience: [
      "Use this when you already have both amounts and you want the percent that connects them. The first number is the part. The second is the whole. Nine is 75% of 12. Forty is 20% of 200. The page is for grades, budget shares, “what portion of the team,” and any sentence of the form “A is what percent of B.”",
      "It is the wrong tool for undoing a discount or a tax. If you paid 70 after 30% off, you do not type 70 and 30 here. You divide 70 by 0.70. That undo lives in the reverse-percentages guide and, for a single known rate, in the discount and VAT tools. This page names a ratio. It does not invert a rate you already know.",
    ],
    fields: [
      {
        name: "Number (X)",
        detail:
          "The part, the numerator. In “9 is what percent of 12,” 9 goes here. If the part is larger than the whole, the result is above 100%, which can be true. It can also mean the whole was typed in this box by mistake.",
      },
      {
        name: "Is what % of (Y)",
        detail:
          "The whole, the denominator. 12 goes here in the example above. Zero is undefined: there is no whole to be a share of. A blank box is not zero; it is an unfinished question.",
      },
      {
        name: "The result",
        detail:
          "The result is a percent, not a piece of money. The formula line divides X by Y and multiplies by 100. Copy the percent with the denominator still in the sentence: “9 is 75% of 12,” not “75%” floating alone.",
      },
      {
        name: "Why there is no quick-select row",
        detail:
          "Quick-select writes a rate. This mode solves for the rate. There is nothing honest for those buttons to fill, so they stay off this tab. If you find yourself wanting a 15 button, you probably wanted percent-of.",
      },
    ],
    formulaNotes: [
      "Divide the part by the whole, then multiply by 100. (9 ÷ 12) × 100 = 75. The absolute values do not get a percent until you name which one is the whole. 12 is 133.33% of 9, which is the same pair of numbers with the sentence reversed.",
      "Percent change is the formula people substitute by accident. Change needs a before and an after of the same measure, and it divides the gap by the start. This formula divides the part by the whole. 9 is 75% of 12. The change from 12 to 9 is a 25% decrease. Both numbers are correct. They describe different relationships, and only one of them is what you were asked.",
      "Scores need the same honesty about the denominator. 42 out of 50 is 84%. 42 out of 60 is 70%. The numerator did not move. The percent did, because you changed what “all of it” means. Say the total in the same breath as the percent.",
    ],
    walkthroughs: [
      {
        title: "A department’s share of a budget",
        paragraphs: [
          "Travel spent €18,400. The department budget is €92,000. Number 18400, whole 92000. Travel is 20% of the budget. The check: 20% of 92,000 is 18,400, which you can confirm on the percent-of tab. If someone reports “we are 20% over,” that is a different sentence and needs last year’s travel figure, not the budget.",
          "If the budget had been the smaller number, the result would clear 100% and would mean travel exceeded the budget. That is a real situation. It is not a broken calculator. Read the two boxes again before you soften the sentence.",
        ],
      },
      {
        title: "A lab measurement and a percent error",
        paragraphs: [
          "You measured 9.6 and the accepted value is 10. “9.6 is what percent of 10” is 96%. The error is not 96%. The error is the gap, 0.4, divided by the accepted value: 4% low. This page will give you 96 if you ask what percent 9.6 is of 10. The percent-error guide is the one that divides the gap. Know which sentence the lab report asked for.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Using a rate you already know as the second number",
        detail:
          "“70 is what percent of 30” is not how you undo a 30% discount. It says 70 is about 233% of 30, which is a true ratio and a useless receipt. Undoing 30% off means dividing the price you paid by 0.70.",
      },
    ],
    extraFaqs: [
      {
        q: "What if both numbers are already percents?",
        a: "The tool will still divide. 8 is 80% of 10, even if those 8 and 10 were percentage points on a chart. The output is a percent about a percent. Label it that way or you will sound as if a rate became 80% in the world.",
      },
      {
        q: "How many decimals should I keep?",
        a: "The page shows enough precision to check the arithmetic. A grade or a budget share is often clearer rounded to one decimal or to the nearest percent, as long as you say you rounded. 42 out of 50 is exactly 84%. 1 out of 3 is 33.333…%, and “about 33%” is a rounding choice, not a different formula.",
      },
      {
        q: "Is this the same as a percentage difference?",
        a: "No. Percentage difference usually divides the gap by an average or by one of the two values, and people do not agree which. This page always divides the first number by the second. If a textbook says “percentage difference,” read its definition before you paste this result under that heading.",
      },
    ],
  },
};
