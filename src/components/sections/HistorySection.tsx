'use client'

import type { CompanyHistory } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface HistorySectionProps {
  history: CompanyHistory[]
}

export default function HistorySection({ history }: HistorySectionProps) {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const getHistoryTranslations = (year: string) => {
    const yearKey = year === String(new Date().getFullYear()) ? 'current' : year
    return {
      title: translate(`history.${yearKey}.title`),
      description: translate(`history.${yearKey}.description`),
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {translate('about.history')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            {translate('about.historyDescription')}
          </p>
        </div>

        {/* Timeline Vertical Alternating */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-600 to-primary-400 transform -translate-x-1/2" />

          <div className="space-y-0">
            {history.map((milestone, index) => {
              const isLeft = index % 2 === 0
              const translations = getHistoryTranslations(milestone.year)
              const translatedTitle = translations.title !== `history.${milestone.year === String(new Date().getFullYear()) ? 'current' : milestone.year}.title` ? translations.title : milestone.title
              const translatedDescription = translations.description !== `history.${milestone.year === String(new Date().getFullYear()) ? 'current' : milestone.year}.description` ? translations.description : milestone.description
              
              return (
                <div 
                  key={milestone.year} 
                  className={`relative flex items-center justify-between min-h-[180px] ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className="w-5/12">
                    <div className="bg-white rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 p-6">
                      {milestone.year !== '2026' && (
                        <div className="bg-primary-600 text-white px-4 py-1 rounded-full font-bold text-sm inline-block mb-3">
                          {milestone.year}
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {translatedTitle}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {translatedDescription}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Spacer */}
                  <div className="w-5/12" />
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {translate('about.ctaHistoryTitle')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {translate('about.ctaHistoryDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}
