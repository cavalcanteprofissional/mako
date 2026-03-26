import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { MapPin, ArrowRight, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco - Mako® Soluções Industriais',
  description: 'Junte-se à equipe Mako®! Vagas para engenheiros, técnicos e especialistas em automação industrial. Cresça profissionalmente conosco.',
  openGraph: {
    title: 'Trabalhe Conosco - Mako® Soluções Industriais',
    description: 'Oportunidades de carreira em automação industrial. Venha fazer parte da nossa equipe.',
    url: '/carreiras',
  },
}

export default function CarreirasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trabalhe Conosco
            </h1>
            <p className="text-xl text-white">
              Venha fazer parte do nosso time.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como <span className="text-gradient">Candidatar-se</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha a melhor forma para enviar sua candidatura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site de Vagas</h3>
              <p className="text-gray-600 mb-6">
                Faça sua candidatura através do nosso site de vagas
              </p>
              <a 
                href="https://makosolucoes.vagas.solides.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Candidatar-se
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Por E-mail</h3>
              <p className="text-gray-600 mb-4">
                Envie seu currículo com título da vaga e pretensão salarial
              </p>
              <a 
                href="mailto:selecao@mako.ind.br"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Enviar Currículo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Card>
          </div>
        </div>
      </Section>

      {/* Culture Section */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-gradient">Cultura</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Valores que guiam nossas decisões e relacionamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600 text-sm">
                Buscamos sempre a melhor qualidade em tudo o que fazemos
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4 3 1 6 1 9c0 2.7 3.4 6.83 8.55 11.54L12 22.99l2.45-2.45C19.6 15.83 23 11.7 23 9c0-3-2-6-6.5-6zM7.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 10.5 7.5 10.5 6 9.83 6 9zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-gray-600 text-sm">
                Estamos sempre em busca de novas soluções e melhorias
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Colaboração</h3>
              <p className="text-gray-600 text-sm">
                Acreditamos no poder do trabalho em equipe e sinergia
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Integridade</h3>
              <p className="text-gray-600 text-sm">
                Agimos com ética, transparência e responsabilidade
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}