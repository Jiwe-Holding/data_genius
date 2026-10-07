import { quantitative, capi } from '../data/content'
import Icon from './Icon'

export default function Quantitative() {
  return (
    <section id="quantitative" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Quantitative research</span>
          <h2>Measure at scale, with rigour</h2>
          <p>
            CATI surveys, field interviews and advanced statistical analysis for representative, reliable results.
          </p>
        </div>

        <div className="grid-4">
          {quantitative.map((q) => (
            <article key={q.title} className="card reveal">
              <span className="icon-chip"><Icon name={q.icon} /></span>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </article>
          ))}
        </div>

        <div className="capi">
          <div className="capi__intro">
            <span className="eyebrow eyebrow--light">CAPI data collection</span>
            <h3>A data collector app built for fieldwork quality</h3>
            <p>
              Every interview is traced, checked and transferred quickly, giving you full visibility over your
              fieldwork from the first questionnaire to the final dataset.
            </p>
            <div className="capi__formats">
              {['PDF', 'Excel', 'Access'].map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
          <div className="capi__grid">
            {capi.map((c) => (
              <div key={c.title} className="capi__item">
                <Icon name={c.icon} size={20} />
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
