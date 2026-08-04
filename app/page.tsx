"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { BootScreen } from "@/components/BootScreen";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { MatrixRain } from "@/components/MatrixRain";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TerminalModal } from "@/components/TerminalModal";

const sectionIds = ["hero", "about", "projects", "experience", "skills", "contact"];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isBooting) return;

    const cursor = document.getElementById("cursor");

    const moveCursor = (event: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Global event delegation for custom cursor scaling on interactive elements (including dynamically rendered ones)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea")) {
        cursor?.classList.add("w-9", "h-9", "opacity-60");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea")) {
        cursor?.classList.remove("w-9", "h-9", "opacity-60");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

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
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      revealObserver.disconnect();
      skillObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted, isBooting]);

  if (isBooting) {
    return (
      <main className="relative min-h-screen bg-[#0a0800]">
        <Cursor />
        <BootScreen onComplete={() => setIsBooting(false)} />
      </main>
    );
  }

  return (
    <div className="animate-[crtFadeIn_0.4s_ease-out]">
      <Cursor />
      {mounted && <MatrixRain opacity={0.28} />}
      <Nav
        activeSection={activeSection}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onReboot={() => setIsBooting(true)}
      />
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onReboot={() => setIsBooting(true)}
      />

      <main className="relative isolate z-10">
        {/* Fixed Vintage Dark CRT Vignette Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[997] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,8,0,0.85)_100%)]"
        />
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
          className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(58, 42, 0, 0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 42, 0, 0.34) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <a
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[10] border border-[#b07800] bg-[#0f0c00]/95 px-3.5 sm:px-4 py-2.5 font-[var(--font-mono)] text-[0.7rem] sm:text-[0.72rem] uppercase tracking-[0.12em] text-[#ffb000] no-underline shadow-[0_0_16px_rgba(255,176,0,0.25)] transition-all duration-200 hover:border-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.45)] cursor-pointer md:cursor-none min-h-[44px] inline-flex items-center"
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
    </div>
  );
}
