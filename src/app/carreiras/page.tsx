import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { Users, TrendingUp, Award, Target, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco - Mako Soluções Industriais',
  description: 'Junte-se à equipe Mako! Vagas para engenheiros, técnicos e especialistas em automação industrial. Cresça profissionalmente conosco.',
  openGraph: {
    title: 'Trabalhe Conosco - Mako Soluções Industriais',
    description: 'Oportunidades de carreira em automação industrial. Venha fazer parte da nossa equipe.',
    url: '/carreiras',
  },
}

export default function CarreirasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Faça Parte da <span className="text-yellow-400">Equipe Mako</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Junte-se a uma empresa que valoriza talento, inovação e crescimento profissional
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  50+
                </div>
                <p className="text-blue-100">Profissionais</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  8+
                </div>
                <p className="text-blue-100">Anos de Mercado</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <p className="text-blue-100">Estados Atendidos</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  100%
                </div>
                <p className="text-blue-100">Oportunidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que <span className="text-gradient">Trabalhar</span> na Mako?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos mais do que um emprego: oferecemos uma carreira com desenvolvimento e propósito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crescimento</h3>
              <p className="text-gray-600">
                Planos de carreira claros com机会idades de desenvolvimento e ascensão profissional
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovação</h3>
              <p className="text-gray-600">
                Trabalhe com tecnologias de ponta em projetos desafiadores e inovadores
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto</h3>
              <p className="text-gray-600">
                Faça parte da transformação digital da indústria brasileira
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vagas <span className="text-gradient">Abertas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos para integrar nossa equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Engenheiro de Automação</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Full-time</span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Fortaleza, CE (Híbrido)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2" />
                  Sênior/Pleno
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Projetar e implementar sistemas de automação industrial, programar CLPs, 
                desenvolver IHMs e otimizar processos produtivos.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">Requisitos:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Formação em Engenharia Elétrica/Eletrônica/Automação</li>
                <li>• Experiência com CLPs (Siemens, Rockwell, etc.)</li>
                <li>• Conhecimento em redes industriais</li>
                <li>• Inglês técnico (diferencial)</li>
              </ul>
            </Card>

            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Técnico de Manutenção</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Full-time</span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  São Paulo, SP (Presencial)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2" />
                  Pleno/Júnior
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Realizar manutenção preventiva e corretiva em equipamentos industriais, 
                diagnosticar falhas e garantir máxima disponibilidade operacional.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">Requisitos:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Curso Técnico em Eletrotécnica/Mecânica</li>
                <li>• Experiência em manutenção industrial</li>
                <li>• NR-10 e NR-12 atualizadas</li>
                <li>• Disponibilidade para viagens</li>
              </ul>
            </Card>
          </div>

          {/* CTA for General Applications */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Não encontrou a vaga ideal? Envie seu currículo mesmo assim! 
              Sempre analisamos perfis talentosos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:rh@mako.ind.br"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Enviar Currículo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://www.linkedin.com/company/mako-solucoes-industriais/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 border border-blue-600 rounded-lg font-medium transition-colors duration-200"
              >
                Ver Todas as Vagas
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600 text-sm">
                Buscamos sempre a melhor qualidade em tudo o que fazemos
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4 3 1 6 1 9c0 2.7 3.4 6.83 8.55 11.54L12 22.99l2.45-2.45C19.6 15.83 23 11.7 23 9c0-3-2-6-6.5-6zM7.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 10.5 7.5 10.5 6 9.83 6 9zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-gray-600 text-sm">
                Estamos sempre em busca de novas soluções e melhorias
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Colaboração</h3>
              <p className="text-gray-600 text-sm">
                Acreditamos no poder do trabalho em equipe e sinergia
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
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