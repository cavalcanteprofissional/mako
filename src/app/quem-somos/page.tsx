import type { Metadata } from 'next'
import { mockTeamMembers, mockCompanyHistory } from '@/lib/mockData'
import TeamSection from '@/components/sections/TeamSection'
import CompanyValuesSection from '@/components/sections/CompanyValuesSection'
import HistorySection from '@/components/sections/HistorySection'
import AboutHero from './AboutHero'

export const metadata: Metadata = {
  title: 'Quem Somos - Mako® Soluções Industriais',
  description: 'Conheça a história, equipe e certificações da Mako® Soluções Industriais. Especialistas em engenharia industrial com mais de 23 anos de experiência e certificação ISO 9001.',
  openGraph: {
    title: 'Quem Somos - Mako® Soluções Industriais',
    description: 'Descubra nossa trajetória de sucesso, metodologia PMBoK/CPM e a equipe por trás das melhores soluções em engenharia industrial.',
    url: '/quem-somos',
  },
}

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Team Section */}
      <TeamSection teamMembers={mockTeamMembers} />

      {/* Values Section */}
      <CompanyValuesSection />

      {/* History Section */}
      <HistorySection history={mockCompanyHistory} />
    </>
  )
}
