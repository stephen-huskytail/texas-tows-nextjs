# TexasTows.com — Next.js 15 Production Build

**Texas Tows Inc. | Dallas, TX | 24/7 Towing Service**

## Stack
- **Framework**: Next.js 15.2.9 (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4 + custom brand tokens
- **Fonts**: Poppins (headings) + Inter (body) via `next/font/google`
- **Forms**: Native React state (no external form library)
- **Icons**: Lucide React

## Pages (48 total, all statically prerendered)
- `/` — Homepage with hero, services grid, trust signals, testimonials, FAQ
- `/about` — Company story, team, credentials
- `/services` — Services hub
- `/services/[slug]` — 10 individual service pages with schema markup
- `/service-area` — Service area hub
- `/service-area/[slug]` — 18 neighborhood pages with LocalBusiness schema
- `/reviews` — Google reviews showcase
- `/contact` — Contact form + map
- `/blog` — Blog index
- `/blog/[slug]` — 6 blog posts
- `/privacy-policy`, `/terms-of-service`
- `/sitemap.xml`, `/robots.txt` — Auto-generated

## SEO Features
- Per-page `metadata` exports with title, description, canonical, OpenGraph, Twitter cards
- JSON-LD structured data (LocalBusiness, Service, FAQPage, BreadcrumbList) on every page
- `sitemap.ts` — auto-generates XML sitemap
- `robots.ts` — search engine directives
- `next/image` with CDN optimization

## Development
```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # Production build (auto-unsets NODE_ENV)
pnpm start        # Serve production build
```

## Deployment
This is a standard Next.js app. Deploy to:
- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Add `@netlify/plugin-nextjs`
- **Docker**: Use the `standalone` output mode
- **Node server**: `pnpm build && pnpm start`

## Environment Variables
No environment variables required. All content is static.

## Phone / Business Info
Update `src/lib/constants.ts` to change phone numbers, address, TDLR number, or business details.
