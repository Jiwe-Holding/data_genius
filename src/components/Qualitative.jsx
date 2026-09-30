import { useState } from 'react'
import { qualitative, facilities } from '../data/content'
import Icon from './Icon'
import roomImg from '../assets/img/focus-room.jpg'

export default function Qualitative() {
  const [tab, setTab] = useState(qualitative[0].id)
  const current = qualitative.find((q) => q.id === tab)

  return (
    <section className="section section--soft" id="qualitatif">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Qualitative research</span>
          <h2>Understand the “why” behind the numbers</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Qualitative methods">
          {qualitative.map((q) => (
            <button
              key={q.id}
              role="tab"
              id={`tab-${q.id}`}
              aria-selected={tab === q.id}
              aria-controls={`panel-${q.id}`}
              className={tab === q.id ? 'is-active' : ''}
              onClick={() => setTab(q.id)}
            >
              {q.label}
            </button>
          ))}
        </div>

        <div
          className="panel"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          key={current.id}
        >
          <div>
            <h3>How to perform</h3>
            <p>{current.how}</p>
          </div>
          <div>
            <h3>Why you need it</h3>
            <ul className="checks">
              {current.why.map((w) => (
                <li key={w}>
                  <Icon name="check" size={18} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="facilities">
          <h3 className="facilities__title">Qualitative premises & facilities</h3>
          <div className="facilities__grid">
            <figure className="facilities__photo">
              <img src={roomImg} alt="Focus group room with an observation window and TV monitor" loading="lazy" />
              <figcaption>Focus group room, Kinshasa</figcaption>
            </figure>
            {facilities.map((f) => (
              <div className="card" key={f.title}>
                <h4>{f.title}</h4>
                <ul className="checks checks--sm">
                  {f.items.map((i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
