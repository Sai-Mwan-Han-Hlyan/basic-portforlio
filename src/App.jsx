import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
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

  return (
    <>
      <Helmet>
        <title>Sai Mwan Han Hlyan - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in MERN stack, building modern web applications with React, Node.js, and cutting-edge technologies"
        />
      </Helmet>

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
