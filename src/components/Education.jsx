const educationData = [
  {
    degree: 'Master of Science in Information Systems',
    institution: 'Pace University',
    year: 'May 2025',
    coursework: [
      'Cloud Computing',
      'Infrastructure Security',
      'Database Design',
      'Data Analytics',
      'Enterprise Architecture',
    ],
    /* TODO: Replace with actual education details */
    description:
      'This program focused on the intersection of business systems and modern technology infrastructure, with deep emphasis on cloud architecture, data management, and enterprise-scale application design. Core coursework covered distributed computing environments, secure system design, and advanced database engineering — providing the architectural foundation for production-grade data platforms. Developed hands-on expertise in cloud-native tooling across AWS and Azure, directly applied to real-world data engineering work during concurrent industry roles.',
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Fr. Conceicao Rodrigues College of Engineering',
    year: 'June 2020',
    coursework: [
      'Operating Systems',
      'Java Programming',
      'Database Management Systems',
      'SDLC',
      'Data Structures & Algorithms',
    ],
    /* TODO: Replace with actual education details */
    description:
      'A rigorous four-year engineering program grounding fundamentals across systems design, programming, and data management. Coursework in database management systems and data structures built the foundation for later work in large-scale ETL pipeline design and query optimization. Java programming and SDLC exposure shaped a structured, test-driven approach to software delivery that carries through into current data engineering practice.',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section accent-top-border" aria-label="Education">
      <div className="fade-in-up">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Formal foundations in information systems and engineering — complemented by hands-on industry experience.
        </p>
      </div>

      <div className="education-grid" role="list" aria-label="Degrees earned">
        {educationData.map((edu, i) => (
          <article
            key={edu.degree}
            className={`edu-card fade-in-up delay-${i + 1}`}
            role="listitem"
            aria-label={`${edu.degree} from ${edu.institution}`}
          >
            <h3 className="edu-degree">{edu.degree}</h3>
            <div className="edu-institution">{edu.institution}</div>
            <div className="edu-year">{edu.year}</div>

            {/* TODO: Replace with actual education details */}
            <p className="edu-description">{edu.description}</p>

            <div className="edu-coursework-label">Related Coursework</div>
            <div className="edu-courses" role="list" aria-label={`Coursework at ${edu.institution}`}>
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="edu-course-tag"
                  role="listitem"
                >
                  {course}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
