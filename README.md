# Tradie Starter Template

A reusable Next.js 16 website template for trade businesses. Built by Groundwork Digital Studio.

**Target:** Clone, customise, and deploy a professional tradie website in under an hour.

---

## Quick Start

### 1. Clone this template

```bash
cp -r ~/Documents/Groundwork\ Digital/templates/tradie-starter ~/Documents/Groundwork\ Digital/Clients/[client-name]-website
cd ~/Documents/Groundwork\ Digital/Clients/[client-name]-website
```

### 2. Initialise the project

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
npm install resend
```

### 3. Edit `site.config.ts`

This single file drives the entire site. Update:

- `businessName` — trading name
- `tagline` — what they do + where
- `phone` / `email` / `address` — contact details
- `abn` — Australian Business Number
- `trade` — e.g. "plumber", "electrician", "builder"
- `domain` — client's live domain (used for meta tags, OG, schema)
- `licenceNumber` — trade licence (leave blank if N/A)
- `hours` — business hours (weekdays, saturday, sunday, emergency)
- `services` — list of `{ name, description }` objects
- `serviceAreas` — suburbs/regions they cover
- `colors.primary` — main brand colour (buttons, headers, accents)
- `colors.accent` — highlight colour (CTAs, badges)
- `fonts` — heading and body font names
- `social` — Facebook, Instagram, Google Business links
- `testimonials` — customer reviews (minimum 1, aim for 3)
- `seo` — override title/description or leave blank for auto-generated
- `googleAnalyticsId` — GA4 measurement ID (leave blank to disable)
- `email_from` — Resend "from" address (must match verified domain)
- `email_to` — inbox that receives leads

### 4. Set up environment variables

```bash
cp .env.example .env.local
```

Add your Resend API key to `.env.local`.

### 5. Add client assets

Replace the photo placeholders with real images:

- Hero background / team photo
- Work examples / before-after shots
- Owner headshot (for About page)

Place images in `public/images/` and reference via `<Image src="/images/..." />`.

Replace the text logo in `Navbar.tsx` with a real logo if the client has one:

```tsx
<Image src="/images/logo.svg" alt="Business Name" width={160} height={40} />
```

### 6. Update metadata

In `site.config.ts`, set `domain` to the client's actual domain. This flows through to:

- `metadataBase` in layout.tsx
- OpenGraph URL
- Canonical URL
- JSON-LD schema

### 7. Deploy

```bash
git init && git add . && git commit -m "Initial commit"
# Create repo on GitHub, push, connect to Vercel
vercel --prod
```

Don't forget to add `RESEND_API_KEY` as an environment variable in Vercel.

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services grid, areas, testimonials, CTA |
| Services | `/services` | Full services list with descriptions, auto-generated from config |
| About | `/about` | Business story, trust points, ABN/licence |
| Contact | `/contact` | Contact form (Resend) + phone/email/address/hours |
| Thank You | `/thank-you` | Post-submission confirmation (noindex) |

---

## Project Structure

```
site.config.ts              <- THE config file. One file per client.
.env.example                <- Copy to .env.local, add Resend API key
src/
  app/
    layout.tsx              <- Root layout (fonts, metadata, JSON-LD, GA4, nav/footer)
    page.tsx                <- Homepage (hero, services, areas, testimonials, CTA)
    globals.css             <- Global styles (light theme, responsive, CSS variables)
    services/
      page.tsx              <- Services page (auto-generated from config)
    about/
      page.tsx              <- About page template
    contact/
      page.tsx              <- Contact page with form + details
    thank-you/
      page.tsx              <- Post-submission thank you page
    api/
      contact/
        route.ts            <- Contact form API (Resend email, rate-limited, sanitised)
  components/
    layout/
      Navbar.tsx            <- Sticky nav with phone number + CTA + mobile menu
      Footer.tsx            <- Footer with contact info, ABN, links, socials
    forms/
      ContactForm.tsx       <- Client-side contact form with validation
public/
  images/                   <- Client photos go here
```

---

## Built-in Features

- **Config-driven** — everything reads from `site.config.ts`, zero hardcoded business details
- **SEO** — dynamic meta tags, OpenGraph, Twitter cards, canonical URL, JSON-LD LocalBusiness schema
- **Contact form** — Resend email integration, server-side rate limiting, input sanitisation
- **Google Analytics 4** — drop in a measurement ID and it's live
- **Mobile-first** — responsive grid, hamburger nav, large tap targets
- **Trust signals** — Licensed/Insured/Local badges, star ratings, ABN display
- **Accessibility** — skip-to-content link, ARIA labels, semantic HTML
- **CSS variables** — colours from config injected as custom properties

---

## Customisation Checklist

- [ ] `site.config.ts` — all fields updated
- [ ] `.env.local` — Resend API key added
- [ ] `domain` — set to client's live domain
- [ ] Logo replaced or text logo styled
- [ ] Photo placeholders replaced with real images
- [ ] Contact form tested (submit + email received)
- [ ] Testimonials are real (not placeholder)
- [ ] Colours match client brand
- [ ] About page copy rewritten for this client
- [ ] Business hours confirmed
- [ ] Google Business / social links added
- [ ] Google Analytics ID added (if applicable)
- [ ] Mobile tested
- [ ] Deployed and live
- [ ] Resend API key added in Vercel environment variables

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Resend (email)
- Inter + Space Grotesk (Google Fonts)

---

Built by [Groundwork Digital Studio](https://groundworkdigitalstudio.com.au)
