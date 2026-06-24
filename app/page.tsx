import Hero from '@/components/Hero'
import WhatWeBuilding from '@/components/WhatWeBuilding'
import Services from '@/components/Services'
import FounderStory from '@/components/FounderStory'
import Team from '@/components/Team'
import Location from '@/components/Location'
import BookingCTA from '@/components/BookingCTA'
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
      <Team />
      <Location />
      <BookingCTA />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
