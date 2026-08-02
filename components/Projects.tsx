"use client";

import { useMemo, useState } from "react";
import { contact, projects } from "./portfolio-data";

export function Projects() {
  const [filter, setFilter] = useState("ALL");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Dynamically extract top categories from actual project stack data
  const categories = useMemo(() => {
    const popularTechs = ["ALL", "Next.js", "React Native", "Supabase", "Stripe", "TypeScript", "Node.js"];
    return popularTechs;
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter((p) =>
      p.stack.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
    );
  }, [filter]);

  // 3D Perspective Tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-8 lg:px-12 scroll-mt-24">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        02 / Projects
      </div>
      <h2 className="mb-8 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        SELECTED WORK
      </h2>

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2.5 font-[var(--font-mono)] text-[0.78rem]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`border px-3 py-1 uppercase tracking-wider transition-all duration-200 cursor-none ${
              filter === cat
                ? "border-[#ffb000] bg-[#ffb000]/15 text-[#ffb000] shadow-[0_0_14px_rgba(255,176,0,0.4)]"
                : "border-[#3a2a00] text-[#b07800] hover:border-[#b07800] hover:text-[#ffb000]"
            }`}
          >
            [{cat}]
          </button>
        ))}
      </div>

      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      {filteredProjects.length === 0 ? (
        <div className="border border-[#3a2a00] bg-[#0f0c00] p-8 text-center font-[var(--font-mono)] text-[0.88rem] text-[#b07800]">
          <p className="text-[#39ff14]">$ filter --tech &quot;{filter}&quot;</p>
          <p className="mt-2">No matching projects found in database buffer.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => {
            const isMatch = hoveredTech
              ? project.stack.some((t) => t.toLowerCase() === hoveredTech.toLowerCase())
              : false;

            return (
              <article
                key={project.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group relative overflow-hidden border bg-[#0f0c00] p-7 transition-all duration-200 ease-out will-change-transform animate-[crtFadeIn_0.35s_ease-out] ${
                  isMatch
                    ? "border-[#39ff14] shadow-[0_0_30px_rgba(57,255,20,0.3)] bg-[#39ff14]/5"
                    : "border-[#3a2a00] hover:border-[#ffb000] hover:shadow-[0_0_30px_rgba(255,176,0,0.2)]"
                }`}
              >
                <div className="absolute left-0 top-0 h-0 w-1 bg-[#ffb000] transition-all duration-300 group-hover:h-full" />
                <div className="mb-2 font-[var(--font-display)] text-[3.5rem] leading-none text-[#3a2a00] group-hover:text-[#ffb000]/25 transition-colors">
                  {project.id}
                </div>
                <h3 className="mb-3 font-[var(--font-mono)] text-[1.05rem] uppercase tracking-[0.08em] text-[#ffb000]">
                  {project.name}
                </h3>
                <p className="mb-5 text-[0.9rem] leading-6 text-[#b07800]">{project.summary}</p>

                {/* Tech Tags with Interactive Cross-Highlight */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      onMouseEnter={() => setHoveredTech(tag)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`border px-2.5 py-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.08em] transition-all duration-150 ${
                        hoveredTech && tag.toLowerCase() === hoveredTech.toLowerCase()
                          ? "border-[#39ff14] bg-[#39ff14] text-[#0a0800] font-bold shadow-[0_0_10px_#39ff14]"
                          : "border-[#3a2a00] text-[#b07800] hover:border-[#ffb000] hover:text-[#ffb000]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.1em] text-[#b07800]">
                  <a
                    className="border-b border-transparent transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000] cursor-none"
                    href={`mailto:${contact.email}?subject=Live%20Demo%20Request%20-%20${encodeURIComponent(project.name)}`}
                  >
                    Live Demo Request
                  </a>
                  {project.githubUrl ? (
                    <a
                      className="border-b border-transparent transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000] cursor-none"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
