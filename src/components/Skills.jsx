const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'PySpark', 'Java', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    title: 'Databases & Distributed Systems',
    skills: ['SQL', 'Apache Spark', 'Hive', 'Kafka', 'PostgreSQL', 'MS SQL Server'],
  },
  {
    title: 'Cloud & Platforms',
    skills: ['Microsoft Azure', 'Databricks', 'AWS', 'Azure Data Factory', 'Snowflake'],
  },
  {
    title: 'Data Engineering & Analytics',
    skills: ['ETL/ELT Pipelines', 'Data Modelling', 'PowerBI', 'Tableau'],
  },
  {
    title: 'AI & LLM Integration',
    skills: ['Claude API', 'LLM Pipelines', 'Prompt Engineering', 'Databricks Mosaic AI', 'ai_query()'],
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
            A curated toolkit built across 4+ years of production data engineering, enterprise software, and analytics work.
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
