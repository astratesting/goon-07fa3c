'use client'

const steps = [
  {
    number: '01',
    title: 'Submit',
    description: 'Upload your 3D model (STL, OBJ, or STEP) and tell us your preferred material, color, and quantity. Our configurator gives you an instant estimate.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    color: 'bg-sky-blue',
  },
  {
    number: '02',
    title: 'Print',
    description: 'Our industrial-grade printers bring your design to life. Every part goes through a rigorous quality check before it leaves our facility.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    color: 'bg-mint',
  },
  {
    number: '03',
    title: 'Ship',
    description: 'Carefully packaged and shipped to your door. Track your order in real time. Most orders arrive within 3–7 business days.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'bg-sand',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 lattice-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            How It Works
          </h2>
          <p className="text-dark-gray/70 max-w-lg mx-auto">
            From upload to doorstep in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-sand/50" />
              )}

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative z-10">
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-dark-gray/40 uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
                  {step.title}
                </h3>
                <p className="text-dark-gray/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
