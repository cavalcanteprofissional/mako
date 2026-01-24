import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { Award, Calendar, CheckCircle, Star, Shield } from 'lucide-react'
import { mockCertifications } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Certificações - Mako Soluções Industriais',
  description: 'Conheça todas as certificações da Mako. ISO 9001, NR-12, ABNT NBR 5410 e mais. Qualidade e segurança comprovadas.',
  openGraph: {
    title: 'Certificações - Mako Soluções Industriais',
    description: 'Nossas certificações garantem a qualidade e segurança de nossos serviços.',
    url: '/certificacoes',
  },
}

export default function CertificacoesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="text-yellow-400">Certificações</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Reconhecimento e qualificação que garantem a excelência dos nossos serviços
            </p>
            
            {/* Certification Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  ISO 9001
                </div>
                <p className="text-primary-100">Qualidade</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  NR-12
                </div>
                <p className="text-primary-100">Segurança</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  ABNT
                </div>
                <p className="text-primary-100">Normas</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  100%
                </div>
                <p className="text-primary-100">Conformidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certificações <span className="text-gradient">Principais</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As certificações que atestam nossa competência e compromisso com a qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockCertifications.map((cert) => (
              <Card key={cert.id} padding="lg" className="text-center group">
                {/* Certification Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {cert.description}
                </p>

                {/* Additional Info */}
                <div className="space-y-3">
                  {cert.issuer && (
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-2" />
                      {cert.issuer}
                    </div>
                  )}

                  {cert.validUntil && (
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      Válido até: {cert.validUntil}
                    </div>
                  )}
                </div>

                {/* Verification Badge */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Certificado Ativo
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Certification Details */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detalhes das <span className="text-gradient">Certificações</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Saiba mais sobre cada uma de nossas certificações e o que elas representam
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ISO 9001 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
                    <p className="text-gray-600">Sistema de Gestão da Qualidade</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Certificação que atesta nossa capacidade de fornecer serviços que atendam 
                  consistentemente aos requisitos do cliente e regulamentações aplicáveis.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Processos padronizados e auditados
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Foco na satisfação do cliente
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Melhoria contínua dos processos
                  </div>
                </div>
              </Card>
            </div>

            {/* NR-12 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">NR-12</h3>
                    <p className="text-gray-600">Segurança no Trabalho em Máquinas e Equipamentos</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Certificação que garante nossa competência em projetos de automação 
                  industrial conforme as normas de segurança e saúde ocupacional.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Projetos seguros para operadores
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Sistemas de proteção coletiva
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Análise de riscos ergonômicos
                  </div>
                </div>
              </Card>
            </div>

            {/* ABNT NBR 5410 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ABNT NBR 5410</h3>
                    <p className="text-gray-600">Instalações Elétricas de Baixa Tensão</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Certificação que comprova nossa capacidade de executar instalações 
                  elétricas industriais em conformidade com as normas técnicas brasileiras.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Instalações seguras e confiáveis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Projeto e execução conforme normas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Laudos técnicos e documentação completa
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios das <span className="text-gradient">Certificações</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Por que escolher uma empresa certificada faz diferença nos seus projetos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Processos auditados e validados por órgãos competentes,
                garantindo a qualidade em cada entrega
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conformidade Legal</h3>
              <p className="text-gray-600">
                Atendimento a todas as normas e regulamentações
                vigentes, evitando multas e penalidades
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vantagem Competitiva</h3>
              <p className="text-gray-600">
                Clientes preferem empresas certificadas, abrindo
                novas oportunidades de negócio
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Precisa de <span className="text-yellow-400">Serviços Certificados</span>?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como nossas certificações beneficiam seus projetos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/5585987654321?text=Olá! Gostaria de saber mais sobre as certificações da Mako." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}