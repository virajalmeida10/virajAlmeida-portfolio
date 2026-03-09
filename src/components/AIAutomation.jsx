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
      </div>
    </section>
  )
}
