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
            Construímos uma história de sucesso, crescimento e inovação em engenharia industrial
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-primary-600">+23</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Anos de Mercado</h3>
            <p className="text-gray-600">
              Desde 2001 no mercado industrial
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-green-600">+200</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Projetos Industriais</h3>
            <p className="text-gray-600">
              Projetos executados com excelência
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-yellow-600">R$ 2bi+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Valor Gerenciado</h3>
            <p className="text-gray-600">
              Superior a R$ 2 bilhões em projetos
            </p>
          </Card>

          <Card padding="lg" className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl font-bold text-purple-600">+50</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profissionais</h3>
            <p className="text-gray-600">
              Equipe especializada
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
                Certificação ISO 9001 para Elaboração de Projetos Industriais (obtida em 2022)
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Metodologia PMBoK/CPM</h4>
              <p className="text-gray-600 text-sm">
                Referência em gerenciamento de projetos industriais
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Atuação Nacional e Internacional</h4>
              <p className="text-gray-600 text-sm">
                Projetos em todo o Brasil e no exterior
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}