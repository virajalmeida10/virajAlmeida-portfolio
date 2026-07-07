const skillGroups = [
  {
    title: 'Audit & Compliance',
    skills: ['Risk-Based Audit Planning', 'Control Testing', 'IT General Controls (ITGC)', 'SOX-Aligned Governance', 'Data Protection & Anonymization', 'Regulatory Compliance', 'Access Control Reviews'],
  },
  {
    title: 'Systems Audited',
    skills: ['Salesforce', 'SAP CPI', 'Oracle/SQL Databases', 'Liferay DXP', 'Appian', 'Case Management'],
  },
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'SQL Stored Procedures', 'Data Validation & Reconciliation', 'Tableau', 'Reporting & Dashboards'],
  },
  {
    title: 'Technical & Change Management',
    skills: ['REST API Integrations', 'OSGi Modules', 'Windows & Linux Environments', 'Change/Release Management'],
  },
  {
    title: 'AI Domain Knowledge',
    skills: ['GenAI-Assisted Control Testing Awareness', 'LLM Risk & Governance Literacy', 'Prompt Engineering for Audit Automation', 'AI Use-Case Risk Assessment'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Microsoft Excel', 'Word', 'PowerPoint', 'Teams', 'Visio'],
  },
  {
    title: 'Soft Skills',
    skills: ['Written & Verbal Communication', 'Cross-Functional Stakeholder Collaboration', 'Multi-Tasking', 'Attention to Detail', 'Team Orientation'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-label="Skills and technologies">
      <div className="skills-inner">
        <div className="fade-in-up">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A field-tested toolkit spanning ERP/CRM control validation, SQL-driven compliance reporting, and GenAI-aware audit practices.
          </p>
        </div>

        <div className="skills-table fade-in-up delay-1" role="list" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="skills-row"
              role="listitem"
              aria-label={`${group.title} skills`}
            >
              <div className="skills-row-label">{group.title}</div>
              <div className="skills-row-pills" role="list" aria-label={`${group.title} skill list`}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill" role="listitem">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
