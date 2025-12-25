import { projectsData } from '../utils/projectsData'

const ProjectCard = ({ project }) => {
  const handleCardClick = (e) => {
    if (e.target.tagName !== 'A' && !e.target.closest('a')) {
      window.open(project.link, '_blank')
    }
  }

  return (
    <div
      className="project-card"
      onClick={handleCardClick}
    >
      <div className="h-56 relative overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover project-image"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black mb-3 mono uppercase">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={index === 0 ? "tag-accent" : "tag-brutalist"}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff88] font-bold mono text-sm hover:text-white transition inline-flex items-center gap-2"
        >
          {project.linkText.toUpperCase()} <span>→</span>
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-reveal">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="mono text-sm text-[#00ff88] font-bold">[02]</span>
              <h2 className="brutalist-heading text-5xl md:text-7xl">
                FEATURED WORK
              </h2>
            </div>
            <div className="accent-line-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
