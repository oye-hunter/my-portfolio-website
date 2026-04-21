# CLAUDE.md — Developer Portfolio

This is my personal developer portfolio — a single-page Next.js site with a retro CRT terminal aesthetic. Read this file before making any changes.

## Project Overview

Single-page portfolio with smooth scroll. Sections: Hero → About → Projects → Skills → Contact.
Aesthetic: amber-on-black CRT terminal with scanlines, phosphor glow, and monospace fonts.

## Tech Stack

- **Framework**: Next.js (App Router), TypeScript
- **Styling**: CSS Modules + `app/globals.css` for design tokens
- **Fonts**: VT323, Share Tech Mono, Courier Prime (Google Fonts via `app/layout.tsx`)
- **No UI libraries** — no Tailwind, no shadcn, no Radix
- **No animation libraries** — CSS keyframes only

## Commands

- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint check
- `npm run type-check` — TypeScript check (tsc --noEmit)

## Code Style

- TypeScript strict mode, no `any`
- Named exports for all components
- Functional components only, no class components
- CSS variables defined in `globals.css`, never hardcode colors
- File names: PascalCase for components (`Hero.tsx`), kebab-case for utils (`scroll-utils.ts`)

## Architecture

- `app/page.tsx` — assembles all section components in order
- `app/globals.css` — all CSS variables, reset, and global styles (scanlines, cursor, fonts)
- `components/` — one file per section + shared components (Nav, Cursor)
- `public/` — static assets only (resume PDF, og-image)

## Important Rules

- NEVER change the color palette — amber/green/dark-bg only
- NEVER use `cursor: auto` or `cursor: pointer` — always `cursor: none` (custom cursor handles it)
- NEVER import a font other than VT323, Share Tech Mono, or Courier Prime
- Always add `.reveal` class + IntersectionObserver for new scroll-animated elements
- Keep `body::before` (scanlines) and `body::after` (CRT vignette) intact in globals.css
- Section labels follow the format: `01 / About`, `02 / Projects` — increment for new sections

## Skill — REQUIRED READING

Before making ANY changes to UI, layout, styling, or components, you MUST first read:

  .claude/skills/portfolio-ui/SKILL.md

Do not skip this step. That file is the single source of truth for:
- The complete color palette and CSS variables
- Typography rules and which fonts to use where
- Every component pattern (cards, buttons, terminal boxes, skill bars)
- The signature visual effects that must never be removed
- Rules for adding new sections

Every visual or structural change must conform to what is defined in that file.

## See Also

- @app/globals.css — CSS variables and global styles
- @components/ — all section components

## Portfolio Content Source Of Truth

Use `portfolio.md` as the canonical content source for all portfolio copy and section data.

### Identity

- Name: Muhammad Hassan Mughal
- Role: Full-Stack Software Developer
- Specialization: SaaS & MVP Development
- Location: Rawalpindi, Pakistan
- Experience: 1.5+ years
- Current role: Software Developer @ Komatsu Pak Soft
- Availability: Open to freelance opportunities

### Hero Copy Priorities

- Headline should emphasize full-stack capability and SaaS/MVP delivery.
- Subheadline should include business outcomes (scalable systems, production readiness, shipping velocity).
- Primary CTA should route to Projects.
- Secondary CTA should route to Contact.

### About Section Priorities

- Positioning: full-stack builder for SaaS, real-time systems, and mobile apps.
- Strengths to highlight: clean architecture, performance optimization, practical business problem solving.
- Optional terminal block should mirror identity info and availability status.

### Skills Section Priorities

- Frontend: Next.js, React, TypeScript.
- Backend: Node.js (Express), .NET Core.
- Data: PostgreSQL, Supabase, NeonDB, MongoDB, MySQL.
- Mobile: React Native (Expo), Flutter (basic).
- Integrations: Stripe, GraphQL/Apollo, Firebase, Google Location APIs, OpenAI.
- Tooling: Git/GitHub, Drizzle ORM, Better Auth, Zustand, TanStack Query.

### Projects Section Priorities

Prefer high-impact projects that demonstrate range, scale, and business value. Candidate highlights:

- Fleet Companion App (React Native, Stripe escrow, real-time bidding/tracking)
- Fit-Fusion AI SaaS (recommendation engine + community + real-time)
- School Management SaaS (RBAC + operational modules)
- Size Queen Chrome Extension (OpenAI + subscriptions)
- Project Relay (auth + protected routes + type-safe DB layer)
- Device Registration Portal (multi-step autosave + JWT)

### Contact Section Source

- Email: muhammadhassanmughal47@gmail.com
- GitHub: https://github.com/oye-hunter
- LinkedIn: https://www.linkedin.com/in/hassan814/

## Build Execution Plan (Implementation Phase)

When implementing the Next.js portfolio UI:

1. Keep existing CRT visual system exactly aligned with `.claude/skills/portfolio-ui/SKILL.md` and `app/globals.css`.
2. Build/adjust section components (`Hero`, `About`, `Projects`, `Skills`, `Contact`) with content from `portfolio.md`.
3. Ensure every animatable block includes `.reveal` and is wired to IntersectionObserver behavior.
4. Keep custom cursor behavior and never use pointer/auto cursor values.
5. Make mobile layout first-class at 768px breakpoint with no clipped text or overflow issues.
6. Validate with `npm run lint` and `npm run type-check` before finalizing.

## Content Selection Rule

If all portfolio entries cannot fit cleanly in one page, prioritize clarity over volume:

1. Show 4 to 6 strongest projects in the main Projects section.
2. Keep other projects summarized in secondary copy (or future expandable section) without visual clutter.
3. Optimize each project card for outcome-oriented statements, not generic descriptions.