export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
              GOON
            </h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              On-demand custom 3D printing. Upload, print, ship — it&apos;s that simple. Based in the cloud, delivering worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#materials" className="text-sm text-white/50 hover:text-white transition-colors">Materials</a></li>
              <li><a href="#pricing" className="text-sm text-white/50 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-white/50 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#quote-form" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a></li>
              <li><span className="text-sm text-white/50">Careers (coming soon)</span></li>
              <li><span className="text-sm text-white/50">Blog (coming soon)</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Goon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/30 hover:text-white/50 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
