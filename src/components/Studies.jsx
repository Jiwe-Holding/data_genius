import { studies } from '../data/content'
import Icon from './Icon'

export default function Studies() {
  return (
    <section className="section section--soft" id="etudes">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Our studies</span>
          <h2>Research solutions for every business question</h2>
        </div>
        <div className="grid grid--3">
          {studies.map((s) => (
            <article className="card" key={s.title}>
              <div className="card__icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
