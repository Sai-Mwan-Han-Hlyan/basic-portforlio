const Skills = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  }

  const languages = [
    { name: 'Burmese', level: 'NATIVE' },
    { name: 'English', level: 'C1' },
    { name: 'Thai', level: 'BASIC' },
  ]

  const certifications = [
    'Digital Literacy',
    'Web Dev Foundation',
    'Creative Coder',
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-reveal">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="mono text-sm text-[#00ff88] font-bold">[03]</span>
              <h2 className="brutalist-heading text-5xl md:text-7xl">
                TECH STACK
              </h2>
            </div>
            <div className="accent-line-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="card-brutalist p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">FRONTEND</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-item px-3 py-2 text-sm mono font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="card-brutalist p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">BACKEND</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-item px-3 py-2 text-sm mono font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card-brutalist p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">TOOLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-item px-3 py-2 text-sm mono font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card-brutalist-accent p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">LANGUAGES</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300 font-semibold">{lang.name}</span>
                    <span className="text-[#00ff88] font-bold text-sm mono">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card-brutalist p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">CERTIFIED</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2">
                    <span className="text-[#00ff88] text-lg mt-0.5">✓</span>
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="card-brutalist p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#00ff88]" />
                <h3 className="text-2xl font-black mono">SKILLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Debugging', 'Algorithms', 'Teamwork'].map((skill) => (
                  <span key={skill} className="tag-brutalist">
                    {skill.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
