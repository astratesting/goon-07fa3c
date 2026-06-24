'use client'

const tiers = [
  {
    name: 'Hobby',
    subtitle: 'For makers & students',
    price: '15',
    unit: 'per part',
    features: [
      'PLA & PETG materials',
      'Raw finish',
      'Up to 100g per part',
      '5–7 day turnaround',
      'Standard quality',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'border-sand/30',
  },
  {
    name: 'Professional',
    subtitle: 'For engineers & designers',
    price: '45',
    unit: 'per part',
    features: [
      'All standard materials',
      'Sanded or primed finish',
      'Up to 500g per part',
      '3–5 day turnaround',
      'High quality (0.1mm layers)',
      'Tolerance ±0.2mm',
    ],
    cta: 'Most Popular',
    popular: true,
    color: 'border-sky-blue',
  },
  {
    name: 'Production',
    subtitle: 'For businesses & batches',
    price: 'Custom',
    unit: 'volume pricing',
    features: [
      'All materials + Nylon/TPU',
      'All finish options',
      'Unlimited weight',
      'Priority turnaround',
      'Ultra quality (0.05mm layers)',
      'Dedicated project manager',
    ],
    cta: 'Request Quote',
    popular: false,
    color: 'border-mint/30',
  },
]

export default function Pricing() {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-6 lattice-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            Sample Pricing
          </h2>
          <p className="text-dark-gray/70 max-w-lg mx-auto">
            Transparent pricing with no hidden fees. Final cost depends on material, size, and finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl border-2 p-8 transition-all hover:shadow-lg hover:-translate-y-1 ${
                tier.popular ? 'shadow-lg border-sky-blue' : `${tier.color} shadow-sm`
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-blue text-white text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-charcoal mb-1" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
                {tier.name}
              </h3>
              <p className="text-sm text-dark-gray/60 mb-6">{tier.subtitle}</p>

              <div className="mb-6">
                {tier.price === 'Custom' ? (
                  <span className="text-3xl font-bold text-charcoal">Custom</span>
                ) : (
                  <>
                    <span className="text-sm text-dark-gray/50">from </span>
                    <span className="text-4xl font-bold text-charcoal">${tier.price}</span>
                  </>
                )}
                <span className="text-sm text-dark-gray/50 ml-2">/ {tier.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-dark-gray/70">
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToQuote}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  tier.popular
                    ? 'bg-sky-blue text-white hover:bg-sky-blue/90 shadow-md'
                    : 'bg-soft-white text-charcoal border border-sand/30 hover:bg-white hover:shadow-sm'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-dark-gray/50 mt-8">
          * Prices shown are starting rates for standard PLA prints. Final pricing depends on material, dimensions, complexity, and finish.
        </p>
      </div>
    </section>
  )
}
