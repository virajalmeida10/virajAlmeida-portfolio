import { useState } from 'react'

// LinkedIn SVG icon
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// GitHub SVG icon
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// Email SVG icon
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // No real backend — show success message
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact Viraj Almeida">
      <div className="contact-inner">
        <div className="fade-in-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          {/* Left: social links */}
          <div className="fade-in-up delay-1">
            <h3 className="contact-left-title">Open to opportunities</h3>
            <p className="contact-left-desc">
              I'm currently open to full-time data engineering roles, contract engagements,
              and technical collaborations. Whether you have a project in mind or just want
              to talk data — I'd love to hear from you.
            </p>

            <nav className="social-links" aria-label="Social and contact links">
              <a
                href="https://www.linkedin.com/in/viraj-almeida"
                className="social-link"
                aria-label="Connect with Viraj Almeida on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--color-text-3)', fontFamily: 'var(--font-mono)' }}>
                  /in/viraj-almeida
                </span>
              </a>

              <a
                href="https://github.com/virajalmeida10"
                className="social-link"
                aria-label="View Viraj Almeida's GitHub profile"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon />
                <span>GitHub</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--color-text-3)', fontFamily: 'var(--font-mono)' }}>
                  @virajalmeida10
                </span>
              </a>

              <a
                href="mailto:almeida.viraj01@gmail.com"
                className="social-link"
                aria-label="Send an email to Viraj Almeida at almeida.viraj01@gmail.com"
              >
                <EmailIcon />
                <span>Email</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--color-text-3)', fontFamily: 'var(--font-mono)' }}>
                  almeida.viraj01@gmail.com
                </span>
              </a>
            </nav>
          </div>

          {/* Right: contact form or success message */}
          <div className="fade-in-up delay-2">
            {submitted ? (
              <div className="contact-success" role="status" aria-live="polite">
                <div className="contact-success-icon" aria-hidden="true">✅</div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-msg">
                  Thanks for reaching out. I'll get back to you at{' '}
                  <strong style={{ color: 'var(--color-text)' }}>{formData.email}</strong>{' '}
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span
                      id="name-error"
                      role="alert"
                      style={{ fontSize: '0.75rem', color: '#f87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span
                      id="email-error"
                      role="alert"
                      style={{ fontSize: '0.75rem', color: '#f87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span
                      id="message-error"
                      role="alert"
                      style={{ fontSize: '0.75rem', color: '#f87171', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    aria-label="Send message"
                  >
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
