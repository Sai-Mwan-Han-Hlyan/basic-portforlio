const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t-2 border-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="accent-dot" />
            <p className="mono text-sm font-bold">
              © {currentYear} SAI MWAN HAN HLYAN
            </p>
          </div>
          <p className="text-gray-500 text-xs mono">
            BUILT WITH REACT • VITE • TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
