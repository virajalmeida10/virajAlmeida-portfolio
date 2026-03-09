// TODO: Replace placeholder GitHub and external links with real URLs once repositories are public

const projects = [
  {
    title: 'E-Commerce Data Lakehouse Modernization',
    stack: 'Azure Databricks · PySpark · Delta Lake · Azure Data Factory',
    description:
      'Designed an end-to-end Medallion architecture pipeline ingesting e-commerce data into Azure Data Lake, processing and transforming raw data through bronze, silver, and gold layers using Apache Spark and Delta Lake.',
    tags: ['Azure', 'PySpark', 'Delta Lake', 'ADF', 'Databricks'],
    featured: true,
    // TODO: Replace '#' with the actual GitHub repository URL
    githubUrl: '#',
    // TODO: Replace '#' with the actual live demo or case study URL
    externalUrl: '#',
  },
  {
    title: 'Healthcare Data Ingestion Platform',
    stack: 'Python · REST APIs · PostgreSQL · Validation Layers',
    description:
      'Architected backend ingestion pipelines with structured validation for medical inquiry workflows, ensuring compliant, auditable data flow for healthcare analytics. Reduced manual processing effort by 60%.',
    tags: ['Python', 'REST APIs', 'PostgreSQL', 'Healthcare', 'ETL'],
    featured: false,
    // TODO: Replace '#' with the actual GitHub repository URL
    githubUrl: '#',
    // TODO: Replace '#' with the actual live demo or case study URL
    externalUrl: '#',
  },
  {
    title: 'SAP Procurement Analytics Dashboard',
    stack: 'SAP · Python · SQL · Power BI',
    description:
      'Automated SAP data sync schedulers delivering real-time KPI dashboards across procurement, vendor, and cost center data — improving financial visibility and cross-functional decision-making at scale.',
    tags: ['SAP', 'Python', 'SQL', 'Power BI', 'Analytics'],
    featured: false,
    // TODO: Replace '#' with the actual GitHub repository URL
    githubUrl: '#',
    // TODO: Replace '#' with the actual live demo or case study URL
    externalUrl: '#',
  },
  {
    title: 'Ad Performance Intelligence Platform',
    stack: 'Hive · Python · SQL · Power BI',
    description:
      'Built scalable Hive-based pipelines for keyword performance analysis and threshold optimization — driving a 10% revenue increase and 50% reduction in reporting pipeline processing time.',
    tags: ['Hive', 'Python', 'SQL', 'Power BI', 'Ad Tech'],
    featured: false,
    // TODO: Replace '#' with the actual GitHub repository URL
    githubUrl: '#',
    // TODO: Replace '#' with the actual live demo or case study URL
    externalUrl: '#',
  },
]

// GitHub SVG icon
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

// External link SVG icon
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card fade-in-up delay-${(index % 2) + 1}`}
      aria-label={project.title}
    >
      <div className="project-card-header">
        <div>
          {project.featured && (
            <span className="featured-badge" aria-label="Featured project">Featured</span>
          )}
        </div>
        <div className="project-links">
          {/* TODO: Update href values once GitHub and live URLs are available */}
          <a
            href={project.githubUrl}
            className="project-link-btn"
            aria-label={`View ${project.title} on GitHub`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            href={project.externalUrl}
            className="project-link-btn"
            aria-label={`View ${project.title} live demo or case study`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <div className="project-stack">{project.stack}</div>
      <p className="project-description">{project.description}</p>

      <div className="project-tags" role="list" aria-label={`Technologies used in ${project.title}`}>
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag" role="listitem">{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section accent-top-border" aria-label="Projects">
      <div className="fade-in-up">
        <span className="section-label">What I've Built</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of data engineering, analytics, and platform work — from lakehouse modernization to healthcare pipelines.
        </p>
      </div>

      <div className="projects-grid" role="list" aria-label="Project portfolio">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
