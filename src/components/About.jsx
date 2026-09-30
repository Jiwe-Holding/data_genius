import { process } from '../data/content'
import teamImg from '../assets/img/about-team.jpg'

export default function About() {
  return (
    <section className="section" id="apropos">
      <div className="container about">
        <div>
          <span className="eyebrow">About</span>
          <h2>A team of experts by your side</h2>
          <p className="lead">
            Data Genius brings together a team of experts in strategy, market analysis and research,
            technology and regulatory issues, with the ability to provide comprehensive support
            through innovative, effective and actionable recommendations.
          </p>
          <p>
            The expertise of our professionals, combined with true passion, dedication and
            attention to detail, makes our services unique.
          </p>
        </div>
        <div>
          <img className="photo photo--wide" src={teamImg} alt="Analysts collaborating around a laptop" loading="lazy" />
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
    </section>
  )
}
