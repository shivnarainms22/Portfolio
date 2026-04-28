import { Section } from "./Section";
import { interactiveBuilds } from "../data/portfolio";
import "./InteractiveBuilds.css";

export function InteractiveBuilds() {
  return (
    <Section id="interactive-builds" label="Interactive builds" className="section--compact">
      <div className="interactive-builds">
        <div className="interactive-builds__label">Interactive Builds</div>
        <h2 className="interactive-builds__heading">Interactive builds designed for learning, intuition, and exploration.</h2>
        <div className="interactive-builds__grid">
          {interactiveBuilds.map((build) => (
            <article key={build.title} className="interactive-builds__card">
              <h3 className="interactive-builds__title">{build.title}</h3>
              <p className="interactive-builds__desc">{build.desc}</p>
              <a
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-builds__link"
              >
                Live Demo
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
