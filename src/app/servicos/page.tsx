import type { Metadata } from 'next'
import { mockServices } from '@/lib/mockData'
import ServicesList from '@/components/sections/ServicesList'
import ServiceDetail from '@/components/sections/ServiceDetail'
import ServiceProcess from '@/components/sections/ServiceProcess'
import { Section } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Serviços - Mako Soluções Industriais',
  description: 'Conheça nossos serviços de engenharia industrial: Front-End Packages, Projetos Industriais, Obras, Manutenções, Suprimentos e Coordenação de Obras. Referência PMBoK/CPM.',
  openGraph: {
    title: 'Serviços - Mako Soluções Industriais',
    description: 'Soluções completas em engenharia industrial: projetos, obras, manutenções e coordenação. Atuação nacional e internacional com certificação ISO 9001.',
    url: '/servicos',
  },
}

// Get first service for detailed view
const featuredService = mockServices.find(service => service.featured)

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-yellow-400">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Transformamos sua indústria com soluções completas de engenharia industrial, desde o planejamento até a execução
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  +23
                </div>
                <p className="text-primary-100">Anos de Mercado</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  +200
                </div>
                <p className="text-primary-100">Projetos Industriais</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  ISO 9001
                </div>
                <p className="text-primary-100">Certificação</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  PMBoK
                </div>
                <p className="text-primary-100">Metodologia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Detail */}
      {featuredService && (
        <ServiceDetail service={featuredService} />
      )}

      {/* Service Process */}
      {featuredService && (
        <ServiceProcess 
          process={featuredService.process}
          title="Como Funciona Nosso Processo"
          description="Cada projeto segue uma metodologia estruturada para garantir resultados excepcionais e satisfação total do cliente."
        />
      )}

      {/* All Services List */}
      <ServicesList services={mockServices} />

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-yellow-400">Transformar</span> Sua Indústria?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções de engenharia industrial podem beneficiar seus projetos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/558534932877?text=Olá! Gostaria de mais informações sobre os serviços da Mako." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}