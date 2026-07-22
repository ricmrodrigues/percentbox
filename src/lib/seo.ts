import type { CalculatorMode } from "./calculations";
import { MODE_META } from "./calculations";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://percentbox.com";

export const SITE_NAME = "PercentBox";

export const SITE_TAGLINE =
  "Free online percentage calculator — percent of, increase/decrease, tip & discount";

export interface ToolPage {
  slug: string;
  mode: CalculatorMode;
  title: string;
  shortTitle: string;
  description: string;
  h1: string;
  keywords: string[];
  intro: string;
  examples: { q: string; a: string }[];
  faqs: { q: string; a: string }[];
  formulas: { goal: string; formula: string }[];
}

export const TOOLS: ToolPage[] = [
  {
    slug: "percentage-calculator",
    mode: "percent-of",
    title: "Percentage Calculator — Free Online % Calculator",
    shortTitle: "Percentage Calculator",
    description:
      "Free percentage calculator online. Find what is X% of Y, reverse percentages, increase, decrease, tips, and discounts instantly. No signup.",
    h1: "Percentage Calculator",
    keywords: [
      "percentage calculator",
      "percent calculator",
      "online percentage calculator",
      "free percentage calculator",
      "calculate percentage",
    ],
    intro:
      "Use this free percentage calculator to solve everyday percent problems in seconds. Choose a mode, enter your numbers, and get an instant answer with the formula shown.",
    examples: [
      { q: "What is 15% of 200?", a: "30" },
      { q: "What is 20% of 50?", a: "10" },
      { q: "What is 7.5% of 80?", a: "6" },
    ],
    faqs: [
      {
        q: "How do you calculate a percentage?",
        a: "Divide the part by the whole and multiply by 100, or multiply the whole by (percent ÷ 100). Example: 15% of 200 = 0.15 × 200 = 30.",
      },
      {
        q: "Is this percentage calculator free?",
        a: "Yes. PercentBox is free, works in your browser, and does not require an account.",
      },
    ],
    formulas: [
      { goal: "X% of Y", formula: "(X ÷ 100) × Y" },
      { goal: "X is what % of Y", formula: "(X ÷ Y) × 100" },
    ],
  },
  {
    slug: "what-is-x-percent-of-y",
    mode: "percent-of",
    title: "What is X% of Y? — Percentage of a Number Calculator",
    shortTitle: "What is X% of Y?",
    description:
      "Calculate what is X percent of Y instantly. Free online tool with formula: (X ÷ 100) × Y. Examples: 15% of 200, 20% of 50, and more.",
    h1: "What is X% of Y?",
    keywords: [
      "what is x percent of y",
      "what is x% of y",
      "percent of calculator",
      "percentage of a number",
      "calculate x% of y",
    ],
    intro:
      "Find any percentage of a number with the formula (X ÷ 100) × Y. Type the percent and the number to see the result update live.",
    examples: [
      { q: "What is 10% of 250?", a: "25" },
      { q: "What is 25% of 80?", a: "20" },
      { q: "What is 12% of 999?", a: "119.88" },
    ],
    faqs: [
      {
        q: "What does “X% of Y” mean?",
        a: "It means X parts out of every 100 parts of Y. 20% of 50 means 20 hundredths of 50, which equals 10.",
      },
      {
        q: "How do I calculate 15% of 200 without a calculator?",
        a: "10% of 200 is 20, so 5% is 10. 15% = 20 + 10 = 30. Or use (15 ÷ 100) × 200 = 30.",
      },
    ],
    formulas: [{ goal: "X% of Y", formula: "(X ÷ 100) × Y" }],
  },
  {
    slug: "x-is-what-percent-of-y",
    mode: "is-what-percent",
    title: "X is What Percent of Y? — Reverse Percentage Calculator",
    shortTitle: "X is What % of Y?",
    description:
      "Find what percent one number is of another. Free reverse percentage calculator using (X ÷ Y) × 100. Example: 25 is 12.5% of 200.",
    h1: "X is What Percent of Y?",
    keywords: [
      "x is what percent of y",
      "what percent is x of y",
      "reverse percentage calculator",
      "find percentage",
      "percentage of two numbers",
    ],
    intro:
      "Discover the percentage relationship between two numbers with (X ÷ Y) × 100. Great for grades, stats, ratios, and “what portion is this?” questions.",
    examples: [
      { q: "25 is what % of 100?", a: "25%" },
      { q: "40 is what % of 200?", a: "20%" },
      { q: "9 is what % of 12?", a: "75%" },
    ],
    faqs: [
      {
        q: "How do I find what percent one number is of another?",
        a: "Divide the first number by the second, then multiply by 100. 25 ÷ 200 × 100 = 12.5%.",
      },
      {
        q: "What if the second number is zero?",
        a: "Division by zero is undefined. You cannot calculate a percentage of zero as the whole.",
      },
    ],
    formulas: [{ goal: "X is what % of Y", formula: "(X ÷ Y) × 100" }],
  },
  {
    slug: "percentage-increase-calculator",
    mode: "increase-decrease",
    title: "Percentage Increase Calculator — Raise a Value by %",
    shortTitle: "Percentage Increase",
    description:
      "Free percentage increase calculator. Raise any number by a percent: new value = value × (1 + percent/100). Example: 100 increased by 15% = 115.",
    h1: "Percentage Increase Calculator",
    keywords: [
      "percentage increase calculator",
      "increase by percentage",
      "percent increase",
      "raise by percent",
      "markup calculator",
    ],
    intro:
      "Increase a starting value by any percentage. Use it for markups, salary raises, growth projections, and “plus X%” problems.",
    examples: [
      { q: "100 increased by 15%", a: "115" },
      { q: "80 increased by 25%", a: "100" },
      { q: "50 increased by 10%", a: "55" },
    ],
    faqs: [
      {
        q: "How do you calculate a percentage increase on a value?",
        a: "New value = original × (1 + percent/100), or original + (percent/100 × original). 100 increased by 15% = 115.",
      },
      {
        q: "Is percentage increase the same as percentage change?",
        a: "Percentage increase on a value adds a percent to a number. Percentage change compares two values (from A to B).",
      },
    ],
    formulas: [
      {
        goal: "Value after increase",
        formula: "value × (1 + percent/100)",
      },
    ],
  },
  {
    slug: "percentage-decrease-calculator",
    mode: "increase-decrease",
    title: "Percentage Decrease Calculator — Lower a Value by %",
    shortTitle: "Percentage Decrease",
    description:
      "Free percentage decrease calculator. Lower any number by a percent: new value = value × (1 − percent/100). Example: 100 decreased by 15% = 85.",
    h1: "Percentage Decrease Calculator",
    keywords: [
      "percentage decrease calculator",
      "decrease by percentage",
      "percent decrease",
      "reduce by percent",
      "markdown calculator",
    ],
    intro:
      "Decrease a starting value by any percentage. Useful for discounts, reductions, depreciation estimates, and “minus X%” math.",
    examples: [
      { q: "100 decreased by 15%", a: "85" },
      { q: "200 decreased by 10%", a: "180" },
      { q: "80 decreased by 25%", a: "60" },
    ],
    faqs: [
      {
        q: "How do you calculate a percentage decrease?",
        a: "New value = original × (1 − percent/100). 100 decreased by 15% = 85. Savings = original − new value.",
      },
    ],
    formulas: [
      {
        goal: "Value after decrease",
        formula: "value × (1 − percent/100)",
      },
    ],
  },
  {
    slug: "percentage-change-calculator",
    mode: "change",
    title: "Percentage Change Calculator — From A to B",
    shortTitle: "Percentage Change",
    description:
      "Calculate percent change from one number to another. Formula: ((new − old) ÷ |old|) × 100. Free online percentage change calculator.",
    h1: "Percentage Change Calculator",
    keywords: [
      "percentage change calculator",
      "percent change",
      "percentage difference calculator",
      "from a to b percent",
      "growth rate calculator",
    ],
    intro:
      "Measure how much a value grew or shrank from A to B. Positive results are increases; negative results are decreases.",
    examples: [
      { q: "From 80 to 100", a: "25% increase" },
      { q: "From 50 to 40", a: "20% decrease" },
      { q: "From 200 to 250", a: "25% increase" },
    ],
    faqs: [
      {
        q: "How is percentage change calculated?",
        a: "((new − original) ÷ |original|) × 100. From 80 to 100: (20 ÷ 80) × 100 = 25% increase.",
      },
      {
        q: "What if the original value is zero?",
        a: "Percentage change from zero is undefined because you cannot divide by zero.",
      },
    ],
    formulas: [
      {
        goal: "% change A → B",
        formula: "((B − A) ÷ |A|) × 100",
      },
    ],
  },
  {
    slug: "tip-calculator",
    mode: "tip",
    title: "Tip Calculator — Bill, Tip % & Split",
    shortTitle: "Tip Calculator",
    description:
      "Free tip calculator. Enter bill amount and tip percent to get tip, total, and per-person split. Common tips: 15%, 18%, 20%.",
    h1: "Tip Calculator",
    keywords: [
      "tip calculator",
      "gratuity calculator",
      "restaurant tip calculator",
      "split bill tip",
      "18 percent tip",
    ],
    intro:
      "Calculate tip and total in one step. Optionally split the bill between people for dining out, delivery, or group tabs.",
    examples: [
      { q: "18% tip on $64.50", a: "Tip $11.61 · Total $76.11" },
      { q: "20% tip on $40", a: "Tip $8 · Total $48" },
      { q: "15% tip on $100 split 2 ways", a: "$57.50 each" },
    ],
    faqs: [
      {
        q: "How much should I tip?",
        a: "Common restaurant tips in the US are 15–20% of the pre-tax bill. Use 18–20% for good service. Local customs vary.",
      },
      {
        q: "Do I tip on tax?",
        a: "Many people tip on the pre-tax subtotal. Some tip on the full bill. Either is fine—pick a consistent rule.",
      },
    ],
    formulas: [
      { goal: "Tip amount", formula: "bill × (tip% ÷ 100)" },
      { goal: "Total", formula: "bill + tip" },
      { goal: "Per person", formula: "total ÷ people" },
    ],
  },
  {
    slug: "discount-calculator",
    mode: "discount",
    title: "Discount Calculator — Sale Price & Savings",
    shortTitle: "Discount Calculator",
    description:
      "Free discount calculator. Find sale price and how much you save. Formula: final = price × (1 − discount%/100). Example: 30% off $99.99.",
    h1: "Discount Calculator",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "percent off calculator",
      "how much do I save",
      "markdown calculator",
    ],
    intro:
      "See the final price after a percentage discount and exactly how much you save. Perfect for shopping, coupons, and clearance deals.",
    examples: [
      { q: "30% off $99.99", a: "Pay $69.99 · Save $30.00" },
      { q: "25% off $80", a: "Pay $60 · Save $20" },
      { q: "50% off $49.99", a: "Pay $24.995 → ~$25.00" },
    ],
    faqs: [
      {
        q: "How do I calculate a discount?",
        a: "Savings = price × (discount% ÷ 100). Final price = price − savings. 25% off $80 = $20 off → $60.",
      },
      {
        q: "What about stacked discounts?",
        a: "Apply discounts one after another on the reduced price, not by adding percentages. 20% then 10% off is not 30% off.",
      },
    ],
    formulas: [
      { goal: "Savings", formula: "price × (discount% ÷ 100)" },
      { goal: "Final price", formula: "price − savings" },
    ],
  },
];

export function getToolBySlug(slug: string): ToolPage | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function modeLabel(mode: CalculatorMode): string {
  return MODE_META[mode].title;
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: [] as string[],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function webAppJsonLd() {
  return {
    "@type": "WebApplication",
    "@id": `${SITE_URL}/#webapp`,
    name: "PercentBox Percentage Calculator",
    url: SITE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: SITE_TAGLINE,
    featureList: [
      "What is X% of Y",
      "X is what percent of Y",
      "Percentage increase and decrease",
      "Percentage change",
      "Tip calculator",
      "Discount calculator",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function howToJsonLd(tool: ToolPage) {
  return {
    "@type": "HowTo",
    name: `How to use the ${tool.shortTitle}`,
    description: tool.intro,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the calculator",
        text: `Go to the ${tool.shortTitle} on PercentBox.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter your numbers",
        text: "Type the values into the input fields. Results update as you type.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Read the result",
        text: "See the answer, detail line, and formula. Copy the result if needed.",
      },
    ],
  };
}

export function softwareAppJsonLd(tool: ToolPage) {
  return {
    "@type": "SoftwareApplication",
    name: tool.shortTitle,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: absoluteUrl(`/${tool.slug}`),
    description: tool.description,
  };
}
