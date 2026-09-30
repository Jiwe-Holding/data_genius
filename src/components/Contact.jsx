import { useState } from 'react'
import { company } from '../data/content'
import Icon from './Icon'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend yet: opens the mail client with a pre-filled message.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
    const subject = encodeURIComponent(f.get('subject') || 'Contact request')
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Need help? Let’s talk about your project.</h2>
          <p className="lead">Tell us what you need and we will get back to you shortly.</p>
          <ul className="contact__list">
            <li>
              <Icon name="phone" />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="pin" />
              <span>
                {company.address[0]}
                <br />
                {company.address[1]}
              </span>
            </li>
          </ul>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Full name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Subject
            <input name="subject" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn--primary" type="submit">
            Send <Icon name="arrow" size={18} />
          </button>
          {sent && (
            <p className="form__ok" role="status">
              Your email app is opening to finish sending.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
