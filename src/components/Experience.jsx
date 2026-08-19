const experiences = [
  {
    company: 'Daiichi Sankyo',
    via: null,
    period: 'June 2024 – March 2026',
    location: 'Basking Ridge, NJ',
    department: 'Spring Boot · Spring AI · Qdrant · React/TypeScript',
    roles: [
      {
        title: 'Software Engineer',
        bullets: [
          'Engineered a document Q&A feature for the company\'s React portal, building a Spring Boot RAG pipeline that chunks internal docs into overlapping 500-token windows, embeds them into Qdrant, and streams grounded, citation-backed answers to a React chat interface, returning no-answer responses below a top-k similarity threshold.',
          'Secured retrieval to each caller\'s permissions by validating OAuth2 JWTs and injecting a group filter backed by a payload index on the Qdrant collection into every query, ensuring restricted documents never enter the candidate set.',
          'Delivered a content publishing module on a two-engineer team, developing a Spring Boot REST API with multipart S3 upload and CloudFront delivery, paired with a React/TypeScript (TSX) gallery featuring server-side filtering and pagination, shipped through a GitHub Actions CI/CD pipeline running unit and integration tests on every PR before Docker image build and deploy.',
          'Extended an SAP master-data sync for an e-procurement portal in Java/OSGi, parsing SOAP responses via JAXB and persisting to MSSQL through Service Builder, with nightly deltas on a last-modified watermark and a weekly full reload as a drift backstop.',
          'Built a Liferay DXP MVC portlet for a medical access-request portal, wiring a three-stage Kaleo workflow to custom Java task handlers that stamped approver, timestamp, and decision to a Service Builder audit table on every state transition.',
        ],
      },
    ],
  },
  {
    company: 'Media.net Software Services',
    via: null,
    period: 'April 2021 – August 2023',
    location: 'Mumbai, MH',
    department: 'SQL · Apache Hive · A/B Testing · DSP/SSP Integrations',
    roles: [
      {
        title: 'Product Analyst',
        bullets: [
          'Partnered with UI/UX and product stakeholders to design and analyze end-to-end A/B experiments across 6+ native ad templates and new request parameters, running the analysis in SQL and Apache Hive to drive 3–5% lifts in CTR and revenue, expand native ad inventory, and shape the product roadmap.',
          'Drove a custom cookie-sync integration from proposal to launch, authoring the PRD and running stakeholder analysis to align engineering, product, and partners, raising client match rate 21% and revenue $6.2K/day while serving as point of contact for DSP/SSP integrations.',
          'Led root-cause investigations into revenue and attribution discrepancies, using funnel analysis in Hive/SQL to trace a 9% DSP gap to browser-version issues and driving cross-functional resolution with engineering and the partner to close it to 2.5%, with recurring RCAs preventing losses of up to $20.5K/day.',
          'Built and owned analytics reporting pipelines consolidating cross-product advertiser metrics into a single view, cutting report generation from 2 days to instant access and enabling CXO-level decisions across the Ad Exchange\'s offerings.',
          'Served as point of contact for DSP/SSP integrations and cookie-sync data flows, owning these web ad-serving touchpoints end to end and ensuring GDPR/CCPA compliance on PII throughout.',
        ],
      },
    ],
  },
]

function ExperienceCard({ experience, index }) {
  return (
    <article
      className={`exp-card fade-in-up delay-${(index % 3) + 1}`}
      aria-label={`${experience.company}`}
    >
      <div className="exp-card-top">
        <div className="exp-card-top-left">
          <div className="exp-company">{experience.company}</div>
          {experience.via && (
            <div className="exp-client">{experience.via}</div>
          )}
        </div>
        <div className="exp-period">{experience.period}</div>
      </div>

      <div className="exp-meta-row">
        <div className="exp-location">{experience.location}</div>
        <div className="exp-dept">{experience.department}</div>
      </div>

      <div className="exp-roles">
        {experience.roles.map((role, i) => (
          <div key={role.title} className={`exp-role-block${i > 0 ? ' exp-role-block--secondary' : ''}`}>
            <div className="exp-role-title">{role.title}</div>
            <ul className="exp-bullets" aria-label={`Bullets for ${role.title}`}>
              {role.bullets.map((bullet, j) => (
                <li key={j}>
                  <span className="exp-bullet-mark" aria-hidden="true">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section accent-top-border" aria-label="Work experience">
      <div className="fade-in-up">
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          4+ years across enterprise RAG systems and data-driven product analysis — from Spring AI microservices grounded in Qdrant to SQL-backed A/B testing at ad-exchange scale.
        </p>
      </div>

      <div className="exp-cards">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} experience={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
