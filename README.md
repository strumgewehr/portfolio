# Garv Sethi — Portfolio

An editorial-style portfolio built for an AI/cybersecurity engineer. Cream background,
deep crimson accent, serif display type paired with Inter — modeled after the calm,
premium feel of Linear, Notion, and Stripe Press rather than a typical dev-portfolio template.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for subtle scroll reveals and hover transitions
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # fonts, metadata, root shell
  page.tsx           # assembles all sections
  globals.css        # base styles, editorial link underline, grain texture
components/
  Nav.tsx            # sticky nav, appears on scroll
  Hero.tsx           # name, tagline, CTAs
  About.tsx          # editorial two-column bio
  Experience.tsx     # timeline: Cybersecurity Intern (IIT Jammu), QA Tester (Test.io)
  Projects.tsx        # large editorial project cards (Redoubt Ops is the featured centerpiece)
  Skills.tsx          # categorized skill grid, no progress bars
  Certifications.tsx  # editorial list
  Contact.tsx         # closing CTA + contact links
  Footer.tsx
  Reveal.tsx          # shared scroll-reveal motion wrapper
lib/
  data.ts             # all content lives here — edit this file to update copy
  utils.ts            # cn() className helper
```

## Editing content

Everything you'll want to change day-to-day — name, tagline, experience bullets,
project descriptions, skills, certifications, contact links — lives in `lib/data.ts`.
No need to touch component files for a content update.

## Adding your resume

Drop your resume PDF into `public/resume.pdf`. The Resume buttons in the nav, hero,
and contact section already link to `/resume.pdf`.

## Adding real project links / demo screenshots

Each project in `lib/data.ts` supports `github` and `demo` fields — add a `demo` URL
to any project object to make its "Live Demo" button appear.

## Design notes

- **Color**: warm cream (`#F7F3EB`) background, rich black (`#111111`) text, deep
  crimson (`#9E1B1B`) used only for emphasis (labels, hover states, the featured
  project's border) — never as a dominant field color.
- **Type**: Cormorant Garamond for display/headings, Inter for body text.
- **Motion**: all reveals are opacity/translate fades in the 0.3–0.8s range with an
  editorial ease curve (`cubic-bezier(0.22, 1, 0.36, 1)`) — no bounce, no spin, no
  scale-pop. Respects `prefers-reduced-motion`.
- **Dark mode**: intentionally disabled — light theme only, per brief.

## Deployment

Deploys cleanly to Vercel:

```bash
npm run build
```

Or push to a GitHub repo and import it directly in the Vercel dashboard.

## Accessibility

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Visible keyboard focus rings on all interactive elements
- All icon-only buttons have `aria-label`s
- Respects `prefers-reduced-motion`
