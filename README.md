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

## Environment variables

Copy `.env.example` to `.env.local` for local development. On Vercel, set the same names in Project Settings → Environment Variables. Do not commit real `.env` files.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin, default `https://percentbox.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | GA4 id (`G-…`). If empty, analytics is not loaded |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Optional | Publisher id. Defaults to `ca-pub-5355338650267313` |
| `NEXT_PUBLIC_ADSENSE_ENABLED` | Optional | Leave **unset** or `true` to load the Auto ads script. Set `false` to disable it. You do **not** need this flag for AdSense review |
| `NEXT_PUBLIC_ADSENSE_SLOT_TOP` | Optional | Manual unit id. Empty means no top unit |
| `NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR` | Optional | Manual unit id |
| `NEXT_PUBLIC_ADSENSE_SLOT_BELOW` | Optional | Manual unit id |
| `NEXT_PUBLIC_ADSENSE_SLOT_INLINE` | Optional | Manual unit id |

The AdSense script (`adsbygoogle.js?client=…`) loads site-wide whenever a publisher id is present and the kill switch is not `false`, including when every slot variable is empty. That is the Auto ads path used for review. Manual `<ins class="adsbygoogle">` units render only for slots that have an id, and only after the visitor has allowed non-essential scripts.

`www.percentbox.com` 308-redirects to `https://percentbox.com` via `next.config.ts`.

## AdSense notes

- `ads.txt` is served from `src/app/ads.txt/route.ts` for `pub-5355338650267313`.
- `robots.txt` allows `Mediapartners-Google`.
- The tag is a plain script element. `next/script` adds `data-nscript`, which AdSense rejects.
- A first-party banner gates GA and AdSense. EEA/UK-looking browsers (timezone or language region) do not load those scripts until Accept. Other browsers load them unless the visitor previously chose Reject.
- Turn on Auto ads in the AdSense account if you want Google to place units. This repo does not invent slot ids.
- Nothing in the site claims the AdSense application is approved.

## Project structure

```
src/
  app/           # App Router pages, layout, SEO routes
  components/    # Calculator UI, header, footer, ads
  lib/           # Calculation math, history, theme helpers
```

## License

MIT
