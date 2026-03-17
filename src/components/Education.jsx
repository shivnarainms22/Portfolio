import { Section } from "./Section";
import { education } from "../data/portfolio";
import "./Education.css";

export function Education() {
  return (
    <Section id="education" label="Education">
      <div className="education">
        <div className="education__label">Education</div>
        <h2 className="education__heading">Background.</h2>
        {education.map((e, i) => (
          <div key={i}>
            {i > 0 && <div className="education__divider" />}
            <div className="education__item" style={i > 0 ? { marginTop: 48 } : undefined}>
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
