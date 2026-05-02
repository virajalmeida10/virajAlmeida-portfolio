const experiences = [
  {
    company: 'Relevance Lab',
    via: 'Consulting Client: Daiichi Sankyo Inc.',
    period: 'June 2024 – March 2026',
    location: 'Basking Ridge, NJ',
    department: 'Azure Databricks · ADF · Snowflake · AWS Lambda · dbt',
    roles: [
      {
        title: 'Data Engineer',
        bullets: [
          'Architected an Azure Databricks medallion lakehouse unifying relational, CRM, and file-based sources via incremental ADF pipelines — cutting data latency from 30 days to 24 hours and enabling sales, territory, and commercial reporting for 5+ cross-functional teams.',
          'Enforced data contracts via dbt and PySpark validation across Bronze/Silver/Gold layers, intercepting 5,000+ bad records monthly and eliminating downstream reporting failures across all production datasets.',
          'Optimized Spark pipelines on Databricks with tuned partitioning, cluster sizing, and Parquet I/O — processing 3.5M+ daily records with 3x throughput improvement, 30% runtime reduction, and 20% compute cost savings.',
          'Slashed pharmacovigilance data acquisition from 5 hours to 8 minutes (98% faster) by building a serverless AWS Lambda pipeline parallelizing 3 external APIs, directly unblocking the data science team\'s modeling pipeline.',
          'Designed audit-ready staging and mart-layer SQL models on Snowflake in version-controlled SQL, powering Power BI dashboards via daily scheduled runs and eliminating a 3-day reporting lag for 3+ business teams.',
        ],
      },
    ],
  },
  {
    company: 'Media.Net Software Services',
    via: null,
    period: 'April 2021 – August 2023',
    location: 'Mumbai, MH',
    department: 'Apache Kafka · Spark Streaming · Airflow · PySpark · SQL · Hive',
    roles: [
      {
        title: 'Data Engineer',
        bullets: [
          'Engineered event-driven Kafka, Spark Streaming, and Airflow pipelines ingesting millions of ad events daily — accelerating campaign performance reporting across cross-functional teams through stakeholder-facing analytics dashboards.',
          'Processed publisher PDFs and images using PySpark, extracting unstructured data and classifying text content to enrich contextual ad targeting pipelines, improving ad relevance by 25% across publisher inventory.',
          'Identified and resolved 35+ critical pipeline failures through systematic SQL auditing and monitoring — restoring data accuracy within hours and maintaining 99%+ reporting reliability across all production pipelines.',
          'Unified MySQL and Hive data sources via Python and SQL transformations, building a single reporting layer that eliminated manual reconciliation for 3 cross-functional teams and reduced reporting preparation time by 16 hours weekly.',
        ],
      },
    ],
  },
  {
    company: 'EbixCash Financial Technologies',
    via: null,
    period: 'May 2020 – April 2021',
    location: 'Mumbai, MH',
    department: 'Python · SQL · Apache Airflow · ETL',
    roles: [
      {
        title: 'ETL Developer',
        bullets: [
          'Developed Python and SQL ETL pipelines consolidating credit records, transaction patterns, and threat intelligence across 3 business lines and 4+ source systems — strengthening fraud detection coverage across a $4B+ payment exchange network.',
          'Automated hourly fraud detection workflows in Apache Airflow monitoring 500K+ daily transactions across remittance, forex, and insurance streams — cutting fraud signal latency from 24 hours to under 1 hour and enabling same-day analyst response.',
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
          5+ years building data infrastructure across pharma, fintech, and adtech — from ingestion to executive insights.
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
