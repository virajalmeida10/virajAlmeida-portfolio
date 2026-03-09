import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import AIAutomation from './components/AIAutomation'
import Projects from './components/Projects'
import IndustryExperience from './components/IndustryExperience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // IntersectionObserver for scroll-triggered fade-in-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <AIAutomation />
        <Projects />
        <IndustryExperience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
