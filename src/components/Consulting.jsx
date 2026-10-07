import { consulting } from '../data/content'
import Icon from './Icon'

export default function Consulting() {
  return (
    <section id="consulting" className="section section--tint">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Consulting & Strategy</span>
          <h2>Turn market intelligence into competitive advantage</h2>
          <p>Analysis that leads to clear, quantified and actionable direction.</p>
        </div>

        <div className="consult">
          {consulting.map((c, i) => (
            <article key={c.title} className="consult__card reveal">
              <div className="consult__head">
                <span className="icon-chip"><Icon name={c.icon} /></span>
                <span className="consult__n">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{c.title}</h3>
              <ul className="checklist checklist--compact">
                {c.points.map((p) => (
                  <li key={p}><Icon name="check" size={15} />{p}</li>
                ))}
              </ul>
            </article>
          ))}
          <a href="#contact" className="consult__card consult__card--cta">
            <h3>A strategic question to answer?</h3>
            <p>Let’s talk about your market, your targets and your goals.</p>
            <span className="btn btn--light">Contact us <Icon name="arrow" size={18} /></span>
          </a>
        </div>
      </div>
    </section>
  )
}
