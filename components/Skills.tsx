import { skills } from "./portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-8 lg:px-12">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        04 / Skills
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        TECH STACK
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="grid gap-10 lg:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} data-skill-group data-reveal className="reveal" >
            <h3 className="mb-6 border-b border-[#3a2a00] pb-2 font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.25em] text-[#39ff14]">
              {`// ${group.title}`}
            </h3>
            {group.items.map((item) => (
              <div className="mb-5" key={`${group.title}-${item.label}`}>
                <div className="mb-2 flex justify-between font-[var(--font-mono)] text-[0.82rem] tracking-[0.06em] text-[#ffb000]">
                  <span>{item.label}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden bg-[#3a2a00]">
                  <div
                    data-skill-fill
                    data-width={`${item.level}%`}
                    className="h-full w-0 bg-[#ffb000] shadow-[0_0_8px_rgba(255,208,64,0.5)] transition-[width] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
