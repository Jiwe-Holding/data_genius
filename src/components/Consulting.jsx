import { consulting } from '../data/content'
import Icon from './Icon'
import sessionImg from '../assets/img/consulting-session.jpg'

export default function Consulting() {
  return (
    <section className="section section--dark" id="conseil">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow eyebrow--light">Consulting & Strategy</span>
          <h2>From analysis to decision</h2>
        </div>
        <img className="photo photo--banner" src={sessionImg} alt="Consultant presenting findings to a team" loading="lazy" />
        <div className="grid grid--3">
          {consulting.map((c) => (
            <article className="card card--dark" key={c.title}>
              <div className="card__icon card__icon--light">
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
