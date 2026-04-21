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