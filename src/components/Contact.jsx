const CONTACT_EMAIL = 'almeida.viraj01@gmail.com'

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const contactCards = [
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+1 (551) 258-7283',
    href: 'tel:+15512587283',
    external: false,
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: '/in/viraj-almeida',
    href: 'https://www.linkedin.com/in/viraj-almeida',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section accent-top-border" aria-label="Contact Viraj Almeida">
      <div className="contact-inner">

        {/* Header */}
        <div className="contact-header fade-in-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-tagline">
            Open to full-time IT Audit, Risk &amp; Compliance roles and control-testing engagements.
            <br />Whether you're building out a SOX program, an ITGC framework, or an AI-era audit function — I'd love to hear from you.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="contact-cta fade-in-up delay-1">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact-email-btn"
            aria-label={`Send an email to Viraj Almeida at ${CONTACT_EMAIL}`}
          >
            <span className="contact-email-btn__icon"><MailIcon /></span>
            <span className="contact-email-btn__text">Send Me an Email</span>
            <span className="contact-email-btn__arrow" aria-hidden="true">→</span>
          </a>
          <p className="contact-email-hint" aria-label={`Email address: ${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </p>
        </div>

        {/* Contact cards */}
        <div className="contact-cards fade-in-up delay-2" role="list" aria-label="Other ways to connect">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="contact-card"
              role="listitem"
              aria-label={`${card.label}: ${card.value}`}
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-card__icon">{card.icon}</span>
              <div className="contact-card__body">
                <span className="contact-card__label">{card.label}</span>
                <span className="contact-card__value">{card.value}</span>
              </div>
              <span className="contact-card__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
