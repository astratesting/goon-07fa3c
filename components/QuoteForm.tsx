'use client'
import { useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    material: '',
    quantity: '',
    deadline: '',
    description: '',
    fileUpload: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="quote-form" className="py-24 px-6 bg-white/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-mint/20 rounded-2xl p-12">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
              Quote Request Received
            </h2>
            <p className="text-dark-gray/70 mb-6">
              Thanks, {formData.name}! Our team will review your project details and get back to you at <strong>{formData.email}</strong> within 24 hours with a detailed quote.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', material: '', quantity: '', deadline: '', description: '', fileUpload: '' }) }}
              className="text-sky-blue font-semibold hover:underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="quote-form" className="py-24 px-6 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal" style={{ fontFamily: 'var(--font-geist), system-ui' }}>
            Request a Quote
          </h2>
          <p className="text-dark-gray/70 max-w-lg mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours with pricing and timeline.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-sand/20 p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
                placeholder="Acme Corp"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Material</label>
              <select
                name="material"
                value={formData.material}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
              >
                <option value="">Select material...</option>
                <option value="pla">PLA</option>
                <option value="petg">PETG</option>
                <option value="abs">ABS</option>
                <option value="nylon">Nylon (PA)</option>
                <option value="resin">Resin (SLA)</option>
                <option value="tpu">TPU (Flexible)</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Project Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-sand/30 bg-soft-white focus:outline-none focus:ring-2 focus:ring-sky-blue/50 focus:border-sky-blue transition-all text-charcoal resize-none"
              placeholder="Describe your project — dimensions, use case, any special requirements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">3D File (optional)</label>
            <div className="border-2 border-dashed border-sand/40 rounded-xl p-6 text-center hover:border-sky-blue/40 transition-colors cursor-pointer bg-soft-white/50">
              <svg className="w-8 h-8 mx-auto text-dark-gray/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-dark-gray/50">
                Drag & drop your STL, OBJ, or STEP file here, or click to browse
              </p>
              <p className="text-xs text-dark-gray/30 mt-1">Max file size: 50MB</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-sky-blue text-white font-semibold rounded-xl hover:bg-sky-blue/90 transition-all shadow-md hover:shadow-lg text-lg"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  )
}
