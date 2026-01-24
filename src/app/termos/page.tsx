import type { Metadata } from 'next'
import { Section, Card } from '@/components/ui'
import { FileText, Scale, AlertCircle, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Serviço - Mako Soluções Industriais',
  description: 'Leia nossos termos de serviço e condições gerais. Regras claras para uma parceria transparente e confiável.',
  openGraph: {
    title: 'Termos de Serviço - Mako Soluções Industriais',
    description: 'Termos e condições para contratação de nossos serviços de automação industrial.',
    url: '/termos',
  },
}

export default function TermosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6">
              Termos de <span className="text-yellow-400">Serviço</span>
            </h1>
            <p className="text-xl text-primary-100">
              Condições gerais para utilização de nossos serviços
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              Bem-vindo aos Termos de Serviço da Mako Soluções Industriais. Estes termos 
              regulam a prestação de serviços de automação industrial e soluções técnicas entre 
              nossa empresa e clientes. Ao utilizar nossos serviços, você concorda com estas condições.
            </p>
          </div>

          {/* General Conditions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Condições Gerais</h2>
            <div className="space-y-6">
              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">1</span>
                  Objeto dos Serviços
                </h3>
                <p className="text-gray-600">
                  Os serviços consistem em projetos de automação industrial, manutenção de equipamentos, 
                  consultoria técnica e suporte especializado, conforme detalhado em propostas comerciais 
                  específicas para cada cliente.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">2</span>
                  Aceitação dos Termos
                </h3>
                <p className="text-gray-600">
                  A contratação dos serviços implica aceitação total destes termos. Recomendamos 
                  ler atentamente e guardar cópia para futura consulta.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">3</span>
                  Propostas e Orçamentos
                </h3>
                <p className="text-gray-600">
                  Todas as propostas são válidas por 30 dias da data de emissão. 
                  Valores podem ser ajustados conforme escopo do projeto ou condições comerciais.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">4</span>
                  Formas de Pagamento
                </h3>
                <p className="text-gray-600 mb-4">
                  Aceitamos as seguintes formas de pagamento:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Transferência bancária</li>
                  <li>Boleto bancário (com juros de 1,5% ao mês)</li>
                  <li>Cartão de crédito (até 12x sem juros)</li>
                  <li>PIX (imediato, sem custo adicional)</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Responsabilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Nossas Obrigações
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Executar serviços com padrão de qualidade</li>
                  <li>• Cumprir prazos acordados</li>
                  <li>• Fornecer garantia conforme estabelecido</li>
                  <li>• Manter sigilo das informações do cliente</li>
                  <li>• Oferecer suporte técnico 24/7 para emergências</li>
                </ul>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-primary-600">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Obrigações do Cliente
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fornecer informações precisas sobre as necessidades</li>
                  <li>• Permitir acesso adequado às instalações</li>
                  <li>• Efetuar pagamentos nos prazos acordados</li>
                  <li>• Utilizar equipamentos conforme recomendações</li>
                  <li>• Comunicar qualquer problema ou pendência</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Warranties */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Garantias e Suporte</h2>
            <div className="space-y-4">
              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-primary-600" />
                  Garantia dos Serviços
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>12 meses de garantia</strong> para todos os serviços executados</li>
                  <li>Cobre defeitos de execução e materiais aplicados</li>
                  <li>Não cobre danos por mau uso ou negligência</li>
                  <li>Garantia estendida conforme fabricante para equipamentos</li>
                </ul>
              </Card>

              <Card padding="lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  Suporte Técnico
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>24/7 para emergências</strong> (atendimento em 2 horas)</li>
                  <li><strong>Horário comercial</strong>: Seg-Sex 8h-18h, Sábado 8h-12h</li>
                  <li>Telefones: (85) 3214-5678 / (85) 98765-4321</li>
                  <li>E-mail: tecnico@mako.ind.br</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Rescisão Contratual</h2>
            <Card padding="lg">
              <p className="text-gray-600 mb-4">
                O contrato pode ser rescindido nas seguintes condições:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Mútuo acordo:</strong> Ambas as partes concordam com os termos</li>
                <li>• <strong>Por inadimplência:</strong> Após 30 dias de atraso no pagamento</li>
                <li>• <strong>Justa causa:</strong> Descumprimento grave das obrigações contratuais</li>
                <li>• <strong>Multa rescisória:</strong> 10% sobre o valor restante do contrato</li>
              </ul>
            </Card>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dúvidas sobre os Termos?
            </h3>
            <p className="text-gray-600 mb-6">
              Para esclarecimentos adicionais, entre em contato conosco:
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contratos@mako.ind.br"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                contratos@mako.ind.br
              </a>
              <br />
              <a
                href="tel:558532145678"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                (85) 3214-5678
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}