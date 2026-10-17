# Kids Fysio Capelle

High-end Next.js 16 (App Router) website for Kids Fysio Capelle — specialized pediatric physiotherapy in Capelle aan den IJssel.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19** + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** (subtle editorial animations)
- **Node.js** ≥ 20.9 (recommended 24.x)

## Commands

```bash
npm install
npm run dev      # local development
npm run build    # static export → out/ and dist/
```

`dist/` is a copy of `out/` and can be uploaded to any static host.

## Structure

```
src/app/           # Routes (12 pages) + layout + globals.css
src/components/    # Header, Footer, Button, FadeIn, ContactForm, …
src/config.ts      # Site config (Formspree, GA4, GTM, contact info)
public/images/     # Logos, photos, PDFs
public/robots.txt
public/sitemap.xml
```

## Config (`src/config.ts`)

Fill in once:

| Key | Purpose |
|-----|---------|
| `formspreeFormId` | Contact form |
| `googleAnalyticsId` | GA4 (`G-…`) |
| `googleTagManagerId` | GTM (`GTM-…`) |
| `googleSiteVerification` | Search Console |

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import project in Vercel
3. Framework: **Next.js** (auto-detected)
4. Build command: `npm run build`
5. Output directory: leave default (or set to `out` if needed)
6. Add domain `kidsfysiocapelle.nl` — keep MX records at current mail host

Static export uses `output: "export"` and `images.unoptimized: true` in `next.config.ts`.

## SEO

- JSON-LD MedicalBusiness / PhysicalTherapy
- Canonical URLs, Open Graph
- `robots.txt` + `sitemap.xml`
