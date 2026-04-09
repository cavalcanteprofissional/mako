'use client'

import { Section, Card } from '@/components/ui'
import { Users, FileCheck, TrendingUp, TreePine, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function PoliticaSegurancaClient() {
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
              {translate('securityPolicy.heroTitle')}
            </h1>
            <p className="text-xl text-white">
              {translate('securityPolicy.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              {translate('securityPolicy.intro')}
            </p>
          </div>

          {/* SMS Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{translate('securityPolicy.programTitle')}</h2>
            <Card padding="lg" className="bg-primary-50 border-l-4 border-primary-500">
              <p className="text-gray-700">
                {translate('securityPolicy.programDesc')}
              </p>
            </Card>
          </div>

          {/* Responsibilities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{translate('securityPolicy.responsibilitiesTitle')}</h2>
            <Card padding="lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    {translate('securityPolicy.responsibilitiesDesc')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Commitments */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{translate('securityPolicy.commitmentsTitle')}</h2>
            <div className="space-y-4">
              <Card padding="md">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    {translate('securityPolicy.commitment1')}
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    {translate('securityPolicy.commitment2')}
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    {translate('securityPolicy.commitment3')}
                  </span>
                </div>
              </Card>

              <Card padding="md">
                <div className="flex items-center">
                  <TreePine className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    {translate('securityPolicy.commitment4')}
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {translate('securityPolicy.contactTitle')}
            </h3>
            <p className="text-gray-600 mb-8 text-center">
              {translate('securityPolicy.contactDesc')}
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
                  <p className="text-sm text-gray-500">{translate('securityPolicy.email')}</p>
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
                  <p className="text-sm text-gray-500">{translate('securityPolicy.phone')}</p>
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
