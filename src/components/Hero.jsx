import { company, stats } from '../data/content'
import Icon from './Icon'
import heroImg from '../assets/img/hero-analytics.jpg'

function Dashboard() {
  const bars = [42, 64, 51, 78, 60, 92, 74]
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash__top">
        <span />
        <span />
        <span />
        <em>CATI survey · Kinshasa</em>
      </div>
      <div className="dash__kpis">
        <div>
          <small>Respondents</small>
          <b>1,284</b>
        </div>
        <div>
          <small>Response rate</small>
          <b>68%</b>
        </div>
        <div>
          <small>Satisfaction</small>
          <b>4.3/5</b>
        </div>
      </div>
      <div className="dash__chart">
        {bars.map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />
        ))}
      </div>
      <div className="dash__row">
        <span className="pill">Focus group</span>
        <span className="pill pill--alt">Fieldwork</span>
        <span className="pill">Multivariate analysis</span>
      </div>
      <div className="dash__float">
        <Icon name="check" size={18} />
        Real-time quality control
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <img className="hero__bg" src={heroImg} alt="" fetchPriority="high" />
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow eyebrow--light">Independent advisory firm · since {company.since}</span>
          <h1>
            Reliable data for <span className="grad">informed decisions</span>
          </h1>
          <p className="lead">
            DATAGENIUS is a highly respected independent management advisory firm. We provide
            strategic direction and business counsel based on the analysis of market insights,
            competitive dynamics, changing technologies and regulatory shifts.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--accent">
              Start a project <Icon name="arrow" size={18} />
            </a>
            <a href="#qualitatif" className="btn btn--outline">
              Discover our methods
            </a>
          </div>
        </div>
        <Dashboard />
      </div>
      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
