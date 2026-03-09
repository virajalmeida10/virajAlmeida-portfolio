const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-inner">
        {/* Logo */}
        <a
          href="#"
          className="footer-logo"
          onClick={scrollToTop}
          aria-label="Viraj Almeida — scroll to top"
        >
          &gt; VA_
        </a>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="footer-nav" role="list">
            {footerLinks.map((link) => (
              <li key={link.label} role="listitem">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-label={`Go to ${link.label} section`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Credit */}
        <div className="footer-credit">
          <p>Built with ❤️ by Viraj Almeida</p>
          <p style={{ marginTop: '0.25rem' }}>
            &copy; {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
