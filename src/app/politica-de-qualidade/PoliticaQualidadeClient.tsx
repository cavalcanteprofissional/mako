'use client'

import { Section, Card } from '@/components/ui'
import { Award, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function PoliticaQualidadeClient() {
  const { t, locale } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' && result !== key ? result : key
  }

  return (
    <div key={locale} className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {translate('qualityPolicy.heroTitle')}
            </h1>
            <p className="text-xl text-white">
              {translate('qualityPolicy.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <Card padding="lg">
              <p className="text-gray-700 leading-relaxed">
                {translate('qualityPolicy.intro')}
              </p>
            </Card>
          </div>

          {/* Commitment */}
          <div className="mb-16">
            <Card padding="lg">
              <p className="text-gray-700 leading-relaxed">
                {translate('qualityPolicy.commitmentDesc')}
              </p>
            </Card>
          </div>

          {/* Quality System */}
          <div className="mb-16">
            <Card padding="lg">
              <p className="text-gray-700 leading-relaxed">
                {translate('qualityPolicy.systemDesc')}
              </p>
            </Card>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <Card padding="lg">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {translate('qualityPolicy.responsibilityText')}
              </p>
            </Card>
          </div>

          {/* Contact */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {translate('qualityPolicy.contactTitle')}
            </h3>
            <p className="text-gray-600 mb-8 text-center">
              {translate('qualityPolicy.contactDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:possofalar1@mako.ind.br"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{translate('qualityPolicy.email')}</p>
                  <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    possofalar1@mako.ind.br
                  </p>
                </div>
              </a>

              <a
                href="tel:558591594599"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{translate('qualityPolicy.phone')}</p>
                  <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    +55 85 99159-4599
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
