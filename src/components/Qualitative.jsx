import { useState } from 'react'
import { qualitative, facilities } from '../data/content'
import Icon from './Icon'

export default function Qualitative() {
  const [current, setCurrent] = useState(qualitative[0].id)
  const method = qualitative.find((m) => m.id === current)

  return (
    <section id="qualitative" className="section section--tint">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Qualitative research</span>
          <h2>Understand the “why” behind behaviour</h2>
          <p>Proven methods to uncover the perceptions, motivations and barriers of your target audiences.</p>
        </div>

        <div className="tabs">
          <div className="tabs__list" role="tablist" aria-label="Qualitative methods">
            {qualitative.map((m) => (
              <button
                key={m.id}
                role="tab"
                id={`tab-${m.id}`}
                aria-selected={current === m.id}
                aria-controls={`panel-${m.id}`}
                className={`tabs__tab ${current === m.id ? 'is-active' : ''}`}
                onClick={() => setCurrent(m.id)}
              >
                <Icon name={m.icon} size={20} />
                {m.label}
              </button>
            ))}
          </div>

          <div className="tabs__panel" role="tabpanel" id={`panel-${method.id}`} aria-labelledby={`tab-${method.id}`} key={method.id}>
            <div>
              <h3 className="panel-title">How we perform it</h3>
              <p className="panel-text">{method.how}</p>
            </div>
            <div className="panel-why">
              <h3 className="panel-title">Why you need it</h3>
              <ul className="checklist">
                {method.why.map((w) => (
                  <li key={w}><Icon name="check" size={16} />{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="facilities">
          <div className="facilities__intro">
            <span className="eyebrow">Qualitative premises</span>
            <h3>A fully equipped focus group facility to observe in real conditions</h3>
            <p>Watch your groups and interviews on site from behind a one-way mirror, or remotely via live streaming.</p>
          </div>
          {facilities.map((f) => (
            <div key={f.title} className="facilities__card reveal">
              <div className="facilities__title">
                <span className="icon-chip"><Icon name={f.icon} /></span>
                <h4>{f.title}</h4>
              </div>
              <ul className="checklist checklist--compact">
                {f.items.map((i) => (
                  <li key={i}><Icon name="check" size={15} />{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
