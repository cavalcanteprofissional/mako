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
  description: 'Conheça a história, equipe e certificações da Mako Soluções Industriais. Especialistas em engenharia industrial com mais de 23 anos de experiência e certificação ISO 9001.',
  openGraph: {
    title: 'Empresa - Mako Soluções Industriais',
    description: 'Descubra nossa trajetória de sucesso, metodologia PMBoK/CPM e a equipe por trás das melhores soluções em engenharia industrial.',
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
                  +23
                </div>
                <p className="text-primary-100">Anos de Mercado</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  +200
                </div>
                <p className="text-primary-100">Projetos Industriais</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  R$ 2bi+
                </div>
                <p className="text-primary-100">Valor Gerenciado</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  +50
                </div>
                <p className="text-primary-100">Profissionais</p>
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
              Líderes em <span className="text-gradient">Engenharia Industrial</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Mako Soluções Industriais nasceu com o propósito de fornecer soluções completas em Engenharia Industrial, 
              atuando com foco na parceria fornecedor/cliente, priorizando qualidade, custo e prazo em projetos de Desenvolvimento, 
              Engenharia & Construção.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Com sede em Fortaleza-CE, atuação nacional e internacional, somos uma extensão do departamento de engenharia 
              do cliente, com ênfase em alto desempenho técnico, ambiental, humano e financeiro.
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
                  <h4 className="font-semibold text-gray-900">Foco no cliente e em seus negócios</h4>
                  <p className="text-gray-600 text-sm">Priorizamos as necessidades e objetivos do cliente</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Liderança</h4>
                  <p className="text-gray-600 text-sm">Guiamos com exemplo e visão estratégica</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trabalho em equipe de alto desempenho</h4>
                  <p className="text-gray-600 text-sm">Colaboração para alcançar resultados excepcionais</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.666.133L2.4 6.213v11.427l11.266 6.08 11.334-6.08V6.36L13.666.133zm5.518 10.133l-5.5 2.987v3.734l5.5 2.987 5.5-2.987v-3.587l-5.5-3.134zm-5.518 5.287L5.359 12.253v-2.12l8.307-4.507 8.334 4.507v2.12l-8.334 4.507z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pro-atividade</h4>
                  <p className="text-gray-600 text-sm">Antecipamos soluções e desafios</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inovação</h4>
                  <p className="text-gray-600 text-sm">Buscamos sempre novas tecnologias e soluções</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Velocidade</h4>
                  <p className="text-gray-600 text-sm">Agilidade na entrega de resultados</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ética</h4>
                  <p className="text-gray-600 text-sm">Atuamos com integridade e profissionalismo</p>
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