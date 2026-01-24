import type { Metadata } from 'next'
import { mockServices } from '@/lib/mockData'
import ServicesList from '@/components/sections/ServicesList'
import ServiceDetail from '@/components/sections/ServiceDetail'
import ServiceProcess from '@/components/sections/ServiceProcess'
import { Section } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Serviços - Mako Soluções Industriais',
  description: 'Conheça nossos serviços de automação industrial: projetos, manutenção, consultoria e suporte técnico especializado para sua indústria.',
  openGraph: {
    title: 'Serviços - Mako Soluções Industriais',
    description: 'Soluções completas em automação industrial para aumentar eficiência e produtividade de sua empresa.',
    url: '/servicos',
  },
}

// Get first service for detailed view
const featuredService = mockServices.find(service => service.featured)

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-yellow-400">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transformamos sua indústria com soluções de automação inteligentes e eficientes
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <p className="text-blue-100">Anos de Experiência</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  500+
                </div>
                <p className="text-blue-100">Projetos Concluídos</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  24/7
                </div>
                <p className="text-blue-100">Suporte Técnico</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  100%
                </div>
                <p className="text-blue-100">Garantia de Qualidade</p>
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
            Pronto para <span className="text-yellow-400">Automatizar</span> Sua Indústria?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem transformar seus processos industriais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/5585987654321?text=Olá! Gostaria de mais informações sobre os serviços da Mako." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}