import HeroSection from '@/components/sections/HeroSection'
import CompanyStatsSection from '@/components/sections/CompanyStatsSection'
import CompanyValuesSection from '@/components/sections/CompanyValuesSection'
import AnimatedClientsSection from '@/components/sections/AnimatedClientsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyStatsSection />
      <CompanyValuesSection />
      <AnimatedClientsSection />
    </>
  )
}