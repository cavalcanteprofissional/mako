import HeroSection from '@/components/sections/HeroSection'
import CompanyStatsSection from '@/components/sections/CompanyStatsSection'
import ServiceDetail from '@/components/sections/ServiceDetail'
import AnimatedClientsSection from '@/components/sections/AnimatedClientsSection'
import CTASection from '@/components/sections/CTASection'
import { mockServices } from '@/lib/mockData'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyStatsSection />
      <ServiceDetail services={mockServices} />
      <AnimatedClientsSection />
      <CTASection variant="dark" />
    </>
  )
}