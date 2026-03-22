const experiences = [
  {
    company: 'Daiichi Sankyo Inc.',
    via: 'Via Relevance Lab',
    period: 'June 2024 – Present',
    location: 'Basking Ridge, NJ',
    department: 'Azure Databricks · Azure Synapse · ADF · AWS Lambda',
    roles: [
      {
        title: 'Data Engineer',
        bullets: [
          'Engineered weekly feature engineering pipelines on Azure Databricks, processing clinical trial records through demographic joins & time-based transformations cutting time-to-model by 60% & accelerating downstream delivery.',
          'Architected HIPAA-compliant star schema models on Azure Synapse Analytics, consolidating regional healthcare datasets via ADF with RBAC and partition-level access controls enabling audit-ready clinical reporting.',
          'Designed and owned end-to-end ADF pipeline workflows across clinical and business domains, implementing dependency management, scheduling and automated retry logic, maintaining zero SLA breaches across production.',
          'Optimized Azure Synapse pipelines and SQL queries for clinical trial and pharma sales data restructuring table partitions, rewriting slow queries, eliminating redundant joins, and automating manual processes to reduce data processing time by 35% and query runtime by 40%.',
        ],
      },
      {
        title: 'Data Engineering Intern (Direct Hire)',
        bullets: [
          'Built a serverless AWS Lambda pipeline automating real-time data extraction from EDGAR, USPTO, and Tavily APIs, reducing data acquisition time from 2 hours to 8 minutes for the data intelligence team.',
          'Implemented a Python-based data quality framework at the bronze layer, detecting schema anomalies, null values, and outliers before ADLS ingestion, eliminating silent data corruption from downstream reporting.',
          'Optimized SQL queries on Azure Synapse Analytics processing millions of daily records rewriting inefficient joins, adding targeted indexes, and removing redundant aggregations to cut query runtime by 40%.',
        ],
      },
    ],
  },
  {
    company: 'Media.Net Software Services',
    via: null,
    period: 'April 2021 – Aug 2023',
    location: 'Mumbai, IN',
    department: 'SQL · Apache Spark · Hive · ETL Pipeline',
    roles: [
      {
        title: 'Data Engineer',
        bullets: [
          'Built and maintained Apache Spark pipelines processing millions of daily ad events across premium publisher networks delivering clean, structured data to analytics teams and internal reporting dashboards.',
          'Engineered large-scale data transformation workflows using Spark and Hive on daily ad events in a high-volume programmatic ads environment supporting real-time bidding analytics and publisher performance reporting.',
          'Deployed and maintained Druid-based OLAP platform for real-time ad analytics enabling sub-second query performance on millions of ad events and reducing reporting latency for internal teams.',
          'Implemented data quality validation checks on structured and semi-structured ad event data detecting anomalies, ensuring accuracy across downstream reporting pipelines supporting premium publisher & advertiser analytics.',
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
      {/* Company header */}
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

      {/* Roles */}
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
          4+ years building data infrastructure across healthcare, pharma, and ad tech — from ingestion to insights.
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
