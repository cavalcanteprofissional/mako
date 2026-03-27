'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function AboutHero() {
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
            {translate('about.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-justify">
            {translate('about.heroDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}
