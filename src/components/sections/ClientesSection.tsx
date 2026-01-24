'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { mockClients } from '@/lib/mockData'
import { Quote, Star } from 'lucide-react'

export default function ClientesSection() {
  const featuredClients = mockClients.filter(client => client.featured)
  const allClients = mockClients

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quem <span className="text-gradient">Confia</span> na Mako
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Orgulhamo-nos de parceirias com empresas líderes que 
            confiam na qualidade e na confiabilidade de nossas soluções
          </p>
        </div>

        {/* Featured Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredClients.map((client, index) => (
            <Card key={client.id} hover={true} className="text-center">
              <div className="flex flex-col items-center space-y-4">
                {/* Client Logo */}
                <div className="relative w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Client Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  {client.description && (
                    <p className="text-gray-600 text-sm">
                      {client.description}
                    </p>
                  )}
                </div>

                {/* CTA */}
                {client.website && (
                  <Link
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>Visitar site</span>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* All Clients Grid */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Nossos Parceiros
            </h3>
            <p className="text-gray-600">
              Empresas de diversos segmentos confiam em nossas soluções
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {allClients.map((client, index) => (
              <div 
                key={client.id}
                className="relative h-16 group cursor-pointer"
                onClick={() => client.website && window.open(client.website, '_blank')}
              >
                <div className="absolute inset-0 bg-white rounded-lg shadow-soft flex items-center justify-center p-3 group-hover:shadow-medium transition-shadow duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Projetos Concluídos</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              O que dizem nossos clientes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Depoimentos de parceiros que experimentaram a qualidade 
              e a excelência dos nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Silva',
                role: 'Gerente de Operações',
                company: 'Indústria Alimentícia XYZ',
                content: 'A Mako transformou completamente nossa linha de produção. A automação instalada aumentou nossa produtividade em 40% e reduziu os índices de defeito.',
                rating: 5,
                avatar: '/images/testimonials/carlos.jpg',
              },
              {
                name: 'Maria Santos',
                role: 'Diretora Industrial',
                company: 'Metalúrgica ABC',
                content: 'Equipe extremamente competente e dedicada. O projeto foi entregue no prazo e superou todas as nossas expectativas.',
                rating: 5,
                avatar: '/images/testimonials/maria.jpg',
              },
              {
                name: 'Roberto Costa',
                role: 'Engenheiro Chefe',
                company: 'Química Brasil',
                content: 'Os serviços de manutenção preventiva garantiram a estabilidade de nossas operações. Excelente suporte técnico.',
                rating: 4,
                avatar: '/images/testimonials/roberto.jpg',
              },
            ].map((testimonial, index) => (
              <Card key={index} hover={true}>
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed italic">
&ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}