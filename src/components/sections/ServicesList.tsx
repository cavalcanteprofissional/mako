'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui'
import { ArrowRight, ChevronDown } from 'lucide-react'
import type { Service } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface ServicesListProps {
  services: Service[]
}

export default function ServicesList({ services }: ServicesListProps) {
  const { t } = useLanguage()
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [lockedService, setLockedService] = useState<string | null>(null)
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [heights, setHeights] = useState<{ [key: string]: number }>({})

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

  const handleClick = (serviceId: string) => {
    if (lockedService === serviceId) {
      setLockedService(null)
    } else {
      setLockedService(serviceId)
    }
  }

  const isExpanded = (serviceId: string) => hoveredService === serviceId || lockedService === serviceId

  useEffect(() => {
    const newHeights: { [key: string]: number } = {}
    services.forEach((service) => {
      if (contentRefs.current[service.id]) {
        newHeights[service.id] = contentRefs.current[service.id]?.scrollHeight || 0
      }
    })
    setHeights(newHeights)
  }, [services])

  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {translate('heroOverlay.services')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('services.listDescription')}
          </p>
        </div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => {
            const translatedService = getTranslatedService(service)
            const isServiceExpanded = isExpanded(service.id)
            const isLocked = lockedService === service.id
            
            return (
              <div 
                key={service.id}
                id={service.slug}
                className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => !isLocked && setHoveredService(null)}
                onClick={() => handleClick(service.id)}
              >
                {/* Card Header - Always Visible */}
                <div className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(translatedService.icon)} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {translatedService.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {translatedService.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-500 ${isServiceExpanded ? 'rotate-180' : ''}`} />
                </div>

                {/* Expanded Content */}
                <div 
                  ref={(el) => { contentRefs.current[service.id] = el }}
                  className="overflow-hidden transition-all ease-out"
                  style={{ 
                    maxHeight: isServiceExpanded ? `${heights[service.id] || 500}px` : '0px',
                    transitionDuration: '500ms'
                  }}
                >
                  <div className="px-6 pb-6 pt-2">
                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-6" />
                    
                    {/* Service Info */}
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {translatedService.fullDescription}
                      </p>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {translate('services.benefits')}
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {translatedService.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center p-2 bg-green-50 rounded-lg">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {translate('services.ctaTitle')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {translate('services.ctaDescription')}
          </p>
          <div className="flex justify-center">
            <Button
              href="/contato"
              className="justify-center"
            >
              {translate('services.customQuote')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

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
