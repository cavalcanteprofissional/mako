import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import ContactForm from '@/components/forms/ContactForm'
import { Section, Card } from '@/components/ui'
import MapSection from '@/components/sections/MapSection'

export const metadata: Metadata = {
  title: 'Contato - Mako® Soluções Industriais',
  description: 'Entre em contato com a Mako® Soluções Industriais para solicitar orçamentos ou informações sobre nossos serviços de engenharia industrial.',
  openGraph: {
    title: 'Contato - Mako® Soluções Industriais',
    description: 'Entre em contato conosco e descubra como podemos ajudar em seus projetos industriais.',
    url: '/contato',
  },
}

export default function ContatoPage() {


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contato
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Estamos prontos para transformar sua indústria com soluções completas de engenharia industrial.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${companyInfo.whatsappFormatted}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Mako®.')}`}
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
                className="flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Sidebar */}
          <Card padding="lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              
              {/* Endereço */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm">{companyInfo.address.fullAddress}</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <a href={`tel:${companyInfo.phoneFormatted}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600 text-sm">{companyInfo.workingHours.full}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div>
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
            <MapSection 
              address={companyInfo.address.fullAddress}
              lat={companyInfo.location.lat}
              lng={companyInfo.location.lng}
              companyName="Mako® Soluções Industriais"
            />
            <div className="p-4 bg-gray-50 flex justify-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}