const experiences = [
  {
    company: 'Relevance Lab',
    client: 'Client: Daiichi Sankyo Inc.',
    role: 'Associate Software Engineer',
    department: 'Databricks · PySpark · Data Lake · Data Governance',
    period: 'May 2025 – Present',
    location: 'Basking Ridge, NJ',
    bullets: [
      'Collaborated with data science and clinical teams to design and maintain feature engineering pipelines on Azure transforming raw data into structured datasets that directly fed into predictive modeling and drug performance analytics.',
      'Designed and optimized Azure Synapse pipelines to process clinical trial and pharma sales data reducing data processing time by 35% and enabling faster reporting for business teams.',
      'Architected data models on Azure Data Lake and Azure Synapse consolidating healthcare datasets from multiple regional sources improving data accessibility and supporting global compliance reporting.',
      'Supported data quality validation checks on incoming healthcare datasets using Python and AWS Glue identifying anomalies early in the pipeline to maintain data integrity aligned with pharma compliance standards.',
    ],
  },
  {
    company: 'Daiichi Sankyo Inc.',
    client: null,
    role: 'Data Engineer Intern',
    department: 'Lambda · API Gateway · Azure Data Factory · Synapse',
    period: 'June 2024 – May 2025',
    location: 'Basking Ridge, NJ',
    bullets: [
      'Developed a serverless data ingestion pipeline using AWS Lambda to extract data from external APIs (EDGAR, USPTO, & Tavily) enabling the data intelligence team to query real-time financial and patent data through a unified agent interface.',
      'Designed and monitored Azure Data Factory pipelines to ingest clinical and operational data from internal systems into Azure Data Lake, ensuring clean, timely data availability for downstream analytics and reporting teams.',
      'Optimized SQL queries on Azure Synapse Analytics to support data transformation workflows across sales and trial datasets helping reduce data processing time and improving report accuracy for business stakeholders.',
      'Contributed to a large-scale Liferay enterprise Java web application, supporting backend development.',
    ],
  },
  {
    company: 'Media.Net Software Services',
    client: null,
    role: 'Data Engineer',
    department: 'SQL · Apache Spark · Hive · ETL Pipeline',
    period: 'April 2021 – August 2023',
    location: 'Mumbai, IN',
    bullets: [
      'Developed and maintained Apache Spark data pipelines to process ad traffic data across publisher websites supporting analytics teams and internal reporting dashboards with clean and timely data.',
      'Worked with Hive, Spark, and MySQL to help ingest and transform large volumes of daily ad event data gaining hands-on experience with big data pipeline development in a high-scale programmatic advertising environment.',
      'Setup and maintained OLAP platforms including Druid for real-time ad analytics helping internal teams access faster reporting insights and learning performance tuning practices in a high-volume programmatic environment.',
      'Implemented data quality checks and validation logic on structured and semi-structured ad event data ensuring accuracy in downstream reporting pipelines and developing a solid understanding of data reliability best practices.',
    ],
  },
]

function ExperienceCard({ experience, index }) {
  return (
    <article
      className={`exp-card fade-in-up delay-${(index % 3) + 1}`}
      aria-label={`${experience.company} — ${experience.role}`}
    >
      <div className="exp-card-top">
        <div className="exp-card-top-left">
          <div className="exp-company">{experience.company}</div>
          {experience.client && (
            <div className="exp-client">{experience.client}</div>
          )}
        </div>
        <div className="exp-period">{experience.period}</div>
      </div>

      <div className="exp-role-row">
        <div className="exp-role">{experience.role}</div>
        <div className="exp-location">{experience.location}</div>
      </div>

      <div className="exp-dept">{experience.department}</div>

      <ul className="exp-bullets" aria-label={`Key accomplishments at ${experience.company}`}>
        {experience.bullets.map((bullet, i) => (
          <li key={i}>
            <span className="exp-bullet-mark" aria-hidden="true">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
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
