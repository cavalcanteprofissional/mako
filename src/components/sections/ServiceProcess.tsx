'use client'

import { Card, Button } from '@/components/ui'
import { Clock, ArrowRight, CheckCircle } from 'lucide-react'
import type { ServiceProcessStep } from '@/types'

interface ServiceProcessProps {
  process: ServiceProcessStep[]
  title: string
  description: string
}

export default function ServiceProcess({ process, title, description }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-gradient">Processo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Process Line */}
              {index < process.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-primary-200 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row items-start gap-8 mb-12 md:mb-16">
                {/* Step Number */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    {/* Step Icon */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-soft flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(step.icon)} />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <Card padding="lg" className="relative">
                    {/* Step Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        {step.duration && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.duration}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Completion Indicator */}
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Concluído com garantia de qualidade
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}

          {/* Process Summary */}
          <div className="mt-16 text-center">
            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Garantia de <span className="text-gradient">Qualidade</span> em Cada Etapa
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nosso processo é estruturado para garantir entregas consistentes, 
                dentro do prazo e com a qualidade que seus projetos merecem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Qualidade Assegurada</h4>
                  <p className="text-gray-600 text-sm">
                    Cada etapa validada por especialistas
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excelência Operacional</h4>
                  <p className="text-gray-600 text-sm">
                    Melhores práticas de mercado aplicadas
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Conformidade Total</h4>
                  <p className="text-gray-600 text-sm">
                    Atendimento a normas e regulamentações
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="mt-8 pt-8 border-t border-primary-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Pronto para iniciar seu projeto?
                </h4>
                <Button
                  href="/contato"
                  className="justify-center"
                >
                  Iniciar Consultoria
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to get icon path
function getIconPath(iconName: string): string {
  const icons: Record<string, string> = {
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z",
    compass: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4 3 1 6 1 9c0 2.7 3.4 6.83 8.55 11.54L12 22.99l2.45-2.45C19.6 15.83 23 11.7 23 9c0-3-2-6-6.5-6zM7.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 10.5 7.5 10.5 6 9.83 6 9zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z",
    clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
    tools: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75M17.25 21v-7.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v7.5M17.25 21H12a3 3 0 0 1-3-3v-1.5M17.25 21v1.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1.5M6.75 17.25h3v-1.5h-3v1.5z",
    default: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z"
  }
  
  return icons[iconName] || icons.default
}