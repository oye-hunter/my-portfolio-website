import { contact, projects } from "./portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="sectionLabel">02 / Projects</div>
      <h2 className="sectionTitle">SELECTED WORK</h2>
      <hr className="divider" />

      <div className="projectsGrid">
        {projects.map((project) => (
          <article className="projectCard reveal" key={project.id}>
            <div className="projectNum">{project.id}</div>
            <h3 className="projectTitle">{project.name}</h3>
            <p className="projectDesc">{project.summary}</p>

            <div className="tagList">
              {project.stack.map((tag) => (
                <span className="tag" key={`${project.id}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="projectLinks">
              <a className="projectLink" href={`mailto:${contact.email}?subject=Live%20Demo%20Request%20-%20${encodeURIComponent(project.name)}`}>
                Live Demo Request
              </a>
              {project.githubUrl ? (
                <a className="projectLink" href={project.githubUrl} target="_blank" rel="noreferrer">
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
