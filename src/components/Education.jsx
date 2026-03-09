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
