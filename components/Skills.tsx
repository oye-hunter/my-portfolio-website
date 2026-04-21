import { skills } from "./portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionLabel">04 / Skills</div>
      <h2 className="sectionTitle">TECH STACK</h2>
      <hr className="divider" />

      <div className="skillsGrid">
        {skills.map((group) => (
          <div className="skillGroup reveal" key={group.title}>
            <h3>// {group.title}</h3>
            {group.items.map((item) => (
              <div className="skillItem" key={`${group.title}-${item.label}`}>
                <div className="skillHeader">
                  <span>{item.label}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="skillBar">
                  <div className="skillFill" style={{ ["--pct" as string]: `${item.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
