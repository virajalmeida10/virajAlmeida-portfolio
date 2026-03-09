const stats = [
  { number: '4+', label: 'Years Experience' },
  { number: '3', label: 'Industries Served' },
  { number: '60%', label: 'Effort Reduced' },
  { number: '50%', label: 'Pipeline Time Saved' },
]

export default function About() {
  return (
    <section id="about" className="about-section accent-top-border" aria-label="About Viraj Almeida">
      <div className="fade-in-up">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-grid">
        {/* Left: bio + stats */}
        <div>
          <div className="about-bio fade-in-up delay-1">
            <p>
              I'm a Data Engineer with 4+ years of experience designing end-to-end pipelines,
              lakehouse architectures, and intelligent automation systems. I specialize in
              translating complex business requirements into scalable, measurable data
              infrastructure — from real-time KPI dashboards to agentic AI workflows.
            </p>
            <p>
              My career spans healthcare IT, pharmaceutical enterprise systems, and ad tech —
              giving me a unique perspective on data challenges across industries. Whether
              it's modernizing legacy pipelines, reducing operational costs, or building
              AI-assisted data products, I bring both technical depth and business context
              to every engagement.
            </p>
            <p>
              I'm driven by the belief that clean, well-architected data is the foundation
              of every great product decision.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-card fade-in-up delay-${i + 2}`}
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo placeholder */}
        <div className="about-photo-wrapper fade-in-up delay-2">
          <div style={{ position: 'relative' }}>
            <div className="about-photo-glow" aria-hidden="true"></div>
            <div className="about-photo-frame" aria-label="Profile photo of Viraj Almeida">
              <div className="about-photo-inner">
                {/*
                  TODO: Replace the initials block below with a real photo:
                  <img
                    src="/assets/viraj-almeida.jpg"
                    alt="Viraj Almeida — Data Engineer"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                */}
                <span className="about-initials" aria-hidden="true">VA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
