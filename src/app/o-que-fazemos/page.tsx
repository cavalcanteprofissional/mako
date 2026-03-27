import type { Metadata } from 'next'
import { mockServices } from '@/lib/mockData'
import ServicesList from '@/components/sections/ServicesList'
import ServiceDetail from '@/components/sections/ServiceDetail'
import MethodologySection from '@/components/sections/MethodologySection'
import ServicesHero from './ServicesHero'

export const metadata: Metadata = {
  title: 'Serviços - Mako® Soluções Industriais',
  description: 'Conheça nossos serviços de engenharia industrial: Front-End Packages, Projetos Industriais, Obras, Manutenções, Suprimentos e Coordenação de Obras. Referência PMBoK/CPM.',
  openGraph: {
    title: 'Serviços - Mako® Soluções Industriais',
    description: 'Soluções completas em engenharia industrial: projetos, obras, manutenções e coordenação. Atuação nacional e internacional com certificação ISO 9001.',
    url: '/o-que-fazemos',
  },
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Featured Services Carousel */}
      <ServiceDetail services={mockServices} />

      {/* Methodology Section */}
      <MethodologySection />

      {/* All Services List */}
      <ServicesList services={mockServices} />
    </>
  )
}