import { Section } from "./Section";
import { research } from "../data/portfolio";
import "./Research.css";

export function Research() {
  return (
    <Section id="research" label="Research">
      <div className="research">
        <div className="research__label">Research</div>
        <h2 className="research__heading">Experiments designed, run, and reported like research.</h2>
        <p className="research__intro">
          From-scratch studies in language-model architecture — each with a pre-registered
          hypothesis, controlled comparisons, and results reported exactly as they came out,
          including the negative ones.
        </p>
        <div className="research__grid">
          {research.map((item, index) => (
            <article key={item.title} className="research-card">
              <div>
                <div className="research-card__number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="research-card__kind">{item.kindLabel}</div>
                <h3 className="research-card__name">{item.title}</h3>
                <p className="research-card__desc">{item.desc}</p>
                <ul className="research-card__highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="research-card__highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="research-card__footer">
                <div className="research-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="research-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="research-card__links">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="research-card__link"
                    >
                      {link.label} <span aria-hidden="true">&#8599;</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
