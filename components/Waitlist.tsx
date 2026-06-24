'use client'
import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" className="py-24 px-6 bg-goon-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
          style={{ fontFamily: 'var(--font-archivo)' }}
        >
          Join the Waitlist
        </h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto" style={{ fontFamily: 'var(--font-satoshi)' }}>
          Be the first to know when we open our doors. Early access, launch pricing, zero spam.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-goon-orange/50 focus:border-goon-orange/50 transition-all text-white placeholder:text-white/30"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-goon-orange text-white font-bold rounded-xl hover:bg-goon-orange/90 transition-all shadow-lg shadow-goon-orange/20 whitespace-nowrap tracking-wide"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-goon-green/10 border border-goon-green/20 rounded-xl p-6 max-w-md mx-auto">
            <p className="font-bold text-white mb-1" style={{ fontFamily: 'var(--font-satoshi)' }}>
              You're on the list.
            </p>
            <p className="text-sm text-white/40" style={{ fontFamily: 'var(--font-satoshi)' }}>
              We'll reach out to <span className="text-white/60">{email}</span> when we're ready.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
