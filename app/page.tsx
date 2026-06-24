import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import HowItWorks from '@/components/HowItWorks'
import Materials from '@/components/Materials'
import Pricing from '@/components/Pricing'
import QuoteForm from '@/components/QuoteForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Materials />
      <Pricing />
      <QuoteForm />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
