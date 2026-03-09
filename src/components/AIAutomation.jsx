const aiCapabilities = [
  {
    icon: '🤖',
    title: 'AutoML Pipelines',
    description:
      'Multi-agent orchestration with Langchain for automated pipeline management — self-healing workflows that adapt to schema drift and data anomalies.',
  },
  {
    icon: '💬',
    title: 'LLM Query Generation',
    description:
      'Natural language to SQL using RAG pipelines and vector databases — enabling business users to query data warehouses in plain English.',
  },
  {
    icon: '🔍',
    title: 'Anomaly Detection',
    description:
      'AI-powered data quality checks and intelligent alerting — proactive monitoring that catches data integrity issues before they reach dashboards.',
  },
  {
    icon: '⚡',
    title: 'Smart Orchestration',
    description:
      'Intelligent scheduling and adaptive pipeline management — dynamic resource allocation and priority-based execution across distributed workloads.',
  },
]

export default function AIAutomation() {
  return (
    <section id="ai-automation" className="ai-section" aria-label="AI and automation capabilities">
      <div className="ai-inner">
        <div className="fade-in-up">
          <span className="section-label">AI-Driven Engineering</span>
          <h2 className="section-title">Intelligent Engineering</h2>
        </div>

        <div className="ai-grid">
          {/* Left: editorial */}
          <div className="ai-editorial fade-in-up delay-1">
            <p>
              The next generation of data infrastructure isn't just <strong>faster</strong> — it's <strong>smarter</strong>.
              I build data systems that incorporate agentic AI patterns to automate decision-making,
              reduce operational overhead, and surface insights without manual intervention.
            </p>
            <p>
              From <strong>Langchain-powered multi-agent orchestrators</strong> that manage pipeline
              lifecycle events, to <strong>RAG pipelines</strong> that let stakeholders query
              petabytes of data in plain English — I bridge the gap between raw infrastructure
              and intelligent automation.
            </p>
            <p>
              My approach treats AI not as an add-on, but as a <strong>first-class architectural
              concern</strong> — embedded into pipeline design, data quality checks, and operational
              workflows from day one.
            </p>
          </div>

          {/* Right: AI cards */}
          <div className="ai-cards" role="list" aria-label="AI and automation capabilities">
            {aiCapabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`ai-card fade-in-up delay-${i + 2}`}
                role="listitem"
                aria-label={cap.title}
              >
                <div className="ai-card-icon" aria-hidden="true">{cap.icon}</div>
                <div className="ai-card-title">{cap.title}</div>
                <p className="ai-card-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="case-study-card fade-in-up delay-3" aria-label="AI pipeline automation case study">
          <div className="case-study-header">
            <div className="case-study-title-row">
              <span className="case-study-label">CASE STUDY</span>
            </div>
            <h3 className="case-study-title">Intelligent Data Pipeline Automation</h3>
            <div className="case-study-meta">
              Industry: Healthcare Analytics &nbsp;|&nbsp; Stack: Python · GPT-4 API · Apache Airflow · dbt · Snowflake · AWS Lambda
            </div>
          </div>

          <div className="case-study-body">
            <div className="case-study-block">
              <span className="case-study-section-label">THE CHALLENGE</span>
              <p className="case-study-text">
                A regional healthcare network was spending 30+ hours per week manually writing dbt transformation
                models, data quality checks, and pipeline documentation across 200+ source tables ingested from
                EHR, claims, and lab systems.
              </p>
            </div>

            <div className="case-study-block">
              <span className="case-study-section-label">WHAT WAS BUILT</span>
              <p className="case-study-text">An AI-driven metadata pipeline that automatically:</p>
              <ul className="case-study-bullets">
                <li>Scanned raw source schemas using a Python-based crawler</li>
                <li>Sent schema context + business glossary to GPT-4 API to generate dbt staging and mart models (SQL), dbt YAML schema files with column descriptions and tests, Airflow DAG templates for orchestration, and plain-English data dictionary entries for each table</li>
                <li>Validated AI-generated SQL against a test Snowflake environment using automated dry-run execution before promotion to production</li>
                <li>Pushed approved models to GitHub via API and triggered CI/CD via GitHub Actions for dbt Cloud deployment</li>
              </ul>
            </div>

            <div className="case-study-block">
              <span className="case-study-section-label">AUTOMATION STACK</span>
              <div className="case-study-stack-flow">
                {['Python orchestration', 'GPT-4 API', 'dbt Cloud', 'GitHub Actions', 'Snowflake'].map((step, i, arr) => (
                  <span key={step} className="case-study-stack-item">
                    {step}{i < arr.length - 1 && <span className="case-study-arrow"> → </span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-study-block">
              <span className="case-study-section-label">IMPACT</span>
              <ul className="case-study-impact-list">
                <li><span className="impact-check">✓</span> Reduced pipeline build time from 3 weeks → 2 days per new data source</li>
                <li><span className="impact-check">✓</span> 85% reduction in manual documentation effort</li>
                <li><span className="impact-check">✓</span> 40% fewer data quality incidents in first 90 days post-deployment</li>
                <li><span className="impact-check">✓</span> Team of 3 engineers effectively operated at the capacity of 8</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
