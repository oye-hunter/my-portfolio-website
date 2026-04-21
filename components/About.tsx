import { identity } from "./portfolio-data";

export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-8 lg:px-12">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        01 / About
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        WHO AM I?
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div data-reveal className="reveal grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-[1rem] text-[#b07800]">
          <p>
            I am <strong className="text-[#ffb000]">{identity.name}</strong>, a full-stack developer based in{' '}
            <strong className="text-[#ffb000]">{identity.location}</strong>, focused on building SaaS products,
            real-time systems, and mobile applications that are reliable in production.
          </p>
          <p>
            My engineering approach is technical-first: predictable architecture, testable modules, and data-aware
            performance decisions. I work comfortably from API and database design through frontend delivery.
          </p>
          <p>
            I specialize in translating messy product requirements into maintainable shipping systems with practical
            business impact.
          </p>
        </div>

        <div className="border border-[#b07800] bg-[#0f0c00] p-6 font-[var(--font-mono)] text-[0.82rem] text-[#b07800]">
          <div className="mb-4 border-b border-[#3a2a00] pb-3 text-xs tracking-[0.4em] text-[#3a2a00]">● ● ●</div>
          <div className="space-y-1">
            <div>
              <span className="text-[#39ff14]">$ cat</span> profile.json
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="text-[#ffb000]">{'{'}</span>
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[#39ff14]">&quot;name&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.name}&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[#39ff14]">&quot;role&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.role}&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[#39ff14]">&quot;specialization&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.specialization}&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[#39ff14]">&quot;experience&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.experience}&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-[#39ff14]">&quot;availability&quot;</span>: <span className="text-[#39ff14]">&quot;{identity.availability}&quot;</span>
            </div>
            <div>
              <span className="text-[#ffb000]">{'}'}</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="text-[#39ff14]">$ _</span> <span className="text-[#ffb000]">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
