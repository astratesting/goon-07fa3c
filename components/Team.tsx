'use client'

const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Creative Director',
    bio: 'Built Goon from a personal frustration and a conviction that gay men deserve better. Leads vision, vibe, and everything in between.',
    initials: 'MC',
  },
  {
    name: 'Jordan Rivera',
    role: 'Lead Stylist',
    bio: '10+ years behind the chair. Specializes in fades, textured cuts, and the kind of precision that makes people stare.',
    initials: 'JR',
  },
  {
    name: 'Kai Nakamura',
    role: 'Grooming Specialist',
    bio: 'Beard architect, hot-towel purist, and the person you trust with your face. Every detail, intentional.',
    initials: 'KN',
  },
  {
    name: 'Devon Brooks',
    role: 'Skincare & Massage Therapist',
    bio: 'Licensed esthetician and massage therapist. Believes relaxation isn\'t a luxury — it\'s a necessity.',
    initials: 'DB',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-goon-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            The Team
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Craft. Warmth. Zero asterisks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:bg-white/[0.06] hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-goon-orange/15 flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-goon-orange font-bold text-lg"
                    style={{ fontFamily: 'var(--font-archivo)' }}
                  >
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-satoshi)' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-goon-orange text-sm font-medium"
                    style={{ fontFamily: 'var(--font-satoshi)' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
