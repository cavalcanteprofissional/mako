import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { Shield, Heart, TreePine, Users, FileCheck, TrendingUp, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Segurança - Mako® Soluções Industriais',
  description: 'Conheça nossa política de segurança, saúde e meio ambiente. Compromisso com a excelência em SMS.',
  openGraph: {
    title: 'Política de Segurança - Mako® Soluções Industriais',
    description: 'Compromisso com a segurança, saúde e meio ambiente em todas as nossas operações.',
    url: '/politica-de-seguranca',
  },
}

export default function PoliticaSegurancaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nossa Política de Segurança
            </h1>
            <p className="text-xl text-white">
              Saúde, Segurança e Meio Ambiente
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              A Mako®, através de sua Política de SMS (Saúde, Segurança e Meio Ambiente), tem como objetivo 
              assegurar o compromisso de que suas atividades tenham um alto nível de proteção para a saúde 
              e segurança de seus empregados, clientes, fornecedores e comunidade, assim como para o Meio Ambiente.
            </p>
          </div>

          {/* SMS Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Programa Mako® de SMS</h2>
            <Card padding="lg" className="bg-primary-50 border-l-4 border-primary-500">
              <p className="text-gray-700">
                Através do Programa Mako® de SMS, com suas <strong>5 premissas e 22 princípios</strong>, 
                além de suas respectivas ferramentas, a Mako® promoverá condições saudáveis de trabalho, 
                esclarecerá e treinará seus empregados em práticas seguras de trabalho, além de promover 
                informações para controle de riscos no local de trabalho e proteção ao Meio Ambiente.
              </p>
            </Card>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsabilidades</h2>
            <Card padding="lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Todos os funcionários, da alta direção à operação, são responsáveis pela segurança de 
                    seus colegas e subordinados, e pela proteção ao meio ambiente nas atividades sob 
                    seu controle.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Commitments */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossos Compromissos</h2>
            <div className="space-y-4">
              <Card padding="md">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Operar com todas as documentações e registros exigidos pela legislação vigente
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Efetuar as revisões necessárias e disseminar as informações contidas nos documentos
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Buscar sempre o alto padrão de excelência em SMS através da melhoria contínua
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <TreePine className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Promover desenvolvimento de pessoas, aplicação de melhores práticas em todos os níveis
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Dúvidas sobre Segurança?
            </h3>
            <p className="text-gray-600 mb-8 text-center">
              Para informações adicionais sobre nossa política de segurança, entre em contato:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:seguranca@mako.ind.br"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    seguranca@mako.ind.br
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
