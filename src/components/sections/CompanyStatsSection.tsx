'use client'

import { CheckCircle, Award, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CompanyStatsSection({ className = '' }: CompanyStatsSectionProps) {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const stats = [
    {
      icon: Award,
      value: '+24',
      label: translate('stats.years'),
      description: translate('stats.yearsDesc'),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: TrendingUp,
      value: '+2000',
      label: translate('stats.projects'),
      description: translate('stats.projectsDesc'),
      gradient: 'from-primary-600 to-primary-800',
    },
    {
      icon: CheckCircle,
      value: '+R$ 5bi',
      label: translate('stats.value'),
      description: translate('stats.valueDesc'),
      gradient: 'from-primary-500 to-primary-700',
    },
  ]

  const trustItems = [
    {
      title: translate('stats.quality'),
      description: translate('stats.qualityDesc'),
    },
    {
      title: translate('stats.methodology'),
      description: translate('stats.methodologyDesc'),
    },
    {
      title: translate('stats.reach'),
      description: translate('stats.reachDesc'),
    },
  ]

  return (
    <section className={`py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {translate('stats.title')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {translate('stats.subtitle')}
          </p>
        </div>

        {/* Achievement Stats - Cards com gradiente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-xl border border-gray-100 p-4 md:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-center">
                  <span className="text-2xl md:text-4xl font-bold text-gradient block mb-1 md:mb-2">
                    {stat.value}
                  </span>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{stat.label}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-6 md:p-12 shadow-xl mx-4 md:mx-0">
          <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            {translate('stats.trustTitle')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {trustItems.map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 md:p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-700" />
                </div>
                <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                <p className="text-primary-100 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface CompanyStatsSectionProps {
  className?: string
}