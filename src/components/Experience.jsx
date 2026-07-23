const experiences = [
  {
    company: 'Daiichi Sankyo',
    via: null,
    period: 'June 2024 – March 2026',
    location: 'Basking Ridge, NJ',
    department: 'Spring Boot · Spring AI · Kubernetes · React/TypeScript',
    roles: [
      {
        title: 'Software Engineer',
        bullets: [
          'Delivered an enterprise RAG document-assistant chatbot end-to-end on Spring Boot and Spring AI, orchestrating a vector database with LLM APIs to resolve employee and vendor queries against internal documentation, shipped as an independently scalable microservice on Kubernetes.',
          'Hardened the AI assistant with role-based access control by validating Liferay-issued JWTs and filtering restricted content at retrieval time, guaranteeing unauthorized documents never reached the model.',
          'Built master-data sync for a 3,000+ user e-procurement platform via Java/OSGi on SAP APIs, JAXB parsing, Service Builder persistence to MSSQL, with scheduled delta/full loads keeping cost-center, department, and org data accurate.',
          'Built a full-stack content publishing platform in React/TypeScript and Spring Boot: REST content-creation API, multipart image upload to S3/CDN, and a filterable responsive gallery UI spanning JPA schema to frontend.',
          'Developed a custom MVC portlet on Liferay DXP for a regulated medical-access portal, adding JavaScript validation, secure uploads, reCAPTCHA, Service Builder persistence, and a Kaleo approval workflow with automated email alerts.',
        ],
      },
    ],
  },
  {
    company: 'Media.net Software Services',
    via: null,
    period: 'April 2021 – August 2023',
    location: 'Mumbai, MH',
    department: 'Golang · Kafka · Redis · High-Throughput Ad Delivery',
    roles: [
      {
        title: 'Web Developer',
        bullets: [
          'Ported a high-traffic ad-serving system (2.5k QPS) off PHP onto Golang, rewriting 30,000+ lines to achieve a 25% performance gain and 10% revenue lift, while lifting Go module test coverage from 30% to 75%.',
          'Designed a multi-tier caching layer (in-process + Redis) paired with a Kafka-driven cache invalidation service, keeping data version-consistent across distributed service instances and removing stale-read issues in production ad delivery.',
          'Drove development of lightweight JavaScript ad modules shipped to publisher pages under a 100ms execution budget, together with low-latency APIs returning ad payloads in both JSON and VAST XML formats.',
          'Engineered the client-side JavaScript integration on publisher pages to consume those JSON and VAST XML payloads and render ad content within the same sub-100ms execution budget.',
          'Created the Compact URL Service, cutting click-tracking URL length by 40–50% via binary-packed, encoded parameters that mask internal campaign identifiers without sacrificing redirect performance.',
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
          4+ years engineering AI-powered enterprise platforms, distributed backend systems, and high-throughput ad-tech infrastructure — from Spring AI microservices to Golang rewrites at scale.
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
