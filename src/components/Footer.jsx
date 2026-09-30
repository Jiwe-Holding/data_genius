import { company, nav } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Logo light />
          <p>Independent management advisory firm since {company.since}.</p>
        </div>
        <nav aria-label="Footer">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <address>
          {company.address[0]}
          <br />
          {company.address[1]}
          <br />
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </address>
      </div>
      <div className="container footer__copy">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
