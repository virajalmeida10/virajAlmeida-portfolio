const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Golang', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Databases',
    skills: ['MSSQL', 'PostgreSQL', 'Redis', 'Vector Database', 'MinIO (S3-compatible)'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'REST APIs', 'Microservices', 'Github'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Spring AI', 'React', 'Hibernate', 'Kafka'],
  },
  {
    title: 'Concepts & Practices',
    skills: ['RAG', 'JWT/OAuth', 'SAGA & Outbox Patterns', 'Resilience4J', 'JUnit', 'Mockito', 'Git'],
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
            A production-tested stack spanning backend microservices, distributed data systems, and full-stack AI-powered applications.
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
