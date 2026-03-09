const skillGroups = [
  {
    title: 'Languages & APIs',
    icon: '{ }',
    skills: ['Python', 'Java', 'PySpark', 'JavaScript', 'SQL', 'REST APIs', 'HTML5/CSS3'],
  },
  {
    title: 'Data & ETL',
    icon: '⟳',
    skills: ['Apache Spark', 'Hive', 'Kafka', 'ETL/ELT Pipelines', 'Data Modelling', 'Data Warehousing', 'Delta Lake'],
  },
  {
    title: 'Cloud Platforms',
    icon: '☁',
    skills: ['Microsoft Azure', 'AWS', 'Databricks', 'Snowflake', 'BigQuery', 'Azure Data Factory'],
  },
  {
    title: 'Databases',
    icon: '◫',
    skills: ['PostgreSQL', 'Hive', 'Snowflake', 'BigQuery', 'SQL Server'],
  },
  {
    title: 'Visualization & Analytics',
    icon: '▦',
    skills: ['Power BI', 'Tableau', 'KPI Dashboards', 'Data Analysis'],
  },
  {
    title: 'AI & Agentic Systems',
    icon: '◈',
    skills: ['Langchain', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'Multi-Agent Orchestration', 'LLM Integration'],
  },
]

function SkillPill({ label }) {
  return (
    <span className="skill-pill" role="listitem">
      <span className="pill-dot" aria-hidden="true"></span>
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-label="Skills and technologies">
      <div className="skills-inner">
        <div className="fade-in-up">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A curated toolkit built across 4+ years of production data engineering, enterprise software, and analytics work.
          </p>
        </div>

        <div className="skills-grid" role="list" aria-label="Skill categories">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`skill-card fade-in-up delay-${(i % 3) + 1}`}
              role="listitem"
              aria-label={`${group.title} skills`}
            >
              <div className="skill-card-title">
                <span className="skill-card-title-icon" aria-hidden="true">{group.icon}</span>
                {group.title}
              </div>
              <div className="skills-pills" role="list" aria-label={`${group.title} skill list`}>
                {group.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
