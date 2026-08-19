const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Golang', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    skills: ['MSSQL', 'PostgreSQL', 'Redis', 'Qdrant'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Kubernetes (Deployments, Probes, ConfigMaps)', 'AWS S3/CloudFront', 'GitHub Actions'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Spring AI', 'React', 'Kafka'],
  },
  {
    title: 'Practices',
    skills: ['OAuth2 + JWT Validation', 'RAG', 'SAGA/Outbox', 'JUnit', 'Mockito', 'Testcontainers'],
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
            A production-tested stack spanning RAG pipelines, distributed backend systems, and full-stack applications shipped end to end.
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
