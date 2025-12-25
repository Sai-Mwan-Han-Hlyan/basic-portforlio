const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left max-w-4xl">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2">
            <div className="accent-dot" />
            <span className="status-available mono">AVAILABLE FOR WORK</span>
          </div>

          {/* Main Heading with Glitch Effect */}
          <h1 className="brutalist-heading text-7xl md:text-9xl mb-6 glitch">
            SAI MWAN
            <br />
            HAN HLYAN
          </h1>

          {/* Accent Line */}
          <div className="accent-line mb-6" />

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold mb-4 mono">
            FULL-STACK DEVELOPER
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl">
            Building modern web applications with clean code and bold design.
            Specialized in MERN stack & cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://github.com/Sai-Mwan-Han-Hlyan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-primary px-8 py-4 text-sm"
            >
              VIEW WORK →
            </a>
            <a
              href="https://linkedin.com/in/sai-mwan-han-hlyan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-outline px-8 py-4 text-sm"
            >
              LINKEDIN
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm mono">
            <div className="flex items-center gap-2">
              <span className="text-[#00ff88]">→</span>
              <span>BANGKOK, THAILAND</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00ff88]">→</span>
              <span>SAIMWANHANHLYAN@GMAIL.COM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8">
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}

export default Hero
