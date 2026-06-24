import Hero from '@/components/Hero'
import WhatWeBuilding from '@/components/WhatWeBuilding'
import Services from '@/components/Services'
import FounderStory from '@/components/FounderStory'
import Waitlist from '@/components/Waitlist'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeBuilding />
      <Services />
      <FounderStory />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
