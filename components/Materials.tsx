'use client'

const materials = [
  {
    name: 'PLA',
    category: 'Standard',
    description: 'Biodegradable thermoplastic. Great for prototypes, models, and display pieces. Wide color range.',
    properties: ['Biodegradable', 'Low warp', 'Easy to print'],
    color: 'bg-sky-blue/10 border-sky-blue/30',
    accent: 'text-sky-blue',
  },
  {
    name: 'PETG',
    category: 'Functional',
    description: 'Durable and chemical-resistant. Perfect for mechanical parts, enclosures, and outdoor use.',
    properties: ['UV resistant', 'Impact proof', 'Food safe*'],
    color: 'bg-mint/10 border-mint/30',
    accent: 'text-mint',
  },
  {
    name: 'ABS',
    category: 'Engineering',
    description: 'High strength and heat resistance. Ideal for functional prototypes and end-use parts.',
    properties: ['Heat resistant', 'High impact', 'Machinable'],
    color: 'bg-sand/10 border-sand/30',
    accent: 'text-sand',
  },
  {
    name: 'Nylon (PA)',
    category: 'Premium',
    description: 'Exceptional toughness and flexibility. Used for gears, hinges, and load-bearing components.',
    properties: ['Flexible', 'Wear resistant', 'Lightweight'],
    color: 'bg-sky-blue/10 border-sky-blue/30',
    accent: 'text-sky-blue',
  },
  {
    name: 'Resin (SLA)',
    category: 'High Detail',
    description: 'Ultra-smooth surface finish with fine detail. Best for jewelry, miniatures, and visual prototypes.',
    properties: ['High detail', 'Smooth finish', 'Paintable'],
    color: 'bg-mint/10 border-mint/30',
    accent: 'text-mint',
  },
  {
    name: 'TPU',
    category: 'Flexible',
    description: 'Rubber-like flexibility with excellent abrasion resistance. For cases, gaskets, and wearables.',
    properties: ['Elastic', 'Shock absorbent', 'Abrasion proof'],
    color: 'bg-sand/10 border-sand/30',
    accent: 'text-sand',
  },
]

const finishes = [
  { name: 'Raw Print', description: 'As-printed finish with visible layer lines' },
  { name: 'Sanded', description: 'Smoothed surface, layer lines reduced' },
  { name: 'Primed', description: 'Filler primer applied, ready for paint' },
  { name: 'Painted', description: 'Custom color painting with clear coat' },
]

export default function Materials() {
  return (
    <section id="materials" className="py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            Materials & Finishes
          </h2>
          <p className="text-dark-gray/70 max-w-lg mx-auto">
            Choose from a range of industrial and consumer-grade materials to match your project needs.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {materials.map((material) => (
            <div
              key={material.name}
              className={`rounded-2xl border p-6 transition-all hover:shadow-md hover:-translate-y-1 ${material.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
                  {material.name}
                </h3>
                <span className={`text-xs font-semibold uppercase tracking-wider ${material.accent}`}>
                  {material.category}
                </span>
              </div>
              <p className="text-sm text-dark-gray/70 mb-4 leading-relaxed">
                {material.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {material.properties.map((prop) => (
                  <span
                    key={prop}
                    className="text-xs bg-white/60 text-dark-gray/70 px-2.5 py-1 rounded-full border border-white/50"
                  >
                    {prop}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Finishes */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            Post-Processing Finishes
          </h3>
          <p className="text-dark-gray/70 text-sm">
            Every print ships in raw finish unless you specify otherwise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {finishes.map((finish) => (
            <div
              key={finish.name}
              className="bg-soft-white border border-sand/20 rounded-xl p-4 text-center hover:shadow-sm transition-shadow"
            >
              <div className="font-semibold text-charcoal text-sm mb-1">{finish.name}</div>
              <div className="text-xs text-dark-gray/60">{finish.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
