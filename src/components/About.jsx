import { Section } from "./Section";
import { profile } from "../data/portfolio";
import "./About.css";

export function About() {
  return (
    <Section id="about" label="About me">
      <div className="about">
        <div className="about__label">About</div>
        <h2 className="about__heading">Building AI systems people can use.</h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="about__text">{paragraph}</p>
        ))}
        <div className="about__focus">
          {profile.focusAreas.map((area) => (
            <span key={area} className="about__pill">{area}</span>
          ))}
        </div>
        <p className="about__note">{profile.openTo}</p>
      </div>
    </Section>
  );
}
