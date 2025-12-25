import { useEffect } from 'react'

const useSectionReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.section-reveal')
    sections.forEach((el) => observer.observe(el))

    return () => {
      sections.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

export default useSectionReveal
