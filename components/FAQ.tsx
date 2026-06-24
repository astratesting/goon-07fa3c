'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is Goon only for gay men?',
    answer: 'Goon is designed with gay men in mind — our space, our language, our service. That said, everyone is welcome who respects that vision. Trans men, nonbinary folks, and allies who appreciate a safe, affirming environment are all welcome.',
  },
  {
    question: 'When are you opening?',
    answer: 'We don\'t have a firm date yet — we\'re still finalizing the buildout and hiring our team. Join the waitlist and we\'ll let you know the moment we have a timeline.',
  },
  {
    question: 'What makes Goon different from a regular barbershop?',
    answer: 'Everything is intentional — from the booking experience to the waiting room music to the products on our shelves. You won\'t have to explain yourself, educate your stylist, or wonder if the person next to you is comfortable. We built this specifically for you.',
  },
  {
    question: 'How do I book?',
    answer: 'Once we launch, booking will be available online and through our app. For now, join the waitlist and we\'ll send you early access to our booking system before it goes public.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6 bg-goon-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-archivo)' }}
          >
            FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white pr-4 text-sm md:text-base" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-white/30 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-sm text-white/40 leading-relaxed" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
