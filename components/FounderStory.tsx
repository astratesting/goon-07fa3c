export default function FounderStory() {
  return (
    <section id="founder" className="py-24 px-6 bg-goon-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            Why Goon Exists
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="space-y-5 text-white/50 leading-relaxed text-base" style={{ fontFamily: 'var(--font-satoshi)' }}>
            <p>
              I spent years going to barbershops and salons where I had to mentally prepare before walking in — not because I was nervous about the haircut, but because I never knew if I'd have to explain myself that day.
            </p>
            <p>
              Would they ask why I "walk like that"? Would they assume my partner was a woman? Would the conversation drift into territory that made me want to shrink into the chair and disappear? The answer was usually yes.
            </p>
            <p>
              So I decided to build something different. <span className="text-white font-semibold">Goon</span> is the salon I wished existed — a place where gay men can show up as they are and get genuinely excellent grooming without the mental tax.
            </p>
            <p>
              We're not trying to be trendy or "edgy." We're building a neighborhood spot with real craft, real warmth, and zero asterisks. You walk in, you're home.
            </p>
            <p className="text-white/70 font-medium border-l-2 border-goon-orange/40 pl-5">
              Our mission is simple: create safe, affirming, premium grooming spaces exclusively for gay men. Not as a marketing angle — as a promise. Every product choice, every appointment flow, every detail of the space is built around you.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-goon-orange/20 flex items-center justify-center">
              <span className="text-goon-orange font-bold text-lg" style={{ fontFamily: 'var(--font-archivo)' }}>G</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                Founder
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-satoshi)' }}>
                Goon — Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
