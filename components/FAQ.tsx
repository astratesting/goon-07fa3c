'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'What file formats do you accept?',
    answer: 'We accept STL, OBJ, STEP, and 3MF files. If you have a different format, reach out and we can usually convert it for you.',
  },
  {
    question: 'What is the maximum print size?',
    answer: 'Our largest printer supports builds up to 300mm × 300mm × 400mm. For larger parts, we can split the design and assemble it post-print.',
  },
  {
    question: 'How accurate are your prints?',
    answer: 'FDM prints have a tolerance of ±0.2mm. SLA resin prints are even more precise at ±0.1mm. Layer heights range from 0.05mm to 0.3mm depending on the finish you choose.',
  },
  {
    question: 'Do you offer design help?',
    answer: 'Yes. If your file needs modifications — wall thickness adjustments, support optimization, or scaling — our design team can help. This service is included for Professional and Production tiers.',
  },
  {
    question: 'What about shipping?',
    answer: 'We ship worldwide. Domestic orders typically arrive in 3–5 business days. International shipping takes 7–14 business days. All orders are carefully packaged to prevent damage.',
  },
  {
    question: 'Can I get a sample before committing to a large order?',
    answer: 'Absolutely. We recommend ordering a single sample first. Many customers start with our Hobby tier to test fit and finish before moving to larger quantities.',
  },
  {
    question: 'What if my print arrives damaged?',
    answer: 'We stand behind our quality. If your order arrives damaged or doesn\'t meet the agreed specifications, we\'ll reprint and reship it at no cost.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6 lattice-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-dark-gray/70">
            Everything you need to know before placing your first order.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-sand/20 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-dark-gray/40 flex-shrink-0 transition-transform duration-200 ${
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
                <p className="px-5 pb-5 text-sm text-dark-gray/70 leading-relaxed">
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
