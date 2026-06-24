export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-goon-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            Find Us
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Our first home. More cities coming soon.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          {/* Map placeholder */}
          <div className="h-56 bg-goon-black/50 flex items-center justify-center border-b border-white/10">
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto text-white/15 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-white/20 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                Map coming at launch
              </p>
            </div>
          </div>

          {/* Location details */}
          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-goon-orange/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-goon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-satoshi)' }}
                    >
                      West Hollywood, CA
                    </h3>
                    <p className="text-white/30 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      First location — opening soon
                    </p>
                  </div>
                </div>
                <p
                  className="text-white/40 text-sm leading-relaxed ml-[52px]"
                  style={{ fontFamily: 'var(--font-satoshi)' }}
                >
                  We chose WeHo for a reason. It's home to one of the largest and most vibrant gay communities in the country — and it deserves a grooming space that matches.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-goon-orange/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-goon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-satoshi)' }}
                    >
                      Hours
                    </h3>
                    <p className="text-white/30 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      To be announced at launch
                    </p>
                  </div>
                </div>
                <div className="ml-[52px] space-y-2">
                  {['Monday – Friday: 10am – 8pm', 'Saturday: 9am – 7pm', 'Sunday: 10am – 5pm'].map((hour) => (
                    <p key={hour} className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {hour}
                    </p>
                  ))}
                  <p className="text-white/25 text-xs mt-3" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    * Hours may vary — final schedule posted at launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
