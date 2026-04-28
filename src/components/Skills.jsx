import { Section } from "./Section";
import { skillGroups } from "../data/portfolio";
import "./Skills.css";

export function Skills() {
  return (
    <Section id="skills" label="Skills and tech stack">
      <div className="skills">
        <div className="skills__label">Tech Stack</div>
        <h2 className="skills__heading">Skills grounded in shipped work.</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group__title">{group.title}</h3>
              <div className="skill-group__items">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
