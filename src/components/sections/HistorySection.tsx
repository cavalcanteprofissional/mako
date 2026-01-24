'use client'

import { useState } from 'react'
import { Card } from '@/components/ui'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { CompanyHistory } from '@/types'

interface HistorySectionProps {
  history: CompanyHistory[]
}

export default function HistorySection({ history }: HistorySectionProps) {
  const [expandedYear, setExpandedYear] = useState<string | null>(null)

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-gradient">História</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma jornada de crescimento e inovação em automação industrial
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {history.map((milestone, index) => (
            <div key={milestone.year} className="relative">
              {/* Timeline Line */}
              {index < history.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-primary-200" />
              )}

              <div 
                className="cursor-pointer"
                onClick={() => toggleYear(milestone.year)}
              >
                <Card 
                  padding="lg" 
                  className="relative hover:shadow-medium transition-all duration-300 ml-16"
                >
                  {/* Year Badge */}
                  <div className="absolute -left-16 top-8 bg-primary-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Toggle Button */}
                    <button className="ml-4 p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      {expandedYear === milestone.year ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Content */}
                  {expandedYear === milestone.year && milestone.image && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </Card>
              </div>
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