/**
 * Homepage editorial. The multi-mode calculator is the product;
 * this copy teaches which tab answers which sentence.
 */
export const HOME_CHOOSING: string[] = [
  "The box above is six calculators that share a percent sign and do not share a base. “What is 15% of 200?” multiplies. “45 is what percent of 200?” divides. “Increase 200 by 15%” multiplies by 1.15 and keeps the original in the total. “From 200 to 230” discovers that the rate was 15%. A tip is the first formula applied to a bill and added back. A discount is a decrease with the savings called out. If the result feels wrong, the usual cause is that the tab still belongs to the previous sentence.",
  "Start here when you are translating a word problem into one of those sentences. The dedicated pages — percent of, reverse percent, increase, decrease, change, tip, discount, and the finance tools — stay on one formula and spell out the mistakes that belong to it. This page is the place you identify which formula you need. The formula line under the result is the check. Read it before you copy a number into a message someone else will rely on.",
];

export const HOME_CONTROLS: { name: string; detail: string }[] = [
  {
    name: "Mode tabs",
    detail:
      "% of, is % of, Inc / Dec, Change, Tip, and Discount. Changing tabs changes the formula immediately. Digits already typed stay in the boxes, which helps when you are checking your work and hurts when those digits belonged to a bill, not a salary. The title under the tabs is the question you are now asking.",
  },
  {
    name: "The two main number boxes",
    detail:
      "Their labels change with the mode. On percent-of, the first box is the rate and the second is the whole. On the reverse tab, the first is the part and the second is the whole. On increase, the first is the base and the second is the rate, and a direction button decides add or subtract. On change there is no rate input at all: From and To are two measurements of the same thing.",
  },
  {
    name: "Quick select",
    detail:
      "The percent buttons write a common rate into whichever box is the rate. They appear on percent-of, increase/decrease, tip, and discount. They do not appear on change or on the reverse tab, because those modes solve for the percent. Tapping 10 after you carefully typed 7.5 replaces the 7.5. There is no calculate button to catch it; the result updates as you type.",
  },
  {
    name: "Copy and on-device history",
    detail:
      "Copy puts the current result on the clipboard. History keeps a short list of recent summaries in this browser, in local storage, not in an account. It is a convenience when you are comparing 15% and 18% on the same bill. Clear it when the numbers are nobody else’s business, including the next person who uses the device.",
  },
];

export const HOME_SESSION: { title: string; paragraphs: string[] }[] = [
  {
    title: "One afternoon, three sentences, three tabs",
    paragraphs: [
      "A club treasurer has a €2,400 equipment budget, a quote that is 12% higher than last year’s €2,000, and a member who says “12% of 2,400 is the increase.” Those are three different claims. Last year to the quote, if the quote is 2,240, is a change from 2,000 to 2,240: a 12% increase. Percent-of on 2,400 at 12% is 288, which is not the increase that produced a €240 gap. Increase on 2,000 by 12% lands on 2,240 and shows the piece as 240. The member multiplied the new number. The tab they needed was either Increase on the old number or Change between the two numbers. Both agree. Percent-of on the new number does not.",
      "After the meeting someone asks what share of the €2,400 budget the €2,240 quote would use. That is the reverse tab: 2,240 is about 93.33% of 2,400. It is not a 12% anything. The homepage earns its keep when you switch tabs on purpose and watch the formula line change, instead of reusing the first percent that appeared in the conversation.",
    ],
  },
  {
    title: "When to leave this page",
    paragraphs: [
      "Leave for the VAT calculator when a price already includes tax and someone has multiplied the gross by the rate. Leave for markup when a colleague says “25” and cannot say whether that is on cost or on price. Leave for compound interest when the question is a balance over time with deposits, and for the loan calculator when the question is a fixed monthly payment that pays a balance down to zero. Those tools are not extra tabs on this calculator, because their fields are not a percent and a base. The guides are the longer version of the same caution: original write-ups, with the worked numbers visible, for when the result is going into a decision rather than a homework box.",
    ],
  },
];

export const HOME_PITFALLS: { title: string; detail: string }[] = [
  {
    title: "Quoting a percent without the base",
    detail:
      "“It’s 15%” is not a result this site can stand behind. Fifteen percent of what, or a 15% change from which start? The copy button copies the calculation you just ran. The sentence around it is still yours. Include the inputs.",
  },
  {
    title: "Using the homepage as a tax, margin, or loan engine",
    detail:
      "A decrease tab can take 23% off a price. That is not how you remove 23% VAT from a gross price. A change tab can compare two salaries. That is not a loan payment. The finance tools exist because forcing those problems into a generic percent tab produces confident wrong numbers.",
  },
];

export function homeEditorialPlainText(): string {
  const parts = [
    ...HOME_CHOOSING,
    ...HOME_CONTROLS.flatMap((item) => [item.name, item.detail]),
    ...HOME_SESSION.flatMap((item) => [item.title, ...item.paragraphs]),
    ...HOME_PITFALLS.flatMap((item) => [item.title, item.detail]),
  ];
  return parts.join(" ");
}
