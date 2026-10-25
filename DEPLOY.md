# Deploying therealestones.com — for free

You have two free options. **Vercel is recommended** (built by the Next.js team — zero config).

---

## Option A — Vercel (recommended)

1. **Push the code to GitHub**
   - Create a free account at [github.com](https://github.com), make a new repository
     (e.g. `realest-ones-web`), and push the contents of the `web/` folder to it:
     ```bash
     cd ~/workspace/realest-ones/web
     git init && git add -A && git commit -m "Launch The Realest Ones"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/realest-ones-web.git
     git push -u origin main
     ```

2. **Import into Vercel**
   - Sign up at [vercel.com](https://vercel.com) (free — "Hobby" plan, use GitHub login).
   - Click **Add New → Project → Import** your `realest-ones-web` repo.
   - Vercel auto-detects Next.js. Leave Build Command (`npm run build`) and Output as-is.
   - Click **Deploy**. You'll get a live URL like `realest-ones-web.vercel.app` in ~2 minutes.

3. **Environment variables (email delivery)**
   - In Vercel: Project → **Settings → Environment Variables**.
   - For the recommended Resend path, add:
     - `RESEND_API_KEY` = your key from [resend.com](https://resend.com) (free tier: 100 emails/day)
     - `RESEND_FROM` = `The Realest Ones <noreply@yourdomain.com>` (must be a verified domain in Resend)
   - No variables needed for the FormSubmit fallback — but do the one-time activation below.
   - Click **Redeploy** after adding variables.

4. **Activate the signup form (FormSubmit fallback only)**
   - Skip this if you set `RESEND_API_KEY`.
   - Visit your live site, submit the email form once with a real address.
   - Open **realestones@outlook.com**, find the FormSubmit activation email, click the link.
   - Done — every future signup lands in that inbox.

5. **Custom domain (free with Vercel)**
   - Buy/own a domain (e.g. `therealestones.com`) from any registrar (Namecheap, Cloudflare…).
   - In Vercel: Project → **Settings → Domains → Add** → type your domain.
   - Vercel shows you 2 DNS records. Go to your registrar's DNS settings and add them:
     - An `A` record for `@` → `76.76.21.21`
     - A `CNAME` record for `www` → `cname.vercel-dns.com`
     (Exact values are shown in the Vercel dashboard — use those.)
   - Wait 5–60 minutes for DNS to propagate. Vercel provisions free HTTPS automatically.

---

## Option B — Netlify (also free)

1. Push `web/` to GitHub (same step 1 as above).
2. Sign up at [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Build settings: **Build command** `npm run build`, **Publish directory** `.next`.
   Add the official **Next.js Runtime**: Netlify auto-installs `@netlify/plugin-nextjs`
   when it detects Next.js (it will prompt you — accept it; this is what makes the
   `/api/join` route work).
4. **Environment variables**: Site settings → **Environment variables** → add
   `RESEND_API_KEY` / `RESEND_FROM` (same as above).
5. **Custom domain**: Site settings → **Domain management → Add custom domain** →
   follow the DNS instructions Netlify shows (similar A + CNAME records at your registrar).
   Free HTTPS is automatic.

> Note: the `/api/join` email route needs a platform that runs server functions —
> both Vercel and Netlify (with the Next.js Runtime) do. Plain static hosts do not.

---

## After launch — updating products, prices & images

You never need a developer for catalog updates:

1. **Prices / stock / products** → edit `data/products.ts`:
   - `price`: number in USD
   - `stockLabel`: `"In stock"`, `"Low stock"`, `"Sold out"`
   - add/remove products by copying/deleting an entry
2. **Photos** → drop JPGs into `public/images/` with the exact filenames in `data/products.ts`
   (1200×1500px portrait recommended).
3. Commit + push to GitHub — Vercel/Netlify **auto-redeploys** in ~2 minutes. That's it.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Form submits but no email arrives (FormSubmit path) | Check realestones@outlook.com for the activation email and click it |
| Form submits but no email arrives (Resend path) | Verify `RESEND_API_KEY` is set and you redeployed; check Resend dashboard logs |
| Build fails on deploy | Run `npm run build` locally first — it must pass (it currently does) |
| Custom domain shows old site / error | DNS can take up to 24h; confirm the A + CNAME records match the dashboard exactly |
| Images don't show | Filename in `public/images/` must exactly match `image` in `data/products.ts` (case-sensitive) |
