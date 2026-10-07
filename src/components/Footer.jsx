import { company, nav } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo light />
          <p>Independent research and strategic advisory firm since {company.since}.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer__contact">
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.address.join(', ')}</span>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
