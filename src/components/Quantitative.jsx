import { quantitative } from '../data/content'
import Icon from './Icon'
import tabletImg from '../assets/img/field-tablet.jpg'
import laptopImg from '../assets/img/analytics-laptop.jpg'

export default function Quantitative() {
  return (
    <section className="section" id="quantitatif">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Quantitative research</span>
          <h2>Measure, size, validate</h2>
          <p className="lead">
            Higher order statistical analysis, multivariate analysis, telephone data collection
            (CATI) and field interviews: robust data you can act on immediately.
          </p>
        </div>
        <div className="duo">
          <img className="photo" src={tabletImg} alt="Interviewer entering survey responses on a tablet" loading="lazy" />
          <img className="photo" src={laptopImg} alt="Analyst reviewing survey results on a dashboard" loading="lazy" />
        </div>
        <div className="grid grid--4">
          {quantitative.map((q) => (
            <article className="card" key={q.title}>
              <div className="card__icon">
                <Icon name={q.icon} />
              </div>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
