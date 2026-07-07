const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
          Viraj Almeida
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

        {/* Social links */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/viraj-almeida"
            className="footer-social-link"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Credit */}
        <div className="footer-credit">
          <p>Designed &amp; Built by Viraj Almeida</p>
          <p style={{ marginTop: '0.25rem' }}>
            &copy; {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
