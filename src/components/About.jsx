import { Section } from "./Section";
import "./About.css";

export function About() {
  return (
    <Section id="about" label="About me">
      <div className="about">
        <div className="about__label">About</div>
        <h2 className="about__heading">A bit about me.</h2>
        <p className="about__text">
          I'm a graduate student at Northeastern University pursuing a Master of
          Science in Artificial Intelligence. My work spans reinforcement learning,
          computer vision, and agentic AI systems.
        </p>
        <p className="about__text">
          I like building things from the ground up. I care about understanding how
          a system works end to end, from the algorithm all the way to the interface
          someone actually uses.
        </p>
      </div>
    </Section>
  );
}
