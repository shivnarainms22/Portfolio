import { Section } from "./Section";
import { education } from "../data/portfolio";
import "./Education.css";

export function Education() {
  return (
    <Section id="education" label="Education" className="section--compact">
      <div className="education">
        <div className="education__label">Education</div>
        <h2 className="education__heading">Credentials.</h2>
        {education.map((e, i) => (
          <div key={i}>
            {i > 0 && <div className="education__divider" />}
            <div className="education__item" style={i > 0 ? { marginTop: 28 } : undefined}>
              <div className="education__degree">{e.degree}</div>
              <div className="education__school">{e.school}</div>
              <div className="education__year">{e.period}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
