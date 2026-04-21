import { experience } from "./portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-12">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        03 / Experience
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        PROFESSIONAL TIMELINE
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="border-l border-[#3a2a00] pl-5">
        {experience.map((item) => (
          <article
            key={`${item.duration}-${item.company}`}
            data-reveal
            className="reveal mb-4 border border-[#3a2a00] bg-[#0f0c00] p-4 transition-colors duration-200 hover:border-[#b07800]"
          >
            <div className="mb-2 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[#39ff14]">
              {item.duration}
            </div>
            <h3 className="mb-2 font-[var(--font-mono)] text-[#ffb000]">
              {item.role} | {item.company}
            </h3>
            <p className="text-[0.92rem] text-[#b07800]">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
