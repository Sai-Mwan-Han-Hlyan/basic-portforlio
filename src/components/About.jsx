const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-reveal">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="mono text-sm text-[#00ff88] font-bold">[01]</span>
              <h2 className="brutalist-heading text-5xl md:text-7xl">
                ABOUT ME
              </h2>
            </div>
            <div className="accent-line-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer currently pursuing my
                Bachelor's degree in <span className="text-white font-bold">Information and Communication Technology</span> at
                Rangsit University.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive on turning complex problems into elegant solutions through code.
                With expertise in the <span className="text-[#00ff88] font-bold mono">MERN stack</span> and modern web technologies,
                I focus on building responsive, user-centric applications that make a real impact.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="tag-brutalist">PROBLEM SOLVER</span>
                <span className="tag-accent">FAST LEARNER</span>
                <span className="tag-brutalist">TEAM PLAYER</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="card-brutalist p-6 relative corner-accent">
                <div className="flex items-start gap-4">
                  <div className="text-[#00ff88] text-2xl font-black">[EDU]</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 mono">
                      EDUCATION
                    </h3>
                    <p className="text-white font-bold">Rangsit University</p>
                    <p className="text-gray-400 text-sm">
                      BSc in Information & Communication Technology
                    </p>
                    <p className="text-gray-500 text-xs mono mt-2">JAN 2023 - PRESENT</p>
                  </div>
                </div>
              </div>

              <div className="card-brutalist-accent p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="text-[#00ff88] text-2xl font-black">[WIN]</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 mono">
                      ACHIEVEMENT
                    </h3>
                    <p className="text-white font-bold">
                      Final Round Selection
                    </p>
                    <p className="text-gray-400 text-sm">CIMSO-RSU ERP Hackathon</p>
                    <p className="text-gray-500 text-xs mono mt-2">RANGSIT UNIVERSITY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
