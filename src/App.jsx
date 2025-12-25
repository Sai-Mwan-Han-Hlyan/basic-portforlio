import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBlobs from './components/AnimatedBlobs'
import useSectionReveal from './hooks/useSectionReveal'
import useParallaxBlobs from './hooks/useParallaxBlobs'

function App() {
  useSectionReveal()
  useParallaxBlobs()

  // Set document title and meta tags
  useEffect(() => {
    document.title = 'Sai Mwan Han Hlyan - Full-Stack Developer Portfolio'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full-stack developer specializing in MERN stack, building modern web applications with React, Node.js, and cutting-edge technologies')
    }
  }, [])

  return (
    <>
      <AnimatedBlobs />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
