# Scroll-Animated Professional Timeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static "Professional Timeline" section into an interactive, scroll-animated CRT experience featuring a scroll-driven glowing phosphor beam, illuminated timeline nodes, and staggered scroll-reveal card transitions.

**Architecture:** Convert `Experience.tsx` into a stateful client component that calculates scroll progress over the timeline section. As the user scrolls down, a vertical phosphor laser line grows (`height: X%`), triggering active status on nodes (`[01]`, `[02]`, etc.) as they cross the viewport trigger line. Add CSS scroll keyframe classes to `app/globals.css`.

**Architecture Diagram:**

```mermaid
graph TD
    A[User Scrolls Experience Section] --> B[Scroll Progress Calculation]
    B -->|Update Height %| C[Glowing Vertical Phosphor Line]
    B -->|Check Viewport Overlap| D[Illuminate Timeline Nodes [01]..[07]]
    D -->|Add .active-node| E[Staggered Card Slide-in & Phosphor Glow]
```

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, IntersectionObserver API.

## Global Constraints
- **CRT Phosphor Theme**: Glowing amber (`#ffb000`) and matrix green (`#39ff14`) with dark `#0f0c00` backgrounds.
- **Mobile Smoothness**: Non-blocking scroll calculation via `requestAnimationFrame` and passive event listeners; touch-friendly 44px min targets.
- **Accessibility**: Fallback static state if `prefers-reduced-motion` is enabled.

---

## Proposed Changes

### Component 1: `app/globals.css`

#### [MODIFY] [`app/globals.css`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/app/globals.css)

- Add CSS utility classes for the glowing phosphor beam, pulse node animations, and slide-in scroll reveal states:
```css
/* Animated Timeline Phosphor Beam */
.timeline-laser {
  background: linear-gradient(180deg, #39ff14 0%, #ffb000 100%);
  box-shadow: 0 0 16px rgba(57, 255, 20, 0.7);
  transition: height 0.1s linear;
}

/* Staggered Timeline Card Reveal */
.timeline-card {
  opacity: 0;
  transform: translateX(28px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out, border-color 0.3s ease;
}

.timeline-card.is-active {
  opacity: 1;
  transform: translateX(0);
}
```

---

### Component 2: `components/Experience.tsx`

#### [MODIFY] [`components/Experience.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Experience.tsx)

- Add `"use client"` directive.
- Add `useRef` for section & laser container.
- Calculate scroll percentage (`scrollProgress` 0% to 100%) as the section passes the center viewport line.
- Render:
  1. Background timeline track (`border-[#3a2a00]`).
  2. Animated `timeline-laser` bar whose height equals `scrollProgress`.
  3. Interactive nodes (`[01]`, `[02]`, ...) with glowing green ping indicators when active.
  4. Rich experience cards featuring role, company badge, duration, and bulleted highlights.

---

## Verification Plan

### Automated Verification
1. **TypeScript Type Check**: `npx tsc --noEmit`
2. **Next.js Production Build**: `npm run build`

### Manual Verification
1. Open the portfolio landing page and scroll down to section `03 / Experience`.
2. Observe the vertical laser beam growing downward smoothly along with scroll motion.
3. Verify each timeline node illuminates in matrix green (`#39ff14`) with a pulse effect as the laser passes it.
4. Verify the experience card slides in and highlights when activated.
5. Test on mobile viewports (375px) to verify responsive padding and touch safety.
