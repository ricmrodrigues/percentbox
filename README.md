# PercentBox — Percentage Calculator

Fast, free, mobile-first online percentage calculator. Pure client-side Next.js app optimized for SEO and Google AdSense.

**Recommended domain:** [PercentBox.com](https://percentbox.com)

## Features

- **What is X% of Y?** — percentage of a number
- **X is what % of Y?** — reverse percentage
- **Percentage Increase / Decrease** — raise or lower a value
- **Percentage Change** — change from A to B
- **Tip calculator** — tip + split bill
- **Discount calculator** — sale price & savings
- Real-time results as you type
- Quick percentage presets
- Copy result button
- Calculation history (localStorage, last 10)
- Dark / light mode
- SEO metadata, sitemap, robots, JSON-LD FAQ schema
- AdSense-ready ad slot placeholders

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Fully client-side calculations (no backend)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set env var `NEXT_PUBLIC_SITE_URL=https://percentbox.com`
4. Deploy

Or use the CLI:

```bash
npx vercel
```

## AdSense setup

1. Apply at [Google AdSense](https://www.google.com/adsense)
2. Add the AdSense script to `src/app/layout.tsx` once approved
3. Replace placeholders in `src/components/AdSlot.tsx` with real `<ins class="adsbygoogle">` units

Ad placements are ready:

- Top banner (below hero)
- Sidebar (desktop)
- Below calculator
- In-between content

## Project structure

```
src/
  app/           # App Router pages, layout, SEO routes
  components/    # Calculator UI, header, footer, ads
  lib/           # Calculation math, history, theme helpers
```

## License

MIT
