import profilePhoto from '../assets/viraj-almeida.jpg'

const specs = [
  { number: '4+',     label: 'Years Experience' },
  { number: '3,000+', label: 'Users on E-Procurement Sync' },
  { number: '21%',    label: 'Match-Rate Lift Delivered' },
  { number: 'MS',     label: 'Info Systems, Pace' },
]

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About Viraj Almeida">
      <div className="fade-in-up">
        <span className="section-label">About</span>
        <h2 className="section-title">Software Engineer, builder at heart.</h2>
      </div>

      <div className="about-grid">
        <div className="about-photo-wrap fade-in-up delay-1">
          <img src={profilePhoto} alt="Viraj Almeida" loading="lazy" />
        </div>

        <div className="fade-in-up delay-2">
          <div className="about-text">
            <p>
              I'm a Software Engineer at <strong>Daiichi Sankyo</strong>, where I build a Spring AI-powered RAG pipeline that grounds document Q&amp;A in Qdrant vector search, secured end-to-end with OAuth2 JWTs and payload-level access filters. Alongside that, I ship content-publishing modules through GitHub Actions CI/CD and extend SAP master-data sync for a Java/OSGi e-procurement portal.
            </p>
            <p>
              Outside of work, I build and ship my own products — most recently <strong>Stanza</strong>, a full-stack hotel-booking marketplace with Stripe payments and a Claude-powered booking assistant, deployed live across Render, Vercel, and Neon. MS in Information Systems from Pace University; comfortable end-to-end from React UI down to SQL and infrastructure.
            </p>
          </div>

          <div className="spec-strip" role="list" aria-label="Key metrics">
            {specs.map((s) => (
              <div key={s.label} className="spec-item" role="listitem" aria-label={`${s.number} ${s.label}`}>
                <div className="spec-number">{s.number}</div>
                <div className="spec-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
