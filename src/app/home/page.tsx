import HeroSection from '@/components/sections/HeroSection'
import AnimatedClientsSection from '@/components/sections/AnimatedClientsSection'
import DiferenciaisSection from '@/components/sections/DiferenciaisSection'
import ClientesSection from '@/components/sections/ClientesSection'
import CompanyStatsSection from '@/components/sections/CompanyStatsSection'
import CompanyValuesSection from '@/components/sections/CompanyValuesSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedClientsSection />
      <CompanyStatsSection />
      <CompanyValuesSection />
      <DiferenciaisSection />
      <ClientesSection />
    </>
  )
}