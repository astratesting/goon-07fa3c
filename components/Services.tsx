const services = [
  {
    name: 'Precision Haircuts',
    description: 'From fades to textured crops to classic scissor cuts. Consultation included every time — we listen before we cut.',
    price: '$45 – $65',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 01-5.196 3 3 3 0 015.196-3m1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664a4.331 4.331 0 00-2.165-1.379l-5.325-1.628a4.5 4.5 0 00-2.48-.044l-.803.215 7.794 4.5" />
      </svg>
    ),
    color: 'border-goon-orange/30',
    accent: 'text-goon-orange',
  },
  {
    name: 'Shaves',
    description: 'Beard shaping, hot-towel shaves, brow cleanup, and the kind of attention to detail that makes you feel like a new person.',
    price: '$35 – $55',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: 'border-goon-magenta/30',
    accent: 'text-goon-magenta',
  },
  {
    name: 'Facials',
    description: 'Deep-cleansing, hydrating, and brightening treatments customized to your skin. Because your face deserves more than a bar of soap.',
    price: '$60 – $90',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    color: 'border-goon-green/30',
    accent: 'text-goon-green',
  },
  {
    name: 'Waxing',
    description: 'Eyebrows, nose, ears, chest, back — precision waxing with premium products. Minimal irritation, maximum clean.',
    price: '$40 – $80',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: 'border-goon-magenta/30',
    accent: 'text-goon-magenta',
  },
  {
    name: 'Massage',
    description: 'Sports, deep tissue, or relaxation — all performed by licensed therapists in a calm, private environment.',
    price: '$80 – $120',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'border-goon-orange/30',
    accent: 'text-goon-orange',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-goon-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            Services Menu
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg" style={{ fontFamily: 'var(--font-satoshi)' }}>
            A preview of what's coming. Full menu drops on launch day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className={`rounded-2xl border ${service.color} bg-white/[0.03] p-7 transition-all hover:bg-white/[0.06] hover:scale-[1.01]`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${service.accent}`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-bold tracking-widest uppercase ${service.accent}`} style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {service.price}
                </span>
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
