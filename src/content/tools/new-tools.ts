import type { ToolPage } from "@/lib/seo";
import type { EditorialDepth } from "./depth-types";

/**
 * Tools added in the October 2026 update. Each one answers a question the
 * older calculators could only answer indirectly or not at all.
 */
export const NEW_TOOLS: ToolPage[] = [
  {
    slug: "percentage-point-calculator",
    kind: "points",
    title: "Percentage Point Calculator — Points vs Percent Change",
    shortTitle: "Percentage Points",
    description:
      "Compare two rates and see the change in percentage points and the relative percent change side by side, with the working for your numbers.",
    h1: "Percentage Point vs Percent Change Calculator",
    keywords: [
      "percentage point calculator",
      "percentage points vs percent",
      "percentage point change",
      "basis points",
      "interest rate change percent",
    ],
    intro:
      "When a rate moves from 4% to 5%, it went up one percentage point and it also went up 25%. Both statements are correct, and they are wildly different. Type an old and a new rate to get both numbers and a sentence you can use without misleading anyone.",
    examples: [
      { q: "Interest rate 4% → 5%", a: "+1 pp · +25% relative" },
      { q: "Unemployment 10% → 8%", a: "−2 pp · −20% relative" },
      { q: "Poll share 42% → 45%", a: "+3 pp · +7.14% relative" },
      { q: "Defect rate 2% → 3%", a: "+1 pp · +50% relative" },
    ],
    faqs: [
      {
        q: "What is a percentage point?",
        a: "The plain arithmetic difference between two percentages. 5% minus 4% is 1 percentage point (often written pp or “points”).",
      },
      {
        q: "How many basis points are in a percentage point?",
        a: "100. A basis point is one hundredth of a percentage point, so a 0.25 pp change in an interest rate is 25 basis points.",
      },
    ],
    formulas: [
      { goal: "Point change", formula: "new rate − old rate" },
      { goal: "Relative change", formula: "(new − old) ÷ old × 100" },
      { goal: "Basis points", formula: "point change × 100" },
    ],
  },
  {
    slug: "cagr-calculator",
    kind: "cagr",
    title: "CAGR Calculator — Compound Annual Growth Rate with Steps",
    shortTitle: "CAGR",
    description:
      "Find the compound annual growth rate between a start and end value over any number of years, compared with the simple average, plus a year-by-year table.",
    h1: "CAGR Calculator (Compound Annual Growth Rate)",
    keywords: [
      "cagr calculator",
      "compound annual growth rate",
      "annualized return calculator",
      "average annual growth rate",
      "cagr formula",
    ],
    intro:
      "CAGR is the single steady yearly rate that would turn your starting value into your ending value. It is the honest way to say “how fast did this grow per year” when growth compounds — revenue, a portfolio, a city’s population, a price index.",
    examples: [
      { q: "10,000 → 16,000 over 5 years", a: "CAGR ≈ 9.86% / year" },
      { q: "100 → 200 over 10 years", a: "CAGR ≈ 7.18% / year" },
      { q: "100 → 50 → 100 over 2 years", a: "CAGR 0% (average of yearly returns says 25%)" },
      { q: "10,000 → 12,000 over 3 years", a: "CAGR ≈ 6.27% / year" },
    ],
    faqs: [
      {
        q: "What is the CAGR formula?",
        a: "CAGR = (end value ÷ start value)^(1 ÷ years) − 1. Multiply by 100 for a percent.",
      },
      {
        q: "Why is CAGR lower than total growth divided by years?",
        a: "Because each year’s growth builds on the previous years’ growth. Dividing total growth by the number of years ignores that compounding, so it overstates the steady yearly rate.",
      },
    ],
    formulas: [
      { goal: "CAGR", formula: "(end ÷ start)^(1 ÷ years) − 1" },
      { goal: "End value from CAGR", formula: "start × (1 + CAGR)^years" },
      { goal: "Total growth", formula: "(end ÷ start − 1) × 100" },
    ],
  },
  {
    slug: "weighted-grade-calculator",
    kind: "weighted",
    title: "Weighted Grade Calculator — Average & Score Needed on the Final",
    shortTitle: "Weighted Grade",
    description:
      "Combine homework, tests, and exams by their weights into one grade percentage, and find the score you need on the remaining work to reach a target.",
    h1: "Weighted Grade Calculator",
    keywords: [
      "weighted grade calculator",
      "weighted average calculator",
      "final exam grade calculator",
      "what do i need on my final",
      "grade percentage calculator",
    ],
    intro:
      "Most courses do not average every score equally: a final exam might count for half the grade and homework for a fifth. Enter each component’s score and its weight from the syllabus. Leave the final blank and set a target to see exactly what you need on it.",
    examples: [
      { q: "Homework 92 (20%), midterm 78 (30%)", a: "83.6% on graded work" },
      { q: "…and you want 85% overall, final worth 50%", a: "Need 86.4% on the final" },
      { q: "Quizzes 70 (10%), project 95 (40%), exam 80 (50%)", a: "85% overall" },
    ],
    faqs: [
      {
        q: "How do I calculate a weighted grade?",
        a: "Multiply each score by its weight, add the products, and divide by the sum of the weights. With weights that add to 100, that is the same as Σ(score × weight) ÷ 100.",
      },
      {
        q: "What if my weights do not add up to 100?",
        a: "The calculator divides by whatever the weights add up to, so 2, 3 and 5 work the same as 20, 30 and 50. If the syllabus weights should total 100 and yours do not, a component is probably missing.",
      },
    ],
    formulas: [
      { goal: "Weighted average", formula: "Σ(score × weight) ÷ Σ(weight)" },
      { goal: "Score needed on remaining work", formula: "(target × total weight − earned points) ÷ remaining weight" },
    ],
  },
];

