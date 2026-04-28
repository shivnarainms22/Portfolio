import { Section } from "./Section";
import { leadership } from "../data/portfolio";
import "./Leadership.css";

export function Leadership() {
  return (
    <Section id="leadership" label="Leadership and speaking">
      <div className="leadership">
        <div className="leadership__label">Leadership</div>
        <h2 className="leadership__heading">Community, events, and technical communication.</h2>
        <div className="leadership__grid">
          {leadership.map((item) => (
            <article key={`${item.title}-${item.role}`} className="leadership-card">
              <div className="leadership-card__period">{item.period}</div>
              <h3 className="leadership-card__title">{item.title}</h3>
              <p className="leadership-card__role">{item.role}</p>
              <div className="leadership-card__bullets">
                {item.bullets.map((bullet) => (
                  <p key={bullet} className="leadership-card__bullet">{bullet}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
