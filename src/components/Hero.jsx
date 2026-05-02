import { useEffect, useRef, useState } from 'react'

function useTypewriter(phrases, typeSpeed = 60, deleteSpeed = 35, pauseMs = 2200) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const tick = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentPhrase.substring(0, prev.length + 1))
        if (displayText.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseMs)
          return
        }
      } else {
        setDisplayText((prev) => prev.substring(0, prev.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          return
        }
      }
    }
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs])

  return displayText
}

function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    const ACCENT = '37, 99, 235'
    const PARTICLE_COUNT = 80
    const CONNECTION_DIST = 130
    const MOUSE_REPEL_DIST = 100
    const mouse = { x: null, y: null }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.45 + 0.15
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
        if (mouse.x !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_REPEL_DIST) {
            const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST
            this.x += (dx / dist) * force * 1.5
            this.y += (dy / dist) * force * 1.5
          }
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, ${this.opacity})`
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${ACCENT}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      particles.forEach((p) => p.reset())
    })
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [canvasRef])
}

const TYPEWRITER_PHRASES = [
  'Architecting medallion lakehouse pipelines.',
  'Processing 3.5M+ daily records on Databricks.',
  'Building dbt models & data contracts at scale.',
  'Streaming millions of events with Kafka & Spark.',
  'Cutting pipeline runtimes by 91% on Azure & AWS.',
  'Transforming raw data into trusted business insights.',
]

const stats = [
  { number: '5+',  label: 'Years Experience' },
  { number: '3',   label: 'Industries Served' },
  { number: '98%', label: 'Faster Data Acquisition' },
  { number: '20%', label: 'Compute Cost Saved' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const typewriterText = useTypewriter(TYPEWRITER_PHRASES)
  useParticleCanvas(canvasRef)

  const handleCTAClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section" aria-label="Hero — introduction">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" style={{ width: '100%', height: '100%' }} />

      <div className="hero-content">

        {/* ── LEFT: identity ── */}
        <div className="hero-left">
          <h1 className="hero-name" aria-label="Viraj Almeida">
            Viraj<br />
            <span>Almeida</span>
          </h1>

          <p className="hero-role">Data Engineer</p>

          <div className="hero-typewriter" aria-live="polite" aria-label="Dynamic specialisation">
            <span>{typewriterText}</span>
            <span className="cursor" aria-hidden="true"></span>
          </div>

          <div className="hero-cta">
            <a
              href="#experience"
              className="btn-primary"
              onClick={(e) => handleCTAClick(e, '#experience')}
              aria-label="View my work"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => handleCTAClick(e, '#contact')}
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="hero-divider" aria-hidden="true" />

        {/* ── RIGHT: about ── */}
        <div className="hero-right" id="about" aria-label="About Viraj Almeida">
          <span className="section-label">About</span>

          <div className="hero-about-text">
            <p>
              Data Engineer with <strong>5+ years</strong> delivering measurable impact across <strong>pharma, fintech, and adtech</strong> — cutting pipeline runtimes by 91%, saving 20% in compute costs, and eliminating 3-day reporting lags.
            </p>
            <p>
              I architect production-grade Lakehouse pipelines, dbt models, and data quality frameworks trusted by 10+ cross-functional teams across <strong>Azure Databricks, AWS, and Snowflake</strong>. I treat data contracts and schema validation as non-negotiable, not afterthoughts — so the business always works from a single, trusted source of truth.
            </p>
          </div>

          <div className="hero-stats" role="list" aria-label="Key metrics">
            {stats.map((s) => (
              <div key={s.label} className="stat-card" role="listitem" aria-label={`${s.number} ${s.label}`}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}
