import { Section } from "./Section";
import { projects } from "../data/portfolio";
import "./Projects.css";

export function Projects() {
  return (
    <Section id="projects" label="Selected work">
      <div className="projects">
        <div className="projects__label">Selected Work</div>
        <h2 className="projects__heading">Projects with real product shape.</h2>
        <p className="projects__intro">
          I prefer projects where the model is only one part of the job and the rest is system design,
          tooling, reliability, and a usable interface.
        </p>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${projects.length % 2 === 1 && index === projects.length - 1 ? "project-card--wide" : ""}`}
            >
              <div>
                <div className="project-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="project-card__name">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
                <ul className="project-card__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="project-card__highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-card__footer">
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
