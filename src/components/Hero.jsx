import { useEffect, useRef, useState } from 'react'

// Typewriter hook — cycles through phrases with type + delete animation
function useTypewriter(phrases, typeSpeed = 60, deleteSpeed = 35, pauseMs = 2200) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => currentPhrase.substring(0, prev.length + 1))
        if (displayText.length + 1 === currentPhrase.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseMs)
          return
        }
      } else {
        // Deleting
        setDisplayText((prev) => prev.substring(0, prev.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          return
        }
      }
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed
    const timeout = setTimeout(tick, delay)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs])

  return displayText
}

// Canvas particle animation
function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const ACCENT = '0, 212, 255'
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
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.baseX = this.x
        this.baseY = this.y
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.5 + 0.2
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Subtle mouse repulsion
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
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
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
  'Designing end-to-end data pipelines.',
  'Engineering lakehouse architectures.',
  'Building agentic AI workflows.',
  'Turning raw data into real impact.',
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
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        aria-hidden="true"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="hero-content">
        {/* Available badge */}
        <div className="hero-available-badge" role="status" aria-label="Currently available for opportunities">
          <span className="dot" aria-hidden="true"></span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero-name" aria-label="Viraj Almeida">
          Viraj<br />
          <span>Almeida</span>
        </h1>

        {/* Role */}
        <p className="hero-role">
          Data Analytics &amp; Engineering Specialist
        </p>

        {/* Typewriter */}
        <div className="hero-typewriter" aria-live="polite" aria-label="Dynamic role description">
          <span>{typewriterText}</span>
          <span className="cursor" aria-hidden="true"></span>
        </div>

        {/* Tagline */}
        <p className="hero-tagline">
          Building intelligent data systems that turn complexity into clarity.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => handleCTAClick(e, '#projects')}
            aria-label="View my work — scroll to projects section"
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
            aria-label="Get in touch — scroll to contact section"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}
