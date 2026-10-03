# Andiile — Warm Lifestyle Portfolio

A lightweight Next.js App Router implementation inspired by the provided warm mocha / blush influencer portfolio concept.

## Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Local optimized JPG assets
- No database, CMS or heavy UI framework

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Next.js skills

The old `vercel-labs/next-skills` repository has moved into the Next.js repository. For current version-matched workflow skills, use:

```bash
npx skills add vercel/next.js --skill next-dev-loop
```

Source: https://github.com/vercel/next.js/tree/canary/skills

## Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
components/
  sections/
    Header.tsx
    HeroCollage.tsx
    CategoryGrid.tsx
    Collaborations.tsx
    About.tsx
    PhotoStrip.tsx
    Footer.tsx
  ui/
    Reveal.tsx
    PolaroidCard.tsx
public/assets/gallery/
  local cropped portfolio images
```

## CMS-ready

The first version intentionally hardcodes content in small arrays so the site stays extremely lightweight. The `CategoryGrid` and collaboration data can later move to Sanity or another CMS without changing the visual components.
