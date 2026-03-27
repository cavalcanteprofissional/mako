'use client'

import { Section, Card } from '@/components/ui'
import { Award, Calendar, CheckCircle, Star, Shield } from 'lucide-react'
import { mockCertifications } from '@/lib/mockData'
import { useLanguage } from '@/context/LanguageContext'

export default function CertificacoesClient() {
  const { t, locale } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translate('certifications.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto text-justify">
              {translate('certifications.heroDescription')}
            </p>
            
            {/* Certification Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  ISO 9001
                </div>
                <p className="text-primary-100">{translate('certifications.quality')}</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  NR-12
                </div>
                <p className="text-primary-100">{translate('certifications.security')}</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  ABNT
                </div>
                <p className="text-primary-100">{translate('certifications.standards')}</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  100%
                </div>
                <p className="text-primary-100">{translate('certifications.compliance')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <Section padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {translate('certifications.mainCertifications')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translate('certifications.mainCertificationsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockCertifications.map((cert) => (
              <Card key={cert.id} padding="lg" className="text-center group">
                {/* Certification Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {cert.description}
                </p>

                {/* Additional Info */}
                <div className="space-y-3">
                  {cert.issuer && (
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-2" />
                      {cert.issuer}
                    </div>
                  )}

                  {cert.validUntil && (
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {translate('certifications.validUntil')}: {cert.validUntil}
                    </div>
                  )}
                </div>

                {/* Verification Badge */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {translate('certifications.activeCertificate')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Certification Details */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {translate('certifications.detailsTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translate('certifications.detailsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ISO 9001 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{translate('certifications.iso9001.title')}</h3>
                    <p className="text-gray-600">{translate('certifications.iso9001.subtitle')}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {translate('certifications.iso9001.description')}
                </p>
                
                <div className="space-y-2">
                  {(t('certifications.iso9001.features') as string[]).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* NR-12 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{translate('certifications.nr12.title')}</h3>
                    <p className="text-gray-600">{translate('certifications.nr12.subtitle')}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {translate('certifications.nr12.description')}
                </p>
                
                <div className="space-y-2">
                  {(t('certifications.nr12.features') as string[]).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* ABNT NBR 5410 */}
            <div>
              <Card padding="lg">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{translate('certifications.abnt.title')}</h3>
                    <p className="text-gray-600">{translate('certifications.abnt.subtitle')}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {translate('certifications.abnt.description')}
                </p>
                
                <div className="space-y-2">
                  {(t('certifications.abnt.features') as string[]).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {translate('certifications.benefitsTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translate('certifications.benefitsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{translate('certifications.benefits.quality.title')}</h3>
              <p className="text-gray-600">
                {translate('certifications.benefits.quality.description')}
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{translate('certifications.benefits.compliance.title')}</h3>
              <p className="text-gray-600">
                {translate('certifications.benefits.compliance.description')}
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{translate('certifications.benefits.advantage.title')}</h3>
              <p className="text-gray-600">
                {translate('certifications.benefits.advantage.description')}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {translate('certifications.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {translate('certifications.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              {translate('certifications.requestQuote')}
            </a>
            <a 
              href={`https://wa.me/${locale === 'pt-BR' ? '5585987654321' : '5585987654321'}?text=${locale === 'pt-BR' ? 'Olá! Gostaria de saber mais sobre as certificações da Mako®.' : 'Hello! I would like to know more about Mako® certifications.'}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              {translate('certifications.talkToSpecialist')}
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
