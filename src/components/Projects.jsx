import { useState } from 'react'

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

const businessQuestions = [
  'Which restaurant made the most revenue last week?',
  'Which customers haven\'t ordered in 3 months and are at risk of churning?',
  'Are customers complaining about delivery or food quality — and at which location?',
]

const solutionSteps = [
  {
    num: '01',
    title: 'Dual Ingestion Paths',
    content: 'Live orders streamed real-time through Azure Event Hubs into a Bronze streaming table. Historical records and master data synced from Azure SQL via Lakeflow Connect with automatic CDC — source changes flowed through without manual intervention.',
  },
  {
    num: '02',
    title: 'Silver — Clean & Transform',
    content: 'Parsed timestamps, extracted time features, exploded item-level order details into individual rows, enforced data quality rules that dropped bad records automatically, and joined everything into a clean relational model.',
  },
  {
    num: '03',
    title: 'AI-Powered Sentiment',
    content: 'Every customer review was run through an LLM using Databricks\' ai_query() function inside a SQL pipeline — extracting structured sentiment and categorising issues like delivery, food quality, pricing, and portion size. No custom ML model required.',
  },
  {
    num: '04',
    title: 'Gold — Business-Ready',
    content: 'Three aggregated tables: daily sales KPIs, a 360° customer profile with loyalty tiers, and restaurant-level review analytics — all feeding two Databricks SQL dashboards that updated automatically as new data arrived.',
  },
]

const outcomes = [
  {
    label: 'Real-Time Order Visibility',
    desc: 'Orders visible as they happened — no waiting for end-of-day reports.',
  },
  {
    label: 'Automated Loyalty Tiers',
    desc: 'Bronze / Silver / Gold / Platinum tiers calculated on lifetime spend, enabling targeted promotions.',
  },
  {
    label: 'Churn Risk Flagging',
    desc: 'Customers with no order in 90+ days automatically marked is_at_risk — a ready-made re-engagement list for marketing.',
  },
  {
    label: 'AI Review Intelligence',
    desc: 'Every review auto-categorised — management could see delivery complaint spikes at specific locations at a glance.',
  },
  {
    label: 'Two Live Dashboards',
    desc: 'Sales performance (revenue, peak hours, top items) and review insights (sentiment trends, issue breakdown) — both updated automatically, no manual jobs.',
  },
]

