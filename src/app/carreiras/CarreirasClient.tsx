'use client'

import { Section, Card } from '@/components/ui'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CarreirasClient() {
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
              {translate('careers.heroTitle')}
            </h1>
            <p className="text-xl text-white">
              {translate('careers.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {translate('careers.applyTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translate('careers.applySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{translate('careers.jobSite')}</h3>
              <p className="text-gray-600 mb-6">
                {translate('careers.jobSiteDesc')}
              </p>
              <a 
                href="https://makosolucoes.vagas.solides.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                {translate('careers.applyNow')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{translate('careers.byEmail')}</h3>
              <p className="text-gray-600 mb-4">
                {translate('careers.emailDesc')}
              </p>
              <a 
                href="mailto:selecao@mako.ind.br"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                {translate('careers.sendResume')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
