import { expertise, process } from '../data/content'
import Icon from './Icon'

export default function Expertise() {
  const [quanti, quali, veille] = expertise
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Expertise</span>
          <h2>Three practices to inform every decision you make</h2>
          <p>
            From fieldwork to strategic recommendations, we cover the entire data value chain.
          </p>
        </div>

        <div className="bento">
          {[quanti, quali].map((s) => (
            <a key={s.title} href={`#${s.anchor}`} className="bento__card reveal">
              <span className="icon-chip"><Icon name={s.icon} /></span>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="link">Learn more <Icon name="arrow" size={16} /></span>
            </a>
          ))}
          <a href={`#${veille.anchor}`} className="bento__card bento__card--dark reveal">
            <span className="icon-chip icon-chip--light"><Icon name={veille.icon} /></span>
            <span className="tag tag--light">{veille.tag}</span>
            <h3>{veille.title}</h3>
            <ul className="checklist checklist--light">
              {veille.bullets.map((b) => (
                <li key={b}><Icon name="check" size={16} />{b}</li>
              ))}
            </ul>
            <span className="link link--light">Learn more <Icon name="arrow" size={16} /></span>
          </a>
        </div>

        <ol className="process">
          {process.map((p) => (
            <li key={p.n} className="process__step reveal">
              <span className="process__n">{p.n}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
