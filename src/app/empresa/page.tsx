import type { Metadata } from 'next'
import Image from 'next/image'
import { companyInfo } from '@/lib/constants'
import { mockTeamMembers, mockCompanyHistory, mockCertifications } from '@/lib/mockData'
import TeamSection from '@/components/sections/TeamSection'
import HistorySection from '@/components/sections/HistorySection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import { Section, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Empresa - Mako Soluções Industriais',
  description: 'Conheça a história, equipe e certificações da Mako Soluções Industriais. Especialistas em automação industrial com mais de 8 anos de experiência.',
  openGraph: {
    title: 'Empresa - Mako Soluções Industriais',
    description: 'Descubra nossa trajetória de sucesso e a equipe por trás das melhores soluções em automação industrial.',
    url: '/empresa',
  },
}

export default function EmpresaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-yellow-400">Mako</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Transformamos desafios industriais em oportunidades através da automação e tecnologia de ponta
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {companyInfo.founded}
                </div>
                <p className="text-primary-100">Anos de Experiência</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  500+
                </div>
                <p className="text-primary-100">Projetos Concluídos</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  50+
                </div>
                <p className="text-primary-100">Clientes Satisfeitos</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  24/7
                </div>
                <p className="text-primary-100">Suporte Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Líderes em <span className="text-gradient">Automação Industrial</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Mako Soluções Industriais nasceu da paixão por transformar processos industriais através da tecnologia. 
              Com sede em Fortaleza-CE, atendemos clientes em todo o território nacional, oferecendo soluções 
              personalizadas que aumentam a eficiência, segurança e produtividade.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nossa equipe multidisciplinar combina conhecimento técnico profundo com visão estratégica para 
              desenvolver projetos que vão além da simples automação, criando ecossistemas industriais inteligentes e conectados.
            </p>
            
            {/* Company Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nossos Valores</h3>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Excelência</h4>
                  <p className="text-gray-600 text-sm">Buscamos sempre a melhor qualidade em tudo o que fazemos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4 3 1 6 1 9c0 2.7 3.4 6.83 8.55 11.54L12 22.99l2.45-2.45C19.6 15.83 23 11.7 23 9c0-3-2-6-6.5-6zM7.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 10.5 7.5 10.5 6 9.83 6 9zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inovação</h4>
                  <p className="text-gray-600 text-sm">Estamos sempre em busca de novas tecnologias e soluções</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compromisso</h4>
                  <p className="text-gray-600 text-sm">Assumimos total responsabilidade pelos resultados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative h-96 rounded-lg overflow-hidden shadow-medium">
              <Image
                src="/images/hero/slide-1.jpg"
                alt="Mako Soluções Industriais"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Company Info Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-medium max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/logo.svg"
                    alt="Mako"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{companyInfo.fullName}</h3>
                  <p className="text-gray-600 text-sm">CNPJ: {companyInfo.cnpj}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fundação:</span>
                  <span className="font-medium">{companyInfo.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sede:</span>
                  <span className="font-medium">{companyInfo.address.city}/{companyInfo.address.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Atendimento:</span>
                  <span className="font-medium">{companyInfo.workingHours.weekdays}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <TeamSection teamMembers={mockTeamMembers} />

      {/* History Section */}
      <HistorySection history={mockCompanyHistory} />

      {/* Certifications Section */}
      <CertificationsSection certifications={mockCertifications} />

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos <span className="text-yellow-400">Transformar</span> Sua Indústria Juntos?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossa experiência e tecnologia podem beneficiar seus processos industriais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Proposta
            </a>
            <a 
              href="https://wa.me/5585987654321?text=Olá! Gostaria de saber mais sobre a empresa Mako." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}