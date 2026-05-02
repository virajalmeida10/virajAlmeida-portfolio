const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '3', label: 'Industries Served' },
  { number: '5K+', label: 'Bad Records Intercepted/Mo' },
  { number: '3.5M+', label: 'Daily Records Processed' },
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
              I'm a Data Engineer with 5+ years delivering measurable business impact across
              pharma, fintech, and adtech. I specialize in architecting production-grade
              Lakehouse pipelines, dbt models, and data quality frameworks trusted by
              10+ cross-functional teams.
            </p>
            <p>
              Whether it's enforcing HIPAA-compliant data contracts on Azure Databricks,
              building serverless AWS Lambda pipelines that slash acquisition time by 98%,
              or designing Snowflake mart-layer models that eliminate multi-day reporting lags
              — I bring both technical precision and a business-outcomes mindset to every engagement.
            </p>
            <p>
              Clean, well-architected data isn't just infrastructure. It's the foundation
              every great product decision is built on.
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
                  import profilePhoto from '../assets/viraj-almeida.jpg'
                  <img
                    src={profilePhoto}
                    alt="Viraj Almeida — Data Analytics & Engineering Specialist"
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
