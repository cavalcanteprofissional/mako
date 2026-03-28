'use client'

import { useState, useEffect } from 'react'
import { Card, Button } from '@/components/ui'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { Service } from '@/types'

interface ServiceDetailProps {
  services: Service[]
}

export default function ServiceDetail({ services }: ServiceDetailProps) {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const translateArray = (key: string): string[] => {
    const result = t(key)
    return Array.isArray(result) ? result as string[] : []
  }

  const getTranslatedService = (service: Service) => {
    const slug = service.slug
    const translatedName = translate(`services.${slug}.name`)
    const translatedDescription = translate(`services.${slug}.description`)
    const translatedFullDescription = translate(`services.${slug}.fullDescription`)
    const translatedBenefits = translateArray(`services.${slug}.benefits`)
    
    return {
      ...service,
      name: translatedName !== `services.${slug}.name` ? translatedName : service.name,
      description: translatedDescription !== `services.${slug}.description` ? translatedDescription : service.description,
      fullDescription: translatedFullDescription !== `services.${slug}.fullDescription` ? translatedFullDescription : service.fullDescription,
      benefits: translatedBenefits.length > 0 ? translatedBenefits : service.benefits,
    }
  }

  const currentService = getTranslatedService(services[currentIndex])

  const goToNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const goToPrev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length, isPaused])

  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {translate('heroOverlay.services')}
          </h2>
        </div>

        {/* Service Card */}
        <div className="relative overflow-hidden">
          <div 
            key={currentIndex}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-md p-6 lg:p-8"
          >
            {/* Service Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] w-full">
                <Image
                  src={currentService.image}
                  alt={currentService.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Navigation Buttons below image */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 shadow-md rounded-full flex items-center justify-center transition-colors"
                  aria-label={translate('services.previousService')}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 shadow-md rounded-full flex items-center justify-center transition-colors"
                  aria-label={isPaused ? translate('services.resume') : translate('services.pause')}
                >
                  {isPaused ? (
                    <Play className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Pause className="w-5 h-5 text-gray-700" />
                  )}
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 shadow-md rounded-full flex items-center justify-center transition-colors"
                  aria-label={translate('services.nextService')}
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

          {/* Service Info */}
          <div className="flex flex-col justify-center">
            {/* Title with Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(currentService.icon)} />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {currentService.name}
                </h2>
                {currentService.price && (
                  <p className="text-lg text-primary-600 font-medium">
                    {translate('services.startingFrom')} {currentService.price}
                  </p>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {currentService.fullDescription}
            </p>

            {/* Key Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {translate('services.benefits')}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-2 bg-green-50 rounded-lg">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className="text-green-800 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/contato"
                className="justify-center"
              >
                {translate('services.requestQuote')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                href={`https://wa.me/5585987654321?text=${encodeURIComponent(translate('services.whatsappMessage') || `Olá! Gostaria de saber mais sobre o serviço: ${currentService.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                {translate('services.talkToSpecialist')}
              </Button>
            </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`${translate('services.goToService')} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to get icon path
function getIconPath(iconName: string): string {
  const icons: Record<string, string> = {
    settings: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z",
    tools: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75M17.25 21v-7.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v7.5M17.25 21H12a3 3 0 0 1-3-3v-1.5M17.25 21v1.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1.5M6.75 17.25h3v-1.5h-3v1.5z",
    wrench: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75m0 0a1.5 1.5 0 0 0 3 0m0-7.5a1.5 1.5 0 0 0 3 0m-16.5 7.5h3v-1.5h-3v1.5z",
    users: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z",
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
    package: "M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
    "dollar-sign": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    draftingCompass: "M9 4v5l1.5 1.5M9 9l1.5-1.5M15 4v5l-1.5 1.5M15 9l-1.5-1.5M4 9h16M4 15h16M9 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M15 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
    layout: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    search: "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
    "shopping-cart": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 4 0 2 2 0 1 00-4 0m-5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
    construction: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    tool: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    default: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z"
  }
  
  return icons[iconName] || icons.default
}