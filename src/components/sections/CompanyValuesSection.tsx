'use client'

import { Shield, Lightbulb, Users, Target, CheckCircle, ArrowRight, Heart, Eye, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CompanyValuesSection({ className = '' }: CompanyValuesSectionProps) {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const values = [
    {
      icon: Shield,
      title: translate('values.focusOnClient'),
      description: translate('values.focusOnClientDesc'),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Lightbulb,
      title: translate('values.innovation'),
      description: translate('values.innovationDesc'),
      gradient: 'from-primary-600 to-primary-800',
    },
    {
      icon: Users,
      title: translate('values.teamwork'),
      description: translate('values.teamworkDesc'),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Target,
      title: translate('values.proactivity'),
      description: translate('values.proactivityDesc'),
      gradient: 'from-primary-600 to-primary-800',
    },
  ]

  const benefits = [
    translate('values.expertise'),
    translate('values.customized'),
    translate('values.support'),
    translate('values.certification'),
  ]

  return (
    <section className={`py-12 md:py-20 bg-gradient-to-b from-white to-primary-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {translate('values.title')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {translate('values.subtitle')}
          </p>
        </div>

        {/* Company Values - Grid com gradiente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-xl border border-gray-100 p-4 md:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 text-center group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{translate('values.mission')}</h3>
            <p className="text-primary-100 text-xs md:text-sm leading-relaxed">
              {translate('values.missionText')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-700 to-primary-500 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
              <Eye className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{translate('values.vision')}</h3>
            <p className="text-primary-100 text-xs md:text-sm leading-relaxed">
              {translate('values.visionText')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
              <Star className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{translate('values.values')}</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              {translate('values.valuesText')}
            </p>
          </div>
        </div>

        {/* Por que escolher a Mako */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {translate('values.whyChoose')}
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-600 mb-6 text-lg">
                {translate('cta.description')}
              </p>
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                {translate('cta.requestQuote')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CompanyValuesSectionProps {
  className?: string
}