'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  variant?: 'primary' | 'dark'
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref = "/contato",
  secondaryButtonText,
  secondaryButtonHref = "/o-que-fazemos",
  variant = 'primary'
}: CTASectionProps) {
  const { t } = useLanguage()
  const isDark = variant === 'dark'

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const defaultTitle = translate('cta.title')
  const defaultDescription = translate('cta.description')
  const defaultPrimaryText = translate('cta.requestQuote')
  const defaultSecondaryText = translate('cta.ourServices')

  return (
    <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <div className={`max-w-4xl mx-auto text-center ${isDark ? 'text-white' : ''}`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isDark ? (
              <>
                {(title || defaultTitle).split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{(title || defaultTitle).split(' ').slice(-1)}</span>
              </>
            ) : (title || defaultTitle)}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-primary-100' : 'text-gray-600'}`}>
            {description || defaultDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButtonHref}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-soft hover:shadow-medium'
              }`}
            >
              {primaryButtonText || defaultPrimaryText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={secondaryButtonHref}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20' 
                  : 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
            >
              {secondaryButtonText || defaultSecondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
