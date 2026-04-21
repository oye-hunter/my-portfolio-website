import { identity } from "./portfolio-data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-12">
      <div
        className="absolute inset-0 bg-cover bg-[position:center_left] bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,8,0,0.18) 0%, rgba(10,8,0,0.55) 58%, rgba(10,8,0,0.92) 100%), linear-gradient(to top, rgba(10,8,0,0.45) 0%, rgba(10,8,0,0.12) 45%, rgba(10,8,0,0.35) 100%), url('/wide-hero-banner.png')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,8,0,0.62)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-16 md:px-8 lg:px-12">
        <div className="ml-auto w-full max-w-2xl text-right max-md:ml-0 max-md:text-left">
          <p
            data-reveal
            className="reveal opacity-0 translate-y-8 text-sm font-[var(--font-mono)] uppercase tracking-[0.3em] text-[#39ff14] transition-all duration-700"
          >
            $ initialize --profile hassan
          </p>
          <h1
            data-reveal
            className="reveal mt-3 text-[clamp(4rem,10vw,9rem)] leading-[0.9] font-[var(--font-display)] text-[#ffb000] drop-shadow-[0_0_30px_rgba(255,208,64,0.5)] transition-all duration-700"
          >
            {identity.name.split(" ").slice(0, 2).join(" ")}
            <br />
            {identity.name.split(" ").slice(2).join(" ")}
          </h1>
          <h2
            data-reveal
            className="reveal mt-4 text-[clamp(1rem,2.5vw,1.4rem)] uppercase tracking-[0.1em] text-[#b07800] transition-all duration-700"
          >
            Full-Stack Engineer for SaaS and MVP Delivery <span className="text-[#ffb000]">█</span>
          </h2>
          <p
            data-reveal
            className="reveal ml-auto mt-10 max-w-[620px] border-r-2 border-[#3a2a00] pr-5 text-[1.05rem] text-[#b07800] transition-all duration-700 max-md:ml-0 max-md:border-l-2 max-md:border-r-0 max-md:pl-4 max-md:pr-0 max-md:text-left"
          >
            I architect and ship production-ready web and mobile systems with Next.js, React Native,
            Node.js, and .NET Core, focused on scalable infrastructure, clean implementation, and faster
            release velocity for product teams.
          </p>
          <div
            data-reveal
            className="reveal mt-10 flex flex-wrap justify-end gap-4 transition-all duration-700 max-md:justify-start"
          >
            <a
              className="inline-flex items-center justify-center border border-[#ffb000] px-8 py-3 font-[var(--font-mono)] text-[0.85rem] uppercase tracking-[0.15em] text-[#ffb000] no-underline transition-colors duration-200 hover:bg-[#ffb000] hover:text-[#0a0800] hover:shadow-[0_0_20px_rgba(255,208,64,0.5)]"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="inline-flex items-center justify-center border border-[#b07800] px-8 py-3 font-[var(--font-mono)] text-[0.85rem] uppercase tracking-[0.15em] text-[#b07800] no-underline transition-colors duration-200 hover:bg-[#b07800] hover:text-[#0a0800] hover:shadow-[0_0_20px_rgba(255,208,64,0.35)]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[#b07800]">
        scroll
        <span className="h-10 w-px bg-gradient-to-b from-[#b07800] to-transparent" />
      </div>
    </section>
  );
}
