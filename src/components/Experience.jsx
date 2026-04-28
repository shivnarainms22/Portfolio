import { Section } from "./Section";
import { experience } from "../data/portfolio";
import "./Experience.css";

export function Experience() {
  return (
    <Section id="experience" label="Work experience">
      <div className="experience">
        <div className="experience__label">Experience</div>
        <h2 className="experience__heading">Industry experience with shipped outcomes.</h2>
        {experience.map((item) => (
          <article key={`${item.role}-${item.company}`} className="experience-card">
            <div className="experience-card__meta">
              <div>
                <h3 className="experience-card__role">{item.role}</h3>
                <p className="experience-card__company">{item.company}</p>
              </div>
              <div className="experience-card__details">
                <div>{item.period}</div>
                <div>{item.location}</div>
              </div>
            </div>
            <p className="experience-card__summary">{item.summary}</p>
            <div className="experience-card__bullets">
              {item.bullets.map((bullet) => (
                <p key={bullet} className="experience-card__bullet">{bullet}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
