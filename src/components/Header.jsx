import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Logo from './Logo'
import Icon from './Icon'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__brand" aria-label="DataGenius — home" onClick={() => setOpen(false)}>
          <Logo light={!scrolled && !open} />
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm header__cta" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>

        <button className="header__toggle" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
