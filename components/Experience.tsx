import { experience } from "./portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section sectionCompact">
      <div className="sectionLabel">03 / Experience</div>
      <h2 className="sectionTitle">PROFESSIONAL TIMELINE</h2>
      <hr className="divider" />

      <div className="experienceTimeline">
        {experience.map((item) => (
          <article className="experienceItem reveal" key={`${item.duration}-${item.company}`}>
            <div className="experienceMeta">{item.duration}</div>
            <h3 className="experienceRole">
              {item.role} | {item.company}
            </h3>
            <p className="experienceDesc">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
