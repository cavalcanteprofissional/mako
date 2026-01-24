'use client'

import { Card, Button } from '@/components/ui'
import { Shield, TrendingUp, Award, CheckCircle } from 'lucide-react'

interface HeaderTwoProps {
  className?: string
}

export default function HeaderTwo({ className = '' }: HeaderTwoProps) {
  return (
    <section className={`py-16 bg-primary-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-gradient">Valores</span> e Propósito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Os princípios que guiam nossas ações e decisões em todos os projetos
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card padding="lg" className="text-center group hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              Excelência
            </h3>
            <p className="text-gray-600">
              Buscamos a melhor qualidade em tudo o que fazemos, superando expectativas e garantindo resultados excepcionais
            </p>
          </Card>

          <Card padding="lg" className="text-center group hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
              Inovação
            </h3>
            <p className="text-gray-600">
              Estamos sempre em busca de novas tecnologias e soluções criativas para transformar desafios em oportunidades
            </p>
          </Card>

          <Card padding="lg" className="text-center group hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
              Colaboração
            </h3>
            <p className="text-gray-600">
              Acreditamos no poder do trabalho em equipe e na sinergia entre clientes, fornecedores e colaboradores
            </p>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Nossa <span className="text-primary-600">Missão</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            Transformar desafios industriais em oportunidades através de automação inteligente, 
            soluções personalizadas e parcerias de longo prazo, impulsionando a 
            competitividade e sustentabilidade dos nossos clientes.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card padding="lg" className="border-l-4 border-primary-600">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-primary-600">Por que escolher a Mako?</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold mb-1">Expertise Comprovada</h5>
                  <p className="text-sm">Mais de 8 anos de experiência especializada em automação industrial</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold mb-1">Soluções Personalizadas</h5>
                  <p className="text-sm">Projetos desenvolvidos sob medida para suas necessidades específicas</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold mb-1">Suporte Dedicado</h5>
                  <p className="text-sm">Equipe técnica disponível 24/7 para garantir máxima operacionalidade</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold mb-1">Qualidade Garantida</h5>
                  <p className="text-sm">Certificações ISO 9001 e garantia estendida em todos os serviços</p>
                </div>
              </li>
            </ul>
          </Card>

          <Card padding="lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Comece sua jornada</h4>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Descubra como podemos transformar sua indústria com soluções de automação inteligentes
              </p>
              <Button
                href="/contato"
                className="justify-center"
              >
                Solicitar Consultoria Gratuita
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}