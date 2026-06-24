'use client'

export default function Hero() {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lattice-bg">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-mint/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sand/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand/30 rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
          <span className="text-sm font-medium text-dark-gray tracking-wide uppercase">Coming Soon</span>
        </div>

        {/* Company Name */}
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
          <span className="gradient-sky bg-clip-text text-transparent">GOON</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-dark-gray/80 mb-6 italic" style={{ fontFamily: 'var(--font-lora), Georgia' }}>
          Custom 3D Printing, On Demand
        </p>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-dark-gray/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload any design. Choose your material and finish. We print, quality-check, and ship it to your door — fast, affordable, and with no minimum order.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToQuote}
            className="px-8 py-4 bg-sky-blue text-white font-semibold rounded-xl hover:bg-sky-blue/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Request a Quote
          </button>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white/80 text-charcoal font-semibold rounded-xl border border-sand/30 hover:bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            See How It Works
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-dark-gray/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
