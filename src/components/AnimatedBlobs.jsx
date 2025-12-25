const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 grid-brutalist">
      {/* Brutalist corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#00ff88] opacity-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#00ff88] opacity-20" />

      {/* Subtle moving accent line */}
      <div
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30"
        style={{
          animation: 'drift 10s ease-in-out infinite',
        }}
      />
    </div>
  )
}

export default AnimatedBlobs
