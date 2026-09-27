import type { EditorialDepth } from "./depth-types";

export const depthShopping: Record<string, EditorialDepth> = {
  "tip-calculator": {
    relatedGuides: ["how-to-calculate-percentages", "sales-tax-versus-vat"],
    audience: [
      "This page multiplies a bill by a tip rate and, if you ask, divides the total by a headcount. It is for a table that has already decided the rate — or wants 15%, 18%, and 20% side by side — and does not want to do the cents in a noisy room. It will not tell you the local custom. In much of the United States a restaurant tip is ordinary. In much of Portugal it is not the same script, and a service charge may already be on the bill. Decide the rate somewhere other than the arithmetic, then use the arithmetic so the split is not the thing you get wrong.",
      "The page opens on the tip tab. The dollar sign on the bill field is a label. A €64.50 bill uses the same product as a $64.50 bill.",
    ],
    fields: [
      {
        name: "Bill amount",
        detail:
          "The amount the percent applies to. If your rule is “tip on food, not on tax,” type the pre-tax subtotal. If the only figure you have is a tax-inclusive total, type that and accept that you are tipping on the tax as well. If a service charge is already inside the number, you are about to tip on a tip unless you subtract the charge first.",
      },
      {
        name: "Tip percentage",
        detail:
          "The rate. Presets on this tab are 10, 15, 18, 20, 22, and 25, which are the buttons people actually argue about at a US table. A different custom — rounding up to a note, a flat euro or two, nothing — may not be one of those buttons. Type the rate you mean. Tapping a preset replaces it.",
      },
      {
        name: "Split between (people)",
        detail:
          "How many ways the total, not just the tip, is divided. 1 leaves the total intact. 0 is not a meaningful headcount; keep it at 1 or more. The split is equal. It does not know who ordered the wine.",
      },
      {
        name: "Tip, total, and per person",
        detail:
          "The formula line shows tip plus bill, then the division. 18% of 64.50 is 11.61, the total is 76.11, and two people owe 38.055 each before you deal with the half-cent. Someone takes the extra cent, or you nudge the tip until the total divides in cents you can pay.",
      },
    ],
    formulaNotes: [
      "Tip = bill × (rate ÷ 100). Total = bill + tip. Per person = total ÷ people. There is no tax estimator hiding in the formula. Whatever you typed is the whole the rate sees.",
      "An 18% tip is not “20% minus a little” in a way you should compute from the 20% figure by guessing. 20% of 64.50 is 12.90. 18% is 11.61. The difference is 1.29, which is 2% of the bill, and it is worth knowing if the table is debating those two buttons. 15% is 9.675, which money usually rounds to 9.68. The page keeps more precision than a cash drawer. You still have to pay a coin that exists.",
      "Equal splits of unequal orders feel fair only when the table agreed to pool. One €40 dish among four modest plates disappears into the average. Split the food in proportion first if that was the deal, then tip on each share, or tip on the whole and divide the tip by the same weights. This page only does the equal version.",
    ],
    walkthroughs: [
      {
        title: "Three people, 20% on the pre-tax subtotal",
        paragraphs: [
          "The subtotal is $86.40 and the tax line is $7.55. The table’s rule is tip on the subtotal. Bill amount 86.40, tip percentage 20, people 3. Tip is 17.28. Total of subtotal plus tip is 103.68, which is not the amount on the card if tax is still unpaid. Add the tax back outside the tip: 103.68 + 7.55 = 111.23 to settle, before the split gets subtle. Per person on the tipped subtotal alone is 34.56, and then each person still owes a third of the tax, about 2.52. The calculator did the tip. You still have to add the tax line you deliberately left out.",
          "If someone instead types 93.95 (subtotal plus tax) and tips 20%, the tip becomes 18.79. The extra 1.51 is the cost of the other rule. Either rule is coherent. Mixing them inside one sentence is how tables argue.",
        ],
      },
      {
        title: "A bill that already has a 10% service charge",
        paragraphs: [
          "The printed total is €92, and a line says service 10% included. If you type 92 and add another 10%, you tip €9.20 on top of a charge that was already €8.36 or so of that 92 (because 92 / 1.10 = 83.64, and the charge is the rest). Subtract first if you do not mean to double it. Type 83.64 and then decide whether any further tip is warranted. The page will not parse the receipt.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Dividing the tip and forgetting the bill",
        detail:
          "The per-person figure on this page is a share of the total, not a share of the tip alone. The detail line also shows the tip per person. If four people each “put in the tip” using the total-per-person number, the restaurant gets paid four times.",
      },
    ],
    extraFaqs: [
      {
        q: "What is a normal tip?",
        a: "There is no universal one. In the US, 15–20% of the restaurant bill is a common range, often on the pre-tax subtotal. In many European countries the menu price is the price and a small extra is optional. Follow the custom of the place you are sitting, and the printed service charge, rather than a button on this site.",
      },
      {
        q: "Why did two people not land on even cents?",
        a: "Because cents are a hundredth and the total was not an even number of them. 76.11 divided by 2 is 38.055. Round the tip to a nearby cent that makes the total divisible, or let one person pay the extra cent. The percent is not the part that failed.",
      },
      {
        q: "Can I tip 0%?",
        a: "Yes. The tip is zero and the total equals the bill. That is a choice about custom and service, not a calculator error. Splitting still divides the bill.",
      },
    ],
  },
  "discount-calculator": {
    relatedGuides: ["stacked-discounts", "how-to-calculate-percentages"],
    audience: [
      "This page applies one percent off and reports two outputs: what you pay and what you save. It is for a single tag that says “30% off” on a price you do not trust yourself to do in the aisle. It opens on the discount tab. It does not add a second badge, and it does not put sales tax back on.",
      "Shoppers use it. So does anyone checking a quote that says “15% off the day rate.” The thing being discounted has to be the number you type. A percent off a shipping fee is not a percent off the whole cart unless the promotion says so.",
    ],
    fields: [
      {
        name: "Original price",
        detail:
          "The price before this discount. If a previous sale already happened, the “original” for this calculation is the current price the new percent applies to, and you must remember that the savings figure is only the latest cut. The dollar sign is a label.",
      },
      {
        name: "Discount percentage",
        detail:
          "One rate. Presets run from 5% through 70%, including the 10, 20, 25, 30, 40, and 50 buttons that show up on tags. 100% off reduces the price to zero. Above 100% the pay line goes negative, which is a sign to re-read the tag.",
      },
      {
        name: "You pay and you save",
        detail:
          "Pay + save = original, before rounding. 30% off 99.99 saves 29.997 and leaves 69.993. Rounded to the cent in the usual way that is about 30.00 saved and 69.99 to pay. A till that rounds each line differently can disagree by a cent. Allow the cent.",
      },
      {
        name: "What this page will not fill in",
        detail:
          "No tax field, no coupon stack, no “was” price reconstructed from a sale price. Reconstructing an original is division by the leftover fraction: a 70 price after 30% off came from 70 / 0.70 = 100. Subtracting 30% of 70 does not get you there.",
      },
    ],
    formulaNotes: [
      "Savings = price × (discount ÷ 100). Final = price − savings, which is the same as price × (1 − discount/100). 25% off 80 is 20 saved and 60 to pay. The pay fraction is 0.75. Keep that fraction in mind when a second offer appears: the second offer multiplies 0.75, it does not add to 25.",
      "Stacked badges: 20% off and then an extra 10% off is 0.80 × 0.90 = 0.72, so you pay 72% and the true discount on the original is 28%, not 30%. Half off twice leaves 25% of the price, a 75% discount. Run the first percent here, then run the second percent on the pay line. The second savings number is not the total savings. Add the two savings figures, or compare the final pay line with the first original.",
      "Comparing two deals by the size of the percent is how people buy the louder tag. 25% off 120 is 90. 10% off 100 is 90. The banner and the savings differ; the money leaving your account does not. Compare pay lines. If the products are not the same product, the pay line is still the price, and the percent is not a quality score.",
    ],
    walkthroughs: [
      {
        title: "One tag, an awkward price",
        paragraphs: [
          "A coat is marked €149.90, 35% off, one discount, no coupon. Original price 149.90, discount 35. Savings are 52.465, pay is 97.435. To the cent: about €52.47 off and €97.43 to pay, and those cents should still sum to 149.90. Ten percent is 14.99, thirty percent is 44.97, five percent is 7.495; the sum is the same neighborhood. If the till says €104, someone applied 30% or added a fee. Ask which.",
        ],
      },
      {
        title: "20% off and then a member extra 15%",
        paragraphs: [
          "The shelf price is €80. First visit: 20% off 80 pays 64 and saves 16. Second visit, on the member price: 15% off 64 pays 54.40 and saves 9.60 on that step. Total saved against the shelf is 25.60, which is 32% off 80, not 35%. The member badge is real. It is just not 15% of the original. Quote €54.40 as what you pay. Quote 32% only if someone asks for a single equivalent rate, and show the multiplication so they can see you did not add 20 and 15.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Applying the percent to a bundle price that excludes a required part",
        detail:
          "30% off the camera body does nothing, by itself, to the lens the bundle requires. Type the number the percent actually touches. Then add the untouched items back. A calculator cannot see the asterisk on the shelf label.",
      },
    ],
    extraFaqs: [
      {
        q: "Does the sale price include tax?",
        a: "Only if the price you typed already included it. This tool does not add VAT or sales tax. If the tag is before tax, discount it here and then add tax on the reduced amount, which is what the VAT calculator’s add mode is for. Discount-then-tax and tax-then-discount differ when the rules say the tax base changes.",
      },
      {
        q: "How do I undo a discount?",
        a: "Divide the price you pay by (1 − rate/100). €69.99 after 30% off, ignoring the cent rounding on 99.99, is the neighborhood of a €100 original because 70 / 0.70 = 100. Do not subtract 30% of the sale price.",
      },
      {
        q: "What if the discount is a fixed amount, not a percent?",
        a: "Subtract the fixed amount yourself. This page only understands a percent of the price you typed. After you have the reduced price, you can ask the reverse-percent page what percent that fixed amount was. A €15 coupon on a €60 item is 25% off. The coupon was not “15%.”",
      },
    ],
  },
  "markup-calculator": {
    relatedGuides: ["how-to-calculate-vat", "how-to-calculate-percentages"],
    audience: [
      "This page is for people who set a price from a cost: a retailer, a freelancer, a wholesaler, a student in a pricing exercise. It converts among cost, selling price, markup on cost, and margin on price. The two percents are not rivals. They are two names for one pile of profit, divided by different bases. A conversation that says “we work on 25” has not started until someone says 25 of which.",
      "It is not a VAT tool. A selling price here is whatever you type. If that number still has tax inside it, the margin will look thinner than the margin on the net price. Strip tax first when you mean to compare net with net.",
    ],
    fields: [
      {
        name: "Markup on cost",
        detail:
          "You know the cost and the markup percent. Sell = cost × (1 + markup/100). Cost 50 and markup 40% sell for 70. Profit is 20. Margin is 20/70 ≈ 28.57%. The mode is doing the multiply.",
      },
      {
        name: "Margin on sell",
        detail:
          "You know the cost and the margin you want on the price. Sell = cost ÷ (1 − margin/100). Cost 50 and margin 40% sell for 50 / 0.60 ≈ 83.33. Profit is about 33.33, and the markup on cost is about 66.67%. Using the multiply key here is the expensive mistake: cost × 1.40 is a 40% markup, not a 40% margin.",
      },
      {
        name: "From cost and sell",
        detail:
          "You already have both money figures and you want the two percents named. Cost 80 and sell 100: profit 20, markup 25%, margin 20%. This mode will not tell you whether the price is wise. It will stop a meeting from using one word for both ratios.",
      },
      {
        name: "Cost",
        detail:
          "Everything you actually bear before the percent: materials, a subcontractor, a fee you cannot pass on. Leave a cost out and the margin you see is a story about a thinner cost than the one you pay. The field is a single number. Add the pieces before you type them if you need them included.",
      },
    ],
    formulaNotes: [
      "Profit = sell − cost. Markup = profit ÷ cost × 100. Margin = profit ÷ sell × 100. From those, sell-from-markup multiplies and sell-from-margin divides by the cost fraction that remains. A 40% margin means 60% of the price is cost, so you divide by 0.60. A 40% markup means profit is 40% of cost, so you multiply by 1.40. Same adjective, different base, different price: 70 versus about 83.33 on a cost of 50.",
      "Margin cannot reach 100% while cost is positive, because that would require the price to be all profit and the formula divides by zero. Markup can pass 100% without drama. Selling a 20 cost for 50 is a 150% markup and a 60% margin. If a target margin field refuses to behave as you get close to 100, the formula is telling you the price would have to run away.",
      "Channel markups stack as separate steps. You sell to a shop at your price, which is their cost. Their markup applies to that cost, not to yours. Adding your margin percent to their margin percent does not describe the shelf. Compute your price, then compute theirs. VAT, if it is charged on the shelf, sits on top of the net price and should be removed before you compare margins.",
    ],
    walkthroughs: [
      {
        title: "A day rate and a 25 that might mean either thing",
        paragraphs: [
          "Your cost for a day, counting the software seat and the subcontracted illustrator you always need, is €320. The client says industry margin is 25%. If they mean margin, sell = 320 / 0.75 ≈ 426.67, profit ≈ 106.67, markup ≈ 33.33%. If they mean markup, sell = 320 × 1.25 = 400, profit = 80, margin = 20%. The gap between those quotes is €26.67 a day. On a ten-day job that is €266.67, which is large enough to be worth the clarifying question and too small for either side to notice if nobody runs both modes.",
        ],
      },
      {
        title: "A product that looks fine until VAT is stripped",
        paragraphs: [
          "You buy a good for €40 net and see it on a shelf at €73.80 in a place with 23% VAT included. The net shelf price is 73.80 / 1.23 = 60. Profit on a net basis is 20, markup is 50%, margin is 20/60 ≈ 33.33%. If you instead treat 73.80 as the sell price, profit looks like 33.80 and margin looks like 45.8%, which credits you with the tax. The VAT calculator’s extract mode is the step before this one whenever the tag is the amount a customer pays.",
        ],
      },
    ],
    extraPitfalls: [
      {
        title: "Leaving a cost out because it is “overhead”",
        detail:
          "A margin target on materials only is a materials margin. Rent, payment fees, and the hour you spent packing are real costs. If they are not in the cost box, they come out of the profit the percent just promised you. Either include them or stop calling the result the margin of the business.",
      },
    ],
    extraFaqs: [
      {
        q: "Which percent should a price list use?",
        a: "Use whichever one your supplier, your accountant, or your own rule named, and label it. Markup is the natural multiply when you build up from an invoice. Margin is the natural figure when you think about what share of the customer’s money is profit. Reporting both, from the cost-and-sell mode, prevents the meeting from averaging them.",
      },
      {
        q: "Why is a 50% markup only a 33% margin?",
        a: "Because the profit is half the cost and one third of the price. Cost 100, markup 50%, sell 150, profit 50. 50/100 = 50% markup. 50/150 ≈ 33.33% margin. Same 50. Different denominator.",
      },
      {
        q: "Does this include payment-processor fees?",
        a: "Only if you folded them into cost or reduced the sell price before you typed it. A 3% fee on the amount the customer pays is not a 3% markup. It is a bite out of the sell price. Approximate it by using the money you actually receive as the sell price.",
      },
    ],
  },
};
