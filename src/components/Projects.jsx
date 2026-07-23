const flagshipProjects = [
  {
    label: 'Project',
    title: 'Distributed Payment Gateway Platform',
    meta: 'Spring Boot · Spring WebFlux · Kafka · Resilience4J',
    challenge:
      'Card and Net Banking payment flows needed to hold 10k transactions/sec while staying PCI-compliant and immune to double-charges during partial failures across a 6-microservice architecture.',
    approachLabel: 'WHAT I BUILT',
    approach: [
      'Engineered a PCI-compliant distributed payment gateway on Spring Boot, Spring WebFlux, and Kafka',
      'Applied the SAGA Pattern with Outbox-guaranteed event publishing alongside Resilience4J circuit breakers across 6 microservices',
      'Delivered a webhook dispatch engine secured by HMAC-SHA256 signatures with 7-attempt exponential backoff',
      'Built a nightly batch settlement engine calculating net payouts per merchant',
    ],
    stackLabel: 'ARCHITECTURE FLOW',
    stack: ['Spring WebFlux', 'Kafka', 'SAGA + Outbox', 'Resilience4J Circuit Breakers'],
    impactLabel: 'IMPACT',
    impact: [
      'Held throughput at 10k transactions/sec under load',
      'Eliminated double-charges and preserved financial consistency during partial failures',
      'Automated merchant payout settlement on a nightly batch cadence',
    ],
  },
  {
    label: 'Project',
    title: 'Ticket Price Calculator App — AI Code-Gen SaaS',
    meta: 'Spring AI · Kubernetes · SSE (Server-Sent Events)',
    challenge:
      'Turning natural-language prompts into full working React applications in real time required streaming generated code to thousands of concurrent users while isolating build/preview environments per tenant.',
    approachLabel: 'WHAT I BUILT',
    approach: [
      'Built an AI SaaS platform on Spring Boot and Spring AI turning prompts (e.g. "Build a snake game in React") into full React applications',
      'Delivered real-time code streaming via Server-Sent Events (SSE) across 10K+ concurrent sessions at sub-200ms latency',
      'Stored generated projects in S3-compatible MinIO with a shared NFS volume so build and preview containers share files',
      'Shipped auto-updating build pods on Kubernetes, Fabric8, and Ingress for instant live previews',
    ],
    stackLabel: 'ARCHITECTURE FLOW',
    stack: ['Spring AI', 'SSE Streaming', 'MinIO + NFS', 'Kubernetes Build Pods'],
    impactLabel: 'IMPACT',
    impact: [
      'Sub-200ms latency streaming across 10K+ concurrent sessions',
      'Under 2s cold start for live previews via autoscaling build pods',
      '99.9% stream reliability at 50K+ codegen requests/day',
    ],
  },
]

const repoProjects = [
  {
    title: 'databricks-lakehouse',
    description:
      "End-to-end Databricks lakehouse for a multi-location restaurant chain across the UAE — streaming and batch ingestion through a medallion architecture (bronze/silver/gold), with BI dashboards on sales performance, customer loyalty, and review sentiment.",
    stack: ['Databricks', 'Spark Declarative Pipelines', 'Delta Lake', 'Python'],
    href: 'https://github.com/virajalmeida10/databricks-lakehouse',
  },
  {
    title: 'databricks-dlt-medallion-pipeline',
    description:
      'Sales analytics pipeline built with Databricks Delta Live Tables following the Bronze → Silver → Gold medallion architecture, with SCD Type 1/2 upserts and a star-schema gold layer for regional sales reporting.',
    stack: ['Databricks DLT', 'Python', 'Delta Lake'],
    href: 'https://github.com/virajalmeida10/databricks-dlt-medallion-pipeline',
  },
  {
    title: 'worldvibeweb',
    description:
      "A live world map coloring every country by its real-time emotional “vibe,” derived from news and social signals and reasoned by an AI agent.",
    stack: ['React', 'Vite', 'Tailwind', 'Mapbox GL', 'FastAPI'],
    href: 'https://github.com/virajalmeida10/worldvibeweb',
  },
  {
    title: 'learning-daily-tracker',
    description:
      'A spaced-repetition learning tracker for interview prep — revision-first home screen, prerequisite checklists, and local-first data with JSON export/import.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/virajalmeida10/learning-daily-tracker',
  },
]

function ProjectCard({ project, index }) {
  return (
    <article className={`case-study-card fade-in-up delay-${index + 1}`} aria-label={project.title}>
      <div className="case-study-header">
        <div className="case-study-title-row">
          <span className="case-study-label">{project.label}</span>
        </div>
        <h3 className="case-study-title">{project.title}</h3>
        <div className="case-study-meta">{project.meta}</div>
      </div>

      <div className="case-study-body">
        <div className="case-study-block">
          <span className="case-study-section-label">THE CHALLENGE</span>
          <p className="case-study-text">{project.challenge}</p>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{project.approachLabel}</span>
          <ul className="case-study-bullets">
            {project.approach.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{project.stackLabel}</span>
          <div className="case-study-stack-flow">
            {project.stack.map((step, i, arr) => (
              <span key={step} className="case-study-stack-item">
                {step}{i < arr.length - 1 && <span className="case-study-arrow"> → </span>}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{project.impactLabel}</span>
          <ul className="case-study-impact-list">
            {project.impact.map((item, i) => (
              <li key={i}><span className="impact-check">✓</span> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function RepoCard({ repo, index }) {
  return (
    <a
      href={repo.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`repo-card fade-in-up delay-${index + 1}`}
      aria-label={`${repo.title} on GitHub`}
    >
      <div className="repo-card-top">
        <h4 className="repo-card-title">{repo.title}</h4>
        <span className="repo-card-arrow" aria-hidden="true">↗</span>
      </div>
      <p className="repo-card-desc">{repo.description}</p>
      <div className="repo-card-stack">
        {repo.stack.map((tech) => (
          <span key={tech} className="skill-pill">{tech}</span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section accent-top-border" aria-label="Projects">
      <div className="projects-inner">
        <div className="fade-in-up">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Two flagship builds where distributed-systems and AI-application design turned into measurable outcomes, plus open-source projects on GitHub.
          </p>
        </div>

        {flagshipProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}

        <div className="repo-projects-header fade-in-up">
          <span className="section-label">From GitHub</span>
          <h3 className="repo-projects-title">Open-Source &amp; Side Projects</h3>
        </div>

        <div className="repo-grid" role="list" aria-label="GitHub repositories">
          {repoProjects.map((repo, i) => (
            <RepoCard key={repo.title} repo={repo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
