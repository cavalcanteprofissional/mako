'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import ContactForm from '@/components/forms/ContactForm'
import { Section, Card } from '@/components/ui'
import MapSection from '@/components/sections/MapSection'
import CTASection from '@/components/sections/CTASection'
import { useLanguage } from '@/context/LanguageContext'

export default function ContatoClient() {
  const { t, locale } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' && result !== key ? result : key
  }

  return (
    <div key={locale}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {translate('contact.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-center">
              {translate('contact.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info Sidebar */}
          <Card padding="lg" className="flex flex-col">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {translate('contact.contactInfo')}
              </h2>
              
              {/* Endereço */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{translate('contact.address')}</h3>
                  <p className="text-gray-600 text-sm">{companyInfo.address.fullAddress}</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{translate('contact.phone')}</h3>
                  <span className="text-gray-600 text-sm">{companyInfo.phone}</span>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{translate('contact.email')}</h3>
                  <span className="text-gray-600 text-sm">{companyInfo.email}</span>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{translate('contact.workingHours')}</h3>
                  <p className="text-gray-600 text-sm">{translate('workingHours.full')}</p>
                </div>
              </div>
            </div>

            {/* Mini Map */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">{translate('contact.location')}</h3>
              <div className="rounded-lg overflow-hidden h-64">
                <MapSection 
                  address={companyInfo.address.fullAddress}
                  lat={companyInfo.location.lat}
                  lng={companyInfo.location.lng}
                  companyName="Mako Soluções Industriais"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-gray-500 text-sm">
                  {translate('contact.viewOnMaps')}
                </span>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div className="flex">
            <Card padding="lg" className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{translate('contact.sendMessage')}</h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
