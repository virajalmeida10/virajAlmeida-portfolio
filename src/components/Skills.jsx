const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MSSQL', 'Redis', 'Qdrant (Vector Search)'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'AWS S3/CloudFront', 'GitHub Actions (CI/CD)', 'Render', 'Vercel', 'Neon'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Spring AI', 'React', 'Liferay DXP', 'Kafka'],
  },
  {
    title: 'Enterprise & Integration',
    skills: ['OSGi', 'Service Builder', 'Kaleo Workflow', 'JAXB', 'SOAP', 'REST APIs', 'Stripe'],
  },
  {
    title: 'Practices',
    skills: ['OAuth2 + JWT', 'RAG', 'Vector Embeddings / Semantic Search', 'JUnit', 'Mockito', 'Testcontainers'],
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
