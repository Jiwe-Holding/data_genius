import { process, story, impact, values, offices } from '../data/content'
import Icon from './Icon'
import teamImg from '../assets/img/about-team.jpg'

export default function About() {
  return (
    <section className="section" id="apropos">
      <div className="container">
        <div className="about">
          <div>
            <span className="eyebrow">Our Mission & Story</span>
            <h2>Revolutionizing industry practices through data</h2>
            <p className="lead">{story[0]}</p>
            {story.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div>
            <img className="photo photo--wide" src={teamImg} alt="FUTURIS team meeting" loading="lazy" />
            <ol className="steps">
              {process.map((p) => (
                <li key={p.n}>
                  <span className="steps__n">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="impact">
          <div className="section__head">
            <span className="eyebrow eyebrow--light">Our Impact</span>
            <h2>Numbers that reflect our commitment to excellence and growth across Africa</h2>
          </div>
          <dl className="impact__grid">
            {impact.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about__block">
          <div className="section__head">
            <span className="eyebrow">Our Core Values</span>
            <h2>The principles that guide everything we do and shape our culture</h2>
          </div>
          <div className="grid grid--4">
            {values.map((v) => (
              <article className="card" key={v.title}>
                <div className="card__icon">
                  <Icon name={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about__block">
          <div className="section__head">
            <span className="eyebrow">Our Global Presence</span>
            <h2>5 countries, 29+ African markets</h2>
            <p className="lead">
              Strategically positioned to serve 29+ African markets with local expertise and global standards.
            </p>
          </div>
          <div className="offices">
            {offices.map((o) => (
              <article className={`card office ${o.type === 'HQ' ? 'office--hq' : ''}`} key={o.country}>
                <span className="office__tag">{o.type}</span>
                <h3>{o.country}</h3>
                <p className="office__city">
                  <Icon name="pin" size={16} /> {o.city}
                </p>
                <p>{o.address}</p>
                {o.est && <small>Est. {o.est}</small>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
