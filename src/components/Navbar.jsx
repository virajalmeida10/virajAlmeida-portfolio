import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll for frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar-logo"
            aria-label="Viraj Almeida — go to top"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            &gt; Viraj_Almeida_
          </a>

          {/* Desktop nav links */}
          <ul className="navbar-links" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile) */}
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="overlay-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay menu (mobile) */}
      <div
        id="overlay-menu"
        className={`overlay-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
            aria-label={`Navigate to ${link.label} section`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
