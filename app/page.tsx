import Header from '@/components/header'
import Hero from '@/components/hero'
import PainPoints from '@/components/pain-points'
import OfficeSuite from '@/components/office-suite'
import ComparisonTable from '@/components/comparison-table'
import { WorkplaceFeatures } from '@/components/workplace-features'
import WhyConnecta from '@/components/why-connecta'
import WhoIsZohoFor from '@/components/who-is-zoho-for'
import LeadForm from '@/components/lead-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <PainPoints />
      <OfficeSuite />
      <ComparisonTable />
      <WorkplaceFeatures />
      <WhyConnecta />
      <WhoIsZohoFor />
      <LeadForm />
      <Footer />
    </main>
  )
}
