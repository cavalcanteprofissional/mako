import type { Metadata } from 'next'
import ClientsGridSection from '@/components/sections/ClientsGridSection'
import BrazilMapSection from '@/components/sections/BrazilMapSection'

export const metadata: Metadata = {
  title: 'Clientes - Mako® Soluções Industriais',
  description: 'Conheça os clientes que confiam na Mako® Soluções Industriais. Empresas referência em seus setores.',
}

export default function ClientesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Clientes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A Mako® atua como uma extensão especializada dos departamentos de engenharia e projetos de seus clientes. Nossa expertise é projetada para empresas que buscam transformar planos industriais complexos em realidade operacional, com eficiência, segurança e conformidade total.
            </p>
          </div>
        </div>
      </section>

      {/* Brazil Map Section */}
      <BrazilMapSection />

      {/* Clients Grid Section */}
      <ClientsGridSection />
    </>
  )
}
