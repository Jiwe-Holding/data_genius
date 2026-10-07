import { about } from '../data/content'
import Icon from './Icon'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__visual reveal" aria-hidden="true">
          <div className="about__year">
            <span>Since</span>
            <strong>2013</strong>
          </div>
          <div className="about__pillars">
            {about.pillars.map((p) => (
              <div key={p.title} className="about__pillar">
                <Icon name={p.icon} />
                <span>{p.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__copy">
          <span className="eyebrow">About</span>
          <h2>{about.lead}</h2>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href="#contact" className="btn btn--primary">
            Let’s work together <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
