import { TOOL_DEPTH } from "@/content/tools";
import { TOOLS } from "@/lib/seo";

export interface ToolFieldNote {
  name: string;
  detail: string;
}

export interface ToolWalkthrough {
  title: string;
  paragraphs: string[];
}

interface ToolEditorialBase {
  guideSlug: string;
  /** Extra paragraphs under the short intro. */
  paragraphs: string[];
  whenToUse: string[];
  pitfalls: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export interface ToolEditorial extends ToolEditorialBase {
  relatedGuides: string[];
  audience: string[];
  fields: ToolFieldNote[];
  formulaNotes: string[];
  walkthroughs: ToolWalkthrough[];
}

export const TOOL_EDITORIAL: Record<string, ToolEditorialBase> = {
  "percentage-calculator": {
    guideSlug: "how-to-calculate-percentages",
    paragraphs: [
      "This page is the multi-mode tool: percent of a number, the reverse question, increase, decrease, change, tip, and discount. The modes share a percent sign and do not share a base. “15% of 200” divides the percent by 100 and multiplies. “From 80 to 100” divides a gap by the starting value. Switching tabs changes the formula, not just the label.",
      "If you already know which sentence you are in, a dedicated calculator below is harder to mis-type. If you are still translating a word problem into a sentence with the word “of,” stay here and read the formula line under the result before you copy it.",
    ],
    whenToUse: [
      "You are hopping between two kinds of percent question and want one place that shows the formula for the mode you picked.",
      "You want a quick sanity check of mental math (10% anchors) against a live result.",
      "You do not yet know whether you need a tip, a discount, or a plain percent-of.",
    ],
    pitfalls: [
      {
        title: "Leaving the previous mode’s numbers in place",
        detail:
          "A bill typed for a tip is not a meaningful “X is what percent of Y” pair. Clear the inputs when you change mode, or you will get a confident answer to a question you are no longer asking.",
      },
      {
        title: "Reading 200% of as a 200% increase",
        detail:
          "200% of 50 is 100. A 200% increase of 50 is 150. The mode name is the difference. Percent-of keeps only the piece (which can be larger than the original). Increase keeps the original and adds the piece.",
      },
    ],
    faqs: [
      {
        q: "Which mode should I open first?",
        a: "If the sentence contains “what is __% of,” use percent-of. If it contains “what percent is A of B,” use the reverse mode. If you have two full measurements and want the growth between them, use percentage change — not percent-of.",
      },
      {
        q: "Why do increase and change both exist?",
        a: "Increase applies a rate you already know to one value. Change discovers the rate from two values. They meet only when you check your work: apply the rate you found and see if you land on the second value.",
      },
    ],
  },
  "what-is-x-percent-of-y": {
    guideSlug: "how-to-calculate-percentages",
    paragraphs: [
      "“What is X% of Y?” takes a rate and a whole and returns the piece. The whole is Y, the number after “of.” Fifteen percent of 200 is 30 because 0.15 times 200 is 30. The same keystrokes do not answer “200 is what percent of 15,” and they do not apply a raise.",
      "A swap identity helps when the numbers are awkward: X% of Y equals Y% of X. Eight percent of 25 is the same product as 25% of 8, which is 2. Use that to estimate, then let this page confirm.",
    ],
    whenToUse: [
      "A word problem or a receipt line is literally “what is this percent of that amount?”",
      "You need a part: a commission, a fee that is a percent of a base, or a fraction of a budget.",
      "You are checking that a mental 10% anchor landed near the real piece.",
    ],
    pitfalls: [
      {
        title: "Using the result as a new price without adding it back",
        detail:
          "15% of €100 is €15, the piece. The price after a 15% increase is €115. If you wanted the new total, you still have to add the original, or switch to the increase calculator.",
      },
      {
        title: "Percent of an inclusive price",
        detail:
          "23% of a VAT-inclusive €123 is about €28, and that is not the VAT inside the €123. Inclusive tax is a reverse-percent problem: divide by 1.23. This tool will not do that division unless you ask a different question.",
      },
    ],
    faqs: [
      {
        q: "Can the answer be larger than Y?",
        a: "Yes, whenever X is greater than 100. 250% of 18 is 45. That is “more than the whole,” which is allowed. It is not automatically an increase of 250%.",
      },
      {
        q: "What if Y is zero?",
        a: "Zero percent of zero is zero, and any other percent of zero is zero. You cannot then ask what percent the result is of zero. The piece of nothing is nothing; it is not a division-by-zero error in this particular mode.",
      },
    ],
  },
  "x-is-what-percent-of-y": {
    guideSlug: "reverse-percentages",
    paragraphs: [
      "This mode names a ratio. You already have the part and the whole; you want the percent that connects them. The whole is the second number, the one you are taking a percent of. Forty is 20% of 200. Two hundred is 500% of 40. Both are correct responses to different sentences.",
      "It does not undo a discount. If you paid €70 after 30% off, you do not type 70 and 30 into this mode. You divide 70 by 0.70. The guide on reverse percentages is the undo button; this page is the “what share is this?” button.",
    ],
    whenToUse: [
      "You have a score and a total, a slice of a budget, or a headcount and a population.",
      "You want to compare two quantities as a percent without implying that one is a later version of the other.",
      "You are about to say “that’s like __%” and you want the denominator to be explicit.",
    ],
    pitfalls: [
      {
        title: "Putting the whole in the first box",
        detail:
          "The first number is the part (the numerator). Swapping them turns “what share of the budget” into “how many budgets fit in this line,” which is a different percent and sometimes a number over 100.",
      },
      {
        title: "Calling the result a percent change",
        detail:
          "9 is 75% of 12. That does not mean 12 changed by 75%. Percent change needs a before and an after of the same measure. A ratio of two different piles is this tool.",
      },
    ],
    faqs: [
      {
        q: "Why did I get more than 100%?",
        a: "Because the first number is larger than the second. The part is bigger than the whole you named. Either that is the true ratio (a city larger than a town you used as the base) or the whole belongs in the other box.",
      },
      {
        q: "What happens if the second number is zero?",
        a: "The percent is undefined. There is no whole to be a share of. The calculator should not invent a number; change the question or report the absolute amounts.",
      },
    ],
  },
  "percentage-increase-calculator": {
    guideSlug: "salary-increase-percentage",
    paragraphs: [
      "An increase calculator applies a rate you already know. New value = old × (1 + rate/100). A €40,000 salary raised by 4% becomes €41,600. The raise itself is €1,600, which is the rate times the old salary — not times the new one.",
      "It will not discover the rate from two salaries. If you have both numbers and want the percent, use percentage change. It will also not tell you whether 4% beat inflation; that is a second percent you subtract or, more carefully, divide as factors.",
    ],
    whenToUse: [
      "HR, a contract, or a homework problem gives you the percent and the starting amount.",
      "You are comparing 3%, 5%, and 8% on the same base before you negotiate.",
      "You want the euro amount of the raise separated from the new total.",
    ],
    pitfalls: [
      {
        title: "Applying the raise to the new salary",
        detail:
          "Four percent of €41,600 is €1,664, which is not the raise that produced €41,600 from €40,000. The rate sticks to the old base. Reverse the operation by dividing the new salary by 1.04 if you need the old one.",
      },
      {
        title: "Treating a percentage-point move as this tool’s input",
        detail:
          "A rate that goes from 2% to 3% is not “increase 2 by 1%.” It is either +1 percentage point or a 50% relative increase of the rate. Type 2 only if you truly mean “make the number 2 one percent larger,” which yields 2.02.",
      },
    ],
    faqs: [
      {
        q: "Does this include tax on a salary?",
        a: "No. The result is the same kind of number you typed. A gross salary in, a gross salary out. Take-home pay depends on brackets and contributions this tool does not model.",
      },
      {
        q: "Can I increase by more than 100%?",
        a: "Yes. A 150% increase multiplies by 2.5. You keep the original and add one and a half times it. That is different from “150% of” the original, which multiplies by 1.5.",
      },
    ],
  },
  "percentage-decrease-calculator": {
    guideSlug: "how-to-calculate-discounts",
    paragraphs: [
      "A decrease multiplies by what remains: value × (1 − rate/100). Thirty percent off is not a mysterious retail formula; it is this one. You pay 70% of the price. The amount you save is the other 30%, and the two pieces add back to the original.",
      "Use it for a single cut — a markdown, a budget reduction, a “down by.” Do not type the sum of two successive discounts. Twenty percent off and then ten percent off is a multiply of 0.80 and 0.90, a 28% decrease, not a 30% decrease.",
    ],
    whenToUse: [
      "One rate will be removed from one starting value, and you want both the remainder and the size of the cut.",
      "You are checking a sale tag that states a single percent off.",
      "You need to see how large a cut must be before it crosses a cost or a floor you care about.",
    ],
    pitfalls: [
      {
        title: "Undoing the decrease with the same percent",
        detail:
          "Cut 200 by 10% and you land on 180. Raising 180 by 10% lands on 198, not 200. Recovery needs about an 11.11% increase because the base shrank. This tool applies a rate; it does not find the return trip.",
      },
      {
        title: "A 100% decrease",
        detail:
          "The result is zero. You cannot divide your way back to the original from zero. If a forecast claims “down 100%” and also quotes a remaining amount, one of those claims is wrong.",
      },
    ],
    faqs: [
      {
        q: "Is percent off the same as a percentage decrease?",
        a: "Yes, when there is a single rate and it applies to the original price. The retail wording “30% off” means decrease by 30%. Stacked offs are several decreases, not one visit to this tool with the rates added.",
      },
      {
        q: "What if the rate is above 100%?",
        a: "The formula produces a negative result, which is not a price. A discount over 100% off is not a meaningful shelf tag. Check the input before you treat the output as money.",
      },
    ],
  },
  "percentage-change-calculator": {
    guideSlug: "percentage-change-from-a-to-b",
    paragraphs: [
      "Percentage change starts with two measurements of the same thing and reports the gap as a percent of the first one. From 80 to 100 is a 25% increase. From 100 to 80 is a 20% decrease. The gap in units is 20 either way; the percent changes because you refused to divide by the same base.",
      "Put the earlier measurement, or the reference measurement, in the starting slot even when it is the larger one. The sign of the result is the direction. A negative percent is a decrease, not an error.",
    ],
    whenToUse: [
      "You have a before and an after: a price, a weight, a headcount, a bill, a score on the same scale.",
      "You want to check that a quoted “up 15%” actually matches the two numbers in the email.",
      "You are comparing the overall move with the story told by two legs (up, then down) that do not add.",
    ],
    pitfalls: [
      {
        title: "Dividing by the new value",
        detail:
          "The change from 80 to 100 divides 20 by 80. Dividing by 100 yields 20%, which is the decrease in the reverse direction, not the increase you experienced. The formula is attached to the start.",
      },
      {
        title: "Feeding it two rates that are already percents",
        detail:
          "From 8 (%) to 10 (%) the tool will say 25%, the relative change in the rate. The percentage-point gap is 2, and this tool does not output points. If you meant points, subtract. Do not paste the 25% into a sentence about the price.",
      },
    ],
    faqs: [
      {
        q: "What if the starting value is zero?",
        a: "Percent change divides by the start. From zero the usual percent is undefined. Report the absolute change (“15 more”) instead of forcing a percent.",
      },
      {
        q: "How is this different from percent of?",
        a: "Percent-of multiplies a rate by one number. Change divides the gap between two numbers by the first. You use change when you do not yet know the rate.",
      },
    ],
  },
  "tip-calculator": {
    guideSlug: "how-to-calculate-a-tip",
    paragraphs: [
      "A tip calculator multiplies a bill by a rate, then optionally divides the total by a headcount. Eighteen percent of €64.50 is €11.61, and the amount you pay is €76.11. The interesting choice is not the multiplication. It is whether the bill you typed is pre-tax, post-tax, or already includes a service charge.",
      "Where tipping is not the local script, a percent on top may be optional or odd. The tool will still multiply. It will not tell you the custom. Decide the rate, then use the page so the split is not the thing you get wrong.",
    ],
    whenToUse: [
      "The bill is an awkward amount and you want 15%, 18%, and 20% side by side.",
      "More than two people are splitting, especially by three, where cents do not land evenly.",
      "A card machine suggested a tip that looks high and you want 20% of the food subtotal as a comparison.",
    ],
    pitfalls: [
      {
        title: "Tipping on a bill that already includes a tip",
        detail:
          "If a service charge or a previous gratuity is inside the number you type, a new 20% tips that tip. Subtract the charge first, or accept that you are being generous on purpose.",
      },
      {
        title: "Equal split of unequal orders",
        detail:
          "Dividing the grand total by headcount is fair only when you meant to share the cost. One expensive dish disappears into the average. Split the food first if the group did not agree to pool it.",
      },
    ],
    faqs: [
      {
        q: "Do I include tax in the bill field?",
        a: "If a separate tax line exists and your rule is “tip on the meal,” leave the tax out. If the only number on the menu is a tax-inclusive total, tip on that number unless you have a reason to extract the tax first. Say which rule you used.",
      },
      {
        q: "Why doesn’t the per-person amount always divide cleanly?",
        a: "Cents are discrete. €76.11 divided by 2 is €38.055. Someone pays the extra cent, or you round the tip until the total divides. The percent did not fail; coins did.",
      },
    ],
  },
  "discount-calculator": {
    guideSlug: "how-to-calculate-discounts",
    paragraphs: [
      "This calculator applies one percent off and returns what you pay and what you save. Thirty percent off €99.99 is about €30 saved and €69.99 to pay, depending on cent rounding. Pay plus save must return the original. If it does not, the rounding rule or a second promotion is in the way.",
      "It is the wrong tool for “20% off plus an extra 10% off” if you add the rates first. Run 20% to get a sale price, then run 10% on that sale price. The true combined discount on the original is 28%, not 30%.",
    ],
    whenToUse: [
      "A single tag says “__% off” and the price is not a round number you trust in your head.",
      "You want the savings line and the pay line quoted separately.",
      "You are reconstructing an original price only as a check — for a true reverse, divide the sale price by the pay factor (0.70 after 30% off) rather than subtracting 30% of the sale price.",
    ],
    pitfalls: [
      {
        title: "Adding stacked badges",
        detail:
          "Two percent-off promotions multiply the remaining fractions. Half off and then half off again leaves you paying a quarter, which is 75% off, not free. The second half applies to what is left.",
      },
      {
        title: "Comparing discounts across different “was” prices",
        detail:
          "Twenty-five percent off €120 and ten percent off €100 can land on the same €90. The louder savings banner is not the cheaper product. Compare what you pay.",
      },
    ],
    faqs: [
      {
        q: "Does the calculator add sales tax?",
        a: "No. The result is the discounted price of the number you typed. If that number was before tax, add tax afterward on the reduced amount. If it was already tax-inclusive, do not add tax again.",
      },
      {
        q: "How do I get the original from the sale price?",
        a: "Divide by (1 − discount/100). A €70 tag after 30% off came from €100, because 70 / 0.70 = 100. Subtracting 30% of 70 does not get you there.",
      },
    ],
  },
  "markup-calculator": {
    guideSlug: "markup-vs-margin-explained",
    paragraphs: [
      "Markup and margin are two percents for one pile of profit. Markup divides profit by cost. Margin divides profit by the selling price. A €50 cost with a 40% markup sells for €70 and earns about a 28.6% margin. A 40% margin on the same cost sells for about €83.33. The calculator will do either, and it will not guess which percent you meant.",
      "Put every cost you actually bear into the cost field before you apply a target percent: materials, a subcontractor, a fee you cannot pass through. A pretty margin on an incomplete cost is a thin margin in the bank.",
    ],
    whenToUse: [
      "You know your cost and a target markup or a target margin and you need a price before you quote it.",
      "You know cost and a competitor’s price and you want the margin that price would imply for you.",
      "Someone said “we work on 25” and you need to see both interpretations before you agree.",
    ],
    pitfalls: [
      {
        title: "Multiplying cost by one plus the margin",
        detail:
          "Cost × 1.40 is a 40% markup. A 40% margin divides by 0.60. Using the multiply key for a margin target underprices the work relative to the rule you stated.",
      },
      {
        title: "Leaving VAT inside the selling price",
        detail:
          "A VAT-inclusive shelf price makes the same profit look like a smaller margin, because you divided by a tax-inflated price. Strip the tax, then compare net with net.",
      },
    ],
    faqs: [
      {
        q: "Why can’t margin reach 100%?",
        a: "A 100% margin would mean cost is zero and the entire price is profit, so the price formula divides by zero. Markups can exceed 100% without trouble: selling €20 of cost for €50 is a 150% markup and a 60% margin.",
      },
      {
        q: "Does a shop’s markup stack with mine?",
        a: "Each business applies its percent to its own cost. Your margin on the wholesale price is not the retailer’s margin on the shelf price. Compute them as two steps, not as a sum of percents.",
      },
    ],
  },
  "vat-calculator": {
    guideSlug: "how-to-calculate-vat",
    paragraphs: [
      "Add mode starts from a net price: gross = net × (1 + rate/100). Extract mode starts from a gross price: net = gross / (1 + rate/100). At 23%, €100 net becomes €123 gross, and €123 gross becomes €100 net. Taking 23% of the €123 (€28.29) is a third, wrong operation, and this page’s extract mode exists so you do not have to remember the division under pressure.",
      "Presets are memory aids for commonly quoted rates, including Portugal’s often-cited mainland 23%, 13%, and 6%. They are not a ruling on which rate your supply actually takes, and island rates differ. Confirm the rate, then calculate.",
    ],
    whenToUse: [
      "You are writing a quote from a net day-rate and you know the VAT rate that applies.",
      "A shelf price or a receipt total includes VAT and you want the tax and the net split out.",
      "You want to show both numbers to someone who thought the rate could be multiplied either way.",
    ],
    pitfalls: [
      {
        title: "Extracting by multiplying the gross by the rate",
        detail:
          "The VAT inside a gross price is rate / (100 + rate) of that price, about 18.7% of the gross at a 23% VAT rate, not 23% of the gross. Multiply only when you are adding tax to a net amount.",
      },
      {
        title: "Rounding each line, then also rounding the total",
        detail:
          "Three lines of €10.10 at 23% can disagree by a cent depending on whether VAT is rounded per line or on the sum. A one-line calculator will not reproduce a 40-line invoice to the cent. Allow a cent before you call the shop wrong.",
      },
    ],
    faqs: [
      {
        q: "Is this the same math as US sales tax?",
        a: "Adding a rate on top of a net price is the same multiplication. Whether the tag you saw was already inclusive is not the same. If the tag is the amount you pay, extract. If the tag is before tax, add.",
      },
      {
        q: "Should the discount go before VAT?",
        a: "Usually the discount changes the amount on which VAT is charged. Apply a percent-off to the net, then add VAT. A fixed voucher’s order depends on the terms; run both if the terms are ambiguous and see how many euros the ambiguity is worth.",
      },
    ],
  },
  "compound-interest-calculator": {
    guideSlug: "compound-interest-basics",
    paragraphs: [
      "The projection multiplies a balance by (1 + rate/periods) once per period, and it can add a contribution series on top. Ten thousand euros at 5% for ten years, compounded monthly and left alone, grows to about €16,470. The same nominal rate compounded only once a year lands a bit lower. Daily compounding lands a bit higher. The rate you type moves the result more than the frequency toggle does, at ordinary savings rates.",
      "Contributions often dominate the ending balance. One hundred euros a month alongside that €10,000 example is a second pile, and most of those euros do not get a full ten years of growth. The chart is a scenario at a constant rate, not a market forecast and not a loan schedule.",
    ],
    whenToUse: [
      "You want to see a lump sum at a stated rate and frequency, with the interest left in the account.",
      "You want to compare “I start now” with “I start five years later” by changing the term.",
      "A bank advertises daily compounding and you want the euro gap versus monthly at the same nominal rate.",
    ],
    pitfalls: [
      {
        title: "Using it as a loan payment calculator",
        detail:
          "An amortizing loan charges interest on a falling balance and sets a payment so the balance hits zero. That is not a compound-growth curve with a negative deposit unless the deposit happens to be the exact payment. Use the loan calculator for installments.",
      },
      {
        title: "Reading a nominal rate as a promise",
        detail:
          "The tool compounds whatever percent you type, every period, without fees, tax, or inflation. A 7% illustration is a scenario. Label it as one before you treat the cents as a balance you will have.",
      },
    ],
    faqs: [
      {
        q: "Why isn’t monthly compounding dramatically better than annual?",
        a: "At 5% over ten years on €10,000 the gap is on the order of a couple of hundred euros, not a second fortune. The effective annual rate moves from 5% to about 5.12%. Over decades the gap grows, and it is still smaller than a real difference in the nominal rate.",
      },
      {
        q: "Does the contribution earn interest immediately?",
        a: "Each contribution compounds for the periods that remain after it is added, not for the whole term. The last payment barely earns anything. That is why the future value of the series is less than “total contributed times the full growth factor.”",
      },
    ],
  },
  "loan-calculator": {
    guideSlug: "how-loan-emi-works",
    paragraphs: [
      "This page estimates a fixed monthly payment for a fixed annual rate and a fixed term, then splits that payment into interest and principal over time. On €25,000 at 6.5% for five years the payment is about €489. The first month’s interest is about €135 and the principal portion is the rest. By the last month the interest is a couple of euros. The payment did not change. The balance it was charged on did.",
      "Type the nominal rate the contract uses to compute interest, not a comparison APR that was lifted by fees, unless you know the APR equals that nominal rate. Fees belong beside the schedule, in euros. A variable rate such as Euribor plus a spread can be typed as today’s all-in rate for a what-if, not as a forecast.",
    ],
    whenToUse: [
      "You want the installment for a personal loan, car loan, or illustrative fixed-rate mortgage before you talk to a lender.",
      "You want to see how much total interest a longer term adds, not just how much the monthly payment falls.",
      "You want a picture of why early payments carry more interest than late ones.",
    ],
    pitfalls: [
      {
        title: "Typing APR when a fee made it higher than the nominal rate",
        detail:
          "The payment formula uses the interest rate applied to the balance. An APR that includes an arrangement fee will overstate the installment if you drop it into the rate box, and you will still owe the fee. Read which percent is which.",
      },
      {
        title: "Treating a variable-rate quote as fixed",
        detail:
          "If the contract resets with an index, one run of this calculator is one assumed rate. Run a higher rate as a stress test. The schedule will not update itself when the index moves.",
      },
    ],
    faqs: [
      {
        q: "Why is total interest not “rate times principal times years”?",
        a: "That product is simple interest on the original principal for the whole term. An EMI loan charges interest on the remaining balance, which shrinks every month. You pay less interest than the simple-interest cartoon, and you pay it on a schedule that is front-loaded.",
      },
      {
        q: "Will extra payments show up automatically?",
        a: "Not unless you model them. Extra principal usually reduces later interest, subject to the contract’s prepayment rules. The standard schedule assumes you pay exactly the installment and nothing more.",
      },
    ],
  },
};

const EMPTY_DEPTH = {
  relatedGuides: [] as string[],
  audience: [] as string[],
  fields: [] as ToolEditorial["fields"],
  formulaNotes: [] as string[],
  walkthroughs: [] as ToolEditorial["walkthroughs"],
};

export function getToolEditorial(slug: string): ToolEditorial | undefined {
  const base = TOOL_EDITORIAL[slug];
  if (!base) return undefined;
  const depth = TOOL_DEPTH[slug];
  if (!depth) {
    return { ...EMPTY_DEPTH, ...base, relatedGuides: [] };
  }
  return {
    ...base,
    relatedGuides: depth.relatedGuides,
    audience: depth.audience,
    fields: depth.fields,
    formulaNotes: depth.formulaNotes,
    walkthroughs: depth.walkthroughs,
    pitfalls: [...base.pitfalls, ...depth.extraPitfalls],
    faqs: [...base.faqs, ...depth.extraFaqs],
  };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Crawlable prose on a tool URL, excluding header, footer, and related-tool blurbs. */
export function toolPageWordCount(slug: string): number {
  const tool = TOOLS.find((item) => item.slug === slug);
  const editorial = getToolEditorial(slug);
  if (!tool || !editorial) return 0;
  const parts = [
    tool.h1,
    tool.intro,
    ...tool.examples.flatMap((example) => [example.q, example.a]),
    ...tool.faqs.flatMap((faq) => [faq.q, faq.a]),
    ...tool.formulas.flatMap((formula) => [formula.goal, formula.formula]),
    ...editorial.paragraphs,
    ...editorial.audience,
    ...editorial.fields.flatMap((field) => [field.name, field.detail]),
    ...editorial.formulaNotes,
    ...editorial.walkthroughs.flatMap((walk) => [walk.title, ...walk.paragraphs]),
    ...editorial.whenToUse,
    ...editorial.pitfalls.flatMap((pitfall) => [pitfall.title, pitfall.detail]),
    ...editorial.faqs.flatMap((faq) => [faq.q, faq.a]),
  ];
  return countWords(parts.join(" "));
}

const MIN_TOOL_WORDS = 1000;
for (const tool of TOOLS) {
  const count = toolPageWordCount(tool.slug);
  if (count < MIN_TOOL_WORDS) {
    throw new Error(
      `${tool.slug} has ${count} crawlable words; need at least ${MIN_TOOL_WORDS}.`,
    );
  }
}
