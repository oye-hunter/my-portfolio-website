import { identity } from "./portfolio-data";

export function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="heroGridBg" />
      <div className="heroContent">
        <p className="heroPrompt reveal">$ initialize --profile hassan</p>
        <h1 className="heroName reveal">
          {identity.name.split(" ").slice(0, 2).join(" ")}
          <br />
          {identity.name.split(" ").slice(2).join(" ")}
        </h1>
        <h2 className="heroTitle reveal">
          Full-Stack Engineer for SaaS and MVP Delivery <span className="blink">█</span>
        </h2>
        <p className="heroDesc reveal">
          I architect and ship production-ready web and mobile systems with Next.js, React Native,
          Node.js, and .NET Core, focused on scalable infrastructure, clean implementation, and faster
          release velocity for product teams.
        </p>
        <div className="heroCta reveal">
          <a className="btn" href="#projects">
            <span>View Projects</span>
          </a>
          <a className="btn btnGhost" href="#contact">
            <span>Contact Me</span>
          </a>
        </div>
      </div>
      <div className="scrollHint">scroll</div>
    </section>
  );
}
