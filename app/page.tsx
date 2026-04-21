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
    const onEnter = () => cursor?.classList.add("expand");
    const onLeave = () => cursor?.classList.remove("expand");

    interactiveNodes.forEach((node) => {
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    });

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    revealNodes.forEach((node, index) => {
      node.dataset.revealOrder = index.toString();
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.revealOrder ?? "0") % 6;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay * 80);
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
            entry.target.querySelectorAll(".skillFill").forEach((fill) => {
              fill.classList.add("animated");
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const skillGroups = document.querySelectorAll(".skillGroup");
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
      <main className="pageMain">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          Engineered and designed by <strong>Muhammad Hassan Mughal</strong>
        </p>
        <p>Built with Next.js, TypeScript, and a custom CRT interface system.</p>
      </footer>
    </>
  );
}
