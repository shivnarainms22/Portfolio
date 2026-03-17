import { Section } from "./Section";
import { projects } from "../data/portfolio";
import "./Projects.css";

export function Projects() {
  return (
    <Section id="projects" label="Selected work">
      <div className="projects">
        <div className="projects__label">Selected Work</div>
        <h2 className="projects__heading">Projects.</h2>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <div>
                <div className="project-card__number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="project-card__name">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
              </div>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
