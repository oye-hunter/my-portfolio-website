"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const sectionIds = ["hero", "about", "projects", "experience", "skills", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (event: MouseEvent) => {
      if (!cursor) {
        return;
      }

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    const interactiveNodes = document.querySelectorAll("a, button, input, textarea");
    const onEnter = () => cursor?.classList.add("w-9", "h-9", "opacity-60");
    const onLeave = () => cursor?.classList.remove("w-9", "h-9", "opacity-60");

    interactiveNodes.forEach((node) => {
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    });

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    revealNodes.forEach((node, index) => {
      node.style.transitionDelay = `${index * 80}ms`;
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>("[data-skill-fill]").forEach((fill) => {
              const width = fill.dataset.width;

              if (width) {
                fill.style.width = width;
              }
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const skillGroups = document.querySelectorAll("[data-skill-group]");
    skillGroups.forEach((group) => skillObserver.observe(group));

    const handleScroll = () => {
      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .reduce((active, section) => {
          if (window.scrollY >= section.offsetTop - 220) {
            return section.id;
          }

          return active;
        }, "hero");

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener("mousemove", moveCursor);

      interactiveNodes.forEach((node) => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      });

      revealObserver.disconnect();
      skillObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav activeSection={activeSection} />
      <main className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[998] bg-[linear-gradient(0deg,rgba(0,0,0,0.18)_0,rgba(0,0,0,0.18)_1px,transparent_1px,transparent_3px)]"
          style={{ animation: "scanMove 8s linear infinite" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[999] bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.55)_100%)]"
          style={{ animation: "flicker 0.15s infinite" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[100vh] bottom-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58, 42, 0, 0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 42, 0, 0.34) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <a
        className="fixed bottom-5 right-5 z-[10] border border-[#b07800] bg-[#0f0c00]/90 px-4 py-2 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-[#ffb000] no-underline shadow-[0_0_16px_rgba(255,176,0,0.25)] transition-all duration-200 hover:border-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.45)] md:bottom-7 md:right-7"
        href="/resume.pdf"
        download="Muhammad-Hassan-Mughal-CV.pdf"
        aria-label="Download CV"
      >
        [ Download CV ]
      </a>
      <footer className="relative z-10 border-t border-dashed border-[#3a2a00] px-6 py-10 text-center font-[var(--font-mono)] text-[0.72rem] tracking-[0.15em] text-[#3a2a00] md:px-8 lg:px-12">
        <p>
          Engineered and designed by <strong className="text-[#b07800]">Muhammad Hassan Mughal</strong>
        </p>
        <p>Built with Next.js, TypeScript, and a Tailwind-driven CRT interface system.</p>
      </footer>
    </>
  );
}
