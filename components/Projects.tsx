import { contact, projects } from "./portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-8 lg:px-12">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        02 / Projects
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        SELECTED WORK
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            data-reveal
            className="reveal group relative overflow-hidden border border-[#3a2a00] bg-[#0f0c00] p-7 transition-all duration-200 hover:-translate-x-1 hover:border-[#b07800] hover:shadow-[-4px_0_20px_rgba(255,176,0,0.1)]"
          >
            <div className="absolute left-0 top-0 h-0 w-1 bg-[#ffb000] transition-all duration-300 group-hover:h-full" />
            <div className="mb-2 font-[var(--font-display)] text-[3.5rem] leading-none text-[#3a2a00]">{project.id}</div>
            <h3 className="mb-3 font-[var(--font-mono)] text-[1rem] uppercase tracking-[0.08em] text-[#ffb000]">
              {project.name}
            </h3>
            <p className="mb-5 text-[0.9rem] leading-6 text-[#b07800]">{project.summary}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={`${project.id}-${tag}`}
                  className="border border-[#3a2a00] px-2.5 py-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.08em] text-[#b07800]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.1em] text-[#b07800]">
              <a
                className="border-b border-transparent transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000]"
                href={`mailto:${contact.email}?subject=Live%20Demo%20Request%20-%20${encodeURIComponent(project.name)}`}
              >
                Live Demo Request
              </a>
              {project.githubUrl ? (
                <a
                  className="border-b border-transparent transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000]"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
