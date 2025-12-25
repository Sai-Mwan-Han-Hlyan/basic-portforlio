import { useEffect } from 'react'

const useParallaxBlobs = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.blob')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
}

export default useParallaxBlobs
