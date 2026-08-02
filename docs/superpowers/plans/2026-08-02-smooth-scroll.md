# Site-Wide Smooth Scrolling & Header Offset Alignment Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure site-wide smooth scrolling with fixed navigation header offset alignment (`scroll-margin-top`) across all portfolio sections.

**Architecture:**
Applies CSS `scroll-margin-top: 6rem` (`scroll-mt-24`) to all section containers and binds custom offset smooth scroll handlers in `Nav.tsx` and `Hero.tsx`.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4.

## Global Constraints

- **No Third-Party Libraries**: Pure CSS & DOM `scrollIntoView`.
- **Colors & System**: Maintain CRT amber/green theme.

---

### Task 1: Add Section Scroll Margin Top to All Components

**Files:**
- Modify: [`components/About.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/About.tsx)
- Modify: [`components/Projects.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Projects.tsx)
- Modify: [`components/Experience.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Experience.tsx)
- Modify: [`components/Skills.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Skills.tsx)
- Modify: [`components/Contact.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Contact.tsx)

- [ ] **Step 1: Add `scroll-mt-24` class to section tags**
- [ ] **Step 2: Verify type check**

---

### Task 2: Smooth Scroll Click Handler in Navigation Bar (`components/Nav.tsx`)

**Files:**
- Modify: [`components/Nav.tsx`](file:///C:/Users/Dawood%20Tanvir/Desktop/Coding/my-portfolio-website/components/Nav.tsx)

- [ ] **Step 1: Add smooth scroll handler for nav items with `scrollIntoView({ behavior: 'smooth' })`**
- [ ] **Step 2: Verify end-to-end smooth scrolling**