export const NEW_TOOL_EDITORIAL: Record<
  string,
  {
    guideSlug: string;
    paragraphs: string[];
    whenToUse: string[];
    pitfalls: { title: string; detail: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  "percentage-point-calculator": {
    guideSlug: "percentage-increase-vs-percentage-points",
    paragraphs: [
      "The other calculators on this site answer “by what percent did a number change?” This one is for the special case where the number itself is already a percentage: an interest rate, a tax rate, a vote share, a conversion rate, a failure rate. Then there are two different changes to report, and headlines regularly report the dramatic one without saying so.",
      "The result panel shows the point change first because it is the one that does not depend on the starting level. The relative change sits under it. The steps then translate the move into money on €10,000, because a rate that goes from 4% to 5% costs one extra euro per hundred per year, whatever the percent change sounds like.",
    ],
    whenToUse: [
      "A central bank, lender, or news story says a rate rose or fell and you want to know how big the move really is.",
      "You are writing a report and need to choose between “up 3 points” and “up 7%” — and say which one you mean.",
      "You are comparing a risk or conversion rate before and after a change and a colleague quoted a relative figure.",
    ],
    pitfalls: [
      {
        title: "Calling a point change a percent change",
        detail:
          "“Mortgage rates rose 1%” is ambiguous. If they went from 4% to 5%, they rose 1 percentage point and 25%. Write “1 percentage point” or “to 5% from 4%” and the ambiguity disappears.",
      },
      {
        title: "Being impressed by relative change on a tiny base",
        detail:
          "A risk that goes from 1 in 10,000 to 2 in 10,000 has “doubled” (+100%), but the point change is 0.01 pp. Both are true. The relative figure alone makes small risks sound large.",
      },
    ],
    faqs: [
      {
        q: "Is a 0% to 2% change an infinite percent increase?",
        a: "A relative change from zero is undefined, so the calculator shows only the point change (+2 pp). That is the useful number in that situation anyway.",
      },
    ],
  },
  "cagr-calculator": {
    guideSlug: "compound-interest-basics",
    paragraphs: [
      "The compound interest calculator on this site runs forward: you know a rate and want the future value. CAGR runs backwards: you know where something started and where it ended, and you want the steady yearly rate that connects them. It is the right summary for anything that compounds, because it is the one rate that, applied every year, reproduces the real end value exactly.",
      "The page also prints the simple average (total growth divided by years) next to the CAGR on purpose. The gap between the two is the compounding effect, and seeing it for your own numbers is the quickest way to stop over-reading “we grew 60% in five years, so 12% a year.”",
    ],
    whenToUse: [
      "You have a start value, an end value and a number of years, and you want one yearly growth figure to quote.",
      "You want to compare two investments or businesses that ran over different lengths of time.",
      "Someone quoted an average yearly return and you want to check whether it is the compounded rate or a simple average.",
    ],
    pitfalls: [
      {
        title: "Treating CAGR as what happened each year",
        detail:
          "CAGR is a smoothed rate. The real path may have been +40%, −10%, +5%. Two investments with the same CAGR can have very different bumps along the way, and CAGR says nothing about that volatility.",
      },
      {
        title: "Ignoring money added or withdrawn",
        detail:
          "If you added savings during the period, the end value includes your deposits, and the CAGR of the account balance overstates the return on the money. For accounts with contributions you need a money-weighted return (such as XIRR in a spreadsheet), which this page does not compute.",
      },
    ],
    faqs: [
      {
        q: "Can CAGR be negative?",
        a: "Yes. If the end value is below the start value, CAGR is negative. 1,000 falling to 800 over 2 years is about −10.56% per year.",
      },
    ],
  },
  "weighted-grade-calculator": {
    guideSlug: "test-score-percentages",
    paragraphs: [
      "A test score percentage is one fraction: points earned over points possible. A course grade is usually several of those percentages combined with different weights. The x-is-what-percent calculator handles the first job; this page handles the second, and adds the question students ask most in the last weeks of term: what do I need on the final?",
      "Every input is a percentage score plus a weight. Leave a score blank to mark it as not yet graded. The result shows the weighted average of what has been graded so far, and, if a target is set, the average you need across the ungraded weight. The step list shows each score × weight product so you can check it against your gradebook line by line.",
    ],
    whenToUse: [
      "Your syllabus lists categories with percentages (homework 20%, midterm 30%, final 50%) and you want your current standing.",
      "You want to know the minimum final-exam score that still gets you a target grade.",
      "You are a teacher or tutor checking a gradebook spreadsheet against a hand calculation.",
    ],
    pitfalls: [
      {
        title: "Averaging the percentages without weights",
        detail:
          "Homework 92, midterm 78, final 70 averaged plainly is 80. With weights 20/30/50 it is 18.4 + 23.4 + 35 = 76.8. If the final counts for half, it pulls the grade toward itself.",
      },
      {
        title: "Mixing points and percentages",
        detail:
          "Enter each component as a percent score (e.g. 45 out of 60 = 75). If your course weights by raw points instead of categories, add up all points earned and divide by all points possible — that is a plain percentage, not a weighted one.",
      },
    ],
    faqs: [
      {
        q: "Does the calculator round like my school does?",
        a: "No. It shows two decimals and does not round to letter grades, because schools use different cut-offs and rounding rules. Check your syllabus for how a 89.5 is treated.",
      },
    ],
  },
};

export const NEW_TOOL_DEPTH: Record<string, EditorialDepth> = {
  "percentage-point-calculator": {
    relatedGuides: ["percentage-change-from-a-to-b", "common-percentage-mistakes", "apr-versus-interest-rate"],
    audience: [
      "This page is for anyone reading or writing about rates: savers and borrowers following interest rates, people reading election polls, analysts reporting conversion or churn rates, and students who have been asked the classic exam question about “percent” versus “percentage points.”",
      "If the two numbers you have are ordinary quantities — prices, salaries, visitors — you want the percentage change calculator instead. Percentage points only exist when both numbers are already percentages.",
    ],
    fields: [
      {
        name: "Old rate",
        detail:
          "The earlier percentage, typed without the % sign: 4 for 4%. This is the base for the relative change, so it matters which one you call old.",
      },
      {
        name: "New rate",
        detail:
          "The later percentage. It can be lower than the old one; the result then shows a negative point change and a negative relative change.",
      },
      {
        name: "The two results",
        detail:
          "The large number is the change in percentage points (new − old). The line beneath is the relative change: how much the rate itself grew or shrank as a share of its old value.",
      },
    ],
    formulaNotes: [
      "Point change is subtraction, nothing more: 5 − 4 = 1 pp. Relative change is the ordinary percentage-change formula applied to the rates: (5 − 4) ÷ 4 × 100 = 25%. The calculator gives both because neither is wrong — they answer different questions.",
      "Finance often uses basis points, where 1 basis point = 0.01 percentage points. A rate cut “of 25 basis points” is a 0.25 pp cut. Multiply the point change by 100 to get basis points.",
      "If a rate is applied to a fixed amount, the point change converts straight into money. Each percentage point on €10,000 is €100 a year in simple interest. That is why lenders and borrowers usually care about points, while press releases about relative risk often lead with percent.",
    ],
    walkthroughs: [
      {
        title: "A savings rate drops from 3% to 2.25%",
        paragraphs: [
          "Old rate 3, new rate 2.25. Point change: 2.25 − 3 = −0.75 pp, or 75 basis points. Relative change: −0.75 ÷ 3 × 100 = −25%.",
          "On €10,000 that is the difference between €300 and €225 of simple yearly interest: €75 less. “The rate fell a quarter” and “the rate fell 0.75 points” describe the same event.",
        ],
      },
      {
        title: "A poll moves from 42% to 45%",
        paragraphs: [
          "Point change: +3 pp. Relative change: 3 ÷ 42 × 100 ≈ +7.14%. In election coverage, “up three points” is the standard phrasing. Saying the party’s support “grew 7%” is correct but unusual, and readers may hear it as 49%.",
          "Remember that polls have a margin of error, often stated in points. A 3-point move may be inside that margin; this calculator cannot tell you whether the change is statistically meaningful.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Subtracting percents that have different bases",
        detail:
          "Percentage points are only meaningful when both rates are shares of comparable wholes. 20% of a small group and 18% of a different, larger group can be compared in points, but the point gap does not tell you how many people are involved.",
      },
    ],
    extraFaqs: [
      {
        q: "Which should I report, points or percent?",
        a: "Report points when the audience cares about the level of the rate (interest rates, tax rates, polls). If you report a relative change, say “relative” and give both rates, e.g. “from 2% to 3%, a 50% relative increase.”",
      },
    ],
  },
  "cagr-calculator": {
    relatedGuides: ["simple-vs-compound-interest", "effective-annual-rate", "inflation-and-percent-change"],
    audience: [
      "This page is for investors summarising a holding, small-business owners describing revenue growth, students meeting the CAGR formula in a finance or economics course, and anyone who has to compare growth over periods of different length.",
      "If you already know the rate and want to project forward, use the compound interest calculator. If you have only two values and no time dimension, the percentage change calculator is enough.",
    ],
    fields: [
      {
        name: "Start value",
        detail:
          "The value at the beginning of the period. Must be above zero — growth from zero has no rate.",
      },
      {
        name: "End value",
        detail:
          "The value at the end. Use the same units and the same basis (both nominal, or both inflation-adjusted) as the start value.",
      },
      {
        name: "Years between them",
        detail:
          "The length of the period, not the number of data points. From January 2020 to January 2025 is 5 years even though it spans six calendar years. Fractions are allowed: 18 months is 1.5.",
      },
    ],
    formulaNotes: [
      "CAGR = (end ÷ start)^(1/years) − 1. For 10,000 growing to 16,000 in 5 years: 16,000 ÷ 10,000 = 1.6; 1.6^(1/5) ≈ 1.09856; subtract 1 → about 9.86% per year. Check: 10,000 × 1.09856^5 ≈ 16,000.",
      "The simple average would be 60% ÷ 5 = 12% a year. Applying 12% for five years actually gives 10,000 × 1.12^5 ≈ 17,623, overshooting the real end value. That overshoot is why the simple average is the wrong number to quote for compounding growth.",
      "The year-by-year table shows the smoothed path at the constant CAGR. It is not your real history — just the steady path that ends in the same place. It is shown only for whole numbers of years up to 30.",
    ],
    walkthroughs: [
      {
        title: "An investment that fell and recovered",
        paragraphs: [
          "100 falls 50% to 50 in year one, then rises 100% back to 100 in year two. The average of the two yearly returns is (−50% + 100%) ÷ 2 = +25%. But you have exactly what you started with.",
          "CAGR: (100 ÷ 100)^(1/2) − 1 = 0%. This is the classic example of why arithmetic averages of returns mislead, and why CAGR (a geometric average) is the honest summary.",
        ],
      },
      {
        title: "Comparing two periods of different length",
        paragraphs: [
          "Business A grew revenue from 200,000 to 300,000 in 4 years. Business B grew from 200,000 to 350,000 in 7 years. B’s total growth (75%) beats A’s (50%), but per year A grew about 10.67% and B about 8.33%.",
          "CAGR puts both on the same yearly footing. It still ignores how bumpy each path was, so pair it with the actual yearly figures when the decision matters.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Comparing nominal and real figures",
        detail:
          "A price index or salary series that is not adjusted for inflation gives a nominal CAGR. To get a real growth rate, divide (1 + nominal CAGR) by (1 + average inflation) and subtract 1 — the inflation guide walks through this.",
      },
    ],
    extraFaqs: [
      {
        q: "What is the rule of 72?",
        a: "A shortcut: 72 ÷ the yearly growth rate (in percent) ≈ years to double. At a CAGR of about 7.18%, 72 ÷ 7.18 ≈ 10 years, which matches 100 → 200 in 10 years. It is an approximation that works best for rates between roughly 4% and 12%.",
      },
    ],
  },
  "weighted-grade-calculator": {
    relatedGuides: ["how-to-calculate-percentages", "mental-math-percentages"],
    audience: [
      "This page is for students checking where they stand in a course, for parents helping with a gradebook, and for teachers and tutors who want a transparent calculation to show a student.",
      "If you only have one test — 42 points out of 50 — use the “X is what percent of Y” calculator. Weighting only matters when you combine several scores that count differently.",
    ],
    fields: [
      {
        name: "Component",
        detail:
          "A label so you can recognise the rows: Homework, Midterm, Lab, Final. It does not affect the maths and is not included in the shareable link.",
      },
      {
        name: "Score %",
        detail:
          "Your percentage on that component, 0–100 (more if extra credit allows). Leave it blank if it has not been graded yet; the row’s weight then counts as “remaining.”",
      },
      {
        name: "Weight",
        detail:
          "How much the component counts, from the syllabus. Use percentages (20, 30, 50) or any proportional numbers. Rows with no weight are ignored.",
      },
      {
        name: "Target final grade",
        detail:
          "The overall percentage you are aiming for. If any weight is ungraded, the calculator works out the average you need across it.",
      },
    ],
    formulaNotes: [
      "Weighted average = Σ(score × weight) ÷ Σ(weight). With homework 92 at weight 20 and midterm 78 at weight 30: 92 × 20 = 1,840 and 78 × 30 = 2,340. The sum is 4,180, over a graded weight of 50, so the current standing is 4,180 ÷ 50 = 83.6%.",
      "Score needed = (target × total weight − points earned) ÷ remaining weight. To finish on 85% with the final worth 50: (85 × 100 − 4,180) ÷ 50 = 4,320 ÷ 50 = 86.4% on the final.",
      "“Current standing” uses only graded components. It is the grade you would get if your future work matched your past average — not your guaranteed grade.",
    ],
    walkthroughs: [
      {
        title: "Three categories, final still to come",
        paragraphs: [
          "Quizzes 70 (weight 10), project 95 (weight 40), final exam blank (weight 50), target 85. Graded products: 700 + 3,800 = 4,500 over weight 50, so current standing is 90%.",
          "Needed on the final: (85 × 100 − 4,500) ÷ 50 = 80%. A strong project buys room on the exam. If the target were 95, you would need 100% on the final — the calculator will flag targets that need more than 100%.",
        ],
      },
      {
        title: "Weights that do not add to 100",
        paragraphs: [
          "Some teachers weight by points: tests 3, quizzes 1. Enter 3 and 1 as weights; the calculator divides by 4. A test average of 80 and quiz average of 60 gives (240 + 60) ÷ 4 = 75%.",
        ],
      },
      {
        title: "The minimum score to pass",
        paragraphs: [
          "Set the target to your pass mark instead of the grade you hope for. Coursework 55 (weight 40), exam blank (weight 60), pass mark 50. Earned points: 55 × 40 = 2,200. Needed on the exam: (50 × 100 − 2,200) ÷ 60 = 2,800 ÷ 60 ≈ 46.67%.",
          "Some courses also require a minimum on the exam itself, regardless of the overall average. If yours does, the real requirement is whichever of the two numbers is higher; the calculator only knows about the weighted total.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Dropped scores and curves",
        detail:
          "If your course drops the lowest quiz or curves exams, apply that to the score first, then enter the adjusted percentage. The calculator does not know your school’s policy.",
      },
    ],
    extraFaqs: [
      {
        q: "Can I share my calculation?",
        a: "Yes. The page address updates with your scores and weights as you type; use “Copy link to this result” to send it. Component names are not included in the link.",
      },
    ],
  },
};
