const caseStudies = [
  {
    label: 'Case Study',
    title: 'SIT/UAT Risk-Based Control Validation — Medical Information Platform',
    meta: 'Industry: Pharmaceutical  |  Systems: Salesforce · SCIMAX · SAP CPI · Liferay DXP',
    challenge:
      'A Medical Information platform integrating Salesforce, SCIMAX, and SAP CPI needed continuous control validation across API integrations and data transformations — with Compliance, Regulatory Affairs, and Pharmacovigilance teams all depending on the change lifecycle staying audit-ready.',
    approachLabel: 'WHAT I DID',
    approach: [
      'Executed risk-based control testing across SIT/UAT cycles for API integrations and data transformations',
      'Root-caused SAP master-data mapping failures and schema discrepancies across cost centers, org units, and financial data',
      'Reviewed business requirements and functional specs against acceptance criteria to confirm governance and IT control adherence',
      'Validated QA sign-off, smoke testing, and post-deployment monitoring before every OSGi/Liferay DXP go-live',
    ],
    stackLabel: 'APPROACH FLOW',
    stack: ['Salesforce / SCIMAX / SAP CPI', 'SIT & UAT Testing', 'Remediation Tracking', 'Liferay DXP Go-Live'],
    impactLabel: 'IMPACT',
    impact: [
      'Control exceptions and documentation gaps identified and tracked to closure with process owners',
      'Change-management controls satisfied prior to every production release',
      'Process flows and API architecture documented for audit and compliance stakeholder review',
    ],
  },
  {
    label: 'Case Study',
    title: 'SQL-Driven Compliance Re-Audit Framework',
    meta: 'Industry: Digital Advertising  |  Stack: SQL Stored Procedures · MySQL · Tableau',
    challenge:
      "Media.net's Compliance team ran recurring re-audits on publisher accounts, but validating and reporting audit numbers was manual and inconsistent — slowing down access-control and data-protection reviews.",
    approachLabel: 'WHAT I DID',
    approach: [
      'Built SQL stored procedures to execute, verify, and validate audit numbers on a recurring cadence',
      'Implemented user access controls and de-provisioning checks aligned to data-anonymization and audit standards',
      'Analyzed publisher data and built Tableau audit/compliance reports for risk-informed decisions',
    ],
    stackLabel: 'APPROACH FLOW',
    stack: ['Publisher Database', 'SQL Stored Procedures', 'Systematic Result Storage', 'Tableau Reporting'],
    impactLabel: 'IMPACT',
    impact: [
      'Compliance tracking and reporting strengthened through systematic, repeatable validation',
      'Access provisioning aligned with authentication protocols and access-restriction best practices',
      'Audit/compliance insights delivered directly to product managers for profitability and risk decisions',
    ],
  },
]

function CaseStudyCard({ study, index }) {
  return (
    <article className={`case-study-card fade-in-up delay-${index + 1}`} aria-label={study.title}>
      <div className="case-study-header">
        <div className="case-study-title-row">
          <span className="case-study-label">{study.label}</span>
        </div>
        <h3 className="case-study-title">{study.title}</h3>
        <div className="case-study-meta">{study.meta}</div>
      </div>

      <div className="case-study-body">
        <div className="case-study-block">
          <span className="case-study-section-label">THE CHALLENGE</span>
          <p className="case-study-text">{study.challenge}</p>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{study.approachLabel}</span>
          <ul className="case-study-bullets">
            {study.approach.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{study.stackLabel}</span>
          <div className="case-study-stack-flow">
            {study.stack.map((step, i, arr) => (
              <span key={step} className="case-study-stack-item">
                {step}{i < arr.length - 1 && <span className="case-study-arrow"> → </span>}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-block">
          <span className="case-study-section-label">{study.impactLabel}</span>
          <ul className="case-study-impact-list">
            {study.impact.map((item, i) => (
              <li key={i}><span className="impact-check">✓</span> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="projects-section accent-top-border" aria-label="Audit and compliance case studies">
      <div className="projects-inner">
        <div className="fade-in-up">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Audit &amp; Compliance in Practice</h2>
          <p className="section-subtitle">
            Two engagements where risk-based testing, data validation, and audit reporting turned into measurable control outcomes.
          </p>
        </div>

        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.title} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
