'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ServicesHero() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  return (
    <section className="bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 text-white py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {translate('services.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-justify">
            {translate('services.heroDescription')}
          </p>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                +23
              </div>
              <p className="text-white/80">{translate('services.statsYears')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                +200
              </div>
              <p className="text-white/80">{translate('services.statsProjects')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                ISO 9001
              </div>
              <p className="text-white/80">{translate('services.statsCertification')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                PMBoK
              </div>
              <p className="text-white/80">{translate('services.statsMethodology')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
