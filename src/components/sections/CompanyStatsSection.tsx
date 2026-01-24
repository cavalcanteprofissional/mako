'use client'

import Image from 'next/image'
import { Card, Button } from '@/components/ui'

interface CompanyStatsSectionProps {
  className?: string
}

export default function CompanyStatsSection({ className = '' }: CompanyStatsSectionProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-gradient">Trajetória</span> e Conquistas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Construímos uma história de sucesso, crescimento e inovação em automação industrial
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-primary-600">2015</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Anos de Experiência</h3>
            <p className="text-gray-600">
              Desde o início de nossa jornada até hoje
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-green-600">500+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Projetos Concluídos</h3>
            <p className="text-gray-600">
              Soluções entregues com excelência e satisfação garantida
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-yellow-600">50+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clientes Ativos</h3>
            <p className="text-gray-600">
              Empresas que confiam e crescem conosco
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-purple-600">98%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfação</h3>
            <p className="text-gray-600">
              Clientes totalmente satisfeitos com nossos serviços
            </p>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="bg-primary-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Por que Empresas <span className="text-primary-600">Confiam</span> na Mako?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Qualidade Comprovada</h4>
              <p className="text-gray-600 text-sm">
                Certificações ISO 9001 e NR-12 garantem a excelência de nossos serviços
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise Técnica</h4>
              <p className="text-gray-600 text-sm">
                Equipe especializada com mais de 8 anos de experiência em automação
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Suporte 24/7</h4>
              <p className="text-gray-600 text-sm">
                Atendimento técnico dedicado sempre que você precisar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}