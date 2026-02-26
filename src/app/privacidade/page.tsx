import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { Shield, Eye, Database, User, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade - Mako Soluções Industriais',
  description: 'Conheça nossa política de privacidade e proteção de dados. Compromisso total com a segurança das suas informações.',
  openGraph: {
    title: 'Política de Privacidade - Mako Soluções Industriais',
    description: 'Compromisso com a proteção e privacidade dos dados de nossos clientes e parceiros.',
    url: '/privacidade',
  },
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6">
              Política de <span className="text-yellow-400">Privacidade</span>
            </h1>
            <p className="text-xl text-primary-100">
              Seus dados estão seguros conosco
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              Na Mako Soluções Industriais, levamos a privacidade e a proteção dos seus dados muito a sério. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações 
              pessoais de nossos clientes, parceiros e visitantes de nosso site.
            </p>
          </div>

          {/* Privacy Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nossos Princípios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card padding="lg" className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                <p className="text-gray-600 text-sm">
                  Utilizamos criptografia e melhores práticas para proteger seus dados
                </p>
              </Card>

              <Card padding="lg" className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparência</h3>
                <p className="text-gray-600 text-sm">
                  Explicamos claramente como seus dados são coletados e utilizados
                </p>
              </Card>

              <Card padding="lg" className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Controle</h3>
                <p className="text-gray-600 text-sm">
                  Você tem controle total sobre suas informações pessoais
                </p>
              </Card>
            </div>
          </div>

          {/* Data Collection */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dados que Coletamos</h2>
            <div className="space-y-6">
              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-primary-600" />
                  Informações Pessoais
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Nome, e-mail e telefone</li>
                  <li>• Empresa e cargo profissional</li>
                  <li>• Endereço de faturamento</li>
                  <li>• Histórico de comunicações conosco</li>
                </ul>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-primary-600" />
                  Informações Técnicas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Endereço IP e dados de acesso</li>
                  <li>• Tipo de dispositivo e navegador</li>
                  <li>• Páginas visitadas e tempo de acesso</li>
                  <li>• Cookies e dados de navegação</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Data Usage */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Como Usamos Seus Dados</h2>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Para Fornecer Serviços</h3>
                  <p className="text-gray-600 text-sm">
                    Utilizamos seus dados para executar os serviços solicitados e manter contato profissional
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Para Melhorar Nossos Serviços</h3>
                  <p className="text-gray-600 text-sm">
                    Analisamos dados para identificar oportunidades de melhoria e novas funcionalidades
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Para Comunicação</h3>
                  <p className="text-gray-600 text-sm">
                    Para enviar atualizações, newsletters e informações relevantes sobre nossos serviços
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proteção de Dados</h2>
            <Card padding="lg">
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Segurança:</strong> Utilizamos criptografia SSL/TLS, firewalls e monitoramento 
                  constante para proteger suas informações contra acesso não autorizado.
                </p>
                <p>
                  <strong>Armazenamento:</strong> Seus dados são armazenados em servidores seguros 
                  com backups regulares e planos de recuperação de desastres.
                </p>
                <p>
                  <strong>Acesso Restrito:</strong> Apenas funcionários autorizados têm acesso às informações 
                  dos clientes, e sempre por necessidade profissional.
                </p>
                <p>
                  <strong>LGPD Compliance:</strong> Estamos em total conformidade com a Lei Geral 
                  de Proteção de Dados e demais regulamentações aplicáveis.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dúvidas sobre Privacidade?
            </h3>
            <p className="text-gray-600 mb-6">
              Para questões sobre esta política ou exercício de direitos, entre em contato conosco:
            </p>
            <div className="space-y-2">
              <a
                href="mailto:privacidade@mako.ind.br"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                privacidade@mako.ind.br
              </a>
              <br />
              <a
                href="tel:558534932877"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                +55 85 3493.2877
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}