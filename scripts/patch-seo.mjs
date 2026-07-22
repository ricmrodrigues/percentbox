import fs from "fs";

const p = "src/lib/seo.ts";
let s = fs.readFileSync(p, "utf8");

// Add kind: percent where missing
s = s.replace(
  /(\{\n    slug: "[^"]+",\n)(    mode:)/g,
  (m, a, b) => (m.includes("kind:") ? m : `${a}    kind: "percent",\n${b}`)
);

const newTools = `
  {
    slug: "markup-calculator",
    kind: "markup",
    title: "Markup & Margin Calculator — Cost, Sell Price & Profit",
    shortTitle: "Markup / Margin",
    description:
      "Free markup and margin calculator. Convert cost to sell price, markup % to margin %, or reverse from cost and sell. Instant results for retail and business pricing.",
    h1: "Markup & Margin Calculator",
    keywords: [
      "markup calculator",
      "margin calculator",
      "markup vs margin",
      "profit margin calculator",
      "cost to sell price",
    ],
    intro:
      "Price products correctly by converting between cost, sell price, markup percentage (on cost), and profit margin percentage (on sell). Essential for retail, wholesale, and freelance pricing.",
    examples: [
      { q: "Cost $50 with 40% markup", a: "Sell $70 · Margin ~28.57%" },
      { q: "Cost $50 with 40% margin", a: "Sell $83.33 · Markup ~66.67%" },
      { q: "Cost $80 sell $100", a: "Markup 25% · Margin 20%" },
    ],
    faqs: [
      {
        q: "What is the difference between markup and margin?",
        a: "Markup is profit divided by cost. Margin is profit divided by sell price. A 50% markup on $100 cost is $150 sell (33.3% margin). They are not the same percentage.",
      },
      {
        q: "How do I calculate sell price from margin?",
        a: "Sell price = cost ÷ (1 − margin%/100). For a 40% margin on $50 cost: 50 ÷ 0.6 ≈ $83.33.",
      },
    ],
    formulas: [
      { goal: "Sell from markup", formula: "cost × (1 + markup%/100)" },
      { goal: "Sell from margin", formula: "cost ÷ (1 − margin%/100)" },
      { goal: "Margin %", formula: "(sell − cost) ÷ sell × 100" },
      { goal: "Markup %", formula: "(sell − cost) ÷ cost × 100" },
    ],
  },
  {
    slug: "vat-calculator",
    kind: "vat",
    title: "VAT Calculator — Add or Extract Sales Tax",
    shortTitle: "VAT / Tax",
    description:
      "Free VAT and sales tax calculator. Add tax to a net price or extract VAT from a gross amount. Presets for Portugal, Spain, Germany, France, UK, and more.",
    h1: "VAT / Sales Tax Calculator",
    keywords: [
      "vat calculator",
      "sales tax calculator",
      "add vat",
      "extract vat",
      "tax inclusive price",
      "portugal vat 23%",
    ],
    intro:
      "Quickly add VAT to a net (ex-tax) amount or reverse a tax-inclusive (gross) price into net and VAT. Includes common European rate presets including Portugal 23% / 13% / 6%.",
    examples: [
      { q: "Add 23% VAT to $100 net", a: "VAT $23 · Gross $123" },
      { q: "Extract 23% from $123 gross", a: "Net $100 · VAT $23" },
      { q: "Add 20% VAT to $50", a: "VAT $10 · Gross $60" },
    ],
    faqs: [
      {
        q: "How do I add VAT to a price?",
        a: "Gross = net × (1 + rate/100). Example: $100 + 23% VAT = $123.",
      },
      {
        q: "How do I remove VAT from a gross price?",
        a: "Net = gross ÷ (1 + rate/100). VAT = gross − net. Example: $123 including 23% VAT → net $100.",
      },
    ],
    formulas: [
      { goal: "Add VAT", formula: "gross = net × (1 + rate/100)" },
      { goal: "Extract VAT", formula: "net = gross ÷ (1 + rate/100)" },
    ],
  },
  {
    slug: "compound-interest-calculator",
    kind: "compound",
    title: "Compound Interest Calculator — Growth & Contributions",
    shortTitle: "Compound Interest",
    description:
      "Free compound interest calculator with monthly, daily, or annual compounding and optional regular contributions. Project savings growth over time.",
    h1: "Compound Interest Calculator",
    keywords: [
      "compound interest calculator",
      "compound interest",
      "investment growth calculator",
      "savings calculator",
      "compound monthly",
    ],
    intro:
      "See how principal grows with compound interest. Choose compounding frequency and optional contributions each period to model savings or investments.",
    examples: [
      {
        q: "$10,000 at 5% for 10 years (monthly)",
        a: "About $16,470 without contributions",
      },
      {
        q: "$10,000 + $100 per period at 5%",
        a: "Higher balance from contributions + interest",
      },
      { q: "$5,000 at 7% for 20 years annually", a: "About $19,348" },
    ],
    faqs: [
      {
        q: "What is compound interest?",
        a: "Interest is calculated on principal plus previously earned interest. Over time this creates exponential growth compared with simple interest.",
      },
      {
        q: "How often should interest compound?",
        a: "More frequent compounding (e.g. monthly vs annually) slightly increases effective yield for the same nominal annual rate.",
      },
    ],
    formulas: [
      { goal: "Future value (no PMT)", formula: "P(1 + r/n)^(nt)" },
      {
        goal: "With contributions",
        formula: "P(1+r/n)^(nt) + PMT × [((1+r/n)^(nt) − 1) ÷ (r/n)]",
      },
    ],
  },
  {
    slug: "loan-calculator",
    kind: "loan",
    title: "Loan Calculator — EMI, Monthly Payment & Amortization",
    shortTitle: "Loan / EMI",
    description:
      "Free loan calculator for fixed-rate loans. Get monthly EMI/payment, total interest, and a full amortization schedule. Ideal for personal loans and auto loans with a fixed rate.",
    h1: "Loan / EMI Calculator",
    keywords: [
      "loan calculator",
      "emi calculator",
      "monthly payment calculator",
      "amortization schedule",
      "personal loan calculator",
      "fixed rate loan",
    ],
    intro:
      "Estimate fixed-rate loan payments with a standard amortization formula. Enter amount, annual rate, and term to see monthly payment, total interest, and a month-by-month schedule. Variable rates (e.g. Euribor) are not modeled here—use a fixed effective rate for an estimate.",
    examples: [
      { q: "$25,000 at 6.5% for 5 years", a: "About $489/mo" },
      { q: "$10,000 at 8% for 3 years", a: "About $313/mo" },
      {
        q: "$200,000 at 4% for 30 years",
        a: "About $955/mo (illustrative)",
      },
    ],
    faqs: [
      {
        q: "What is EMI?",
        a: "Equated Monthly Installment—the fixed monthly payment that covers interest and principal over the loan term.",
      },
      {
        q: "Does this support Euribor or variable rates?",
        a: "This calculator uses a fixed annual rate. For floating rates, enter an assumed average or current all-in rate (index + spread) as an approximation.",
      },
    ],
    formulas: [
      {
        goal: "Monthly payment",
        formula: "M = P × r(1+r)^n ÷ ((1+r)^n − 1), r = annual/12",
      },
    ],
  },
`;

if (!s.includes('slug: "markup-calculator"')) {
  s = s.replace(
    /\n\];\n\nexport function getToolBySlug/,
    `${newTools}\n];\n\nexport function getToolBySlug`
  );
}

s = s.replace(
  /featureList: \[[\s\S]*?\],\n    publisher:/,
  `featureList: [
      "What is X% of Y",
      "Percentage change",
      "Tip and discount",
      "Markup and margin",
      "VAT / sales tax",
      "Compound interest",
      "Loan / EMI amortization",
    ],
    publisher:`
);

fs.writeFileSync(p, s);
console.log("patched ok");
