import stanzaHome from '../assets/stanza/stanza-home.jpg'
import stanzaSearch from '../assets/stanza/stanza-search.jpg'
import stanzaDetail from '../assets/stanza/stanza-detail.jpg'
import StanzaArchitecture from './StanzaArchitecture'

const STANZA_LIVE = 'https://stanza-app-ten.vercel.app/'
const STANZA_GITHUB = 'https://github.com/virajalmeida10/stanzaApp'

const stanzaStack = ['Spring Boot', 'React/TypeScript', 'PostgreSQL', 'Claude API', 'Stripe', 'Docker']

const stanzaBullets = [
  'Built and deployed Stanza, a full-stack hotel-booking platform across Render, Vercel, and Neon with Docker and Git-based auto-deploys.',
  'Engineered secure JWT authentication with refresh-token cookies and role-based access, plus Stripe Checkout payments with webhook-driven booking confirmation and automated email receipts.',
  'Integrated an AI booking assistant using the Anthropic Claude API with structured-output intent extraction, grounding natural-language queries against live inventory to prevent hallucinated results.',
  'Designed a concurrency-safe inventory and booking engine with dynamic pricing, reservation holds, and auto-expiry, backed by a responsive React UI with advanced filtering.',
]

const repoProjects = [
  {
    title: 'databricks-lakehouse',
    description:
      'End-to-end Databricks lakehouse for a multi-location restaurant chain across the UAE — streaming and batch ingestion through a medallion architecture (bronze/silver/gold), with BI dashboards on sales performance, customer loyalty, and review sentiment.',
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
      'A live world map coloring every country by its real-time emotional "vibe," derived from news and social signals and reasoned by an AI agent.',
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
            Stanza is my flagship build — a live, full-stack marketplace shipped end to end. Below it, open-source and side projects from GitHub.
          </p>
        </div>

        <article className="flagship fade-in-up delay-1" aria-label="Stanza: Accommodation Marketplace">
          <div className="flagship-gallery">
            <a
              className="flagship-gallery-main"
              href={STANZA_LIVE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Stanza live site — homepage"
            >
              <img src={stanzaHome} alt="Stanza homepage — search stays across 60+ US cities" loading="lazy" />
            </a>
            <div className="flagship-gallery-side">
              <a
                href={STANZA_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Stanza live site — search results"
              >
                <img src={stanzaSearch} alt="Stanza search results with filters and live pricing" loading="lazy" />
              </a>
              <a
                href={STANZA_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Stanza live site — hotel detail page"
              >
                <img src={stanzaDetail} alt="Stanza hotel detail page with gallery and booking panel" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="flagship-architecture">
            <span className="flagship-architecture-label">System Architecture</span>
            <StanzaArchitecture />
          </div>

          <div className="flagship-body">
            <div className="flagship-badge-row">
              <span className="flagship-badge">Flagship Project · Live in Production</span>
              <div className="flagship-links">
                <a href={STANZA_LIVE} target="_blank" rel="noopener noreferrer" className="flagship-link">
                  Live Site ↗
                </a>
                <a href={STANZA_GITHUB} target="_blank" rel="noopener noreferrer" className="flagship-link">
                  GitHub ↗
                </a>
              </div>
            </div>

            <h3 className="flagship-title">Stanza: Full-Stack Accommodation Marketplace</h3>
            <p className="flagship-desc">
              A full-stack hotel-booking platform connecting travelers with verified stays — live search and filtering,
              Stripe-powered checkout, and an AI booking assistant that answers questions grounded in real inventory
              instead of hallucinating availability.
            </p>

            <div className="flagship-stack">
              {stanzaStack.map((tech) => (
                <span key={tech} className="skill-pill">{tech}</span>
              ))}
            </div>

            <ul className="flagship-bullets" aria-label="What I built on Stanza">
              {stanzaBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>

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
