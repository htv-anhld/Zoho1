import Header from '@/components/header'
import Hero from '@/components/hero'
import WhatIsZoho from '@/components/what-is-zoho'
import { WorkplaceFeatures } from '@/components/workplace-features'
import PainPoints from '@/components/pain-points'
import OfficeSuite from '@/components/office-suite'
import PricingTable from '@/components/pricing-table'
import ComparisonTable from '@/components/comparison-table'
import WhyConnecta from '@/components/why-connecta'
import WhoIsZohoFor from '@/components/who-is-zoho-for'
import LeadForm from '@/components/lead-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <WhatIsZoho />
      <WorkplaceFeatures />
      <PainPoints />
      <OfficeSuite />
      <PricingTable />
      <ComparisonTable />
      <WhyConnecta />
      <WhoIsZohoFor />
      <LeadForm />
      <Footer />
    </main>
  )
}
