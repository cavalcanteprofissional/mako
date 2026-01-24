'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { mockProducts } from '@/lib/mockData'
import { Card, Badge, Button } from '@/components/ui'
import { 
  Package, 
  Cpu, 
  Zap, 
  Monitor, 
  Code, 
  Cable,
  Search,
  Filter,
  ArrowRight,
  Star,
  ShoppingCart,
  ChevronDown
} from 'lucide-react'
import type { Product, ProductCategory } from '@/types'

const categoryIcons: Record<ProductCategory, React.ComponentType<{ className?: string }>> = {
  clps: Cpu,
  sensores: Zap,
  atuadores: Package,
  painels: Monitor,
  software: Code,
  interfaces: Cable,
  comunicacao: Cable,
}

const categoryNames: Record<ProductCategory, string> = {
  clps: 'CLPs',
  sensores: 'Sensores',
  atuadores: 'Atuadores',
  painels: 'Painéis',
  software: 'Software',
  interfaces: 'Interfaces',
  comunicacao: 'Comunicação',
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'featured'>('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort products
    filtered.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      }
      return a.name.localeCompare(b.name)
    })

    return filtered
  }, [selectedCategory, searchTerm, sortBy])

  const ProductCard = ({ product }: { product: Product }) => {
    const Icon = categoryIcons[product.category]
    
    return (
      <Card hover className="group cursor-pointer">
        <Link href={`/produtos/${product.slug}`}>
          <div className="relative overflow-hidden">
            {/* Product Image */}
            <div className="aspect-w-16 aspect-h-12 bg-gray-100 relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {product.featured && (
                <Badge variant="warning">
                  <Star className="w-3 h-3 mr-1" />
                  Destaque
                </Badge>
              )}
              {product.inStock ? (
                <Badge variant="success">Em Estoque</Badge>
              ) : (
                <Badge variant="error">Esgotado</Badge>
              )}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            {/* Category */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Icon className="w-4 h-4 mr-1" />
              {categoryNames[product.category]}
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-1 mb-4">
              {product.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="secondary" size="sm">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div>
                {product.price ? (
                  <p className="text-xl font-bold text-gray-900">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price)}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">Sob consulta</p>
                )}
              </div>
              
              <Button size="sm" variant="outline">
                Detalhes
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </Link>
      </Card>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-yellow-400">Produtos</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Linha completa de equipamentos e soluções para automação industrial das melhores marcas do mercado.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>

                <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-3">Categorias</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === 'all'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Todas as Categorias
                      </button>
                      {Object.entries(categoryNames).map(([key, name]) => {
                        const Icon = categoryIcons[key as ProductCategory]
                        return (
                          <button
                            key={key}
                            onClick={() => setSelectedCategory(key as ProductCategory)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                              selectedCategory === key
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {name}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Sort */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 mb-3">Ordenar por</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="featured"
                          checked={sortBy === 'featured'}
                          onChange={(e) => setSortBy(e.target.value as 'featured')}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Destaques</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="name"
                          checked={sortBy === 'name'}
                          onChange={(e) => setSortBy(e.target.value as 'name')}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Nome (A-Z)</span>
                      </label>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('all')
                      setSearchTerm('')
                      setSortBy('featured')
                    }}
                    className="w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                </h2>

                {/* Mobile Filter Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nenhum produto encontrado
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tente ajustar seus filtros ou termos de busca.
                  </p>
                  <Button onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                    setSortBy('featured')
                  }}>
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Não encontrou o que <span className="text-gradient">procura</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Temos acesso a uma vasta rede de fornecedores e podemos encontrar o produto ideal para sua necessidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Fale com Especialista
              </Link>
              <a
                href={`https://wa.me/5585987654321?text=Olá! Gostaria de consultar sobre produtos específicos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Consultar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}