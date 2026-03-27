'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { Service } from '@/types'

interface HeroServiceOverlayProps {
  services: Service[]
  currentSlide: number
  onSlideChange: (index: number) => void
}

export default function HeroServiceOverlay({ services, currentSlide, onSlideChange }: HeroServiceOverlayProps) {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const getTranslatedService = (service: Service) => {
    const slug = service.slug
    const translatedName = translate(`services.${slug}.name`)
    const translatedDescription = translate(`services.${slug}.description`)
    
    return {
      ...service,
      name: translatedName !== `services.${slug}.name` ? translatedName : service.name,
      description: translatedDescription !== `services.${slug}.description` ? translatedDescription : service.description,
    }
  }

  const currentService = getTranslatedService(services[currentSlide])

  return (
    <div className="py-3 md:py-6">
      <div className="max-w-5xl mx-auto px-3 md:px-4">
        {/* Card - Glassmorphism */}
        <div 
          key={currentSlide}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-soft border border-white/30 p-4 md:p-7"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Service Content */}
            <div className="text-center">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {currentService.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-xl">
                {currentService.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium shadow-soft hover:shadow-medium transition-all duration-200 text-sm md:text-base flex-1"
              >
                {translate('heroOverlay.requestQuote')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/o-que-fazemos"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base flex-1"
              >
                {translate('heroOverlay.services')}
              </a>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => onSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-600 w-6 md:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${translate('services.goToService')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
