import { heroPoints, stats } from '../data/content'
import Icon from './Icon'

function DashboardMock() {
  const bars = [38, 52, 46, 64, 58, 72, 81]
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash__top">
        <span className="dash__dots"><i /><i /><i /></span>
        <span className="dash__title">Fieldwork tracking — dashboard</span>
        <span className="dash__live"><i />Live</span>
      </div>

      <div className="dash__grid">
        <div className="dash__card dash__card--wide">
          <div className="dash__label">Completed interviews / week</div>
          <svg viewBox="0 0 320 120" className="dash__chart">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1fb2e6" stopOpacity=".45" />
                <stop offset="1" stopColor="#1fb2e6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 60, 90].map((y) => (
              <line key={y} x1="0" x2="320" y1={y} y2={y} className="dash__gridline" />
            ))}
            {bars.map((b, i) => (
              <rect key={i} x={14 + i * 44} y={120 - b} width="22" height={b} rx="4" className="dash__bar" />
            ))}
            <path d="M0 92 C40 84 60 70 100 72 S170 50 210 46 S280 24 320 18 L320 120 L0 120Z" fill="url(#area)" />
            <path d="M0 92 C40 84 60 70 100 72 S170 50 210 46 S280 24 320 18" className="dash__line" />
          </svg>
        </div>

        <div className="dash__card">
          <div className="dash__label">Quota progress</div>
          <div className="dash__donut">
            <svg viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="15.9" className="dash__ring" />
              <circle cx="21" cy="21" r="15.9" className="dash__ring-val" strokeDasharray="78 22" strokeDashoffset="25" />
            </svg>
            <span>78%</span>
          </div>
        </div>

        <div className="dash__card">
          <div className="dash__label">Collection modes</div>
          {[
            ['CATI', 46],
            ['CAPI field', 34],
            ['Qualitative', 20],
          ].map(([l, v]) => (
            <div key={l} className="dash__meter">
              <span>{l}</span>
              <div><b style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="dash__feed">
        <span><Icon name="check" size={14} /> CATI interview validated</span>
        <span><Icon name="pin" size={14} /> GPS · Gombe</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">
            <Icon name="sparkle" size={14} /> Independent research & advisory firm since 2013
          </span>
          <h1>
            From field data to <span className="grad">strategic decisions</span>.
          </h1>
          <p className="hero__lead">
            We provide strategic direction and business counsel based on the analysis of market insights, competitive
            dynamics, changing technologies and regulatory shifts.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start a project <Icon name="arrow" size={18} />
            </a>
            <a href="#expertise" className="btn btn--ghost">Our expertise</a>
          </div>
          <ul className="hero__points">
            {heroPoints.map((p) => (
              <li key={p}><Icon name="check" size={16} />{p}</li>
            ))}
          </ul>
        </div>
        <DashboardMock />
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
