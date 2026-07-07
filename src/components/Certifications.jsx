const certifications = [
  {
    title: 'Information Systems Auditing, Controls and Assurance',
    issuer: null,
  },
  {
    title: 'Data Driven Decision Making',
    issuer: 'PwC',
  },
]

function CertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section accent-top-border" aria-label="Certifications">
      <div className="fade-in-up">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Formal credentials backing up hands-on audit, controls, and data-driven decision-making practice.
        </p>
      </div>

      <div className="cert-grid" role="list" aria-label="Certifications earned">
        {certifications.map((cert, i) => (
          <article
            key={cert.title}
            className={`cert-card fade-in-up delay-${i + 1}`}
            role="listitem"
            aria-label={cert.title}
          >
            <span className="cert-icon" aria-hidden="true"><CertIcon /></span>
            <div>
              <h3 className="cert-title">{cert.title}</h3>
              {cert.issuer && <div className="cert-issuer">{cert.issuer}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
