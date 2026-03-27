'use client'

import BrazilHeatmap from 'react-brazil-heatmap'
import { useLanguage } from '@/context/LanguageContext'

interface Location {
  id: string
  name: string
  state: string
  isHeadquarters?: boolean
}

const locations: Location[] = [
  { id: '1', name: 'Fortaleza', state: 'CE', isHeadquarters: true },
  { id: '2', name: 'Recife', state: 'PE' },
  { id: '3', name: 'Salvador', state: 'BA' },
  { id: '4', name: 'Belo Horizonte', state: 'MG' },
  { id: '5', name: 'São Paulo', state: 'SP' },
  { id: '6', name: 'Brasília', state: 'DF' },
  { id: '7', name: 'Goiânia', state: 'GO' },
  { id: '8', name: 'Cuiabá', state: 'MT' },
  { id: '9', name: 'Curitiba', state: 'PR' },
  { id: '10', name: 'Florianópolis', state: 'SC' },
  { id: '11', name: 'Porto Alegre', state: 'RS' },
]

const data: Record<string, number> = {
  CE: 2,
  PE: 1,
  BA: 1,
  MG: 1,
  SP: 1,
  DF: 1,
  GO: 1,
  MT: 1,
  PR: 1,
  SC: 1,
  RS: 1,
}

const colorRange: [string, string] = ['#46ae4d', '#113c21']

const getStateColor = (state: string) => {
  const value = data[state] || 1
  if (value === 2) return { bg: 'bg-[#113c21]', text: 'text-white', dot: 'bg-[#113c21]' }
  return { bg: 'bg-[#2d6a3f]', text: 'text-white', dot: 'bg-[#2d6a3f]' }
}

export default function BrazilMapSection() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  return (
    <section className="py-20 bg-white overflow-hidden w-full">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translate('nationalPresence.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {translate('nationalPresence.subtitle')}
          </p>
        </div>

        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-8">
            {/* Mapa */}
            <div className="flex-1 w-full">
              <BrazilHeatmap
                data={data}
                colorRange={colorRange}
              />
            </div>

            {/* Legenda ao lado */}
            <div className="lg:w-80 w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {translate('nationalPresence.statesTitle')}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {locations.map((location) => {
                  const colors = getStateColor(location.state)
                  return (
                    <div
                      key={location.id}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm ${colors.bg} ${colors.text}`}
                    >
                      <span>{location.state}</span>
                      <span className="opacity-70 text-xs">- {location.name}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex items-center gap-2 bg-primary-50 px-4 py-3 rounded-lg">
                <span className={`w-3 h-3 rounded-full ${getStateColor('CE').dot}`}></span>
                <span className="text-sm text-gray-600">
                  <strong>{translate('nationalPresence.headquarters')}</strong> Fortaleza/CE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}