'use client'

import { 
  FolderKanban, 
  ClipboardList, 
  RefreshCw,
  Target,
  DollarSign,
  Clock,
  Award,
  Users,
  MessageSquare,
  Layers,
  Shield,
  ShoppingCart
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function MethodologySection() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const tools = [
    {
      title: translate('methodology.tools.cpm.title'),
      description: translate('methodology.tools.cpm.description'),
      icon: FolderKanban,
    },
    {
      title: translate('methodology.tools.pmbok.title'),
      description: translate('methodology.tools.pmbok.description'),
      icon: ClipboardList,
    },
    {
      title: translate('methodology.tools.cdio.title'),
      description: translate('methodology.tools.cdio.description'),
      icon: RefreshCw,
    },
  ]

  const phases = [
    { title: translate('methodology.phases.conception.title'), description: translate('methodology.phases.conception.description') },
    { title: translate('methodology.phases.planning.title'), description: translate('methodology.phases.planning.description') },
    { title: translate('methodology.phases.execution.title'), description: translate('methodology.phases.execution.description') },
    { title: translate('methodology.phases.control.title'), description: translate('methodology.phases.control.description') },
    { title: translate('methodology.phases.closure.title'), description: translate('methodology.phases.closure.description') },
  ]

  const areas = [
    { name: translate('methodology.areas.scope'), icon: Target },
    { name: translate('methodology.areas.cost'), icon: DollarSign },
    { name: translate('methodology.areas.schedule'), icon: Clock },
    { name: translate('methodology.areas.quality'), icon: Award },
    { name: translate('methodology.areas.hr'), icon: Users },
    { name: translate('methodology.areas.communications'), icon: MessageSquare },
    { name: translate('methodology.areas.integration'), icon: Layers },
    { name: translate('methodology.areas.risks'), icon: Shield },
    { name: translate('methodology.areas.procurement'), icon: ShoppingCart },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {translate('methodology.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            {translate('methodology.description')}
          </p>
        </div>

        {/* Tools - Horizontal Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-8 group"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Steps - Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {translate('methodology.phases.title')}
          </h3>
          
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-primary-200 hidden md:block" />
            <div className="absolute top-8 left-4 right-4 h-1 bg-primary-200 md:hidden" />
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center flex-1 relative z-10 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-primary-600 transition-all duration-300">
                    <span className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center group-hover:text-primary-600 transition-colors duration-300">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-500 text-center mt-1 max-w-[150px] group-hover:text-gray-700 transition-colors duration-300">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas Covered - Interactive Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-soft p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {translate('methodology.areas.title')}
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              {translate('methodology.areas.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area, index) => {
                const IconComponent = area.icon
                return (
                  <div 
                    key={index}
                    className="group flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-200">
                      {area.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
