const GITHUB_URL = 'https://github.com/virajalmeida10/databricks-lakehouse/blob/main/projects/databricks-e2e-project/README.md'
const DIAGRAM_URL =
  'https://raw.githubusercontent.com/virajalmeida10/databricks-lakehouse/main/projects/databricks-e2e-project/diagrams/pipeline_architecture.svg'

const techStack = [
  'Databricks',
  'PySpark',
  'Delta Lake',
  'Spark Declarative Pipelines',
  'Azure Event Hubs',
  'Azure SQL Database',
  'Lakeflow Connect',
  'Unity Catalog',
  'Databricks Mosaic AI',
  'Python',
  'T-SQL',
]

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section accent-top-border" aria-label="Projects">
      <div className="projects-inner">
        <div className="fade-in-up">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            End-to-end data engineering projects spanning lakehouse architecture, streaming pipelines, and cloud-native platforms.
          </p>
        </div>

        <article className="project-card-full fade-in-up delay-1" aria-label="Databricks Lakehouse E2E Project">

          {/* Header row */}
          <div className="project-card-full__header">
            <div>
              <span className="featured-badge">Featured</span>
              <h3 className="project-card-full__title">Databricks Lakehouse — End-to-End Data Platform</h3>
              <p className="project-card-full__meta">
                Restaurant Analytics · Medallion Architecture · Streaming + Batch
              </p>
            </div>
            <a
              href={GITHUB_URL}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
            >
              <GitHubIcon />
              View on GitHub
              <ExternalIcon />
            </a>
          </div>

          {/* Architecture diagram */}
          <div className="project-diagram-wrapper" aria-label="Project architecture diagram">
            <img
              src={DIAGRAM_URL}
              alt="Databricks Lakehouse medallion architecture: Bronze (raw), Silver (cleaned), Gold (analytics-ready) pipeline flow"
              className="project-diagram"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <div className="project-card-full__body">
            <div className="project-description-block">
              <p>
                A production-grade data lakehouse built on Databricks modeling a multi-location restaurant chain
                across the UAE. The platform ingests both real-time order events via <strong>Azure Event Hubs</strong> (Kafka
                protocol) and batch operational data from <strong>Azure SQL Database</strong> via Lakeflow Connect,
                processing them through a Medallion Architecture (Bronze → Silver → Gold) using <strong>Spark
                Declarative Pipelines</strong>.
              </p>
              <p>
                The Gold layer powers a <strong>Databricks SQL Dashboard</strong> tracking sales, loyalty trends,
                and customer sentiment. Sentiment analysis is handled by <strong>Databricks Mosaic AI</strong> using
                the <code>ai_query()</code> function against GPT/Meta models. The repo also includes 10 standalone
                Delta Lake concept notebooks covering time travel, schema evolution, liquid clustering, deletion
                vectors, ZORDER, and more.
              </p>
            </div>

            {/* Tech stack */}
            <div className="project-stack-block">
              <div className="project-stack-label">Tech Stack</div>
              <div className="project-stack-pills" role="list" aria-label="Technologies used">
                {techStack.map((tech) => (
                  <span key={tech} className="skill-pill" role="listitem">{tech}</span>
                ))}
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}
