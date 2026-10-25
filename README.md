# The Realest Ones — Web

Production marketing landing page for **The Realest Ones** — built with Next.js 15 (App Router),
React 19, TypeScript, and TailwindCSS 3. All design tokens (colors, fonts, spacing, radii) are
mapped from [`brand.json`](./brand.json) in [`tailwind.config.js`](./tailwind.config.js).

## Quickstart

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before deploying)
npm start        # serve the production build locally
npm run typecheck
```

## Project structure

```
web/
├── app/
│   ├── layout.tsx        # fonts (Anton/Archivo/Inter via next/font), metadata
│   ├── page.tsx          # assembles the landing page
│   ├── globals.css       # Tailwind + base styles
│   └── api/join/route.ts # POST /api/join — signup form → realestones@outlook.com
├── components/
│   ├── Nav.tsx           # sticky nav + CTA
│   ├── Hero.tsx          # value prop + primary CTAs
│   ├── Marquee.tsx       # scrolling creed strip
│   ├── SocialProof.tsx   # testimonials + stat strip
│   ├── OfferBreakdown.tsx# product cards (reads data/products.ts)
│   ├── FAQ.tsx           # accessible accordion (single-open)
│   ├── FinalCTA.tsx      # email capture form → /api/join
│   └── Footer.tsx
├── data/
│   └── products.ts       # ★ EDIT PRICES / INVENTORY / PRODUCT LIST HERE
├── public/images/        # ★ DROP PRODUCT PHOTOS HERE (see its README)
├── brand.json            # source of truth — design system
├── tailwind.config.js    # tokens mapped from brand.json
└── .env.example          # email-delivery configuration
```

## Editing products, prices & images

**Prices / stock / product list** → edit [`data/products.ts`](./data/products.ts). Each product has
`price` (USD), `stockLabel` ("In stock" / "Low stock" / "Sold out"), `name`, `description`, and
`image`. Add a product by copying an entry with a unique `id`; remove one by deleting its entry.
The page updates automatically — no other files to touch.

**Images** → save JPGs into [`public/images/`](./public/images/) using the exact filenames in
`data/products.ts` (e.g. `fallen-angel-hoodie.jpg`). Recommended: 1200×1500px portrait, under
400KB. Missing files render a branded placeholder, so the page never breaks.

## Email delivery

Signups POST to `/api/join` and are delivered to **realestones@outlook.com** via:

1. **Resend** (recommended, free tier) — set `RESEND_API_KEY` (and optional `RESEND_FROM`).
2. **FormSubmit fallback** (free, no account) — used automatically when no API key is set.
   One-time activation: submit the form once on the live site, then click the activation link
   sent to realestones@outlook.com.

See [`DEPLOY.md`](./DEPLOY.md) for full deployment steps (Vercel / Netlify, custom domain).
