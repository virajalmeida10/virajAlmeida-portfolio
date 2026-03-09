const industries = [
  {
    icon: '🏥',
    title: 'Healthcare',
    summary: 'Built end-to-end data pipelines ingesting EHR and claims data across multiple hospital systems.',
    bullets: [
      'Designed HIPAA-compliant data warehousing on Snowflake with role-based access controls',
      'Reduced patient data processing latency by 60% through optimized ETL workflows in Apache Airflow',
      'Enabled clinical analytics dashboards used by 500+ care coordinators across 3 regional networks',
    ],
  },
  {
    icon: '💊',
    title: 'Pharmaceuticals',
    summary: 'Supported data infrastructure for clinical trial reporting and regulatory submissions.',
    bullets: [
      'Built automated data quality pipelines validating trial data against CDISC SDTM standards',
      'Integrated lab, pharmacy, and patient registry datasets into a unified analytical layer on AWS',
      'Reduced manual data reconciliation effort by 70%, accelerating regulatory reporting timelines',
    ],
  },
  {
    icon: '📱',
    title: 'Ad Technology',
    summary: 'Engineered high-throughput data systems processing billions of ad impression and click events daily.',
    bullets: [
      'Built real-time event streaming pipelines using Apache Kafka and Spark Structured Streaming',
      'Designed attribution and audience segmentation models powering campaign optimization for top brands',
      'Achieved sub-second reporting latency on dashboards tracking $50M+ in monthly ad spend',
    ],
  },
]

export default function IndustryExperience() {
  return (
    <section id="industries" className="industry-section" aria-label="Industry experience">
      <div className="industry-inner">
        <div className="fade-in-up">
          <span className="section-label">Domains</span>
          <h2 className="section-title">Industry Experience</h2>
          <p className="section-subtitle">
            Cross-industry data engineering experience — each domain bringing unique scale, compliance, and performance challenges.
          </p>
        </div>

        <div className="industry-grid industry-grid--three" role="list" aria-label="Industries worked in">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`industry-tile fade-in-up delay-${i + 1}`}
              role="listitem"
              aria-label={`${industry.title} industry experience`}
            >
              <span className="industry-tile-icon" aria-hidden="true">{industry.icon}</span>
              <h3 className="industry-tile-title">{industry.title}</h3>
              <p className="industry-tile-summary">{industry.summary}</p>
              <ul className="industry-tile-bullets" aria-label={`Key achievements in ${industry.title}`}>
                {industry.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