const toolReasons = [
  {
    tool: 'Databricks',
    question: 'Why Databricks — not separate tools?',
    answer: 'This problem had three things happening simultaneously: streaming data, batch data, and ML/AI. Most tools only handle one well. Databricks handles all three natively on the same platform — no separate Kafka consumer, no standalone Spark cluster, no separate ML platform. Pipelines, SQL, AI models, and dashboards all in one place. That drastically reduced operational complexity.',
  },
  {
    tool: 'Spark Declarative Pipelines',
    question: 'Why not notebooks or Airflow?',
    answer: 'Notebooks require manually managing execution order, retries, and failures. Airflow means writing DAGs and managing another piece of infrastructure. Spark Declarative Pipelines let me define what the output should be — dependency resolution, automatic retries, data quality tracking, and lineage all come built-in. Massive productivity gain.',
  },
  {
    tool: 'Delta Lake',
    question: 'Why not plain Parquet or Snowflake?',
    answer: 'Delta Lake provided ACID transactions, time travel, and schema enforcement on top of cloud object storage — capabilities that traditionally only existed in expensive proprietary warehouses. Snowflake would have been costlier and required moving data out of Azure storage into Snowflake\'s own layer. With Delta Lake on ADLS, data stays in one place and Databricks queries it directly.',
  },
  {
    tool: 'ai_query()',
    question: 'Why not a custom ML model for sentiment?',
    answer: 'Training a custom classifier requires labelled data, MLflow tracking, model deployment, and endpoint management — significant overhead. ai_query() let me call a production-grade LLM inline from a SQL query and get structured JSON back in the same pipeline. Pragmatic, fast, and highly accurate for this data volume. If volume scaled to millions, the trade-off would be different — but for this use case it was the right call.',
  },
  {
    tool: 'Azure Event Hubs',
    question: 'Why Event Hubs over self-managed Kafka?',
    answer: 'Event Hubs is fully managed and Kafka-protocol compatible — I wrote standard Kafka consumer code and it just worked, with zero cluster management. Running a self-managed Kafka cluster on Azure would have introduced unnecessary infrastructure overhead for what was essentially a streaming ingestion problem that Event Hubs solves completely out of the box.',
  },
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

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0 }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Projects() {
  const [openTool, setOpenTool] = useState(null)

  const toggle = (i) => setOpenTool(openTool === i ? null : i)

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

          {/* ── Header ── */}
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

          {/* ── Architecture diagram ── */}
          <div className="project-diagram-wrapper" aria-label="Project architecture diagram">
            <img
              src={DIAGRAM_URL}
              alt="Databricks Lakehouse medallion architecture: Bronze (raw), Silver (cleaned), Gold (analytics-ready) pipeline flow"
              className="project-diagram"
              loading="lazy"
            />
          </div>

          {/* ── Narrative body ── */}
          <div className="proj-narrative">

            {/* Problem + Solution two-col */}
            <div className="proj-two-col">

              {/* The Problem */}
              <div className="proj-panel">
                <h4 className="proj-panel-title">
                  <span className="proj-panel-accent">01</span>
                  The Problem
                </h4>
                <p className="proj-panel-text">
                  A multi-location restaurant chain operating across the UAE had data scattered everywhere — live orders
                  coming in through a POS system, customer records sitting in a SQL database, and reviews being collected
                  separately. None of it was connected.
                </p>
                <p className="proj-panel-text" style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
                  The business couldn't answer:
                </p>
                <div className="proj-questions" role="list">
                  {businessQuestions.map((q, i) => (
                    <div key={i} className="proj-question" role="listitem">
                      <span className="proj-question-mark" aria-hidden="true">?</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
                <p className="proj-panel-text" style={{ marginTop: '1rem' }}>
                  Data existed in silos with no unified pipeline, no quality enforcement, and no analytics layer.
                  Decision-making was either delayed or based on gut feeling.
                </p>
              </div>

              {/* Divider */}
              <div className="proj-col-divider" aria-hidden="true" />

              {/* How I Solved It */}
              <div className="proj-panel">
                <h4 className="proj-panel-title">
                  <span className="proj-panel-accent">02</span>
                  How I Solved It
                </h4>
                <div className="proj-steps" role="list">
                  {solutionSteps.map((step) => (
                    <div key={step.num} className="proj-step" role="listitem">
                      <div className="proj-step-num" aria-hidden="true">{step.num}</div>
                      <div>
                        <div className="proj-step-title">{step.title}</div>
                        <p className="proj-step-text">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── The Outcome ── */}
            <div className="proj-outcome-section">
              <h4 className="proj-section-title">
                <span className="proj-panel-accent">03</span>
                The Outcome
              </h4>
              <div className="proj-outcome-grid" role="list">
                {outcomes.map((item) => (
                  <div key={item.label} className="proj-outcome-item" role="listitem">
                    <div className="proj-outcome-check" aria-hidden="true">✓</div>
                    <div>
                      <div className="proj-outcome-label">{item.label}</div>
                      <p className="proj-outcome-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Why These Tools ── */}
            <div className="proj-why-section">
              <h4 className="proj-section-title">
                <span className="proj-panel-accent">04</span>
                Why These Tools — Not Something Else?
              </h4>
              <div className="proj-why-list" role="list">
                {toolReasons.map((item, i) => (
                  <div key={item.tool} className="proj-why-item" role="listitem">
                    <button
                      className={`proj-why-header${openTool === i ? ' open' : ''}`}
                      onClick={() => toggle(i)}
                      aria-expanded={openTool === i}
                      aria-controls={`why-body-${i}`}
                    >
                      <span className="proj-why-tool">{item.tool}</span>
                      <span className="proj-why-question">{item.question}</span>
                      <ChevronIcon open={openTool === i} />
                    </button>
                    {openTool === i && (
                      <div id={`why-body-${i}`} className="proj-why-body">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tech stack ── */}
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
