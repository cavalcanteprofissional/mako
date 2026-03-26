import type { Metadata } from 'next'
import { mockServices } from '@/lib/mockData'
import ServicesList from '@/components/sections/ServicesList'
import ServiceDetail from '@/components/sections/ServiceDetail'
import ServiceProcess from '@/components/sections/ServiceProcess'

export const metadata: Metadata = {
  title: 'Serviços - Mako® Soluções Industriais',
  description: 'Conheça nossos serviços de engenharia industrial: Front-End Packages, Projetos Industriais, Obras, Manutenções, Suprimentos e Coordenação de Obras. Referência PMBoK/CPM.',
  openGraph: {
    title: 'Serviços - Mako® Soluções Industriais',
    description: 'Soluções completas em engenharia industrial: projetos, obras, manutenções e coordenação. Atuação nacional e internacional com certificação ISO 9001.',
    url: '/o-que-fazemos',
  },
}

// Get first service for detailed view
const featuredService = mockServices.find(service => service.featured)

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              O Que Fazemos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Um projeto bem sucedido é aquele que gera valor e sustentabilidade, fundamentais às organizações que buscam liderança em suas áreas de atuação.  A Mako® não só compreende essa definição, como adotou como missão em tudo que fazemos.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  +23
                </div>
                <p className="text-white/80">Anos de Mercado</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  +200
                </div>
                <p className="text-white/80">Projetos Industriais</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  ISO 9001
                </div>
                <p className="text-white/80">Certificação</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  PMBoK
                </div>
                <p className="text-white/80">Metodologia</p>
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
    </>
  )
}