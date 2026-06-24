const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safe Space, Always',
    description: 'No judgment, no side-eyes, no "accidentally" misgendering you. Every detail — from the booking flow to the waiting room — is designed so you can walk in and just exhale.',
    color: 'text-goon-orange',
    bg: 'bg-goon-orange/10',
    border: 'border-goon-orange/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Expert Stylists Who Get It',
    description: 'Our team doesn\'t just know hair — they understand the specific grooming needs, styles, and textures that matter to our community. Cis, trans, nonbinary — all welcome.',
    color: 'text-goon-magenta',
    bg: 'bg-goon-magenta/10',
    border: 'border-goon-magenta/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Premium Services',
    description: 'This isn\'t your strip-mall clipper cut. We\'re bringing high-end grooming — precision cuts, luxury facials, therapeutic massage — to a space that actually reflects who you are.',
    color: 'text-goon-green',
    bg: 'bg-goon-green/10',
    border: 'border-goon-green/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Your Community',
    description: 'More than a salon — a place where you run into friends, meet new people, and feel part of something. A neighborhood anchor for gay men who want better.',
    color: 'text-goon-orange',
    bg: 'bg-goon-orange/10',
    border: 'border-goon-orange/20',
  },
]

export default function WhatWeBuilding() {
  return (
    <section id="what-we-building" className="py-24 px-6 bg-goon-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            What We're Building
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Not just another barbershop with rainbow flags in June. This is the real thing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`rounded-2xl border ${benefit.border} ${benefit.bg} p-8 transition-all hover:scale-[1.02]`}
            >
              <div className={`${benefit.color} mb-4`}>
                {benefit.icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-white/50 leading-relaxed text-sm"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
