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
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-mint/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm font-medium text-charcoal">Be the first to know</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
          Join the Waitlist
        </h2>
        <p className="text-dark-gray/70 mb-8">
          Sign up for early access and launch-day pricing. We&apos;ll only email you when we&apos;re ready — no spam, ever.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-xl border border-sand/30 bg-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal placeholder:text-dark-gray/40"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sky-blue text-white font-semibold rounded-xl hover:bg-sky-blue/90 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-mint/20 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-2xl mb-2">🎉</div>
            <p className="font-semibold text-charcoal mb-1">You&apos;re on the list!</p>
            <p className="text-sm text-dark-gray/70">We&apos;ll notify you at <strong>{email}</strong> when we launch.</p>
          </div>
        )}
      </div>
    </section>
  )
}
