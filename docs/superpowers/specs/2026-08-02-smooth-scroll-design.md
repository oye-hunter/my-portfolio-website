# Design Spec: Enhanced Smooth Scrolling & Section Offset Alignment

## Overview
This design document specifies the implementation of butter-smooth scrolling across the entire single-page developer portfolio website for **Muhammad Hassan Mughal**. It fixes fixed header overlap issues when jumping to sections (`#about`, `#projects`, `#experience`, `#skills`, `#contact`) and ensures all anchor links, CTA buttons, and terminal CLI commands execute ultra-smooth page scrolling with proper top offset margins.

---

## 🎨 Proposed Changes

### 1. Section Scroll Margin Top (`scroll-margin-top`)
- Add `scroll-mt-24` (6rem / 96px top scroll margin) to all section containers (`#hero`, `#about`, `#projects`, `#experience`, `#skills`, `#contact`).
- Fixes the bug where fixed navigation header (`Nav.tsx`) overlaps or clips section labels (`01 / About`, `02 / Projects`).

### 2. Global Smooth Scroll Utilities (`app/globals.css`)
- Enforce `scroll-behavior: smooth !important` on `html` and `body`.
- Add custom smooth scroll helper function in `components/Nav.tsx` and `components/Hero.tsx` so clicking any nav item computes exact element offset coordinates and scrolls smoothly.

---

## 🛠️ Component Breakdown

| Component | Enhancement | Status |
|-----------|─────────────|────────|
| [`components/About.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/About.tsx) | Add `scroll-mt-24` margin | **[MODIFY]** |
| [`components/Projects.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Projects.tsx) | Add `scroll-mt-24` margin | **[MODIFY]** |
| [`components/Experience.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Experience.tsx) | Add `scroll-mt-24` margin | **[MODIFY]** |
| [`components/Skills.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Skills.tsx) | Add `scroll-mt-24` margin | **[MODIFY]** |
| [`components/Contact.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Contact.tsx) | Add `scroll-mt-24` margin | **[MODIFY]** |
| [`components/Nav.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Nav.tsx) | Add smooth scroll click handler with header offset handling | **[MODIFY]** |

---

## 🔍 Verification Plan

- Test clicking each nav link (`About`, `Projects`, `Experience`, `Skills`, `Contact`).
- Verify section titles are fully visible below the fixed header with 0 clipping.
- Verify smooth scrolling works across Chrome, Firefox, Edge, and mobile viewports.
