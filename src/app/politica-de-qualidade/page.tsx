import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { Award, Users, TrendingUp, CheckCircle, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Qualidade - Mako® Soluções Industriais',
  description: 'Conheça nossa política de qualidade. Compromisso com a excelência em todos os serviços.',
  openGraph: {
    title: 'Política de Qualidade - Mako® Soluções Industriais',
    description: 'Compromisso com a qualidade e satisfação total de clientes, funcionários e parceiros.',
    url: '/politica-de-qualidade',
  },
}

export default function PoliticaQualidadePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nossa Política de Qualidade
            </h1>
            <p className="text-xl text-white">
              Satisfação total em cada projeto
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              A Mako® tem como objetivo e valor prezar pela qualidade de seus serviços no que diz respeito à 
              satisfação total de seus clientes, funcionários, parceiros, fornecedores, meio ambiente e sócios cotistas.
            </p>
          </div>

          {/* Commitment */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nosso Compromisso</h2>
            <Card padding="lg" className="bg-primary-50 border-l-4 border-primary-500">
              <p className="text-gray-700">
                A Mako® se compromete em suportar essa política de qualidade através de 
                <strong> ações de treinamento</strong> aos funcionários e parceiros, e através da 
                <strong> melhoria contínua</strong> de seus padrões.
              </p>
            </Card>
          </div>

          {/* Quality System */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sistema de Qualidade Mako®</h2>
            <Card padding="lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Os princípios e procedimentos do Sistema de Qualidade Mako® serão as bases dos 
                    controles necessários para atingir um <strong>padrão mundial de qualidade</strong> 
                    nos produtos e serviços.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilidades</h2>
            <div className="space-y-4">
              <Card padding="md">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Todos os funcionários são responsáveis por cumprir os requisitos aplicáveis
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cumprir as premissas, procedimentos e melhores práticas da política
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Manter o padrão mundial de qualidade em todos os projetos
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Buscar sempre a satisfação total de clientes, funcionários e parceiros
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Dúvidas sobre Qualidade?
            </h3>
            <p className="text-gray-600 mb-8 text-center">
              Para informações adicionais sobre nossa política de qualidade, entre em contato:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:qualidade@mako.ind.br"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    qualidade@mako.ind.br
                  </p>
                </div>
              </a>

              <a
                href="tel:558534932877"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    +55 85 3493.2877
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
