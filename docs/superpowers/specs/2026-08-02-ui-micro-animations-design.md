# Design Spec: CRT Portfolio Micro-Animations & Interactivity

## Overview
This design specification details the animation, hover effect, and micro-interaction enhancements for the **Muhammad Hassan Mughal** developer portfolio website. The objective is to make the interface feel alive, tactile, and highly responsive to visitor interactions while staying 100% faithful to the retro CRT amber/green design system (`CLAUDE.md` & `portfolio-ui/SKILL.md`) and zero external npm dependency limits.

---

## 🎨 Proposed Micro-Interactions & Motion Design

### 1. Animated Skills Section (`components/Skills.tsx`)
- **Animated Number Counter**: When the skills section enters view, the percentage counter (`0%` → `92%`) animates smoothly upwards to its target level.
- **Phosphor Trail Fill Bar**: The skill bar fill features a glowing amber head indicator (`#ffb000` with `#ffd040` shadow bloom) that leads the bar as it fills.
- **Skill Hover Highlight**: Hovering over a skill row triggers a green accent highlight (`#39ff14`), glowing border underline, and pulses the percentage text in phosphor green.

### 2. Retro CRT Button Micro-Interactions (`Hero.tsx`, `Nav.tsx`, `Contact.tsx`, `BootScreen.tsx`)
- **Fill Slide-In Effect**: On hover, a solid amber/green fill slides in from the left (`transform: scaleX(1)`), inverting the button text to `#0a0800` for high contrast.
- **Scanline Shimmer**: A subtle high-speed linear scan light beam (`::after`) sweeps across the button border on mouse enter.
- **Tactile Active Press**: On click/tap down (`active:scale-[0.97]`), the button shrinks slightly with an instant phosphor glow flash (`shadow-[0_0_25px_rgba(255,176,0,0.7)]`).

### 3. Project Card 3D Perspective & Scanline Hover Effects (`components/Projects.tsx`)
- **3D CRT Tilt Interaction**: Moving the mouse across a project card computes subtle relative X/Y offsets to apply a 3D tilt (`perspective(1000px) rotateX(...) rotateY(...)`), giving the card an authentic hardware monitor depth.
- **Corner Light Sweep & Border Glow**: On hover, an animated border light runs around the card edge with an expanded amber phosphor shadow.
- **Interactive Tech Stack Highlight**: Hovering over any technology tag (e.g. `[Next.js]`, `[Supabase]`) highlights all other projects in the section that use the exact same technology!

---

## 🛠️ Component Breakdown & Diffs

| Component | Enhancement | Status |
|-----------|─────────────|────────|
| [`components/Skills.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Skills.tsx) | Live counter numbers, phosphor trail head, row hover highlights | **[MODIFY]** |
| [`components/Projects.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Projects.tsx) | 3D CRT tilt effect, border sweep, cross-project tech tag highlighting | **[MODIFY]** |
| [`components/Hero.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Hero.tsx) | Scanline shimmer button hover, press down tactile feedback | **[MODIFY]** |
| [`app/globals.css`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/app/globals.css) | Add CRT border sweep keyframes and 3D tilt helper classes | **[MODIFY]** |

---

## 🔍 Verification Plan

- Check animation performance on 60 FPS monitors (no layout thrashing or CLS).
- Verify touch accessibility on mobile screens (`prefers-reduced-motion` compliance).
- Ensure `npm run type-check` and `npm run build` pass with 0 errors.
