import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/saimwanhanhlyan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'MESSAGE SENT SUCCESSFULLY!',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'ERROR. PLEASE EMAIL DIRECTLY.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-reveal">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="mono text-sm text-[#00ff88] font-bold">[04]</span>
              <h2 className="brutalist-heading text-5xl md:text-7xl">
                LET'S CONNECT
              </h2>
            </div>
            <div className="accent-line-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-xl text-gray-300">
                I'm always excited to discuss new projects, creative ideas, or opportunities
                to create something amazing together.
              </p>

              <div className="space-y-4">
                <div className="card-brutalist p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#00ff88]" />
                    <div>
                      <h3 className="font-black mono text-sm mb-1">EMAIL</h3>
                      <a
                        href="mailto:saimwanhanhlyan@gmail.com"
                        className="text-[#00ff88] hover:text-white transition"
                      >
                        saimwanhanhlyan@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-brutalist p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#00ff88]" />
                    <div>
                      <h3 className="font-black mono text-sm mb-1">PHONE</h3>
                      <a
                        href="tel:0617369017"
                        className="text-[#00ff88] hover:text-white transition"
                      >
                        0617369017
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-brutalist p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#00ff88]" />
                    <div>
                      <h3 className="font-black mono text-sm mb-1">LOCATION</h3>
                      <p className="text-gray-300">Bangkok, Thailand</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/Sai-Mwan-Han-Hlyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutalist-primary px-6 py-3 text-sm"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com/in/sai-mwan-han-hlyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutalist-outline px-6 py-3 text-sm"
                >
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-brutalist-accent p-8">
              <h3 className="text-2xl font-black mb-6 mono">SEND MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold mono mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full input-brutalist"
                    placeholder="Your name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold mono mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full input-brutalist"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold mono mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full input-brutalist resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 border-2 font-bold mono text-sm ${
                      status.type === 'success'
                        ? 'bg-[#00ff88]/10 border-[#00ff88] text-[#00ff88]'
                        : 'bg-[#ff0055]/10 border-[#ff0055] text-[#ff0055]'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-brutalist-primary px-8 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
