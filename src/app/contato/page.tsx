import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import ContactForm from '@/components/forms/ContactForm'
import { Section, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contato - Mako Soluções Industriais',
  description: 'Entre em contato com a Mako Soluções Industriais para solicitar orçamentos, suporte técnico ou informações sobre nossos serviços de automação industrial.',
  openGraph: {
    title: 'Contato - Mako Soluções Industriais',
    description: 'Entre em contato conosco e descubra como podemos ajudar sua indústria.',
    url: '/contato',
  },
}

export default function ContatoPage() {


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-yellow-400">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Estamos prontos para transformar sua indústria com soluções de automação inteligentes e eficientes.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${companyInfo.whatsappFormatted}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Mako.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Fale pelo WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phoneFormatted}`}
                className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <Card padding="md" className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600 text-sm">{companyInfo.address.fullAddress}</p>
                  </div>
                </Card>

                <Card padding="md" className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href={`tel:${companyInfo.phoneFormatted}`} className="hover:text-blue-600 transition-colors">
                        {companyInfo.phone}
                      </a>
                    </p>
                  </div>
                </Card>

                <Card padding="md" className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600 text-sm">
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-600 transition-colors">
                        {companyInfo.email}
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <a href={`mailto:${companyInfo.emailTechnical}`} className="hover:text-blue-600 transition-colors">
                        {companyInfo.emailTechnical} (Suporte Técnico)
                      </a>
                    </p>
                  </div>
                </Card>

                <Card padding="md" className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600 text-sm">{companyInfo.workingHours.full}</p>
                    <p className="text-gray-600 text-sm">Suporte 24/7 para emergências</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergência 24/7
              </h3>
              <p className="text-red-700 text-sm mb-3">
                Para emergências técnicas, entre em contato imediato:
              </p>
              <a
                href={`https://wa.me/${companyInfo.whatsappFormatted}?text=${encodeURIComponent('EMERGÊNCIA! Preciso de suporte técnico imediato.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 block text-center"
              >
                Contato de Emergência
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nossa Localização</h2>
          
          <div className="bg-white rounded-lg shadow-medium overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mako Soluções Industriais</h3>
                <p className="text-gray-600 mb-4">{companyInfo.address.fullAddress}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <Card padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qual o tempo médio de atendimento para emergências?</h3>
              <p className="text-gray-600">
                Para emergências técnicas, nossa equipe está disponível 24/7 e承诺 responder dentro de 2 horas em áreas metropolitanas e até 4 horas em outras regiões.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vocês atendem em todo o Brasil?</h3>
              <p className="text-gray-600">
                Sim, atendemos em todo o território nacional. Nossa matriz está em Fortaleza/CE, mas我们有 equipe e parceiros em diversos estados para garantir atendimento rápido.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Como funciona o processo de orçamento?</h3>
              <p className="text-gray-600">
                Após o contato inicial, realizamos uma visita técnica para levantamento detalhado. Em até 5 dias úteis, apresentamos uma proposta completa com escopo, prazos e valores.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quais tipos de garantia vocês oferecem?</h3>
              <p className="text-gray-600">
                Oferecemos garantia de 12 meses para todos os serviços realizados e garantia estendida conforme fabricante para equipamentos instalados.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}