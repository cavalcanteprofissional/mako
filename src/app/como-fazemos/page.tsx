import type { Metadata } from 'next'
import { mockCertifications } from '@/lib/mockData'
import CertificationsSection from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'Como Fazemos - Mako Soluções Industriais',
  description: 'Metodologia de trabalho da Mako Soluções Industriais. Referência PMBoK/CPM para garantir excelência em projetos industriais.',
}

export default function ComoFazemosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Fazemos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Atuamos em todas as fases do ciclo de vida de um projeto, desde a concepção e justificativas, analisando de forma criteriosa os objetivos e resultados esperados, passando pelo controle da execução, até a finalização e fechamento do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection certifications={mockCertifications} />
    </>
  )
}
