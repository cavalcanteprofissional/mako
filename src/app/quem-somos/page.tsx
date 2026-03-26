import type { Metadata } from 'next'
import { mockTeamMembers, mockCompanyHistory, mockCertifications } from '@/lib/mockData'
import TeamSection from '@/components/sections/TeamSection'
import HistorySection from '@/components/sections/HistorySection'
import CertificationsSection from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'Quem Somos - Mako® Soluções Industriais',
  description: 'Conheça a história, equipe e certificações da Mako® Soluções Industriais. Especialistas em engenharia industrial com mais de 23 anos de experiência e certificação ISO 9001.',
  openGraph: {
    title: 'Quem Somos - Mako® Soluções Industriais',
    description: 'Descubra nossa trajetória de sucesso, metodologia PMBoK/CPM e a equipe por trás das melhores soluções em engenharia industrial.',
    url: '/quem-somos',
  },
}

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A Mako® foi fundada em 2001, a partir da necessidade identificada no setor industrial local por uma empresa sólida, ética e comprometida, que valorizasse a parceria estratégica entre fornecedores e clientes nas áreas de Projetos, Engenharia e Construção. Desde sua criação, a empresa atua com foco em excelência técnica, governança corporativa e geração sustentável de valor.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection teamMembers={mockTeamMembers} />

      {/* History Section */}
      <HistorySection history={mockCompanyHistory} />

      {/* Certifications Section */}
      <CertificationsSection certifications={mockCertifications} />
    </>
  )
}
