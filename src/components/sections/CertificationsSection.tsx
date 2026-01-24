'use client'

import Image from 'next/image'
import { Card } from '@/components/ui'
import { Award, Calendar } from 'lucide-react'
import type { Certification } from '@/types'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossas <span className="text-gradient">Certificações</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reconhecimento e qualificação que garantem a excelência dos nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} padding="lg" className="text-center group">
              {/* Certification Image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Certification Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
                    <Award className="w-4 h-4 mr-2" />
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
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Por que escolher uma empresa <span className="text-gradient">certificada</span>?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                <p className="text-gray-600 text-sm">
                  Processos auditados e validados por órgãos competentes
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excelência Operacional</h4>
                <p className="text-gray-600 text-sm">
                  Compromisso com os mais altos padrões de qualidade e segurança
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Conformidade Legal</h4>
                <p className="text-gray-600 text-sm">
                  Atendimento a todas as normas e regulamentações vigentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}