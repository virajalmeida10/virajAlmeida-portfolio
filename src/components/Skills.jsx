const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'PySpark', 'Pandas', 'SQL'],
  },
  {
    title: 'Big Data, Streaming & DB',
    skills: ['Apache Spark', 'Databricks', 'Kafka', 'Delta Lake'],
  },
  {
    title: 'Cloud & Platforms',
    skills: ['Microsoft Azure (ADF, ADLS Gen2)', 'AWS (Lambda, S3, Redshift)', 'GCP (BigQuery)', 'Snowflake'],
  },
  {
    title: 'Data Engineering',
    skills: ['ETL/ELT Pipelines', 'Batch & Real-Time Processing', 'Data Modeling', 'Data Warehouse', 'Airflow', 'dbt'],
  },
  {
    title: 'DevOps & Collaboration',
    skills: ['Docker', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'Databases & Visualization',
    skills: ['PostgreSQL', 'MySQL', 'Hive', 'Power BI'],
  },
  {
    title: 'Data Governance & Quality',
    skills: ['Data Contracts', 'Data Lineage', 'Schema Validation', 'HIPAA', 'GxP', 'Audit Logging'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-label="Skills and technologies">
      <div className="skills-inner">
        <div className="fade-in-up">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A battle-tested toolkit built across 5+ years of production data engineering in pharma, fintech, and adtech.
          </p>
        </div>

        <div className="skills-table fade-in-up delay-1" role="list" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="skills-row"
              role="listitem"
              aria-label={`${group.title} skills`}
            >
              <div className="skills-row-label">{group.title}</div>
              <div className="skills-row-pills" role="list" aria-label={`${group.title} skill list`}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill" role="listitem">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
