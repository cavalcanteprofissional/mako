'use client'

import { Card } from '@/components/ui'
import type { CompanyHistory } from '@/types'

interface HistorySectionProps {
  history: CompanyHistory[]
}

export default function HistorySection({ history }: HistorySectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-gradient">História</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um projeto bem sucedido é aquele que gera valor e sustentabilidade, fundamentais às organizações que buscam liderança em suas áreas de atuação.  A Mako® não só compreende essa definição, como adotou como missão em tudo que fazemos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {history.map((milestone, index) => (
            <div key={milestone.year} className="relative">
              {/* Timeline Line */}
              {index < history.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-primary-200" />
              )}

              <Card padding="lg" className="relative hover:shadow-medium transition-all duration-300 ml-16">
                {/* Year Badge */}
                <div className="absolute -left-16 top-8 bg-primary-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Faça parte da nossa história
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a times de empresas que confiam na nossa experiência para transformar seus processos industriais
          </p>
          <a
            href="/contato"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
