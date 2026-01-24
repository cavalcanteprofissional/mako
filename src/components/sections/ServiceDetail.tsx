'use client'

import { Card, Button } from '@/components/ui'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'
import type { Service } from '@/types'

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-medium">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Service Info */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h2>
                {service.price && (
                  <p className="text-xl text-blue-600 font-semibold">
                    A partir de {service.price}
                  </p>
                )}
              </div>
              
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(service.icon)} />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            {/* Key Benefits */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principais Benefícios
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className="text-green-800 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contato"
                className="justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                href={`https://wa.me/5585987654321?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço: ${service.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                Falar com Especialista
              </Button>
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
    settings: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z",
    tools: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75M17.25 21v-7.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v7.5M17.25 21H12a3 3 0 0 1-3-3v-1.5M17.25 21v1.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1.5M6.75 17.25h3v-1.5h-3v1.5z",
    wrench: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75m0 0a1.5 1.5 0 0 0 3 0m0-7.5a1.5 1.5 0 0 0 3 0m-16.5 7.5h3v-1.5h-3v1.5z",
    users: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z",
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
    default: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z"
  }
  
  return icons[iconName] || icons.default
}