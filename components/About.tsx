import { identity } from "./portfolio-data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="sectionLabel">01 / About</div>
      <h2 className="sectionTitle">WHO AM I?</h2>
      <hr className="divider" />

      <div className="aboutGrid reveal">
        <div className="aboutText">
          <p>
            I am <strong>{identity.name}</strong>, a full-stack developer based in <strong>{identity.location}</strong>
            , focused on building SaaS products, real-time systems, and mobile applications that are reliable in
            production.
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

        <div className="terminalBox reveal">
          <div className="line">
            <span className="cmd">$ cat</span> profile.json
          </div>
          <div className="line">&nbsp;</div>
          <div className="line">
            <span className="val">{'{'}</span>
          </div>
          <div className="line">
            &nbsp;&nbsp;<span className="cmd">&quot;name&quot;</span>: <span className="val">&quot;{identity.name}&quot;</span>,
          </div>
          <div className="line">
            &nbsp;&nbsp;<span className="cmd">&quot;role&quot;</span>: <span className="val">&quot;{identity.role}&quot;</span>,
          </div>
          <div className="line">
            &nbsp;&nbsp;<span className="cmd">&quot;specialization&quot;</span>: <span className="val">&quot;{identity.specialization}&quot;</span>,
          </div>
          <div className="line">
            &nbsp;&nbsp;<span className="cmd">&quot;experience&quot;</span>: <span className="val">&quot;{identity.experience}&quot;</span>,
          </div>
          <div className="line">
            &nbsp;&nbsp;<span className="cmd">&quot;availability&quot;</span>: <span className="ok">&quot;{identity.availability}&quot;</span>
          </div>
          <div className="line">
            <span className="val">{'}'}</span>
          </div>
          <div className="line">&nbsp;</div>
          <div className="line">
            <span className="cmd">$ _</span>
            <span className="blink">█</span>
          </div>
        </div>
      </div>
    </section>
  );
}
