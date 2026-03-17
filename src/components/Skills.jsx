import { Section } from "./Section";
import { skills } from "../data/portfolio";
import "./Skills.css";

export function Skills() {
  return (
    <Section id="skills" label="Skills and tech stack">
      <div className="skills">
        <div className="skills__label">Tech Stack</div>
        <h2 className="skills__heading">Skills &amp; tools.</h2>
        <div className="skills__grid">
          {skills.map((name) => (
            <span key={name} className="skill-pill">{name}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
