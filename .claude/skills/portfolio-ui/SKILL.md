---
name: portfolio-ui
description: Build and extend my personal developer portfolio website. Use this skill for any UI work on the portfolio — new sections, component edits, animations, responsive fixes, or visual improvements. The portfolio uses a retro CRT terminal aesthetic with amber-on-black colors, VT323/Share Tech Mono fonts, scanline overlays, and phosphor glow effects.
---

# Portfolio UI Skill

This skill governs all frontend work on my personal developer portfolio. Every change must stay true to the established retro CRT terminal aesthetic. Do not introduce new design systems, component libraries, or color palettes without explicit instruction.

## Project Context

This is a **single-page developer portfolio** built with Next.js. It has five sections rendered on one page with smooth scroll: Hero, About, Projects, Skills, and Contact. The aesthetic is a warm amber CRT terminal — think vintage computing, phosphor monitors, and command-line interfaces.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: CSS Modules or `<style>` tags — no Tailwind, no CSS-in-JS unless already present
- **Fonts**: VT323 (display/headings), Share Tech Mono (UI/labels), Courier Prime (body text) — loaded from Google Fonts
- **Animations**: CSS-only (keyframes, transitions) — no animation libraries unless explicitly asked
- **Icons**: Plain Unicode characters or inline SVG — no icon libraries

## Design System

### Color Palette (CSS Variables)
```css
--amber: #ffb000;        /* Primary — glowing text, borders, fills */
--amber-dim: #b07800;    /* Secondary — muted labels, descriptions */
--amber-glow: #ffd04080; /* Glow — box-shadows, text-shadows */
--amber-faint: #3a2a00;  /* Subtle — backgrounds, faint borders */
--bg: #0a0800;           /* Page background */
--bg-panel: #0f0c00;     /* Card/panel background */
--green: #39ff14;        /* Accent — prompts, labels, highlights */
--red: #ff4444;          /* Error states only */
```

### Typography Rules
- **Headings / Hero**: `font-family: 'VT323', monospace` — large, loose letter-spacing, text-shadow glow
- **Labels / Nav / Tags / Code**: `font-family: 'Share Tech Mono', monospace` — small, uppercase, wide tracking
- **Body / Paragraphs / Inputs**: `font-family: 'Courier Prime', monospace`
- NEVER use Inter, Roboto, Arial, system-ui, or any sans-serif font

### Signature Visual Effects — ALWAYS preserve these
1. **Scanline overlay** — `body::before` with repeating-linear-gradient, slow scroll animation
2. **CRT vignette + flicker** — `body::after` with radial-gradient and subtle opacity flicker keyframe
3. **Custom square cursor** — 18px borderless square, amber border + glow, expands on hover
4. **Phosphor glow** — `text-shadow: 0 0 Xpx var(--amber-glow)` on all prominent headings
5. **Terminal box** — `bg-panel` background, `amber-dim` border, `●●●` pseudo-element header, monospaced content

### Component Patterns

**Section structure** (always follow this):
```html
<section id="[name]">
  <div class="section-label">0X / Label</div>  <!-- green ">" prefix via CSS -->
  <h2 class="section-title">HEADING TEXT</h2>
  <hr class="divider">                          <!-- dashed amber-faint line -->
  <!-- content -->
</section>
```

**Project cards**:
- Left border `::before` that animates height to 100% on hover
- Slides `translateX(4px)` on hover
- Number shown large in `--amber-faint` as decorative background digit
- Tags: small, uppercase, `--amber-faint` border, `letter-spacing: 0.08em`

**Skill bars**:
- `--pct` CSS variable drives fill width
- Animate to `var(--pct)` only when `.animated` class is added via IntersectionObserver
- Bar height: 6px, fill has `box-shadow: 0 0 8px var(--amber-glow)`

**Buttons (`.btn`)**:
- Transparent background, `amber` border
- Fill slides in from left via `::before scaleX` on hover
- Text inverts to `--bg` on hover
- Ghost variant uses `--amber-dim`

**Terminal box**:
```html
<div class="terminal-box">
  <!-- ::before shows ● ● ● header automatically -->
  <div class="line"><span class="cmd">$ command</span></div>
  <div class="line"><span class="val">"value"</span></div>
  <div class="line"><span class="comment">// comment</span></div>
</div>
```

### Reveal Animations
- Add class `reveal` to any new element that should animate in on scroll
- IntersectionObserver adds `visible` class → `opacity: 1, transform: none`
- Stagger sibling reveals using `setTimeout(fn, index * 80)`

### Navigation
- Fixed top nav, `rgba(10,8,0,0.92)` background + `backdrop-filter: blur(4px)`
- Active section link gets `color: var(--amber)` + `text-shadow` glow via scroll listener
- Logo: `DEV.FOLIO` with green dot separator

## Behavior Rules

- **Retro first**: Every new component must feel like it belongs on a CRT screen. When in doubt, add a glow or a monospace label.
- **No new dependencies**: Do not introduce npm packages for things achievable with CSS + vanilla JS.
- **Cursor**: All interactive elements must use `cursor: none` to respect the custom cursor.
- **Responsive**: Mobile breakpoint at `768px` — single-column layouts, reduced padding, smaller hero font.
- **Sections numbered**: Labels follow the pattern `01 / About`, `02 / Projects`, etc. Increment for any new sections.
- **Green for system/code, amber for content**: The `--green` accent is reserved for CLI prompts (`$`), section label prefixes (`>`), skill group headings (`//`), and terminal commands. Never use it for body text.

## Adding New Sections

When asked to add a section:
1. Follow the section structure above
2. Assign the next sequential number in the label (`05 / Blog`, etc.)
3. Add a nav link
4. Apply `reveal` class to animatable children
5. Match card/panel patterns already in use

## File Structure in Next.js

```
my-portfolio/
├── CLAUDE.md                    ← Project memory (conventions, commands)
├── .claude/
│   ├── skills/
│   │   └── portfolio-ui/
│   │       └── SKILL.md         ← THIS FILE
│   └── rules/
│       └── components.md        ← Optional: component-specific rules
├── app/
│   ├── page.tsx                 ← Main single-page layout
│   ├── layout.tsx               ← Font imports go here
│   └── globals.css              ← All CSS variables + global styles
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Nav.tsx
└── public/
    └── resume.pdf
```