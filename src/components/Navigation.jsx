import { useState, useEffect } from 'react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'WORK' },
    { href: '#skills', label: 'SKILLS' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    handleLinkClick()
  }

  return (
    <nav className={`nav-brutalist fixed w-full top-0 z-50 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="accent-dot" />
            <div className="text-lg font-black tracking-tight mono">
              SAI<span className="text-[#00ff88]">_</span>MWAN
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-bold tracking-wide mono hover:text-[#00ff88] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="btn-brutalist-primary px-4 py-2 text-xs"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button - Brutalist Style */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden border-2 border-white px-3 py-2 hover:bg-white hover:text-black transition-all mono font-bold text-xs"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-white">
          <div className="px-4 py-6 space-y-4 grid-brutalist">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block text-lg font-bold mono hover:text-[#00ff88] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="block btn-brutalist-primary px-4 py-3 text-center text-sm"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
