import type { EditorialDepth } from "./depth-types";

export const depthFinance: Record<string, EditorialDepth> = {
  "vat-calculator": {
    relatedGuides: ["sales-tax-versus-vat", "how-to-calculate-discounts"],
    audience: [
      "This page adds a tax rate to a net amount, or pulls a tax rate back out of a gross amount. It is for quotes, receipts, and the moment someone multiplies a tax-inclusive price by the rate and gets a number that cannot be the tax. The presets remember commonly cited rates, including Portugal’s often-mentioned mainland 23%, 13%, and 6%, plus a few other European standards and an illustrative US-like 8%. A preset is not a ruling. Islands, reduced categories, and exemptions exist. Confirm the rate, then calculate.",
      "Freelancers writing a net day-rate, shoppers staring at a gross shelf price, and students learning why “23% of the gross” is the wrong extraction all use the same two formulas. The page will not decide which direction your document is in. The direction control is that decision.",
    ],
    fields: [
      {
        name: "Add VAT (net → gross)",
        detail:
          "The amount you type is before tax. Gross = net × (1 + rate/100). At 23%, 100 net becomes 123 gross, and the VAT line is 23. Use this when a quote is ex-VAT and the client will be charged tax on top.",
      },
      {
        name: "Extract VAT (gross → net)",
        detail:
          "The amount you type is the price including tax, the amount someone actually pays. Net = gross ÷ (1 + rate/100). At 23%, 123 gross becomes 100 net, VAT 23. Use this on a shelf price or a receipt total that already includes the tax.",
      },
      {
        name: "Net amount or gross amount",
        detail:
          "The label flips with the direction so you do not pour a gross price into an add formula. The dollar sign is a label; a euro amount uses the same arithmetic. Type the figure that matches the label, not the figure you wish you had.",
      },
      {
        name: "Tax / VAT rate and the presets",
        detail:
          "The rate box is the authority. Presets only fill it: PT standard 23, PT intermediate 13, PT reduced 6, ES 21, DE 19, FR 20, UK 20, an 8% example, and 0%. Portugal’s Azores and Madeira do not use the mainland standard rate. If you are not sure, do not let a button choose for you. Zero percent is a real calculation: gross equals net, tax is zero.",
      },
    ],
    formulaNotes: [
      "Adding multiplies by one plus the rate. Extracting divides by that same factor. They are inverses. Start at 100, add 23%, land on 123, extract 23%, land on 100. The tax inside a gross price is not the rate times the gross. It is rate / (100 + rate) of the gross. At 23% that fraction is 23/123 ≈ 18.70%. So 23% of €123 is about €28.29, and that number is not the VAT in the €123. The extract mode exists so you do not have to remember 23/123 under pressure.",
      "A discount usually changes the amount on which VAT is charged. Take 10% off a €100 net price first (pay €90 net), then add 23% (gross €110.70). Adding 23% to €100 and then taking 10% off the gross gives €110.70 as well only because both operations are multiplications and they commute. A fixed voucher can break that comfort: €10 off before tax is not the same euros as €10 off after tax. If the terms are ambiguous, run both orders and see how many euros the ambiguity is worth.",
      "Line rounding is why a one-line calculator and a 40-line invoice disagree by a cent. Three nets of €10.10 at 23% can round differently per line than on the sum. Allow a cent before you call the shop wrong. This page rounds its display; it does not reproduce a particular invoicing system’s rounding rule.",
    ],
    walkthroughs: [
      {
        title: "A Portuguese mainland quote at the standard rate",
        paragraphs: [
          "A designer bills €750 net and believes the supply takes the mainland standard rate of 23%. Direction Add, amount 750, rate 23. VAT is 172.50. Gross is 922.50. The invoice should show those three numbers if the rate is right. If the client is a business in another EU country and the supply is treated as a reverse charge, the rate may be zero on your invoice and the client accounts for tax instead. This page can show the zero, and it cannot tell you whether the reverse charge applies.",
          "The client forwards a paid total of €922.50 and asks what was net. Direction Extract, amount 922.50, rate 23. You should get 750 and 172.50 back. If you instead take 23% of 922.50 you get about 212.18, and the “net” you would infer by subtraction is about 710.32, which is a fictional invoice.",
        ],
      },
      {
        title: "A UK shelf price and a US-style added tax",
        paragraphs: [
          "A UK shelf price of £24 at 20% is a gross price if the tag is what you pay. Extract: net = 24 / 1.20 = 20, VAT = 4. A US register that shows $20 and then adds 8% at the till is the other direction: net 20, add 8%, tax 1.60, pay 21.60. The preset labeled “US example” is 8% because rates vary by state and city; it is not the rate at a particular checkout. The sales-tax-versus-VAT guide is about that difference in habits. The arithmetic of adding is the same multiplication either way.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Using a reduced rate because the product feels essential",
        detail:
          "Food, books, and renovations sometimes take a reduced rate and sometimes do not, and the lists differ by country. The 13% and 6% buttons are reminders that Portugal quotes more than one rate. They are not a classification of your product. When the rate is the point of the question, look it up. Then type it.",
      },
    ],
    extraFaqs: [
      {
        q: "Are the Portugal presets the current legal rates?",
        a: "They are the mainland rates people have cited for years: 23%, 13%, and 6%. Law can change, and the Azores and Madeira have their own rates. Treat the button as a way to fill the box, then confirm against an official source if you are issuing an invoice.",
      },
      {
        q: "Is US sales tax the same math?",
        a: "Adding a rate on top of a net price is the same multiplication. The habit is different: US tags are often before tax, and European shelf prices often already include VAT. If the number in your hand is what you pay, extract. If it is what the tag said before the till, add.",
      },
      {
        q: "What if the receipt has several rates?",
        a: "Split the receipt. Run each net at its own rate and add the VAT lines yourself. One blended rate is a summary you might compute afterward. It is not a safe thing to type into a single box if you need the tax authority’s lines.",
      },
    ],
  },
  "compound-interest-calculator": {
    relatedGuides: ["simple-vs-compound-interest", "effective-annual-rate"],
    audience: [
      "This page projects a balance when interest stays in the account and the rate you type is applied, unchanged, for the whole term. It is a scenario tool: a savings illustration, a textbook problem, a comparison of “start now” against “start five years later.” It is not a market forecast, not a loan schedule, and not a promise from a bank. Fees, tax, and inflation are absent unless you have already reduced the rate to stand in for them — and if you do that, say so.",
      "People use it to see that contributions often dwarf the opening deposit, and that compounding frequency matters less than they were told at ordinary savings rates. The chart of numbers is the constant-rate path. Real accounts wander.",
    ],
    fields: [
      {
        name: "Starting principal",
        detail:
          "The amount already there at the beginning, before any contribution and before any interest. €10,000 goes here in the usual example. It earns interest for the full term. Later contributions do not.",
      },
      {
        name: "Annual interest rate",
        detail:
          "The nominal annual rate, the one advertisements quote before you ask about frequency. 5 means 5% a year, split across the number of compounding periods. It is not automatically the effective annual rate. At monthly compounding, 5% nominal is about 5.116% effective.",
      },
      {
        name: "Years",
        detail:
          "The length of the scenario. 10 years at monthly compounding is 120 periods. A fractional year is allowed by the formula; a bank may not offer the same flexibility. Zero years returns the principal and no interest.",
      },
      {
        name: "Contribution per period",
        detail:
          "An extra deposit once per compounding period, treated as an end-of-period contribution. If you compound monthly, this box is a monthly contribution. If you compound annually, it is a yearly one. The helper text under the frequency control says this, and it is the easiest field to misread. Zero means the lump sum is left alone.",
      },
      {
        name: "Compounding frequency",
        detail:
          "Annually, semi-annual, quarterly, monthly, or daily (365). The nominal rate is divided by that count. Daily at 5% is a slightly higher ending balance than monthly, which is slightly higher than annual. At ordinary rates the gap is real and smaller than a change in the rate itself.",
      },
    ],
    formulaNotes: [
      "With no contributions, future value = P × (1 + r/n)^(n×t). P is principal, r is the annual rate as a decimal, n is periods per year, t is years. €10,000 at 5% for 10 years compounded monthly: n = 12, exponent = 120, growth factor ≈ 1.647, balance ≈ €16,470. The same nominal rate compounded once a year is 10,000 × (1.05)^10 ≈ €16,289. The frequency gap is about €180. A 6% annual rate on the same lump sum is 10,000 × (1.06)^10 ≈ €17,908. The one-point rate change beats the frequency toggle.",
      "Contributions use the ordinary annuity factor: payment × (((1 + r/n)^(nt) − 1) ÷ (r/n)), added to the grown principal. That factor assumes a deposit at the end of each period, which matches this page. €100 a month beside the €10,000 example is 120 deposits, €12,000 of new money, and those deposits do not all get ten years of growth. The last one barely earns anything. The interest figure the page reports is ending balance minus principal minus every contribution. It is not “the rate times the total.”",
      "A loan is a different shape. An amortizing payment is sized so the balance hits zero, and interest is charged on a falling balance. Negative contributions in this tool are not a substitute unless the amount happens to be the exact payment. Use the loan calculator for installments. Simple interest, which does not pay interest on interest, is the comparison in the simple-versus-compound guide: 5% simple on €10,000 for 10 years is €5,000 of interest and a €15,000 ending balance, short of the compound figure.",
    ],
    walkthroughs: [
      {
        title: "€10,000 left alone, then the same account with €100 a month",
        paragraphs: [
          "Principal 10000, rate 5, years 10, contribution 0, frequency monthly. Ending balance about €16,470. Interest is about €6,470, because you only put in the original 10,000. Switch the contribution to 100. You have now added €12,000 over 120 months. The ending balance is the grown lump sum plus the future value of that series. Most of the new money was not invested for the full decade, so you do not get €12,000 × 1.647. The page’s “total contributed” line includes the original principal and every deposit. Subtract it from the final balance and what remains is interest. That split is the part worth reading. The headline balance mixes your own money with the bank’s.",
        ],
      },
      {
        title: "Starting five years late",
        paragraphs: [
          "Same 5% monthly, contribution 100, but years = 5 instead of 10, principal 10000. You will see a lower balance, and the gap versus the ten-year run is not just “five years of €100.” The early deposits in the ten-year version had extra years to compound, and the original principal had extra years too. The late start is the expensive one. This is still a constant-rate cartoon. It is a good cartoon for the cost of waiting, and a bad one for predicting a fund that can fall.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Reading a nominal rate as an effective one, or the reverse",
        detail:
          "If a bank quotes 5.12% AER and you type 5.12 into a monthly compounder, you have compounded an already-effective rate and overstated the balance. The effective-annual-rate guide shows the conversion. Type the nominal rate the contract compounds, or reduce an AER to nominal before you choose a frequency.",
      },
    ],
    extraFaqs: [
      {
        q: "Why isn’t monthly dramatically better than annual?",
        a: "At 5% for ten years on €10,000 the gap is on the order of a couple of hundred euros. The effective annual rate moves from 5% to about 5.12%. Over long periods the euro gap grows. It still loses to a real difference in the rate you were able to get.",
      },
      {
        q: "Does the tool withhold tax on the interest?",
        a: "No. Many countries tax interest or investment gains. The balance here is a pre-tax scenario at a constant rate. A careful comparison uses an after-tax rate you computed yourself, and labels it as after-tax.",
      },
      {
        q: "What does daily compounding assume about the year?",
        a: "365 periods, not 360 and not 366. Banks differ. At ordinary savings rates the convention changes the result by a small amount. If you are matching a contract to the cent, read the contract’s day count. This page is the 365 version.",
      },
    ],
  },
  "loan-calculator": {
    relatedGuides: ["apr-versus-interest-rate", "compound-interest-basics"],
    audience: [
      "This page estimates a fixed monthly payment on a fixed annual rate over a fixed term, then splits that payment into interest and principal. It is for a personal loan, a car loan, or an illustrative mortgage before you talk to a lender. The €25,000 example at 6.5% for five years is about €489 a month. The first month’s interest is about €135. The last month’s interest is a couple of euros. The payment did not change. The balance it was charged on did.",
      "It is not a variable-rate model. Euribor plus a spread can be typed as today’s all-in rate for a what-if. When the index moves, this schedule does not. It is also not a consumer-credit disclosure. Fees, insurance, and a promotional rate that steps up later belong beside the schedule, in euros or as a second run.",
    ],
    fields: [
      {
        name: "Loan amount",
        detail:
          "The principal the interest is charged on at the start. Fees that are added to the amount you owe belong in this box. Fees you pay in cash up front do not, but they still change the true cost. The APR guide is about that distinction.",
      },
      {
        name: "Annual interest rate",
        detail:
          "The nominal annual rate the contract uses to compute each month’s interest, divided by 12 inside the formula. Do not drop in an APR that has been lifted by an arrangement fee unless you know the APR equals that nominal rate. A higher comparison APR will overstate the installment and you will still owe the fee.",
      },
      {
        name: "Term (years)",
        detail:
          "Converted to months by multiplying by 12. Five years is 60 payments. A longer term lowers the payment and usually raises total interest, because the balance stays larger for longer. The page does not do interest-only periods or balloon payments.",
      },
      {
        name: "The schedule",
        detail:
          "Each row is one month: payment, interest, principal, balance. Interest is the remaining balance times the monthly rate. Principal is the rest of the payment. The last row may adjust by a few cents so the balance ends at zero. A lender’s rounding rule can differ by those cents. The shape — interest-heavy at the start, principal-heavy at the end — is the part that survives the rounding.",
      },
    ],
    formulaNotes: [
      "Monthly rate r = annual percent / 100 / 12. Number of payments n = years × 12. Payment M = P × r × (1 + r)^n / ((1 + r)^n − 1). When the rate is zero, the payment is simply principal divided by n. On €25,000 at 6.5% for 60 months, r ≈ 0.0054167 and the payment is about €489.15. Month one interest ≈ 25,000 × 0.0054167 ≈ €135.42, so principal that month is about €353.73 and the balance falls to about €24,646.",
      "Total interest is not “rate times principal times years.” That product would be simple interest on the original principal for the whole term: 25,000 × 0.065 × 5 = €8,125. The amortizing loan charges interest on what you still owe, which shrinks. You pay less interest than that cartoon — on this example, on the order of €4,350 — and you pay it on a schedule that is front-loaded. Early extra payments, if the contract allows them without a penalty, knock down the balance that later interest is charged on. This page does not apply extra payments. The schedule assumes you pay exactly the installment.",
      "A five-year loan and a compound-interest projection are easy to confuse because both mention a rate and a term. Compound interest on a deposit grows a balance you own. A loan payment is the amount that drives a balance you owe down to zero. The compound calculator will not reproduce this schedule unless you already know the payment and force the cash flows. Use this page for the payment.",
    ],
    walkthroughs: [
      {
        title: "€25,000 at 6.5% for five years, and the first year of the schedule",
        paragraphs: [
          "Loan amount 25000, annual rate 6.5, term 5. Monthly payment about €489. Over 60 months you pay on the order of €29,350, of which about €4,350 is interest. After 12 payments you have paid about €5,870 and you still owe roughly €20,700. You are not halfway. You have made a fifth of the payments and retired well under a fifth of the principal, because the early payments were busy paying interest.",
          "That is the conversation to have before stretching the term to make the monthly number comfortable. Run a longer term and watch total interest, not just the payment. The lower payment is real. So is the extra interest.",
        ],
      },
      {
        title: "A fee that makes the APR a bad thing to type",
        paragraphs: [
          "Suppose the lender quotes 6.5% and also an arrangement fee that lifts a comparison APR to 7.4%. The installment is computed from 6.5% on the amount you owe. Type 6.5 if 6.5 is the rate on the balance. Put the fee next to the schedule as money you pay, or include it in the loan amount if it is financed. Typing 7.4 produces a higher payment than the contract will debit, and you will think the calculator disagrees with the lender. The APR-versus-interest-rate guide walks through why both percents can be honest and still not be interchangeable.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Treating a promotional rate as if it lasted the whole term",
        detail:
          "A 1.9% rate for twelve months that then becomes 8% is two loans glued together. One run at 1.9% for the full term flatters the offer. Run the introductory slice, note the balance that remains, and run the rest of the term at the follow-on rate. The page will not switch rates in the middle for you.",
      },
    ],
    extraFaqs: [
      {
        q: "What is EMI?",
        a: "Equated monthly installment: a payment that stays the same each month while the mix of interest and principal inside it changes. “Equated” refers to the payment, not to an equal split between interest and principal.",
      },
      {
        q: "Will a variable rate such as Euribor show up automatically?",
        a: "No. Type an assumed all-in rate, index plus spread, and treat the schedule as a what-if. Run a higher rate as a stress test. Nothing on this page watches the index.",
      },
      {
        q: "Why does the last payment differ by a few cents?",
        a: "So the balance can land on zero after rounding each month to the cent. A lender may round differently and send a final payment that is slightly off the regular installment. The total interest is the sum of the interest column, not the rate times the original principal.",
      },
    ],
  },
};
