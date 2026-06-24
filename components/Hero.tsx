'use client'

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-goon-orange/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-goon-magenta/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-goon-green/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Coming Soon Ribbon */}
        <div className="inline-flex items-center gap-2.5 bg-goon-orange/10 border border-goon-orange/20 rounded-full px-5 py-2 mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-goon-orange rounded-full animate-glow-pulse" />
          <span className="text-sm font-medium text-goon-orange tracking-widest uppercase" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Coming Soon
          </span>
        </div>

        {/* Brand Name */}
        <h1
          className="text-8xl md:text-[10rem] font-black tracking-tighter mb-6 leading-none text-white"
          style={{ fontFamily: 'var(--font-archivo)' }}
        >
          GOON
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-white/60 mb-10 tracking-wide"
          style={{ fontFamily: 'var(--font-satoshi)' }}
        >
          Your Space. Your Style. Your Sanctuary.
        </p>

        {/* Value Proposition */}
        <p
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-satoshi)' }}
        >
          A grooming experience designed for gay men — where you can be fully yourself, no code-switching, no compromises. Just expert care in a space that gets you.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToWaitlist}
          className="px-8 py-4 bg-goon-orange text-white font-bold rounded-xl hover:bg-goon-orange/90 transition-all shadow-lg shadow-goon-orange/20 hover:shadow-goon-orange/30 hover:-translate-y-0.5 text-lg tracking-wide"
        >
          Join the Waitlist
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-5 h-5 mx-auto text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
