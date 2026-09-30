import { services } from '../data/content'
import Icon from './Icon'

export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">What we do</span>
          <h2>Three areas of expertise, one standard of rigor</h2>
        </div>
        <div className="grid grid--3">
          {services.map((s) => (
            <article className="card card--service" key={s.title}>
              <div className="card__icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href={`#${s.anchor}`} className="link">
                Learn more <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
