const industries = [
  {
    icon: '🏥',
    title: 'Healthcare',
    description:
      'Enterprise healthcare data platforms, compliant medical inquiry workflows, and HIPAA-aware system design for analytics at scale.',
  },
  {
    icon: '📊',
    title: 'Ad Technology',
    description:
      'Programmatic bidding analytics, keyword performance optimization, and revenue pipeline automation across high-volume ad platforms.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    description:
      'Data lakehouse modernization, Medallion architecture implementation, and real-time inventory and sales analytics on Azure.',
  },
  {
    icon: '💊',
    title: 'Pharmaceuticals',
    description:
      'Global enterprise procurement systems, Liferay DXP web applications, and workflow automation at scale for a Fortune 500 pharma company.',
  },
  {
    icon: '☁️',
    title: 'SaaS & Cloud',
    description:
      'Cloud-native data engineering on Azure and AWS, scalable pipeline orchestration, and multi-tenant data platform design.',
  },
  {
    icon: '💹',
    title: 'Financial Analytics',
    description:
      'KPI dashboard delivery, procurement cost analytics, SAP financial data integration, and cost reduction through intelligent threshold optimization.',
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

        <div className="industry-grid" role="list" aria-label="Industries worked in">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`industry-tile fade-in-up delay-${(i % 3) + 1}`}
              role="listitem"
              aria-label={`${industry.title} industry experience`}
            >
              <span className="industry-tile-icon" aria-hidden="true">{industry.icon}</span>
              <h3 className="industry-tile-title">{industry.title}</h3>
              <p className="industry-tile-desc">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
