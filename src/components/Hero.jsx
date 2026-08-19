import { useEffect, useRef, useState } from 'react'

function useTypewriter(phrases, typeSpeed = 55, deleteSpeed = 30, pauseMs = 2200) {
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
    const ACCENT = '96, 165, 250'
    const PARTICLE_COUNT = 90
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
        this.opacity = Math.random() * 0.4 + 0.1
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
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12
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
  'Building Stanza — an AI-powered booking platform.',
  'Shipping enterprise RAG pipelines with Spring AI & Qdrant.',
  'Securing retrieval with OAuth2 JWTs and payload-level filters.',
  'Designing concurrency-safe systems in Java, React & Kubernetes.',
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

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true" />
          Open to Software Engineering roles
        </div>

        <h1 className="hero-headline" aria-label="Viraj Almeida">
          Viraj <span>Almeida</span>
        </h1>

        <div className="hero-typewriter" aria-live="polite" aria-label="Dynamic specialisation">
          <span>{typewriterText}</span>
          <span className="cursor" aria-hidden="true"></span>
        </div>

        <div className="hero-cta">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => handleCTAClick(e, '#projects')}
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

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}
