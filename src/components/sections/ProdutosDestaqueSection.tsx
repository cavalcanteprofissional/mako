'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Badge, Button } from '@/components/ui'
import { mockProducts } from '@/lib/mockData'
import { 
  Package, 
  Cpu, 
  Zap, 
  Monitor, 
  Code, 
  Cable,
  ArrowRight,
  Star,
  ShoppingCart
} from 'lucide-react'
import type { ProductCategory } from '@/types'

const categoryInfo: Record<ProductCategory, { name: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  clps: { name: 'CLPs', icon: Cpu, color: 'from-blue-500 to-blue-600' },
  sensores: { name: 'Sensores', icon: Zap, color: 'from-green-500 to-green-600' },
  atuadores: { name: 'Atuadores', icon: Package, color: 'from-purple-500 to-purple-600' },
  painels: { name: 'Painéis', icon: Monitor, color: 'from-orange-500 to-orange-600' },
  software: { name: 'Software', icon: Code, color: 'from-pink-500 to-pink-600' },
  interfaces: { name: 'Interfaces', icon: Cable, color: 'from-cyan-500 to-cyan-600' },
  comunicacao: { name: 'Comunicação', icon: Cable, color: 'from-indigo-500 to-indigo-600' },
}

export default function ProdutosDestaqueSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'todos'>('todos')
  
  const featuredProducts = mockProducts.filter(product => product.featured)
  
  const categories = Object.keys(categoryInfo) as ProductCategory[]
  
  const filteredProducts = selectedCategory === 'todos' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory)

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Produtos em Destaque
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções de <span className="text-gradient">Alta Qualidade</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Equipamentos e componentes industriais das melhores marcas 
            para garantir o desempenho da sua operação
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === 'todos'
                ? 'bg-blue-600 text-white shadow-medium'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Todos os Produtos
          </button>
          {categories.map((category) => {
            const Info = categoryInfo[category]
            const Icon = Info.icon
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r text-white shadow-medium'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundImage: `linear-gradient(to right, ${Info.color.replace('from-', '').replace('to-', ', ')}` }
                    : {}
                }
              >
                <Icon className="w-4 h-4" />
                <span>{Info.name}</span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => {
            const CategoryInfo = categoryInfo[product.category]
            const CategoryIcon = CategoryInfo.icon
            
            return (
              <Card
                key={product.id}
                hover={true}
                className="group relative overflow-hidden"
              >
                {/* Stock Badge */}
                {product.inStock && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="success" className="text-xs">
                      Em Estoque
                    </Badge>
                  </div>
                )}

                {/* Product Image */}
                <div className="aspect-square relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/produtos/${product.slug}`}>
                      <Button variant="primary" size="sm" className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  {/* Category */}
                  <div className="flex items-center space-x-2 text-sm">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${CategoryInfo.color} flex items-center justify-center`}>
                      <CategoryIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-600 font-medium">
                      {CategoryInfo.name}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{product.features.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">(4.5)</span>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={`/produtos/${product.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1 group"
                    >
                      <span>Detalhes</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Mais de 100 produtos disponíveis
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore nosso catálogo completo com equipamentos das melhores marcas 
              do mercado industrial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produtos">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Ver Todos os Produtos
                  </span>
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Solicitar Cotação
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}