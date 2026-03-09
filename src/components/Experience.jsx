const experiences = [
  {
    company: 'Relevance Lab',
    role: 'Associate Software Engineer',
    department: 'Enterprise Healthcare Systems, Business Impact, Integration & Automation',
    period: 'May 2025 – Present',
    location: 'Basking Ridge, NJ',
    bullets: [
      'Designed and deployed backend data ingestion pipelines with structured validation layers for medical inquiry workflows, ensuring compliant, auditable data flow and improving downstream data quality for analytics consumption.',
      'Identified a high-effort manual publication configuration workflow and engineered an Excel-driven bulk ingestion pipeline — designing end-to-end data architecture from file parsing and validation to automated filter mapping and database persistence, reducing processing effort by 60%.',
      'Architected and implemented automated SAP data sync schedulers with configurable refresh cycles, orchestrating scheduled ingestion of procurement, vendor, and cost center data into structured tables and delivering real-time KPI dashboards that improved financial visibility across business workflows.',
    ],
  },
  {
    company: 'Daiichi Sankyo Inc.',
    role: 'IT Global Applications Developer',
    department: 'Java, Liferay DXP, Web Development, Process Automation, DB Integration',
    period: 'June 2024 – May 2025',
    location: 'Basking Ridge, NJ',
    bullets: [
      'Collaborated with global stakeholders across business units to translate operational workflow requirements into enterprise web applications using Liferay, improving user experience and driving process efficiency at scale.',
      'Partnered with procurement teams to surface request visibility gaps, translating business needs into enhanced search, filtering, and tracking features within the E-Procurement module — reducing manual follow-ups by 30%.',
      'Developed technical documentation, process guides, and tracking dashboards to support cross-functional teams, increasing transparency in procurement operations and accelerating issue resolution cycles.',
    ],
  },
  {
    company: 'Media.Net Software Services',
    role: 'Product Analytics & Operations Analyst',
    department: 'SQL, Python, Hive, ETL, Power BI, Ad Tech',
    period: 'April 2021 – August 2023',
    location: 'Mumbai, IN',
    bullets: [
      'Worked closely with business stakeholders to analyze keyword performance and ad placement data, translating insights into optimization strategies that drove a 10% increase in daily revenue and improved platform-level decision-making.',
      'Built scalable Hive-based data pipelines to surface revenue and operational KPIs for cross-functional teams, ensuring data integrity and equipping business stakeholders with reliable insights to drive informed decisions.',
      'Identified cost inefficiencies through data analysis and led threshold optimization across a programmatic bidding platform — reducing infrastructure costs by 8% and automating reporting pipelines to cut processing time by 50%.',
    ],
  },
]

function TimelineItem({ experience, index }) {
  const isOdd = index % 2 === 0

  return (
    <div className={`timeline-item fade-in-up delay-${(index % 3) + 1}`}>
      {/* Left card slot */}
      <div style={{ gridColumn: 1 }}>
        {isOdd && (
          <article
            className="timeline-card"
            aria-label={`${experience.company} — ${experience.role}`}
            style={{ textAlign: 'right', paddingRight: '2.5rem' }}
          >
            <div className="timeline-company">{experience.company}</div>
            <div className="timeline-role">{experience.role}</div>
            <div className="timeline-meta">
              {experience.period} · {experience.location}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-3)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              {experience.department}
            </div>
            <ul aria-label={`Key accomplishments at ${experience.company}`}>
              {experience.bullets.map((bullet, bi) => (
                <li key={bi} style={{ flexDirection: 'row-reverse', textAlign: 'right' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.1rem' }}>◂</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        )}
      </div>

      {/* Center node */}
      <div className="timeline-node" style={{ gridColumn: 2 }}>
        <div className="timeline-dot" aria-hidden="true"></div>
      </div>

      {/* Right card slot */}
      <div style={{ gridColumn: 3 }}>
        {!isOdd && (
          <article
            className="timeline-card"
            aria-label={`${experience.company} — ${experience.role}`}
            style={{ textAlign: 'left', paddingLeft: '2.5rem' }}
          >
            <div className="timeline-company">{experience.company}</div>
            <div className="timeline-role">{experience.role}</div>
            <div className="timeline-meta">
              {experience.period} · {experience.location}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-3)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              {experience.department}
            </div>
            <ul aria-label={`Key accomplishments at ${experience.company}`}>
              {experience.bullets.map((bullet, bi) => (
                <li key={bi}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.1rem' }}>▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section accent-top-border" aria-label="Work experience">
      <div className="fade-in-up">
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          4+ years building data infrastructure across healthcare, pharma, and ad tech — from ingestion to insights.
        </p>
      </div>

      <div className="timeline" role="list" aria-label="Work experience timeline">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.company} experience={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
