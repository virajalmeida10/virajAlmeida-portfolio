const experiences = [
  {
    company: 'Relevance Lab',
    via: 'Consulting Client: Daiichi Sankyo Inc.',
    period: 'June 2024 – March 2026',
    location: 'Basking Ridge, NJ',
    department: 'Salesforce · SCIMAX · SAP CPI · Liferay DXP · Appian',
    roles: [
      {
        title: 'Associate Consultant – IT Audit',
        bullets: [
          'Partnered with Compliance, Regulatory Affairs, and Pharmacovigilance teams to assess control risks across Salesforce, SCIMAX, and SAP CPI integrations supporting a Medical Information platform, ensuring adherence to data protection, privacy, and regulatory requirements throughout the change lifecycle.',
          'Executed control validation and risk-based testing during SIT/UAT cycles for API integrations and data transformations, identifying control exceptions and documentation gaps, and tracking remediation status to closure with process owners.',
          'Performed data mapping and reconciliation reviews for SAP master-data synchronization (cost centers, organizational units, financial master data), root-causing mapping failures and database schema discrepancies and coordinating corrective action with IT stakeholders.',
          'Reviewed business requirements, functional specifications, and user stories against defined acceptance criteria to confirm system changes maintained compliance with internal governance, audit, and IT control standards.',
          'Supported production release governance by validating QA sign-off, smoke testing, and post-deployment monitoring, ensuring change-management controls were satisfied prior to go-live on OSGi/Liferay DXP releases.',
          'Documented process flows, data-mapping specifications, and API architecture used by audit and compliance stakeholders to evaluate control effectiveness across integrated enterprise systems (Liferay DXP, Appian workflow automation).',
        ],
      },
    ],
  },
  {
    company: 'Media.net Software Services',
    via: null,
    period: 'April 2021 – August 2023',
    location: 'Mumbai, MH',
    department: 'Access Controls · SQL · Tableau · Compliance Audits',
    roles: [
      {
        title: 'Associate',
        bullets: [
          'Spearheaded implementation of user access controls, meticulously aligning permissions for comprehensive monitoring and regulatory compliance, demonstrating working knowledge of authentication protocols and access-restriction best practices.',
          'Orchestrated provisioning and de-provisioning processes for publisher accounts, incorporating rigorous database checks against audit standards and data-protection requirements, ensuring adherence to data anonymization protocols.',
          'Collaborated with the Compliance team on recurring re-audits, building SQL stored procedures to execute, verify, and validate audit numbers, strengthening compliance tracking and reporting through systematic storage of results.',
          'Analyzed publisher data and built visual audit/compliance reports in Tableau to support strategic, risk-informed decision-making on live ad products, while assessing profitability and market dynamics with product managers.',
          'Demonstrated a strong aptitude for rapidly acquiring proficiency in emerging technologies and integrating them into customer-facing, controls-sensitive environments through close collaboration with product managers.',
        ],
      },
    ],
  },
]

function ExperienceCard({ experience, index }) {
  return (
    <article
      className={`exp-card fade-in-up delay-${(index % 3) + 1}`}
      aria-label={`${experience.company}`}
    >
      <div className="exp-card-top">
        <div className="exp-card-top-left">
          <div className="exp-company">{experience.company}</div>
          {experience.via && (
            <div className="exp-client">{experience.via}</div>
          )}
        </div>
        <div className="exp-period">{experience.period}</div>
      </div>

      <div className="exp-meta-row">
        <div className="exp-location">{experience.location}</div>
        <div className="exp-dept">{experience.department}</div>
      </div>

      <div className="exp-roles">
        {experience.roles.map((role, i) => (
          <div key={role.title} className={`exp-role-block${i > 0 ? ' exp-role-block--secondary' : ''}`}>
            <div className="exp-role-title">{role.title}</div>
            <ul className="exp-bullets" aria-label={`Bullets for ${role.title}`}>
              {role.bullets.map((bullet, j) => (
                <li key={j}>
                  <span className="exp-bullet-mark" aria-hidden="true">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section accent-top-border" aria-label="Work experience">
      <div className="fade-in-up">
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          4+ years bridging IT audit, risk assessment, and regulatory compliance across pharma and digital media — validating controls from SIT/UAT through production go-live.
        </p>
      </div>

      <div className="exp-cards">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} experience={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
