import { useState } from 'react'
import { company } from '../data/content'
import Icon from './Icon'

const subjects = ['Qualitative study', 'Quantitative study / CATI', 'Fieldwork', 'Consulting & strategy', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: subjects[0], message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name}${form.company ? ` (${form.company})` : ''}\n${form.email}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `[${form.subject}] Enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Need help? Let’s talk about your project.</h2>
          <p>Tell us what you need and we’ll come back to you with a tailored methodological proposal.</p>

          <ul className="contact__list">
            <li>
              <span className="icon-chip icon-chip--light"><Icon name="phone" /></span>
              <div><small>Phone</small><a href={`tel:${company.phoneHref}`}>{company.phone}</a></div>
            </li>
            <li>
              <span className="icon-chip icon-chip--light"><Icon name="mail" /></span>
              <div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div>
            </li>
            <li>
              <span className="icon-chip icon-chip--light"><Icon name="pin" /></span>
              <div><small>Address</small><span>{company.address.join(' — ')}</span></div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="form__row">
            <label>
              Full name
              <input name="name" required value={form.name} onChange={update} autoComplete="name" />
            </label>
            <label>
              Work email
              <input type="email" name="email" required value={form.email} onChange={update} autoComplete="email" />
            </label>
          </div>
          <div className="form__row">
            <label>
              Organisation
              <input name="company" value={form.company} onChange={update} autoComplete="organization" />
            </label>
            <label>
              Type of request
              <select name="subject" value={form.subject} onChange={update}>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Your message
            <textarea name="message" rows="5" required value={form.message} onChange={update} />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            Send request <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
