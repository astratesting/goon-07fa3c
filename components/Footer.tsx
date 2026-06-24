export default function Footer() {
  return (
    <footer className="bg-goon-dark border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-black text-white mb-2"
              style={{ fontFamily: 'var(--font-archivo)' }}
            >
              GOON
            </h3>
            <p className="text-sm text-white/30" style={{ fontFamily: 'var(--font-satoshi)' }}>
              Your space. Your style. Your community.
            </p>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/30" style={{ fontFamily: 'var(--font-satoshi)' }}>
              West Hollywood, CA
            </p>
            <p className="text-xs text-white/15 mt-1" style={{ fontFamily: 'var(--font-satoshi)' }}>
              First location — opening soon
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-white/15" style={{ fontFamily: 'var(--font-satoshi)' }}>
            &copy; {new Date().getFullYear()} Goon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
