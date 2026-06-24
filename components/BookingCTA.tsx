'use client'

export default function BookingCTA() {
  return (
    <section id="booking" className="py-24 px-6 bg-goon-black">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 bg-goon-orange/10 border border-goon-orange/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-goon-orange rounded-full animate-glow-pulse" />
          <span className="text-sm font-medium text-goon-orange tracking-widest uppercase" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Launching Soon
          </span>
        </div>

        <h2
          className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight"
          style={{ fontFamily: 'var(--font-archivo)' }}
        >
          Ready When You Are
        </h2>
        <p
          className="text-white/40 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-satoshi)' }}
        >
          Bookings open on launch day. Join the waitlist and get first access to appointments, launch pricing, and exclusive early-bird perks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="px-8 py-4 bg-goon-orange text-white font-bold rounded-xl hover:bg-goon-orange/90 transition-all shadow-lg shadow-goon-orange/20 hover:shadow-goon-orange/30 hover:-translate-y-0.5 text-lg tracking-wide inline-block"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Join the Waitlist
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/15 text-white/70 font-bold rounded-xl hover:bg-white/[0.05] hover:border-white/25 transition-all text-lg tracking-wide inline-block"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
